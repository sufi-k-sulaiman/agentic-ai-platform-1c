import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Check, ArrowRight, Zap, Shield, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function Pricing() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Pricing"
        description="Simple, transparent pricing for AI automation. Free Starter plan, Professional from $99/mo, Enterprise custom pricing. No hidden fees."
        url="/pricing"
        keywords={['AI pricing', 'platform pricing', 'enterprise AI cost', 'subscription plans', 'AI automation pricing']}
      />

      {/* Hero - Fold 1 */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900/30 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-teal-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[1.05]"
          >
            Simple pricing.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400">
              No surprises.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Start free. Scale as you grow. Cancel anytime.
          </motion.p>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Starter Plan - Fold 2 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Start for
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                  $0
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-12">
                Everything you need to build and test. No credit card required.
              </p>
              <div className="space-y-4 mb-12">
                {[
                  '5 AI agents',
                  '10,000 API calls/month',
                  '1GB storage',
                  'Community support',
                  'Basic analytics'
                ].map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-xl text-gray-700"
                  >
                    <Check className="w-6 h-6 text-green-600" />
                    {feature}
                  </motion.div>
                ))}
              </div>
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-full px-12 h-16 text-lg">
                  Start free
                </Button>
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-100 to-teal-100 rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Zap className="w-48 h-48 text-emerald-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Professional Plan - Fold 3 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <TrendingUp className="w-48 h-48 text-blue-600" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6">
                MOST POPULAR
              </div>
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-4 leading-tight">
                Professional
              </h2>
              <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-bold text-gray-900">$99</span>
                <span className="text-2xl text-gray-600">/month</span>
              </div>
              <p className="text-2xl text-gray-600 leading-relaxed mb-12">
                For growing teams that need more power and priority support.
              </p>
              <div className="space-y-4 mb-12">
                {[
                  '50 AI agents',
                  '1M API calls/month',
                  '100GB storage',
                  'Priority email support',
                  'Advanced analytics',
                  'Custom workflows',
                  'SSO authentication'
                ].map((feature, i) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-xl text-gray-700"
                  >
                    <Check className="w-6 h-6 text-green-600" />
                    {feature}
                  </motion.div>
                ))}
              </div>
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-12 h-16 text-lg">
                  Start trial
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Plan - Fold 4 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Enterprise
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed mb-12">
              Custom solutions for organizations with advanced needs
            </p>
            <div className="inline-block text-6xl font-bold mb-12">Custom pricing</div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { icon: Users, title: 'Unlimited agents', desc: 'No limits on AI agents or workflows' },
              { icon: Shield, title: 'Advanced security', desc: 'SOC 2, HIPAA, custom compliance' },
              { icon: Zap, title: 'Dedicated support', desc: '24/7 phone & chat with SLAs' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 text-center"
              >
                <item.icon className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-12 h-16 text-lg">
                Contact sales
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Comparison - Fold 5 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Compare plans
            </h2>
          </motion.div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-gray-200">
                  <th className="text-left py-6 px-4 text-xl font-bold text-gray-900">Feature</th>
                  <th className="text-center py-6 px-4 text-xl font-bold text-gray-900">Starter</th>
                  <th className="text-center py-6 px-4 text-xl font-bold text-blue-600">Professional</th>
                  <th className="text-center py-6 px-4 text-xl font-bold text-gray-900">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { feature: 'AI Agents', starter: '5', pro: '50', enterprise: 'Unlimited' },
                  { feature: 'API Calls/month', starter: '10K', pro: '1M', enterprise: 'Unlimited' },
                  { feature: 'Storage', starter: '1GB', pro: '100GB', enterprise: 'Unlimited' },
                  { feature: 'Support', starter: 'Community', pro: 'Priority Email', enterprise: '24/7 Phone & Chat' },
                  { feature: 'Analytics', starter: 'Basic', pro: 'Advanced', enterprise: 'Custom' },
                  { feature: 'SLA', starter: '99.9%', pro: '99.95%', enterprise: '99.99%' }
                ].map((row, i) => (
                  <motion.tr
                    key={row.feature}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.05 }}
                    className="border-b border-gray-100"
                  >
                    <td className="py-6 px-4 text-lg text-gray-900">{row.feature}</td>
                    <td className="text-center py-6 px-4 text-gray-600">{row.starter}</td>
                    <td className="text-center py-6 px-4 font-semibold text-blue-600">{row.pro}</td>
                    <td className="text-center py-6 px-4 text-gray-600">{row.enterprise}</td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Add-ons - Fold 6 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Add-ons
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Extend any plan with additional capabilities
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              { name: 'Extra API calls', price: '$0.01 per 1000 calls', desc: 'Scale beyond your plan limits' },
              { name: 'Additional storage', price: '$0.10 per GB/month', desc: 'Store more data and files' },
              { name: 'Premium support', price: '$500/month', desc: 'Dedicated success manager' },
              { name: 'Custom training', price: 'Custom pricing', desc: 'On-site team training' }
            ].map((addon, i) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{addon.name}</h3>
                <div className="text-3xl font-bold text-emerald-600 mb-4">{addon.price}</div>
                <p className="text-gray-600">{addon.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Volume Discounts - Fold 8 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Volume discounts
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              The more you use, the less you pay per unit
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '20%', label: 'At 10M calls/mo' },
                { value: '35%', label: 'At 50M calls/mo' },
                { value: '50%', label: 'At 100M+ calls/mo' }
              ].map((discount, i) => (
                <motion.div
                  key={discount.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <div className="text-5xl font-bold text-emerald-400 mb-3">{discount.value}</div>
                  <div className="text-gray-400">{discount.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Annual Savings - Fold 9 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Save with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                annual plans
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Get 2 months free when you pay annually
            </p>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 max-w-2xl mx-auto text-white">
              <div className="text-7xl font-bold mb-4">20%</div>
              <div className="text-2xl">Annual discount</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* No Hidden Fees - Fold 10 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              No hidden fees.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                Ever.
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              What you see is what you pay. Simple, transparent pricing.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {['No setup fees', 'No contracts', 'No surprises', 'Cancel anytime'].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-md p-6 text-center"
                >
                  <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">{item}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Free Trial - Fold 11 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Try everything.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-teal-300">
                  Risk-free.
                </span>
              </h2>
              <p className="text-2xl text-emerald-100 leading-relaxed mb-12">
                30-day free trial on any paid plan. Full access. No credit card required.
              </p>
              <div className="space-y-4">
                {[
                  'All features unlocked',
                  'No usage limits',
                  'Priority support',
                  'Cancel anytime'
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-emerald-300" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <div className="text-8xl font-bold mb-4">30</div>
                  <div className="text-3xl">days free</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Money-Back - Fold 12 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Money-back
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                guarantee
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Not satisfied? Get a full refund within 60 days. No questions asked.
            </p>
            <div className="bg-gradient-to-r from-emerald-500 to-teal-500 rounded-3xl p-12 max-w-2xl mx-auto text-white">
              <div className="text-7xl font-bold mb-4">60 days</div>
              <div className="text-2xl">100% money-back guarantee</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Support - Fold 13 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Enterprise support
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Dedicated success manager. Custom SLAs. Onboarding assistance.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Users, title: 'Success manager', desc: 'Dedicated point of contact' },
              { icon: Shield, title: 'Custom SLAs', desc: 'Guaranteed response times' },
              { icon: Zap, title: 'Onboarding', desc: 'White-glove implementation' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-lg p-8 text-center"
              >
                <item.icon className="w-16 h-16 text-emerald-600 mx-auto mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator - Fold 14 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-emerald-900 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Calculate your
              <br />
              ROI
            </h2>
            <p className="text-2xl text-emerald-100 mb-16 max-w-3xl mx-auto leading-relaxed">
              See how much you'll save with AI automation
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '$200K', label: 'Avg annual savings' },
                { value: '6 months', label: 'Payback period' },
                { value: '400%', label: 'ROI in year 1' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8"
                >
                  <div className="text-5xl font-bold mb-3">{stat.value}</div>
                  <div className="text-emerald-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials - Fold 15 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              What customers
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-600">
                are saying
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { quote: "Best value for AI automation we've found", author: 'Sarah Chen', role: 'CTO, TechCorp', savings: '60% cost reduction' },
              { quote: 'ROI in just 3 months. Incredible.', author: 'Michael Torres', role: 'VP Ops, RetailCo', savings: '$250K saved/year' },
              { quote: 'Support is outstanding. Migration was seamless.', author: 'Emma Wilson', role: 'CEO, StartupX', savings: '10x productivity' }
            ].map((testimonial, i) => (
              <motion.div
                key={testimonial.author}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-gray-50 rounded-3xl p-8"
              >
                <div className="text-2xl font-bold text-gray-900 mb-6">"{testimonial.quote}"</div>
                <div className="text-lg text-emerald-600 font-semibold mb-4">{testimonial.savings}</div>
                <div className="text-gray-900 font-semibold">{testimonial.author}</div>
                <div className="text-gray-600">{testimonial.role}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQs - Fold 16 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Common questions
            </h2>
          </motion.div>

          <div className="space-y-6">
            {[
              { q: 'Can I change plans anytime?', a: 'Yes, upgrade or downgrade instantly' },
              { q: 'What payment methods do you accept?', a: 'Credit card, ACH, wire transfer, invoicing' },
              { q: 'Is there a long-term contract?', a: 'No, all plans are month-to-month' },
              { q: 'Do you offer discounts for nonprofits?', a: 'Yes, 50% off all plans' }
            ].map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md p-8"
              >
                <div className="text-xl font-bold text-gray-900 mb-3">{faq.q}</div>
                <div className="text-lg text-gray-600">{faq.a}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security Guarantee - Fold 17 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-32 h-32 text-emerald-400 mx-auto mb-12" />
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Your data.
              <br />
              Protected.
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Enterprise security included on all plans. No extra cost.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {['Encryption', 'Backups', 'Compliance', 'Monitoring'].map((feature, i) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <CheckCircle className="w-12 h-12 text-emerald-400 mx-auto mb-3" />
                  <div className="text-xl font-bold">{feature}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust - Fold 18 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-16">
              Trusted by thousands
            </h2>
            <div className="grid md:grid-cols-4 gap-12 max-w-5xl mx-auto">
              {[
                { value: '15K+', label: 'Companies' },
                { value: '98%', label: 'Retention rate' },
                { value: '4.9/5', label: 'G2 rating' },
                { value: '150+', label: 'Countries' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-5xl font-bold text-emerald-600 mb-2">{stat.value}</div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Fold 19 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-emerald-900 via-teal-900 to-cyan-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-400 rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Ready to get
            <br />
            started?
          </h2>
          <p className="text-2xl md:text-3xl text-emerald-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Start free. No credit card required. Upgrade anytime.
          </p>
          <Link to={createPageUrl('Onboarding')}>
            <Button className="bg-white text-emerald-900 hover:bg-gray-100 rounded-full px-12 h-16 text-lg font-medium">
              Start free now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          
          <div className="mt-20 grid grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div>
              <div className="text-5xl font-bold mb-2">Free</div>
              <div className="text-emerald-200">Forever</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">30 sec</div>
              <div className="text-emerald-200">To signup</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-emerald-200">Support</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}