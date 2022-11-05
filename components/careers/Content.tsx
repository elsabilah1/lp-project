import { Box, Grid, Heading, Text } from '@chakra-ui/react'
import CareerCard from './CareerCard'

const Content = () => {
  return (
    <Box
      px={4}
      mb={{ base: 12, md: 36, lg: 64 }}
      mx="auto"
      maxWidth="container.xl"
    >
      <Box mt={{ base: 10, md: 28 }} textAlign={{ md: 'center' }}>
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
          mb={{ base: 2, md: 4 }}
        >
          JOIN US
        </Heading>
        <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 2, md: 12 }}>
          Let’s join us and be a part of technology development
        </Text>
      </Box>

      <Grid
        mt={{ base: 6, md: 9 }}
        mb={{ base: 6, md: 9 }}
        templateColumns={{ md: 'repeat(2, 1fr)' }}
        gap={{ base: 4, lg: 6 }}
      >
        <CareerCard
          label="mobile app"
          title="IOS Engineer"
          bgImageUrl="/assets/images/featured1.png"
        />
        <CareerCard
          label="website"
          title="Front End Developer"
          bgImageUrl="/assets/images/featured2.png"
        />
        <CareerCard
          label="web app"
          title="QA Tester"
          bgImageUrl="/assets/images/featured3.png"
        />
        <CareerCard
          label="mobile app"
          title="android developer"
          bgImageUrl="/assets/images/featured4.png"
        />
      </Grid>
    </Box>
  )
}

export default Content
