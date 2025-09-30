'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'
import Image from 'next/image'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Thời gian và địa điểm giao hoa như thế nào?",
      answer: "Chúng tôi giao hoa trong khu vực TP.HCM từ 8:00 - 22:00 hàng ngày. Thời gian chuẩn bị tùy độ phức tạp của thiết kế."
    },
    {
      question: "Thời gian nhận và giao như thế nào?",
      answer: "Số lượng đơn lớn, nhận đơn trước 6h chiều hàng ngày, sau 6h chuyển đơn sang hôm sau hôm kia mới có thể giao hoa (hoặc ib để xem có thể nhận đơn không)"
    },
    {
      question: "Tôi có thể đặt hoa theo nhóm được không?",
      answer: "Có, chúng tôi nhận đặt hoa theo nhóm với số lượng lớn. Liên hệ trước ít nhất 1 ngày để được tư vấn và báo giá ưu đãi."
    },
    {
      question: "Làm thế nào để đặt hoa theo yêu cầu?",
      answer: "Bạn có thể liên hệ qua hotline, Zalo, hoặc Facebook Messenger. Cung cấp mô tả chi tiết về thiết kế mong muốn và chúng tôi sẽ tư vấn."
    },
    {
      question: "Tôi cần chuẩn bị gì khi đặt hoa?",
      answer: "Bạn cần chuẩn bị ý tưởng thiết kế, màu sắc yêu thích, ngân sách dự kiến và thời gian nhận hoa. Chúng tôi sẽ hỗ trợ tư vấn chi tiết."
    }
  ]

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-start">
          
          {/* Left Side - FAQ List */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            {/* Header */}
            <div className="mb-8 lg:mb-12">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4" 
                  style={{ fontFamily: "'Unfolding Flower', serif" }}>
                FAQ
                <br />
              </h2>
              <div className="w-20 h-1 bg-pink-400 rounded-full"></div>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-4 sm:py-5 text-left hover:bg-pink-50/50 transition-colors duration-200 flex items-center justify-between"
                  >
                    <span className="text-base sm:text-lg font-semibold text-gray-800 pr-4">
                      {faq.question}
                    </span>
                    <div className="flex-shrink-0 w-8 h-8 bg-pink-500 rounded-full flex items-center justify-center">
                      {openIndex === index ? (
                        <ChevronUp className="w-5 h-5 text-white" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-white" />
                      )}
                    </div>
                  </button>
                  
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="px-6 pb-5"
                    >
                      <div className="border-t border-pink-200 pt-4">
                        <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image */}
              <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/faq-flower-arrangement.jpg"
                  alt="Beautiful flower arrangement"
                  fill
                  className="object-cover"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating decorative elements */}
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  rotate: [0, 10, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-6 -right-6 bg-white rounded-3xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">?</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Hỗ trợ 24/7</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 15, 0],
                  rotate: [0, -10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-6 -left-6 bg-white rounded-3xl p-6 shadow-xl"
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-rose-500 rounded-full flex items-center justify-center mx-auto mb-3">
                    <span className="text-white font-bold text-lg">✓</span>
                  </div>
                  <p className="text-xs font-semibold text-gray-800">Đảm bảo chất lượng</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}