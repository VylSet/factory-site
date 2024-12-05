import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Factorio Modder Portfolio',
  description: 'A portfolio showcasing Factorio mod graphics',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-800">{children}</body>
    </html>
  )
}

