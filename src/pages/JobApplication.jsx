import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { ArrowLeft, ArrowRight, Upload, FileText, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InternalLinker from '@/components/seo/InternalLinker';

export default function JobApplication() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    resume: null,
    coverLetter: '',
    experience: '',
    availability: ''
  });

  const totalSteps = 3;

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const fileType = file.type;
      if (fileType === 'application/pdf' || 
          fileType === 'application/msword' || 
          fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') {
        setFormData({ ...formData, resume: file });
      } else {
        alert('Please upload only PDF or DOC/DOCX files');
        e.target.value = '';
      }
    }
  };

  const handleSubmit = () => {
    console.log('Application submitted:', formData);
    // Here you would typically send the data to your backend
  };

  const nextStep = () => setStep(Math.min(step + 1, totalSteps));
  const prevStep = () => setStep(Math.max(step - 1, 1));

  const canProceed = () => {
    if (step === 1) {
      return formData.firstName && formData.lastName && formData.email && formData.phone;
    }
    if (step === 2) {
      return formData.resume !== null;
    }
    return true;
  };

  return (
        <InternalLinker currentPage="JobApplication">
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Job Application"
        description="Apply for a position at 1C Platform. Join our team building the future of enterprise AI."
        url="/job-application"
        keywords={['job application', 'apply', 'careers', 'join us']}
      />

      <div className="max-w-4xl mx-auto px-6 py-32">
        <BreadcrumbNav items={[
          { label: 'Careers', page: 'Careers' },
          { label: 'Apply' }
        ]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Apply for Position
          </h1>
          <p className="text-xl text-gray-600">
            We're excited to learn more about you. Complete the application below.
          </p>
        </motion.div>

        {/* Progress Bar */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
            <span className="text-sm font-medium text-[#8B2EE5]">{Math.round((step / totalSteps) * 100)}%</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-[#8B2EE5]"
              initial={{ width: 0 }}
              animate={{ width: `${(step / totalSteps) * 100}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          {/* Step 1: Personal Information */}
          {step === 1 && (
            <motion.div
              key="step1"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Personal Information</h2>
              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">First Name *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                      className="mt-2"
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <Label htmlFor="lastName">Last Name *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                      className="mt-2"
                      placeholder="Doe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="mt-2"
                    placeholder="john.doe@example.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="mt-2"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <Label htmlFor="linkedin">LinkedIn Profile</Label>
                  <Input
                    id="linkedin"
                    value={formData.linkedin}
                    onChange={(e) => setFormData({ ...formData, linkedin: e.target.value })}
                    className="mt-2"
                    placeholder="https://linkedin.com/in/johndoe"
                  />
                </div>

                <div>
                  <Label htmlFor="portfolio">Portfolio/Website</Label>
                  <Input
                    id="portfolio"
                    value={formData.portfolio}
                    onChange={(e) => setFormData({ ...formData, portfolio: e.target.value })}
                    className="mt-2"
                    placeholder="https://yourportfolio.com"
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 2: Resume Upload */}
          {step === 2 && (
            <motion.div
              key="step2"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Resume & Cover Letter</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="resume">Upload Resume *</Label>
                  <p className="text-sm text-gray-500 mb-3">PDF or DOC/DOCX only, max 10MB</p>
                  
                  {!formData.resume ? (
                    <label htmlFor="resume" className="block">
                      <div className="border-2 border-dashed border-gray-300 rounded-xl p-12 text-center hover:border-[#8B2EE5] hover:bg-purple-50 transition-all cursor-pointer">
                        <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <p className="text-gray-700 font-medium mb-2">Click to upload resume</p>
                        <p className="text-sm text-gray-500">or drag and drop</p>
                      </div>
                      <input
                        id="resume"
                        type="file"
                        className="hidden"
                        accept=".pdf,.doc,.docx,application/pdf,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                        onChange={handleFileUpload}
                      />
                    </label>
                  ) : (
                    <div className="border border-gray-200 rounded-xl p-6 flex items-center justify-between bg-green-50">
                      <div className="flex items-center gap-3">
                        <FileText className="w-8 h-8 text-green-600" />
                        <div>
                          <p className="font-medium text-gray-900">{formData.resume.name}</p>
                          <p className="text-sm text-gray-500">{(formData.resume.size / 1024).toFixed(2)} KB</p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        onClick={() => setFormData({ ...formData, resume: null })}
                        className="text-red-600 hover:text-red-700 hover:bg-red-50"
                      >
                        Remove
                      </Button>
                    </div>
                  )}
                </div>

                <div>
                  <Label htmlFor="coverLetter">Cover Letter (Optional)</Label>
                  <Textarea
                    id="coverLetter"
                    value={formData.coverLetter}
                    onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                    className="mt-2 h-40"
                    placeholder="Tell us why you're interested in this position..."
                  />
                </div>
              </div>
            </motion.div>
          )}

          {/* Step 3: Additional Information */}
          {step === 3 && (
            <motion.div
              key="step3"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-2xl border border-gray-200 p-8"
            >
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Additional Information</h2>
              
              <div className="space-y-6">
                <div>
                  <Label htmlFor="experience">Years of Experience</Label>
                  <Input
                    id="experience"
                    value={formData.experience}
                    onChange={(e) => setFormData({ ...formData, experience: e.target.value })}
                    className="mt-2"
                    placeholder="e.g., 5 years"
                  />
                </div>

                <div>
                  <Label htmlFor="availability">When can you start?</Label>
                  <Input
                    id="availability"
                    value={formData.availability}
                    onChange={(e) => setFormData({ ...formData, availability: e.target.value })}
                    className="mt-2"
                    placeholder="e.g., Immediately, 2 weeks notice, 1 month"
                  />
                </div>

                <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                  <h3 className="font-semibold text-gray-900 mb-3">Application Summary</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>{formData.firstName} {formData.lastName}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                      <span>{formData.email}</span>
                    </div>
                    {formData.resume && (
                      <div className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-600" />
                        <span>Resume: {formData.resume.name}</span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Navigation Buttons */}
        <div className="flex gap-4 mt-8">
          {step > 1 ? (
            <Button
              onClick={prevStep}
              variant="outline"
              className="flex-1"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back
            </Button>
          ) : (
            <Link to={createPageUrl('Careers')} className="flex-1">
              <Button variant="outline" className="w-full">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Careers
              </Button>
            </Link>
          )}

          {step < totalSteps ? (
            <Button
              onClick={nextStep}
              disabled={!canProceed()}
              className="flex-1 bg-[#8B2EE5] hover:bg-[#7325C4]"
            >
              Continue
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          ) : (
            <Button
              onClick={handleSubmit}
              className="flex-1 bg-[#8B2EE5] hover:bg-[#7325C4]"
            >
              Submit Application
              <CheckCircle2 className="w-4 h-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
    </InternalLinker>
  );
}