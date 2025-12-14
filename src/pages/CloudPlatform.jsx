import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Cloud, Server, Lock, Zap, Globe, TrendingUp, Shield, Database } from 'lucide-react';

const features = [
  {
    icon: Zap,
    title: 'Auto-scaling',
    description: 'Automatically scale from zero to millions of users without manual intervention.'
  },
  {
    icon: Globe,
    title: 'Global Edge Network',
    description: 'Deploy across 150+ data centers worldwide for ultra-low latency everywhere.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'SOC 2, ISO 27001, GDPR compliant with end-to-end encryption.'
  },
  {
    icon: Server,
    title: 'Kubernetes-native',
    description: 'Built on Kubernetes for portability, reliability, and cloud-agnostic deployment.'
  },
  {
    icon: Database,
    title: 'Managed Databases',
    description: 'PostgreSQL, MongoDB, Redis—fully managed with automatic backups and scaling.'
  },
  {
    icon: TrendingUp,
    title: '99.99% Uptime SLA',
    description: 'Mission-critical reliability with multi-region failover and disaster recovery.'
  }
];

const specs = [
  { label: 'Compute', value: 'Up to 256 vCPUs per instance' },
  { label: 'Memory', value: 'Up to 2TB RAM per instance' },
  { label: 'Storage', value: 'Unlimited with 99.999999999% durability' },
  { label: 'Network', value: '100 Gbps bandwidth' },
  { label: 'Regions', value: '30+ globally available' },
  { label: 'CDN', value: '150+ edge locations' }
];

export default function CloudPlatform() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,46,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,46,229,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
              <Cloud className="w-4 h-4" />
              Cloud Platform
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Infrastructure built for
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                AI workloads
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Deploy and scale AI applications globally with enterprise-grade infrastructure that's optimized for performance, security, and reliability.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14 text-base">
                Get started <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14 text-base">
                View pricing
              </Button>
            </div>

            {/* Trust badges */}
            <div className="mt-12 flex flex-wrap justify-center gap-6">
              {['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA'].map((cert) => (
                <Badge key={cert} variant="secondary" className="px-4 py-2">
                  <Lock className="w-3 h-3 mr-2" />
                  {cert}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Built for scale and performance
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to run production AI workloads at global scale.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <feature.icon className="w-7 h-7 text-[#8B2EE5]" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Technical Specs */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Unmatched compute power
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Industry-leading infrastructure specifications designed for the most demanding AI workloads.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {specs.map((spec, index) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
              >
                <div className="text-sm text-gray-400 mb-2">{spec.label}</div>
                <div className="text-2xl font-bold">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Global Infrastructure */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Deploy anywhere, instantly
              </h2>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Our global network ensures your applications are fast and reliable for users everywhere. Deploy to multiple regions with a single command.
              </p>
              <div className="space-y-6">
                {[
                  { region: 'North America', locations: '12 regions' },
                  { region: 'Europe', locations: '8 regions' },
                  { region: 'Asia Pacific', locations: '9 regions' },
                  { region: 'South America', locations: '3 regions' }
                ].map((region, index) => (
                  <motion.div
                    key={region.region}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center justify-between p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-[#8B2EE5] rounded-lg flex items-center justify-center">
                        <Globe className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{region.region}</div>
                        <div className="text-sm text-gray-500">{region.locations}</div>
                      </div>
                    </div>
                    <div className="text-green-600 font-medium">Active</div>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative aspect-square bg-gradient-to-br from-[#8B2EE5]/10 to-[#A855F7]/10 rounded-3xl p-8 flex items-center justify-center"
            >
              <div className="relative w-full h-full">
                {/* Globe representation */}
                <div className="absolute inset-0 border-2 border-dashed border-purple-300 rounded-full" />
                <div className="absolute inset-8 border-2 border-dashed border-purple-300 rounded-full" />
                <div className="absolute inset-16 border-2 border-dashed border-purple-300 rounded-full" />
                
                {/* Data centers */}
                {[...Array(12)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute w-4 h-4 bg-[#8B2EE5] rounded-full"
                    style={{
                      top: `${30 + Math.sin(i * Math.PI / 6) * 40}%`,
                      left: `${30 + Math.cos(i * Math.PI / 6) * 40}%`,
                    }}
                    animate={{
                      scale: [1, 1.5, 1],
                      opacity: [0.7, 1, 0.7]
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  />
                ))}
                
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-5xl font-bold text-gray-900 mb-2">32</div>
                    <div className="text-gray-600">Global regions</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start building today
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Deploy your first application in minutes. No credit card required for free tier.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Get started free <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}