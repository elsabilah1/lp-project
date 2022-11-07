import { Grid, GridItem, Heading } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Button from '../Button'

const Hero = () => {
  const router = useRouter()
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
          ARTICLES
        </Heading>
        <Button
          onClick={() => router.replace('#blogs')}
          title="Start reading"
          variant="primary"
          arrow
          big
        />
      </GridItem>
    </Grid>
  )
}

export default Hero