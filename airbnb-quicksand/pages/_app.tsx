import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { wrapper } from '../redux/Store'
import createEmotionCache from '../src/createEmotionCache';
import { EmotionCache } from '@emotion/cache';
import { CacheProvider } from '@emotion/react';
import Head from 'next/head';
import { CssBaseline, StyledEngineProvider, ThemeProvider } from '@mui/material';
import theme from '../src/theme';
import Layout from '../components/Layout';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

function MyApp(props: MyAppProps) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
      <StyledEngineProvider injectFirst>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </StyledEngineProvider>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default wrapper.withRedux(MyApp)
