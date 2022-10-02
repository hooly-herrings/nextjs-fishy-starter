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
          width={300}
          height={175}
        />
        <h1>Home Page</h1>
        <p>Welcome to the home page!</p>
        <button>Button</button>
      </div>
    </Layout>
  )
}

export default Home
