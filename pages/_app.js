// pages/_app.js
import { ChakraProvider } from '@chakra-ui/react'

import { extendTheme } from '@chakra-ui/react'

const colors = {
  brand: {
    'main-blue': '#001489',
    'accent-yellow': '#F5BD00',
    'button-white': '#F5F5F5'
  },
  fonts: {
    heading: `'Montserrat', sans-serif`,
    body: `'Montserrat', sans-serif`
  }
}

const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp