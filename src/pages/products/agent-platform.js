import Head from 'next/head'
import { Settings, Zap, Shield, Gauge, Users, BarChart3 } from 'lucide-react'
import Container from '../../components/ui/Container'
import FadeIn from '../../components/ui/FadeIn'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'

export default function AgentPlatform() {
  const features = [
    {
      icon: Gauge,
      title: 'Real-time Monitoring',
      description: 'Monitor your AI agents in real-time with comprehensive dashboards and alerts.'
    },
    {
      icon: Zap,
      title: 'Auto Scaling',
      description: 'Automatically scale your agents based on demand. Handle any traffic volume seamlessly.'
    },
    {
      icon: BarChart3,
      title: 'Performance Analytics',
      description: 'Deep insights into agent performance, usage patterns, and optimization opportunities.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with SOC 2 compliance, encryption, and advanced threat protection.'
    },
    {
      icon: Users,
      title: 'Team Management',
      description: 'Collaborate with your team, manage permissions, and track agent development.'
    },
    {
      icon: Settings,
      title: 'Advanced Configuration',
      description: 'Fine-tune your agents with advanced configuration options and custom integrations.'
    }
  ]

  return (
    <>
      <Head>
        <title>Agent Platform - NexusPrime Innovations</title>
        <meta
          name="description"
          content="A scalable platform to run and manage AI agents. Monitor performance, scale resources, and optimize operations with real-time analytics."
        />
        <meta property="og:title" content="Agent Platform - NexusPrime Innovations" />
        <meta property="og:description" content="A scalable platform to run and manage AI agents. Monitor performance, scale resources, and optimize operations with real-time analytics." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://nexusprimeinnovations.com/products/agent-platform" />
        <meta property="og:image" content="https://nexusprimeinnovations.com/images/agent-platform.webp" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Agent Platform - NexusPrime Innovations" />
        <meta name="twitter:description" content="A scalable platform to run and manage AI agents. Monitor performance, scale resources, and optimize operations with real-time analytics." />
        <meta name="twitter:image" content="https://nexusprimeinnovations.com/images/agent-platform.webp" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Product",
              "name": "Agent Platform - NexusPrime Innovations",
              "description": "A scalable platform to run and manage AI agents. Monitor performance, scale resources, and optimize operations with real-time analytics.",
              "image": "https://nexusprimeinnovations.com/images/agent-platform.webp",
              "brand": {
                "@type": "Brand",
                "name": "NexusPrime Innovations"
              },
              "url": "https://nexusprimeinnovations.com/products/agent-platform"
            })
          }}
        />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-blue-50/30 py-24 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 ring-1 ring-blue-200 mb-8">
                <Settings className="w-4 h-4" />
                Agent Platform
              </div>
              <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl mb-6">
                Scale Your <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">AI Agents</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-8 mb-10">
                A scalable platform to run and manage AI agents. Monitor performance, scale resources, and optimize operations with real-time analytics.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="btn-primary group"
                >
                  Start Free Trial
                  <Zap className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="#features"
                  className="btn-secondary"
                >
                  View Features
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Features Section */}
      <div id="features" className="py-24 sm:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Enterprise-grade platform for AI agents
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Everything you need to deploy, monitor, and scale AI agents in production environments.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </div>

      {/* Stats Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Trusted by enterprises worldwide
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Our platform powers millions of AI agent interactions every day.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">99.9%</div>
                <div className="text-sm text-gray-600">Uptime SLA</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">1M+</div>
                <div className="text-sm text-gray-600">Agents Deployed</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">&lt;100ms</div>
                <div className="text-sm text-gray-600">Response Time</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
                <div className="text-sm text-gray-600">Expert Support</div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 py-24 sm:py-32">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Ready to scale your AI agents?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join enterprise teams who trust NexusPrime Innovations to power their AI agent infrastructure.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-lg py-3 px-6 text-lg font-semibold bg-white text-blue-900 hover:bg-white/90 transition-colors group"
                >
                  Start Free Trial
                  <Zap className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-lg border border-white/30 py-3 px-6 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Contact Sales
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  )
}
