'use client'

import { useState, useRef, useEffect } from 'react'
import Link from 'next/link'
import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'

interface Message {
  id: string
  text: string
  isUser: boolean
  timestamp: Date
}

interface FAQ {
  question: string
  answer: string
  keywords: string[]
}

const FAQ_DATA: FAQ[] = [
  {
    question: "AI 프로필 사진 생성은 얼마나 걸리나요?",
    answer: "보통 20-30분 정도 소요됩니다. 업로드한 사진의 수와 서버 상황에 따라 다를 수 있어요. 생성이 완료되면 이메일로 알림을 보내드립니다!",
    keywords: ["시간", "걸리", "소요", "얼마나", "언제", "완료"]
  },
  {
    question: "코인은 어떻게 사용하나요?",
    answer: "코인은 사진 생성에 사용됩니다. 사진 1장당 10코인이 필요하고, 1:3 비율로 3장의 AI 사진을 받을 수 있어요. 프리미엄 품질은 15코인입니다.",
    keywords: ["코인", "사용", "비율", "가격", "얼마", "필요"]
  },
  {
    question: "어떤 사진을 업로드해야 하나요?",
    answer: "다양한 각도의 셀카를 5-15장 업로드해주세요. 정면, 측면, 다양한 표정의 사진이 있으면 더 좋은 결과를 얻을 수 있습니다. 얼굴이 선명하고 조명이 좋은 사진을 선택해주세요!",
    keywords: ["사진", "업로드", "셀카", "어떤", "종류", "각도", "품질"]
  },
  {
    question: "결제는 어떻게 하나요?",
    answer: "현재는 데모 버전으로 실제 결제는 진행되지 않습니다. 실제 서비스에서는 토스페이먼츠, 카카오페이, 신용카드 등 다양한 결제 수단을 지원할 예정입니다.",
    keywords: ["결제", "결제수단", "카드", "토스", "카카오페이", "결제방법"]
  },
  {
    question: "개인정보는 안전한가요?",
    answer: "네, 안전합니다! 업로드된 사진은 AI 생성 완료 후 자동으로 삭제되며, 개인정보는 암호화되어 보호됩니다. 생성된 프로필 사진은 본인만 다운로드할 수 있어요.",
    keywords: ["개인정보", "안전", "보안", "삭제", "프라이버시", "보호"]
  },
  {
    question: "환불은 가능한가요?",
    answer: "AI 생성이 시작되기 전까지는 100% 환불 가능합니다. 생성 중이거나 완료된 후에는 부분 환불이 가능하며, 고객센터로 문의해주시면 개별적으로 검토해드립니다.",
    keywords: ["환불", "취소", "돈", "반환", "가능"]
  },
  {
    question: "생성된 사진의 품질이 마음에 들지 않아요.",
    answer: "품질에 만족하지 않으시면 무료로 1회 재생성해드립니다! 더 좋은 결과를 위해 다양한 각도의 고화질 사진을 업로드해주시거나, 프리미엄 옵션을 선택해보세요.",
    keywords: ["품질", "마음에", "안들", "재생성", "다시", "불만족"]
  },
  {
    question: "회원탈퇴는 어떻게 하나요?",
    answer: "마이페이지에서 회원탈퇴를 할 수 있습니다. 탈퇴 시 모든 개인정보와 생성된 사진이 완전히 삭제됩니다. 단, 사용하지 않은 코인은 환불되지 않으니 참고해주세요.",
    keywords: ["탈퇴", "회원탈퇴", "계정삭제", "나가기"]
  }
]

