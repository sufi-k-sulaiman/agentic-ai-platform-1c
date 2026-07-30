import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle2, AlertCircle, Activity, Clock, TrendingUp } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const systems = [
  { name: 'API Gateway', status: 'operational', uptime: '99.99%' },
  { name: 'AI Agents Platform', status: 'operational', uptime: '99.98%' },
  { name: 'Authentication Service', status: 'operational', uptime: '100%' },
  { name: 'Database Cluster', status: 'operational', uptime: '99.97%' },
  { name: 'Storage Service', status: 'operational', uptime: '99.99%' },
  { name: 'Webhooks', status: 'operational', uptime: '99.95%' },
  { name: 'Dashboard', status: 'operational', uptime: '99.99%' },
  { name: 'Documentation', status: 'operational', uptime: '100%' }
];

const incidents = [
  {
    date: 'March 15, 2024',
    title: 'Increased API Latency',
    status: 'Resolved',
    duration: '23 minutes',
    description: 'Some users experienced increased response times. Issue was identified and resolved.'
  },
  {
    date: 'March 1, 2024',
    title: 'Database Maintenance',
    status: 'Completed',
    duration: '2 hours',
    description: 'Scheduled maintenance completed successfully with no service interruption.'
  },
  {
    date: 'February 20, 2024',
    title: 'Authentication Service Degradation',
    status: 'Resolved',
    duration: '45 minutes',
    description: 'Login delays were experienced. Service fully restored.'
  }
];

const metrics = [
  { label: 'Global Uptime', value: '99.99%', trend: '+0.02%' },
  { label: 'Avg Response Time', value: '45ms', trend: '-5ms' },
  { label: 'API Success Rate', value: '99.95%', trend: '+0.01%' },
  { label: 'Incidents (30d)', value: '3', trend: '-2' }
];

export default function Status() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="System Status"
        description="Real-time monitoring of 1C Platform services. 99.99% uptime, all systems operational. Check current status and incident history."
        url="/status"
        keywords={['system status', 'uptime', 'service monitoring', 'platform health', 'API status']}
        faq={[
          { question: 'What is the uptime SLA for 1C Platform?', answer: '1C Platform provides a 99.99% uptime SLA for all production services. This equates to less than 5 minutes of downtime per month, with 24/7 monitoring and automated failover across multiple regions.' },
          { question: 'How do I get incident notifications?', answer: 'Subscribe to status updates via email or webhook on the Status page. You can also integrate with Slack, PagerDuty, or Microsoft Teams for real-time alerts when incidents occur or are resolved.' },
          { question: 'What happens during maintenance windows?', answer: 'Scheduled maintenance is performed during off-peak hours (typically weekends) with 72-hour advance notice. Maintenance is rolling with zero downtime for production services in the high-availability tiers.' },
        ]}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center animate-pulse">
                <CheckCircle2 className="w-6 h-6 text-white" />
              </div>
              <Badge className="bg-green-100 text-green-700 text-base px-4 py-2">
                All Systems Operational
              </Badge>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              System Status
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Real-time monitoring of 1cPlatform services and infrastructure
            </p>
          </motion.div>
        </div>
      </section>

      {/* Metrics */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2">{metric.value}</div>
                <div className="text-gray-400 mb-2">{metric.label}</div>
                <div className="flex items-center justify-center gap-1 text-green-400 text-sm">
                  <TrendingUp className="w-4 h-4" />
                  {metric.trend}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* System Status */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Current status</h2>
            <p className="text-xl text-gray-600">All systems are running smoothly</p>
          </div>

          <div className="space-y-4">
            {systems.map((system, index) => (
              <motion.div
                key={system.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
              >
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                          <CheckCircle2 className="w-5 h-5 text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900">{system.name}</h3>
                          <p className="text-sm text-gray-500">Operational</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-500">30-day uptime</div>
                        <div className="font-semibold text-gray-900">{system.uptime}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Incident History */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Recent incidents</h2>
            <p className="text-xl text-gray-600">Past 90 days</p>
          </div>

          <div className="space-y-6">
            {incidents.map((incident, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center mt-1">
                          <Activity className="w-5 h-5 text-gray-600" />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <CardTitle className="text-xl">{incident.title}</CardTitle>
                            <Badge variant="secondary" className="bg-green-100 text-green-700">
                              {incident.status}
                            </Badge>
                          </div>
                          <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {incident.date}
                            </span>
                            <span>Duration: {incident.duration}</span>
                          </div>
                          <p className="text-gray-600">{incident.description}</p>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </div>

          {incidents.length === 0 && (
            <Card>
              <CardContent className="p-12 text-center">
                <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-gray-900 mb-2">No incidents reported</h3>
                <p className="text-gray-600">All systems have been running smoothly</p>
              </CardContent>
            </Card>
          )}
        </div>
      </section>

      {/* Subscribe */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6">
          <Card className="bg-gradient-to-br from-[#8B2EE5] to-[#6B21A8] text-white border-none">
            <CardContent className="p-12 text-center">
              <h2 className="text-4xl font-bold mb-4">Stay updated</h2>
              <p className="text-xl text-purple-100 mb-8">
                Get notified about system status changes and scheduled maintenance
              </p>
              <div className="flex gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-full bg-white/20 border border-white/30 text-white placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button className="px-8 py-3 bg-white text-[#8B2EE5] rounded-full font-semibold hover:bg-gray-100 transition-colors">
                  Subscribe
                </button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
}