import { Box, Heading, Text } from '@chakra-ui/react'

interface Props {
  total: number
  title: string
  desc: string
}

const StatisticBox = (props: Props) => {
  return (
    <Box>
      <Heading
        as="h2"
        fontSize={{ base: 32, lg: '8xl' }}
        mb={{ base: 2, lg: 10 }}
      >
        {props.total}
      </Heading>
      <Heading as="h3" fontSize={{ base: 16, lg: 36 }} mb={{ base: 1, lg: 4 }}>
        {props.title}
      </Heading>
      <Text fontSize={{ base: 14, lg: '2xl' }}>{props.desc}</Text>
    </Box>
  )
}

export default StatisticBox
