import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Building, TrendingDown, Database, Workflow, DollarSign, Zap, Users, ArrowRight, CheckCircle, Bot, Activity, Brain, Shield, Cloud, Globe, Layers, Code, Server } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import FeatureDetailSection from '@/components/FeatureDetailSection';
import { featureDetails } from '@/lib/featureDetails';
import InternalLinker from '@/components/seo/InternalLinker';
import FAQSection from '@/components/seo/FAQSection';
import { getFAQs } from '@/lib/seoFAQs';

const challenges = [
  {
    icon: DollarSign,
    title: 'Budget Constraints',
    problem: 'Limited resources, aging infrastructure, inefficient services draining city budgets',
    solution: 'AI optimizes resource allocation, reduces waste, and automates operations—cutting costs by 30%'
  },
  {
    icon: Database,
    title: 'Data Silos',
    problem: 'Departments operating independently, no unified data view or coordination',
    solution: 'Unified AI platform integrates all city systems, enabling data-driven decisions and cross-department collaboration'
  },
  {
    icon: Workflow,
    title: 'Manual Operations',
    problem: 'Reactive maintenance, slow permit processing, inefficient service delivery',
    solution: 'Autonomous agents automate workflows, predict maintenance needs, and process requests instantly'
  },
  {
    icon: Users,
    title: 'Citizen Experience',
    problem: 'Poor communication, long wait times, difficult access to city services',
    solution: '24/7 AI assistant provides instant answers, service requests, and personalized city information'
  }
];

const solutions = [
  {
    category: 'Smart Infrastructure',
    items: [
      'Predictive maintenance for roads and utilities',
      'IoT-powered asset monitoring citywide',
      'Energy optimization for city buildings',
      'Automated street lighting and waste management'
    ]
  },
  {
    category: 'Citizen Services',
    items: [
      '24/7 Agentic Ai chatbot for city inquiries',
      'Automated permit and license processing',
      'Service request tracking and fulfillment',
      'Personalized alerts and notifications'
    ]
  },
  {
    category: 'Traffic & Transit',
    items: [
      'Smart traffic signal optimization',
      'Public transit route planning',
      'Parking management and guidance',
      'Incident detection and response'
    ]
  },
  {
    category: 'Finance & Planning',
    items: [
      'Budget forecasting and optimization',
      'Revenue collection automation',
      'Urban planning analytics',
      'Economic development insights'
    ]
  }
];

