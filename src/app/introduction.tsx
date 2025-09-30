'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import { ChevronLeft, ChevronRight } from 'lucide-react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

export default function Introduction() {
  const slides = [
    {
      id: 1,
      title: "Về Chúng Mình",
      description: "Nhà Có Hoa là nơi tụi mình cố gắng cho ra những bó hoa đẹp nhất, mang đến niềm vui và hạnh phúc cho khách hàng. Với đội ngũ nghệ nhân giàu kinh nghiệm, tụi mình cam kết chất lượng và sự hài lòng của bạn.",
      image: "/img/2.jpg"
    },
    {
      id: 2,
      title: "Chất Lượng",
      description: "Chúng mình chỉ sử dụng những bông hoa tươi nhất, được chọn lọc kỹ càng từ các nhà cung cấp uy tín. Mỗi bó hoa đều được chế tác thủ công với sự tỉ mỉ và tình yêu hoa của tụi mình.",
      image: "/img/3.jpg"
    },
    {
      id: 3,
      title: "Dịch Vụ",
      description: "Từ hoa sinh nhật, hoa cưới đến các sự kiện đặc biệt, tụi mình cung cấp đa dạng dịch vụ cắm hoa. Giao hàng nhanh chóng, đúng hẹn trong khu vực TP.HCM.",
      image: "/img/4.jpg"
    },
    {
      id: 4,
      title: "Tận Tâm",
      description: "Sự hài lòng của các bạn là ưu tiên hàng đầu với chúng mình. Chúng mình luôn lắng nghe và tư vấn để tạo ra những sản phẩm phù hợp nhất với nhu cầu của các bạn.",
      image: "/img/5.jpg"
    }
  ]

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-light text-gray-900 mb-4" 
              style={{ fontFamily: "'Unfolding Flower', serif" }}>
            Giới Thiệu
          </h2>
          <div className="w-16 h-0.5 bg-gray-900 mx-auto"></div>
        </motion.div>

        {/* Slider */}
        <div className="relative max-w-5xl mx-auto">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            speed={800}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              bulletClass: 'swiper-bullet-minimal',
              bulletActiveClass: 'swiper-bullet-active-minimal',
            }}
            navigation={{
              nextEl: '.swiper-button-next-minimal',
              prevEl: '.swiper-button-prev-minimal',
            }}
            loop={true}
            className="introduction-swiper-minimal"
          >
            {slides.map((slide) => (
              <SwiperSlide key={slide.id}>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                  
                  {/* Image */}
                  <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="order-2 lg:order-1"
                  >
                    <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden shadow-lg">
                      <Image
                        src={slide.image}
                        alt={slide.title}
                        fill
                        className="object-cover"
                        priority
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="order-1 lg:order-2"
                  >
                    <h3 className="text-3xl lg:text-4xl font-light text-gray-900 mb-6"
                        style={{ fontFamily: "'Unfolding Flower', serif" }}>
                      {slide.title}
                    </h3>
                    
                    <p className="text-lg text-gray-600 leading-relaxed mb-8">
                      {slide.description}
                    </p>

                    <button className="inline-flex items-center px-8 py-3 border border-gray-900 text-gray-900 font-medium hover:bg-gray-900 hover:text-white transition-all duration-300">
                      Tìm hiểu thêm
                      <ChevronRight className="ml-2 w-4 h-4" />
                    </button>
                  </motion.div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="swiper-button-prev-minimal absolute top-1/2 -left-6 lg:-left-12 transform -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-900 transition-all duration-300 group">
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
          </button>
          
          <button className="swiper-button-next-minimal absolute top-1/2 -right-6 lg:-right-12 transform -translate-y-1/2 z-10 w-12 h-12 bg-white shadow-lg rounded-full flex items-center justify-center border border-gray-200 hover:border-gray-900 transition-all duration-300 group">
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-gray-900" />
          </button>
        </div>

        {/* Custom Styles */}
        <style jsx global>{`
          .introduction-swiper-minimal {
            padding: 0 60px 60px 60px;
          }
          
          .introduction-swiper-minimal .swiper-pagination {
            bottom: 0 !important;
            left: 50% !important;
            transform: translateX(-50%) !important;
            width: auto !important;
          }
          
          .swiper-bullet-minimal {
            width: 8px !important;
            height: 8px !important;
            background: #d1d5db !important;
            opacity: 1 !important;
            margin: 0 4px !important;
            border-radius: 50% !important;
            transition: all 0.3s ease !important;
          }
          
          .swiper-bullet-active-minimal {
            background: #111827 !important;
            transform: scale(1.2) !important;
          }
          
          @media (max-width: 1024px) {
            .introduction-swiper-minimal {
              padding: 0 20px 40px 20px;
            }
          }
        `}</style>
      </div>
    </section>
  )
}