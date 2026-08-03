import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { ArrowRight, ArrowLeft, Building2, Server, Landmark, Heart, Building, Train, TrafficCone, Zap, ShoppingBag, GraduationCap, Gamepad2, Shield, Plane, Users, CheckCircle2, TrendingUp, Clock, DollarSign, Target } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import PageMeta from '@/components/PageMeta';
import { getAggregatedChallengeData } from '@/components/ChallengeDataCards';
import { createPageUrl } from '@/utils';
import InternalLinker from '@/components/seo/InternalLinker';

const verticals = [
  { 
    id: 'property', 
    name: 'Property Management', 
    icon: Building2,
    automations: ['Tenant onboarding', 'Maintenance scheduling', 'Rent collection', 'Lease renewals'],
    insight: 'Reduce operational costs by 40%',
    stats: { cost: '40%', efficiency: '60%', satisfaction: '45%' }
  },
  { 
    id: 'datacenter', 
    name: 'Data Centers', 
    icon: Server,
    automations: ['Energy optimization', 'Predictive maintenance', 'Capacity planning', 'Security monitoring'],
    insight: 'Achieve 99.999% uptime',
    stats: { cost: '35%', uptime: '99.999%', energy: '30%' }
  },
  { 
    id: 'finance', 
    name: 'Financial Services', 
    icon: Landmark,
    automations: ['KYC/AML automation', 'Loan processing', 'Fraud detection', 'Customer support'],
    insight: 'Process loans in under 3 minutes',
    stats: { speed: '95%', fraud: '95%', cost: '45%' }
  },
  { 
    id: 'healthcare', 
    name: 'Healthcare', 
    icon: Heart,
    automations: ['Patient scheduling', 'Medical coding', 'Claims processing', 'Clinical documentation'],
    insight: 'Save 70% administrative time',
    stats: { time: '70%', accuracy: '95%', compliance: '100%' }
  },
  { 
    id: 'corporate', 
    name: 'Corporate Campuses', 
    icon: Building,
    automations: ['Space management', 'Visitor coordination', 'Energy optimization', 'Employee services'],
    insight: 'Optimize space utilization by 40%',
    stats: { space: '40%', cost: '30%', satisfaction: '60%' }
  },
  { 
    id: 'transit', 
    name: 'Public Transit', 
    icon: Train,
    automations: ['Route optimization', 'Passenger information', 'Fleet maintenance', 'Fare collection'],
    insight: 'Improve on-time performance by 35%',
    stats: { ontime: '35%', satisfaction: '50%', cost: '25%' }
  },
  { 
    id: 'traffic', 
    name: 'Traffic Management', 
    icon: TrafficCone,
    automations: ['Signal optimization', 'Incident detection', 'Congestion prediction', 'Emergency response'],
    insight: 'Reduce traffic congestion by 30%',
    stats: { congestion: '30%', response: '60%', cost: '40%' }
  },
  { 
    id: 'energy', 
    name: 'Energy & Utilities', 
    icon: Zap,
    automations: ['Grid optimization', 'Outage prediction', 'Customer service', 'Renewable integration'],
    insight: 'Prevent 90% of outages',
    stats: { outages: '90%', efficiency: '25%', satisfaction: '45%' }
  },
  { 
    id: 'retail', 
    name: 'Retail', 
    icon: ShoppingBag,
    automations: ['Inventory optimization', 'Customer personalization', 'Dynamic pricing', 'Supply chain'],
    insight: 'Boost conversion by 35%',
    stats: { conversion: '35%', margin: '25%', retention: '40%' }
  },
  { 
    id: 'education', 
    name: 'Education', 
    icon: GraduationCap,
    automations: ['Student engagement', 'Automated grading', 'Administrative tasks', 'Learning analytics'],
    insight: 'Increase engagement by 60%',
    stats: { engagement: '60%', time: '50%', outcomes: '30%' }
  },
  { 
    id: 'gaming', 
    name: 'Gaming', 
    icon: Gamepad2,
    automations: ['Player matchmaking', 'Cheat detection', 'Infrastructure scaling', 'LiveOps automation'],
    insight: 'Reduce infrastructure costs by 40%',
    stats: { cost: '40%', detection: '99%', uptime: '99.9%' }
  },
  { 
    id: 'government', 
    name: 'Government', 
    icon: Shield,
    automations: ['Citizen services', 'Document processing', 'Compliance reporting', 'Budget optimization'],
    insight: 'Improve citizen satisfaction by 55%',
    stats: { satisfaction: '55%', cost: '35%', efficiency: '50%' }
  },
  { 
    id: 'airports', 
    name: 'Airports', 
    icon: Plane,
    automations: ['Passenger flow', 'Security screening', 'Baggage handling', 'Operations coordination'],
    insight: 'Improve on-time performance by 25%',
    stats: { ontime: '25%', satisfaction: '40%', cost: '30%' }
  },
  { 
    id: 'sports', 
    name: 'Sports & Entertainment', 
    icon: Users,
    automations: ['Fan engagement', 'Ticketing optimization', 'Venue operations', 'Revenue management'],
    insight: 'Increase revenue per fan by 30%',
    stats: { revenue: '30%', efficiency: '45%', satisfaction: '50%' }
  }
];

