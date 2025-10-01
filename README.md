# Nhà Có Hoa - Landing Page

🌸 **Landing page chuyên nghiệp cho shop hoa tươi "Nhà Có Hoa"** - Kết nối khách hàng và cộng tác viên trong việc kinh doanh hoa tươi online.

## 🎯 Mục đích dự án

### 👥 **Dành cho Cộng tác viên (CTV)**
- **Quảng bá dễ dàng**: Gửi link landing page cho khách hàng tiềm năng
- **Thông tin đầy đủ**: Bảng giá, sản phẩm, chính sách hoa hồng rõ ràng
- **Tăng doanh số**: Thiết kế chuyên nghiệp tạo niềm tin với khách hàng
- **Hỗ trợ bán hàng**: Modal liên hệ, thông tin sản phẩm chi tiết

### 🛍️ **Dành cho Khách hàng**
- **Xem sản phẩm**: Catalog hoa tươi với hình ảnh và giá cả
- **Đặt hoa theo yêu cầu**: Dịch vụ custom từ 79k
- **Liên hệ dễ dàng**: Hotline, Zalo, Facebook, Instagram
- **Trải nghiệm tốt**: Responsive, nhanh, thân thiện

## 🌸 Tính năng chính

### 🏪 **Giới thiệu Shop**
- ✅ Hero section ấn tượng với tên shop và slogan
- ✅ Giới thiệu về đội ngũ và triết lý kinh doanh
- ✅ Sliding gallery với hình ảnh đẹp

### 🛒 **Catalog Sản phẩm**
- ✅ **28+ sản phẩm hoa tươi** với thông tin chi tiết
- ✅ **Filter theo loại hoa**: Hướng dương, Hồng, Cẩm tú cầu, Ohara...
- ✅ **Search function**: Tìm kiếm theo tên hoặc loại hoa
- ✅ **Sort theo giá**: Thấp đến cao, cao đến thấp
- ✅ **Modal chi tiết**: Ảnh lớn, bảng giá, lựa chọn màu sắc

### 💰 **Bảng giá Sale (Cho CTV)**
- ✅ **Popup bảng giá hoa hồng** từ button "Giá Sale Nhà Có Hoa"
- ✅ **Chi tiết hoa hồng**: 8%-15% tùy theo loại đơn hàng
- ✅ **Điều kiện rõ ràng**: Thời gian nhận đơn, số lượng tối thiểu

### 🎨 **Dịch vụ theo yêu cầu**
- ✅ **Delicious Deal**: Đặt hoa custom từ 79k
- ✅ **6 quyền lợi**: Thiết kế riêng, tư vấn miễn phí, chất lượng cam kết
- ✅ **Call-to-action**: Button đặt ngay nổi bật

### ❓ **FAQ - Câu hỏi thường gặp**
- ✅ **6 câu hỏi phổ biến**: Thời gian giao, cách đặt hàng, giá cả...
- ✅ **Accordion UI**: Dễ đọc, tiết kiệm không gian

### 📞 **Liên hệ đa kênh**
- ✅ **4 phương thức**: Hotline/Zalo, Email, Facebook, Instagram
- ✅ **Contact modal**: Popup đẹp từ header và các button
- ✅ **Thông tin thật**: 0584.978.168, @nhacohoa.25

## 🚀 Deployment

### **Vercel (Recommended)**
```bash
# Push code lên GitHub
git push origin main

# Deploy trên Vercel
vercel --prod
```

### **Netlify**
```bash
npm run build
# Upload folder .next/
```

## 🔧 Customization

### **Thay đổi thông tin shop**
```typescript
// src/app/page.tsx
const shopInfo = {
  name: "Nhà Có Hoa",
  phone: "0584.978.168",
  email: "nhacohoa.contact.25@gmail.com",
  facebook: "https://www.facebook.com/nhacohoa.25",
  instagram: "https://www.instagram.com/nhacohoa.25/"
}
```

### **Thêm sản phẩm mới**
```typescript
// src/app/products.tsx
const newProduct = {
  id: 29,
  name: "Tên sản phẩm",
  mainFlowers: "Hoa chủ đạo",
  price: "Giá bán",
  image: "/img/product-29.jpg",
  colors: [
    { name: "Trắng", image: "/img/product-29-white.jpg" },
    // ...
  ]
}
```

