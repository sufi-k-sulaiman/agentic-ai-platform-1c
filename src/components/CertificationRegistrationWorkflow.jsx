import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, ArrowRight, ArrowLeft, CreditCard, Mail, User, Phone, X, Calendar, FileText } from 'lucide-react';

export default function CertificationRegistrationWorkflow({ isOpen, onClose, certification }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    preferredDate: '',
    experience: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    billingAddress: ''
  });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handleSubmit = () => {
    console.log('Registration submitted:', { certification, formData });
    setStep(4); // Success screen
  };

  const handleReset = () => {
    setStep(1);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      preferredDate: '',
      experience: '',
      cardNumber: '',
      expiryDate: '',
      cvv: '',
      billingAddress: ''
    });
  };

  if (!isOpen || !certification) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-hidden"
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">Register for Certification</h2>
            <p className="text-sm text-gray-600 mt-1">Step {step} of 3</p>
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
              animate={{ width: `${(step / 3) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-200px)]">
          <AnimatePresence mode="wait">
            {/* Step 1: Personal Information */}
            {step === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Personal information</h3>
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
                    <Label htmlFor="phone">Phone Number *</Label>
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
                  <div>
                    <Label htmlFor="preferredDate">Preferred Exam Date *</Label>
                    <div className="relative mt-2">
                      <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="preferredDate"
                        type="date"
                        value={formData.preferredDate}
                        onChange={(e) => setFormData({ ...formData, preferredDate: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="experience">Years of Experience *</Label>
                    <div className="relative mt-2">
                      <FileText className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <Input
                        id="experience"
                        placeholder="e.g., 2-3 years"
                        value={formData.experience}
                        onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                        className="pl-10"
                      />
                    </div>
                  </div>
                </div>

                {/* Certification Summary */}
                <div className="mt-8 p-6 bg-purple-50 rounded-xl border border-purple-200">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="font-bold text-gray-900">{certification.title}</h4>
                          <p className="text-sm text-gray-600">{certification.description}</p>
                        </div>
                        <Badge className="bg-purple-600 text-white">{certification.level}</Badge>
                      </div>
                      <div className="grid grid-cols-2 gap-4 mt-4 pt-4 border-t border-purple-200">
                        <div className="text-sm">
                          <span className="text-gray-600">Exam fee:</span>
                          <span className="font-bold text-gray-900 ml-2">{certification.cost}</span>
                        </div>
                        <div className="text-sm">
                          <span className="text-gray-600">Validity:</span>
                          <span className="font-bold text-gray-900 ml-2">{certification.validity}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {certification.prerequisite && (
                  <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                    <p className="text-sm text-yellow-800">
                      <strong>⚠️ Prerequisite:</strong> {certification.prerequisite}
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 2: Payment Information */}
            {step === 2 && (
              <motion.div
                key="step2"
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
                      <span className="text-gray-600">{certification.title}</span>
                      <span className="font-semibold">{certification.cost}</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Study materials included</span>
                      <span>✓</span>
                    </div>
                    <div className="flex justify-between text-sm text-gray-600">
                      <span>Exam attempt</span>
                      <span>1 attempt</span>
                    </div>
                    <div className="pt-3 border-t border-gray-200">
                      <div className="flex justify-between">
                        <span className="font-semibold text-gray-900">Total due today</span>
                        <span className="font-bold text-xl text-[#8B2EE5]">{certification.cost}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <p className="text-xs text-gray-500 mt-4">
                  By continuing, you agree to our Terms of Service and Certification Policy. Exam must be taken within 6 months of registration.
                </p>
              </motion.div>
            )}

            {/* Step 3: Review & Confirm */}
            {step === 3 && (
              <motion.div
                key="step3"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
              >
                <h3 className="text-xl font-bold text-gray-900 mb-6">Review and confirm</h3>
                
                <div className="space-y-6">
                  {/* Personal Info */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm text-gray-600">Full Name</p>
                          <p className="font-semibold">{formData.fullName}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Email</p>
                          <p className="font-semibold">{formData.email}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Phone</p>
                          <p className="font-semibold">{formData.phone}</p>
                        </div>
                        <div>
                          <p className="text-sm text-gray-600">Preferred Exam Date</p>
                          <p className="font-semibold">{formData.preferredDate}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Certification Details */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Certification Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-violet-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-start justify-between mb-2">
                            <div>
                              <h4 className="font-bold text-gray-900">{certification.title}</h4>
                              <p className="text-sm text-gray-600 mt-1">{certification.description}</p>
                            </div>
                            <Badge className="bg-purple-600 text-white">{certification.level}</Badge>
                          </div>
                          <div className="grid md:grid-cols-3 gap-4 mt-4">
                            <div className="text-sm">
                              <p className="text-gray-600">Exam Fee</p>
                              <p className="font-bold text-gray-900">{certification.cost}</p>
                            </div>
                            <div className="text-sm">
                              <p className="text-gray-600">Validity</p>
                              <p className="font-bold text-gray-900">{certification.validity}</p>
                            </div>
                            <div className="text-sm">
                              <p className="text-gray-600">Format</p>
                              <p className="font-bold text-gray-900">Online</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  {/* What's Included */}
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">What's Included</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Online proctored exam</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Digital study materials</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Practice exams</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Digital certificate upon passing</span>
                        </li>
                        <li className="flex items-center gap-2">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                          <span className="text-sm">Access to certified professionals network</span>
                        </li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>

                <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-xl">
                  <p className="text-sm text-blue-800">
                    You'll receive exam scheduling instructions via email within 24 hours of registration.
                  </p>
                </div>
              </motion.div>
            )}

            {/* Step 4: Success */}
            {step === 4 && (
              <motion.div
                key="step4"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">
                  Registration Complete!
                </h3>
                <p className="text-gray-600 mb-8 max-w-md mx-auto">
                  You're all set! Check your email for exam scheduling instructions and access to study materials.
                </p>
                <div className="flex gap-4 justify-center">
                  <Button onClick={onClose} className="bg-[#8B2EE5] hover:bg-[#7325C4]">
                    View Dashboard
                  </Button>
                  <Button onClick={handleReset} variant="outline">
                    Register Another Certification
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Footer Actions */}
        {step < 4 && (
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
              onClick={step === 3 ? handleSubmit : handleNext}
              className="bg-[#8B2EE5] hover:bg-[#7325C4] gap-2"
            >
              {step === 3 ? 'Complete Registration' : 'Continue'}
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        )}
      </motion.div>
    </div>
  );
}