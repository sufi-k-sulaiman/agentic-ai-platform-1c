import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Cloud, Server, Lock, Zap, Globe, Shield, Database, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FeatureDetailSection from '@/components/FeatureDetailSection';
import { featureDetails } from '@/lib/featureDetails';
import InternalLinker from '@/components/seo/InternalLinker';

export default function CloudPlatform() {
  return (
        <InternalLinker currentPage="CloudPlatform">
    <div className="bg-white">
      <PageMeta 
        title="Cloud Platform"
        description="Enterprise cloud infrastructure built for AI workloads. 99.99% uptime SLA, auto-scaling, global edge network. Deploy across 32 regions with Kubernetes-native platform."
        url="/cloud-platform"
        keywords={['cloud platform', 'AI infrastructure', 'Kubernetes', 'auto-scaling', 'edge network', 'managed databases']}
        image="https://images.unsplash.com/photo-1451187582-2980bd714515?w=1200&h=630&fit=crop"
        faq={[
          { question: 'What is the uptime SLA?', answer: 'We provide a 99.99% uptime SLA for Enterprise customers, with service credits if we fall short. This translates to less than 5 minutes of downtime per month.' },
          { question: 'Can I deploy on-premise or hybrid?', answer: 'Yes. We support cloud, on-premise, and hybrid deployments. Use our Kubernetes operator to deploy on your own data centers, or connect on-premise resources to the cloud via secure VPN or private link.' },
          { question: 'Which regions are available?', answer: 'We operate across 32 global regions including US, Canada, Europe, UK, Asia, and Australia. Edge locations are available in 200+ cities for low-latency content delivery.' },
          { question: 'How does auto-scaling work?', answer: 'Our platform automatically scales your AI agents and services based on demand. Configure scaling policies by CPU, memory, request queue depth, or custom metrics. Scale-to-zero is supported for cost optimization.' },
        ]}
      
        service={{ type: 'Cloud Platform - AI Infrastructure', areaServed: 'Worldwide' }}
      />
      <BreadcrumbNav items={[
        { label: 'Home', page: 'Home' },
        { label: 'Cloud Platform' }
      ]} />

      {/* Hero - Fold 1 */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[1.05]"
          >
            Cloud Platform.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Built for AI.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Enterprise infrastructure that scales from zero to billions of requests. Instantly.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-12 h-16 text-lg font-medium">
                Get started
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Performance - Fold 2 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Performance that
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                sets records
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { value: '<50ms', label: 'Global latency', sublabel: 'p50 response time' },
              { value: '99.99%', label: 'Uptime SLA', sublabel: 'Financially backed' },
              { value: '10M+', label: 'Requests/sec', sublabel: 'Peak throughput' },
              { value: '150+', label: 'Edge locations', sublabel: 'Worldwide' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-blue-600 mb-4">{stat.value}</div>
                <div className="text-2xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-lg text-gray-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Auto-scaling - Fold 3 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Auto-scale
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  instantly
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                From zero to millions of users in milliseconds. No configuration needed.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our AI predicts traffic patterns and scales your infrastructure before demand hits. You never pay for unused capacity.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" 
                alt="Auto-scaling" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Global Network - Fold 4 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-900 to-cyan-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Global edge network
            </h2>
            <p className="text-2xl text-blue-200 max-w-3xl mx-auto leading-relaxed">
              Deploy to 150+ locations worldwide. Your users connect to the nearest edge instantly.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { region: 'North America', locations: '45', latency: '12ms' },
              { region: 'Europe', locations: '38', latency: '15ms' },
              { region: 'Asia Pacific', locations: '42', latency: '18ms' },
              { region: 'South America', locations: '25', latency: '22ms' }
            ].map((region, i) => (
              <motion.div
                key={region.region}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8"
              >
                <div className="text-4xl font-bold mb-2">{region.locations}</div>
                <div className="text-xl font-semibold mb-4">{region.region}</div>
                <div className="text-blue-200">Avg: {region.latency}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Security - Fold 5 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-32 h-32 text-blue-400 mx-auto mb-12" />
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Enterprise-grade
              <br />
              security
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              SOC 2 Type II. ISO 27001. GDPR. HIPAA. We handle compliance so you don't have to.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto text-left">
              {[
                { title: 'Data encryption', desc: 'AES-256 at rest, TLS 1.3 in transit' },
                { title: 'Zero trust', desc: 'Authentication on every request' },
                { title: 'DDoS protection', desc: 'Up to 10 Tbps mitigation' }
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <h3 className="text-2xl font-bold mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Kubernetes - Fold 6 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=800" 
                alt="Kubernetes" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Kubernetes.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  Simplified.
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Full Kubernetes power without the complexity. Deploy with one command.
              </p>
              <div className="space-y-4">
                {[
                  'Automatic upgrades',
                  'Built-in monitoring',
                  'Zero-downtime deploys',
                  'Auto-healing clusters'
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-xl text-gray-700"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Databases - Fold 7 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Managed databases
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              PostgreSQL, MongoDB, Redis. Fully managed with automatic backups and scaling.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Database, name: 'PostgreSQL', features: ['ACID compliance', 'Point-in-time recovery', 'Read replicas'] },
              { icon: Server, name: 'MongoDB', features: ['Flexible schema', 'Horizontal scaling', 'Sharding'] },
              { icon: Zap, name: 'Redis', features: ['In-memory speed', 'Pub/sub messaging', 'Caching'] }
            ].map((db, i) => (
              <motion.div
                key={db.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <db.icon className="w-16 h-16 text-blue-600 mb-6" />
                <h3 className="text-3xl font-bold text-gray-900 mb-6">{db.name}</h3>
                <div className="space-y-3">
                  {db.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-gray-700">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compute Power - Fold 8 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Unmatched
              <br />
              compute power
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { label: 'CPU Cores', value: 'Up to 256' },
              { label: 'Memory', value: 'Up to 2TB' },
              { label: 'Storage', value: 'Unlimited' },
              { label: 'Network', value: '100 Gbps' },
              { label: 'GPU', value: 'NVIDIA A100' },
              { label: 'Regions', value: '32 global' }
            ].map((spec, i) => (
              <motion.div
                key={spec.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <div className="text-gray-400 mb-2">{spec.label}</div>
                <div className="text-4xl font-bold">{spec.value}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Monitoring - Fold 9 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Real-time
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  observability
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Built-in monitoring, logging, and tracing. See everything happening in your infrastructure.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Automated alerts, custom dashboards, and deep insights into performance bottlenecks.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" 
                alt="Monitoring dashboard" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Model - Fold 10 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Pay only for
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                what you use
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              No upfront costs. No long-term contracts. Scale down to zero and pay nothing.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '$0', label: 'Setup fee' },
                { value: '100GB', label: 'Free tier' },
                { value: '$0.01', label: 'Per GB after' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-3">{item.value}</div>
                  <div className="text-xl text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Developer Experience - Fold 11 */}
      <section className="min-h-screen flex items-center bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Built for developers
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto">
              Deploy in seconds with our CLI, APIs, or Git integration
            </p>
          </motion.div>

          <div className="bg-gray-800 rounded-3xl p-8 max-w-4xl mx-auto">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 bg-red-500 rounded-full" />
              <div className="w-3 h-3 bg-yellow-500 rounded-full" />
              <div className="w-3 h-3 bg-green-500 rounded-full" />
            </div>
            <pre className="text-green-400 text-lg">
              {`$ onec deploy\n\nDeploying to production...\n✓ Building image\n✓ Pushing to registry\n✓ Rolling out deployment\n✓ Health checks passing\n\nDeployed in 12s\nhttps://your-app.onec.cloud`}
            </pre>
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-cyan-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Calculate Your{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                Infrastructure Savings
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              See how much you'll save on cloud infrastructure costs
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
              {[
                { value: '$180K', label: 'Avg infrastructure savings/year' },
                { value: '65%', label: 'Cost reduction vs AWS/Azure' },
                { value: '3 months', label: 'Average payback period' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8 border border-blue-100"
                >
                  <div className="text-5xl font-bold text-blue-600 mb-3">{stat.value}</div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            <Link to={createPageUrl('SavingsCalculator')}>
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700 rounded-full px-10 h-14 text-lg">
                Calculate Your Savings <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      
      <FeatureDetailSection {...featureDetails.CloudPlatform} />
{/* CTA - Fold 12 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-cyan-900 to-teal-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-400 rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Ready to scale
            <br />
            globally?
          </h2>
          <p className="text-2xl md:text-3xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Deploy your first application in under 5 minutes
          </p>
          <Link to={createPageUrl('Onboarding')}>
            <Button className="bg-white text-blue-900 hover:bg-gray-100 rounded-full px-12 h-16 text-lg font-medium">
              Get started
            </Button>
          </Link>
          
          <div className="mt-20 grid grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div>
              <div className="text-5xl font-bold mb-2">Free</div>
              <div className="text-blue-200">100GB included</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">Global</div>
              <div className="text-blue-200">150+ locations</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-blue-200">Expert support</div>
            </div>
          </div>
        </motion.div>
      </section>
      <RelatedContent
        currentPage="CloudPlatform"
        category="product"
        crossCategories={['resources']}
        title="Explore Related Solutions"
      />
    </div>
    </InternalLinker>
  );
}