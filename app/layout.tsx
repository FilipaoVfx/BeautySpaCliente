import React from "react"
import type { Metadata } from 'next'
import { Cormorant_Garamond, Lato } from 'next/font/google'

import './globals.css'

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-serif'
})

const lato = Lato({ 
  subsets: ['latin'],
  weight: ['300', '400', '700'],
  variable: '--font-sans'
})

export const metadata: Metadata = {
  title: 'Healing Centro de Bienestar Integral | Cali, Colombia',
  description: 'Centro de Bienestar Integral en Santiago de Cali. Terapias holísticas, estética integral, línea de productos naturales y experiencias de sanación.',
  generator: 'v0.app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <body className={`${cormorant.variable} ${lato.variable} font-sans antialiased`}>{children}</body>
    </html>
  )
}
