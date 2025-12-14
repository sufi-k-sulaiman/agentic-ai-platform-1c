import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Shield, Zap, Brain, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';

const features = [
  {
    icon: Bot,
    title: 'Autonomous Agents',
    description: 'Deploy Agentic Ai that independently handles complex tasks, makes decisions, and adapts to changing conditions.',
    details: {
      overview: 'Autonomous agents are the core of our Agentic AI platform. These intelligent systems operate independently, making real-time decisions based on context and goals without constant human intervention.',
      capabilities: [
        'Self-directed task execution and problem-solving',
        'Continuous learning from interactions and outcomes',
        'Multi-step planning and goal achievement',
        'Contextual understanding and decision-making',
        'Adaptive behavior based on environmental changes'
      ],
      useCases: [
        'Customer service automation handling complex inquiries end-to-end',
        'IT operations management with autonomous incident resolution',
        'Supply chain optimization with predictive ordering and routing',
        'Financial processing with intelligent fraud detection and prevention'
      ],
      benefits: [
        { metric: '70-90%', text: 'reduction in manual workload' },
        { metric: '24/7', text: 'availability without human supervision' },
        { metric: '3-5x', text: 'faster task completion' },
        { metric: '85%+', text: 'accuracy in decision-making' }
      ]
    }
  },
  {
    icon: Workflow,
    title: 'Intelligent Workflows',
    description: 'Automate end-to-end business processes with AI that understands context and optimizes in real-time.',
    details: {
      overview: 'Intelligent workflows leverage AI to automate complex, multi-step business processes. Unlike traditional automation, these workflows understand context, adapt to exceptions, and optimize themselves over time.',
      capabilities: [
        'End-to-end process automation with minimal human intervention',
        'Context-aware routing and decision-making',
        'Automatic exception handling and escalation',
        'Real-time optimization based on performance metrics',
        'Integration with existing systems and tools'
      ],
      useCases: [
        'Invoice processing from receipt to payment approval',
        'Employee onboarding with personalized task management',
        'Content creation and publishing workflows',
        'Compliance monitoring and reporting automation'
      ],
      benefits: [
        { metric: '60-80%', text: 'faster process completion' },
        { metric: '95%+', text: 'accuracy in automated tasks' },
        { metric: '50%', text: 'reduction in operational costs' },
        { metric: '99%', text: 'uptime and reliability' }
      ]
    }
  },
  {
    icon: Brain,
    title: 'Deep Learning Models',
    description: 'Access state-of-the-art models trained on enterprise data with built-in security and compliance.',
    details: {
      overview: 'Our deep learning models provide cutting-edge AI capabilities, trained on massive datasets while maintaining enterprise-grade security and compliance standards.',
      capabilities: [
        'Advanced natural language understanding and generation',
        'Computer vision for image and video analysis',
        'Predictive analytics and forecasting',
        'Anomaly detection and pattern recognition',
        'Custom model training on your proprietary data'
      ],
      useCases: [
        'Document analysis and information extraction',
        'Sentiment analysis and customer feedback processing',
        'Predictive maintenance for equipment and infrastructure',
        'Risk assessment and fraud detection'
      ],
      benefits: [
        { metric: '99%+', text: 'accuracy on domain-specific tasks' },
        { metric: 'SOC 2', text: 'Type II certified infrastructure' },
        { metric: '<100ms', text: 'inference latency' },
        { metric: 'GDPR', text: 'compliant data handling' }
      ]
    }
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and granular access controls protect your data.',
    details: {
      overview: 'Security is built into every layer of our platform. We maintain the highest standards of data protection, compliance, and access control to ensure your enterprise data remains secure.',
      capabilities: [
        'End-to-end encryption for data at rest and in transit',
        'Role-based access control (RBAC) with fine-grained permissions',
        'Multi-factor authentication and SSO integration',
        'Comprehensive audit logging and monitoring',
        'Automated compliance reporting and documentation'
      ],
      useCases: [
        'Secure handling of sensitive customer data',
        'Compliance with HIPAA, GDPR, SOC 2 requirements',
        'Protection of intellectual property and trade secrets',
        'Secure API access and integration management'
      ],
      benefits: [
        { metric: 'SOC 2', text: 'Type II certified' },
        { metric: 'ISO 27001', text: 'information security certified' },
        { metric: '256-bit', text: 'AES encryption' },
        { metric: '99.99%', text: 'security SLA' }
      ]
    }
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Process millions of events per second with sub-millisecond latency for instant insights.',
    details: {
      overview: 'Our real-time processing engine handles massive data streams with ultra-low latency, enabling instant decision-making and immediate action on critical events.',
      capabilities: [
        'Stream processing for continuous data analysis',
        'Event-driven architecture for instant response',
        'Complex event processing and pattern matching',
        'Real-time aggregation and analytics',
        'Sub-millisecond latency for critical operations'
      ],
      useCases: [
        'Fraud detection in financial transactions',
        'IoT sensor monitoring and anomaly detection',
        'Live customer behavior analysis and personalization',
        'Real-time supply chain visibility and optimization'
      ],
      benefits: [
        { metric: '<1ms', text: 'processing latency' },
        { metric: '10M+', text: 'events per second' },
        { metric: '99.99%', text: 'uptime guarantee' },
        { metric: 'Real-time', text: 'insights and actions' }
      ]
    }
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy across regions with automatic scaling, failover, and 99.99% uptime guarantee.',
    details: {
      overview: 'Built for global enterprises, our platform scales automatically across regions, ensuring high availability and optimal performance no matter where your users are located.',
      capabilities: [
        'Multi-region deployment with automatic failover',
        'Auto-scaling based on demand and load',
        'Edge computing for reduced latency',
        'Global load balancing and traffic management',
        'Disaster recovery and business continuity'
      ],
      useCases: [
        'Global customer service operations',
        'Multi-region e-commerce platforms',
        'Worldwide IoT device management',
        'International financial services'
      ],
      benefits: [
        { metric: '99.99%', text: 'uptime SLA' },
        { metric: '50+', text: 'global data centers' },
        { metric: 'Auto', text: 'scaling and failover' },
        { metric: '<50ms', text: 'global latency' }
      ]
    }
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function FeaturesSection() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-white" id="agentic-ai">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-[#8B2EE5] font-semibold mb-4"
          >
            CAPABILITIES
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Built for the AI era
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600"
          >
            Everything you need to build, deploy, and scale intelligent automation across your enterprise.
          </motion.p>
        </div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              onClick={() => setSelectedFeature(feature)}
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer"
            >
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#8B2EE5]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto sm:rounded-lg p-0">
          {selectedFeature && (
            <div>
              <DialogHeader className="p-6 sm:p-8 border-b">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <selectedFeature.icon className="w-8 h-8 text-[#8B2EE5]" />
                  </div>
                  <div className="flex-1">
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {selectedFeature.title}
                    </DialogTitle>
                    <p className="text-gray-600">{selectedFeature.description}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="p-6 sm:p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedFeature.details.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Capabilities</h3>
                  <ul className="space-y-3">
                    {selectedFeature.details.capabilities.map((capability, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{capability}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Use Cases</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedFeature.details.useCases.map((useCase, i) => (
                      <div key={i} className="bg-purple-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedFeature.details.benefits.map((benefit, i) => (
                      <div key={i} className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-6 text-center">
                        <div className="text-3xl font-bold text-[#8B2EE5] mb-2">{benefit.metric}</div>
                        <div className="text-sm text-gray-700">{benefit.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Button className="w-full bg-[#8B2EE5] hover:bg-[#7325C4] h-12">
                    Learn More <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}