export default function ContactPage() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: '안녕하세요! AI 프로필 고객센터입니다. 😊\n궁금한 것이 있으시면 언제든 물어보세요!',
      isUser: false,
      timestamp: new Date()
    }
  ])
  const [inputText, setInputText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const findBestMatch = (userInput: string): FAQ | null => {
    const input = userInput.toLowerCase()
    let bestMatch: FAQ | null = null
    let maxScore = 0

    FAQ_DATA.forEach(faq => {
      let score = 0
      faq.keywords.forEach(keyword => {
        if (input.includes(keyword)) {
          score += 1
        }
      })
      
      // 질문과 직접 매칭도 확인
      if (input.includes(faq.question.toLowerCase().slice(0, 5))) {
        score += 2
      }

      if (score > maxScore) {
        maxScore = score
        bestMatch = faq
      }
    })

    return maxScore > 0 ? bestMatch : null
  }

  const generateBotResponse = (userInput: string): string => {
    const match = findBestMatch(userInput)
    
    if (match) {
      return match.answer
    }

    // 기본 응답들
    if (userInput.includes('안녕') || userInput.includes('hi') || userInput.includes('hello')) {
      return '안녕하세요! 무엇을 도와드릴까요? 😊'
    }

    if (userInput.includes('감사') || userInput.includes('고마워')) {
      return '도움이 되어서 기쁩니다! 다른 궁금한 것이 있으시면 언제든 물어보세요. 😊'
    }

    // 매칭되지 않은 경우
    return `죄송합니다. "${userInput}"에 대한 정확한 답변을 찾지 못했어요. 😅\n\n자주 묻는 질문들을 확인해보시거나, 더 구체적으로 질문해주시면 도움드릴게요!\n\n📧 직접 문의: support@aiprofile.kr\n📞 고객센터: 1588-1234`
  }

  const handleSendMessage = async () => {
    if (!inputText.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputText,
      isUser: true,
      timestamp: new Date()
    }

    setMessages(prev => [...prev, userMessage])
    setInputText('')
    setIsTyping(true)

    // 봇 응답 지연 (실제 채팅 느낌)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(inputText),
        isUser: false,
        timestamp: new Date()
      }
      setMessages(prev => [...prev, botResponse])
      setIsTyping(false)
    }, 1000 + Math.random() * 1000) // 1-2초 랜덤 지연
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault()
      handleSendMessage()
    }
  }

  const handleQuickQuestion = (question: string) => {
    setInputText(question)
    setTimeout(() => handleSendMessage(), 100)
  }

  return (
    <PageWrapper>
      <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 py-4">
          <Link href="/" className="text-xl sm:text-2xl font-bold text-gray-800">
            AI 프로필
          </Link>
        </div>
      </nav>

      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              고객센터 💬
            </h1>
            <p className="text-sm sm:text-base text-gray-600">
              궁금한 점이 있으시면 언제든 물어보세요!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Chat Area */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                {/* Chat Header */}
                <div className="bg-indigo-600 text-white p-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center">
                      🤖
                    </div>
                    <div>
                      <h3 className="font-semibold">AI 프로필 봇</h3>
                      <p className="text-indigo-100 text-sm">온라인</p>
                    </div>
                  </div>
                </div>

                {/* Messages */}
                <div className="h-96 sm:h-[500px] overflow-y-auto p-4 space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-xs sm:max-w-md px-4 py-2 rounded-lg ${
                          message.isUser
                            ? 'bg-indigo-600 text-white'
                            : 'bg-gray-200 text-gray-800'
                        }`}
                      >
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.isUser ? 'text-indigo-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString('ko-KR', { 
                            hour: '2-digit', 
                            minute: '2-digit' 
                          })}
                        </p>
                      </div>
                    </div>
                  ))}

                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg">
                        <div className="flex space-x-1">
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                          <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div className="border-t p-4">
                  <div className="flex space-x-2">
                    <input
                      type="text"
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="궁금한 점을 물어보세요..."
                      className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm"
                    />
                    <button
                      onClick={handleSendMessage}
                      disabled={!inputText.trim() || isTyping}
                      className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* FAQ Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  자주 묻는 질문 🤔
                </h3>
                <div className="space-y-3">
                  {FAQ_DATA.slice(0, 6).map((faq, index) => (
                    <button
                      key={index}
                      onClick={() => handleQuickQuestion(faq.question)}
                      className="w-full text-left p-3 bg-gray-50 hover:bg-indigo-50 rounded-lg transition-colors text-sm"
                    >
                      <div className="font-medium text-gray-800 mb-1">
                        {faq.question}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Contact Info */}
                <div className="mt-8 p-4 bg-indigo-50 rounded-lg">
                  <h4 className="font-semibold text-indigo-900 mb-2">직접 연락</h4>
                  <div className="text-sm text-indigo-800 space-y-1">
                    <p>📧 support@aiprofile.kr</p>
                    <p>📞 1588-1234</p>
                    <p>⏰ 평일 9:00-18:00</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Back Button */}
          <div className="mt-8 text-center">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-gray-800 text-sm sm:text-base"
            >
              ← 홈으로 돌아가기
            </Link>
          </div>
        </div>
      </div>
      </div>
    </PageWrapper>
  )
}