import Content from '@/components/careers/Content'
import Hero from '@/components/careers/Hero'
import Layout from '@/components/layouts/Layout'
import { NextPage } from 'next'

const Careers: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Content />
    </Layout>
  )
}

export default Careers
