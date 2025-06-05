import Head from 'next/head'
import { Terminal, Code, Sparkles, Zap, Brain, FileText } from 'lucide-react'
import Container from '../../components/ui/Container'
import FadeIn from '../../components/ui/FadeIn'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../../components/ui/Card'

export default function CodeEditor() {
  const features = [
    {
      icon: Brain,
      title: 'AI Suggestions',
      description: 'Get intelligent code suggestions powered by advanced AI models trained on millions of code repositories.'
    },
    {
      icon: Code,
      title: 'Auto Refactoring',
      description: 'Automatically refactor and optimize your code while maintaining functionality and improving performance.'
    },
    {
      icon: FileText,
      title: 'Smart Documentation',
      description: 'Generate comprehensive documentation automatically from your code with AI-powered insights.'
    },
    {
      icon: Sparkles,
      title: 'Code Generation',
      description: 'Generate entire functions and classes from natural language descriptions and comments.'
    },
    {
      icon: Terminal,
      title: 'Integrated Terminal',
      description: 'Built-in terminal with AI-powered command suggestions and error resolution assistance.'
    },
    {
      icon: Zap,
      title: 'Real-time Collaboration',
      description: 'Collaborate with your team in real-time with AI-assisted pair programming features.'
    }
  ]

  return (
    <>
      <Head>
        <title>AI Code Editor - NexusPrime Innovations</title>
        <meta
          name="description"
          content="Intelligent code editing with AI-powered suggestions, refactoring, and documentation generation. Boost your productivity with smart assistance."
        />
      </Head>

      {/* Hero Section */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-green-50/20 to-green-50/30 py-24 sm:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
            <div className="absolute top-20 left-10 w-72 h-72 bg-green-200/30 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-10 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
          </div>
        </div>
        
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center relative">
              <div className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm font-medium text-green-700 ring-1 ring-green-200 mb-8">
                <Terminal className="w-4 h-4" />
                AI Code Editor
              </div>
              <h1 className="font-display text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl mb-6">
                Code with <span className="bg-gradient-to-r from-green-600 to-green-800 bg-clip-text text-transparent">AI Intelligence</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-8 mb-10">
                Intelligent code editing with AI-powered suggestions, refactoring, and documentation generation. Boost your productivity with smart assistance.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <a
                  href="/contact"
                  className="btn-primary group"
                >
                  Try Free
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
                AI-powered development experience
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Transform your coding workflow with intelligent assistance that understands your code and helps you write better software faster.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FadeIn key={feature.title} delay={index * 0.1}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-6 h-6 text-green-600" />
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

      {/* Code Example Section */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                See AI assistance in action
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Watch how our AI helps you write better code faster with intelligent suggestions and automated improvements.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.2}>
            <div className="bg-gray-900 rounded-2xl p-8 shadow-2xl">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span className="ml-4 text-gray-400 text-sm">AI Code Editor</span>
              </div>
                             <div className="font-mono text-sm">
                 <div className="text-gray-500">// AI suggests optimized function</div>
                 <div className="text-blue-400">function <span className="text-yellow-400">calculateTotal</span>(<span className="text-orange-400">items</span>) {'{'}</div>
                 <div className="text-gray-300 ml-4">return <span className="text-orange-400">items</span>.<span className="text-blue-400">reduce</span>((<span className="text-orange-400">sum, item</span>) {'=> '}<span className="text-orange-400">sum</span> + <span className="text-orange-400">item.price</span>, <span className="text-purple-400">0</span>);</div>
                 <div className="text-blue-400">{'}'}</div>
                 <div className="mt-4 text-gray-500">// AI generates documentation</div>
                 <div className="text-green-400">/**</div>
                 <div className="text-green-400"> * Calculates the total price of all items</div>
                 <div className="text-green-400"> * @param {'{'} Array {'}'} items - Array of item objects with price property</div>
                 <div className="text-green-400"> * @returns {'{'} number {'}'} Total price of all items</div>
                 <div className="text-green-400"> */</div>
               </div>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Benefits Section */}
      <div className="py-24 sm:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Boost your productivity
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Developers using our AI Code Editor report significant improvements in their coding efficiency.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <FadeIn delay={0}>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">3x</div>
                <div className="text-sm text-gray-600">Faster Development</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">50%</div>
                <div className="text-sm text-gray-600">Fewer Bugs</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">90%</div>
                <div className="text-sm text-gray-600">Auto Documentation</div>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div className="text-center">
                <div className="text-4xl font-bold text-green-600 mb-2">100+</div>
                <div className="text-sm text-gray-600">Languages Supported</div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 py-24 sm:py-32">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-4xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
                Ready to code with AI?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-2xl mx-auto">
                Join thousands of developers who are already coding faster and smarter with our AI-powered editor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-lg py-3 px-6 text-lg font-semibold bg-white text-green-900 hover:bg-white/90 transition-colors group"
                >
                  Start Free Trial
                  <Zap className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </a>
                <a
                  href="/contact"
                  className="inline-flex justify-center rounded-lg border border-white/30 py-3 px-6 text-lg font-semibold text-white hover:bg-white/10 transition-colors"
                >
                  Watch Demo
                </a>
              </div>
            </div>
          </FadeIn>
        </Container>
      </div>
    </>
  )
}
