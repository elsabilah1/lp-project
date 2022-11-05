import { Grid, Text } from '@chakra-ui/react'
import ArticleCard from '../ArticleCard'

const RelatedArticles = () => {
  return (
    <Grid
      px="4"
      mx="auto"
      mt={{ base: 6, lg: 20 }}
      mb={{ base: 36, lg: 72 }}
      maxWidth="container.xl"
      gap={{ base: 5, lg: 14 }}
    >
      <Text
        fontWeight="800"
        fontSize={{ base: 16, lg: 32 }}
        letterSpacing="wide"
      >
        Related Articles
      </Text>
      <ArticleCard />
      <ArticleCard />
    </Grid>
  )
}

export default RelatedArticles
