import About from '@/components/home/About'
import Featured from '@/components/home/Featured'
import Hero from '@/components/home/Hero'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Layout from '../components/layouts/Layout'

const Home: NextPage = () => {
  const router = useRouter()

  return (
    <Layout>
      <Hero />
      <About />
      <Featured />
    </Layout>
  )
}

export default Home
