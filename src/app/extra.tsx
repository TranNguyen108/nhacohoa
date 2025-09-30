'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'
import { Heart, Star, X, Phone, MessageCircle, Instagram } from 'lucide-react'

export default function Extra() {
  const [showContactModal, setShowContactModal] = useState(false)

  const benefits = [
    {
      icon: Heart,
      title: "Thiết kế theo yêu cầu",
      description: "Tạo ra những bó hoa độc đáo theo sở thích và ý tưởng của bạn"
    },
    {
      icon: Star,
      title: "Chất lượng cao cấp",
      description: "Sử dụng hoa tươi nhập khẩu và kỹ thuật cắm hoa chuyên nghiệp"
    },
    {
      icon: Heart,
      title: "Tư vấn miễn phí",
      description: "Đội ngũ chuyên gia sẵn sàng tư vấn và hỗ trợ 24/7"
    },
    {
      icon: Star,
      title: "Giao hàng nhanh chóng",
      description: "Cam kết giao hàng đúng hẹn trong khu vực TP.HCM"
    }
  ]

  return (
    <section id="extra" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-pink-50 via-rose-50 to-pink-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-4" 
              style={{ fontFamily: "'Unfolding Flower', serif" }}>
            Đặt Hoa Theo Yêu Cầu
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Chỉ từ 79k - Tạo nên những bó hoa độc đáo theo ý tưởng của bạn
          </p>
        </motion.div>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 xl:gap-16 items-center mb-16"
        >
          {/* Left Content - Text */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 lg:order-1"
          >
            <div className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-3xl p-6 sm:p-8 lg:p-10 text-white shadow-2xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-2" 
                  style={{ fontFamily: "'Unfolding Flower', serif" }}>
                Đặt Hoa Theo Yêu Cầu
              </h3>
              
              <div className="mb-4">
                <span className="text-3xl sm:text-4xl font-bold">Chỉ từ 79k</span>
                <span className="text-lg ml-2 line-through opacity-75">120k</span>
              </div>
              
              <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm sm:text-base">Thiết kế độc đáo theo ý tưởng của bạn</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm sm:text-base">Chọn loại hoa, màu sắc và phong cách riêng</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm sm:text-base">Phù hợp với mọi dịp: sinh nhật, kỷ niệm, cầu hôn</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm sm:text-base">Tư vấn miễn phí từ Nhà Có Hoa</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm sm:text-base">Cam kết chất lượng hoa tươi 100%</p>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-white rounded-full mt-2 flex-shrink-0"></div>
                  <p className="text-white/90 text-sm sm:text-base">Giao hàng nhanh tại TP.HCM</p>
                </div>
              </div>

              {/* CTA Button */}
              <button
                onClick={() => setShowContactModal(true)}
                className="w-full bg-white hover:bg-pink-50 text-pink-500 font-bold py-3 sm:py-4 px-6 rounded-2xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                ĐặT NGAY - CHỈ TỪ 79K
              </button>
            </div>
          </motion.div>

          {/* Right Content - Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              {/* Main Image Container */}
              <div className="relative h-64 sm:h-80 lg:h-96 xl:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/img/custom-bouquet.jpg"
                  alt="Custom Flower Arrangement"
                  fill
                  className="object-cover"
                />
                
                {/* Overlay gradient for better text visibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <Heart className="w-8 h-8 text-pink-500 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-gray-800">Tự thiết kế</p>
                </div>
              </motion.div>

              <motion.div
                animate={{ 
                  y: [0, 10, 0],
                  rotate: [0, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1
                }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl"
              >
                <div className="text-center">
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-xs font-semibold text-gray-800">Cao cấp</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Tại sao chọn chúng mình?
            </h3>
            <p className="text-gray-600 text-base sm:text-lg max-w-2xl mx-auto">
              Chúng mình mang đến trải nghiệm đặt hoa tuyệt vời nhất cho bạn
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center group hover:scale-105"
              >
                <div className="mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <benefit.icon className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="font-semibold text-gray-900 mb-2">{benefit.title}</h4>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-gradient-to-br from-pink-400 to-rose-500 rounded-2xl sm:rounded-3xl max-w-4xl w-full max-h-[95vh] overflow-y-auto p-4 sm:p-6 lg:p-8 shadow-2xl relative mx-1 sm:mx-2"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-3 sm:top-4 right-3 sm:right-4 p-2 hover:bg-white/20 rounded-full transition-colors z-10 bg-white/10 backdrop-blur-sm"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </button>


              
              {/* Left - Contact Info */}
              <div className="lg:col-span-2">
                <div className="bg-white/90 backdrop-blur-sm rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8">
                  <div className="mb-4 sm:mb-6">
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2" 
                        style={{ fontFamily: "'Unfolding Flower', serif" }}>
                      Liên hệ đặt hoa
                    </h3>
                    <p className="text-gray-600 text-sm sm:text-base">
                      Chúng tôi luôn sẵn sàng hỗ trợ và tư vấn cho bạn
                    </p>
                  </div>

                  <div className="space-y-3 sm:space-y-4">
                    {/* Phone/Zalo */}
                    <a
                      href="tel:0584978168"
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-green-50 hover:bg-green-100 rounded-xl sm:rounded-2xl transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Hotline/Zalo</p>
                        <p className="text-green-600 font-bold text-sm sm:text-base">0584.978.168</p>
                        <p className="text-xs text-gray-500">Nhấn để gọi ngay</p>
                      </div>
                    </a>

                    {/* Email */}
                    <a
                      href="mailto:nhacohoa.contact.25@gmail.com"
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-xl sm:rounded-2xl transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Email</p>
                        <p className="text-blue-600 font-bold text-xs sm:text-base break-all">nhacohoa.contact.25@gmail.com</p>
                        <p className="text-xs text-gray-500">Phản hồi trong 24h</p>
                      </div>
                    </a>

                    {/* Facebook */}
                    <a
                      href="https://www.facebook.com/nhacohoa.25"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-blue-50 hover:bg-blue-100 rounded-xl sm:rounded-2xl transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Facebook</p>
                        <p className="text-blue-600 font-bold text-sm sm:text-base">@nhacohoa.25</p>
                        <p className="text-xs text-gray-500">Nhắn tin Messenger</p>
                      </div>
                    </a>

                    {/* Instagram */}
                    <a
                      href="https://www.instagram.com/nhacohoa.25/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 sm:space-x-4 p-3 sm:p-4 bg-pink-50 hover:bg-pink-100 rounded-xl sm:rounded-2xl transition-colors duration-200 group"
                    >
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                        <Instagram className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-gray-800 text-sm sm:text-base">Instagram</p>
                        <p className="text-pink-600 font-bold text-sm sm:text-base">@nhacohoa.25</p>
                        <p className="text-xs text-gray-500">Follow để xem thêm mẫu</p>
                      </div>
                    </a>

                    {/* Close Button for Mobile */}
                    <button
                      onClick={() => setShowContactModal(false)}
                      className="w-full mt-4 lg:hidden bg-gray-100 hover:bg-gray-200 text-gray-700 py-3 px-4 rounded-xl font-medium transition-colors duration-200 text-sm"
                    >
                      Đóng
                    </button>
                  </div>
                </div>
              </div>

          </motion.div>
        </div>
      )}
    </section>
  )
}