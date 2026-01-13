import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Agrosanoatni rivojlantirish agentligi | QXV huzurida',
  description: 'Agrosanoatni rivojlantirish agentligi rasmiy sahifasi',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="uz">
      <body>{children}</body>
    </html>
  )
}
