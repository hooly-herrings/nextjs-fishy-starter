import Layout from '@/components/Layout'
import type { NextPage } from 'next'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <Layout>
      <div className="fish">
        <Image
          src="/hooly-herrings-black.svg"
          alt="Fishy Fish"
          width={100}
          height={75}
        />
        <h1>Home Page</h1>
      </div>
    </Layout>
  )
}

export default Home
