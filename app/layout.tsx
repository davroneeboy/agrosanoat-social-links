import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agrosanoatni rivojlantirish agentligi | QXV huzurida',
  description: 'Agrosanoatni rivojlantirish agentligi rasmiy sahifasi',
  icons: {
    icon: '/uzb-gerb.png',
    apple: '/uzb-gerb.png',
  },
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#0a0a0a',
  colorScheme: 'dark',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz" className="dark">
      <body>{children}</body>
    </html>
  )
}
