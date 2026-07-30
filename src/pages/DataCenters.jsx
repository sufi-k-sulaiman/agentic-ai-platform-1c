import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Server, TrendingDown, Database, Workflow, DollarSign, Zap, Shield, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import VerticalAnalytics from '@/components/VerticalAnalytics';

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
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&h=630&fit=crop"
        service={{
          type: 'Data Center AI Solutions',
          areaServed: 'Worldwide',
        }}
        localBusiness={{
          name: '1C Platform - Data Center AI',
          telephone: '+1-800-1C-DATACENTER',
        }}
      
        faq={[{"question":"How does AI optimize data center operations?","answer":"Agents predict maintenance needs, optimize energy usage, automate capacity planning, and monitor security threats. The platform achieves 99.999% uptime while reducing operational costs by 35%."},{"question":"Can it monitor my existing infrastructure?","answer":"Yes. We integrate with Kubernetes, VMware, AWS, Azure, and GCP. Agents pull metrics from Prometheus, Grafana, and Datadog to predict issues before they impact users."},{"question":"What energy savings can I expect?","answer":"Data centers typically see 30% energy reduction, 35% cost savings, and 99.999% uptime when deploying agentic AI for grid optimization and predictive maintenance."}]}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Industries', url: '/Blog' }, { name: 'DataCenters', url: '/DataCenters' }]}
      />
      <BreadcrumbNav items={[
        { label: 'Home', page: 'Home' },
        { label: 'Data Centers' }
      ]} />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#6209e6] text-sm font-medium mb-8">
                <Server className="w-4 h-4" />
                Data Centers
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Autonomous data center
                <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                  operations with AI
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Deploy self-managing Agentic Ai that optimizes power consumption, predicts equipment failures before they occur, and maintains 99.999% uptime while reducing energy costs by 35%. Transform your data center into an intelligent, self-healing infrastructure that operates at peak efficiency 24/7 with minimal human intervention.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-[#6209e6] hover:bg-[#5008c5] rounded-full px-8 h-14">
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

      {/* Business & Technology Overview */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Data Centers
            </h2>
          </motion.div>
          
          <div className="prose prose-lg max-w-none space-y-6 text-gray-700 leading-relaxed">
            <p>
              Data centers form the critical infrastructure backbone of the digital economy, housing servers, storage systems, and networking equipment that power everything from cloud computing to streaming services. The global data center market exceeds $200 billion annually, driven by explosive growth in cloud services, AI workloads, and edge computing. These facilities consume approximately 1-1.5% of global electricity, with power and cooling costs representing 60-70% of operating expenses. Data centers operate under extreme pressure to maintain 99.999% uptime (less than 5 minutes downtime per year) while managing escalating capacity demands, increasingly strict sustainability regulations, and relentless cost optimization pressure. The industry divides into hyperscale facilities (Amazon, Google, Microsoft) operating at massive scale with proprietary technology, colocation providers renting space to enterprises, and enterprise data centers supporting specific organizational needs.
            </p>
            <p>
              The business model centers on maximizing utilization while minimizing operating costs, particularly energy consumption which scales linearly with compute density. Revenue comes from space rental (per rack or square foot), power consumption (per kilowatt), bandwidth allocation, and managed services including monitoring, security, and compliance support. Profitability depends on achieving optimal PUE (Power Usage Effectiveness) ratios—the industry standard metric comparing total facility power to IT equipment power, with 1.0 being perfect efficiency and typical facilities ranging from 1.4-1.8. Each 0.1 improvement in PUE translates to millions in annual savings for large facilities. Successful operators differentiate through reliability (minimizing downtime through redundant systems and predictive maintenance), efficiency (optimizing power and cooling to reduce operating costs), and service quality (providing superior monitoring, security, and customer support). Capital expenditure cycles are significant—major equipment upgrades, cooling infrastructure, and power capacity expansion require multi-million dollar investments with 5-7 year depreciation schedules.
            </p>
            <p>
              Data center technology infrastructure encompasses multiple interconnected layers: IT equipment (servers, storage, networking), power systems (UPS, generators, PDUs, battery backup), cooling infrastructure (CRAC units, chillers, economizers, hot/cold aisle containment), monitoring systems (DCIM software tracking power, temperature, humidity, airflow), security systems (biometric access, video surveillance, intrusion detection), and building management systems coordinating HVAC, lighting, and fire suppression. Modern facilities deploy extensive sensor networks generating millions of data points daily: temperature sensors throughout server rows, power meters at rack level, humidity monitors, airflow measurements, vibration sensors on mechanical equipment, and performance metrics from every server and network device. DCIM (Data Center Infrastructure Management) platforms aggregate this data but traditionally require human analysts to identify patterns and make optimization decisions. Automation exists at basic levels—HVAC systems maintaining temperature setpoints, UPS systems switching to battery during outages—but complex optimization and predictive capabilities remain largely manual.
            </p>
            <p>
              Agentic AI transforms data centers from monitored facilities into autonomous, self-optimizing ecosystems. AI agents continuously analyze thermal dynamics across entire server halls, correlating workload patterns, weather conditions, and electricity pricing to optimize cooling systems in real-time—dynamically adjusting CRAC units, airflow, and temperature setpoints to maintain optimal conditions while minimizing energy consumption. Predictive maintenance agents monitor equipment health through vibration analysis, temperature patterns, performance degradation, and historical failure data to forecast issues weeks before they occur, automatically scheduling service during maintenance windows and ordering replacement parts proactively. Capacity planning agents analyze growth trends, workload characteristics, and infrastructure utilization to forecast needs 6-12 months ahead, enabling proactive procurement and preventing both overprovisioning waste and emergency capacity crunches. Workload orchestration agents intelligently place computing tasks across the facility based on thermal conditions, power availability, and network topology. The result: facilities operating at PUE ratios of 1.2 or better (compared to industry average 1.6), achieving 99.999% uptime through predictive rather than reactive maintenance, and reducing operational costs by 35% while enabling infrastructure teams to focus on strategic improvements rather than firefighting daily operational issues.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Overview */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Data Center Challenge
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Data center operators face an impossible balancing act: maintaining 99.999% uptime while managing explosive growth in computing demand, all within tight energy budgets and increasingly strict sustainability mandates. Power and cooling costs consume 60% of operating expenses, with every percentage point of PUE (Power Usage Effectiveness) improvement translating to millions in annual savings. Yet traditional HVAC management relies on static setpoints that waste energy or create hot spots leading to equipment failure. Infrastructure teams monitor thousands of servers, storage arrays, network switches, and environmental systems through disparate management consoles, making it nearly impossible to identify issues before they cascade into outages that cost $9,000 per minute on average.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              The complexity multiplies with scale: thermal dynamics across server rows, workload patterns affecting power consumption, equipment aging curves, and network topology all interact in ways that exceed human comprehension. Maintenance happens on fixed schedules rather than actual equipment condition, leading to both premature service (wasting resources) and unexpected failures (causing downtime). Capacity planning relies on historical trends rather than predictive modeling, resulting in expensive over-provisioning to avoid capacity crunches. Meanwhile, every second of downtime damages customer trust and SLA commitments, yet troubleshooting complex issues can take hours as teams manually correlate logs, metrics, and events across systems trying to identify root causes.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">The Data Center Operations Challenge</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI creates truly autonomous data center operations where intelligent agents continuously optimize every aspect of the facility in real-time. AI analyzes thermal maps from thousands of sensors alongside workload distributions, weather forecasts, and electricity rates to dynamically adjust CRAC units, airflow, and temperature setpoints millisecond by millisecond—maintaining optimal cooling while minimizing energy consumption. Predictive algorithms monitor vibration patterns, temperature anomalies, and performance metrics from every piece of equipment to identify failures weeks before they occur, automatically scheduling maintenance during optimal windows and ordering replacement parts before technicians even know there's an issue. Workload orchestration AI continuously optimizes server placement based on thermal conditions, power availability, network topology, and application requirements, ensuring maximum efficiency and performance.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              The results transform data center economics: energy costs drop 35% as AI achieves PUE ratios of 1.2 or better through continuous optimization impossible for humans. Uptime reaches 99.999% as predictive maintenance prevents 95% of potential failures before they impact service. When issues do occur, AI agents automatically diagnose root causes by correlating millions of data points across systems, identify remediation steps, and often resolve problems autonomously—reducing mean time to resolution from hours to minutes. Capacity planning becomes proactive rather than reactive, with AI forecasting needs 6-12 months ahead and optimizing resource allocation to eliminate both over-provisioning waste and capacity crunches. Infrastructure teams shift from firefighting to strategic planning, while the data center operates with precision and efficiency that sets new industry benchmarks.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Temperature spike detected', description: 'Rack 47 thermal anomaly', icon: 'AlertCircle', color: 'text-orange-500' },
          { time: '10:31 AM', action: 'AI analysis complete', description: 'CRAC unit efficiency drop', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:32 AM', action: 'Cooling adjusted', description: 'Airflow optimized automatically', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:35 AM', action: 'Normal operations', description: 'Temperature stabilized', icon: 'CheckCircle', color: 'text-green-500' }
        ],
        goalsProgress: [
          { goal: 'Energy Efficiency (PUE)', current: '1.2', target: '1.4', percentage: 85, color: 'bg-green-500' },
          { goal: 'Uptime SLA', current: '99.998%', target: '99.999%', percentage: 99, color: 'bg-purple-500' },
          { goal: 'Capacity Optimization', current: 82, target: 100, percentage: 82, color: 'bg-blue-500' },
          { goal: 'Predictive Maintenance', current: 95, target: 100, percentage: 95, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'Equipment Maintenance Scheduled', description: 'UPS battery replacement in 14 days...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'Energy Cost Savings', description: 'Monthly savings reached $45K...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'Capacity Alert', description: 'Rack 52 approaching 80% capacity...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Security Scan Complete', description: 'All systems passed compliance check...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      {/* Challenges */}
      <section className="py-24 bg-gray-50">
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
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl flex-1">{challenge.title}</CardTitle>
                      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                        <challenge.icon className="w-7 h-7 text-[#6209e6]" />
                      </div>
                    </div>
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
      <section className="py-24 bg-white">
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
                    <CardTitle className="text-2xl text-[#6209e6]">{section.category}</CardTitle>
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
                <Button className="bg-[#6209e6] hover:bg-[#5008c5] rounded-full px-10 h-16 text-lg">
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
      <RelatedContent
        currentPage="DataCenters"
        category="industry"
        crossCategories={['product']}
        title="Explore Related Solutions"
      />
    </div>
  );
}