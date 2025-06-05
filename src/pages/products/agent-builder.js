import Head from 'next/head'
import { Bot, Code, Zap, Users, Shield, Gauge } from 'lucide-react'
import Container from '../../components/ui/Container'
import FadeIn from '../../components/ui/FadeIn'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'

export default function AgentBuilder() {
  const features = [
    {
      icon: Code,
      title: 'Drag & Drop Interface',
      description: 'Build AI agents visually with our intuitive drag-and-drop interface. No coding required.'
    },
    {
      icon: Bot,
      title: 'Pre-built Templates',
      description: 'Start with proven templates for common use cases like customer support, data analysis, and more.'
    },
    {
      icon: Zap,
      title: 'Custom Training',
      description: 'Train your agents on your specific data and business logic for optimal performance.'
    },
    {
      icon: Users,
      title: 'Team Collaboration',
      description: 'Work together with your team to build and refine AI agents in real-time.'
    },
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'Bank-grade security with end-to-end encryption and compliance certifications.'
    },
    {
      icon: Gauge,
      title: 'Performance Analytics',
      description: 'Monitor and optimize your agents with detailed performance metrics and insights.'
    }
  ]

  return (
    <>
      <Head>
        <title>AI Agent Builder - NexusPrime Innovations</title>
        <meta
          name="description"
          content="Build custom AI agents with our intuitive platform. Design, train, and deploy agents for any use case with drag-and-drop simplicity."
        />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-primary-50/30 py-24 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-200 mb-8">
                <Bot className="w-4 h-4" />
                AI Agent Builder
              </div>
              <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl mb-6">
                Build Custom <span className="gradient-text">AI Agents</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-8 mb-10">
                Create intelligent AI agents with our intuitive builder platform. Design, train, and deploy agents for any use case with drag-and-drop simplicity.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="btn-primary group"
                >
                  Start Building Free
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
                Everything you need to build AI agents
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Powerful tools and features to create, train, and deploy intelligent agents that understand your business.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-primary-600" />
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

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-primary-600 to-primary-700 py-24 sm:py-32">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Ready to build your first AI agent?
              </h2>
              <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are already building the future with NexusPrime's AI Agent Builder.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-lg py-3 px-6 text-lg font-semibold bg-white text-primary-900 hover:bg-white/90 transition-colors group"
                >
                  Get Started Free
                  <Zap className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-lg border border-white/30 py-3 px-6 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Schedule Demo
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  )
}
