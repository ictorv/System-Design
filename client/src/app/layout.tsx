// src/app/layout.tsx
import { Poppins, Inter } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  variable: '--font-primary',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-secondary',
})

export const metadata = {
  title: 'System Design Notes',
  description: 'A comprehensive guide to system design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${poppins.variable} ${inter.variable}`}>
      <body className={poppins.className}>{children}</body>
    </html>
  )
}