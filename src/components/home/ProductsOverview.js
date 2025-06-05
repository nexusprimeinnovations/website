import { Button } from '../ui/Button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '../ui/Card'
import Container from '../ui/Container'
import { FadeIn } from '../ui/FadeIn'
import { Code, Zap, Sparkles, ArrowRight, Bot, Settings, Terminal } from 'lucide-react'

const products = [
  {
    name: 'AI Agent Builder',
    description: 'Create custom AI agents with our intuitive builder platform. Design, train, and deploy agents for any use case with drag-and-drop simplicity.',
    icon: Bot,
    color: 'primary',
    href: '/products/agent-builder',
    features: ['Drag & Drop Interface', 'Pre-built Templates', 'Custom Training'],
  },
  {
    name: 'Agent Platform',
    description: 'A scalable platform to run and manage AI agents. Monitor performance, scale resources, and optimize operations with real-time analytics.',
    icon: Settings,
    color: 'blue',
    href: '/products/agent-platform',
    features: ['Real-time Monitoring', 'Auto Scaling', 'Performance Analytics'],
  },
  {
    name: 'AI Code Editor',
    description: 'Intelligent code editing with AI-powered suggestions, refactoring, and documentation generation. Boost your productivity with smart assistance.',
    icon: Terminal,
    color: 'green',
    href: '/products/code-editor',
    features: ['AI Suggestions', 'Auto Refactoring', 'Smart Documentation'],
  },
]

const colorClasses = {
  primary: {
    bg: 'bg-primary-100',
    text: 'text-primary-600',
    border: 'border-primary-200',
  },
  blue: {
    bg: 'bg-blue-100',
    text: 'text-blue-600',
    border: 'border-blue-200',
  },
  green: {
    bg: 'bg-green-100',
    text: 'text-green-600',
    border: 'border-green-200',
  },
}

export default function ProductsOverview() {
  return (
    <div id="products" className="py-24 sm:py-32 bg-gray-50/50">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-200 mb-6">
              <Sparkles className="w-4 h-4" />
              Our Products
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Everything you need
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Comprehensive suite of tools for AI agent development and deployment
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {products.map((product, index) => {
            const Icon = product.icon
            const colors = colorClasses[product.color]
            
            return (
              <FadeIn key={product.name} className="h-full" style={{ animationDelay: `${index * 0.1}s` }}>
                <Card variant="elevated" hover className="h-full flex flex-col">
                  <CardHeader>
                    <div className={`w-16 h-16 ${colors.bg} rounded-2xl flex items-center justify-center mb-6 ring-1 ${colors.border}`}>
                      <Icon className={`w-8 h-8 ${colors.text}`} />
                    </div>
                    <CardTitle className="text-xl">{product.name}</CardTitle>
                    <CardDescription className="text-base">
                      {product.description}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="flex-grow">
                    <div className="space-y-3">
                      <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Features:</h4>
                      {product.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <div className={`w-1.5 h-1.5 ${colors.bg} rounded-full`}></div>
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>

                  <CardFooter>
                    <Button 
                      href={product.href} 
                      variant="outline" 
                      color="gray"
                      className="group w-full justify-center"
                    >
                      Learn more
                      <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </CardFooter>
                </Card>
              </FadeIn>
            )
          })}
        </div>

        {/* CTA Section */}
        <FadeIn className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to get started?
            </h3>
            <p className="text-primary-100 mb-6 max-w-2xl mx-auto">
              Join thousands of developers building the future with AI agents. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                href="/contact" 
                variant="solid" 
                color="white"
                className="group"
              >
                Get Started Free
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                href="/contact" 
                className="border-primary-400 text-white hover:bg-primary-500"
                variant="outline"
              >
                Schedule Demo
              </Button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}