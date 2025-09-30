'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { X, Menu, Phone, Instagram, Mail, Facebook } from 'lucide-react'
import { useState, useEffect } from 'react'
import Products from './products'
import Extra from './extra'
import FAQ from './faq'
import Footer from './footer'
import Introduction from './introduction'

export default function Home() {
  const [showPriceModal, setShowPriceModal] = useState(false)
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen">
      {/* Enhanced Glass Header */}
      <header className="fixed top-0 left-0 right-0 z-50">
        <div className="w-full px-1 lg:px-8 xl:px-16 2xl:px-24 pt-1 lg:pt-3">
          <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`backdrop-blur-lg border border-white/20 rounded-lg lg:rounded-xl shadow-2xl transition-all duration-300 ${
              isScrolled 
                ? 'bg-white/95 border-gray-200/50' 
                : 'bg-white/10 border-white/20'
            }`}
          >
            <div className="flex items-center justify-between px-2 lg:px-6 xl:px-8 py-1.5 lg:py-3">
              {/* Logo và tên shop */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex items-center space-x-1 lg:space-x-3 flex-shrink-0"
              >
                <Image
                  src="/img/logo.jpg"
                  alt="Nhà Có Hoa Logo"
                  width={24}
                  height={24}
                  className="w-6 h-6 lg:w-12 lg:h-12 xl:w-14 xl:h-14 rounded-full border border-white/30 lg:border-2 shadow-lg"
                />
                <div className="min-w-0">
                  <h2 className={`text-xs lg:text-xl xl:text-2xl font-bold transition-colors duration-300 truncate ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`} style={{ fontFamily: "'Unfolding Flower', serif" }}>
                    Nhà Có Hoa
                  </h2>
                </div>
              </motion.div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex space-x-6 xl:space-x-8">
                <a href="#" className={`hover:scale-105 transition-all duration-200 font-medium text-base xl:text-lg whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-pink-600' 
                    : 'text-white/90 hover:text-white'
                }`}>
                  Trang chủ
                </a>
                <a href="#products" className={`hover:scale-105 transition-all duration-200 font-medium text-base xl:text-lg whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-pink-600' 
                    : 'text-white/90 hover:text-white'
                }`}>
                  Sản phẩm
                </a>
                <a href="#extra" className={`hover:scale-105 transition-all duration-200 font-medium text-base xl:text-lg whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-pink-600' 
                    : 'text-white/90 hover:text-white'
                }`}>
                  Theo yêu cầu
                </a>
                <a href="#faq" className={`hover:scale-105 transition-all duration-200 font-medium text-base xl:text-lg whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-pink-600' 
                    : 'text-white/90 hover:text-white'
                }`}>
                  FAQ
                </a>
                <button 
                  onClick={() => setShowContactModal(true)}
                  className={`hover:scale-105 transition-all duration-200 font-medium text-base xl:text-lg whitespace-nowrap ${
                  isScrolled 
                    ? 'text-gray-700 hover:text-pink-600' 
                    : 'text-white/90 hover:text-white'
                }`}>
                  Liên hệ
                </button>
              </nav>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setShowMobileMenu(!showMobileMenu)}
                className={`lg:hidden p-1 rounded transition-all duration-200 flex-shrink-0 ${
                  isScrolled 
                    ? 'text-gray-700 hover:bg-gray-100' 
                    : 'text-white hover:bg-white/20'
                }`}
              >
                <Menu className="w-4 h-4" />
              </button>
            </div>

            {/* Mobile Menu */}
            {showMobileMenu && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className={`lg:hidden border-t overflow-hidden ${
                  isScrolled ? 'border-gray-200' : 'border-white/20'
                }`}
              >
                <nav className="px-2 py-2 space-y-1">
                  <a 
                    href="#" 
                    onClick={() => setShowMobileMenu(false)}
                    className={`block py-1.5 px-2 rounded font-medium transition-all duration-200 text-xs ${
                      isScrolled 
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-pink-600' 
                        : 'text-white/90 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    Trang chủ
                  </a>
                  <a 
                    href="#products" 
                    onClick={() => setShowMobileMenu(false)}
                    className={`block py-1.5 px-2 rounded font-medium transition-all duration-200 text-xs ${
                      isScrolled 
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-pink-600' 
                        : 'text-white/90 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    Sản phẩm
                  </a>
                  <a 
                    href="#extra" 
                    onClick={() => setShowMobileMenu(false)}
                    className={`block py-1.5 px-2 rounded font-medium transition-all duration-200 text-xs ${
                      isScrolled 
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-pink-600' 
                        : 'text-white/90 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    Theo yêu cầu
                  </a>
                  <a 
                    href="#faq" 
                    onClick={() => setShowMobileMenu(false)}
                    className={`block py-1.5 px-2 rounded font-medium transition-all duration-200 text-xs ${
                      isScrolled 
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-pink-600' 
                        : 'text-white/90 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    FAQ
                  </a>
                  <button 
                    onClick={() => {
                      setShowMobileMenu(false)
                      setShowContactModal(true)
                    }}
                    className={`block w-full text-left py-1.5 px-2 rounded font-medium transition-all duration-200 text-xs ${
                      isScrolled 
                        ? 'text-gray-700 hover:bg-gray-100 hover:text-pink-600' 
                        : 'text-white/90 hover:bg-white/20 hover:text-white'
                    }`}
                  >
                    Liên hệ
                  </button>
                </nav>
              </motion.div>
            )}
          </motion.div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        className="min-h-screen flex items-center justify-center px-2 sm:px-4 relative bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/img/bg.jpeg')",
        }}
      >
        {/* Glass blur overlay chỉ cho background */}
        <div className="absolute inset-0 backdrop-blur-sm"></div>
        
        <div className="container mx-auto relative z-10 flex items-center justify-center">
          {/* Main Content - Center */}
          <div className="text-center px-2 sm:px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-2 sm:space-y-3"
            >
              {/* Tên Shop - Responsive text sizes */}
              <h1 
                className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[12rem] font-bold text-white mb-1 sm:mb-2" 
                style={{ 
                  fontFamily: "'Unfolding Flower', 'Times New Roman', serif",
                  fontWeight: 'normal',
                  textShadow: '0 0 15px rgba(0,0,0,0.2), 0 0 5px rgba(0,0,0,0.3), 0 0px 5px rgba(0,0,0,0.2)'
                }}
              >
                Nhà Có Hoa
              </h1>
              
              {/* Subtitle - Responsive */}
              <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white font-bold tracking-wider mb-2 sm:mb-4" 
                 style={{ 
                   textShadow: '0 0 20px rgba(0,0,0,0.8), 0 5px 15px rgba(0,0,0,0.5)' 
                 }}>
                Flower Shop - Only Online
              </p>
              
              {/* Button - Responsive */}
              <div className="pt-2 sm:pt-4">
                <Button 
                  size="lg" 
                  onClick={() => setShowPriceModal(true)}
                  className="px-8 sm:px-16 lg:px-20 py-4 sm:py-6 text-base sm:text-lg lg:text-xl font-bold backdrop-blur-md bg-white/20 hover:bg-white/30 text-white border-2 border-white/40 hover:border-white/60 rounded-full shadow-2xl transform hover:scale-105 transition-all duration-300"
                  style={{
                    boxShadow: '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.2)'
                  }}
                >
                  <span className="hidden sm:inline"> </span>
                  Giá Sale Nhà Có Hoa
                  <span className="hidden sm:inline"> </span> 
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <Introduction />

      {/* Products Section */}
      <Products />

      {/* Extra Section */}
      <Extra />

      {/* FAQ Section */}
      <FAQ />

      {/* Footer */}
      <Footer />

      {/* Price Modal - Responsive */}
      {showPriceModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 lg:p-8 max-w-xs sm:max-w-lg lg:max-w-2xl w-full max-h-[95vh] sm:max-h-[90vh] overflow-y-auto relative shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowPriceModal(false)}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 p-1 sm:p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            {/* Header với hình hoa - Responsive */}
            <div className="text-center mb-4 sm:mb-6 pr-8">
              <Image
                src="/img/logo.jpg"
                alt="Hoa"
                width={60}
                height={60}
                className="sm:w-[80px] sm:h-[80px] mx-auto rounded-full mb-3 sm:mb-4 border-2 sm:border-4 border-pink-200"
              />
              <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-600 mb-2" style={{ fontFamily: "'Unfolding Flower', serif" }}>
                Giá Sale &ldquo;Nhà Có Hoa&rdquo;
              </h2>
              <div className="w-12 sm:w-16 h-1 bg-pink-400 mx-auto rounded-full"></div>
            </div>

            {/* Nội dung chính - Responsive */}
            <div className="space-y-3 sm:space-y-4 mb-4 sm:mb-6">
              <div className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold text-sm sm:text-base">•</span>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base"><strong>GIÁ HOA DO BÊN MÌNH BÁO</strong></p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold text-sm sm:text-base">•</span>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base"><strong>CHẤP NHẬN 1 NGƯỜI GOM ĐƠN</strong></p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold text-sm sm:text-base">•</span>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base">
                  <strong>SỐ LƯỢNG ĐƠN LỚN, NHẬN ĐƠN TRƯỚC 6H CHIỀU HÀNG NGÀY, SAU 6H CHUYỂN ĐƠN SANG HÔM SAU HÔM KIA MỚI CÓ THỂ GIAO HOA (HOẶC IB ĐỂ XEM CÓ THỂ NHẬN ĐƠN KHÔNG)</strong>
                </p>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-pink-500 font-bold text-sm sm:text-base">•</span>
                <p className="text-gray-700 text-xs sm:text-sm lg:text-base">
                  <strong>SỐ LƯỢNG ĐƠN NHỎ THÌ IB ĐỂ BIẾT CÓ THỂ NHẬN ĐƠN KHÔNG NẾU ĐƠN QUÁ GẤP</strong>
                </p>
              </div>
            </div>

            {/* Bảng giá - Responsive */}
            <div className="overflow-x-auto -mx-2 sm:mx-0">
              <table className="w-full border-collapse border border-gray-300 min-w-[300px]">
                <thead>
                  <tr className="bg-yellow-200">
                    <th className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-bold text-xs sm:text-sm lg:text-base">LOẠI ĐƠN HÀNG</th>
                    <th className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-bold text-xs sm:text-sm lg:text-base">SỐ LƯỢNG ĐƠN HÀNG</th>
                    <th className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-bold text-xs sm:text-sm lg:text-base">TỶ LỆ HOA HỒNG</th>
                  </tr>
                </thead>
                <tbody className="text-xs sm:text-sm lg:text-base">
                  <tr>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-semibold" rowSpan={2}>DƯỚI 150K</td>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center">&lt;10 ĐƠN</td>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-bold text-red-600">8% GIÁ BÁN</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center">≥10 ĐƠN</td>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-bold text-red-600">10% GIÁ BÁN</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-semibold" rowSpan={2}>151K-350K</td>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center">&lt;5 ĐƠN</td>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-bold text-red-600">12% GIÁ BÁN</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center">≥5 ĐƠN</td>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-bold text-red-600">15% GIÁ BÁN</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-semibold">351K-500K</td>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center">BẤT KỲ</td>
                    <td className="border border-gray-300 p-1 sm:p-2 lg:p-3 text-center font-bold text-red-600">15% GIÁ BÁN</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Footer - Responsive */}
            <div className="mt-4 sm:mt-6 text-center">
              <Button
                onClick={() => setShowPriceModal(false)}
                className="bg-pink-500 hover:bg-pink-600 text-white px-6 sm:px-8 py-2 rounded-full text-sm sm:text-base"
              >
                Đóng
              </Button>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-2xl p-6 max-w-md w-full relative shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <X className="w-5 h-5 text-gray-600" />
            </button>

            {/* Header */}
            <div className="text-center mb-6">
              <Image
                src="/img/logo.jpg"
                alt="Nhà Có Hoa"
                width={60}
                height={60}
                className="mx-auto rounded-full mb-4 border-2 border-pink-200"
              />
              <h2 className="text-2xl font-bold text-gray-900 mb-2" style={{ fontFamily: "'Unfolding Flower', serif" }}>
                Liên Hệ Với Chúng Tôi
              </h2>
              <p className="text-gray-600">Chọn phương thức liên hệ phù hợp với bạn</p>
            </div>

            {/* Contact Options */}
            <div className="space-y-3">
              {/* Hotline/Zalo */}
              <a
                href="tel:0584978168"
                className="flex items-center space-x-4 p-4 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
              >
                <div className="bg-green-500 p-3 rounded-full">
                  <Phone className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-green-600">Hotline/Zalo</h3>
                  <p className="text-sm text-gray-600">0584.978.168</p>
                  <p className="text-xs text-green-600 font-medium">Nhấn để gọi ngay</p>
                </div>
              </a>

              {/* Email */}
              <a
                href="mailto:nhacohoa.contact.25@gmail.com"
                className="flex items-center space-x-4 p-4 bg-red-50 hover:bg-red-100 rounded-xl transition-colors group"
              >
                <div className="bg-red-500 p-3 rounded-full">
                  <Mail className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-red-600">Email</h3>
                  <p className="text-sm text-gray-600">nhacohoa.contact.25@gmail.com</p>
                  <p className="text-xs text-red-600 font-medium">Phản hồi trong 24h</p>
                </div>
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/nhacohoa.25"
                target="_blank"
                className="flex items-center space-x-4 p-4 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
              >
                <div className="bg-blue-600 p-3 rounded-full">
                  <Facebook className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-blue-600">Facebook</h3>
                  <p className="text-sm text-gray-600">@nhacohoa.25</p>
                  <p className="text-xs text-blue-600 font-medium">Nhắn tin Messenger</p>
                </div>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/nhacohoa.25/"
                target="_blank"
                className="flex items-center space-x-4 p-4 bg-pink-50 hover:bg-pink-100 rounded-xl transition-colors group"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full">
                  <Instagram className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 group-hover:text-pink-600">Instagram</h3>
                  <p className="text-sm text-gray-600">@nhacohoa.25</p>
                  <p className="text-xs text-pink-600 font-medium">Follow để xem thêm mẫu</p>
                </div>
              </a>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  )
}