const rolesByIndustry = {
  property: ['CEO / Owner', 'Property Manager', 'Operations Manager', 'Facilities Director', 'Portfolio Manager', 'Leasing Manager', 'Other'],
  datacenter: ['CEO / Owner', 'CTO', 'Data Center Manager', 'Facilities Director', 'Operations Manager', 'Infrastructure Manager', 'Other'],
  finance: ['CEO / CFO', 'CTO', 'Head of Operations', 'Compliance Officer', 'Risk Manager', 'Branch Manager', 'Other'],
  healthcare: ['CEO / Administrator', 'Chief Medical Officer', 'Operations Director', 'IT Manager', 'Practice Manager', 'Compliance Officer', 'Other'],
  corporate: ['CEO', 'Chief Administrative Officer', 'Facilities Director', 'Workplace Manager', 'Operations Manager', 'HR Director', 'Other'],
  transit: ['CEO / Director', 'Operations Manager', 'Fleet Manager', 'Service Planning Manager', 'Maintenance Director', 'IT Manager', 'Other'],
  traffic: ['City Manager', 'Traffic Engineer', 'Operations Director', 'Smart City Coordinator', 'Transportation Planner', 'IT Director', 'Other'],
  energy: ['CEO / President', 'Chief Operations Officer', 'Grid Manager', 'Asset Manager', 'Engineering Director', 'Reliability Manager', 'Other'],
  retail: ['CEO / Owner', 'COO', 'Store Manager', 'Merchandising Manager', 'E-commerce Director', 'Operations Manager', 'Other'],
  education: ['Principal / Dean', 'Superintendent', 'Chief Academic Officer', 'IT Director', 'Operations Manager', 'Department Head', 'Other'],
  gaming: ['CEO / Founder', 'CTO', 'Head of LiveOps', 'Product Manager', 'Infrastructure Manager', 'Studio Director', 'Other'],
  government: ['City Manager', 'Department Director', 'Chief Administrative Officer', 'IT Director', 'Operations Manager', 'Program Manager', 'Other'],
  airports: ['Airport Director', 'COO', 'Terminal Manager', 'Operations Manager', 'Safety Director', 'Customer Experience Manager', 'Other'],
  sports: ['CEO / General Manager', 'Operations Director', 'Venue Manager', 'Fan Experience Manager', 'Revenue Manager', 'Marketing Director', 'Other']
};

const teamSizes = [
  'Just me',
  '2-10 people',
  '11-50 people',
  '51-200 people',
  '201-1000 people',
  '1000+ people'
];

const companySizes = [
  '1-10 employees',
  '11-50 employees',
  '51-200 employees',
  '201-500 employees',
  '501-1000 employees',
  '1000+ employees'
];

const painPoints = [
  // Strategy & Leadership
  'Setting a clear strategy in fast-changing markets',
  'Balancing short-term results with long-term vision',
  'Managing risk and uncertainty',
  'Driving alignment across departments',
  // Talent & HR
  'Recruiting qualified talent',
  'Retaining employees',
  'Managing hybrid or remote work',
  'Handling compliance and labor laws',
  'Building strong culture and engagement',
  // Operations
  'Inefficient processes',
  'Supply chain disruptions',
  'Quality control issues',
  'Rising operational costs',
  'Scaling production consistently',
  // Finance
  'Cash flow instability',
  'Budget overruns',
  'Forecasting inaccuracies',
  'Compliance and audit pressure',
  'Rising costs',
  'Slow financial processes',
  'Limited visibility into spending',
  // Marketing
  'Standing out in crowded markets',
  'Keeping up with digital trends',
  'Measuring ROI',
  'Understanding customer behavior',
  'Maintaining brand reputation',
  // Sales
  'Low-quality leads',
  'Unpredictable pipelines',
  'Long sales cycles',
  'Difficulty closing deals',
  'Customer churn',
  'Poor CRM usage',
  'Inaccurate forecasting',
  // IT & Technology
  'Cybersecurity threats',
  'Legacy systems',
  'Difficulty integrating new tools',
  'Data privacy pressure',
  'Supporting remote teams',
  'High cost of innovation',
  // Product & Development
  'Long development cycles',
  'Protecting intellectual property',
  'Staying ahead of competitors',
  // Customer Support
  'High support ticket volume',
  'Slow response times',
  'Lack of automation',
  'Poor cross-department communication',
  'Repetitive recurring issues',
  // Customer Service
  'High customer expectations',
  'Long wait times',
  'Difficult customers',
  'Inconsistent service quality',
  'Poor knowledge base',
  'High turnover in service roles',
  // Technical Support
  'Complex technical issues',
  'Lack of documentation',
  'Slow bug resolution',
  'Escalations due to unclear ownership',
  'Customers using outdated versions',
  'High pressure for fast fixes',
  // Vendor Management
  'Unreliable vendors',
  'Price fluctuations',
  'Quality inconsistencies',
  'Contract disputes',
  'Poor vendor communication',
  'Over-dependence on a single vendor',
  // Customer Experience
  'Confusing product experience',
  'Poor onboarding',
  'Lack of support',
  'Unmet expectations',
  'Price sensitivity',
  'Easy switching to competitors',
  // Partnerships
  'Misaligned partner goals',
  'Poor partner communication',
  'Revenue-sharing conflicts',
  'Slow collaboration',
  'Lack of transparency',
  'Uneven contribution of effort',
  // Employee Experience
  'Poor usability of tools',
  'Lack of training',
  'Frustration with bugs',
  'Resistance to change',
  'Inconsistent access to information',
  'Overly complex workflows',
  // Website Performance
  'Slow website performance',
  'Poor mobile experience',
  'Broken links',
  'Outdated design',
  'Confusing navigation',
  'Weak SEO',
  // Website Conversion
  'High bounce rates',
  'Low conversion rates',
  'Accessibility issues',
  'Security vulnerabilities',
  'Poor hosting performance',
  // Website Content & UX
  'Inconsistent branding',
  'Low-quality content',
  'Technical errors',
  'Weak site search',
  'Missing or unclear CTAs',
  'Poor analytics setup',
  'Outdated plugins or CMS',
  'Lack of personalization',
  'Slow server response',
  'Missing trust signals',
  'Hard-to-use forms',
  'Poor integration with other systems',
  // Digital Transformation
  'Slow digital transformation',
  'Poor user experience on digital platforms',
  'Fragmented data',
  'Difficulty measuring digital ROI',
  'Low adoption of digital tools',
  // E-commerce
  'Slow loading speed (e-commerce)',
  'High cart abandonment',
  'Complicated checkout flows',
  'Payment failures',
  'Inventory inaccuracies',
  'Slow shipping',
  'High return rates',
  'Poor product descriptions',
  'Rising ad costs',
  'Difficulty tracking attribution',
  'Fraud and chargebacks',
  'Customer trust issues',
  'Inconsistent omnichannel experience',
  'Limited personalization',
  'Poor search and filtering',
  'Technical bugs during peak traffic',
  'Integration issues with ERP/CRM/POS',
  'Lack of customer reviews',
  'Customer service overwhelmed by order issues',
  'Vendor delays affecting stock',
  'Marketplace competition',
  'Price wars',
  'Difficulty scaling internationally',
  'Compliance with taxes and privacy laws',
  'Poor post-purchase communication'
];

