import AnimateSentence from '@/components/AnimateSentence'
import Button from '@/components/Button'
import { Box, Stack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/Layout'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <Layout>
      <Box
        color="brand.100"
        bgColor="#000000"
        bgImage="/assets/images/home-hero.png"
        h={{ base: '50vh', sm: '75vh', md: '100vh' }}
        bgPosition="bottom"
        bgRepeat="no-repeat"
        bgSize="contain"
        display="grid"
        placeItems="center"
      >
        <Stack
          pb={{ base: 6, md: 12, lg: 36 }}
          alignItems="center"
          spacing={{ base: 4, lg: 8 }}
        >
          <AnimateSentence />
          <Button
            onClick={() => router.replace('/')}
            title="Explore more"
            variant="primary"
            arrow
          />
        </Stack>
      </Box>
    </Layout>
  )
}

export default Home
