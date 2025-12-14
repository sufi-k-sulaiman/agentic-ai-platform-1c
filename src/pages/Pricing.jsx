import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, ArrowRight, Zap } from 'lucide-react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 0, annual: 0 },
    description: 'Perfect for side projects and experimentation',
    features: [
      '5 AI agents',
      '10,000 API calls/month',
      '1GB storage',
      'Community support',
      'Basic analytics',
      '99.9% uptime SLA'
    ],
    cta: 'Start free',
    popular: false
  },
  {
    name: 'Professional',
    price: { monthly: 99, annual: 950 },
    description: 'For growing teams and businesses',
    features: [
      '50 AI agents',
      '1M API calls/month',
      '100GB storage',
      'Priority email support',
      'Advanced analytics',
      '99.95% uptime SLA',
      'Custom workflows',
      'SSO authentication'
    ],
    cta: 'Start trial',
    popular: true
  },
  {
    name: 'Enterprise',
    price: { monthly: 'Custom', annual: 'Custom' },
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited AI agents',
      'Unlimited API calls',
      'Unlimited storage',
      '24/7 phone & chat support',
      'White-label options',
      '99.99% uptime SLA',
      'Dedicated infrastructure',
      'Custom SLAs',
      'On-premise deployment',
      'Advanced security'
    ],
    cta: 'Contact sales',
    popular: false
  }
];

const addons = [
  { name: 'Extra API calls', price: '$0.01 per 1000 calls' },
  { name: 'Additional storage', price: '$0.10 per GB/month' },
  { name: 'Premium support', price: '$500/month' },
  { name: 'Custom training', price: 'Custom pricing' }
];

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState('monthly');

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-[#8B2EE5] font-semibold mb-6">PRICING</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Simple, transparent
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                pricing
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Choose the plan that fits your needs. Upgrade or downgrade anytime.
            </p>

            {/* Billing Toggle */}
            <Tabs value={billingPeriod} onValueChange={setBillingPeriod} className="inline-block">
              <TabsList className="bg-gray-100">
                <TabsTrigger value="monthly">Monthly</TabsTrigger>
                <TabsTrigger value="annual">
                  Annual
                  <Badge className="ml-2 bg-green-100 text-green-700">Save 20%</Badge>
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <Badge className="bg-[#8B2EE5] text-white px-4 py-1">
                      <Zap className="w-3 h-3 mr-1" />
                      Most popular
                    </Badge>
                  </div>
                )}
                <Card className={`h-full ${plan.popular ? 'border-[#8B2EE5] border-2 shadow-xl' : 'border-gray-200'}`}>
                  <CardHeader className="pb-8">
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <p className="text-gray-600 mb-6">{plan.description}</p>
                    <div className="mb-6">
                      {typeof plan.price[billingPeriod] === 'number' ? (
                        <>
                          <span className="text-5xl font-bold text-gray-900">
                            ${plan.price[billingPeriod]}
                          </span>
                          <span className="text-gray-600 ml-2">
                            /{billingPeriod === 'monthly' ? 'mo' : 'yr'}
                          </span>
                          {billingPeriod === 'annual' && plan.price.annual > 0 && (
                            <div className="text-sm text-gray-500 mt-1">
                              ${(plan.price.annual / 12).toFixed(0)}/mo billed annually
                            </div>
                          )}
                        </>
                      ) : (
                        <span className="text-5xl font-bold text-gray-900">
                          {plan.price[billingPeriod]}
                        </span>
                      )}
                    </div>
                    <Button 
                      className={`w-full h-12 rounded-full ${
                        plan.popular 
                          ? 'bg-[#8B2EE5] hover:bg-[#7325C4] text-white' 
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-900'
                      }`}
                    >
                      {plan.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {plan.features.map((feature) => (
                        <div key={feature} className="flex items-start gap-3">
                          <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <Check className="w-3 h-3 text-green-600" />
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Add-ons</h2>
            <p className="text-xl text-gray-600">Extend your plan with additional capabilities</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {addons.map((addon, index) => (
              <motion.div
                key={addon.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center justify-between p-6 bg-white rounded-xl border border-gray-200"
              >
                <span className="font-medium text-gray-900">{addon.name}</span>
                <span className="text-[#8B2EE5] font-semibold">{addon.price}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Preview */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Questions?</h2>
          <p className="text-xl text-gray-600 mb-8">
            Our team is here to help you find the right plan for your needs.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8">
              Contact sales
            </Button>
            <Button variant="outline" className="rounded-full border-gray-300 px-8">
              View FAQ
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}