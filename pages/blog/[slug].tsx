import Description from '@/components/blogs/article/Description'
import Hero from '@/components/blogs/article/Hero'
import RelatedArticles from '@/components/blogs/article/RelatedArticles'
import Layout from '@/components/layouts/Layout'
import { Box } from '@chakra-ui/react'
import { useRouter } from 'next/router'

const Article = () => {
  const router = useRouter()

  return (
    <Layout>
      <Hero />
      <Description />
      <Box px="4">
        <Box
          borderBottom="2px"
          borderColor="brand.300"
          maxW="container.xl"
          mx="auto"
        />
      </Box>
      <RelatedArticles />
    </Layout>
  )
}

export default Article
