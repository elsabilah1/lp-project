import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'

const Hero = () => {
  return (
    <Grid
      placeItems="center"
      textAlign="center"
      bgColor="brand.500"
      color="brand.100"
      h={{ base: '40vh', lg: '60vh' }}
    >
      <GridItem>
        <Heading
          as="h1"
          fontSize={{ base: 16, md: 28, lg: 40, '2xl': 52 }}
          fontWeight="extrabold"
          letterSpacing="widest"
          mb={6}
        >
          ABOUT US
        </Heading>
        <Text
          fontSize={{ base: 12, lg: 24 }}
          letterSpacing="wide"
          px={{ base: 12, md: 40, lg: 96 }}
        >
          We are here to help you find the best way to provide your best
          services with simplest solution through software and technology!
        </Text>
      </GridItem>
    </Grid>
  )
}

export default Hero
