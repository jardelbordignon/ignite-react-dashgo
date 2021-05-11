import { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { QueryClientProvider, QueryClient } from 'react-query'

import { theme } from '../styles/theme'
import { SidebarDrawerProvider } from '../contexts/SidebarDrawerContext'
import { makeServer } from '../services/mirage'

if (process.env.NODE_ENV === 'development') {
  makeServer()
}

const queryClient = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProvider>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SidebarDrawerProvider>
    </ChakraProvider>
  )
}

export default MyApp
