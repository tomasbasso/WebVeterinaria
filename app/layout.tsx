import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Kala Veterinaria',
  description: 'Cuidamos a tus compañeros de vida con amor y dedicación',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}

