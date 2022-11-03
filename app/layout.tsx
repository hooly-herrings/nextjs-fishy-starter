import Footer from '@/components/Footer'
import Header from '@/components/Header'
import type { ReactNode } from 'react'
import '@/styles/pollen.css'
import '@/styles/global.css'
import { Lato, Caveat } from '@next/font/google'

const lato = Lato({
  weight: ['100', '300', '400', '700', '900'],
})

const caveat = Caveat()

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>H</title>
      </head>
      <body className={`${lato.className} ${caveat.className}`}>
        <Header />
        <main role="main">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
