import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, TrendingDown, Database, Workflow, DollarSign, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const challenges = [
  {
    icon: DollarSign,
    title: 'Energy & OpEx',
    problem: 'Power and cooling costs consuming 60% of operating budget, with peak demand charges adding another 20% to utility bills. Inefficient resource allocation leads to overprovisioning by 40%, meaning facilities pay for capacity they never use. PUE (Power Usage Effectiveness) ratios above 1.6 indicate massive waste. Manual optimization of cooling systems results in hot spots that reduce equipment lifespan and increase failure rates by 35%.',
    solution: 'AI optimizes power distribution and cooling in real-time by analyzing thermal maps, weather forecasts, and workload patterns. Machine learning algorithms dynamically adjust CRAC units, airflow, and temperature setpoints to maintain optimal conditions while minimizing energy consumption. Predictive workload placement ensures servers operate within ideal temperature ranges. This comprehensive approach reduces energy costs by 35%, prevents overprovisioning by 40%, and improves PUE to 1.2 or better.'
  },
  {
    icon: Database,
    title: 'Complex Data',
    problem: 'Millions of metrics from servers, storage systems, network equipment, HVAC, and power infrastructure generate terabytes of data daily—far too much for human analysis. Critical patterns indicating impending failures are buried in noise. Traditional monitoring tools generate thousands of false-positive alerts, creating alarm fatigue. Correlating events across different systems requires expert knowledge and hours of investigation.',
    solution: 'Agentic AI processes all telemetry data in real-time using advanced machine learning models trained on historical failure patterns. The system automatically identifies anomalies, correlates events across different infrastructure layers, and predicts potential failures weeks in advance. Intelligent alert suppression eliminates false positives by 95%, while automated root cause analysis provides actionable insights. The AI continuously learns from every incident, improving accuracy and reducing mean time to resolution by 70%.'
  },
  {
    icon: Workflow,
    title: 'Manual Operations',
    problem: 'Reactive maintenance results in unexpected outages that cost $9,000 per minute on average. Slow incident response due to manual troubleshooting extends downtime. Manual capacity planning leads to either underutilization or emergency equipment purchases. Technicians spend 40% of their time on routine tasks like firmware updates, cable management documentation, and compliance reporting that could be automated.',
    solution: 'Autonomous agents predict failures by monitoring equipment health 24/7, analyzing vibration patterns, temperature anomalies, and performance degradation. Automated orchestration handles routine maintenance during scheduled windows, coordinates repairs across teams, and dynamically reallocates resources to maintain service levels. Intelligent capacity planning forecasts needs 6-12 months ahead based on growth trends, enabling proactive procurement. This achieves 99.999% uptime, reduces emergency repairs by 85%, and frees technicians to focus on strategic improvements.'
  },
  {
    icon: Shield,
    title: 'Security & Compliance',
    problem: 'Continuous threat monitoring across thousands of access points, cameras, and network segments overwhelms security teams. Manual audit trail collection for compliance takes weeks and is error-prone. Maintaining certifications like SOC 2, ISO 27001, and PCI DSS requires extensive documentation and regular evidence collection. Physical security incidents average 15 minutes to detect and 45 minutes to respond to, creating significant risk windows.',
    solution: 'AI monitors security 24/7 across all systems, detecting unauthorized access, unusual patterns, and potential threats in milliseconds. Automated compliance engines continuously collect evidence, generate audit-ready reports, and ensure all controls are functioning correctly. Physical security AI analyzes camera feeds for suspicious behavior, automatically alerts appropriate personnel, and coordinates response. Integration with access control systems provides complete visibility and automated incident response, reducing detection time to under 1 minute and improving compliance audit success rate to 100%.'
  }
];

