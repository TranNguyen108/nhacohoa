'use client'

import { motion } from 'framer-motion'
import { Facebook, Instagram, Send, MapPin, Phone, Mail, Heart } from 'lucide-react'
import Image from 'next/image'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const links = [
    { title: "Trang chủ", href: "#home" },
    { title: "Sản phẩm", href: "#products" },
    { title: "Theo yêu cầu", href: "#extra" },
    { title: "FAQ", href: "#faq" },
    { title: "Liên hệ", href: "#contact" }
  ]

  const socialLinks = [
    { icon: <Facebook className="w-6 h-6" />, href: "https://www.facebook.com/nhacohoa.25", label: "Facebook" },
    { icon: <Instagram className="w-6 h-6" />, href: "https://www.instagram.com/nhacohoa.25/", label: "Instagram" },
    { icon: <Send className="w-6 h-6" />, href: "tel:0584978168", label: "Zalo" }
  ]

  return (
    <footer className="bg-gradient-to-br from-pink-400 via-rose-500 to-pink-600 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Logo & Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2"
          >
            {/* Logo */}
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <Image
                  src="/img/logo.jpg"
                  alt="Nhà Có Hoa Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold" 
                    style={{ fontFamily: "'Unfolding Flower', serif" }}>
                  Nhà Có Hoa
                </h3>
                <p className="text-pink-100 text-sm">Flower Shop - Only Online</p>
              </div>
            </div>

            {/* Description */}
            <p className="text-pink-100 mb-6 leading-relaxed text-sm sm:text-base">
              Chúng mình tạo ra những bó hoa tươi đẹp với tình yêu và sự tận tâm nhất. 
              Chúng mình biết mỗi bó hoa đều mang trong mình câu chuyện riêng và cảm xúc chân thành 
              từ người tặng đến người nhận :3.
            </p>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-200"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-6">Liên kết</h4>
            <ul className="space-y-3">
              {links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-pink-100 hover:text-white transition-colors duration-200 text-sm sm:text-base"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h4 className="text-lg sm:text-xl font-bold mb-6">Liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-pink-200 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-pink-100 text-sm sm:text-base">0584.978.168</p>
                  <p className="text-pink-200 text-xs">Hotline/Zalo - 8:00 - 22:00</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-pink-200 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-pink-100 text-sm sm:text-base">nhacohoa.contact.25@gmail.com</p>
                  <p className="text-pink-200 text-xs">Phản hồi trong 24h</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-pink-200 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-pink-100 text-sm sm:text-base">TP. Hồ Chí Minh</p>
                  <p className="text-pink-200 text-xs">Giao hàng toàn thành phố</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-pink-300/30">
        <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between space-y-4 sm:space-y-0">
            
            {/* Copyright */}
            <div className="text-pink-100 text-xs sm:text-sm text-center sm:text-left">
              <p>© {currentYear} Nhà Có Hoa.</p>
            </div>

            {/* Made with love */}
            <div className="flex items-center space-x-2 text-pink-100 text-xs sm:text-sm">
              <span>Được tạo với</span>
              <Heart className="w-4 h-4 text-pink-300" />
              <span>tại Việt Nam</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}