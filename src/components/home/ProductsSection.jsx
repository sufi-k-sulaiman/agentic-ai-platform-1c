import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { ArrowRight, Layers, Cloud, Code, Database, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const products = [
  {
    icon: Layers,
    name: 'Enterprise Suite - Unified Business Operations Platform',
    tagline: 'Complete business management',
    description: 'An integrated platform combining ERP, CRM, and AI capabilities for end-to-end business operations with real-time analytics and automation.',
    features: ['Financial Management', 'Supply Chain', 'HR & Payroll', 'Analytics'],
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
    name: 'Cloud Platform - Enterprise-Grade AI Infrastructure',
    tagline: 'Scalable infrastructure',
    description: 'Deploy, scale, and manage AI workloads with enterprise-grade cloud infrastructure built for performance, security, and global availability.',
    features: ['Auto-scaling', 'Multi-region', 'Edge Computing', '99.99% SLA'],
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
    name: 'Developer Tools - Complete AI Development Suite',
    tagline: 'Build with AI',
    description: 'Comprehensive SDKs, APIs, and frameworks to integrate AI capabilities into your applications with extensive documentation and community support.',
    features: ['REST & GraphQL APIs', 'SDKs', 'Webhooks', 'CLI Tools'],
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
    icon: Database,
    name: 'Data Platform - AI-Powered Data Intelligence',
    tagline: 'Intelligence at scale',
    description: 'Unified data management with built-in AI for insights, predictions, and automated decision-making across your entire organization.',
    features: ['Data Lake', 'ML Pipeline', 'Real-time ETL', 'Governance'],
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

export default function ProductsSection() {
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 sm:mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#6209e6] font-semibold mb-4"
            >
              PRODUCTS
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
            >
              Solutions for every challenge
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              From startups to Fortune 500, our product suite powers the world's most ambitious organizations.
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <Link to={createPageUrl('AgenticAI')}>
              <Button variant="outline" className="rounded-full border-gray-300 hover:border-[#6209e6] hover:text-[#6209e6]">
                View all products <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setSelectedProduct(product)}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100 cursor-pointer"
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <product.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#6209e6]" />
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#6209e6] group-hover:translate-x-1 transition-all" />
              </div>
              
              <p className="text-sm text-[#6209e6] font-medium mb-2">{product.tagline}</p>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-2 sm:mb-3">{product.name}</h3>
              <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{product.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {product.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProduct} onOpenChange={() => setSelectedProduct(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto sm:rounded-lg p-0">
          {selectedProduct && (
            <div>
              <DialogHeader className="p-6 sm:p-8 border-b">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <selectedProduct.icon className="w-8 h-8 text-[#6209e6]" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm text-[#6209e6] font-medium mb-2">{selectedProduct.tagline}</p>
                    <DialogTitle className="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">
                      {selectedProduct.name}
                    </DialogTitle>
                    <p className="text-gray-600">{selectedProduct.description}</p>
                  </div>
                </div>
              </DialogHeader>

              <div className="p-6 sm:p-8 space-y-8">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Overview</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProduct.details.overview}</p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Capabilities</h3>
                  <ul className="space-y-3">
                    {selectedProduct.details.capabilities.map((capability, i) => (
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
                    {selectedProduct.details.useCases.map((useCase, i) => (
                      <div key={i} className="bg-purple-50 rounded-lg p-4">
                        <p className="text-sm text-gray-700">{useCase}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {selectedProduct.details.benefits.map((benefit, i) => (
                      <div key={i} className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-6 text-center">
                        <div className="text-3xl font-bold text-[#6209e6] mb-2">{benefit.metric}</div>
                        <div className="text-sm text-gray-700">{benefit.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Link to={createPageUrl('Onboarding')}>
                    <Button className="w-full bg-[#6209e6] hover:bg-[#5008c5] h-12">
                      Get started <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}