import Image from 'next/image'
import { Button } from '../ui/Button'
import Container from '../ui/Container'
import { FadeIn } from '../ui/FadeIn'
import { ArrowRight, Sparkles, Zap, Code } from 'lucide-react'

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50/20 to-primary-50/30">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200/30 rounded-full blur-3xl"></div>
          <div className="absolute top-40 right-10 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-1/3 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl"></div>
        </div>
      </div>

      <Container className="relative pt-20 pb-16 text-center lg:pt-32">
        <FadeIn className="mx-auto max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-200 mb-8">
            <Sparkles className="w-4 h-4" />
            Building the Future of AI
          </div>

          <h1 className="font-display mx-auto max-w-4xl text-5xl font-bold tracking-tight text-slate-900 sm:text-7xl">
            Building the Future of{' '}
            <span className="gradient-text">
              AI Agents
            </span>
          </h1>
          
          <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-8">
            Empower your applications with intelligent AI agents. Build, deploy, and scale with NexusPrime's comprehensive suite of AI development tools.
          </p>
          
          <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
            <Button href="/contact" className="group">
              Get started
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button href="#products" variant="outline" color="gray">
              View products
            </Button>
          </div>
        </FadeIn>

        {/* Hero illustration/features */}
        <FadeIn className="relative mt-16">
          <div className="relative mx-auto max-w-6xl">
            {/* Feature cards floating */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Agent Builder</h3>
                <p className="text-sm text-gray-600">Create custom AI agents with our intuitive platform</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300 md:mt-8">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">Agent Platform</h3>
                <p className="text-sm text-gray-600">Scalable platform to run and manage AI agents</p>
              </div>
              
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                  <Sparkles className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">AI Code Editor</h3>
                <p className="text-sm text-gray-600">Intelligent code editing with AI-powered suggestions</p>
              </div>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}