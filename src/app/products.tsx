'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Eye, X, Search, SlidersHorizontal, Phone, MessageCircle, Instagram } from 'lucide-react'
import { useState } from 'react'

interface Product {
  id: number
  name: string
  mainFlowers: string
  colors: Array<{
    name: string
    code: string
    image: string
  }>
  defaultImage: string
  pricing?: {
    type1?: {
      title: string
      prices: Array<{
        quantity: string
        price: string
        note?: string
      }>
      extra?: string
      note?: string
    }
    type2?: {
      title: string
      prices: Array<{
        quantity: string
        price: string
      }>
      extra?: string
      note?: string
    }
    type3?: {
      title: string
      prices: Array<{
        quantity: string
        price: string
      }>
      extra?: string
      note?: string
    }
  }
  price?: string
  note?: string
  simple?: boolean
}

export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null)
  const [selectedColor, setSelectedColor] = useState('')
  const [showAllProducts, setShowAllProducts] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [sortBy, setSortBy] = useState<'name' | 'price-asc' | 'price-desc'>('name')
  const [filterByType, setFilterByType] = useState<string>('all')
  const [showFilters, setShowFilters] = useState(false)
  const [showContactModal, setShowContactModal] = useState(false)

  // Dữ liệu sản phẩm
  const products: Product[] = [
    {
      id: 1,
      name: "Hoa tốt nghiệp",
      mainFlowers: "cúc pingpong, thạch thảo/tana, cỏ đuôi chồn",
      colors: [
        { name: "Mẫu 1", code: "#ffffff", image: "/img/hoa-tot-nghiep.jpg" },
        { name: "Mẫu 2", code: "#ff69b4", image: "/img/hoa-tot-nghiep-2.jpg" }
      ],
      defaultImage: "/img/hoa-tot-nghiep.jpg",
      pricing: {
        type1: {
          title: "Bó 1 con (có đủ cúc thạch thảo/tana, lam tinh, cỏ đuôi chồn)",
          prices: [
            { quantity: "1 bó", price: "99k" },
            { quantity: "2 bó", price: "89k/bó" },
            { quantity: "3-5 bó", price: "80k/bó", note: "(ngày thường bán từ 3 bó)" },
            { quantity: "6-8 bó", price: "77k/bó" },
            { quantity: "9-10 bó", price: "72k/bó" }
          ],
          extra: "Thêm 1 con +20k (Tối đa 3 con)"
        },
        type2: {
          title: "Bó 5 con có hoa lam tinh",
          prices: [
            { quantity: "1 bó", price: "299k" },
            { quantity: "2 bó", price: "279k/bó" },
            { quantity: "Bó 9-10 con", price: "589k" }
          ]
        },
        type3: {
          title: "Bó 5 con không có hoa lam tinh", 
          prices: [
            { quantity: "1 bó", price: "209k" },
            { quantity: "2 bó", price: "199k/bó" },
            { quantity: "Bó 9-10 con", price: "469k" }
          ]
        }
      }
    },
    {
      id: 2,
      name: "Hướng dương 5 bông",
      mainFlowers: "Hướng dương, Cúc tana và Cỏ đuôi chồn",
      colors: [
        { name: "Vàng", code: "#ffd700", image: "/img/huong-duong-5.jpg" },
      ],
      defaultImage: "/img/huong-duong-5.jpg",
      price: "249k",
      simple: true
    },
    {
      id: 3,
      name: "Hướng dương Classic",
      mainFlowers: "Hướng dương, thạch thảo và Cỏ đuôi chồn",
      colors: [
        { name: "Mẫu 1", code: "#ffd700", image: "/img/huong-duong-classic.jpg" },
        { name: "Mẫu 2", code: "#9a8a30ff", image: "/img/huong-duong-classic2.jpg" }
      ],
      defaultImage: "/img/huong-duong-classic.jpg",
      price: "229k",
      simple: true
    },
    {
      id: 4,
      name: "Hướng dương 10 bông",
      mainFlowers: "hướng dương, Cúc tana và cỏ đồng tiền",
      colors: [
        { name: "Vàng", code: "#ffd700", image: "/img/huong-duong-10.jpg" },
      ],
      defaultImage: "/img/huong-duong-10.jpg",
      pricing: {
        type1: {
          title: "Giá bán",
          prices: [
            { quantity: "Thay cúc tana bằng thạch thảo", price: "359k" },
            { quantity: "1 bó", price: "425k" }
            
          ]
        }
      }
    },
    {
      id: 5,
      name: "Hướng dương mini",
      mainFlowers: "hướng dương và Cỏ đuôi chồn",
      colors: [
        { name: "Vàng", code: "#ffd700", image: "/img/huong-duong-mini.jpg" },
      ],
      defaultImage: "/img/huong-duong-mini.jpg",
      pricing: {
        type1: {
          title: "Giá cơ bản",
          prices: [
            { quantity: "3 bông HD", price: "99k" },
            { quantity: "2 bông HD", price: "89k" }
          ],
          note: "Nhận từ 2 bó, mua sl lớn có giảm giá"
        },
        type2: {
          title: "Đổi cỏ và thêm thạch thảo",
          prices: [
            { quantity: "2 bông", price: "99k" },
            { quantity: "3 bông", price: "109k" }
          ]
        }
      }
    },
    {
      id: 6,
      name: "Bó phăng hồng mix",
      mainFlowers: "phăng hồng, hồng và thạch thảo, cỏ đồng tiền",
      colors: [
        { name: "Hồng", code: "#ff69b4", image: "/img/phang-hong-mix.jpg" },
      ],
      defaultImage: "/img/phang-hong-mix.jpg",
      pricing: {
        type1: {
          title: "Giá bán",
          prices: [
            { quantity: "Bỏ cỏ hoặc hoa nhỏ", price: "279k" },
            { quantity: "Bó không hoa hồng", price: "299k" },
            { quantity: "Bó đầy đủ", price: "349k" },
            
            
            { quantity: "Hoa phăng đơn", price: "399k" }
          ]
        }
      }
    },
    {
      id: 7,
      name: "Lam tinh & Hồng",
      mainFlowers: "lam tinh (sao xanh) và hồng",
      colors: [
        { name: "Mẫu 1", code: "#4169e1", image: "/img/lam-tinh-hong.jpg" },
        { name: "Mẫu 2", code: "#0000cd", image: "/img/lam-tinh-do.jpg" }
      ],
      defaultImage: "/img/lam-tinh-hong.jpg",
      price: "499k",
      note: "Đổi màu, loại hoa hồng được",
      simple: true
    },
    {
      id: 8,
      name: "Hồng chùm cao cấp",
      mainFlowers: "hồng chùm sophia và hồng chùm polla, cỏ đuôi chồn",
      colors: [
        { name: "Full mix", code: "#ff1493", image: "/img/hong-chum-cao-cap.jpg" }
      ],
      defaultImage: "/img/hong-chum-cao-cap.jpg",
      price: "1.280k",
      note: "Hồng chùm polla ít có hàng",
      simple: true
    },
    {
      id: 9,
      name: "Em iu - Ohara",
      mainFlowers: "ohara",
      colors: [
        { name: "Feedback", code: "#ff69b4", image: "/img/em-iu.jpg" },
      

      ],
      defaultImage: "/img/em-iu.jpg",
      pricing: {
        type1: {
          title: "Bó Ohara",
          prices: [
            { quantity: "30 bông", price: "359k - 409k" },
            { quantity: "50 bông", price: "479k - 559k" },
            { quantity: "90-100 bông", price: "1.000k - 1.199k" }
          ],
          note: "Giá ohara thay đổi theo thị trường"
        }
      }
    },
    {
      id: 10,
      name: "Luxury",
      mainFlowers: "tulip, sao xanh và cỏ đồng tiền",
      colors: [
        { name: "Mix cao cấp", code: "#9370db", image: "/img/luxury.jpg" }
      ],
      defaultImage: "/img/luxury.jpg",
      price: "890k",
      simple: true
    },
    {
      id: 11,
      name: "Cẩm tú cầu mix",
      mainFlowers: "Cẩm tú cầu, hoa hồng, đồng tiền nhí, cỏ đồng tiền, phăng hồng",
      colors: [
        { name: "Full mix", code: "#87ceeb", image: "/img/cam-tu-cau-xanh.jpg" },
      ],
      defaultImage: "/img/cam-tu-cau-mix.jpg",
      pricing: {
        type1: {
          title: "Giá bán",
          prices: [
            { quantity: "Bỏ phăng hồng", price: "389k" },
            { quantity: "Bó đầy đủ", price: "419k" }
            
          ]
        }
      }
    },
    {
      id: 12,
      name: "Cẩm tú cầu nhập",
      mainFlowers: "Cẩm tú cầu",
      colors: [
        { name: "Xanh dương", code: "#4169e1", image: "/img/cam-tu-cau-premium.jpg" },

      ],
      defaultImage: "/img/cam-tu-cau-premium.jpg",
      pricing: {
        type1: {
          title: "Giá bán",
          prices: [
            { quantity: "Cẩm tú cầu VN - size to hơn (màu có thể không đều, xanh bơ, có thể pha xanh dương hoặc trắng)", price: "299k" },
            { quantity: "Cẩm tú cầu nhập - bông to ( có thêm màu hồng )", price: "369k" }
            
          ],

        }
      }
    },
    {
      id: 13,
      name: "Hoa chuông",
      mainFlowers: "hoa chuông",
      colors: [
        { name: "Tím", code: "#9370db", image: "/img/hoa-chuong.jpg" }
      ],
      defaultImage: "/img/hoa-chuong.jpg",
      price: "229k",
      simple: true
    },
    {
      id: 14,
      name: "Hồng plume",
      mainFlowers: "hồng plume",
      colors: [
        { name: "Hồng", code: "#ff69b4", image: "/img/hong-plume.jpg" }
      ],
      defaultImage: "/img/hong-plume.jpg",
      price: "259k",
      note: "Hoa này hơi khó nhập, đặt trước ít nhất 2 ngày",
      simple: true
    },
    {
      id: 15,
      name: "Hồng chùm",
      mainFlowers: "hồng chùm sophia",
      colors: [
        { name: "Chiếc xạ", code: "#ff1493", image: "/img/hong-chum-chiec-xa.jpg" },
        { name: "Cam", code: "#ff6a14ff", image: "/img/hong-chum-cam.jpg" },
        { name: "Sophia", code: "#f594c8ff", image: "/img/hong-chum-sophia.jpg" }
      ],
      defaultImage: "/img/hong-chum.jpg",
      pricing: {
        type1: {
          title: "Theo size",
          prices: [
            { quantity: "Size 25-30", price: "259k" },
            { quantity: "Size 40-50", price: "459k" }
          ],
          note: "Tùy độ nở của hoa, size không đồng đều, tất cả màu hồng chùm đều đồng giá"
        }
      }
    },
    {
      id: 16,
      name: "Hồng spirit mix",
      mainFlowers: "hồng spirit, lam tinh, cúc tana, cỏ đồng tiền",
      colors: [
        { name: "hình 1", code: "#ff1493", image: "/img/hong-spirit-mix.jpg" },
        { name: "Hình 2", code: "#71485eff", image: "/img/hong-spirit-mix2.jpg" }
      ],
      defaultImage: "/img/hong-spirit-mix.jpg",
      price: "669k",
      note: "Size >50, có thể đổi loại hoa hồng hoặc giảm 1-2 loại hoa để down giá",
      simple: true
    },
    {
      id: 17,
      name: "Cúc tana & Lam tinh",
      mainFlowers: "cúc tana vs lam tinh (sao xanh)",
      colors: [
        { name: "Xanh-Trắng", code: "#87ceeb", image: "/img/cuc-tana-lam-tinh.jpg" }
      ],
      defaultImage: "/img/cuc-tana-lam-tinh.jpg",
      price: "279k - 299k",
      note: "Nhiều hoa hơn mẫu",
      simple: true
    },
    {
      id: 18,
      name: "Đồng tiền",
      mainFlowers: "ĐỒNG TIỀN",
      colors: [
        { name: "Full Mix", code: "#ffffff", image: "/img/dong-tien.jpg" }


      ],
      defaultImage: "/img/dong-tien.jpg",
      price: "149k",
      note: "Có nhiều màu, 1 bó 18-20 bông, có mix thêm cỏ",
      simple: true
    },
    {
      id: 19,
      name: "Ohara cao cấp",
      mainFlowers: "ohara (90 - 100cm)",
      colors: [
        { name: "Hồng", code: "#ff69b4", image: "/img/ohara-cao-cap-hong.jpg" },
        { name: "Trắng", code: "#ffffff", image: "/img/ohara-cao-cap-trang.jpg" },
        { name: "Đỏ", code: "#dc143c", image: "/img/ohara-cao-cap-do.jpg" }
      ],
      defaultImage: "/img/ohara-cao-cap.jpg",
      price: "1.888.k",
      note: "1 bó 100-150 bông, có mix thêm hoa phụ",
      simple: true
    },
    {
      id: 20,
      name: "Cẩm tú cầu & Hoa ren",
      mainFlowers: "cẩm tú cầu, hoa ren, cỏ đồng tiền",
      colors: [
        { name: "Xanh", code: "#87ceeb", image: "/img/cam-tu-cau-hoa-ren.jpg" }
      ],
      defaultImage: "/img/cam-tu-cau-hoa-ren.jpg",
      pricing: {
        type1: {
          title: "Giá bán",
          prices: [
            { quantity: "Bỏ cỏ đồng tiền", price: "259k" },
            { quantity: "Bó đầy đủ", price: "299k" }
            
          ]
        }
      }
    },
    {
      id: 21,
      name: "Cẩm tú cầu, cỏ đồng tiền",
      mainFlowers: "cẩm tú cầu, cỏ đồng tiền",
      colors: [
        { name: "Xanh", code: "#87ceeb", image: "/img/cam-tu-cau-don-gian.jpg" }
      ],
      defaultImage: "/img/cam-tu-cau-don-gian.jpg",
      price: "179k",
      simple: true
    },
    {
      id: 22,
      name: "Hồng ohara cao cấp",
      mainFlowers: "hồng ohara hồng, cỏ đồng tiền",
      colors: [
        { name: "Hồng", code: "#ff69b4", image: "/img/hong-ohara-cao-cap.jpg" }
      ],
      defaultImage: "/img/hong-ohara-cao-cap.jpg",
      price: "429k",
      note: "Bỏ lá cỏ ở phía sau",
      simple: true
    },
    {
      id: 23,
      name: "Hồng & Bạch đàn",
      mainFlowers: "hoa hồng, lá bạch đàn nhí",
      colors: [
        { name: "Hồng", code: "#ff69b4", image: "/img/hong-bach-dan.jpg" }
      ],
      defaultImage: "/img/hong-bach-dan.jpg",
      price: "249k",
      simple: true
    },
    {
      id: 24,
      name: "Hoa hồng đơn giản",
      mainFlowers: "hoa hồng",
      colors: [
        { name: "Mẫu", code: "#ff69b4", image: "/img/hong-don-gian.jpg" }
      ],
      defaultImage: "/img/hong-don-gian.jpg",
      price: "159k",
      simple: true
    },
    {
      id: 25,
      name: "Pingpong & Cát tường",
      mainFlowers: "PINGPONG, CÁT TƯỜNG",
      colors: [
        { name: "Trắng", code: "#ffffff", image: "/img/pingpong-cat-tuong.jpg" },

      ],
      defaultImage: "/img/pingpong-cat-tuong.jpg",
      price: "259k",
      simple: true
    },
    {
      id: 26,
      name: "Lam tinh & Phăng",
      mainFlowers: "HOA LAM TINH, HOA PHĂNG",
      colors: [
        { name: "Xanh-Hồng", code: "#4169e1", image: "/img/lam-tinh-phang.jpg" }
      ],
      defaultImage: "/img/lam-tinh-phang.jpg",
      price: "429k",
      simple: true
    },
    {
      id: 27,
      name: "Hồng & Cúc tana Premium",
      mainFlowers: "HOA HỒNG, CÚC TANA, CỎ ĐỒNG TIỀN",
      colors: [
        { name: "Có hình & lời cảm ơn", code: "#ff69b4", image: "/img/hong-cuc-tana-premium.jpg" },
      ],
      defaultImage: "/img/hong-cuc-tana-premium.jpg",
      pricing: {
        type1: {
          title: "Giá bán",
          prices: [
            { quantity: "Bó thường", price: "359k" },
            { quantity: "Có in hình và lời cảm ơn", price: "399k" }
          ]
        }
      }
    },
    {
      id: 28,
      name: "Hồng trắng & Cẩm tú cầu",
      mainFlowers: "HOA HỒNG TRẮNG, CẨM TÚ CẦU, LÁ BẠC",
      colors: [
        { name: "Trắng-Xanh", code: "#f0f8ff", image: "/img/hong-trang-cam-tu-cau.jpg" }
      ],
      defaultImage: "/img/hong-trang-cam-tu-cau.jpg",
      price: "329k",
      simple: true
    }
  ]

  // Danh sách loại hoa để filter
  const flowerTypes = [
    'all',
    'hoa tốt nghiệp',
    'hướng dương', 
    'hồng',
    'cẩm tú cầu',
    'ohara',
    'cúc',
    'đồng tiền',
    'lam tinh',
    'tulip',
    'phăng',
    'pingpong'
  ]

  // Hàm lấy giá số từ string
  const extractPrice = (product: Product): number => {
    if (product.simple && product.price) {
      const match = product.price.match(/(\d+(?:\.\d+)?)/);
      return match ? parseFloat(match[1]) : 0;
    }
    if (product.pricing) {
      const firstSection = Object.values(product.pricing)[0];
      if (firstSection?.prices[0]) {
        const match = firstSection.prices[0].price.match(/(\d+(?:\.\d+)?)/);
        return match ? parseFloat(match[1]) : 0;
      }
    }
    return 0;
  }

  // Filter và sort products
  const filteredAndSortedProducts = products
    .filter(product => {
      // Search filter
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           product.mainFlowers.toLowerCase().includes(searchTerm.toLowerCase());
      
      // Type filter
      const matchesType = filterByType === 'all' || 
                         product.name.toLowerCase().includes(filterByType) ||
                         product.mainFlowers.toLowerCase().includes(filterByType);
      
      return matchesSearch && matchesType;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return extractPrice(a) - extractPrice(b);
        case 'price-desc':
          return extractPrice(b) - extractPrice(a);
        case 'name':
        default:
          return a.name.localeCompare(b.name);
      }
    });

  return (
    <section id="products" className="py-8 sm:py-12 lg:py-16 xl:py-20 bg-gradient-to-b from-pink-50 to-white">
      <div className="container mx-auto px-3 sm:px-4 lg:px-6 xl:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4" 
              style={{ fontFamily: "'Unfolding Flower', serif" }}>
            Sản Phẩm Hoa Tươi
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-pink-400 mx-auto rounded-full mb-3 sm:mb-4"></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-2">
            Khám phá bộ sưu tập hoa tươi đa dạng với nhiều màu sắc và kiểu dáng độc đáo
          </p>
        </motion.div>

        {/* Search and Filter Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 sm:mb-12"
        >
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto mb-4 sm:mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Tìm kiếm hoa..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-full focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm sm:text-base"
            />
          </div>

          {/* Filter Toggle */}
          <div className="text-center mb-4">
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-full transition-colors duration-200"
            >
              <SlidersHorizontal className="w-4 h-4" />
              <span className="text-sm font-medium">Bộ lọc</span>
            </button>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="bg-white rounded-xl shadow-lg p-4 sm:p-6 max-w-4xl mx-auto"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {/* Sort Options */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Sắp xếp theo:
                  </label>
                  <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value as 'name' | 'price-asc' | 'price-desc')}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  >
                    <option value="name">Tên A-Z</option>
                    <option value="price-asc">Giá thấp đến cao</option>
                    <option value="price-desc">Giá cao đến thấp</option>
                  </select>
                </div>

                {/* Type Filter */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Loại hoa:
                  </label>
                  <select
                    value={filterByType}
                    onChange={(e) => setFilterByType(e.target.value)}
                    className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  >
                    <option value="all">Tất cả</option>
                    {flowerTypes.slice(1).map(type => (
                      <option key={type} value={type}>
                        {type.charAt(0).toUpperCase() + type.slice(1)}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Filter Results Info */}
              <div className="mt-4 pt-4 border-t border-gray-200 text-center">
                <p className="text-sm text-gray-600">
                  Hiển thị {filteredAndSortedProducts.length} / {products.length} sản phẩm
                  {searchTerm && (
                    <span className="ml-2 px-2 py-1 bg-pink-100 text-pink-700 rounded-full text-xs">
                      &ldquo;{searchTerm}&rdquo;
                    </span>
                  )}
                  {filterByType !== 'all' && (
                    <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-700 rounded-full text-xs">
                      {filterByType}
                    </span>
                  )}
                </p>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {(showAllProducts ? filteredAndSortedProducts : filteredAndSortedProducts.slice(0, 12)).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group"
            >
              {/* Product Image */}
              <div className="relative h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 overflow-hidden">
                <Image
                  src={selectedColor && selectedProduct?.id === product.id 
                    ? product.colors.find(c => c.name === selectedColor)?.image || product.defaultImage
                    : product.defaultImage
                  }
                  alt={product.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                
                {/* Overlay Actions */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="p-2 sm:p-3 bg-white/90 hover:bg-white rounded-full shadow-lg transform hover:scale-110 transition-all duration-200"
                  >
                    <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700" />
                  </button>
                </div>

                {/* Color Selection */}
                <div className="absolute bottom-2 sm:bottom-4 left-2 sm:left-4 flex space-x-1 sm:space-x-2">
                  {product.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => {
                        setSelectedColor(color.name)
                        setSelectedProduct(product)
                      }}
                      className={`w-4 h-4 sm:w-6 sm:h-6 rounded-full border-2 ${
                        selectedColor === color.name && selectedProduct?.id === product.id
                          ? 'border-white shadow-lg scale-110' 
                          : 'border-white/60 hover:border-white'
                      } transition-all duration-200`}
                      style={{ backgroundColor: color.code }}
                      title={color.name}
                    />
                  ))}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-3 sm:p-4 lg:p-6">
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 mb-1 sm:mb-2 line-clamp-2">{product.name}</h3>
                <p className="text-xs sm:text-sm text-gray-600 mb-2 sm:mb-3 line-clamp-2">{product.mainFlowers}</p>
                
                {/* Price */}
                <div className="mb-3 sm:mb-4">
                  {product.simple ? (
                    <div>
                      <span className="text-lg sm:text-xl lg:text-2xl font-bold text-pink-600">{product.price}</span>
                      {product.note && (
                        <p className="text-xs text-orange-600 mt-1 line-clamp-2">{product.note}</p>
                      )}
                    </div>
                  ) : product.pricing ? (
                    <div>
                      <span className="text-sm sm:text-base lg:text-lg font-semibold text-pink-600">
                        {Object.values(product.pricing)[0]?.prices[0]?.price} - {Object.values(product.pricing)[Object.values(product.pricing).length - 1]?.prices[Object.values(product.pricing)[Object.values(product.pricing).length - 1]?.prices.length - 1]?.price}
                      </span>
                      <p className="text-xs text-gray-500">Giá tùy theo size và số lượng</p>
                    </div>
                  ) : (
                    <span className="text-sm sm:text-base lg:text-lg font-semibold text-pink-600">Liên hệ</span>
                  )}
                </div>

                {/* Actions */}
                <div className="flex">
                  <button 
                    onClick={() => setSelectedProduct(product)}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 px-3 sm:px-4 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                  >
                    <span className="hidden sm:inline">Xem chi tiết</span>
                    <span className="sm:hidden">Chi tiết</span>
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Load More Button */}
        {!showAllProducts && filteredAndSortedProducts.length > 12 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-8 sm:mt-12"
          >
            <button
              onClick={() => setShowAllProducts(true)}
              className="bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              <span className="hidden sm:inline">Xem thêm {filteredAndSortedProducts.length - 12} sản phẩm</span>
              <span className="sm:hidden">Xem thêm ({filteredAndSortedProducts.length - 12})</span>
            </button>
            <p className="text-gray-600 mt-2 sm:mt-3 text-sm sm:text-base px-4">Khám phá thêm nhiều loại hoa đẹp khác</p>
          </motion.div>
        )}

        {/* No Results Message */}
        {filteredAndSortedProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center py-12"
          >
            <div className="text-gray-400 mb-4">
              <Search className="w-16 h-16 mx-auto mb-4" />
            </div>
            <h3 className="text-xl font-semibold text-gray-600 mb-2">Không tìm thấy sản phẩm</h3>
            <p className="text-gray-500 mb-4">
              Thử tìm kiếm với từ khóa khác hoặc thay đổi bộ lọc
            </p>
            <button
              onClick={() => {
                setSearchTerm('')
                setFilterByType('all')
                setSortBy('name')
              }}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-full transition-colors duration-200"
            >
              Xóa bộ lọc
            </button>
          </motion.div>
        )}

        {/* Back to Top Button - when showing all products */}
        {showAllProducts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 sm:mt-12"
          >
            <button
              onClick={() => {
                setShowAllProducts(false)
                document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="bg-gray-500 hover:bg-gray-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full font-medium shadow-lg transition-all duration-300 text-sm sm:text-base"
            >
              Thu gọn sản phẩm
            </button>
          </motion.div>
        )}
      </div>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[100] flex items-center justify-center p-2 sm:p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="bg-white rounded-xl sm:rounded-2xl max-w-6xl w-full max-h-[95vh] overflow-y-auto relative shadow-2xl mx-1 sm:mx-2"
          >
            {/* Close Button */}
            <button
              onClick={() => {
                setSelectedProduct(null)
                setSelectedColor('')
              }}
              className="absolute top-2 sm:top-4 right-2 sm:right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10 bg-white/80 backdrop-blur-sm"
            >
              <X className="w-5 h-5 sm:w-6 sm:h-6 text-gray-600" />
            </button>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 p-3 sm:p-6 lg:p-8">
              {/* Product Images */}
              <div className="space-y-3 sm:space-y-4">
                <div className="relative h-56 sm:h-80 lg:h-96 rounded-lg sm:rounded-xl overflow-hidden">
                  <Image
                    src={selectedColor 
                      ? selectedProduct.colors.find(c => c.name === selectedColor)?.image || selectedProduct.defaultImage
                      : selectedProduct.defaultImage
                    }
                    alt={selectedProduct.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Color Options */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3">
                  {selectedProduct.colors.map((color) => (
                    <button
                      key={color.name}
                      onClick={() => setSelectedColor(color.name)}
                      className={`flex-1 p-2 sm:p-3 rounded-lg border-2 transition-all duration-200 ${
                        selectedColor === color.name
                          ? 'border-pink-500 bg-pink-50' 
                          : 'border-gray-200 hover:border-pink-300'
                      }`}
                    >
                      <div className="flex items-center space-x-2">
                        <div 
                          className="w-4 h-4 sm:w-5 sm:h-5 rounded-full border flex-shrink-0"
                          style={{ backgroundColor: color.code }}
                        />
                        <span className="text-xs sm:text-sm font-medium truncate">{color.name}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Product Details */}
              <div className="space-y-4 sm:space-y-6">
                <div>
                  <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-2 leading-tight">
                    {selectedProduct.name}
                  </h2>
                  <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{selectedProduct.mainFlowers}</p>
                  {selectedProduct.note && (
                    <p className="text-orange-600 text-xs sm:text-sm mt-2 bg-orange-50 p-2 sm:p-3 rounded leading-relaxed">{selectedProduct.note}</p>
                  )}
                </div>

                {/* Pricing */}
                <div className="bg-gray-50 rounded-lg sm:rounded-xl p-3 sm:p-6">
                  <h3 className="text-sm sm:text-lg font-bold text-gray-900 mb-3 sm:mb-4">Bảng giá chi tiết</h3>
                  {selectedProduct.simple ? (
                    <div className="text-center">
                      <span className="text-xl sm:text-3xl font-bold text-pink-600">{selectedProduct.price}</span>
                    </div>
                  ) : (
                    <div className="space-y-3 sm:space-y-4">
                      {selectedProduct.pricing && Object.entries(selectedProduct.pricing).map(([key, section]) => (
                        <div key={key} className="border-b border-gray-200 pb-3 sm:pb-4 last:border-b-0">
                          <h4 className="font-semibold text-gray-800 mb-2 text-xs sm:text-base">{section.title}</h4>
                          <div className="grid grid-cols-1 gap-1 sm:gap-2 text-xs sm:text-sm">
                            {section.prices.map((price, idx) => (
                              <div key={idx} className="flex justify-between bg-white p-2 sm:p-3 rounded items-start">
                                <span className="flex-1 pr-2 leading-tight">{price.quantity}</span>
                                <span className="font-medium text-pink-600 flex-shrink-0">{price.price}</span>
                              </div>
                            ))}
                          </div>
                          {section.note && (
                            <p className="text-xs text-gray-500 mt-2 leading-relaxed">{section.note}</p>
                          )}
                          {section.extra && (
                            <p className="text-xs text-orange-600 mt-2 leading-relaxed">{section.extra}</p>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Actions */}
                <div className="flex flex-col space-y-3">
                  <button 
                    onClick={() => setShowContactModal(true)}
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 sm:py-4 px-4 sm:px-6 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base"
                  >
                    Liên hệ tư vấn & Đặt hàng ngay
                  </button>
                  <button 
                    onClick={() => {
                      setSelectedProduct(null)
                      setSelectedColor('')
                    }}
                    className="w-full bg-gray-200 hover:bg-gray-300 text-gray-700 py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-medium transition-colors duration-200 text-sm sm:text-base lg:hidden"
                  >
                    Đóng
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Contact Modal */}
      {showContactModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[110] flex items-center justify-center p-2 sm:p-4">
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