import Head from 'next/head'
import Hero from '../components/home/Hero'
import Features from '../components/home/Features'
import ProductsOverview from '../components/home/ProductsOverview'
import CTASection from '../components/home/CTASection'
import Testimonials from '../components/home/Testimonials'

export default function Home() {
  return (
    <>
      <Head>
        <title>NexusPrime Innovations - AI Agents & Development Solutions</title>
        <meta
          name="description"
          content="NexusPrime Innovations provides cutting-edge AI agent development tools and platforms for the next generation of intelligent applications."
        />
      </Head>

      <Hero />
      <ProductsOverview />
      <Features />
      <Testimonials />
      <CTASection />
    </>
  )
}