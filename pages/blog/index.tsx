import Content from '@/components/blogs/Content'
import Hero from '@/components/blogs/Hero'
import Layout from '@/components/layouts/Layout'
import { NextPage } from 'next'

const Blog: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Content />
    </Layout>
  )
}

export default Blog
