import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowRight, Layers, Cloud, Code, Database } from 'lucide-react';

const products = [
  {
    icon: Layers,
    name: 'Enterprise Suite',
    tagline: 'Complete business management',
    description: 'An integrated platform combining ERP, CRM, and AI capabilities for end-to-end business operations.',
    features: ['Financial Management', 'Supply Chain', 'HR & Payroll', 'Analytics'],
    gradient: 'from-[#8B2EE5] to-[#A855F7]'
  },
  {
    icon: Cloud,
    name: 'Cloud Platform',
    tagline: 'Scalable infrastructure',
    description: 'Deploy, scale, and manage AI workloads with enterprise-grade cloud infrastructure built for performance.',
    features: ['Auto-scaling', 'Multi-region', 'Edge Computing', '99.99% SLA'],
    gradient: 'from-violet-500 to-purple-500'
  },
  {
    icon: Code,
    name: 'Developer Tools',
    tagline: 'Build with AI',
    description: 'Comprehensive SDKs, APIs, and frameworks to integrate AI capabilities into your applications.',
    features: ['REST & GraphQL APIs', 'SDKs', 'Webhooks', 'CLI Tools'],
    gradient: 'from-indigo-500 to-violet-500'
  },
  {
    icon: Database,
    name: 'Data Platform',
    tagline: 'Intelligence at scale',
    description: 'Unified data management with built-in AI for insights, predictions, and automated decision-making.',
    features: ['Data Lake', 'ML Pipeline', 'Real-time ETL', 'Governance'],
    gradient: 'from-purple-600 to-indigo-600'
  }
];

export default function ProductsSection() {
  return (
    <section className="py-24 bg-gray-50" id="products">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div className="max-w-2xl mb-8 lg:mb-0">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-[#8B2EE5] font-semibold mb-4"
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
            <Button variant="outline" className="rounded-full border-gray-300 hover:border-[#8B2EE5] hover:text-[#8B2EE5]">
              View all products <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </motion.div>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={product.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl p-8 hover:shadow-2xl transition-all duration-500 border border-gray-100"
            >
              <div className="flex items-start justify-between mb-6">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${product.gradient} flex items-center justify-center`}>
                  <product.icon className="w-7 h-7 text-white" />
                </div>
                <ArrowRight className="w-5 h-5 text-gray-300 group-hover:text-[#8B2EE5] group-hover:translate-x-1 transition-all" />
              </div>
              
              <p className="text-sm text-[#8B2EE5] font-medium mb-2">{product.tagline}</p>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">{product.name}</h3>
              <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
              
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
    </section>
  );
}