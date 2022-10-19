import { Flex } from '@chakra-ui/react'
import StatisticBox from './StatisticBox'

const Statistic = () => {
  return (
    <Flex
      my={{ base: 10, lg: 100 }}
      justifyContent={{ base: 'space-around', lg: 'space-between' }}
      textAlign="center"
      maxWidth="container.xl"
      mx="auto"
      px={4}
    >
      <StatisticBox total={50} title="Website" desc="had Develop" />
      <StatisticBox total={38} title="Mobile App" desc="had Develop" />
      <StatisticBox total={27} title="Talented Staff" desc="had Joined" />
    </Flex>
  )
}

export default Statistic
