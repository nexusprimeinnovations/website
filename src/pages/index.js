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
        <meta property="og:title" content="NexusPrime Innovations - AI Agents & Development Solutions" />
        <meta property="og:description" content="NexusPrime Innovations provides cutting-edge AI agent development tools and platforms for the next generation of intelligent applications." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexusprimeinnovations.com/" />
        <meta property="og:image" content="https://nexusprimeinnovations.com/images/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="NexusPrime Innovations - AI Agents & Development Solutions" />
        <meta name="twitter:description" content="NexusPrime Innovations provides cutting-edge AI agent development tools and platforms for the next generation of intelligent applications." />
        <meta name="twitter:image" content="https://nexusprimeinnovations.com/images/logo.svg" />
      </Head>

      <Hero />
      <ProductsOverview />
      <Features />
      <Testimonials />
      <CTASection />
    </>
  )
}