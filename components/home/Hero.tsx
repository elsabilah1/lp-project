import { Box, Heading, Stack } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { TypeAnimation } from 'react-type-animation'
import Button from '../Button'

const Hero = () => {
  const router = useRouter()
  return (
    <Box
      color="brand.100"
      bgColor="#000000"
      bgImage="/assets/images/home-hero.png"
      h={{ base: '50vh', sm: '75vh', md: '50vh', lg: '100vh' }}
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
        <Heading
          fontSize={{ base: 16, md: 28, lg: 40, '2xl': 52 }}
          fontWeight="extrabold"
          letterSpacing="wider"
        >
          <TypeAnimation
            sequence={[
              'WE DEVELOP WEBSITE',
              5000,
              'WE DEVELOP WEB APP',
              5000,
              'WE DEVELOP MOBILE APP',
              5000,
              'WE DEVELOP WHAT YOU NEED',
              5000,
            ]}
            repeat={Infinity}
          />
        </Heading>
        <Button
          onClick={() => router.replace('/')}
          title="Explore more"
          variant="primary"
          arrow
          big
        />
      </Stack>
    </Box>
  )
}

export default Hero
