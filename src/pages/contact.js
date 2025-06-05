import Head from 'next/head'
import { Mail, Phone, MapPin, MessageSquare, Zap, Clock } from 'lucide-react'
import Container from '../components/ui/Container'
import FadeIn from '../components/ui/FadeIn'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/Card'

export default function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email Us',
      description: 'Get in touch via email for general inquiries',
      contact: 'hello@nexusprime.ai',
      action: 'mailto:hello@nexusprime.ai'
    },
    {
      icon: Phone,
      title: 'Call Us',
      description: 'Speak with our team directly',
      contact: '+1 (555) 123-4567',
      action: 'tel:+15551234567'
    },
    {
      icon: MessageSquare,
      title: 'Live Chat',
      description: 'Chat with our support team in real-time',
      contact: 'Available 24/7',
      action: '#'
    }
  ]

  return (
    <>
      <Head>
        <title>Contact Us - NexusPrime Innovations</title>
        <meta
          name="description"
          content="Get in touch with NexusPrime Innovations. Contact our team for support, sales inquiries, or to learn more about our AI platform."
        />
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
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-slate-600 leading-8 mb-10">
                Ready to start building with AI? Have questions about our platform? We'd love to hear from you.
              </p>
            </div>
          </FadeIn>
        </Container>
      </div>

      {/* Contact Methods */}
      <div className="py-24 sm:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                How can we help?
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Choose the best way to reach us based on your needs.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <FadeIn key={method.title} delay={index * 0.1}>
                <Card className="h-full text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <method.icon className="w-6 h-6 text-primary-600" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription className="text-base">
                      {method.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={method.action}
                      className="inline-flex items-center justify-center rounded-lg bg-primary-600 px-4 py-2 text-sm font-semibold text-white hover:bg-primary-500 transition-colors"
                    >
                      {method.contact}
                    </a>
                  </CardContent>
                </Card>
              </FadeIn>
            ))}
          </div>
        </Container>
      </div>

      {/* Contact Form */}
      <div className="py-24 sm:py-32 bg-gray-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <FadeIn>
              <div>
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">
                  Send us a message
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>
                
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                        Last name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                      Company
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Your Company"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                      Subject
                    </label>
                    <select
                      id="subject"
                      name="subject"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    >
                      <option>General Inquiry</option>
                      <option>Sales</option>
                      <option>Technical Support</option>
                      <option>Partnership</option>
                      <option>Press</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={6}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      placeholder="Tell us about your project or how we can help..."
                    />
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full inline-flex justify-center items-center rounded-lg bg-primary-600 px-6 py-3 text-lg font-semibold text-white hover:bg-primary-500 transition-colors group"
                  >
                    Send Message
                    <Zap className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              </div>
            </FadeIn>

            <FadeIn delay={0.2}>
              <div className="lg:pl-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Other ways to reach us
                </h3>
                
                <div className="space-y-6 mb-8">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Office</h4>
                      <p className="text-gray-600">
                        123 Innovation Drive<br />
                        San Francisco, CA 94105<br />
                        United States
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Clock className="w-5 h-5 text-primary-600" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 9:00 AM - 6:00 PM PST<br />
                        Saturday - Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
                  <h4 className="text-xl font-bold mb-4">Need immediate help?</h4>
                  <p className="text-primary-100 mb-6">
                    Our support team is available 24/7 to help you with any technical issues or questions.
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center justify-center rounded-lg bg-white text-primary-900 px-6 py-3 font-semibold hover:bg-white/90 transition-colors"
                  >
                    Start Live Chat
                  </a>
                </div>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>

      {/* FAQ Section */}
      <div className="py-24 sm:py-32 bg-white">
        <Container>
          <FadeIn>
            <div className="mx-auto max-w-2xl text-center mb-16">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg leading-8 text-gray-600">
                Quick answers to common questions about our platform and services.
              </p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn delay={0.1}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I get started?</h3>
                <p className="text-gray-600">
                  Simply sign up for a free account and you can start building AI agents immediately. No credit card required for the free tier.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">What programming languages do you support?</h3>
                <p className="text-gray-600">
                  Our platform supports all major programming languages including Python, JavaScript, Java, C#, and many more.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer enterprise support?</h3>
                <p className="text-gray-600">
                  Yes, we offer dedicated enterprise support with SLA guarantees, priority assistance, and custom integrations.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure?</h3>
                <p className="text-gray-600">
                  Absolutely. We use bank-grade encryption, SOC 2 compliance, and follow industry best practices for data security.
                </p>
              </div>
            </FadeIn>
          </div>
        </Container>
      </div>
    </>
  )
}
