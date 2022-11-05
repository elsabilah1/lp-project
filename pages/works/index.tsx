import Layout from '@/components/layouts/Layout'
import Content from '@/components/works/Content'
import Hero from '@/components/works/Hero'
import { NextPage } from 'next'

const Works: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Content />
    </Layout>
  )
}

export default Works
