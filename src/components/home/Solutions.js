import Container from '../ui/Container'
import FadeIn from '../ui/FadeIn'
import { Card } from '../ui/Card'
import { 
  Building2, 
  ShoppingCart, 
  HeadphonesIcon, 
  Briefcase,
  Users,
  TrendingUp,
  ArrowRight,
  CheckCircle 
} from 'lucide-react'

const solutions = [
  {
    name: 'Customer Support',
    description: 'Deploy intelligent support agents that handle customer inquiries 24/7, reducing response time and improving satisfaction.',
    icon: HeadphonesIcon,
    color: 'blue',
    benefits: ['24/7 availability', 'Instant responses', '90% query resolution'],
    industries: ['SaaS', 'E-commerce', 'Healthcare']
  },
  {
    name: 'Sales Automation',
    description: 'AI agents that qualify leads, schedule meetings, and nurture prospects throughout the entire sales funnel.',
    icon: TrendingUp,
    color: 'green',
    benefits: ['Lead qualification', 'Meeting scheduling', 'Follow-up automation'],
    industries: ['Real Estate', 'B2B Services', 'Insurance']
  },
  {
    name: 'Enterprise Operations',
    description: 'Streamline internal processes with AI agents that handle document processing, data analysis, and workflow automation.',
    icon: Building2,
    color: 'purple',
    benefits: ['Process automation', 'Data insights', 'Cost reduction'],
    industries: ['Finance', 'Manufacturing', 'Legal']
  },
  {
    name: 'E-commerce Assistant',
    description: 'Personalized shopping experiences with AI agents that recommend products, handle orders, and provide post-purchase support.',
    icon: ShoppingCart,
    color: 'orange',
    benefits: ['Product recommendations', 'Order assistance', 'Personalization'],
    industries: ['Retail', 'Fashion', 'Electronics']
  },
  {
    name: 'HR & Recruitment',
    description: 'Automate candidate screening, interview scheduling, and employee onboarding with intelligent HR agents.',
    icon: Users,
    color: 'pink',
    benefits: ['Candidate screening', 'Interview coordination', 'Onboarding automation'],
    industries: ['Staffing', 'Technology', 'Consulting']
  },
  {
    name: 'Business Intelligence',
    description: 'AI agents that analyze data, generate reports, and provide actionable insights for better decision making.',
    icon: Briefcase,
    color: 'indigo',
    benefits: ['Data analysis', 'Report generation', 'Predictive insights'],
    industries: ['Analytics', 'Consulting', 'Startups']
  },
]

const colorClasses = {
  blue: 'bg-blue-100 text-blue-600',
  green: 'bg-green-100 text-green-600',
  purple: 'bg-purple-100 text-purple-600',
  orange: 'bg-orange-100 text-orange-600',
  pink: 'bg-pink-100 text-pink-600',
  indigo: 'bg-indigo-100 text-indigo-600',
}

export default function Solutions() {
  return (
    <div id="solutions" className="py-24 sm:py-32 bg-white">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-200 mb-6">
              <Briefcase className="w-4 h-4" />
              Solutions & Use Cases
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              AI agents for every industry
            </h2>
            <p className="text-lg leading-8 text-gray-600">
              Discover how businesses across industries are using our AI agents to automate processes, improve efficiency, and deliver exceptional customer experiences.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solution.icon
              return (
                <FadeIn 
                  key={solution.name} 
                  className="h-full"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <Card hover className="h-full p-8 group">
                    <div className={`w-16 h-16 ${colorClasses[solution.color]} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-200`}>
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {solution.name}
                    </h3>
                    <p className="text-gray-600 leading-relaxed mb-6">
                      {solution.description}
                    </p>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-3">Key Benefits:</h4>
                        <div className="space-y-2">
                          {solution.benefits.map((benefit) => (
                            <div key={benefit} className="flex items-center gap-2">
                              <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                              <span className="text-sm text-gray-600">{benefit}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-sm font-semibold text-gray-900 mb-2">Popular in:</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.industries.map((industry) => (
                            <span key={industry} className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                              {industry}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                </FadeIn>
              )
            })}
          </div>
        </div>

        {/* Call to action */}
        <FadeIn className="mt-20">
          <div className="bg-gradient-to-r from-gray-50 to-gray-100 rounded-2xl p-8 md:p-12 text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Don't see your use case?
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-6">
              Our AI agents are highly customizable and can be adapted to virtually any industry or use case. Let's discuss how we can help solve your specific challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-colors group">
                Schedule a consultation
                <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-gray-700 bg-white hover:bg-gray-50 transition-colors">
                View all solutions
              </button>
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}