### **Cập nhật bảng giá CTV**
```typescript
// src/app/page.tsx - showPriceModal
const commissionRates = {
  "under150k": { rate1: "8%", rate2: "10%" },
  "151k-350k": { rate1: "12%", rate2: "15%" },
  // ...
}
```

## � Performance

- ✅ **Lighthouse Score**: 90+ trên tất cả metrics
- ✅ **Core Web Vitals**: Pass Google standards  
- ✅ **Mobile Speed**: < 3s loading time
- ✅ **SEO Optimized**: Meta tags, structured data

## 🤝 Hỗ trợ

### **Cho CTV**
- 📞 **Hotline**: 0584.978.168 (hỗ trợ sử dụng website)
- 💬 **Zalo**: Hướng dẫn chia sẻ link, tracking doanh số
- 📧 **Email**: nhacohoa.contact.25@gmail.com

### **Cho Developer**
- 🐛 **Bug reports**: Tạo issue trên GitHub
- 💡 **Feature requests**: Discussion tab
- 📝 **Documentation**: Wiki section

## 📈 Roadmap

### **Phase 2 (Coming soon)**
- [ ] Admin dashboard cho quản lý sản phẩm
- [ ] Tracking system cho CTV
- [ ] Payment integration
- [ ] Customer reviews system
- [ ] Analytics dashboard

### **Phase 3 (Future)**
- [ ] Mobile app companion
- [ ] AI chatbot support
- [ ] Inventory management
- [ ] Multi-language support

## 📁 Cấu trúc dự án

```
src/
├── app/                     # Next.js App Router
│   ├── layout.tsx          # Layout chính + font
│   ├── page.tsx            # Homepage + Header
│   ├── products.tsx        # Component sản phẩm
│   ├── extra.tsx           # Dịch vụ theo yêu cầu
│   ├── introduction.tsx    # Giới thiệu shop
│   ├── faq.tsx            # Câu hỏi thường gặp
│   ├── footer.tsx         # Footer + social links
│   └── globals.css        # CSS toàn cục
├── components/
│   ├── Header.tsx         # Header responsive
│   └── ui/               # UI components
└── public/
    ├── img/              # Hình ảnh sản phẩm
    └── font/            # Font chữ custom
```

## 🎨 Tính năng UI/UX

### 📱 **Responsive Design**
- **Mobile-first**: Tối ưu cho điện thoại trước
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch-friendly**: Button size, spacing phù hợp mobile

### � **Animations**
- **Page transitions**: Mượt mà giữa các section
- **Hover effects**: Interactive elements
- **Loading states**: Skeleton placeholders
- **Scroll animations**: Content xuất hiện từ từ

### � **Design System**
- **Color scheme**: Pink/Rose theme cho shop hoa
- **Typography**: Custom font "Unfolding Flower"
- **Glass morphism**: Header trong suốt hiện đại
- **Consistent spacing**: 4px, 8px, 16px, 24px grid

## 🧰 Scripts

```bash
# Development
npm run dev

# Build cho production
npm run build

# Chạy production build
npm start

# Linting
npm run lint

# Type checking
npm run type-check
```

## 🎨 Customization

### Colors
Chỉnh sửa colors trong `tailwind.config.ts` và CSS variables trong `globals.css`.

### Animations
Thêm custom animations trong `tailwind.config.ts`:

```typescript
extend: {
  animation: {
    'custom-animation': 'customAnimation 1s ease-in-out',
  },
  keyframes: {
    customAnimation: {
      '0%': { transform: 'scale(1)' },
      '50%': { transform: 'scale(1.1)' },
      '100%': { transform: 'scale(1)' },
    },
  },
}
```

### Components
Tạo component mới trong `src/components/ui/` và export trong index file.

## 📦 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Netlify
```bash
npm run build
# Upload dist/ folder
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🤝 Contributing

1. Fork the project
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

## 📄 License

Dự án này thuộc sở hữu của **Nhà Có Hoa** - Chỉ dành cho mục đích kinh doanh hoa tươi.

## 🙏 Credits

- **Design**: Inspired by modern e-commerce trends
- **Development**: Built with love for flower business
- **Photos**: High-quality flower photography
- **Icons**: [Lucide Icons](https://lucide.dev/)

---

💐 **Được tạo với ❤️ cho cộng đồng yêu hoa** - Nhà Có Hoa © 2024

### 🌸 **Slogan: "Mỗi bông hoa là một câu chuyện, mỗi bó hoa là một kỷ niệm"**
