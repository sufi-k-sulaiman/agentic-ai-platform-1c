import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, ArrowLeft, Building2, Bot, Target, Zap, CheckCircle2, Sparkles } from 'lucide-react';

const industries = [
  { id: 'property', name: 'Property Management', icon: Building2 },
  { id: 'datacenter', name: 'Data Centers', icon: Zap },
  { id: 'finance', name: 'Financial Services', icon: Target },
  { id: 'healthcare', name: 'Healthcare', icon: Bot },
  { id: 'retail', name: 'Retail', icon: Building2 },
  { id: 'other', name: 'Other', icon: Sparkles }
];

const useCases = [
  'Customer support automation',
  'Operations optimization',
  'Predictive maintenance',
  'Sales & marketing automation',
  'Compliance & reporting',
  'Data analysis & insights'
];

export default function Onboarding() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    companyName: '',
    industry: '',
    useCases: [],
    agentName: '',
    agentPurpose: '',
    email: ''
  });

  const totalSteps = 4;

  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  const handleUseCaseToggle = (useCase) => {
    setFormData(prev => ({
      ...prev,
      useCases: prev.useCases.includes(useCase)
        ? prev.useCases.filter(uc => uc !== useCase)
        : [...prev.useCases, useCase]
    }));
  };

  const handleSubmit = () => {
    console.log('Onboarding complete:', formData);
    // Handle final submission
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-violet-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
            <span className="text-sm font-medium text-[#8B2EE5]">{Math.round((step / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#8B2EE5] to-[#A855F7]"
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
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Tell us about your company</CardTitle>
                  <p className="text-gray-600 mt-2">Help us personalize your AI agent experience</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="Acme Corporation"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="mt-2"
                    />
                  </div>

                  <div>
                    <Label>Select Your Industry</Label>
                    <RadioGroup
                      value={formData.industry}
                      onValueChange={(value) => setFormData({ ...formData, industry: value })}
                      className="grid grid-cols-2 gap-4 mt-3"
                    >
                      {industries.map((industry) => (
                        <label
                          key={industry.id}
                          className={`flex items-center gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                            formData.industry === industry.id
                              ? 'border-[#8B2EE5] bg-purple-50'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <RadioGroupItem value={industry.id} />
                          <industry.icon className="w-5 h-5 text-[#8B2EE5]" />
                          <span className="font-medium">{industry.name}</span>
                        </label>
                      ))}
                    </RadioGroup>
                  </div>

                  <Button
                    onClick={nextStep}
                    disabled={!formData.companyName || !formData.industry}
                    className="w-full bg-[#8B2EE5] hover:bg-[#7325C4] h-12"
                  >
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">What do you want to automate?</CardTitle>
                  <p className="text-gray-600 mt-2">Select all that apply</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {useCases.map((useCase) => (
                      <label
                        key={useCase}
                        className={`flex items-start gap-3 p-4 rounded-lg border-2 cursor-pointer transition-all ${
                          formData.useCases.includes(useCase)
                            ? 'border-[#8B2EE5] bg-purple-50'
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Checkbox
                          checked={formData.useCases.includes(useCase)}
                          onCheckedChange={() => handleUseCaseToggle(useCase)}
                        />
                        <span className="font-medium">{useCase}</span>
                      </label>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    <Button onClick={prevStep} variant="outline" className="flex-1 h-12">
                      <ArrowLeft className="mr-2 w-5 h-5" /> Back
                    </Button>
                    <Button
                      onClick={nextStep}
                      disabled={formData.useCases.length === 0}
                      className="flex-1 bg-[#8B2EE5] hover:bg-[#7325C4] h-12"
                    >
                      Continue <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Design your AI agent</CardTitle>
                  <p className="text-gray-600 mt-2">Give your agent a name and purpose</p>
                </CardHeader>
                <CardContent className="space-y-6">
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
                      placeholder="Describe the tasks and responsibilities for your AI agent..."
                      value={formData.agentPurpose}
                      onChange={(e) => setFormData({ ...formData, agentPurpose: e.target.value })}
                      className="mt-2 h-32"
                    />
                  </div>

                  <div className="p-4 rounded-lg bg-purple-50 border border-purple-200">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-[#8B2EE5] mt-0.5" />
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-1">AI Suggestion</h4>
                        <p className="text-sm text-gray-600">
                          Based on your selections, we recommend starting with automated customer inquiry
                          handling and escalation workflows.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
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
                </CardContent>
              </Card>
            </motion.div>
          )}

          {step === 4 && (
            <motion.div
              key="step4"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle className="text-3xl">Almost there!</CardTitle>
                  <p className="text-gray-600 mt-2">Enter your email to create your agent</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
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

                  <div className="p-6 rounded-xl bg-gradient-to-br from-purple-50 to-violet-50 border border-purple-200">
                    <h4 className="font-semibold text-gray-900 mb-4">Your AI Agent Summary</h4>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Company:</span> {formData.companyName}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Industry:</span>{' '}
                          {industries.find(i => i.id === formData.industry)?.name}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Agent Name:</span> {formData.agentName}
                        </div>
                      </div>
                      <div className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600 mt-0.5" />
                        <div>
                          <span className="font-medium">Use Cases:</span> {formData.useCases.join(', ')}
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-3">
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
                </CardContent>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}