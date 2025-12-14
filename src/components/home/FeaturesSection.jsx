import React from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Shield, Zap, Brain, Globe } from 'lucide-react';

const features = [
  {
    icon: Bot,
    title: 'Autonomous Agents',
    description: 'Deploy AI agents that independently handle complex tasks, make decisions, and adapt to changing conditions.',
    color: 'bg-purple-100 text-[#8B2EE5]'
  },
  {
    icon: Workflow,
    title: 'Intelligent Workflows',
    description: 'Automate end-to-end business processes with AI that understands context and optimizes in real-time.',
    color: 'bg-violet-100 text-violet-600'
  },
  {
    icon: Brain,
    title: 'Deep Learning Models',
    description: 'Access state-of-the-art models trained on enterprise data with built-in security and compliance.',
    color: 'bg-indigo-100 text-indigo-600'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade encryption, SOC 2 compliance, and granular access controls protect your data.',
    color: 'bg-emerald-100 text-emerald-600'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Process millions of events per second with sub-millisecond latency for instant insights.',
    color: 'bg-amber-100 text-amber-600'
  },
  {
    icon: Globe,
    title: 'Global Scale',
    description: 'Deploy across regions with automatic scaling, failover, and 99.99% uptime guarantee.',
    color: 'bg-sky-100 text-sky-600'
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
  return (
    <section className="py-24 bg-white" id="agentic-ai">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
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
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
          >
            Built for the AI era
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600"
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
              className="group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300"
            >
              <div className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}