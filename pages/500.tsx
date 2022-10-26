import Layout from '@/components/layouts/Layout'
import { Heading, Stack } from '@chakra-ui/react'

const ErrorPage = () => {
  return (
    <Layout>
      <Stack
        bgColor="brand.500"
        color="brand.100"
        h="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <Heading fontSize="8xl">500</Heading>
        <Heading>Something Went Wrong</Heading>
      </Stack>
    </Layout>
  )
}

export default ErrorPage
