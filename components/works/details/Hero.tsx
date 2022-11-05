import Button from '@/components/Button'
import { Box, Heading, Stack, Text } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Hero = () => {
  const router = useRouter()

  return (
    <Box
      bgImage="/assets/images/work_details_header.png"
      h={{ base: '40vh', sm: '75vh', md: '50vh', lg: '90vh' }}
      bgSize="cover"
      bgPos="top"
      pos="relative"
    >
      <Box pos="absolute" w="full" h="full" bgColor="brand.400" opacity="30%" />
      <Box h="full" w="full" pos="absolute">
        <Stack
          maxW="container.xl"
          mx="auto"
          h="full"
          justifyContent="end"
          pb={{ base: 6, md: 24, lg: 36, xl: 56 }}
          spacing={{ base: 2, lg: 5 }}
          px="4"
          color="brand.100"
        >
          <Text fontSize={{ base: 12, md: 32 }} fontWeight={{ md: 500 }}>
            Mobile App
          </Text>
          <Heading
            fontSize={{ base: 18, md: 28, lg: 40, '2xl': 64 }}
            fontWeight="900"
          >
            Eaten:
            <br />
            Prep Meal Ordering App
          </Heading>
          <Button
            onClick={() => router.replace('/')}
            title="Read more"
            variant="primary"
            arrow
            big
          />
        </Stack>
      </Box>
    </Box>
  )
}

export default Hero
