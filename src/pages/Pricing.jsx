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

      {/* CTA - Fold 7 */}
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