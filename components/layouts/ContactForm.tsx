import {
  Box,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  GridItem,
  Heading,
  Input,
  Stack,
  Text,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'
import Button from '../Button'
import SocialLinks from './SocialLinks'

const ContactForm = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const handleName = (e: any) => setName(e.target.value)
  const handleEmail = (e: any) => setEmail(e.target.value)
  const handleMessage = (e: any) => setMessage(e.target.value)

  return (
    <Grid
      gap={{ base: 6, lg: 16 }}
      templateColumns={{ sm: 'repeat(2, 1fr)' }}
      maxWidth="container.xl"
      mx="auto"
      my={{ base: 4, lg: 20 }}
      pb={8}
      px={4}
    >
      <GridItem>
        <Box>
          <Heading
            as="h2"
            fontSize={{ base: 18, md: 24, lg: 42 }}
            fontWeight="extrabold"
            mb={{ base: 2, md: 4 }}
          >
            Hi, may we assist you?
          </Heading>
          <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 4, md: 12 }}>
            We are here to help you develop your business and solve your
            problem. Let’s figure the solution with us!
          </Text>
        </Box>
        <Box maxW="70%">
          <Heading
            as="h2"
            fontSize={{ base: 18, md: 24, lg: 42 }}
            fontWeight="extrabold"
            mb={{ base: 2, md: 4 }}
          >
            Contact Us
          </Heading>
          <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 4, md: 12 }}>
            Find and explore our work through social media below
          </Text>
        </Box>
        <SocialLinks black />
      </GridItem>
      <GridItem>
        <Stack gap={4}>
          <FormControl>
            <FormLabel fontSize={{ base: 14, lg: 24 }}>Name</FormLabel>
            <Input
              value={name}
              onChange={handleName}
              fontSize={{ base: 14, lg: 24 }}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={{ base: 14, lg: 24 }}>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={handleEmail}
              fontSize={{ base: 14, lg: 24 }}
            />
          </FormControl>
          <FormControl>
            <FormLabel fontSize={{ base: 14, lg: 24 }}>Message</FormLabel>
            <Textarea
              value={message}
              onChange={handleMessage}
              size="xs"
              fontSize={{ base: 14, lg: 24 }}
            />
          </FormControl>
          <Flex>
            <Button title="Send message" variant="secondary" arrow />
          </Flex>
        </Stack>
      </GridItem>
    </Grid>
  )
}

export default ContactForm
