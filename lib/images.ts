// 생성된 이미지 인터페이스
export interface GeneratedImage {
  id: string
  url: string
  createdAt: Date
  originalCount: number
}

// 생성 히스토리 인터페이스
export interface GenerationHistory {
  id: string
  images: string[]
  createdAt: Date
  originalCount: number
}

// LocalStorage 키
const STORAGE_KEY = 'ai_profile_history'

// 생성 히스토리 저장
export function saveGenerationHistory(images: string[], originalCount: number): string {
  const history = getGenerationHistory()

  const newGeneration: GenerationHistory = {
    id: Date.now().toString(),
    images,
    createdAt: new Date(),
    originalCount
  }

  history.unshift(newGeneration) // 최신이 맨 앞에

  // 최대 10개까지만 저장
  if (history.length > 10) {
    history.splice(10)
  }

  localStorage.setItem(STORAGE_KEY, JSON.stringify(history))

  return newGeneration.id
}

// 생성 히스토리 가져오기
export function getGenerationHistory(): GenerationHistory[] {
  if (typeof window === 'undefined') return []

  const data = localStorage.getItem(STORAGE_KEY)
  if (!data) return []

  try {
    const history = JSON.parse(data)
    // Date 객체로 변환
    return history.map((item: any) => ({
      ...item,
      createdAt: new Date(item.createdAt)
    }))
  } catch {
    return []
  }
}

// 최근 생성된 이미지 가져오기
export function getLatestGeneration(): GenerationHistory | null {
  const history = getGenerationHistory()
  return history.length > 0 ? history[0] : null
}

// 특정 생성 히스토리 가져오기
export function getGenerationById(id: string): GenerationHistory | null {
  const history = getGenerationHistory()
  return history.find(item => item.id === id) || null
}

// 생성 히스토리 삭제
export function deleteGeneration(id: string): void {
  const history = getGenerationHistory()
  const filtered = history.filter(item => item.id !== id)
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filtered))
}

// 전체 히스토리 삭제
export function clearAllHistory(): void {
  localStorage.removeItem(STORAGE_KEY)
}

// 총 생성된 이미지 수
export function getTotalGeneratedCount(): number {
  const history = getGenerationHistory()
  return history.reduce((sum, item) => sum + item.images.length, 0)
}
