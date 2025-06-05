import Head from 'next/head'
import { Users, Target, Zap, Heart } from 'lucide-react'
import Container from '../components/ui/Container'
import FadeIn from '../components/ui/FadeIn'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'

export default function About() {
  const values = [
    {
      icon: Zap,
      title: 'Innovation First',
      description: 'We push the boundaries of what\'s possible with AI technology, constantly exploring new frontiers.'
    },
    {
      icon: Users,
      title: 'Developer-Centric',
      description: 'Everything we build is designed with developers in mind, prioritizing ease of use and powerful functionality.'
    },
    {
      icon: Target,
      title: 'Mission-Driven',
      description: 'We\'re committed to democratizing AI and making intelligent automation accessible to everyone.'
    },
    {
      icon: Heart,
      title: 'Community Focus',
      description: 'We believe in building strong communities and supporting developers in their AI journey.'
    }
  ]

  return (
    <>
      <Head>
        <title>About Us - NexusPrime Innovations</title>
        <meta
          name="description"
          content="Learn about NexusPrime Innovations, our mission to democratize AI, and the team building the future of intelligent automation."
        />
        <meta property="og:title" content="About Us - NexusPrime Innovations" />
        <meta property="og:description" content="Learn about NexusPrime Innovations, our mission to democratize AI, and the team building the future of intelligent automation." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.nexusprime.com/about" />
        <meta property="og:image" content="https://www.nexusprime.com/images/logo.svg" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="About Us - NexusPrime Innovations" />
        <meta name="twitter:description" content="Learn about NexusPrime Innovations, our mission to democratize AI, and the team building the future of intelligent automation." />
        <meta name="twitter:image" content="https://www.nexusprime.com/images/logo.svg" />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-primary-50/20 to-primary-50/30 py-24 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center relative">
              <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl mb-6">
                Building the <span className="gradient-text">Future of AI</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-8 mb-10">
                At NexusPrime Innovations, we're on a mission to democratize AI and make intelligent automation accessible to developers and businesses worldwide.
              </p>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Mission Section */}
      <div className="py-24 sm:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Our Mission
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                We believe that AI should be accessible, powerful, and easy to use. Our platform empowers developers to build intelligent applications without the complexity traditionally associated with AI development.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Democratizing AI Technology</h3>
                <p className="text-gray-600 mb-6">
                  We started NexusPrime with a simple belief: AI technology should be accessible to every developer, regardless of their background or experience level. Our platform removes the barriers to AI development, providing intuitive tools that make building intelligent applications as easy as traditional software development.
                </p>
                <p className="text-gray-600">
                  From startups to enterprise organizations, we're helping teams around the world harness the power of AI to solve real problems and create meaningful impact.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">10,000+</div>
                    <div className="text-sm text-gray-600">Developers</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">1M+</div>
                    <div className="text-sm text-gray-600">AI Agents</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">50+</div>
                    <div className="text-sm text-gray-600">Countries</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">99.9%</div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* Values Section */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Our Values
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                The principles that guide everything we do at NexusPrime Innovations.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </div>

      {/* Team Section */}
      <div className="py-24 sm:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Built by Experts
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Our team combines decades of experience in AI research, software engineering, and product development.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">Join Our Mission</h3>
              <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
                We're always looking for talented individuals who share our passion for AI and want to help shape the future of intelligent automation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-lg py-3 px-6 text-lg font-semibold bg-white text-primary-900 hover:bg-white/90 transition-colors"
                >
                  View Open Positions
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-lg border border-white/30 py-3 px-6 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  )
}
