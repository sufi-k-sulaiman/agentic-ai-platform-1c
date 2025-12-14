import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Cloud, Server, Lock, Zap, Globe, TrendingUp, Shield, Database, CheckCircle, Activity } from 'lucide-react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import PageMeta from '@/components/PageMeta';

const performanceData = [
  { time: '00:00', requests: 12000, latency: 45 },
  { time: '04:00', requests: 8500, latency: 42 },
  { time: '08:00', requests: 28000, latency: 48 },
  { time: '12:00', requests: 45000, latency: 52 },
  { time: '16:00', requests: 52000, latency: 49 },
  { time: '20:00', requests: 38000, latency: 46 }
];

const uptimeData = [
  { month: 'Jul', uptime: 99.99 },
  { month: 'Aug', uptime: 99.98 },
  { month: 'Sep', uptime: 100 },
  { month: 'Oct', uptime: 99.99 },
  { month: 'Nov', uptime: 99.99 },
  { month: 'Dec', uptime: 100 }
];

const features = [
  {
    icon: Zap,
    title: 'Auto-scaling',
    description: 'Automatically scale from zero to millions of users without manual intervention. Our intelligent auto-scaling system monitors your application performance in real-time and dynamically adjusts compute resources to match demand, ensuring optimal performance during traffic spikes while minimizing costs during quiet periods. The platform uses machine learning to predict traffic patterns based on historical data, enabling proactive scaling that prevents performance degradation before it impacts users. Scale horizontally across thousands of instances or vertically to larger instance types, with seamless transitions that happen in milliseconds without any downtime or manual configuration.'
  },
  {
    icon: Globe,
    title: 'Global Edge Network',
    description: 'Deploy your applications across our worldwide network of 150+ strategically located edge data centers spanning every continent and major metropolitan area, ensuring your users experience ultra-low latency regardless of their geographic location. Our intelligent routing system automatically directs each request to the nearest available edge location with sufficient capacity, while our anycast DNS ensures optimal performance even during regional outages or network congestion. The edge network supports dynamic content delivery, serverless function execution at the edge for sub-10ms response times, distributed caching with intelligent invalidation, DDoS protection and web application firewall capabilities, and automatic failover between regions to maintain availability even during catastrophic failures.'
  },
  {
    icon: Shield,
    title: 'Enterprise Security',
    description: 'Bank-grade security infrastructure that protects your data and applications with multiple layers of defense including SOC 2 Type II certification, ISO 27001 compliance, GDPR and CCPA privacy compliance, HIPAA eligibility for healthcare applications, and PCI DSS compliance for payment processing. All data is encrypted at rest using AES-256 encryption and in transit using TLS 1.3, with automatic key rotation and hardware security module (HSM) protection for encryption keys. Our zero-trust architecture requires authentication and authorization for every request, supports SSO integration with SAML and OAuth providers, provides granular role-based access control, maintains comprehensive audit logs of all system access and changes, includes intrusion detection and prevention systems, conducts regular penetration testing and security audits, and offers private networking with VPC peering for isolated environments.'
  },
  {
    icon: Server,
    title: 'Kubernetes-native',
    description: 'Built on enterprise-grade Kubernetes infrastructure providing unmatched portability, reliability, and operational flexibility. Our managed Kubernetes service handles all the complexity of cluster management, automatic upgrades, security patching, and infrastructure maintenance while giving you full control over your application deployment strategies. Deploy using standard Kubernetes manifests, Helm charts, or our simplified configuration format. The platform supports advanced deployment patterns including blue-green deployments for zero-downtime releases, canary deployments for gradual rollouts with automatic rollback on error detection, A/B testing with traffic splitting, and rolling updates with health checks. Cloud-agnostic architecture means you can deploy to any cloud provider or on-premises data center, migrate between providers without vendor lock-in, and run multi-cloud deployments for resilience.'
  },
  {
    icon: Database,
    title: 'Managed Databases',
    description: 'Fully managed database services supporting PostgreSQL for relational data with ACID compliance, MongoDB for flexible document storage, Redis for high-performance caching and real-time features, and Elasticsearch for advanced search capabilities. All databases include automated daily backups with point-in-time recovery up to 35 days, automatic scaling of storage and compute resources based on usage patterns, high availability with synchronous replication across multiple zones, automated failover in under 30 seconds with zero data loss, performance monitoring with query analysis and optimization recommendations, connection pooling and read replicas for improved performance, and encryption at rest and in transit. Our database platform handles all operational tasks including software patching, version upgrades, backup management, and monitoring, allowing your team to focus on application development instead of infrastructure management.'
  },
  {
    icon: TrendingUp,
    title: '99.99% Uptime SLA',
    description: 'Mission-critical reliability backed by our industry-leading 99.99% uptime service level agreement with financial credits for any downtime. Our architecture is designed for resilience at every layer with redundant infrastructure across multiple availability zones within each region, automatic health checking and traffic routing away from unhealthy instances, multi-region deployment capabilities with automatic cross-region failover, distributed denial of service (DDoS) protection handling attacks up to 10 Tbps, comprehensive disaster recovery with geographically dispersed backup storage, and real-time status monitoring with instant incident notifications. Our platform has maintained 99.995% actual uptime over the past 12 months, significantly exceeding our SLA commitment. Each region operates independently so issues in one location never cascade to others, and our global load balancing instantly redirects traffic during regional incidents.'
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
      <PageMeta 
        title="Cloud Platform"
        description="Enterprise cloud infrastructure built for AI workloads. 99.99% uptime SLA, auto-scaling, global edge network. Deploy across 32 regions with Kubernetes-native platform."
        url="/cloud-platform"
        keywords={['cloud platform', 'AI infrastructure', 'Kubernetes', 'auto-scaling', 'edge network', 'managed databases']}
      />
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
              Deploy and scale Agentic Ai applications globally with enterprise-grade infrastructure that's specifically optimized for the unique demands of AI workloads including GPU acceleration, high-throughput data pipelines, model serving with sub-100ms latency, and massive parallel processing capabilities. Our cloud platform combines the raw compute power needed for training and inference with the operational simplicity of a fully managed service, allowing your data science and engineering teams to focus on building innovative AI solutions instead of managing infrastructure complexity. From startups deploying their first model to Fortune 500 enterprises running thousands of AI workloads serving millions of predictions daily, our platform delivers the performance, security, compliance, and reliability that AI applications demand.
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

      {/* Performance Charts */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Real-time platform performance
            </h2>
            <p className="text-xl text-gray-600">
              Live metrics from our global infrastructure showing the reliability and speed you can depend on.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Request Volume & Latency</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <LineChart data={performanceData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="time" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Line yAxisId="left" type="monotone" dataKey="requests" stroke="#8B2EE5" strokeWidth={2} name="Requests/sec" />
                    <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#A855F7" strokeWidth={2} name="Latency (ms)" />
                  </LineChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>6-Month Uptime History</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={uptimeData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[99.9, 100]} />
                    <Tooltip />
                    <Area type="monotone" dataKey="uptime" stroke="#8B2EE5" fill="#E9D5FF" name="Uptime %" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
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
              Everything you need to run production Agentic Ai workloads at global scale with confidence. Our infrastructure is battle-tested by thousands of enterprises processing billions of AI requests daily, from real-time customer service chatbots to complex data analysis pipelines. We handle the heavy lifting of infrastructure management, monitoring, scaling, and optimization so your team can focus on building exceptional AI-powered products that delight users and drive business value.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <feature.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
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
                Our global network ensures your applications are fast and reliable for users everywhere, with the ability to deploy to multiple regions with a single command. Each region is a fully independent deployment zone with its own compute, storage, networking, and database resources, connected via our high-speed private backbone network that spans the globe. Deploy your application to a single region for simplicity or distribute across multiple regions for maximum resilience and performance, with intelligent routing ensuring each user connects to their nearest region automatically. Our platform handles the complexity of multi-region deployments including data replication, consistency management, and failover orchestration, while you maintain full control over which regions to use and how to distribute traffic between them.
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
              Deploy your first Agentic Ai application in minutes with our generous free tier that includes everything you need to build, test, and launch production-ready applications without entering a credit card. Get 100GB of bandwidth, 10GB of storage, 100,000 function invocations, and access to our global edge network completely free every month. Scale to paid plans only when you're ready to grow, with transparent, predictable pricing that scales linearly with your usage and no surprise bills or hidden fees. Join thousands of developers and enterprises who have chosen our platform for its unmatched combination of power, simplicity, and reliability.
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