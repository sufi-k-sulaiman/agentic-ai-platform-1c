import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Infinity, CheckCircle, ArrowRight, BookOpen, Video, FileText, Users, Award, Zap } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const plans = [
  {
    name: 'Individual',
    price: '$29',
    period: 'per month',
    description: 'Perfect for individual learners advancing their AI skills',
    features: [
      'Access to 100+ courses',
      'New courses added monthly',
      'Downloadable resources',
      'Mobile & desktop access',
      'Certificate of completion',
      'Community forum access'
    ],
    badge: null,
    color: 'from-purple-600 to-violet-600'
  },
  {
    name: 'Team',
    price: '$99',
    period: 'per month',
    description: 'For teams of up to 10 members',
    features: [
      'Everything in Individual',
      'Team analytics & reporting',
      'Assign & track learning paths',
      'Priority support',
      'Custom integrations',
      'Dedicated account manager'
    ],
    badge: 'Popular',
    color: 'from-purple-700 to-violet-700'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For organizations with advanced needs',
    features: [
      'Everything in Team',
      'Unlimited team members',
      'Custom course creation',
      'SSO & advanced security',
      'API access',
      'White-label options',
      '24/7 premium support'
    ],
    badge: null,
    color: 'from-purple-800 to-violet-800'
  }
];

const benefits = [
  {
    icon: BookOpen,
    title: 'Unlimited Access',
    description: 'Learn at your own pace with unlimited access to our entire course library'
  },
  {
    icon: Video,
    title: 'HD Video Content',
    description: 'High-quality video lessons with subtitles and offline download options'
  },
  {
    icon: FileText,
    title: 'Learning Materials',
    description: 'Downloadable resources, code samples, and project templates'
  },
  {
    icon: Users,
    title: 'Expert Community',
    description: 'Connect with instructors and peers in our active learning community'
  },
  {
    icon: Award,
    title: 'Certificates',
    description: 'Earn shareable certificates upon course completion'
  },
  {
    icon: Zap,
    title: 'Fresh Content',
    description: 'New courses and updates added regularly to keep you current'
  }
];

const stats = [
  { value: '100+', label: 'Courses available' },
  { value: '500+', label: 'Hours of content' },
  { value: '50K+', label: 'Active subscribers' },
  { value: '98%', label: 'Satisfaction rate' }
];

export default function DigitalLearningSubscriptions() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Digital Learning Subscriptions"
        description="Unlimited access to 100+ AI courses. One subscription, endless possibilities. 14-day free trial available."
        url="/digital-learning-subscriptions"
        keywords={['AI subscription', 'unlimited learning', 'online courses', 'digital learning', 'AI training platform']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
              <Infinity className="w-4 h-4" />
              Digital Learning Subscriptions
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Learn without
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                limits
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Unlimited access to our entire learning library. One subscription, endless possibilities to master Agentic Ai.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Start free trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            <p className="text-sm text-gray-500 mt-4">14-day free trial • No credit card required</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose your plan
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible subscription plans for individuals, teams, and enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${plan.badge ? 'border-[#8B2EE5] border-2' : ''}`}>
                  {plan.badge && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B2EE5] text-white">
                      {plan.badge}
                    </Badge>
                  )}
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <Infinity className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#8B2EE5] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className={`w-full ${plan.badge ? 'bg-[#8B2EE5] hover:bg-[#7325C4] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                    >
                      {plan.price === 'Custom' ? 'Contact sales' : 'Start free trial'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to learn
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features designed for effective learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <benefit.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Frequently asked questions
            </h2>
          </div>

          <div className="space-y-6">
            {[
              {
                q: 'Can I cancel my subscription anytime?',
                a: 'Yes, you can cancel your subscription at any time. You will continue to have access until the end of your billing period.'
              },
              {
                q: 'Do you offer team discounts?',
                a: 'Yes, our Team and Enterprise plans offer significant discounts for multiple users. Contact sales for custom pricing.'
              },
              {
                q: 'What happens after my free trial?',
                a: 'After your 14-day free trial, your subscription will begin based on the plan you selected. You can cancel anytime before the trial ends.'
              },
              {
                q: 'Can I download courses for offline viewing?',
                a: 'Yes, all subscription plans include the ability to download video content for offline viewing on our mobile apps.'
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{faq.q}</h3>
                    <p className="text-gray-600">{faq.a}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Start your learning journey today
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Get 14 days free access to our entire course library. No credit card required.
            </p>
            <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-10 h-16 text-lg">
              Start free trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}