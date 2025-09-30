'use client'

import Image from 'next/image'
import { X, Menu, Phone, Instagram, Mail, Facebook } from 'lucide-react'
import { useState, useEffect } from 'react'

interface HeaderProps {
  setShowContactModal: (show: boolean) => void
}

export default function Header({ setShowContactModal }: HeaderProps) {
  const [showMobileMenu, setShowMobileMenu] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-screen max-w-full overflow-hidden">
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-lg shadow-lg' 
            : 'bg-white/10 backdrop-blur-md'
        }`}
      >
        {/* Mobile Layout - Absolutely Full Width */}
        <div className="flex items-center justify-between w-full h-12 px-1 lg:hidden">
          {/* Logo và tên shop - Mobile */}
          <div 
            className="flex items-center space-x-1 flex-shrink-0 min-w-0"
          >
            <Image
              src="/img/logo.jpg"
              alt="Nhà Có Hoa Logo"
              width={24}
              height={24}
              className="w-6 h-6 rounded-full border border-white/50 shadow-md flex-shrink-0"
            />
            <h2 className={`text-xs font-bold transition-colors duration-300 truncate ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`} style={{ fontFamily: "'Unfolding Flower', serif" }}>
              Nhà Có Hoa
            </h2>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMobileMenu(!showMobileMenu)}
            className={`p-1 rounded transition-all duration-200 flex-shrink-0 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/20'
            }`}
          >
            <Menu className="w-4 h-4" />
          </button>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:flex items-center justify-between w-full px-8 xl:px-16 2xl:px-24 py-3">
          {/* Logo và tên shop - Desktop */}
          <div 
            className="flex items-center space-x-3 flex-shrink-0"
          >
            <Image
              src="/img/logo.jpg"
              alt="Nhà Có Hoa Logo"
              width={48}
              height={48}
              className="w-12 h-12 xl:w-14 xl:h-14 rounded-full border-2 border-white/30 shadow-lg"
            />
            <div>
              <h2 className={`text-xl xl:text-2xl font-bold transition-colors duration-300 ${
                isScrolled ? 'text-gray-900' : 'text-white'
              }`} style={{ fontFamily: "'Unfolding Flower', serif" }}>
                Nhà Có Hoa
              </h2>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="flex space-x-8 xl:space-x-10">
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
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div
            className={`lg:hidden border-t overflow-hidden w-full ${
              isScrolled ? 'border-gray-200' : 'border-white/20'
            }`}
          >
            <nav className="px-2 py-2 space-y-1 w-full">
              <a 
                href="#" 
                onClick={() => setShowMobileMenu(false)}
                className={`block py-1.5 px-2 rounded font-medium transition-all duration-200 text-xs w-full ${
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
                className={`block py-1.5 px-2 rounded font-medium transition-all duration-200 text-xs w-full ${
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
                className={`block py-1.5 px-2 rounded font-medium transition-all duration-200 text-xs w-full ${
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
                className={`block py-1.5 px-2 rounded font-medium transition-all duration-200 text-xs w-full ${
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
          </div>
        )}
      </div>
    </header>
  )
}