const hearAboutUs = [
  'Search engine (Google, Bing)',
  'Social media',
  'Referral from colleague',
  'Industry event',
  'Blog or article',
  'Advertisement',
  'Other'
];

export default function Onboarding() {
    const [step, setStep] = useState(1);
    const [painPointSearch, setPainPointSearch] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isComplete, setIsComplete] = useState(false);
    const [errors, setErrors] = useState({});
    const [formData, setFormData] = useState({
    vertical: '',
    companyName: '',
    companyWebsite: '',
    deploymentStrategy: [],
    role: '',
    teamSize: '',
    companySize: '',
    painPoints: [],
    hearAbout: '',
    objectives: [],
    software: [],
    email: '',
    phone: ''
    });

  const validateEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const validatePhone = (phone) => {
    return /^[\d\s\-\+\(\)]+$/.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const validateWebsite = (url) => {
    try {
      new URL(url.startsWith('http') ? url : `https://${url}`);
      return true;
    } catch {
      return false;
    }
  };

  const validateStep = (stepNum) => {
    const newErrors = {};
    
    if (stepNum === 2) {
      if (!formData.companyName.trim()) newErrors.companyName = 'Company name is required';
      if (!formData.companyWebsite.trim()) newErrors.companyWebsite = 'Website is required';
      else if (!validateWebsite(formData.companyWebsite)) newErrors.companyWebsite = 'Invalid website URL';
    }
    
    if (stepNum === 10) {
      if (!formData.email.trim()) newErrors.email = 'Email is required';
      else if (!validateEmail(formData.email)) newErrors.email = 'Invalid email format';
      if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
      else if (!validatePhone(formData.phone)) newErrors.phone = 'Invalid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const totalSteps = 10;
  const selectedVertical = verticals.find(v => v.id === formData.vertical);

  const nextStep = () => {
    if ((step === 2 || step === 10) && !validateStep(step)) return;
    setErrors({});
    setStep(Math.min(step + 1, totalSteps));
  };
  const prevStep = () => setStep(Math.max(step - 1, 1));

  const handlePainPointToggle = (point) => {
    setFormData(prev => ({
      ...prev,
      painPoints: prev.painPoints.includes(point)
        ? prev.painPoints.filter(p => p !== point)
        : [...prev.painPoints, point]
    }));
  };

  const handleSubmit = async () => {
    if (!validateStep(10)) return;
    setIsSubmitting(true);
    try {
      await base44.entities.OnboardingData.create({
        vertical: formData.vertical,
        company_name: formData.companyName,
        company_website: formData.companyWebsite,
        deployment_strategy: formData.deploymentStrategy,
        role: formData.role,
        team_size: formData.teamSize,
        company_size: formData.companySize,
        pain_points: formData.painPoints,
        objectives: formData.objectives,
        software: formData.software,
        hear_about_us: formData.hearAbout,
        email: formData.email,
        phone: formData.phone,
        completed: true
      });
      setIsComplete(true);
    } catch (error) {
      console.error('Error saving onboarding data:', error);
      setIsSubmitting(false);
    }
  };

  const handleStartAgain = () => {
    setIsComplete(false);
    setStep(1);
    setFormData({
      vertical: '',
      companyName: '',
      companyWebsite: '',
      deploymentStrategy: [],
      role: '',
      teamSize: '',
      companySize: '',
      painPoints: [],
      hearAbout: '',
      objectives: [],
      email: '',
      phone: ''
    });
  };

  const renderRightSide = () => {
    if (step === 1) {
      return (
        <div className="text-white text-center">
          <div className="w-32 h-32 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
              <img 
                src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/user_68fe34ce85471ea8927c980f/01840dc23_1C-logo.png" 
                alt="1C" 
                className="w-12 h-12"
              />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">14 Industries, Infinite Possibilities</h2>
          <p className="text-purple-100 text-lg mb-8">Join 10,000+ companies already transforming with AI</p>
          <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">40%</div>
              <div className="text-sm text-purple-100">Avg Cost Reduction</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">10K+</div>
              <div className="text-sm text-purple-100">Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-3xl font-bold">99%</div>
              <div className="text-sm text-purple-100">Satisfaction</div>
            </div>
          </div>
        </div>
      );
    }

    if (step === 3) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const deploymentOptions = formData.deploymentStrategy || [];
      
      return (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Deployment Architecture</h2>
          <p className="text-purple-100 text-lg mb-2">{deploymentOptions.length} option{deploymentOptions.length !== 1 ? 's' : ''} selected</p>
          <div className="text-sm text-purple-200 mb-6">{formattedDate}</div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
            <h3 className="font-semibold mb-4">Infrastructure Impact</h3>
            <div className="space-y-3">
              {[
                { label: 'Deployment speed', percent: 88, color: 'from-blue-400 to-cyan-300' },
                { label: 'Scalability', percent: 92, color: 'from-green-400 to-emerald-300' },
                { label: 'Cost efficiency', percent: 76, color: 'from-purple-400 to-pink-300' },
                { label: 'Reliability', percent: 95, color: 'from-yellow-400 to-orange-300' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{item.label}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">99.99%</div>
              <div className="text-xs text-purple-100">Uptime SLA</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">&lt;50ms</div>
              <div className="text-xs text-purple-100">Global latency</div>
            </div>
          </div>
        </div>
      );
    }

    if (step === 4) {
      return (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Decision Makers Choose Us</h2>
          <p className="text-purple-100 text-lg mb-8">85% of our users are in leadership roles</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4">Role Distribution</h3>
            <div className="space-y-3">
              {[
                { role: 'C-Level', percent: 35 },
                { role: 'VP / Director', percent: 30 },
                { role: 'Manager', percent: 25 },
                { role: 'Individual', percent: 10 }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.role}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <TrendingUp className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">3.2x</div>
              <div className="text-sm text-purple-100">ROI in 6 months</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <Clock className="w-8 h-8 mx-auto mb-2" />
              <div className="text-2xl font-bold">4 weeks</div>
              <div className="text-sm text-purple-100">To full deployment</div>
            </div>
          </div>
        </div>
      );
    }

    if (step === 5) {
      return (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Team Size Matters</h2>
          <p className="text-purple-100 text-lg mb-8">Scaling efficiency across teams of all sizes</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4">Average Time Saved by Team Size</h3>
            <div className="space-y-4">
              {[
                { size: '2-10', hours: 20 },
                { size: '11-50', hours: 120 },
                { size: '51-200', hours: 480 },
                { size: '201+', hours: 2000 }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-20 text-sm">{item.size} people</div>
                  <div className="flex-1">
                    <div className="h-8 bg-white/20 rounded-lg overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-purple-300 to-white flex items-center justify-end pr-3 text-sm font-semibold"
                        initial={{ width: 0 }}
                        animate={{ width: `${(item.hours / 2000) * 100}%` }}
                        transition={{ duration: 1, delay: idx * 0.1 }}
                      >
                        {item.hours}h/mo
                      </motion.div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <DollarSign className="w-8 h-8 mx-auto mb-2" />
            <div className="text-2xl font-bold">$150K+</div>
            <div className="text-sm text-purple-100">Average annual savings per team</div>
          </div>
        </div>
      );
    }

    if (step === 6) {
      return (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Company Growth</h2>
          <p className="text-purple-100 text-lg mb-8">Trusted by enterprises worldwide</p>
          
          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-purple-100">Enterprise Clients</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-3xl font-bold">50K+</div>
              <div className="text-sm text-purple-100">Active Users</div>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
            <h3 className="font-semibold mb-4">Deployment by Company Size</h3>
            <div className="space-y-3">
              {[
                { size: 'SMB (1-50)', count: 2500 },
                { size: 'Mid-Market (51-500)', count: 3200 },
                { size: 'Enterprise (500+)', count: 4300 }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.size}</span>
                    <span>{item.count} companies</span>
                  </div>
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-white"
                      initial={{ width: 0 }}
                      animate={{ width: `${(item.count / 4300) * 100}%` }}
                      transition={{ duration: 1, delay: idx * 0.2 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    }

    if (step === 2 && selectedVertical) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      
      return (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">{selectedVertical.name} Insight</h2>
          <p className="text-purple-100 text-lg mb-8">{selectedVertical.insight}</p>
          <div className="text-sm text-purple-200 mb-6">{formattedDate}</div>

          <div className="grid grid-cols-2 gap-4 mb-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">$0</div>
              <div className="text-sm text-purple-100">Setup fee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">30 days</div>
              <div className="text-sm text-purple-100">Free trial</div>
            </div>
          </div>
        </div>
      );
    }

    if (step === 7) {
      const selectedChallenges = formData.painPoints;
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

      const challengeData = getAggregatedChallengeData(selectedChallenges);

      return (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">{challengeData.title}</h2>
          <p className="text-purple-100 text-lg mb-4">{challengeData.subtitle}</p>
          <div className="text-sm text-purple-200 mb-6">{formattedDate}</div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
            <h3 className="font-semibold mb-4">Projected Improvement</h3>
            <div className="h-32 flex items-end gap-2 mb-4">
              {challengeData.chart.map((value, idx) => (
                <motion.div
                  key={idx}
                  className="flex-1 bg-gradient-to-t from-white to-white/60 rounded-t"
                  initial={{ height: 0 }}
                  animate={{ height: `${value}%` }}
                  transition={{ duration: 0.8, delay: idx * 0.1 }}
                />
              ))}
            </div>
            <div className="flex justify-between text-xs text-purple-200">
              <span>Month 1</span>
              <span>Month 3</span>
              <span>Month 6</span>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
            <h3 className="font-semibold mb-3 text-sm">Key Metrics</h3>
            <div className="space-y-2">
              {challengeData.metrics.map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{item.label}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
            <Target className="w-6 h-6 mb-2" />
            <div className="text-xl font-bold mb-1">{challengeData.stat}</div>
            <div className="text-xs text-purple-100">{challengeData.statLabel}</div>
          </div>
        </div>
      );
    }

    if (step === 8) {
      return (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">How Others Found Us</h2>
          <p className="text-purple-100 text-lg mb-8">Growing through word of mouth</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4">Acquisition Channels</h3>
            <div className="space-y-4">
              {[
                { channel: 'Referral', percent: 42, color: 'from-green-400 to-emerald-300' },
                { channel: 'Search', percent: 28, color: 'from-blue-400 to-cyan-300' },
                { channel: 'Events', percent: 18, color: 'from-purple-400 to-pink-300' },
                { channel: 'Content', percent: 12, color: 'from-yellow-400 to-orange-300' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-sm mb-1">
                    <span>{item.channel}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">4.9/5</div>
              <div className="text-sm text-purple-100">G2 Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
              <div className="text-2xl font-bold">98%</div>
              <div className="text-sm text-purple-100">Would Recommend</div>
            </div>
          </div>
        </div>
      );
    }

    if (step === 9) {
      const today = new Date();
      const formattedDate = today.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
      const selectedObjectives = formData.objectives || [];
      
      return (
        <div className="text-white">
          <h2 className="text-3xl font-bold mb-4">Your AI Objectives</h2>
          <p className="text-purple-100 text-lg mb-2">{selectedObjectives.length} objective{selectedObjectives.length !== 1 ? 's' : ''} selected</p>
          <div className="text-sm text-purple-200 mb-6">{formattedDate}</div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-4">
            <h3 className="font-semibold mb-4">Expected Outcomes</h3>
            <div className="space-y-3">
              {[
                { outcome: 'Efficiency boost', percent: 85, color: 'from-blue-400 to-cyan-300' },
                { outcome: 'Cost reduction', percent: 72, color: 'from-green-400 to-emerald-300' },
                { outcome: 'Quality improvement', percent: 78, color: 'from-purple-400 to-pink-300' },
                { outcome: 'Time savings', percent: 68, color: 'from-yellow-400 to-orange-300' }
              ].map((item, idx) => (
                <div key={idx}>
                  <div className="flex justify-between text-xs mb-1">
                    <span>{item.outcome}</span>
                    <span>{item.percent}%</span>
                  </div>
                  <div className="h-1.5 bg-white/20 rounded-full overflow-hidden">
                    <motion.div 
                      className={`h-full bg-gradient-to-r ${item.color}`}
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{ duration: 1, delay: idx * 0.1 }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 mb-4">
            <h3 className="font-semibold mb-3 text-sm">Key Goals</h3>
            <div className="space-y-2 text-xs">
              {selectedObjectives.slice(0, 4).map((obj, idx) => (
                <div key={idx} className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                  <span>{obj}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
            <TrendingUp className="w-6 h-6 mx-auto mb-2" />
            <div className="text-xl font-bold mb-1">4-6 weeks</div>
            <div className="text-xs text-purple-100">To measurable results</div>
          </div>
        </div>
      );
    }

    if (step === 10) {
      return (
        <div className="text-white text-center">
          <div className="w-32 h-32 mx-auto mb-8 bg-white/10 backdrop-blur-sm rounded-3xl flex items-center justify-center">
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center">
              <CheckCircle2 className="w-12 h-12 text-[#6209e6]" />
            </div>
          </div>
          <h2 className="text-3xl font-bold mb-4">You're All Set!</h2>
          <p className="text-purple-100 text-lg mb-8">Ready to transform your operations</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 mb-6">
            <h3 className="font-semibold mb-4">What Happens Next</h3>
            <div className="space-y-3 text-left">
              {[
                'Email confirmation sent',
                'Personalized demo scheduled',
                'Account setup initiated',
                'Success manager assigned'
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="flex items-center gap-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                >
                  <CheckCircle2 className="w-5 h-5" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">$0</div>
              <div className="text-sm text-purple-100">Setup fee</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
              <div className="text-2xl font-bold">30 days</div>
              <div className="text-sm text-purple-100">Free trial</div>
            </div>
          </div>
        </div>
      );
    }

    return null;
  };

  if (isComplete && selectedVertical) {
    const industryAdoption = {
      property: { current: 15, projected: 78, industry: 'Property Management' },
      datacenter: { current: 32, projected: 89, industry: 'Data Centers' },
      finance: { current: 28, projected: 85, industry: 'Financial Services' },
      healthcare: { current: 18, projected: 72, industry: 'Healthcare' },
      corporate: { current: 22, projected: 80, industry: 'Corporate Campuses' },
      transit: { current: 12, projected: 68, industry: 'Public Transit' },
      traffic: { current: 20, projected: 75, industry: 'Traffic Management' },
      energy: { current: 25, projected: 82, industry: 'Energy & Utilities' },
      retail: { current: 35, projected: 88, industry: 'Retail' },
      education: { current: 14, projected: 70, industry: 'Education' },
      gaming: { current: 45, projected: 92, industry: 'Gaming' },
      government: { current: 8, projected: 65, industry: 'Government' },
      airports: { current: 16, projected: 73, industry: 'Airports' },
      sports: { current: 24, projected: 79, industry: 'Sports & Entertainment' }
    };

    const adoption = industryAdoption[formData.vertical] || industryAdoption.property;

    return (
      <>
        <PageMeta 
          title="Get Started"
          description="Create your custom Agentic AI solution. Select your industry and design AI agents tailored to your business needs. 14 industries, infinite possibilities."
          url="/onboarding"
          keywords={['get started', 'AI onboarding', 'custom AI', 'industry solutions', 'AI setup']}
        />
        <motion.div 
          className="min-h-screen bg-gradient-to-br from-[#6209e6] to-[#6D28D9] flex items-center justify-center p-8"
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="max-w-4xl w-full text-white text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="w-32 h-32 mx-auto mb-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                <CheckCircle2 className="w-16 h-16 text-white" />
              </div>
              
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Welcome to the future, {formData.companyName}!
              </h1>
              
              <p className="text-2xl text-purple-100 mb-12 max-w-2xl mx-auto">
                Your AI transformation journey begins now. We're preparing your personalized solution.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 mb-8">
                <h2 className="text-2xl font-bold mb-6">AI Adoption in {adoption.industry}</h2>
                
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <div className="text-5xl font-bold mb-2">{adoption.current}%</div>
                    <div className="text-purple-200">Current Adoption</div>
                  </div>
                  <div>
                    <div className="text-5xl font-bold mb-2">{adoption.projected}%</div>
                    <div className="text-purple-200">Projected by 2027</div>
                  </div>
                </div>

                <div className="space-y-4">
                  {[
                    { year: '2024', percent: adoption.current },
                    { year: '2025', percent: adoption.current + (adoption.projected - adoption.current) * 0.3 },
                    { year: '2026', percent: adoption.current + (adoption.projected - adoption.current) * 0.65 },
                    { year: '2027', percent: adoption.projected }
                  ].map((item, idx) => (
                    <div key={item.year}>
                      <div className="flex justify-between text-sm mb-2">
                        <span>{item.year}</span>
                        <span>{Math.round(item.percent)}%</span>
                      </div>
                      <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                        <motion.div 
                          className="h-full bg-gradient-to-r from-white to-purple-200"
                          initial={{ width: 0 }}
                          animate={{ width: `${item.percent}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + idx * 0.2 }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.5 }}
                className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8"
              >
                <Button
                  onClick={handleStartAgain}
                  variant="outline"
                  className="bg-white/10 border-white/30 text-white hover:bg-white/20 h-14 px-8 text-lg backdrop-blur-sm"
                >
                  Start Again
                </Button>
                <Button
                  onClick={() => window.location.href = createPageUrl('Contact')}
                  className="bg-white text-[#6209e6] hover:bg-white/90 h-14 px-8 text-lg font-semibold"
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </>
    );
  }

  return (
    <>
      <InternalLinker currentPage="Onboarding">
      <PageMeta 
        title="Get Started"
        description="Create your custom Agentic AI solution. Select your industry and design AI agents tailored to your business needs. 14 industries, infinite possibilities."
        url="/onboarding"
        keywords={['get started', 'AI onboarding', 'custom AI', 'industry solutions', 'AI setup']}
      />
      <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white p-8 lg:p-16 flex flex-col">
        <div className="max-w-xl mx-auto w-full flex-1 flex flex-col">
          <AnimatePresence mode="wait">
            {/* Step 1: Vertical */}
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full" disabled={step === 1}>
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.vertical} className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full">
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Hey there, what brings you here today?</h1>
                  <p className="text-gray-600 mb-8">Select your industry to get started</p>
                  <div className="grid grid-cols-2 gap-3">
                    {verticals.map((vertical) => (
                      <button key={vertical.id} onClick={() => setFormData({ ...formData, vertical: vertical.id })} className={`flex items-center gap-3 p-4 rounded-xl border-2 transition-all text-left ${formData.vertical === vertical.id ? 'border-[#6209e6] bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        <vertical.icon className="w-5 h-5 text-[#6209e6] flex-shrink-0" />
                        <span className="font-medium text-sm">{vertical.name}</span>
                      </button>
                    ))}
                  </div>
                  </div>
                  </motion.div>
                  )}

            {/* Step 2: Vertical Impact */}
            {step === 2 && selectedVertical && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.companyName || !formData.companyWebsite} className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full">
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Perfect! Tell us about your company</h1>
                  <p className="text-gray-600 mb-6">We'll customize your experience</p>
                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="company">Company Name</Label>
                      <Input 
                        id="company" 
                        placeholder="Your company name" 
                        value={formData.companyName} 
                        onChange={(e) => {
                          setFormData({ ...formData, companyName: e.target.value });
                          if (errors.companyName) setErrors({ ...errors, companyName: '' });
                        }} 
                        className={`mt-2 ${errors.companyName ? 'border-red-500' : ''}`} 
                      />
                      {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
                    </div>
                    <div>
                      <Label htmlFor="website">Company Website</Label>
                      <Input 
                        id="website" 
                        type="url" 
                        placeholder="https://yourcompany.com" 
                        value={formData.companyWebsite} 
                        onChange={(e) => {
                          setFormData({ ...formData, companyWebsite: e.target.value });
                          if (errors.companyWebsite) setErrors({ ...errors, companyWebsite: '' });
                        }} 
                        className={`mt-2 ${errors.companyWebsite ? 'border-red-500' : ''}`} 
                      />
                      {errors.companyWebsite && <p className="text-red-500 text-sm mt-1">{errors.companyWebsite}</p>}
                    </div>
                  </div>
                  </div>
                  </motion.div>
                  )}

            {/* Step 3: Deployment Strategy */}
            {step === 3 && selectedVertical && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.deploymentStrategy || formData.deploymentStrategy.length === 0} className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full">
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">What's your deployment strategy?</h1>
                  <p className="text-gray-600 mb-8">Select all that apply</p>
                  <div className="space-y-3">
                    {[
                      { value: 'cloud', label: 'Cloud', desc: 'Public cloud infrastructure' },
                      { value: 'onprem', label: 'On-Premises', desc: 'Your own data centers' },
                      { value: 'hybrid', label: 'Hybrid', desc: 'Mix of cloud and on-prem' },
                      { value: 'dr', label: 'Disaster Recovery', desc: 'DR site requirements' },
                      { value: 'multiregion', label: 'Multi-Region Clusters', desc: 'Global distribution' }
                    ].map((option) => (
                      <button 
                        key={option.value}
                        onClick={() => {
                          const current = formData.deploymentStrategy || [];
                          const updated = current.includes(option.value)
                            ? current.filter(v => v !== option.value)
                            : [...current, option.value];
                          setFormData({ ...formData, deploymentStrategy: updated });
                        }}
                        className={`w-full p-4 rounded-xl border-2 transition-all text-left ${
                          (formData.deploymentStrategy || []).includes(option.value) 
                            ? 'border-[#6209e6] bg-purple-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="font-semibold text-gray-900">{option.label}</div>
                        <div className="text-sm text-gray-600 mt-1">{option.desc}</div>
                      </button>
                    ))}
                  </div>
                  </div>
                  </motion.div>
                  )}

            {/* Step 4: Role */}
            {step === 4 && (
              <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.role} className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full">
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">What's your role?</h1>
                  <p className="text-gray-600 mb-8">Help us understand your position</p>
                  <div className="grid gap-3 max-h-[500px] overflow-y-auto pr-2">
                    {(rolesByIndustry[formData.vertical] || rolesByIndustry.corporate).map((role) => (
                      <button key={role} onClick={() => setFormData({ ...formData, role })} className={`p-4 rounded-xl border-2 transition-all text-left font-medium ${formData.role === role ? 'border-[#6209e6] bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        {role}
                      </button>
                    ))}
                  </div>
                  </div>
                  </motion.div>
                  )}

            {/* Step 5: Team Size */}
            {step === 5 && (
              <motion.div key="step5" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.teamSize} className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full">
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">How many people are on your team?</h1>
                  <p className="text-gray-600 mb-8">The team that will use this platform</p>
                  <div className="grid gap-3">
                    {teamSizes.map((size) => (
                      <button key={size} onClick={() => setFormData({ ...formData, teamSize: size })} className={`p-4 rounded-xl border-2 transition-all text-left font-medium ${formData.teamSize === size ? 'border-[#6209e6] bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        {size}
                      </button>
                    ))}
                  </div>
                  </div>
                  </motion.div>
                  )}

            {/* Step 6: Company Size */}
            {step === 6 && (
              <motion.div key="step6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.companySize} className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full">
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">How large is your organization?</h1>
                  <p className="text-gray-600 mb-8">Total number of employees</p>
                  <div className="grid gap-3">
                    {companySizes.map((size) => (
                      <button key={size} onClick={() => setFormData({ ...formData, companySize: size })} className={`p-4 rounded-xl border-2 transition-all text-left font-medium ${formData.companySize === size ? 'border-[#6209e6] bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        {size}
                      </button>
                    ))}
                  </div>
                  </div>
                  </motion.div>
                  )}

            {/* Step 7: Pain Points */}
            {step === 7 && (
              <motion.div key="step7" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={formData.painPoints.length === 0} className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full">
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1 flex flex-col">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">What challenges are you facing?</h1>
                  <p className="text-gray-600 mb-4">Select all that apply</p>
                  <div className="text-sm text-gray-500 mb-4">
                    {formData.painPoints.length} selected
                  </div>
                  <div className="mb-4">
                    <Input 
                      placeholder="Search challenges..." 
                      value={painPointSearch}
                      onChange={(e) => setPainPointSearch(e.target.value)}
                      className="w-full"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2 overflow-y-auto pr-2 max-h-[450px]">
                    {painPoints.filter(point => point.toLowerCase().includes(painPointSearch.toLowerCase())).map((point) => (
                      <button key={point} onClick={() => handlePainPointToggle(point)} className={`p-4 rounded-lg border-2 transition-all text-left text-sm ${formData.painPoints.includes(point) ? 'border-[#6209e6] bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        {point}
                      </button>
                    ))}
                  </div>
                  </div>
                  </motion.div>
                  )}

            {/* Step 8: How did you hear */}
            {step === 8 && (
              <motion.div key="step8" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.hearAbout} className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full">
                    Continue <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">How did you hear about us?</h1>
                  <p className="text-gray-600 mb-8">Help us understand our reach</p>
                  <div className="grid gap-3">
                    {hearAboutUs.map((source) => (
                      <button key={source} onClick={() => setFormData({ ...formData, hearAbout: source })} className={`p-4 rounded-xl border-2 transition-all text-left font-medium ${formData.hearAbout === source ? 'border-[#6209e6] bg-purple-50' : 'border-gray-200 hover:border-gray-300'}`}>
                        {source}
                      </button>
                    ))}
                  </div>
                  </div>
                  </motion.div>
                  )}

            {/* Step 9: Agent Objectives */}
            {step === 9 && (
              <motion.div key="step9" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button onClick={nextStep} disabled={!formData.objectives || formData.objectives.length === 0} className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full">
                    Finish <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1 flex flex-col overflow-y-auto pr-2">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Define your Agentic Ai objectives</h1>
                  <p className="text-gray-600 mb-6">Based on your challenges, select what your AI should focus on</p>

                  <div className="grid gap-2 mb-8 max-h-[300px] overflow-y-auto pr-2">
                    {formData.painPoints.flatMap(challenge => {
                      const objectives = {
                        'Inefficient processes': ['Automate repetitive tasks', 'Streamline workflows', 'Reduce manual errors'],
                        'Rising operational costs': ['Optimize resource allocation', 'Monitor spending patterns', 'Identify cost-saving opportunities'],
                        'Customer churn': ['Predict at-risk customers', 'Personalize retention campaigns', 'Analyze feedback patterns'],
                        'Recruiting qualified talent': ['Screen candidates faster', 'Match skills to roles', 'Schedule interviews automatically'],
                        'Retaining employees': ['Monitor engagement levels', 'Identify flight risks', 'Suggest retention strategies'],
                        'Cash flow instability': ['Forecast cash needs', 'Optimize payment schedules', 'Alert on anomalies'],
                        'High support ticket volume': ['Auto-respond to common queries', 'Route tickets intelligently', 'Suggest KB articles'],
                        'Slow response times': ['Prioritize urgent tickets', 'Auto-escalate issues', 'Track SLA compliance'],
                        'Supply chain disruptions': ['Monitor supplier health', 'Predict delays', 'Suggest alternatives'],
                        'Low conversion rates': ['Analyze user journeys', 'Optimize pricing', 'Personalize offers'],
                        'default': ['Analyze data patterns', 'Automate routine tasks', 'Generate insights']
                      };
                      return (objectives[challenge] || objectives['default']).map(obj => ({ challenge, objective: obj }));
                    }).filter((item, idx, arr) => arr.findIndex(t => t.objective === item.objective) === idx).map((item) => (
                      <button 
                        key={item.objective}
                        onClick={() => {
                          const current = formData.objectives || [];
                          const updated = current.includes(item.objective)
                            ? current.filter(o => o !== item.objective)
                            : [...current, item.objective];
                          setFormData({ ...formData, objectives: updated });
                        }}
                        className={`p-3 rounded-lg border-2 transition-all text-left text-sm ${
                          (formData.objectives || []).includes(item.objective) 
                            ? 'border-[#6209e6] bg-purple-50' 
                            : 'border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        {item.objective}
                      </button>
                    ))}
                  </div>

                  <div className="mt-8 pt-8 border-t border-gray-200">
                    <h2 className="text-2xl font-bold text-gray-900 mb-3">Select software your organization uses</h2>
                    <p className="text-gray-600 mb-4">We'll integrate with your existing tools</p>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        'Salesforce', 'Microsoft 365', 'Google Workspace', 'Slack', 'Zoom', 'SAP',
                        'Oracle', 'Workday', 'ServiceNow', 'Jira', 'Confluence', 'HubSpot',
                        'Zendesk', 'Adobe Creative Cloud', 'Tableau', 'Power BI', 'QuickBooks',
                        'NetSuite', 'Shopify', 'Asana', 'Monday.com', 'Trello'
                      ].map((software) => (
                        <button 
                          key={software}
                          onClick={() => {
                            const current = formData.software || [];
                            const updated = current.includes(software)
                              ? current.filter(s => s !== software)
                              : [...current, software];
                            setFormData({ ...formData, software: updated });
                          }}
                          className={`p-3 rounded-lg border-2 transition-all text-left text-sm font-medium ${
                            (formData.software || []).includes(software) 
                              ? 'border-[#6209e6] bg-purple-50' 
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          {software}
                        </button>
                      ))}
                    </div>
                  </div>
                  </div>
                  </motion.div>
                  )}

            {/* Step 10: Final */}
            {step === 10 && selectedVertical && (
              <motion.div key="step10" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="flex-1 flex flex-col">
                <div className="flex gap-3 mb-6">
                  <Button onClick={prevStep} variant="outline" className="flex-1 h-12 rounded-full">
                    <ArrowLeft className="mr-2 w-5 h-5" /> Back
                  </Button>
                  <Button 
                    onClick={handleSubmit} 
                    disabled={!formData.email || !formData.phone || isSubmitting}
                    className="flex-1 bg-[#6209e6] hover:bg-[#5008c5] h-12 rounded-full"
                  >
                    {isSubmitting ? 'Saving...' : 'Complete Setup'} <CheckCircle2 className="ml-2 w-5 h-5" />
                  </Button>
                  </div>
                  {/* Progress */}
                  <div className="mb-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-600">Step {step} of {totalSteps}</span>
                    <span className="text-sm font-medium text-[#6209e6]">{Math.round((step / totalSteps) * 100)}%</span>
                  </div>
                  <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-[#6209e6]"
                      initial={{ width: 0 }}
                      animate={{ width: `${(step / totalSteps) * 100}%` }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  </div>
                  <div className="flex-1">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-3">Almost there!</h1>
                  <p className="text-gray-600 mb-6">Enter your contact details to complete setup</p>
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="email">Email Address *</Label>
                      <Input 
                        id="email" 
                        type="email" 
                        placeholder="your@email.com" 
                        value={formData.email} 
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (errors.email) setErrors({ ...errors, email: '' });
                        }} 
                        className={`mt-2 ${errors.email ? 'border-red-500' : ''}`} 
                        required
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input 
                        id="phone" 
                        type="tel" 
                        placeholder="+1 (555) 000-0000" 
                        value={formData.phone} 
                        onChange={(e) => {
                          setFormData({ ...formData, phone: e.target.value });
                          if (errors.phone) setErrors({ ...errors, phone: '' });
                        }} 
                        className={`mt-2 ${errors.phone ? 'border-red-500' : ''}`}
                        required
                      />
                      {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                    </div>
                    <div className="p-4 rounded-xl bg-purple-50 border border-purple-200 mt-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-[#6209e6]" />
                        Your Configuration Summary
                      </h4>
                      <div className="space-y-1 text-sm text-gray-700 mt-3">
                        <div><span className="font-medium">Industry:</span> {selectedVertical.name}</div>
                        <div><span className="font-medium">Company:</span> {formData.companyName}</div>
                        <div><span className="font-medium">Team Size:</span> {formData.teamSize}</div>
                        <div><span className="font-medium">Objectives:</span> {(formData.objectives || []).length} selected</div>
                      </div>
                    </div>
                  </div>
                  </div>
                  </motion.div>
                  )}
          </AnimatePresence>
        </div>
      </div>

      {/* Right Side - Purple Background with Dynamic Content */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#7C3AED] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#6209e6] to-[#6D28D9]" />
        
        <div className="absolute inset-0">
          <motion.div className="absolute top-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl" animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 8, repeat: Infinity }} />
          <motion.div className="absolute bottom-20 left-20 w-96 h-96 bg-purple-300/20 rounded-full blur-3xl" animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }} transition={{ duration: 10, repeat: Infinity }} />
        </div>

        <div className="relative z-10 flex items-center justify-center w-full p-16">
          <motion.div key={step} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="w-full max-w-md">
            {renderRightSide()}
          </motion.div>
        </div>
      </div>
    </div>
        </InternalLinker>
    </>
  );
}