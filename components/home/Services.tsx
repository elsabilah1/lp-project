import { Box, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/future/image'

const Services = () => {
  return (
    <Box
      px={4}
      mb={12}
      mx="auto"
      maxWidth="container.xl"
      textAlign={{ md: 'center' }}
    >
      <Heading
        as="h2"
        fontSize={{ base: 18, md: 24, lg: 42 }}
        fontWeight="extrabold"
        mb={{ base: 2, md: 4 }}
      >
        OUR SERVICES
      </Heading>
      <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 4, md: 12 }}>
        We deliver the best products through the simplest features in the
        software
      </Text>
      <Grid
        mb={{ base: 6, md: 9 }}
        templateColumns={{ md: 'repeat(3, 1fr)' }}
        gap={{ base: 4, lg: 6 }}
      >
        <GridItem pos="relative" minH={{ base: 'xs', md: '2xs', lg: 'sm' }}>
          <Image src="/assets/images/services_webdev.png" alt="webdev" fill />
        </GridItem>
        <GridItem pos="relative" minH={{ base: 'xs', md: '2xs', lg: 'sm' }}>
          <Image src="/assets/images/services_webapp.png" alt="webdev" fill />
        </GridItem>
        <GridItem pos="relative" minH={{ base: 'xs', md: '2xs', lg: 'sm' }}>
          <Image
            src="/assets/images/services_mobileapp.png"
            alt="webdev"
            fill
          />
        </GridItem>
      </Grid>
    </Box>
  )
}

export default Services
