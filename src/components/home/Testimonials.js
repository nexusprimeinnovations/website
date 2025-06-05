import Image from 'next/image'
import Container from '../ui/Container'
import FadeIn from '../ui/FadeIn'
import { Card } from '../ui/Card'
import { Star, Quote, Sparkles } from 'lucide-react'

const testimonials = [
  {
          content: 'NexusPrime Innovations has revolutionized how we build and deploy AI agents. The platform is intuitive, powerful, and has cut our development time in half.',
    author: {
      name: 'Sarah Chen',
      role: 'CTO at TechForward',
      image: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    rating: 5,
    company: 'TechForward',
  },
  {
    content: 'The AI Code Editor has significantly improved our development workflow. The AI suggestions are incredibly accurate and save us hours of debugging.',
    author: {
      name: 'Michael Rodriguez',
      role: 'Lead Developer at InnovateCo',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    rating: 5,
    company: 'InnovateCo',
  },
  {
          content: 'We\'ve seen a 3x improvement in our development speed since adopting NexusPrime Innovations\' Agent Platform. The ROI has been incredible.',
    author: {
      name: 'Emily Thompson',
      role: 'Product Manager at FutureScale',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150',
    },
    rating: 5,
    company: 'FutureScale',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="py-24 sm:py-32 bg-gradient-to-b from-gray-50 to-white">
      <Container>
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary-50 px-4 py-2 text-sm font-medium text-primary-700 ring-1 ring-primary-200 mb-6">
              <Sparkles className="w-4 h-4" />
              Customer Stories
            </div>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
              Trusted by developers worldwide
            </h2>
            <p className="text-lg leading-8 text-gray-600">
                              See what our customers are saying about NexusPrime Innovations' products and how we're helping them build the future.
            </p>
          </div>
        </FadeIn>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn 
              key={testimonial.author.name} 
              className="h-full"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card variant="elevated" className="h-full p-8 relative group hover:shadow-2xl transition-all duration-300">
                {/* Quote icon */}
                <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Quote className="w-8 h-8 text-primary-600" />
                </div>
                
                <figure className="space-y-6">
                  {/* Rating */}
                  <div className="flex items-center justify-between">
                    <StarRating rating={testimonial.rating} />
                    <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                      {testimonial.company}
                    </span>
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-gray-900 text-base leading-relaxed">
                    <p>"{testimonial.content}"</p>
                  </blockquote>

                  {/* Author */}
                  <figcaption className="flex items-center gap-x-4 pt-4 border-t border-gray-100">
                    <div className="relative">
                      <Image
                        src={testimonial.author.image}
                        alt={testimonial.author.name}
                        width={48}
                        height={48}
                        className="h-12 w-12 rounded-full bg-gray-50 ring-2 ring-white shadow-sm"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-white"></div>
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{testimonial.author.name}</div>
                      <div className="text-sm text-gray-600">{testimonial.author.role}</div>
                    </div>
                  </figcaption>
                </figure>
              </Card>
            </FadeIn>
          ))}
        </div>

        {/* Social proof section */}
        <FadeIn className="mt-16 text-center">
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-600 mb-6">Trusted by 10,000+ developers at companies like:</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              {['Microsoft', 'Google', 'Amazon', 'Meta', 'OpenAI', 'Anthropic'].map((company) => (
                <div key={company} className="text-lg font-semibold text-gray-400">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </Container>
    </div>
  )
}