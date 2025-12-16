import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Infinity, CheckCircle, ArrowRight, ArrowLeft, CreditCard, Building, Mail, User, Phone, X } from 'lucide-react';

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

export default function SubscriptionWorkflow({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    teamSize: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: ''
  });

  const handlePlanSelect = (plan) => {
    setSelectedPlan(plan);
    if (plan.name === 'Enterprise') {
      setStep(4); // Skip to contact form for enterprise
    } else {
      setStep(2);
    }
  };

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    // Handle subscription submission
    console.log('Subscription submitted:', { plan: selectedPlan, formData });
    setStep(5); // Success screen
  };

  const handleReset = () => {
    setStep(1);
    setSelectedPlan(null);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      company: '',
      teamSize: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      billingAddress: ''
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Subscribe to Learning Platform</h2>
            <p className="text-sm text-gray-600 mt-1">Step {step} of {selectedPlan?.name === 'Enterprise' ? '2' : '4'}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>

        {/* Progress Bar */}
        <div className="px-6 pt-4">
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#8B2EE5] to-[#A855F7]"
              initial={{ width: 0 }}
              animate={{ width: `${(step / (selectedPlan?.name === 'Enterprise' ? 2 : 4)) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <AnimatePresence mode="wait">
            {/* Step 1: Plan Selection */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Choose your plan</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {plans.map((plan) => (
                    <Card
                      key={plan.name}
                      className={`relative cursor-pointer transition-all hover:shadow-xl ${
                        plan.badge ? 'border-[#8B2EE5] border-2' : 'hover:border-[#8B2EE5]'
                      }`}
                      onClick={() => handlePlanSelect(plan)}
                    >
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
                        <p className="text-gray-600 text-sm">{plan.description}</p>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-3">
                          {plan.features.slice(0, 4).map((feature, i) => (
                            <li key={i} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-[#8B2EE5] flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className="w-full mt-6 bg-[#8B2EE5] hover:bg-[#7325C4]">
                          Select {plan.name}
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 2: Account Information */}
            {step === 2 && selectedPlan && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Account information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <div className="relative mt-2">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="fullName"
                        placeholder="John Doe"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <div className="relative mt-2">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <div className="relative mt-2">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="phone"
                        placeholder="+1 (555) 000-0000"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  {selectedPlan.name === 'Team' && (
                    <>
                      <div>
                        <Label htmlFor="company">Company Name</Label>
                        <div className="relative mt-2">
                          <Building className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <Input
                            id="company"
                            placeholder="Acme Inc."
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="pl-10"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="teamSize">Team Size</Label>
                        <Input
                          id="teamSize"
                          type="number"
                          placeholder="5"
                          value={formData.teamSize}
                          onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                          className="mt-2"
                        />
                      </div>
                    </>
                  )}
                </div>

                {/* Selected Plan Summary */}
                <div className="mt-8 p-4 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-semibold text-gray-900">{selectedPlan.name} Plan</p>
                      <p className="text-sm text-gray-600">{selectedPlan.description}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-2xl font-bold text-[#8B2EE5]">{selectedPlan.price}</p>
                      <p className="text-sm text-gray-600">{selectedPlan.period}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Step 3: Payment Information */}
            {step === 3 && selectedPlan && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Payment details</h3>
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="cardNumber">Card Number *</Label>
                    <div className="relative mt-2">
                      <CreditCard className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="expiryDate">Expiry Date *</Label>
                      <Input
                        id="expiryDate"
                        placeholder="MM/YY"
                        value={formData.expiryDate}
                        onChange={(e) => setFormData({ ...formData, expiryDate: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="cvv">CVV *</Label>
                      <Input
                        id="cvv"
                        placeholder="123"
                        value={formData.cvv}
                        onChange={(e) => setFormData({ ...formData, cvv: e.target.value })}
                        className="mt-2"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="billingAddress">Billing Address *</Label>
                    <Input
                      id="billingAddress"
                      placeholder="123 Main St, City, State, ZIP"
                      value={formData.billingAddress}
                      onChange={(e) => setFormData({ ...formData, billingAddress: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                {/* Order Summary */}
                <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-4">Order Summary</h4>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-gray-600">{selectedPlan.name} Plan</span>
                      <span className="font-semibold">{selectedPlan.price}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Billing frequency</span>
                      <span className="font-semibold">Monthly</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">Total due today</span>
                        <span className="font-bold text-xl text-[#8B2EE5]">{selectedPlan.price}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  By continuing, you agree to our Terms of Service and Privacy Policy. You'll be charged {selectedPlan.price} monthly.
                </p>
              </motion.div>
            )}

            {/* Step 4: Enterprise Contact Form */}
            {step === 4 && selectedPlan?.name === 'Enterprise' && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Let's discuss your needs</h3>
                <p className="text-gray-600 mb-6">
                  Our enterprise solutions are tailored to your organization's specific requirements. Fill out this form and we'll contact you within 24 hours.
                </p>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="fullName">Full Name *</Label>
                    <Input
                      id="fullName"
                      placeholder="John Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email">Work Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="john@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Phone Number *</Label>
                    <Input
                      id="phone"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div>
                    <Label htmlFor="company">Company Name *</Label>
                    <Input
                      id="company"
                      placeholder="Acme Inc."
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="teamSize">Expected Team Size *</Label>
                    <Input
                      id="teamSize"
                      placeholder="e.g., 50-100"
                      value={formData.teamSize}
                      onChange={(e) => setFormData({ ...formData, teamSize: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="mt-8 p-6 bg-purple-50 rounded-xl">
                  <h4 className="font-semibold text-gray-900 mb-3">What you'll get:</h4>
                  <ul className="space-y-2">
                    {selectedPlan.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-[#8B2EE5] flex-shrink-0" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}

            {/* Step 5: Success */}
            {step === 5 && (
              <motion.div
                key="step5"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  {selectedPlan?.name === 'Enterprise' ? 'Request Submitted!' : 'Welcome aboard!'}
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  {selectedPlan?.name === 'Enterprise'
                    ? 'Our sales team will reach out to you within 24 hours to discuss your custom enterprise solution.'
                    : 'Your subscription is active. Check your email for login details and start learning today!'}
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={onClose} className="bg-[#8B2EE5] hover:bg-[#7325C4]">
                    {selectedPlan?.name === 'Enterprise' ? 'Done' : 'Start Learning'}
                  </Button>
                  <Button onClick={handleReset} variant="outline">
                    Subscribe Another Plan
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        {step < 5 && (
          <div className="flex items-center justify-between p-6 border-t border-gray-200">
            <Button
              onClick={step === 1 ? onClose : handleBack}
              variant="outline"
              className="gap-2"
            >
              <ArrowLeft className="w-4 h-4" />
              {step === 1 ? 'Cancel' : 'Back'}
            </Button>
            <Button
              onClick={step === 3 || (step === 4 && selectedPlan?.name === 'Enterprise') ? handleSubmit : handleNext}
              disabled={step === 1 && !selectedPlan}
              className="bg-[#8B2EE5] hover:bg-[#7325C4] gap-2"
            >
              {step === 3 || (step === 4 && selectedPlan?.name === 'Enterprise') ? 'Complete Subscription' : 'Continue'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}