import { DevSupport } from '@react-buddy/ide-toolbox'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import { ComponentPreviews, useInitial } from '../dev'
import '@picocss/pico'
import '../styles/pollen.css'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_GB',
          url: 'https://www.url.ie/',
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <Component {...pageProps} />
      </DevSupport>
    </>
  )
}

export default MyApp