const solutions = [
  {
    category: 'Infrastructure Operations',
    items: [
      'Predictive maintenance preventing equipment failures with 98% accuracy',
      'Automated capacity planning and resource allocation across racks and rows',
      'Real-time infrastructure optimization based on workload patterns and SLAs',
      'Intelligent workload placement maximizing efficiency and minimizing costs',
      'Automated provisioning and deprovisioning with zero-touch deployment',
      'Performance monitoring with AI-powered anomaly detection and alerting'
    ]
  },
  {
    category: 'Power & Cooling',
    items: [
      'Dynamic cooling adjustments based on real-time thermal mapping and predictions',
      'AI-driven power distribution optimization preventing overloads and outages',
      'Automated PUE monitoring and continuous improvement recommendations',
      'Energy consumption forecasting and budget planning with seasonal adjustments',
      'Smart UPS management with predictive battery replacement scheduling',
      'Renewable energy integration and carbon footprint optimization'
    ]
  },
  {
    category: 'Security & Compliance',
    items: [
      'Continuous security monitoring with AI-powered threat detection and response',
      'Automated compliance reporting for SOC2, ISO 27001, HIPAA, and PCI DSS',
      'Access control automation with behavioral analytics and anomaly detection',
      'Comprehensive audit logging with intelligent retention and quick retrieval',
      'Video surveillance analytics detecting unauthorized access and safety hazards',
      'Automated vulnerability scanning and patch management coordination'
    ]
  },
  {
    category: 'Finance & Analytics',
    items: [
      'Real-time cost analysis per customer, workload, and service tier',
      'Automated invoicing based on actual usage metrics and SLA performance',
      'Predictive budgeting for CapEx and OpEx with scenario modeling',
      'ROI tracking on infrastructure investments with detailed cost breakdowns',
      'Chargeback and showback reporting with granular resource attribution',
      'Financial forecasting integrating growth projections and market trends'
    ]
  }
];

const metrics = [
  { value: '35%', label: 'Energy Savings', description: 'Lower power & cooling costs' },
  { value: '99.999%', label: 'Uptime SLA', description: 'Predictive maintenance' },
  { value: '<1min', label: 'Response Time', description: 'Instant incident detection' },
  { value: '$2M+', label: 'Annual Savings', description: 'Per facility average' }
];

export default function DataCenters() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Data Center AI"
        description="Autonomous data center operations with 35% energy savings and 99.999% uptime. Predictive maintenance, real-time optimization, and $2M+ annual savings per facility."
        url="/data-centers"
        keywords={['data center automation', 'DCIM', 'predictive maintenance', 'energy optimization', 'infrastructure automation']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Server className="w-4 h-4" />
                Data Centers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Autonomous data center
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  operations with AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Deploy self-managing Agentic Ai that optimizes power consumption, predicts equipment failures before they occur, and maintains 99.999% uptime while reducing energy costs by 35%. Transform your data center into an intelligent, self-healing infrastructure that operates at peak efficiency 24/7 with minimal human intervention.
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
              <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" alt="Data Center" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Metrics */}
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

      {/* Industry Overview */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Modern data centers are the backbone of our digital economy, yet they face extraordinary challenges in maintaining uptime, managing energy consumption, and scaling infrastructure to meet exponential growth in computing demand. With energy costs representing 40-60% of total operating expenses and downtime costing thousands of dollars per minute, even minor inefficiencies or system failures can have catastrophic financial impacts. Traditional management approaches that rely on manual monitoring, reactive maintenance, and rule-based automation are simply inadequate for the complexity and scale of contemporary data center operations.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Data centers generate millions of data points every second—from temperature sensors and power meters to server logs and network traffic patterns. This overwhelming volume of real-time data creates both opportunity and challenge: while the insights needed for optimal operations exist within the data, extracting actionable intelligence requires sophisticated analysis that exceeds human capacity. Infrastructure teams struggle to correlate patterns across cooling systems, power distribution, server utilization, and network performance, often discovering issues only after they've impacted service delivery.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI transforms data center operations by deploying autonomous agents that continuously monitor, analyze, and optimize every aspect of the facility. These intelligent systems don't just collect data—they understand the complex relationships between power consumption, thermal dynamics, workload distribution, and equipment health. By processing millions of variables simultaneously, AI agents can predict failures before they occur, automatically adjust cooling and power systems for maximum efficiency, and orchestrate workload placement to optimize both performance and cost.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Leading data centers leveraging Agentic AI are achieving unprecedented operational excellence: 30% reduction in energy costs through intelligent cooling and power optimization, 99.999% uptime through predictive maintenance that prevents failures, and 50% faster issue resolution with autonomous troubleshooting and remediation. These systems operate 24/7 with superhuman precision, making microsecond decisions that collectively transform data center economics while ensuring the reliability that modern digital services demand.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Solving critical data center challenges
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Agentic Ai addresses the biggest pain points in data center operations, from energy efficiency to predictive maintenance. Discover how leading facilities are achieving unprecedented reliability and efficiency.
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

      {/* Solutions */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              End-to-end AI automation
            </h2>
            <p className="text-xl text-gray-600">
              Autonomous Agentic Ai managing every aspect of your data center with comprehensive monitoring, predictive analytics, and automated remediation.
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

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for autonomous operations?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading data centers worldwide saving millions annually with Agentic Ai-powered infrastructure management. Transform your facility into a self-optimizing, predictive operation.
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
    </div>
  );
}