import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agrosanoatni rivojlantirish agentligi | QXV huzurida',
  description: 'Agrosanoatni rivojlantirish agentligi rasmiy sahifasi',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  icons: {
    icon: '/uzb-gerb.png',
    apple: '/uzb-gerb.png',
  },
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