const metrics = [
  { value: '30%', label: 'Cost Savings', description: 'Operational efficiency' },
  { value: '50%', label: 'Faster Services', description: 'Automated workflows' },
  { value: '40%', label: 'Higher Satisfaction', description: 'Better citizen experience' },
  { value: '25%', label: 'Energy Reduction', description: 'Smart infrastructure' }
];

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
    icon: Activity,
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
  },
  {
    icon: Layers,
    title: 'Enterprise Suite',
    description: 'An integrated platform combining ERP, CRM, and AI capabilities for end-to-end business operations.',
    details: {
      overview: 'Our Enterprise Suite brings together all core business systems into a unified platform powered by AI, eliminating data silos and enabling seamless operations.',
      capabilities: [
        'Integrated financial management and accounting',
        'Customer relationship management (CRM)',
        'Supply chain and inventory management',
        'Human resources and payroll',
        'Business intelligence and analytics'
      ],
      useCases: [
        'Complete business operations management',
        'Unified customer view across departments',
        'Automated financial reporting and forecasting',
        'End-to-end supply chain visibility'
      ],
      benefits: [
        { metric: '40%', text: 'reduction in operational costs' },
        { metric: 'Single', text: 'source of truth for data' },
        { metric: '3x', text: 'faster business processes' },
        { metric: 'Unified', text: 'platform with no silos' }
      ]
    }
  },
  {
    icon: Cloud,
    title: 'Cloud Platform',
    description: 'Deploy, scale, and manage AI workloads with enterprise-grade cloud infrastructure built for performance.',
    details: {
      overview: 'Our cloud platform provides the infrastructure foundation for AI workloads, offering enterprise-grade performance, security, and scalability out of the box.',
      capabilities: [
        'Containerized deployment with Kubernetes',
        'Auto-scaling compute and storage resources',
        'Multi-cloud and hybrid cloud support',
        'Edge computing for distributed workloads',
        'Built-in monitoring and observability'
      ],
      useCases: [
        'Large-scale AI model training and inference',
        'Microservices-based application deployment',
        'Data lake and warehouse infrastructure',
        'Hybrid cloud and multi-cloud architectures'
      ],
      benefits: [
        { metric: '99.99%', text: 'infrastructure uptime' },
        { metric: 'Multi-region', text: 'deployment options' },
        { metric: 'Auto', text: 'scaling capabilities' },
        { metric: 'Edge', text: 'computing support' }
      ]
    }
  },
  {
    icon: Code,
    title: 'Developer Tools',
    description: 'Comprehensive SDKs, APIs, and frameworks to integrate AI capabilities into your applications.',
    details: {
      overview: 'Build AI-powered applications with our comprehensive developer toolkit, featuring SDKs in multiple languages, REST APIs, GraphQL, and extensive documentation.',
      capabilities: [
        'SDKs for JavaScript, Python, Java, Go, and more',
        'RESTful APIs with comprehensive documentation',
        'GraphQL API for flexible queries',
        'CLI tools for automation and CI/CD',
        'Webhooks for event-driven integrations'
      ],
      useCases: [
        'Custom AI-powered application development',
        'Integration with existing systems and workflows',
        'Automation of development and deployment',
        'Building AI-native products and features'
      ],
      benefits: [
        { metric: '10+', text: 'language SDKs' },
        { metric: '99.9%', text: 'API uptime' },
        { metric: 'Complete', text: 'documentation' },
        { metric: 'Active', text: 'developer community' }
      ]
    }
  },
  {
    icon: Server,
    title: 'Data Platform',
    description: 'Unified data management with built-in AI for insights, predictions, and automated decision-making.',
    details: {
      overview: 'Our data platform unifies data from across your organization, providing a single source of truth with AI-powered insights, predictions, and automated decision-making.',
      capabilities: [
        'Data lake and warehouse integration',
        'Real-time and batch data pipelines (ETL)',
        'AI-powered data quality and governance',
        'Advanced analytics and machine learning',
        'Self-service business intelligence'
      ],
      useCases: [
        'Centralized data management and governance',
        'Predictive analytics and forecasting',
        'Customer 360 and unified data views',
        'Data-driven decision automation'
      ],
      benefits: [
        { metric: 'Unified', text: 'data management' },
        { metric: 'Real-time', text: 'ETL pipelines' },
        { metric: 'AI-powered', text: 'insights' },
        { metric: 'Built-in', text: 'governance' }
      ]
    }
  }
];

