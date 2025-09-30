import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-gray-600 mb-4">Trang không tìm thấy</p>
        <Link href="/" className="text-pink-600 hover:text-pink-700">
          Quay về trang chủ
        </Link>
      </div>
    </div>
  )
}