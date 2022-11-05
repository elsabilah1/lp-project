import Button from '@/components/Button'
import { Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/future/image'

const Description = () => {
  return (
    <Grid
      columnGap={{ base: 6, lg: 10 }}
      templateColumns={{ sm: 'repeat(2, 1fr)' }}
      my={{ base: 6, lg: 36 }}
      maxWidth="container.xl"
      mx="auto"
      px="4"
    >
      <GridItem
        pos="relative"
        mx="auto"
        h="full"
        w={{ base: '60%', md: '75%', lg: 'full' }}
        minH={{ base: '36', md: '2xs', lg: 'xs' }}
        rowSpan={{ md: 2 }}
        rowStart={{ base: 2, md: 1 }}
      >
        <Image
          style={{ objectFit: 'contain' }}
          src="/assets/images/about_comp.png"
          alt="about"
          fill
        />
      </GridItem>

      <GridItem
        pb={{ base: 6, md: 0, lg: 6 }}
        justifyContent="end"
        display="flex"
        flexDir="column"
        gap={{ md: 2, lg: 5 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
        >
          Eaten
        </Heading>
        <Text
          as="i"
          fontWeight="light"
          fontSize={{ base: 12, md: 14, lg: 32 }}
          letterSpacing="wide"
        >
          “An app to simplify your meal preparation”
        </Text>
      </GridItem>

      <GridItem
        display="flex"
        justifyContent="center"
        flexDir="column"
        colStart={{ md: 2 }}
        mt={{ base: 5, md: 0 }}
        pr={{ md: 10, lg: 0 }}
      >
        <Text
          mb={{ base: 2, lg: 5 }}
          fontSize={{ base: 12, lg: 24 }}
          letterSpacing="wide"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quam nunc non
          integer arcu dictumst justo aliquet. Habitasse pellentesque proin
          aliquet sit auctor erat pellentesque mattis. Aliquam et tempor fusce
          ac nibh.
        </Text>
        <Button title="Visit site" variant="secondary" arrow />
      </GridItem>
    </Grid>
  )
}

export default Description
