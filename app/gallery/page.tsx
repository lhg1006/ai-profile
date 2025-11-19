'use client'

import { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import {
  getGenerationById,
  getGenerationHistory,
  deleteGeneration,
  GenerationHistory
} from '@/lib/images'

export default function GalleryPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const searchParams = useSearchParams()
  const [demoUser, setDemoUser] = useState<any>(null)
  const [currentGeneration, setCurrentGeneration] = useState<GenerationHistory | null>(null)
  const [allGenerations, setAllGenerations] = useState<GenerationHistory[]>([])
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

  // 로그인 체크 (한 번만 실행)
  useEffect(() => {
    if (status === 'loading') return

    // 데모 유저 체크
    if (typeof window !== 'undefined') {
      const demo = localStorage.getItem('demo-user')
      if (demo) {
        setDemoUser(JSON.parse(demo))
      }
    }
  }, [status])

  // 인증 확인 및 리다이렉트
  useEffect(() => {
    if (status === 'loading') return

    // localStorage 직접 확인 (상태 업데이트 타이밍 문제 방지)
    const hasLocalUser = typeof window !== 'undefined' && localStorage.getItem('demo-user')

    // NextAuth 세션도 없고 데모 유저도 없으면 로그인 페이지로
    if (!session && !demoUser && !hasLocalUser) {
      router.push('/login')
    }
  }, [session, demoUser, status, router])

  // 생성 히스토리 로드
  useEffect(() => {
    if (!session && !demoUser) return

    // 생성 히스토리 불러오기
    const history = getGenerationHistory()
    setAllGenerations(history)

    // URL에서 특정 생성 ID 가져오기
    const id = searchParams.get('id')
    if (id) {
      const generation = getGenerationById(id)
      setCurrentGeneration(generation)
    } else if (history.length > 0) {
      // ID가 없으면 최신 생성 보여주기
      setCurrentGeneration(history[0])
    }
  }, [session, demoUser, searchParams])

  const handleDelete = (id: string) => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteGeneration(id)
      const history = getGenerationHistory()
      setAllGenerations(history)

      // 현재 보고 있는 것을 삭제한 경우
      if (currentGeneration?.id === id) {
        setCurrentGeneration(history.length > 0 ? history[0] : null)
      }
    }
  }

  const downloadImage = async (imageUrl: string) => {
    try {
      const response = await fetch(imageUrl)
      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)
      const a = document.createElement('a')
      a.href = url
      a.download = imageUrl.split('/').pop() || 'image.jpg'
      document.body.appendChild(a)
      a.click()
      window.URL.revokeObjectURL(url)
      document.body.removeChild(a)
    } catch (error) {
      console.error('다운로드 오류:', error)
      alert('이미지 다운로드에 실패했습니다.')
    }
  }

  // 로딩 중이거나 인증되지 않은 경우
  if (status === 'loading' || (!session && !demoUser)) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
          <p className="text-gray-600">로그인 확인 중...</p>
        </div>
      </div>
    )
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-50">
        {/* Navigation */}
        <nav className="bg-white shadow-sm">
          <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gray-800">
              AI 프로필
            </Link>
            <div className="flex items-center space-x-4">
              <Link
                href="/upload"
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 text-sm font-medium"
              >
                새로 생성하기
              </Link>
              <span className="text-sm text-gray-600">
                {session?.user?.name || demoUser?.name || '사용자'}님
              </span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              🎨 생성된 프로필 사진
            </h1>
            <p className="text-gray-600">
              AI가 생성한 전문가급 프로필 사진을 확인하고 다운로드하세요!
            </p>
          </div>

          {allGenerations.length === 0 ? (
            // 생성 히스토리가 없는 경우
            <div className="text-center py-12">
              <div className="mb-6">
                <svg className="mx-auto h-24 w-24 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-semibold text-gray-700 mb-2">
                아직 생성된 사진이 없습니다
              </h2>
              <p className="text-gray-500 mb-6">
                지금 사진을 업로드하고 AI 프로필 사진을 생성해보세요!
              </p>
              <Link
                href="/upload"
                className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 font-medium"
              >
                사진 업로드하기
              </Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              {/* 메인 갤러리 영역 */}
              <div className="lg:col-span-3">
                {currentGeneration && (
                  <div>
                    {/* 생성 정보 */}
                    <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h2 className="text-xl font-semibold text-gray-900 mb-2">
                            {new Date(currentGeneration.createdAt).toLocaleDateString('ko-KR', {
                              year: 'numeric',
                              month: 'long',
                              day: 'numeric',
                              hour: '2-digit',
                              minute: '2-digit'
                            })}
                          </h2>
                          <p className="text-gray-600">
                            원본 {currentGeneration.originalCount}장 → 생성 {currentGeneration.images.length}장
                          </p>
                        </div>
                        <button
                          onClick={() => handleDelete(currentGeneration.id)}
                          className="text-red-600 hover:text-red-700 text-sm font-medium"
                        >
                          삭제
                        </button>
                      </div>
                    </div>

                    {/* 이미지 그리드 */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {currentGeneration.images.map((imageUrl, index) => (
                        <motion.div
                          key={index}
                          className="relative group cursor-pointer"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: index * 0.05 }}
                          whileHover={{ scale: 1.05 }}
                          onClick={() => setSelectedImage(imageUrl)}
                        >
                          <div className="aspect-square rounded-lg overflow-hidden bg-gray-100">
                            <img
                              src={imageUrl}
                              alt={`Generated ${index + 1}`}
                              className="w-full h-full object-cover"
                            />
                          </div>

                          {/* 호버 시 다운로드 버튼 */}
                          <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all rounded-lg flex items-center justify-center">
                            <button
                              onClick={(e) => {
                                e.stopPropagation()
                                downloadImage(imageUrl)
                              }}
                              className="opacity-0 group-hover:opacity-100 bg-white text-gray-800 px-4 py-2 rounded-lg font-medium text-sm transform transition-all"
                            >
                              다운로드
                            </button>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* 사이드바 - 히스토리 */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-lg shadow-sm p-6">
                  <h3 className="font-semibold text-gray-900 mb-4">생성 히스토리</h3>
                  <div className="space-y-3">
                    {allGenerations.map((gen) => (
                      <button
                        key={gen.id}
                        onClick={() => setCurrentGeneration(gen)}
                        className={`w-full text-left p-3 rounded-lg border transition-all ${
                          currentGeneration?.id === gen.id
                            ? 'border-indigo-600 bg-indigo-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="text-sm font-medium text-gray-900">
                          {new Date(gen.createdAt).toLocaleDateString('ko-KR', {
                            month: 'short',
                            day: 'numeric'
                          })}
                        </div>
                        <div className="text-xs text-gray-500 mt-1">
                          {gen.images.length}장 생성
                        </div>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 이미지 상세 모달 */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-[90vh]">
              <img
                src={selectedImage}
                alt="상세 보기"
                className="max-w-full max-h-[90vh] object-contain rounded-lg"
                onClick={(e) => e.stopPropagation()}
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 bg-white text-gray-800 rounded-full w-10 h-10 flex items-center justify-center hover:bg-gray-100"
              >
                ✕
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  downloadImage(selectedImage)
                }}
                className="absolute bottom-4 right-4 bg-indigo-600 text-white px-6 py-2 rounded-lg hover:bg-indigo-700"
              >
                다운로드
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </PageWrapper>
  )
}
