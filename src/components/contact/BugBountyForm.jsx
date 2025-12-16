import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { base44 } from '@/api/base44Client';
import { Loader2, X, CheckCircle2 } from 'lucide-react';

export default function BugBountyForm({ onClose }) {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    vulnerability: '',
    severity: '',
    description: ''
  });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
    if (!formData.vulnerability.trim()) newErrors.vulnerability = 'Vulnerability type is required';
    if (!formData.severity) newErrors.severity = 'Severity level is required';
    if (!formData.description.trim()) newErrors.description = 'Description is required';
    
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    
    setLoading(true);
    
    try {
      await base44.entities.ContactMessage.create({
        name: formData.name,
        email: formData.email,
        subject: `Bug Bounty: ${formData.vulnerability} - ${formData.severity} Severity`,
        message: formData.description,
        status: 'New'
      });

      await base44.integrations.Core.SendEmail({
        to: 'security@1cplatform.com',
        subject: `Security Vulnerability Report: ${formData.vulnerability}`,
        body: `
Security Vulnerability Report

Researcher: ${formData.name}
Email: ${formData.email}
Vulnerability Type: ${formData.vulnerability}
Severity: ${formData.severity}

Description:
${formData.description}
        `
      });

      setSuccess(true);
    } catch (error) {
      console.error('Error submitting report:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
      >
        <div className="sticky top-0 bg-white border-b border-gray-200 px-8 py-6 flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Report Security Vulnerability</h2>
            <p className="text-gray-600 mt-1">Help us keep our platform secure</p>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-6 h-6" />
          </Button>
        </div>

        <div className="p-8">
          <AnimatePresence mode="wait">
            {success ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Report Submitted!</h3>
                <p className="text-gray-600 mb-8">
                  Thank you for helping us improve security. Our team will review your report and get back to you shortly.
                </p>
                <Button
                  onClick={onClose}
                  className="bg-[#8B2EE5] hover:bg-[#7325C4]"
                >
                  Close
                </Button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name">Your Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (errors.name) setErrors({ ...errors, name: '' });
                      }}
                      className={`mt-2 ${errors.name ? 'border-red-500' : ''}`}
                    />
                    {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (errors.email) setErrors({ ...errors, email: '' });
                      }}
                      className={`mt-2 ${errors.email ? 'border-red-500' : ''}`}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="vulnerability">Vulnerability Type *</Label>
                    <Input
                      id="vulnerability"
                      required
                      placeholder="e.g., XSS, SQL Injection, CSRF"
                      value={formData.vulnerability}
                      onChange={(e) => {
                        setFormData({ ...formData, vulnerability: e.target.value });
                        if (errors.vulnerability) setErrors({ ...errors, vulnerability: '' });
                      }}
                      className={`mt-2 ${errors.vulnerability ? 'border-red-500' : ''}`}
                    />
                    {errors.vulnerability && <p className="text-red-500 text-sm mt-1">{errors.vulnerability}</p>}
                  </div>
                  <div>
                    <Label htmlFor="severity">Severity Level *</Label>
                    <select
                      id="severity"
                      required
                      value={formData.severity}
                      onChange={(e) => {
                        setFormData({ ...formData, severity: e.target.value });
                        if (errors.severity) setErrors({ ...errors, severity: '' });
                      }}
                      className={`mt-2 flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${errors.severity ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select severity</option>
                      <option value="Critical">Critical</option>
                      <option value="High">High</option>
                      <option value="Medium">Medium</option>
                      <option value="Low">Low</option>
                    </select>
                    {errors.severity && <p className="text-red-500 text-sm mt-1">{errors.severity}</p>}
                  </div>
                </div>

                <div>
                  <Label htmlFor="description">Detailed Description *</Label>
                  <Textarea
                    id="description"
                    required
                    rows={10}
                    value={formData.description}
                    onChange={(e) => {
                      setFormData({ ...formData, description: e.target.value });
                      if (errors.description) setErrors({ ...errors, description: '' });
                    }}
                    placeholder="Please provide:&#10;1. Steps to reproduce&#10;2. Expected vs actual behavior&#10;3. Potential impact&#10;4. Any relevant screenshots or proof of concept"
                    className={`mt-2 ${errors.description ? 'border-red-500' : ''}`}
                  />
                  {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description}</p>}
                </div>

                <div className="bg-purple-50 border border-purple-200 rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <strong>Note:</strong> By submitting this report, you agree to our responsible disclosure policy. 
                    We appreciate your efforts in keeping our platform secure.
                  </p>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={onClose}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={loading}
                    className="flex-1 bg-[#8B2EE5] hover:bg-[#7325C4]"
                  >
                    {loading ? (
                      <>
                        <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                        Submitting...
                      </>
                    ) : (
                      'Submit Report'
                    )}
                  </Button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
}