import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'

import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'
import { queryClient } from '../services/queryClient'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
          <ReactQueryDevtools />
        </QueryClientProvider>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
