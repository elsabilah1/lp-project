import About from '@/components/home/About'
import Clients from '@/components/home/Clients'
import Featured from '@/components/home/Featured'
import Hero from '@/components/home/Hero'
import Services from '@/components/home/Services'
import Layout from '@/components/layouts/Layout'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <About />
      <Featured />
      <Services />
      <Clients />
    </Layout>
  )
}

export default Home
