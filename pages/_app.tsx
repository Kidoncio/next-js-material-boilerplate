import React from 'react'

import { EmotionCache, CacheProvider } from '@emotion/react'
import DateAdapter from '@mui/lab/AdapterDateFns'
import MuiLocalizationProvider from '@mui/lab/LocalizationProvider'
import { CssBaseline } from '@mui/material'
import { ThemeProvider as MaterialThemeProvider } from '@mui/material/styles'
import { ptBR } from 'date-fns/locale'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { SWRConfig } from 'swr'

import { materialTheme } from '@/styles/materialTheme'
import createEmotionCache from '@/utils/mui/createEmotionCache'
import { fetcher } from '@/utils/swr'

import '../styles/globals.css'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache()

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

const MyApp: React.FC<MyAppProps> = ({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) => {
  return (
    <React.Fragment>
      <Head>
        <link href="/favicon.ico" rel="icon" />

        <meta content="minimum-scale=1, initial-scale=1, width=device-width" name="viewport" />
      </Head>

      <CacheProvider value={emotionCache}>
        <MaterialThemeProvider theme={materialTheme}>
          <SWRConfig
            value={{
              fetcher,
              revalidateOnMount: true,
            }}
          >
            <MuiLocalizationProvider dateAdapter={DateAdapter} locale={ptBR}>
              <>
                <DefaultSeo
                  title="NextJS Boilerplate"
                  description="Next.js + Material UI 5 + SWR + Tailwind CSS"
                />

                <CssBaseline />

                <Component {...pageProps} />
              </>
            </MuiLocalizationProvider>
          </SWRConfig>
        </MaterialThemeProvider>
      </CacheProvider>
    </React.Fragment>
  )
}

export default MyApp
