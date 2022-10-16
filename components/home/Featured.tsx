import { Box, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import Button from '../Button'
import FeaturedCard from '../FeaturedCard'

const Featured = () => {
  return (
    <Box px={4} mb={12} mx="auto" maxWidth="container.xl">
      <Heading
        as="h2"
        fontSize={{ base: 18, md: 24, lg: 42 }}
        fontWeight="extrabold"
        mb={{ base: 2, md: 4 }}
      >
        FEATURED WORKS
      </Heading>
      <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 4, md: 12 }}>
        We proudly present our latest featured works
      </Text>
      <Grid
        mb={{ base: 6, md: 9 }}
        templateColumns={{ md: 'repeat(2, 1fr)' }}
        gap={{ base: 4, lg: 6 }}
      >
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
        <FeaturedCard />
      </Grid>
      <Flex justifyContent="center">
        <Button title="See more" variant="secondary" arrow />
      </Flex>
    </Box>
  )
}

export default Featured
