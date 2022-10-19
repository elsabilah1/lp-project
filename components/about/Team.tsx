import { Box, chakra, Flex, Grid, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/future/image'
import { useState } from 'react'
import Button from '../Button'

const Team = () => {
  return (
    <Box
      maxWidth="container.xl"
      mx="auto"
      my={{ base: 6, lg: 60 }}
      px={{ base: 4 }}
    >
      <Flex
        justifyContent="space-between"
        alignItems="center"
        mb={{ base: 5, lg: 20 }}
      >
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 42 }}
          maxW={{ base: '50%', md: '30%' }}
        >
          The Man Behind Our Great Product
        </Heading>
        <Button title="Join us here" variant="secondary" arrow />
      </Flex>
      <Grid
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={{ base: 5, lg: 10 }}
      >
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Grid>
    </Box>
  )
}

export default Team

const Item = () => {
  const [isHover, setIsHover] = useState(false)
  const Container = chakra(motion.div)
  const MainContainer = chakra(motion.div)

  return (
    <MainContainer
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
      pos="relative"
      borderRadius={20}
      minH={{ base: '40', md: '2xs', lg: 'sm' }}
    >
      <Container
        initial={{
          display: 'none',
        }}
        animate={isHover ? 'hover' : 'rest'}
        variants={{
          rest: { opacity: 0 },
          hover: { display: 'block', opacity: 1 },
        }}
        zIndex={2}
        pos="absolute"
        inset={0}
        _before={{
          content: '""',
          bgColor: 'brand.500',
          pos: 'absolute',
          inset: 0,
          opacity: 0.3,
          borderRadius: 10,
        }}
      >
        <Box
          pos="absolute"
          bottom={0}
          color="white"
          pl={{ base: 3, md: 8 }}
          pb={{ base: 4, md: 10 }}
        >
          <Heading as="h3" fontSize={{ base: 16, lg: 36 }}>
            Johnny Depp
          </Heading>
          <Text fontSize={{ base: 14, lg: 24 }}>Project Manager</Text>
        </Box>
      </Container>
      <Image
        style={{ objectFit: 'contain' }}
        src="/assets/images/team_image.png"
        alt="team"
        fill
      />
    </MainContainer>
  )
}
