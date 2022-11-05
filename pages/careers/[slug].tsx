import Description from '@/components/careers/details/Description'
import Hero from '@/components/careers/details/Hero'
import Skills from '@/components/careers/details/Skills'
import Layout from '@/components/layouts/Layout'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const CareerDetails = () => {
  const router = useRouter()

  return (
    <Layout>
      <Hero />
      <Description />
      <Box px="4">
        <Box
          borderBottom="2px"
          borderColor="brand.300"
          maxW="container.xl"
          mx="auto"
        />
      </Box>
      <Skills />
    </Layout>
  )
}

export default CareerDetails
