import { Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import Button from '../Button'

const About = () => {
  const router = useRouter()
  return (
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
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
        >
          COMPANY NAME
        </Heading>
        <Text fontSize={{ base: 12, lg: 24 }} letterSpacing="wide">
          Business need to get connect and give the best for its users. So here
          we are, help you find the best way to provide your best services to
          your user using the simplest solution, software and technology!
        </Text>
        <Flex>
          <Button
            onClick={() => router.replace('/')}
            title="About [ N A M E ]"
            variant="secondary"
            arrow
          />
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default About
