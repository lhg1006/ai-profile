'use client'

import { useState, useCallback, useEffect } from 'react'
import { useDropzone } from 'react-dropzone'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { getUserCoins, COIN_COSTS } from '@/lib/coins'

export default function UploadPage() {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [demoUser, setDemoUser] = useState<any>(null)
  const [files, setFiles] = useState<File[]>([])
  const [uploading, setUploading] = useState(false)
  const [previews, setPreviews] = useState<string[]>([])

  const onDrop = useCallback((acceptedFiles: File[]) => {
    if (files.length + acceptedFiles.length > 15) {
      alert('최대 15장까지 업로드 가능합니다')
      return
    }

    setFiles(prev => [...prev, ...acceptedFiles])
    
    // Generate previews
    acceptedFiles.forEach(file => {
      const reader = new FileReader()
      reader.onload = () => {
        setPreviews(prev => [...prev, reader.result as string])
      }
      reader.readAsDataURL(file)
    })
  }, [files])

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: true
  })

  const removeFile = (index: number) => {
    const newFiles = [...files]
    const newPreviews = [...previews]
    newFiles.splice(index, 1)
    newPreviews.splice(index, 1)
    setFiles(newFiles)
    setPreviews(newPreviews)
  }

  const handleUpload = async () => {
    if (files.length < 5) {
      alert('최소 5장의 사진을 업로드해주세요')
      return
    }

    const totalCost = files.length * 10 // 사진 1장당 10 코인
    const currentCoins = getUserCoins()
    
    if (currentCoins < totalCost) {
      alert(`코인이 부족합니다! 필요 코인: ${totalCost}, 현재 코인: ${currentCoins}`)
      return
    }

    setUploading(true)
    // TODO: Implement actual upload logic
    setTimeout(() => {
      setUploading(false)
      alert(`${files.length}장 업로드 → ${files.length * 3}장 생성됩니다! (${totalCost} 코인 차감)`)
      // TODO: Redirect to generation results page
    }, 2000)
  }

  useEffect(() => {
    // 로그인 체크
    if (status === 'loading') return // 아직 로딩 중

    // 데모 유저 체크
    if (typeof window !== 'undefined') {
      const demo = localStorage.getItem('demo-user')
      if (demo) {
        setDemoUser(JSON.parse(demo))
        return
      }
    }

    // NextAuth 세션도 없고 데모 유저도 없으면 로그인 페이지로
    if (!session && !demoUser) {
      router.push('/login')
    }
  }, [session, status, router, demoUser])

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
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            AI 프로필
          </Link>
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-600">
              안녕하세요, {session?.user?.name || demoUser?.name || '사용자'}님!
            </span>
            <button
              onClick={() => {
                if (session) {
                  // NextAuth 로그아웃
                } else {
                  localStorage.removeItem('demo-user')
                  router.push('/')
                }
              }}
              className="text-sm text-gray-500 hover:text-gray-700"
            >
              로그아웃
            </button>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8 sm:mb-12">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              사진 업로드
            </h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              다양한 각도의 셀카 5-15장을 업로드하세요. 
              <span className="font-semibold text-indigo-600">업로드한 사진 1장당 3장의 AI 프로필 사진</span>이 생성됩니다.
            </p>
            <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-lg p-3 max-w-sm mx-auto">
              <div className="text-center text-xs sm:text-sm text-yellow-800">
                💡 <strong>1:3 생성 비율</strong> - 사진 1장당 10 코인 
              </div>
            </div>
          </div>

          {/* Upload Instructions */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 mx-4 sm:mx-0">
            <h3 className="font-semibold text-blue-900 mb-3 text-sm sm:text-base">📸 최고 결과를 위한 사진 팁:</h3>
            <ul className="text-blue-800 space-y-1 text-xs sm:text-sm">
              <li>• 다양한 각도의 사진 사용 (정면, 살짝 왼쪽, 살짝 오른쪽)</li>
              <li>• 다양한 표정의 사진 포함 (미소, 무표정, 진지함)</li>
              <li>• 좋은 조명 확보 - 얼굴에 그림자 피하기</li>
              <li>• 얼굴이 명확하게 보이고 흘리지 않을 것</li>
              <li>• 선글라스나 얼굴을 가리는 물체 피하기</li>
            </ul>
          </div>

          {/* Drag and Drop Area */}
          <div className="bg-white rounded-xl shadow-sm border-2 border-dashed border-gray-300 p-6 sm:p-8 md:p-12 text-center mb-6 sm:mb-8 mx-4 sm:mx-0 hover:border-indigo-400 transition-colors">
            <div {...getRootProps()} className="cursor-pointer">
              <input {...getInputProps()} />
              <div className="mb-4">
                <svg className="mx-auto h-12 w-12 sm:h-16 sm:w-16 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              {isDragActive ? (
                <p className="text-base sm:text-lg text-indigo-600">여기에 사진을 끌어다 놓으세요...</p>
              ) : (
                <div>
                  <p className="text-base sm:text-lg text-gray-600 mb-2 px-4">
                    사진을 여기에 끌어다 놓거나 <span className="text-indigo-600 font-semibold">클릭하여 찾아보기</span>
                  </p>
                  <p className="text-xs sm:text-sm text-gray-500">
                    JPG, JPEG, PNG, WEBP 파일 지원 • {files.length}/15장 업로드 완료
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Photo Previews Grid */}
          {previews.length > 0 && (
            <div className="mb-6 sm:mb-8 mx-4 sm:mx-0">
              <h3 className="text-base sm:text-lg font-semibold mb-4">업로드된 사진 ({files.length}장)</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-4">
                {previews.map((preview, index) => (
                  <div key={index} className="relative group">
                    <img
                      src={preview}
                      alt={`Upload ${index + 1}`}
                      className="w-full h-24 sm:h-32 object-cover rounded-lg"
                    />
                    <button
                      onClick={() => removeFile(index)}
                      className="absolute top-1 right-1 sm:top-2 sm:right-2 bg-red-500 text-white rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center text-xs sm:text-sm opacity-0 group-hover:opacity-100 transition-opacity"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Progress Indicator */}
          <div className="bg-white rounded-lg p-4 sm:p-6 mb-6 sm:mb-8 mx-4 sm:mx-0">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm font-medium text-gray-700">업로드된 사진</span>
              <span className="text-xs sm:text-sm font-medium text-gray-700">{files.length}/15장</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-indigo-600 h-2 rounded-full transition-all duration-300" 
                style={{ width: `${Math.min((files.length / 5) * 100, 100)}%` }}
              ></div>
            </div>
            <p className="text-xs text-gray-500 mt-1">
              {files.length < 5 ? `최소 ${5 - files.length}장 더 필요` : `${files.length}장 → ${files.length * 3}장 생성 예정!`}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="px-4 sm:px-0">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-gray-800 font-medium text-sm sm:text-base order-2 sm:order-1"
              >
                ← 홈으로 돌아가기
              </Link>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 w-full sm:w-auto order-1 sm:order-2">
                <button
                  onClick={() => {
                    setFiles([])
                    setPreviews([])
                  }}
                  className="px-4 sm:px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium text-sm sm:text-base"
                  disabled={files.length === 0}
                >
                  모두 삭제
                </button>
                <button
                  onClick={handleUpload}
                  disabled={files.length < 5 || uploading}
                  className="px-6 sm:px-8 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  {uploading ? '처리 중...' : `${files.length}장 업로드 (${files.length * 10} 코인)`}
                </button>
              </div>
            </div>
          </div>

          {/* Free Trial Notice */}
          <div className="mt-8 sm:mt-12 bg-gradient-to-r from-green-50 to-blue-50 border border-green-200 rounded-lg p-4 sm:p-6 text-center mx-4 sm:mx-0">
            <h3 className="font-semibold text-green-900 mb-2 text-sm sm:text-base">🎉 신규 가입 10코인 무료!</h3>
            <p className="text-green-800 text-xs sm:text-sm">
              지금 가입하면 10코인을 무료로 드립니다! 1장 업로드로 3장의 전문가급 프로필 사진을 바로 생성할 수 있어요.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}