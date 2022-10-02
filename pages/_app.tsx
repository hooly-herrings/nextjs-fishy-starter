// @ts-nocheck
import { DevSupport } from '@react-buddy/ide-toolbox'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { DefaultSeo } from 'next-seo'
import { ComponentPreviews, useInitial } from '../dev'
import theme from '../theme'
import injectTypeScaleVarsToCSS from '../utils/injectTypeScaleVarsToCSS'
import '../styles/global.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_IE',
          url: 'https://www.url.ie/',
          site_name: 'SiteName',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image',
        }}
      />
      {injectTypeScaleVarsToCSS()}
      <DevSupport
        ComponentPreviews={ComponentPreviews}
        useInitialHook={useInitial}
      >
        <Component {...pageProps} />
      </DevSupport>
    </ChakraProvider>
  )
}

export default MyApp
