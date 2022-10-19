import { Box, Grid, GridItem, Heading, Stack, Text } from '@chakra-ui/react'
import Image from 'next/future/image'

const WhyUs = () => {
  return (
    <Grid
      gap={{ base: 6, lg: 10 }}
      templateColumns={{ sm: 'repeat(2, 1fr)' }}
      maxWidth="container.xl"
      mx="auto"
      my={{ base: 4, lg: 60 }}
      px={{ base: 4, md: 10, lg: 0 }}
      placeItems="center"
    >
      <GridItem
        display="flex"
        justifyContent="center"
        flexDir="column"
        gap={{ base: 2, md: 4, lg: 6 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 20, lg: 42 }}
          fontWeight="extrabold"
          mb={{ base: 5, lg: 10 }}
        >
          WHY [ COMPANY NAME ] ?
        </Heading>
        <Stack gap={{ base: 4, lg: 9 }}>
          <Item />
          <Item />
          <Item />
        </Stack>
      </GridItem>
      <GridItem
        rowStart={1}
        colStart={{ md: 2 }}
        pos="relative"
        w="full"
        h={{ md: '50%', lg: '75%' }}
        minH={{ base: '2xs', lg: 'xs' }}
      >
        <Image
          style={{
            objectFit: 'cover',
            objectPosition: 'top',
            borderRadius: 8,
          }}
          src="/assets/images/about_comp2.png"
          alt="about"
          fill
        />
      </GridItem>
    </Grid>
  )
}

export default WhyUs

const Item = () => {
  return (
    <Box>
      <Heading as="h3" fontSize={{ base: 18, lg: 32 }} mb={{ base: 2, lg: 4 }}>
        <span style={{ marginRight: 16 }}>⬜</span>
        Free Consultation
      </Heading>
      <Text fontSize={{ base: 12, lg: 24 }} letterSpacing="wide">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nunc non
        integer arcu dictumst justo aliquet.
      </Text>
    </Box>
  )
}
