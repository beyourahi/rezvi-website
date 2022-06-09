import { Hero } from '@/components/hero/hero'
import { Layout } from '@/components/layout'
import type { NextPage } from 'next'

const Home: NextPage = () => (
  <Layout>
    <Hero />
  </Layout>
)

export default Home
