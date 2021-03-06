import type { NextPage } from 'next'
import { NextSeo } from 'next-seo'
import {
  AllecBodyCopy,
  AllecCanon,
  AllecDoublePica,
  AllecGreatPrimer,
  AllecParagon,
  AllecTrafalgar,
} from '../components/typography'
import { Flex } from '@chakra-ui/react'
import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <>
      <NextSeo
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon.ico',
          },
        ]}
        title="Hooly Fishy Starter"
        description="Hooly Fishy starter for NextJS based projects..."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second',
              type: 'image/jpeg',
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' },
          ],
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <main>
        <Flex
          alignItems="center"
          direction="column"
          justifyContent="center"
          h="100vh"
        >
          <div className="fish">
            <Image
              src="/hooly-herrings-black.svg"
              alt="Fishy Fish"
              width={100}
              height={75}
            />
          </div>
          <AllecCanon>Header H1</AllecCanon>
          <AllecTrafalgar>Header H2</AllecTrafalgar>
          <AllecParagon>Header H3</AllecParagon>
          <AllecDoublePica>Header H4</AllecDoublePica>
          <AllecGreatPrimer>Header H5</AllecGreatPrimer>
          <AllecBodyCopy>Header H6</AllecBodyCopy>
        </Flex>
      </main>
      <style jsx>{`
        .fish {
          transition: all 1s ease-in-out;
        }
        .fish:hover {
          transform: rotate(360deg) scale(4);
        }
      `}</style>
    </>
  )
}

export default Home