export default function Cities() {
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
        <InternalLinker currentPage="Cities">
    <div className="bg-white">
      <PageMeta 
        title="Smart Cities AI"
        description="Transform urban operations with AI. 30% cost savings, 50% faster services, 40% higher citizen satisfaction. Smart infrastructure and automated city management."
        url="/cities"
        keywords={['smart cities', 'urban AI', 'city infrastructure', 'citizen services', 'traffic management', 'urban planning']}
      
        faq={[{"question":"How does AI transform smart city operations?","answer":"Agents optimize urban infrastructure, traffic flow, public services, and energy management. The platform coordinates city-wide systems for improved efficiency and citizen satisfaction."},{"question":"Can it integrate with existing city systems?","answer":"Yes. We connect to IoT sensor networks, traffic cameras, public transit, and government databases. Agents pull and synthesize data across systems to optimize city operations in real time."},{"question":"What improvements can I expect?","answer":"Smart cities typically see 30% traffic congestion reduction, 45% citizen satisfaction increase, and 35% operational cost reduction when deploying agentic AI."}]}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Industries', url: '/Blog' }, { name: 'Cities', url: '/Cities' }]}
      />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Building className="w-4 h-4" />
                Smart Cities
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Build the city of
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  tomorrow with AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform urban operations with Agentic AI that optimizes infrastructure, improves services, and delights citizens—cutting costs by 30% while building a sustainable future.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                    Get started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('SavingsCalculator')}>
                  <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                    Savings calculator
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=800" alt="Smart City" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">{metric.value}</div>
                <div className="text-white font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Smart City Challenge
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Cities are the engines of economic growth and innovation, yet they struggle with fundamental challenges that impact quality of life: traffic congestion wastes billions in productivity, aging infrastructure requires massive investment, public services strain under budget constraints, and climate goals seem unattainable given current resource consumption. Traditional city management relies on departmental silos where transportation, utilities, public safety, and social services operate independently with minimal coordination. As urban populations grow and citizen expectations rise, cities must find ways to deliver better services with constrained budgets while addressing urgent sustainability challenges—a seemingly impossible task with conventional approaches.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Modern cities deploy thousands of sensors, cameras, and connected systems that generate terabytes of data daily from traffic signals, utility meters, public transit, environmental monitors, and citizen interactions. This data should enable intelligent city management, but fragmented systems and limited analytical capability prevent cities from leveraging it effectively. Traffic management doesn't coordinate with transit scheduling, utility usage patterns don't inform energy planning, and 311 complaints don't trigger proactive infrastructure maintenance. The insights needed to optimize urban operations exist within the data, but without AI integration, they remain trapped in separate departmental databases while city managers make decisions based on incomplete information.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Urban Operations Crisis</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI transforms city operations by creating an intelligent urban operating system where autonomous agents optimize and coordinate services across departments. These systems don't just monitor city infrastructure—they orchestrate it, continuously analyzing data from every sensor and system to make real-time decisions that improve efficiency and livability. AI agents optimize traffic signals to reduce congestion while prioritizing emergency vehicles and public transit, predict infrastructure failures before they occur and schedule preventive maintenance, coordinate waste collection with actual bin fill levels rather than fixed schedules, and provide citizens with intelligent assistants that can report issues, access services, and receive personalized information about city programs.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Cities implementing Agentic AI are achieving remarkable outcomes: 40% reduction in traffic congestion through coordinated signal optimization and dynamic routing, 35% decrease in energy consumption from smart building controls and efficient street lighting, 50% faster emergency response through intelligent dispatch and traffic prioritization, and 60% improvement in citizen satisfaction with city services. These improvements create sustainable urban environments where resources are used efficiently, services are delivered effectively, and citizens enjoy high quality of life—proving that technology can help cities meet the twin challenges of growth and sustainability while making urban living better for everyone.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Urban challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai creates smarter, more efficient cities
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <challenge.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-2xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-red-600 mb-2">❌ The Problem</div>
                        <p className="text-gray-600">{challenge.problem}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600 mb-2">✓ Agentic Ai Solution</div>
                        <p className="text-gray-900 font-medium">{challenge.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful AI Capabilities
            </h2>
            <p className="text-xl text-gray-600">
              Enterprise-grade features that power intelligent operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title} 
                initial={{ opacity: 0, y: 20 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ delay: index * 0.1 }}
                onClick={() => setSelectedFeature(feature)}
                className="cursor-pointer"
              >
                <Card className="h-full hover:shadow-xl transition-all hover:scale-105">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-xl mb-2">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 text-sm">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete smart city platform
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai managing every aspect of urban operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((section, index) => (
              <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#8B2EE5]">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to build a smart city?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading cities worldwide transforming urban operations with Agentic Ai
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
                  Get started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('SavingsCalculator')}>
                <Button variant="outline" className="rounded-full border-gray-300 px-10 h-16 text-lg">
                  Calculate Savings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

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
      
      <FeatureDetailSection {...featureDetails.Cities} />
      <FAQSection faqs={getFAQs('Cities')} />
<RelatedContent
        currentPage="Cities"
        category="industry"
        crossCategories={['product']}
        title="Explore Related Solutions"
      />
    </div>
    </InternalLinker>
  );
}