import { NextRequest, NextResponse } from 'next/server'
import { writeFile, mkdir } from 'fs/promises'
import { join } from 'path'
import { existsSync } from 'fs'

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const files = formData.getAll('images') as File[]

    if (!files || files.length === 0) {
      return NextResponse.json(
        { error: '이미지를 업로드해주세요.' },
        { status: 400 }
      )
    }

    // public/generated 디렉토리 생성
    const generatedDir = join(process.cwd(), 'public', 'generated')
    if (!existsSync(generatedDir)) {
      await mkdir(generatedDir, { recursive: true })
    }

    // 생성된 이미지 URL 배열
    const generatedImages: string[] = []
    const timestamp = Date.now()

    // 각 업로드된 이미지당 3개씩 생성 (1:3 비율)
    for (let i = 0; i < files.length; i++) {
      const file = files[i]
      const bytes = await file.arrayBuffer()
      const buffer = Buffer.from(bytes)

      // 각 원본 이미지당 3개의 변형 생성
      for (let j = 1; j <= 3; j++) {
        const filename = `${timestamp}_${i}_${j}.${file.name.split('.').pop()}`
        const filepath = join(generatedDir, filename)

        // 현재는 원본 이미지를 복사 (나중에 AI 생성으로 교체)
        await writeFile(filepath, buffer)

        generatedImages.push(`/generated/${filename}`)
      }
    }

    // 생성 완료 후 약간의 지연 (실제 AI 생성 시뮬레이션)
    await new Promise(resolve => setTimeout(resolve, 2000))

    return NextResponse.json({
      success: true,
      images: generatedImages,
      count: generatedImages.length,
      message: `${files.length}장의 사진으로 ${generatedImages.length}장의 프로필 사진이 생성되었습니다.`
    })

  } catch (error) {
    console.error('이미지 생성 오류:', error)
    return NextResponse.json(
      { error: '이미지 생성 중 오류가 발생했습니다.' },
      { status: 500 }
    )
  }
}
