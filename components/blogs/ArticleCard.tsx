import { Flex, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import Image from 'next/future/image'
import { useRouter } from 'next/router'
import Button from '../Button'

interface Props {
  bgImageUrl?: string
}

const ArticleCard = (props: Props) => {
  const router = useRouter()

  return (
    <Grid
      gap={{ base: 2, md: 6 }}
      templateColumns={{ sm: 'repeat(2, 1fr)' }}
      maxWidth="container.xl"
      mx="auto"
    >
      <GridItem
        pos="relative"
        w="full"
        h="full"
        minH={{ base: '48', lg: 'xs' }}
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
        gap={{ base: 3, md: 4 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 36 }}
          fontWeight="600"
        >
          How to choose software development service by your needs
        </Heading>
        <Text
          fontSize={{ base: 12, lg: 24 }}
          letterSpacing="wide"
          color="brand.400"
        >
          August 16, 2022
        </Text>
        <Text fontSize={{ base: 12, lg: 24 }} letterSpacing="wide">
          Business need to get connect and give the best for its users. So here
          we are, help you find the best way to provide your best services to
          your user using
        </Text>
        <Flex>
          <Button
            onClick={() => router.replace('/blog/1')}
            title="Read more"
            variant="secondary"
            arrow
          />
        </Flex>
      </GridItem>
    </Grid>
  )
}

export default ArticleCard
