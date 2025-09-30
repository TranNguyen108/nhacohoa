import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Custom font "Unfolding Flower" từ thư mục public/font
const unfoldingFlower = localFont({
  src: "../../public/font/Unfolding-Flower.ttf",
  variable: "--font-unfolding-flower",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Nhà Có Hoa  ",
  description: "Nhà Có Hoa - Cửa hàng hoa tươi chuyên nghiệp, thiết kế hoa cưới, hoa sinh nhật và các sự kiện đặc biệt tại TP.HCM",
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon.ico',
    apple: '/img/logo.jpg',
  },
  openGraph: {
    title: "Nhà Có Hoa",
    description: "Cửa hàng hoa tươi chuyên nghiệp tại TP.HCM",
    images: ['/img/logo.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/img/logo.jpg" type="image/jpeg" />
        <link rel="apple-touch-icon" href="/img/logo.jpg" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${unfoldingFlower.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}