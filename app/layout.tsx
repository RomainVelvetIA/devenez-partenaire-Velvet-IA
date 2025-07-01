import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Programme de Commission - Agents Vocaux IA | Velvet IA',
  description: 'Devenez partenaire officiel Velvet IA et vendez nos solutions d\'assistants vocaux IA dans toute la France. Vendez nos agents vocaux IA sur mesure, implémentation en 72h, gains illimités.',
  keywords: 'commission, agents vocaux, IA, Ask Lab, commercial, vente, technologie',
  authors: [{ name: 'Ask Lab' }],
  robots: 'index, follow',
  openGraph: {
    title: 'Programme de Commission - Agents Vocaux IA',
    description: 'Devenez partenaire officiel Velvet IA et vendez nos agents vocaux IA sur mesure de 2000-5000€. Potentiel illimité.',
    type: 'website',
    locale: 'fr_FR',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased bg-black text-white">
        {children}
      </body>
    </html>
  )
} 