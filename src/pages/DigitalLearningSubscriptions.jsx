import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Check, Sparkles, Users, Infinity, Download, Video, FileText, Award, ArrowRight, Zap, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InternalLinker from '@/components/seo/InternalLinker';
import RelatedContent from '@/components/seo/RelatedContent';
import { Button } from '@/components/ui/button';

const plans = [
  {
    name: 'Individual',
    icon: Sparkles,
    price: '$29',
    period: '/month',
    desc: 'Perfect for solo learners and professionals',
    features: [
      'Access to 50+ courses',
      'Monthly new content',
      'Community forum access',
      'Progress tracking',
      'Completion certificates',
      'Mobile & desktop access',
    ],
    cta: 'Start Free Trial',
    popular: false,
  },
  {
    name: 'Professional',
    icon: Zap,
    price: '$79',
    period: '/month',
    desc: 'For power users and growing teams',
    features: [
      'Everything in Individual',
      'Access to 150+ courses',
      'Professional certifications',
      'Hands-on lab exercises',
      'Priority support',
      'Downloadable resources',
      'Learning path recommendations',
      'Monthly live workshops',
    ],
    cta: 'Start Free Trial',
    popular: true,
  },
  {
    name: 'Enterprise',
    icon: Building2,
    price: 'Custom',
    period: '',
    desc: 'For organizations and large teams',
    features: [
      'Everything in Professional',
      'Unlimited course access',
      'Custom learning paths',
      'Team management dashboard',
      'SSO & SCIM integration',
      'Dedicated success manager',
      'Custom content creation',
      'Usage analytics & reporting',
      'SLA guarantees',
    ],
    cta: 'Contact Sales',
    popular: false,
  },
];

const features = [
  { icon: Video, title: 'HD Video Lessons', desc: 'Stream high-quality lessons on any device, anytime.' },
  { icon: FileText, title: 'Downloadable Resources', desc: 'Templates, checklists, and reference materials you keep forever.' },
  { icon: Award, title: 'Verified Certifications', desc: 'Industry-recognized certificates to showcase your expertise.' },
  { icon: Infinity, title: 'Lifetime Updates', desc: 'New content added monthly—your subscription always stays current.' },
  { icon: Users, title: 'Community Access', desc: 'Join 10,000+ learners in our active community forum.' },
  { icon: Download, title: 'Offline Access', desc: 'Download lessons for offline viewing on mobile devices.' },
];

export default function DigitalLearningSubscriptions() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta
        title="Digital Learning Subscriptions - 1C Platform Education Plans"
        description="Choose your digital learning subscription for the 1C Platform. Individual, Professional, and Enterprise plans with access to 150+ courses, certifications, hands-on labs, and community. Start your free trial today."
        url="/DigitalLearningSubscriptions"
        keywords={['learning subscription', 'online courses', 'AI education', 'professional training', 'certification', 'learning plans', '1c platform education']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Digital Learning Subscriptions', url: '/DigitalLearningSubscriptions' }]}
      />

      <section className="pt-32 pb-12 bg-gradient-to-br from-purple-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <BreadcrumbNav items={[{ label: 'Digital Learning Subscriptions' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <CreditCard className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Digital Learning Subscriptions</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              Unlock the full potential of agentic AI with flexible subscription plans designed for individuals, professionals, and enterprises.
            </p>
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium">
              <Sparkles className="w-4 h-4" /> 14-day free trial • No credit card required
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-20">
            {plans.map((plan, idx) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative rounded-2xl p-8 ${plan.popular ? 'border-2 border-[#8B2EE5] shadow-2xl lg:scale-105' : 'border border-gray-200'}`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#8B2EE5] text-white text-sm font-semibold rounded-full">
                    Most Popular
                  </div>
                )}
                <plan.icon className="w-10 h-10 text-[#8B2EE5] mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-1">{plan.name}</h3>
                <p className="text-sm text-gray-500 mb-4">{plan.desc}</p>
                <div className="flex items-baseline gap-1 mb-6">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500">{plan.period}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, fidx) => (
                    <li key={fidx} className="flex items-start gap-2 text-sm text-gray-700">
                      <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link to={createPageUrl(plan.name === 'Enterprise' ? 'ContactUs' : 'Onboarding')} className="block">
                  <Button className={`w-full ${plan.popular ? 'bg-[#8B2EE5] hover:bg-[#7325C4] text-white' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                    {plan.cta}
                  </Button>
                </Link>
              </motion.div>
            ))}
          </div>

          <InternalLinker currentPage="DigitalLearningSubscriptions">
            <div className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What's Included</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">Every subscription includes these core features.</p>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {features.map((feature, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    className="bg-gray-50 rounded-xl p-6"
                  >
                    <feature.icon className="w-8 h-8 text-[#8B2EE5] mb-3" />
                    <h3 className="font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-gray-600">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </InternalLinker>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Learning Today</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Join thousands of professionals advancing their careers with 1C Platform education.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Courses')}>
                <Button size="lg" className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white">Browse Course Catalog <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
              <Link to={createPageUrl('LearningJourney')}>
                <Button size="lg" variant="outline">View Learning Journey</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <RelatedContent currentPage="DigitalLearningSubscriptions" manualPages={['LearningJourney', 'Courses', 'ProfessionalCertifications', 'Rewards']} title="Explore More" />
    </div>
  );
}