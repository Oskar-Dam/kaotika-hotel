import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

const poopins = Poppins({ subsets: ['latin'], weight: ['400'] })

export const metadata: Metadata = {
  title: 'Kaotika Hotel',
  description: 'Sinister rooms for all',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poopins.className}>{children}</body>
    </html>
  )
}
