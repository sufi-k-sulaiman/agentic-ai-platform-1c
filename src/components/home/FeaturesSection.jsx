import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Bot, Workflow, Shield, Zap, Brain, Globe, CheckCircle, ArrowRight, X } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

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
    icon: Workflow,
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
  const [selectedFeature, setSelectedFeature] = useState(null);

  return (
    <section className="py-20 sm:py-24 lg:py-32 bg-white" id="agentic-ai">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6"
          >
            Built for the AI era
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg sm:text-xl text-gray-600"
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
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              onClick={() => setSelectedFeature(feature)}
              className={`group p-8 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-xl border border-transparent hover:border-gray-100 transition-all duration-300 cursor-pointer ${index > 0 ? 'hidden md:block' : ''}`}
            >
              <div className="mb-4 sm:mb-6 group-hover:scale-110 transition-transform">
                <feature.icon className="w-12 h-12 sm:w-14 sm:h-14 text-[#8B2EE5]" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      <Dialog open={!!selectedFeature} onOpenChange={() => setSelectedFeature(null)}>
        <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto sm:rounded-lg p-0">
          {selectedFeature && (
            <div>
              <button
                onClick={() => setSelectedFeature(null)}
                className="absolute right-4 top-4 w-10 h-10 rounded-full bg-[#8B2EE5] hover:bg-[#7325C4] flex items-center justify-center transition-colors z-50"
              >
                <X className="w-5 h-5 text-white" />
              </button>
              
              <DialogHeader className="p-6 sm:p-8 border-b">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <selectedFeature.icon className="w-8 h-8 text-[#8B2EE5]" />
                  </div>
                  <div className="flex-1 pr-8">
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
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedFeature.title === 'Autonomous Agents' && 'Autonomous agents represent the next evolution in enterprise automation, moving beyond simple rule-based systems to intelligent entities that can understand context, make decisions, and take action independently. These AI-powered agents operate continuously, learning from every interaction to improve their performance over time while handling complex multi-step workflows that previously required human intervention at every stage.'}
                      {selectedFeature.title === 'Intelligent Workflows' && 'Intelligent workflows revolutionize how businesses operate by eliminating the rigid constraints of traditional automation. Our AI-powered workflow engine understands the nuances of your business processes, adapts to exceptions in real-time, and continuously optimizes itself based on performance data. Unlike static automation that breaks when conditions change, intelligent workflows evolve with your business needs.'}
                      {selectedFeature.title === 'Deep Learning Models' && 'Our deep learning infrastructure delivers enterprise-grade AI capabilities that rival the largest tech companies, but with the security, compliance, and customization your business demands. Built on cutting-edge transformer architectures and trained on massive datasets, these models provide state-of-the-art performance across natural language processing, computer vision, and predictive analytics tasks.'}
                      {selectedFeature.title === 'Enterprise Security' && 'Security is not an afterthought but the foundation of our entire platform architecture. Every component is designed with security-first principles, from data encryption and access controls to audit logging and compliance monitoring. We understand that your data is your most valuable asset, and protecting it is our highest priority.'}
                      {selectedFeature.title === 'Real-time Processing' && 'In today\'s fast-paced business environment, delays mean missed opportunities and lost revenue. Our real-time processing engine eliminates latency bottlenecks, enabling your organization to respond to events as they happen rather than after the fact. Whether detecting fraud in milliseconds or personalizing customer experiences instantly, real-time processing creates competitive advantages that batch processing cannot match.'}
                      {selectedFeature.title === 'Global Scale' && 'Built for enterprises operating across continents and time zones, our global infrastructure ensures consistent performance and reliability no matter where your users are located. Automatic scaling, intelligent traffic routing, and multi-region redundancy mean you never worry about capacity constraints or regional outages affecting your operations.'}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedFeature.title === 'Autonomous Agents' && 'These agents don\'t just execute predefined scripts—they understand business objectives and determine optimal approaches to achieve them. When faced with unexpected situations, they analyze available options, consider potential outcomes, and make intelligent decisions aligned with your business rules and goals. The result is automation that handles not just the routine cases but also the edge cases and exceptions that typically require human judgment.'}
                      {selectedFeature.title === 'Intelligent Workflows' && 'The platform monitors workflow performance in real-time, identifying bottlenecks and optimization opportunities automatically. As your business scales and processes evolve, intelligent workflows adapt seamlessly without requiring IT intervention or extensive reconfiguration. This self-optimizing capability means your automation gets better over time, continuously finding new efficiencies and improvements.'}
                      {selectedFeature.title === 'Deep Learning Models' && 'What sets our models apart is the ability to fine-tune them on your specific business data while maintaining the highest security standards. Your proprietary information never leaves your secure environment, yet you benefit from the latest advances in AI research. This combination of cutting-edge technology and enterprise-grade security enables use cases that were previously impossible due to data sensitivity concerns.'}
                      {selectedFeature.title === 'Enterprise Security' && 'Our multi-layered security approach includes encryption at rest and in transit, comprehensive access controls with role-based permissions, continuous threat monitoring, and automated compliance reporting. Regular third-party audits and certifications including SOC 2 Type II and ISO 27001 validate that our security practices meet the highest industry standards. We don\'t just claim to be secure—we prove it through rigorous testing and certification.'}
                      {selectedFeature.title === 'Real-time Processing' && 'Our architecture processes millions of events per second with sub-millisecond latency, enabling use cases that require immediate action. Complex event processing identifies patterns and anomalies as they emerge, triggering automated responses before issues impact your business. This real-time intelligence transforms how organizations operate, shifting from reactive problem-solving to proactive opportunity capture.'}
                      {selectedFeature.title === 'Global Scale' && 'Our platform automatically distributes workloads across multiple regions, ensuring optimal performance for users worldwide while maintaining data residency requirements. When demand spikes, auto-scaling provisions additional capacity within seconds. If an entire data center fails, automatic failover routes traffic to healthy regions with zero data loss and minimal latency impact. This level of reliability and performance enables truly global operations.'}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Capabilities</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedFeature.title === 'Autonomous Agents' && 'Our autonomous agents combine multiple AI capabilities to deliver truly intelligent automation. They leverage natural language processing to understand unstructured communications, machine learning to identify patterns and make predictions, and reinforcement learning to optimize their strategies based on outcomes. This multi-faceted intelligence enables agents to handle complex scenarios that defeat traditional automation approaches.'}
                      {selectedFeature.title === 'Intelligent Workflows' && 'The workflow engine provides comprehensive orchestration capabilities that integrate seamlessly with your existing technology stack. APIs, webhooks, and pre-built connectors enable workflows to interact with any system in your environment. Exception handling logic automatically routes edge cases to appropriate handlers, whether that\'s another AI agent, a specialized system, or a human expert with full context about the situation.'}
                      {selectedFeature.title === 'Deep Learning Models' && 'Our model library spans the full spectrum of enterprise AI needs, from language models that understand and generate human-like text to computer vision systems that extract insights from images and video. Predictive analytics models forecast future trends based on historical patterns, while anomaly detection identifies outliers and potential issues before they escalate. Each model is optimized for enterprise deployment with consistent APIs and comprehensive documentation.'}
                      {selectedFeature.title === 'Enterprise Security' && 'Granular access controls enable you to define exactly who can access what data and perform which actions. Multi-factor authentication and single sign-on integration ensure that only authorized users access the system. Comprehensive audit logging tracks every action, creating an immutable record for compliance and forensic analysis. Automated compliance reporting generates the documentation required for regulatory audits without manual effort.'}
                      {selectedFeature.title === 'Real-time Processing' && 'The event processing engine handles complex scenarios including time-based windows, pattern matching across multiple event streams, and stateful processing that maintains context across events. Built-in connectors integrate with streaming data sources like Kafka, Kinesis, and IoT platforms. The architecture scales horizontally, adding processing capacity on demand to handle traffic spikes without degrading performance.'}
                      {selectedFeature.title === 'Global Scale' && 'Multi-region deployment happens automatically, with intelligent routing ensuring users connect to the nearest region for optimal latency. Load balancing distributes traffic efficiently across available resources, preventing any single point from becoming overwhelmed. Edge computing capabilities enable processing to happen close to data sources, reducing latency and bandwidth costs. Disaster recovery procedures automatically activate when issues are detected, maintaining business continuity.'}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedFeature.title === 'Autonomous Agents' && 'Integration capabilities enable agents to access and modify data across your enterprise systems. Whether updating CRM records, processing invoices, or analyzing customer feedback, agents work within your existing infrastructure rather than requiring costly migrations. Built-in connectors for popular enterprise applications accelerate deployment, while custom integration options ensure agents can access any system your business relies on.'}
                      {selectedFeature.title === 'Intelligent Workflows' && 'Real-time monitoring provides complete visibility into workflow execution. Dashboards show metrics like throughput, error rates, and processing times, enabling you to identify optimization opportunities. When issues occur, detailed logs capture exactly what happened, making troubleshooting straightforward. Performance analytics help you understand which workflows deliver the most value, guiding future automation investments.'}
                      {selectedFeature.title === 'Deep Learning Models' && 'Model deployment is streamlined with automated versioning, A/B testing capabilities, and gradual rollout controls. Monitor model performance in production with drift detection that alerts you when accuracy degrades. Retrain models on updated data to maintain performance as business conditions evolve. All model operations maintain full auditability and explainability, critical for regulated industries.'}
                      {selectedFeature.title === 'Enterprise Security' && 'Data protection extends beyond encryption to include data loss prevention, secure key management, and regular vulnerability assessments. Our security team monitors threats 24/7, applying patches and updates proactively to prevent exploitation. Incident response procedures ensure that any security events are contained and resolved quickly. Regular security training keeps our entire team aware of evolving threats and best practices.'}
                      {selectedFeature.title === 'Real-time Processing' && 'Stream processing guarantees enable exactly-once processing semantics, ensuring data is neither lost nor duplicated even during failures. Backpressure handling prevents upstream systems from overwhelming the processing pipeline. State management enables complex aggregations and computations that span multiple events. Performance monitoring provides insights into throughput, latency, and resource utilization.'}
                      {selectedFeature.title === 'Global Scale' && 'Geographic data residency controls ensure compliance with regulations like GDPR that require data to remain within specific regions. Network optimization reduces latency through direct peering arrangements with major ISPs and cloud providers. Capacity planning tools forecast future resource needs based on usage trends, preventing capacity crunches. Cost optimization features automatically adjust resource allocation to minimize expenses while maintaining performance.'}
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Use Case</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedFeature.title === 'Autonomous Agents' && 'A global insurance company deployed autonomous agents to handle claims processing from initial submission through final payout. The agents validate claim information, request additional documentation when needed, assess coverage based on policy terms, calculate appropriate settlement amounts, and initiate payments—all without human intervention for straightforward cases. Complex claims that require expert judgment are automatically escalated to adjusters with complete context and preliminary analysis, enabling them to make faster, more informed decisions. The result: 70% of claims processed within 24 hours compared to 7-10 days previously, with customer satisfaction increasing from 62% to 89% due to faster service and transparent communication throughout the process.'}
                    {selectedFeature.title === 'Intelligent Workflows' && 'A Fortune 500 manufacturing company transformed their procurement process using intelligent workflows that automatically route purchase requests based on amount, category, and requester. The system analyzes historical pricing data to flag potentially inflated quotes, checks inventory levels to prevent redundant purchases, and negotiates with preferred vendors to optimize pricing. When exceptions occur—such as rush orders or specialized items—the workflow adapts its approval routing and vendor selection. Integration with their ERP system ensures that approved purchases flow seamlessly into production planning. Procurement cycle time decreased from 12 days to 2 days while achieving 15% cost savings through better vendor selection and duplicate prevention.'}
                    {selectedFeature.title === 'Deep Learning Models' && 'A leading financial services firm uses our computer vision models to automate document processing for loan applications. The system extracts information from pay stubs, tax returns, bank statements, and identification documents regardless of format or layout variations. Natural language models analyze the extracted data alongside credit reports and financial history to assess risk and determine appropriate loan terms. The entire process that previously took loan officers 3-4 hours now completes in under 5 minutes with 99.2% accuracy. This speed improvement enables the company to offer same-day loan decisions, a competitive advantage that increased application volume by 45% while reducing processing costs by 60%.'}
                    {selectedFeature.title === 'Enterprise Security' && 'A healthcare provider serving 2 million patients implemented our platform to automate patient communications while maintaining HIPAA compliance. End-to-end encryption protects all patient data in transit and at rest, while role-based access controls ensure that only authorized personnel can view sensitive information. Comprehensive audit logs track every access to patient records, creating an immutable trail for compliance reporting. Automated compliance monitoring continuously validates that all processes meet HIPAA requirements, alerting administrators to any potential issues before they become violations. The provider passed a rigorous third-party audit with zero findings, while reducing compliance management costs by 40% through automation.'}
                    {selectedFeature.title === 'Real-time Processing' && 'A major e-commerce platform processes 50,000 orders per minute during peak shopping events using our real-time infrastructure. Fraud detection models analyze each transaction in under 2 milliseconds, examining patterns across payment method, shipping address, device fingerprint, and historical behavior to identify potentially fraudulent orders. Legitimate orders flow through immediately while suspicious transactions are held for additional verification. Inventory systems update in real-time, preventing overselling popular items. Personalization engines adapt product recommendations based on browsing behavior within the same session. This real-time processing enabled the platform to handle 3x normal traffic during Black Friday with zero downtime while reducing fraudulent transactions by 92% compared to their previous batch processing approach.'}
                    {selectedFeature.title === 'Global Scale' && 'A SaaS company serving enterprise customers across 120 countries deployed our platform to provide consistent performance worldwide. Users in Singapore experience the same sub-50ms response times as users in New York through intelligent global routing and regional deployments. When their European data center experienced an outage due to a network issue, automatic failover rerouted traffic to alternate regions within 15 seconds with zero data loss. Auto-scaling handled a 10x traffic increase when a major customer ran a global product launch, provisioning additional capacity automatically and scaling back down when demand normalized. The company maintains 99.99% uptime despite serving a globally distributed user base with highly variable demand patterns, enabling them to offer industry-leading SLAs that differentiate them from competitors.'}
                  </p>
                </div>

                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Key Benefits</h3>
                  <div className="space-y-4">
                    <p className="text-gray-700 leading-relaxed">
                      {selectedFeature.title === 'Autonomous Agents' && 'The quantifiable benefits of autonomous agents extend far beyond simple task automation. Organizations report 70-90% reduction in manual workload for routine processes, freeing knowledge workers to focus on strategic initiatives that drive business growth. With 24/7 availability, agents handle customer inquiries and process transactions around the clock without overtime costs or shift scheduling complexity. Response times improve dramatically—tasks that took hours or days now complete in minutes—accelerating business velocity and improving customer satisfaction.'}
                      {selectedFeature.title === 'Intelligent Workflows' && 'Intelligent workflows deliver measurable efficiency gains across the organization. Processes that previously required multiple handoffs and manual intervention now flow smoothly from start to finish, reducing cycle times by 60-80%. Accuracy improves to 95%+ as AI eliminates the human errors that plague manual processes. Operational costs decrease by 50% through reduced manual labor, fewer errors requiring rework, and optimized resource utilization. These improvements compound over time as the system learns and optimizes continuously.'}
                      {selectedFeature.title === 'Deep Learning Models' && 'Deep learning models achieve 99%+ accuracy on domain-specific tasks through training on massive datasets and continuous refinement. This enterprise-grade performance happens within SOC 2 Type II certified infrastructure, ensuring your data remains protected while you benefit from cutting-edge AI capabilities. Inference latency under 100ms enables real-time applications that would be impossible with slower systems. GDPR-compliant data handling ensures that privacy regulations are respected automatically without manual intervention.'}
                      {selectedFeature.title === 'Enterprise Security' && 'Security certifications including SOC 2 Type II and ISO 27001 provide independent validation of our security practices, simplifying vendor due diligence for procurement teams. 256-bit AES encryption protects data with the same standard used by financial institutions and government agencies. Our 99.99% security SLA guarantees that security measures remain effective and operational, with financial penalties if we fail to meet commitments. These guarantees enable enterprises to deploy AI confidently, knowing their most sensitive data is protected.'}
                      {selectedFeature.title === 'Real-time Processing' && 'Sub-millisecond processing latency enables applications that simply weren\'t possible with traditional batch processing. Processing 10 million events per second allows systems to handle peak loads without degradation, ensuring consistent performance even during traffic spikes. 99.99% uptime guarantee means the system remains available when you need it most. Real-time insights and actions transform business operations from reactive to proactive, identifying opportunities and addressing issues before they impact customers.'}
                      {selectedFeature.title === 'Global Scale' && 'The 99.99% uptime SLA provides confidence that your operations won\'t be disrupted by infrastructure issues. With presence in 50+ global data centers, your applications serve users optimally regardless of location. Auto-scaling and failover eliminate the operational burden of capacity management and disaster recovery planning. Sub-50ms global latency ensures responsive experiences that meet user expectations for modern applications. These capabilities enable truly global operations without the complexity of managing distributed infrastructure.'}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedFeature.title === 'Autonomous Agents' && 'Decision-making accuracy at 85%+ rivals or exceeds human performance on routine tasks, while maintaining perfect consistency that humans cannot match. Agents never get tired, never take vacations, and never have "off days" where performance suffers. The scalability is nearly unlimited—adding capacity to handle increased volume requires no hiring, training, or ramp-up time. Organizations can pursue growth opportunities without worrying whether operational capacity will constrain them.'}
                      {selectedFeature.title === 'Intelligent Workflows' && 'The 99% uptime and reliability of intelligent workflows means your business processes continue operating even when individual systems experience issues. Automatic failover and retry logic handle transient failures transparently, while comprehensive error handling escalates genuine issues appropriately. This reliability transforms automation from a "nice to have" into a foundational capability that enables business operations. Teams can depend on workflows to handle critical processes without constant monitoring and intervention.'}
                      {selectedFeature.title === 'Deep Learning Models' && 'Performance optimization ensures models deliver production-grade results efficiently, minimizing compute costs while maintaining accuracy. Regular model updates incorporate the latest research advances and improvements, ensuring you benefit from ongoing AI innovation without migration projects. Explainability features help you understand model decisions, critical for regulatory compliance and building trust with stakeholders. This combination of performance, security, and transparency makes enterprise AI adoption practical and sustainable.'}
                      {selectedFeature.title === 'Enterprise Security' && 'Automated threat detection and response identifies and neutralizes security threats faster than human analysts could respond. Regular penetration testing by independent security firms validates our defenses and identifies potential vulnerabilities before attackers can exploit them. Compliance automation generates the reports and documentation required for audits, eliminating weeks of manual effort. These comprehensive security measures enable enterprises to adopt AI confidently, knowing that security risks are managed proactively.'}
                      {selectedFeature.title === 'Real-time Processing' && 'The combination of high throughput, low latency, and high availability creates a foundation for next-generation applications. Real-time recommendations increase conversion rates by showing customers what they want before they even search for it. Fraud detection stops attacks in progress rather than discovering them days later during batch processing. Operational monitoring identifies and resolves issues before users are impacted. This shift from reactive to proactive operations creates competitive advantages that are difficult for competitors to match.'}
                      {selectedFeature.title === 'Global Scale' && 'Geographic distribution enables compliance with data residency requirements that are increasingly common worldwide. Your applications meet local regulations automatically without custom deployment procedures for each region. Cost optimization features ensure you pay only for resources actually needed, avoiding the waste common with over-provisioned infrastructure. The combination of global reach, high performance, and cost efficiency enables businesses to compete worldwide without infrastructure complexity limiting their ambitions.'}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {selectedFeature.title === 'Autonomous Agents' && 'Perhaps most importantly, autonomous agents enable business transformation that creates lasting competitive advantages. Organizations can enter new markets, launch new services, and respond to opportunities faster than competitors still relying on manual processes. The efficiency gains translate directly to improved margins and faster growth. Companies that embrace autonomous agents today are building capabilities that will compound over time, widening the gap between themselves and slower-moving competitors.'}
                      {selectedFeature.title === 'Intelligent Workflows' && 'The strategic value extends beyond cost savings to enabling capabilities that weren\'t previously possible. Organizations can offer service levels—like same-day processing or 24/7 support—that differentiate them from competitors. Workflows handle complexity and scale that would be impractical with manual processes, enabling businesses to serve larger markets and tackle more complex problems. This expansion of operational capabilities opens new growth opportunities that drive long-term value.'}
                      {selectedFeature.title === 'Deep Learning Models' && 'Access to enterprise-grade AI levels the playing field with tech giants who have invested billions in AI research. Your organization gains capabilities that would take years and massive resources to develop internally. These models enable applications—from intelligent search to automated analysis—that transform how your business operates and competes. The combination of cutting-edge technology and enterprise security enables use cases that were previously impossible due to data sensitivity concerns.'}
                      {selectedFeature.title === 'Enterprise Security' && 'The confidence that comes from comprehensive security enables faster AI adoption across the organization. Teams don\'t have to choose between innovation and security—they can pursue both simultaneously. Regulatory compliance becomes a competitive advantage rather than a burden, enabling you to pursue opportunities in regulated markets that competitors avoid. This foundation of security and compliance accelerates digital transformation while managing risk appropriately.'}
                      {selectedFeature.title === 'Real-time Processing' && 'Real-time processing fundamentally changes what\'s possible in business operations. Organizations can respond to opportunities and threats as they emerge rather than discovering them in hindsight. Customer experiences improve dramatically when systems respond instantly to actions and preferences. Operational efficiency increases when issues are identified and resolved immediately. These capabilities create competitive moats that are difficult for competitors to overcome once established.'}
                      {selectedFeature.title === 'Global Scale' && 'Global scale enables ambitious international expansion without the traditional infrastructure and operational challenges. Organizations can enter new markets quickly, confident that infrastructure will support growth. As usage increases, the platform scales automatically without requiring architectural changes or capacity planning projects. This removes infrastructure concerns from business strategy discussions, letting leaders focus on market opportunities rather than technical limitations.'}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mt-6">
                    {selectedFeature.details.benefits.map((benefit, i) => (
                      <div key={i} className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-lg p-4 sm:p-6 text-center">
                        <div className="text-2xl sm:text-3xl font-bold text-[#8B2EE5] mb-2">{benefit.metric}</div>
                        <div className="text-xs sm:text-sm text-gray-700">{benefit.text}</div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-6 border-t">
                  <Link to={createPageUrl('Onboarding')}>
                    <Button className="w-full bg-[#8B2EE5] hover:bg-[#7325C4] h-12">
                      Start now <ArrowRight className="ml-2 w-5 h-5" />
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