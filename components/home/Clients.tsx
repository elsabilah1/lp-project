import { Box, Flex, Heading, Link, Text } from '@chakra-ui/react'
import Image from 'next/future/image'
import NextLink from 'next/link'
import Button from '../Button'

const Clients = () => {
  return (
    <Box bgColor={{ lg: 'brand.500' }} color="brand.100">
      <Box
        mb={12}
        px={{ base: 8, lg: 4 }}
        py={{ base: 8, lg: 24 }}
        mx={{ base: 4, lg: 'auto' }}
        bgColor="brand.500"
        borderRadius={{ base: 16, lg: 0 }}
        maxWidth="container.xl"
      >
        <Flex justifyContent="space-between">
          <Box>
            <Heading
              as="h2"
              fontSize={{ base: 18, md: 24, lg: 42 }}
              fontWeight="extrabold"
              mb={{ base: 2, md: 4 }}
            >
              OUR CLIENTS
            </Heading>
            <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 6, lg: 12 }}>
              We proudly present our latest featured works
            </Text>
          </Box>
          <Flex>
            <Button title="See more" variant="primary" arrow />
          </Flex>
        </Flex>
        <Flex
          wrap="wrap"
          justifyContent={{ base: 'space-evenly', lg: 'space-between' }}
          columnGap={4}
          rowGap={10}
        >
          <ClientItem name="avoskin" />
          <ClientItem name="klik" />
          <ClientItem name="bata" />
          <ClientItem name="bango" small />
          <ClientItem name="telkom" small />
          <ClientItem name="biznet" />
          <ClientItem name="frisianflag" small />
        </Flex>
      </Box>
    </Box>
  )
}

export default Clients

const ClientItem = ({ small, name }: { small?: boolean; name: string }) => {
  return (
    <Box
      pos="relative"
      minH={{ base: small ? '16' : '20', md: '24', lg: '28' }}
      minW={{
        base: small ? '16' : '28',
        md: small ? '24' : '2xs',
        lg: small ? '2xs' : 'xs',
      }}
      filter="grayscale(100%)"
      _hover={{ filter: 'grayscale(0%)' }}
    >
      <NextLink href="/" passHref>
        <Link>
          <Image
            src={`/assets/images/client_${name}.png`}
            alt="avoskin"
            style={{ objectFit: 'contain' }}
            fill
          />
        </Link>
      </NextLink>
    </Box>
  )
}
