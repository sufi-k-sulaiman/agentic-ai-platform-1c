import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, Building2, Server, Landmark, Heart, Building, Train, TrafficCone, Zap, ShoppingBag, GraduationCap, Gamepad2, Shield, Plane, Users, CheckCircle2 } from 'lucide-react';

const verticals = [
  { 
    id: 'property', 
    name: 'Property Management', 
    icon: Building2,
    automations: ['Tenant onboarding', 'Maintenance scheduling', 'Rent collection', 'Lease renewals'],
    insight: 'Reduce operational costs by 40% with AI-powered property management'
  },
  { 
    id: 'datacenter', 
    name: 'Data Centers', 
    icon: Server,
    automations: ['Energy optimization', 'Predictive maintenance', 'Capacity planning', 'Security monitoring'],
    insight: 'Achieve 99.999% uptime with predictive maintenance and real-time monitoring'
  },
  { 
    id: 'finance', 
    name: 'Financial Services', 
    icon: Landmark,
    automations: ['KYC/AML automation', 'Loan processing', 'Fraud detection', 'Customer support'],
    insight: 'Process loans in under 3 minutes with 95% fraud detection accuracy'
  },
  { 
    id: 'healthcare', 
    name: 'Healthcare', 
    icon: Heart,
    automations: ['Patient scheduling', 'Medical coding', 'Claims processing', 'Clinical documentation'],
    insight: 'Save 70% administrative time while ensuring HIPAA compliance'
  },
  { 
    id: 'corporate', 
    name: 'Corporate Campuses', 
    icon: Building,
    automations: ['Space management', 'Visitor coordination', 'Energy optimization', 'Employee services'],
    insight: 'Optimize space utilization by 40% and reduce facility costs by 30%'
  },
  { 
    id: 'transit', 
    name: 'Public Transit', 
    icon: Train,
    automations: ['Route optimization', 'Passenger information', 'Fleet maintenance', 'Fare collection'],
    insight: 'Improve on-time performance by 35% and passenger satisfaction by 50%'
  },
  { 
    id: 'traffic', 
    name: 'Traffic Management', 
    icon: TrafficCone,
    automations: ['Signal optimization', 'Incident detection', 'Congestion prediction', 'Emergency response'],
    insight: 'Reduce traffic congestion by 30% and emergency response time by 60%'
  },
  { 
    id: 'energy', 
    name: 'Energy & Utilities', 
    icon: Zap,
    automations: ['Grid optimization', 'Outage prediction', 'Customer service', 'Renewable integration'],
    insight: 'Prevent 90% of outages and integrate renewables seamlessly'
  },
  { 
    id: 'retail', 
    name: 'Retail', 
    icon: ShoppingBag,
    automations: ['Inventory optimization', 'Customer personalization', 'Dynamic pricing', 'Supply chain'],
    insight: 'Boost conversion by 35% and improve margins by 25%'
  },
  { 
    id: 'education', 
    name: 'Education', 
    icon: GraduationCap,
    automations: ['Student engagement', 'Automated grading', 'Administrative tasks', 'Learning analytics'],
    insight: 'Increase engagement by 60% and save 50% on administrative time'
  },
  { 
    id: 'gaming', 
    name: 'Gaming', 
    icon: Gamepad2,
    automations: ['Player matchmaking', 'Cheat detection', 'Infrastructure scaling', 'LiveOps automation'],
    insight: 'Reduce infrastructure costs by 40% with 99% cheat detection'
  },
  { 
    id: 'government', 
    name: 'Government', 
    icon: Shield,
    automations: ['Citizen services', 'Document processing', 'Compliance reporting', 'Budget optimization'],
    insight: 'Improve citizen satisfaction by 55% while reducing costs by 35%'
  },
  { 
    id: 'airports', 
    name: 'Airports', 
    icon: Plane,
    automations: ['Passenger flow', 'Security screening', 'Baggage handling', 'Operations coordination'],
    insight: 'Improve on-time performance by 25% and passenger satisfaction by 40%'
  },
  { 
    id: 'sports', 
    name: 'Sports & Entertainment', 
    icon: Users,
    automations: ['Fan engagement', 'Ticketing optimization', 'Venue operations', 'Revenue management'],
    insight: 'Increase revenue per fan by 30% and operational efficiency by 45%'
  }
];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    vertical: '',
    agentName: '',
    agentPurpose: '',
    email: ''
  });

  const totalSteps = 4;
  const selectedVertical = verticals.find(v => v.id === formData.vertical);

  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  const handleSubmit = () => {
    console.log('Onboarding complete:', formData);
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col">
        <div className="max-w-xl mx-auto w-full flex-1 flex flex-col">
          {/* Progress */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
              <span className="text-sm font-medium text-[#8B2EE5]">{Math.round((step / totalSteps) * 100)}%</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#8B2EE5]"
                initial={{ width: 0 }}
                animate={{ width: `${(step / totalSteps) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Hey there, what brings you here today?
                  </h1>
                  <p className="text-gray-600 mb-8">Select your industry to get started</p>

                  <div className="grid grid-cols-2 gap-3">
                    {verticals.map((vertical) => (
                      <button
                        key={vertical.id}
                        onClick={() => setFormData({ ...formData, vertical: vertical.id })}
                        className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${
                          formData.vertical === vertical.id
                            ? 'border-[#8B2EE5] bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <vertical.icon className="w-5 h-5 text-[#8B2EE5] flex-shrink-0" />
                        <span className="font-medium text-sm">{vertical.name}</span>
                      </button>
                    ))}
                  </div>
                </div>

                <Button
                  onClick={nextStep}
                  disabled={!formData.vertical}
                  className="w-full bg-[#8B2EE5] hover:bg-[#7325C4] h-12 mt-8"
                >
                  Continue <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </motion.div>
            )}

            {step === 2 && selectedVertical && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Perfect! Let's customize for {selectedVertical.name}
                  </h1>
                  <p className="text-gray-600 mb-6">Here's what we can automate for you</p>

                  <div className="mb-6 p-4 rounded-xl bg-purple-50 border border-purple-200">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-[#8B2EE5] flex items-center justify-center flex-shrink-0">
                        <selectedVertical.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">Industry Insight</h3>
                        <p className="text-sm text-gray-700">{selectedVertical.insight}</p>
                      </div>
                    </div>
                  </div>

                  <div className="mb-6">
                    <h3 className="font-semibold text-gray-900 mb-3">Key Automations</h3>
                    <div className="space-y-2">
                      {selectedVertical.automations.map((automation, idx) => (
                        <div key={idx} className="flex items-center gap-2 p-3 rounded-lg bg-gray-50">
                          <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0" />
                          <span className="text-sm text-gray-700">{automation}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Your company name"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="mt-2"
                    />
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!formData.companyName}
                    className="flex-1 bg-[#8B2EE5] hover:bg-[#7325C4] h-12"
                  >
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Design your AI agent
                  </h1>
                  <p className="text-gray-600 mb-8">Give your agent a name and purpose</p>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="agentName">Agent Name</Label>
                      <Input
                        id="agentName"
                        placeholder="e.g., Customer Support Assistant"
                        value={formData.agentName}
                        onChange={(e) => setFormData({ ...formData, agentName: e.target.value })}
                        className="mt-2"
                      />
                    </div>

                    <div>
                      <Label htmlFor="agentPurpose">What will this agent do?</Label>
                      <Textarea
                        id="agentPurpose"
                        placeholder="Describe the tasks and responsibilities..."
                        value={formData.agentPurpose}
                        onChange={(e) => setFormData({ ...formData, agentPurpose: e.target.value })}
                        className="mt-2 h-32"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button
                    onClick={nextStep}
                    disabled={!formData.agentName || !formData.agentPurpose}
                    className="flex-1 bg-[#8B2EE5] hover:bg-[#7325C4] h-12"
                  >
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 4 && selectedVertical && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                className="flex-1 flex flex-col"
              >
                <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">
                    Almost there!
                  </h1>
                  <p className="text-gray-600 mb-8">Enter your email to create your agent</p>

                  <div className="mb-8">
                    <Label htmlFor="email">Work Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div className="p-6 rounded-xl bg-gray-50 border border-gray-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Your AI Agent Summary</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Company:</span> {formData.companyName}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Industry:</span> {selectedVertical.name}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Agent:</span> {formData.agentName}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                        <div>
                          <span className="font-medium">Purpose:</span> {formData.agentPurpose}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 mt-8">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button
                    onClick={handleSubmit}
                    disabled={!formData.email}
                    className="flex-1 bg-[#8B2EE5] hover:bg-[#7325C4] h-12"
                  >
                    Create My Agent <CheckCircle2 className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side - Purple Illustration */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#7C3AED] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#8B2EE5] to-[#6D28D9]" />
        
        {/* Decorative elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl"
            animate={{ 
              scale: [1.2, 1, 1.2],
              opacity: [0.3, 0.5, 0.3]
            }}
            transition={{ duration: 10, repeat: Infinity }}
          />
        </div>

        {/* Illustration content */}
        <div className="relative z-10 flex items-center justify-center w-full p-16">
          <div className="text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-32 h-32 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
                <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
                  <img 
                    src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                    alt="1C" 
                    className="w-12 h-12"
                  />
                </div>
              </div>
              
              <h2 className="text-3xl font-bold mb-4">
                {step === 1 && "Choose Your Industry"}
                {step === 2 && "Discover AI Automations"}
                {step === 3 && "Configure Your Agent"}
                {step === 4 && "Launch Your AI Agent"}
              </h2>
              
              <p className="text-purple-100 text-lg max-w-md mx-auto">
                {step === 1 && "Select from 14 industries to get personalized AI solutions"}
                {step === 2 && "See how AI can transform your specific operations"}
                {step === 3 && "Customize your intelligent assistant"}
                {step === 4 && "You're ready to revolutionize your workflows"}
              </p>

              <div className="mt-12 flex justify-center gap-2">
                {[1, 2, 3, 4].map((s) => (
                  <div
                    key={s}
                    className={`h-2 rounded-full transition-all ${
                      s === step ? 'w-8 bg-white' : 'w-2 bg-white/30'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
}