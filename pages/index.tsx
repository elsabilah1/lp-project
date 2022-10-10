import AnimateSentence from '@/components/AnimateSentence'
import Button from '@/components/Button'
import { Box, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Image from 'next/future/image'
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
      <Grid
        gap={{ base: 6, lg: 16 }}
        templateColumns={{ sm: 'repeat(2, 1fr)' }}
        maxWidth="container.xl"
        mx="auto"
        my={{ base: 4, lg: 20 }}
        pb={8}
        px={4}
      >
        <GridItem
          pos="relative"
          w="full"
          h="full"
          minH={{ base: '2xs', lg: 'xs' }}
        >
          <Image
            style={{ objectFit: 'cover', borderRadius: 8 }}
            src="/assets/images/about_image.png"
            alt="about"
            fill
          />
        </GridItem>
        <GridItem
          display="flex"
          justifyContent="center"
          flexDir="column"
          gap={{ base: 2, md: 4, lg: 6 }}
        >
          <Heading as="h2" fontSize={{ base: 18, md: 24, lg: 42 }}>
            COMPANY NAME
          </Heading>
          <Text fontSize={{ base: 12, lg: 24 }} letterSpacing="wide">
            Business need to get connect and give the best for its users. So
            here we are, help you find the best way to provide your best
            services to your user using the simplest solution, software and
            technology!
          </Text>
          <Button
            onClick={() => router.replace('/')}
            title="About [ N A M E ]"
            variant="secondary"
          />
        </GridItem>
      </Grid>
    </Layout>
  )
}

export default Home
