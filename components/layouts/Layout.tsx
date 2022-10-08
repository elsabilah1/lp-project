import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { ReactNode } from 'react'
import Footer from './Footer'
import Header from './Header'

interface Props {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <Head>
        <title>Company Profile</title>
        <meta name="description" content="About My Company" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Box pos="relative" mx="auto" maxW="container.xl">
        <Header />
      </Box>
      {children}
      <Box bg="brand.500">
        <Footer />
      </Box>
    </>
  )
}

export default Layout
