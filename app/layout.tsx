import './globals.css'
import type { ReactNode } from 'react'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Carlo AI - Carpet & Flooring Advisor',
  description: 'Expert carpeting and flooring advice from Carlo with over 20 years of experience.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
