import { Box, chakra, Grid, GridItem, Heading, Text } from '@chakra-ui/react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

interface Props {
  bgImageUrl: string
  title: string
  label: string
}

const CareerCard = (props: Props) => {
  const [isHover, setIsHover] = useState(false)
  const router = useRouter()

  const CardContainer = chakra(motion.div)
  const Overlay = chakra(motion.div)
  const ArrowContainer = chakra(motion.div)

  return (
    <CardContainer
      initial={false}
      onClick={() => router.push('/careers/1')}
      animate={isHover ? 'hover' : 'rest'}
      onHoverStart={() => setIsHover(true)}
      onHoverEnd={() => setIsHover(false)}
    >
      <Box
        bgImage={`url(${props.bgImageUrl})`}
        bgRepeat="no-repeat"
        bgSize="cover"
        borderRadius={4}
        textAlign="start"
        h={{ base: '52', md: '2xs', lg: 'xs' }}
      >
        <Grid
          h="full"
          pos="relative"
          alignItems="end"
          templateColumns="repeat(6, 1fr)"
          _hover={{
            alignItems: 'center',
          }}
          p={3}
        >
          <GridItem colSpan={5} zIndex="2">
            <Text
              fontWeight="light"
              fontSize={{ base: 11, md: 13, lg: 20 }}
              color="brand.400"
              textTransform="capitalize"
              mb={{ base: 1, lg: 2 }}
            >
              {props.label}
            </Text>
            <Heading
              textTransform="capitalize"
              fontSize={{ base: 14, md: 20, lg: 28 }}
              mb={{ base: 1, lg: 2 }}
            >
              {props.title}
            </Heading>
            <Text fontSize={{ base: 11, md: 13, lg: 20 }} color="brand.400">
              Click to see details
            </Text>
          </GridItem>
          <GridItem justifySelf="end" zIndex="2">
            <ArrowContainer
              initial={{
                display: 'none',
              }}
              animate={isHover ? 'hover' : 'rest'}
              variants={{
                rest: { opacity: 0 },
                hover: { display: 'block', opacity: 1 },
              }}
            >
              <Image
                src="/assets/icons/arrow-right-black.svg"
                alt="arrow"
                width={36}
                height={36}
              />
            </ArrowContainer>
          </GridItem>
          <Overlay
            initial={{
              display: 'none',
              opacity: 0.4,
            }}
            animate={isHover ? 'hover' : 'rest'}
            variants={{
              rest: { opacity: 0 },
              hover: { display: 'block' },
            }}
            pos="absolute"
            bgColor="brand.100"
            h="full"
            w="full"
          />
        </Grid>
      </Box>
    </CardContainer>
  )
}

export default CareerCard
