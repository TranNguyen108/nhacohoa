# NCH Landing Page

Một landing page đẹp được xây dựng với Next.js, Tailwind CSS và các công nghệ hiện đại.

## 🚀 Công nghệ sử dụng

- **[Next.js 15](https://nextjs.org/)** - React framework với App Router
- **[TypeScript](https://www.typescriptlang.org/)** - Type safety
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Framer Motion](https://www.framer.com/motion/)** - Animation library
- **[Lucide React](https://lucide.dev/)** - Beautiful icons
- **[Headless UI](https://headlessui.com/)** - Unstyled accessible UI components
- **[Class Variance Authority](https://cva.style/docs)** - Component variants
- **[clsx](https://github.com/lukeed/clsx)** & **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Conditional CSS classes

## 🛠️ Cài đặt

1. Clone repository:
```bash
git clone <repository-url>
cd nch-landing-page
```

2. Cài đặt dependencies:
```bash
npm install
```

3. Chạy development server:
```bash
npm run dev
```

4. Mở [http://localhost:3000](http://localhost:3000) trong browser.

## 📁 Cấu trúc thư mục

```
src/
├── app/                  # App Router (Next.js 13+)
│   ├── globals.css      # Global styles
│   ├── layout.tsx       # Root layout
│   └── page.tsx         # Homepage
├── components/
│   └── ui/              # Reusable UI components
│       ├── button.tsx
│       ├── card.tsx
│       └── skeleton.tsx
└── lib/
    └── utils.ts         # Utility functions
```

## 🎨 Features

### ✨ Animations
- Smooth scroll animations với Framer Motion
- Hover effects và transitions
- Loading states với skeleton components

### 📱 Responsive Design
- Mobile-first approach
- Breakpoints tối ưu cho mọi thiết bị
- Touch-friendly interactions

### 🎯 Components
- **Button**: Multiple variants (default, outline, ghost, etc.)
- **Card**: Flexible card components
- **Skeleton**: Loading placeholders
- **Icons**: Lucide React icons

### 🌈 Design System
- Consistent color palette
- Typography scale
- Spacing system
- Border radius và shadows

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

Distributed under the MIT License. See `LICENSE` for more information.

## 🙏 Acknowledgments

- [Next.js team](https://nextjs.org/docs)
- [Tailwind CSS team](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)

---

Made with ❤️ by [Your Name]
