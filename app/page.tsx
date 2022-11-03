import type { ReactNode } from 'react'
import Image from 'next/image'

export default function HomePage(): ReactNode {
  return (
    <div className="fish">
      <Image
        src="/hooly-herrings-black.svg"
        alt="Fishy Fish"
        width={160}
        height={60}
      />
      <h1>Home Page</h1>
      <p>Welcome to the home page!</p>
    </div>
  )
}
