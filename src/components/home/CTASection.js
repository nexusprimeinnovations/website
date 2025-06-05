import { Button } from '../ui/Button'
import Container from '../ui/Container'
import FadeIn from '../ui/FadeIn'
import { ArrowRight, Sparkles, Zap, Users, TrendingUp } from 'lucide-react'

export default function CTASection() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 py-24 sm:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-6xl">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-400/20 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <Container className="relative">
        <FadeIn>
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 text-sm font-medium text-white ring-1 ring-white/20 mb-8">
              <Sparkles className="w-4 h-4" />
              Join the AI Revolution
            </div>

            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl mb-6">
              Ready to build the{' '}
              <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">
                future
              </span>
              ?
            </h2>
            
            <p className="mx-auto max-w-2xl text-xl leading-8 text-primary-100 mb-10">
              Join thousands of developers building intelligent AI agents with NexusPrime. 
              Start your journey today and transform how you build applications.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12">
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mx-auto mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">10,000+</div>
                <div className="text-sm text-primary-200">Active Developers</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mx-auto mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">1M+</div>
                <div className="text-sm text-primary-200">AI Agents Deployed</div>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-12 h-12 bg-white/10 rounded-xl mx-auto mb-3">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <div className="text-2xl font-bold text-white">99.9%</div>
                <div className="text-sm text-primary-200">Uptime SLA</div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button 
                href="/contact" 
                variant="solid" 
                color="white"
                className="group text-lg px-8 py-4"
              >
                Start Building Free
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                href="#products" 
                className="border-white/30 text-white hover:bg-white/10 text-lg px-8 py-4"
                variant="outline"
              >
                View Live Demo
              </Button>
            </div>

            <p className="mt-6 text-sm text-primary-200">
              No credit card required • Free tier available • Deploy in seconds
            </p>
          </div>
        </FadeIn>

        {/* Feature highlights */}
        <FadeIn className="mt-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Zap, title: 'Deploy in 30s', desc: 'From code to production instantly' },
              { icon: Users, title: 'Team Collaboration', desc: 'Built for teams of all sizes' },
              { icon: TrendingUp, title: 'Auto Scaling', desc: 'Handle any traffic volume' },
              { icon: Sparkles, title: 'AI-Powered', desc: 'Smart suggestions & optimization' },
            ].map((feature, index) => {
              const Icon = feature.icon
              return (
                <div 
                  key={feature.title} 
                  className="text-center p-6 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-200"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-sm text-primary-200">{feature.desc}</p>
                </div>
              )
            })}
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}