import {
  Box,
  Button,
  Grid,
  Heading,
  Menu,
  MenuButton,
  MenuList,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from '@chakra-ui/react'
import Image from 'next/future/image'
import ArticleCard from './ArticleCard'

const Content = () => {
  return (
    <Box px={4} mb={12} mx="auto" maxWidth="container.xl">
      <Box mt={{ base: 10, md: 28 }} textAlign={{ md: 'center' }}>
        <Heading
          as="h2"
          fontSize={{ base: 18, md: 24, lg: 42 }}
          fontWeight="extrabold"
          mb={{ base: 2, md: 4 }}
        >
          TECHNOLOGY INSIGHT
        </Heading>
        <Text fontSize={{ base: 12, lg: 24 }} mb={{ base: 2, md: 12 }}>
          Read more, understand more about technology and software
        </Text>
      </Box>

      <Tabs variant="unstyled">
        <TabList
          gap={{ md: 16 }}
          display={{ base: 'none', md: 'flex' }}
          justifyContent="center"
          color="brand.300"
        >
          <TabItem title="All" />
          <TabItem title="Software" />
          <TabItem title="Website" />
          <TabItem title="Web App" />
          <TabItem title="Technology" />
        </TabList>
        <Menu>
          <MenuButton
            as={Button}
            bgColor="brand.100"
            borderColor="brand.200"
            borderWidth={1}
            display={{ base: 'block', md: 'none' }}
            fontSize={{ base: 14, lg: 24 }}
            rightIcon={<ChevronDownIcon />}
          >
            Categories
          </MenuButton>
          <MenuList>
            <TabList color="brand.300" flexDir="column">
              <TabItem title="All" />
              <TabItem title="Software" />
              <TabItem title="Website" />
              <TabItem title="Web App" />
              <TabItem title="Technology" />
            </TabList>
          </MenuList>
        </Menu>
        <TabPanels>
          <TabPanel p={0}>
            <Grid my={{ base: 6, md: 14 }} gap={{ base: 10, lg: 16 }}>
              <ArticleCard />
              <ArticleCard />
              <ArticleCard />
            </Grid>
          </TabPanel>
          <TabPanel>
            <p>two!</p>
          </TabPanel>
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          <TabPanel>
            <p>four!</p>
          </TabPanel>
          <TabPanel>
            <p>five!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  )
}

export default Content

const ChevronDownIcon = () => {
  return (
    <Image
      src="/assets/icons/chevron-down.svg"
      alt="chevron-down"
      width={16}
      height={16}
    />
  )
}

const TabItem = ({ title }: { title: string }) => {
  return (
    <Tab
      fontSize={{ base: 14, lg: 24 }}
      borderWidth={{ md: 1 }}
      borderColor="brand.300"
      _selected={{
        color: 'white',
        bg: 'brand.500',
      }}
    >
      {title}
    </Tab>
  )
}
