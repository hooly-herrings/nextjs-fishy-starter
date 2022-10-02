import Footer from '@/components/Footer'
import Header from '@/components/Header'
import { Fragment } from 'react'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <Fragment>
      <Header />
      <main role="main">{children}</main>
      <Footer />
    </Fragment>
  )
}
