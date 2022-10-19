import Description from '@/components/about/Description'
import Hero from '@/components/about/Hero'
import Statistic from '@/components/about/Statistic'
import Team from '@/components/about/Team'
import WhyUs from '@/components/about/WhyUs'
import Layout from '@/components/layouts/Layout'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <Layout>
      <Hero />
      <Statistic />
      <Description />
      <WhyUs />
      <Team />
    </Layout>
  )
}

export default About
