import './globals.css'
import type { Metadata } from 'next'
import { Titillium_Web } from 'next/font/google';

const titilliumWeb = Titillium_Web({
  weight: ['700'], // Bold weight
  subsets: ['latin'],
  display: 'swap',
});

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
    <html lang="en" className={titilliumWeb.className}>
      <body className="bg-zinc-800">{children}</body>
    </html>
  )
}

