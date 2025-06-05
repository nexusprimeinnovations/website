import Container from '../ui/Container'
import { FadeIn } from '../ui/FadeIn'
import { Card } from '../ui/Card'
import { 
  Zap, 
  Shield, 
  Gauge, 
  Code, 
  Brain, 
  Workflow,
  Sparkles,
  CheckCircle 
} from 'lucide-react'

const features = [
  {
    name: 'Lightning Fast Development',
    description: 'Build and deploy AI agents in minutes, not months. Our intuitive platform accelerates your development workflow.',
    icon: Zap,
    color: 'yellow',
  },
  {
    name: 'Enterprise Security',
    description: 'Bank-grade security with end-to-end encryption, SOC 2 compliance, and advanced threat protection.',
    icon: Shield,
    color: 'green',
  },
  {
    name: 'Auto-Scaling Infrastructure',
    description: 'Automatically scale from zero to millions of requests. Pay only for what you use with our intelligent scaling.',
    icon: Gauge,
    color: 'blue',
  },
  {
    name: 'No-Code Builder',
    description: 'Create sophisticated AI agents without writing code. Drag, drop, and configure with our visual builder.',
    icon: Workflow,
    color: 'purple',
  },
  {
    name: 'Advanced AI Models',
    description: 'Access cutting-edge AI models including GPT-4, Claude, and custom models trained on your data.',
    icon: Brain,
    color: 'pink',
  },
  {
    name: 'Developer-First API',
    description: 'Comprehensive APIs and SDKs for seamless integration. Built by developers, for developers.',
    icon: Code,
    color: 'indigo',
  },
]

const colorClasses = {
  yellow: 'bg-yellow-100 text-yellow-600',
  green: 'bg-green-100 text-green-600',
  blue: 'bg-blue-100 text-blue-600',
  purple: 'bg-purple-100 text-purple-600',
  pink: 'bg-pink-100 text-pink-600',
  indigo: 'bg-indigo-100 text-indigo-600',
}

export default function Features() {
  return (
    <div id="features" className="py-24 sm:py-32 bg-white">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-200 mb-6">
              <Sparkles className="w-4 h-4" />
              Platform Features
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Everything you need to succeed
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Focus on building great AI agents. We'll handle the infrastructure, scaling, and operations so you can ship faster.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <FadeIn 
                  key={feature.name} 
                  className="h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card hover className="h-full p-8 text-center group">
                    <div className={`w-16 h-16 ${colorClasses[feature.color]} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </Card>
                </FadeIn>
              )
            })}
          </div>
        </div>

        {/* Additional benefits section */}
        <FadeIn className="mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Why developers choose NexusPrime
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join thousands of developers who trust our platform to build and deploy AI agents at scale.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { label: '99.9% Uptime', value: 'Guaranteed' },
                { label: 'Deploy Time', value: '< 30 seconds' },
                { label: 'Global CDN', value: '200+ locations' },
                { label: 'Support', value: '24/7 Expert help' },
              ].map((stat, index) => (
                <div key={stat.label} className="text-center">
                  <div className="text-2xl font-bold text-primary-600 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}