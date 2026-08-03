import {
  Brain, Zap, Shield, Database, Cloud, Code, Workflow, Users, TrendingUp,
  Lock, Globe, Cpu, GitBranch, BarChart3, MessageSquare, FileText, Calendar,
  Bell, Search, Eye, Settings, Server, Layers, Rocket, Target, Sparkles,
  Bot, Network, Gauge, Activity, Building2, Heart, ShoppingBag, Train,
  Plane, GraduationCap, Gamepad2, TrafficCone, Landmark, Building, ShieldCheck,
  DollarSign, Clock, CheckSquare, Workflow as WorkflowIcon, ServerCog,
  Smartphone, Languages, Plug, Fingerprint, Gauge as GaugeIcon, LineChart,
} from 'lucide-react';

/**
 * Feature detail content for each major page.
 * Used by FeatureDetailSection to add ~30% more textual content.
 */
export const featureDetails = {
  Home: {
    badge: 'Platform Capabilities',
    title: 'Everything You Need to Build, Deploy, and Scale AI',
    subtitle: '1C Platform unifies autonomous agents, enterprise integrations, and production-grade infrastructure into a single operating system for AI. From your first agent to 10,000 autonomous workflows, we provide the tools, security, and observability to run AI with confidence.',
    features: [
      {
        icon: Bot,
        title: 'Autonomous AI Agents',
        description: 'Deploy goal-driven agents that plan, reason, and execute multi-step tasks without constant human oversight. Agents understand natural language objectives, break them into sub-tasks, select the right tools, and adapt when conditions change — all while maintaining full audit trails of every decision.',
        useCases: ['Automate customer support triage and resolution', 'Orchestrate complex business workflows end-to-end', 'Monitor systems and trigger corrective actions autonomously'],
      },
      {
        icon: Plug,
        title: '500+ Enterprise Integrations',
        description: 'Connect agents to Salesforce, Microsoft 365, Google Workspace, Slack, SAP, Oracle, ServiceNow, Jira, HubSpot, Zendesk, and hundreds more out of the box. Use our REST API, SDKs, or visual workflow builder to integrate any system — legacy or modern — into your AI workflows without rip-and-replace.',
        useCases: ['Sync data between CRM, ERP, and collaboration tools', 'Trigger AI workflows from webhook events', 'Build custom integrations with our developer SDK'],
      },
      {
        icon: ShieldCheck,
        title: 'Enterprise-Grade Security',
        description: 'SOC 2 Type II, ISO 27001, GDPR, and HIPAA compliant out of the box. Every agent action is logged with immutable audit trails. Role-based access control, data residency options, and zero-knowledge encryption ensure your data never leaves your control — even when agents process it.',
        useCases: ['Meet compliance requirements for regulated industries', 'Control which agents can access sensitive data', 'Audit every AI decision for accountability'],
      },
      {
        icon: BarChart3,
        title: 'Real-Time Observability',
        description: 'Monitor every agent, workflow, and integration in real time. Track token usage, latency, success rates, and cost per interaction. Set alerts for anomalies, drift, or failures. Drill down from a dashboard widget to the exact prompt that caused an issue — all in one platform.',
        useCases: ['Track ROI and cost per automated workflow', 'Detect and diagnose agent failures instantly', 'Monitor compliance and SLA adherence in real time'],
      },
      {
        icon: Workflow,
        title: 'Visual Workflow Builder',
        description: 'Build multi-step AI workflows visually — no code required. Chain agents, add conditional branches, integrate with external systems, and set durable waits that survive restarts. Deploy workflows that run for minutes, days, or months with full state management and error recovery.',
        useCases: 'Automate end-to-end business processes',
        useCases: ['Automate end-to-end business processes', 'Build approval chains with human-in-the-loop steps', 'Schedule recurring AI-driven reports and actions'],
      },
      {
        icon: Rocket,
        title: 'Production-Ready from Day One',
        description: 'Start with a free account and deploy your first agent in minutes. Choose from 50+ pre-built templates, or build from scratch with our SDK. Scale from one agent to thousands without changing your architecture — the platform handles state management, retries, and horizontal scaling automatically.',
        useCases: ['Deploy a working AI agent in under 10 minutes', 'Scale from prototype to production seamlessly', 'Use templates for common enterprise use cases'],
      },
    ],
  },

  AgenticAI: {
    badge: 'Agentic AI Capabilities',
    title: 'Autonomous Agents That Think, Plan, and Act',
    subtitle: 'Agentic AI goes beyond chatbots and copilots. Our agents reason about complex goals, break them into actionable steps, select and use the right tools, learn from feedback, and collaborate with other agents — all while staying aligned with your business rules and compliance requirements.',
    features: [
      {
        icon: Brain,
        title: 'Goal-Driven Reasoning',
        description: 'Agents don\'t just follow scripts — they understand objectives. Given a high-level goal like "resolve this customer\'s billing issue," an agent decomposes it into steps, gathers context from your CRM and billing system, decides what action to take, and executes it — adapting when it encounters unexpected situations.',
        useCases: ['Handle complex multi-system customer requests', 'Automate research and analysis tasks', 'Execute business logic that spans multiple tools'],
      },
      {
        icon: Workflow,
        title: 'Multi-Step Planning & Execution',
        description: 'Agents create execution plans, sequence tool calls, manage dependencies between steps, and recover from failures mid-workflow. If a step fails, the agent retries with adjusted parameters, falls back to an alternative approach, or escalates to a human — all without losing context or state.',
        useCases: ['Orchestrate workflows across 10+ systems', 'Handle approvals and exception routing', 'Recover gracefully from API failures and timeouts'],
      },
      {
        icon: Bot,
        title: 'Multi-Agent Collaboration',
        description: 'Deploy specialized agents that work together on complex tasks. A coordinator agent breaks work into sub-tasks, assigns them to specialist agents (billing expert, support agent, data analyst), aggregates results, and synthesizes a final answer. Agents communicate via structured protocols and share context efficiently.',
        useCases: ['Build a virtual team of AI specialists', 'Handle diverse expertise in one workflow', 'Parallelize work across multiple agents'],
      },
      {
        icon: Plug,
        title: 'Tool Use & Function Calling',
        description: 'Agents dynamically select and call the right tools for each step — APIs, databases, code execution, web search, or other agents. The platform handles function calling, parameter extraction, result parsing, and error handling. Agents learn which tools work best for which tasks over time.',
        useCases: ['Query databases and APIs with natural language', 'Execute code and analyze results', 'Search the web for real-time information'],
      },
      {
        icon: Eye,
        title: 'Memory & Context Management',
        description: 'Agents maintain context across long conversations and multi-day workflows. Short-term memory tracks the current task, while long-term memory stores preferences, learned patterns, and entity relationships. Context windows are managed automatically to prevent token overflow and reduce costs.',
        useCases: ['Remember customer history across interactions', 'Maintain state in multi-day workflows', 'Reduce redundant API calls with caching'],
      },
      {
        icon: ShieldCheck,
        title: 'Guardrails & Human Oversight',
        description: 'Every agent runs within configurable guardrails — allowed actions, data access scopes, approval requirements for sensitive operations, and automatic escalation rules. Human-in-the-loop checkpoints let you review and approve before agents take consequential actions like sending payments or modifying production data.',
        useCases: ['Require human approval for high-stakes actions', 'Restrict agents to read-only on sensitive systems', 'Audit every decision with full traceability'],
      },
    ],
  },

  EnterpriseSuite: {
    badge: 'Enterprise Suite Modules',
    title: 'A Unified Operating System for Your Entire Business',
    subtitle: '1C Enterprise Suite replaces siloed ERP, CRM, HR, and supply chain tools with a single AI-native platform. Every module shares the same data model, security framework, and agent infrastructure — so your finance, sales, operations, and HR teams work from one source of truth, automated by AI agents that cross departmental boundaries.',
    features: [
      {
        icon: DollarSign,
        title: 'AI-Native ERP',
        description: 'Manage financials, procurement, projects, and accounting with AI agents that automate invoice processing, predict cash flow, flag anomalies, and generate compliance reports. Real-time consolidation across entities, currencies, and subsidiaries — with audit-ready trails for every transaction.',
        useCases: ['Automate accounts payable and receivable', 'Predict cash flow and working capital needs', 'Generate real-time financial consolidated reports'],
      },
      {
        icon: Users,
        title: 'AI-Powered CRM',
        description: 'Track every customer interaction across email, chat, phone, and meetings. AI agents automatically log activities, update deal stages, draft follow-ups, predict churn risk, and recommend next best actions. Sales reps focus on relationships while the platform handles data entry and pipeline hygiene.',
        useCases: ['Auto-log customer interactions across channels', 'Predict deal probability and churn risk', 'Draft personalized follow-ups and proposals'],
      },
      {
        icon: Calendar,
        title: 'HR & Workforce Management',
        description: 'Manage the full employee lifecycle — recruiting, onboarding, performance, compensation, and offboarding — with agents that screen candidates, schedule interviews, generate offer letters, and track compliance training. Self-service portals let employees request time off, view pay stubs, and update information.',
        useCases: ['Automate candidate screening and interview scheduling', 'Track performance reviews and compensation', 'Manage compliance training and certifications'],
      },
      {
        icon: Layers,
        title: 'Supply Chain & Inventory',
        description: 'Optimize procurement, warehousing, and logistics with agents that forecast demand, monitor supplier performance, auto-reorder stock, and route shipments around disruptions. Real-time visibility from raw materials to finished goods — with predictive alerts for delays, shortages, or quality issues.',
        useCases: ['Forecast demand and auto-replenish inventory', 'Monitor supplier reliability and quality', 'Optimize logistics routes in real time'],
      },
      {
        icon: FileText,
        title: 'Document Management',
        description: 'Centralize contracts, invoices, purchase orders, and policies with AI agents that classify, extract data, route for approval, and flag risks. Optical character recognition, semantic search, and version control ensure every document is findable, compliant, and current.',
        useCases: ['Auto-extract data from invoices and contracts', 'Route documents for approval automatically', 'Search across millions of documents semantically'],
      },
      {
        icon: Gauge,
        title: 'Business Intelligence',
        description: 'Every module feeds a unified analytics layer. AI agents generate reports, answer natural-language questions, detect anomalies, and surface insights — without SQL or dashboards. Schedule automated briefings for executives and let agents explain variances and recommend actions.',
        useCases: ['Ask questions in plain English, get instant answers', 'Automate executive reporting and briefings', 'Detect anomalies and root-cause automatically'],
      },
    ],
  },

  CloudPlatform: {
    badge: 'Cloud Infrastructure',
    title: 'AI Infrastructure Built for Scale, Speed, and Reliability',
    subtitle: '1C Cloud Platform provides the compute, storage, networking, and orchestration layer that powers your AI agents and workflows. Deploy in any region, scale to millions of requests, and maintain 99.99% uptime with automated failover, global CDN, and real-time observability — all managed by the platform, not your team.',
    features: [
      {
        icon: Server,
        title: 'Auto-Scaling Compute',
        description: 'Compute resources scale horizontally based on agent workload. Spin up thousands of agent instances during peak demand and scale to zero when idle — paying only for what you use. Support for CPU, GPU, and TPU workloads with automatic model routing based on latency and cost targets.',
        useCases: ['Handle traffic spikes without provisioning servers', 'Run GPU-intensive model inference on demand', 'Optimize cost with per-request model selection'],
      },
      {
        icon: Database,
        title: 'Managed Vector & Relational DBs',
        description: 'Built-in vector databases for semantic search and RAG, alongside managed PostgreSQL for transactional data. Both are fully managed with automated backups, point-in-time recovery, read replicas, and encryption at rest. No database administration required — just connect and query.',
        useCases: ['Power semantic search across your knowledge base', 'Store agent memory and conversation history', 'Run transactions with ACID guarantees'],
      },
      {
        icon: Globe,
        title: 'Global Edge Network',
        description: 'Deploy agents and APIs across 30+ edge regions for sub-50ms global latency. The platform automatically routes requests to the nearest healthy node and fails over during outages. Data residency controls let you keep data in specific regions for compliance with GDPR, HIPAA, and local laws.',
        useCases: ['Serve users worldwide with low latency', 'Meet data residency requirements by region', 'Survive regional outages with automatic failover'],
      },
      {
        icon: Lock,
        title: 'Zero-Trust Security',
        description: 'Every request is authenticated, authorized, and encrypted end-to-end. Mutual TLS between services, per-request API keys with scoped permissions, and zero-knowledge encryption for sensitive data. SIEM integration exports every event to Splunk, Datadog, or your SOC for 24/7 monitoring.',
        useCases: ['Enforce least-privilege access across all services', 'Encrypt sensitive data with customer-managed keys', 'Stream security events to your SIEM/SOC'],
      },
      {
        icon: Activity,
        title: 'Real-Time Observability',
        description: 'Distributed tracing, metrics, and logs for every agent, workflow, and API call. Track latency percentiles, error rates, token usage, and cost per interaction. Set alerts for anomalies and drift. Drill from a dashboard widget to the exact log line that caused an issue — all in seconds.',
        useCases: ['Monitor SLA compliance across all services', 'Debug agent failures with full request traces', 'Track and optimize AI cost per workflow'],
      },
      {
        icon: GitBranch,
        title: 'CI/CD & Version Management',
        description: 'Deploy agents, workflows, and integrations with built-in CI/CD pipelines. Git-based versioning, preview environments, blue-green deployments, and automatic rollbacks on failure. Promote from dev to staging to production with a single command — with full audit trail of who deployed what and when.',
        useCases: ['Deploy agent updates with zero downtime', 'Test changes in preview before production', 'Roll back failed deployments automatically'],
      },
    ],
  },

  Cyber: {
    badge: 'Security & Compliance',
    title: 'AI-Driven Security, Compliance, and Risk Management',
    subtitle: '1C Cyber module uses AI agents to continuously monitor your infrastructure, detect threats, automate compliance reporting, and respond to incidents — all within a single platform. Replace manual security reviews and audit prep with autonomous agents that work 24/7 to keep your organization secure and compliant.',
    features: [
      {
        icon: Shield,
        title: 'Continuous Threat Detection',
        description: 'AI agents analyze logs, network traffic, and user behavior in real time to detect anomalies, insider threats, and zero-day attacks. Machine learning models trained on global threat intelligence identify patterns that signature-based systems miss — with alerts enriched by context and recommended actions.',
        useCases: ['Detect anomalous user behavior automatically', 'Identify zero-day threats with behavioral analysis', 'Correlate alerts across your entire attack surface'],
      },
      {
        icon: Lock,
        title: 'Identity & Access Management',
        description: 'Manage identities, roles, and permissions with AI agents that detect over-privileged accounts, enforce least-privilege access, and automate access reviews. Multi-factor authentication, single sign-on, and just-in-time access requests — all with full audit trails and compliance reporting.',
        useCases: ['Enforce least-privilege across all systems', 'Automate quarterly access reviews', 'Detect and remediate over-privileged accounts'],
      },
      {
        icon: FileText,
        title: 'Automated Compliance Reporting',
        description: 'Generate audit-ready reports for SOC 2, ISO 27001, GDPR, HIPAA, FedRAMP, and PCI-DSS with agents that collect evidence, map controls, and flag gaps. Continuous control monitoring means you\'re always audit-ready — no more fire-drill scrambles when auditors arrive.',
        useCases: ['Generate SOC 2 and ISO 27001 evidence automatically', 'Track control gaps and remediation status', 'Prepare for audits in days, not months'],
      },
      {
        icon: Bell,
        title: 'Incident Response Automation',
        description: 'When a security incident is detected, agents spring into action — isolating affected systems, collecting forensic evidence, notifying stakeholders, and executing your incident response playbook. Mean time to respond drops from hours to minutes, with full post-incident analysis and lessons-learned reports.',
        useCases: ['Isolate compromised systems automatically', 'Collect and preserve forensic evidence', 'Execute IR playbooks without human delay'],
      },
      {
        icon: Eye,
        title: 'Data Loss Prevention',
        description: 'AI agents monitor data flows across your organization to detect and prevent unauthorized exfiltration of sensitive data. Classify data automatically, enforce DLP policies, and get alerts when sensitive information is accessed, copied, or transmitted outside approved channels.',
        useCases: ['Detect unauthorized data exfiltration', 'Classify and protect sensitive data automatically', 'Enforce DLP policies across all channels'],
      },
      {
        icon: ShieldCheck,
        title: 'Zero-Trust Architecture',
        description: 'Implement zero-trust security with agents that verify every request, enforce micro-segmentation, and continuously validate trust. No implicit trust based on network location — every access decision is evaluated in real time based on identity, device posture, and behavior.',
        useCases: ['Implement micro-segmentation across services', 'Verify every request regardless of origin', 'Continuously assess device and user trust'],
      },
    ],
  },

  Pricing: {
    badge: 'Plan Features',
    title: 'Transparent Pricing That Scales With Your Usage',
    subtitle: 'Start free, scale predictably. Every plan includes the full platform — agents, workflows, integrations, and observability. The difference is in usage limits, support levels, and enterprise features. No hidden fees, no per-seat charges, no surprise overages. You pay for AI workloads, not headcount.',
    features: [
      {
        icon: Rocket,
        title: 'Starter (Free Forever)',
        description: 'Perfect for prototypes and small projects. 1,000 API calls per month, 3 agents, community support, and access to all integrations. No credit card required. Upgrade when you\'re ready — your agents and data carry over seamlessly to any paid plan.',
        useCases: ['Build and test your first AI agent', 'Prototype workflows before committing', 'Learn the platform with no financial risk'],
      },
      {
        icon: Zap,
        title: 'Professional',
        description: 'For growing teams building production AI. 100,000 API calls per month, unlimited agents, email support with 4-hour response, custom integrations, and advanced analytics. Includes version control, preview environments, and team collaboration features.',
        useCases: ['Deploy production AI agents at scale', 'Collaborate with your team on workflows', 'Access advanced analytics and version control'],
      },
      {
        icon: Building,
        title: 'Business',
        description: 'For organizations with mission-critical AI workloads. 1M API calls per month, priority support with 1-hour response, dedicated success manager, custom model hosting, SSO/SAML, and compliance reporting for SOC 2 and ISO 27001. Includes uptime SLA of 99.95%.',
        useCases: ['Run mission-critical AI workflows', 'Meet enterprise security requirements', 'Get dedicated support and SLA guarantees'],
      },
      {
        icon: ShieldCheck,
        title: 'Enterprise',
        description: 'Unlimited API calls, 99.99% uptime SLA, 24/7 phone support with 15-minute response, on-premise deployment options, data residency guarantees, custom security reviews, and a dedicated solutions architect. Includes FedRAMP and HIPAA compliance packages.',
        useCases: ['Deploy in regulated environments', 'Get on-premise or private cloud options', 'Access custom compliance and security packages'],
      },
      {
        icon: DollarSign,
        title: 'Usage-Based Scaling',
        description: 'Every plan auto-scales — you\'re never capped or throttled. If you exceed your plan\'s limits, you simply pay the per-call rate for additional usage. No service interruptions, no upgrade pressure. View projected costs in real time and set budget alerts to control spend.',
        useCases: ['Handle traffic spikes without interruption', 'Pay only for the API calls you use', 'Set budgets and alerts to control costs'],
      },
      {
        icon: Plug,
        title: 'All Integrations Included',
        description: 'Every plan — including Starter — includes access to all 500+ integrations. No per-integration fees, no premium connector add-ons. Whether you need Salesforce, SAP, or a custom API, the platform connects it. Enterprise plans add custom integration development.',
        useCases: ['Connect to any tool on any plan', 'Avoid integration add-on fees', 'Request custom integrations on Enterprise'],
      },
    ],
  },

  AboutUs: {
    badge: 'Our Platform',
    title: 'Building the Infrastructure for the Autonomous AI Era',
    subtitle: '1C Platform was founded on a simple belief: AI should be a teammate, not a tool. We\'re building the infrastructure that lets every organization deploy autonomous AI agents safely, scale them confidently, and trust them completely. Our team brings decades of experience from leading AI, enterprise software, and cloud infrastructure companies.',
    features: [
      {
        icon: Brain,
        title: 'AI-First Architecture',
        description: 'We didn\'t bolt AI onto a legacy platform — we built from the ground up for autonomous agents. Every layer, from data storage to workflow orchestration to security, is designed for AI workloads. That means agents that are faster, more reliable, and more capable than anything built on legacy infrastructure.',
        useCases: ['Deploy agents that scale to millions of tasks', 'Run AI workloads with enterprise reliability', 'Build on infrastructure designed for AI'],
      },
      {
        icon: Globe,
        title: 'Global Scale',
        description: 'Our platform serves customers across 30+ regions with sub-50ms latency and 99.99% uptime. We process billions of AI interactions per month for enterprises in financial services, healthcare, retail, government, and technology — all on the same infrastructure you use.',
        useCases: ['Serve users worldwide with low latency', 'Rely on enterprise-grade uptime', 'Scale from startup to enterprise seamlessly'],
      },
      {
        icon: ShieldCheck,
        title: 'Trust & Compliance',
        description: 'Security and compliance aren\'t features we added later — they\'re foundational. SOC 2 Type II, ISO 27001, GDPR, HIPAA, and FedRAMP ready. Every AI decision is auditable, every data access is logged, and every customer controls their data with encryption and residency options.',
        useCases: ['Meet enterprise compliance requirements', 'Audit every AI decision end-to-end', 'Control data residency and encryption'],
      },
      {
        icon: Users,
        title: 'Customer-Obsessed Team',
        description: 'Our product roadmap is shaped by customer needs, not analyst reports. We ship weekly, respond to feedback in hours, and build features alongside the enterprises that use them. Our customers range from Fortune 500 companies to startups transforming their industries with AI.',
        useCases: ['Get features built for your real needs', 'Access responsive support and community', 'Influence the product roadmap directly'],
      },
      {
        icon: Rocket,
        title: 'Rapid Innovation',
        description: 'We ship new capabilities every week — new agent templates, integrations, workflow patterns, and AI models. Our platform integrates the latest advances in AI research within weeks of publication, so you always have access to state-of-the-art capabilities without managing model upgrades.',
        useCases: ['Access the latest AI capabilities continuously', 'Ship AI features faster than competitors', 'Avoid costly model upgrade projects'],
      },
      {
        icon: Network,
        title: 'Open Ecosystem',
        description: 'We believe AI should be open and interoperable. Our platform supports open standards, publishes open-source SDKs, and integrates with any system via REST API. No vendor lock-in — your data, agents, and workflows are portable and exportable at any time.',
        useCases: ['Avoid vendor lock-in with open standards', 'Integrate with any system via REST API', 'Export your data and agents anytime'],
      },
    ],
  },

  Leadership: {
    badge: 'Leadership Capabilities',
    title: 'Leadership That Understands AI, Enterprise, and Scale',
    subtitle: 'Our leadership team has built and scaled AI platforms, enterprise software, and cloud infrastructure at companies serving millions of users. They\'ve navigated the same AI transformation journeys our customers face — and bring that experience to every product decision, customer engagement, and strategic initiative.',
    features: [
      {
        icon: Target,
        title: 'Vision-Driven Strategy',
        description: 'Our leaders set a clear north star: make autonomous AI safe, scalable, and valuable for every enterprise. Every product decision, hire, and investment is evaluated against this vision — ensuring we build what matters, not what\'s trendy.',
        useCases: ['Align product strategy with customer needs', 'Make principled build-vs-buy decisions', 'Invest in long-term platform capability'],
      },
      {
        icon: Users,
        title: 'Customer-Centric Culture',
        description: 'Leadership regularly meets with customers, reviews support tickets, and participates in product feedback sessions. This isn\'t a quarterly exercise — it\'s embedded in how we operate. The result: a product shaped by real enterprise needs, not assumptions.',
        useCases: ['Shape product roadmap from customer input', 'Resolve escalations with leadership attention', 'Build features that solve real problems'],
      },
      {
        icon: ShieldCheck,
        title: 'Compliance Leadership',
        description: 'Our leaders have navigated SOC 2, ISO 27001, HIPAA, FedRAMP, and GDPR at previous companies. They\'ve built compliance into our DNA — not as a checklist, but as a competitive advantage. Our customers pass audits faster because we\'ve already done the work.',
        useCases: ['Leverage deep compliance expertise', 'Pass audits with platform-level evidence', 'Meet enterprise security expectations'],
      },
      {
        icon: Rocket,
        title: 'Technical Excellence',
        description: 'Our CTO and engineering leaders have built distributed systems at hyperscale — processing billions of requests, maintaining five-nines uptime, and shipping code weekly. They\'ve applied those lessons to 1C Platform, building infrastructure that\'s reliable, fast, and built to scale.',
        useCases: ['Rely on battle-tested engineering leadership', 'Benefit from hyperscale architecture expertise', 'Trust infrastructure built by experts'],
      },
      {
        icon: Globe,
        title: 'Global Perspective',
        description: 'Our leadership team spans North America, Europe, and Asia — bringing diverse perspectives on data privacy, AI regulation, and enterprise needs across regions. This global viewpoint shapes our product, our compliance posture, and our go-to-market strategy.',
        useCases: ['Navigate global AI regulations', 'Serve multinational enterprise customers', 'Understand regional compliance needs'],
      },
      {
        icon: TrendingUp,
        title: 'Growth Mindset',
        description: 'We\'ve built 1C Platform to grow with our customers. From our first startup user to our largest enterprise deployment, the same platform scales. Our leadership invests in the infrastructure, support, and partnerships to ensure we\'re ready for what\'s next — for us and for you.',
        useCases: ['Scale from startup to enterprise on one platform', 'Access growing integration ecosystem', 'Benefit from continuous platform investment'],
      },
    ],
  },

  PropertyManagement: {
    badge: 'Property Management AI',
    title: 'AI Agents for Every Aspect of Property Operations',
    subtitle: 'From tenant onboarding to maintenance scheduling to lease renewals, 1C Platform deploys autonomous AI agents that handle the repetitive work of property management — so your team focuses on relationships and growth. Agents integrate with your existing PMS, accounting, and IoT systems for seamless automation.',
    features: [
      {
        icon: Users,
        title: 'Tenant Onboarding & Communication',
        description: 'Agents automate the entire tenant lifecycle — application screening, lease generation, move-in coordination, and ongoing communication. They answer maintenance requests, send rent reminders, and escalate issues to property managers when needed — all in the tenant\'s preferred channel.',
        useCases: ['Screen tenants and generate leases automatically', 'Respond to maintenance requests 24/7', 'Send personalized rent reminders and notices'],
      },
      {
        icon: Calendar,
        title: 'Maintenance Scheduling',
        description: 'Agents predict maintenance needs from IoT sensor data, schedule technicians based on availability and skills, and coordinate with tenants for access. They track work order status, order parts automatically, and follow up to ensure satisfaction — reducing response times by 60%.',
        useCases: ['Predict equipment failures from sensor data', 'Auto-schedule technicians by skill and location', 'Track work orders end-to-end automatically'],
      },
      {
        icon: DollarSign,
        title: 'Rent Collection & Financials',
        description: 'Agents automate rent collection, late fee calculations, and delinquency management. They integrate with your accounting system to post payments, generate financial reports, and flag anomalies. For multi-property portfolios, agents consolidate financials across entities and currencies in real time.',
        useCases: ['Automate rent collection and late fees', 'Consolidate financials across properties', 'Flag unusual transactions automatically'],
      },
      {
        icon: Building2,
        title: 'Lease Management & Renewals',
        description: 'Agents track lease expirations, generate renewal offers based on market data and tenant history, and coordinate the renewal process. They draft lease amendments, route for approval, and update your PMS — ensuring no renewal opportunity is missed.',
        useCases: ['Track lease expirations proactively', 'Generate competitive renewal offers', 'Automate lease document workflows'],
      },
      {
        icon: Gauge,
        title: 'Property Performance Analytics',
        description: 'Agents continuously analyze occupancy rates, rent rolls, operating expenses, and NOI across your portfolio. They surface underperforming properties, recommend rent adjustments, and generate executive reports — turning raw property data into actionable investment intelligence.',
        useCases: ['Monitor portfolio NOI in real time', 'Identify underperforming properties', 'Recommend rent adjustments from market data'],
      },
      {
        icon: Zap,
        title: 'Energy & Utility Optimization',
        description: 'Agents monitor HVAC, lighting, and water systems via IoT sensors to optimize energy usage. They adjust settings based on occupancy patterns, weather forecasts, and utility rates — reducing energy costs by 30% while maintaining tenant comfort.',
        useCases: ['Optimize HVAC based on occupancy and weather', 'Reduce utility costs with smart scheduling', 'Detect utility anomalies and leaks'],
      },
    ],
  },

  Healthcare: {
    badge: 'Healthcare AI',
    title: 'AI Agents for Clinical, Operational, and Administrative Workflows',
    subtitle: '1C Platform departs HIPAA-compliant AI agents that handle the administrative burden of healthcare — patient intake, prior authorizations, claims processing, clinical documentation — so clinicians spend more time with patients and less time on paperwork. Agents integrate with Epic, Cerner, and all major EMRs.',
    features: [
      {
        icon: Heart,
        title: 'Patient Intake & Scheduling',
        description: 'Agents automate patient registration, insurance verification, appointment scheduling, and reminders. They handle intake forms, collect medical histories, and coordinate referrals — reducing front-office workload by 70% while improving patient experience.',
        useCases: ['Automate patient registration and insurance verification', 'Schedule appointments and send reminders', 'Coordinate referrals and specialist visits'],
      },
      {
        icon: FileText,
        title: 'Clinical Documentation',
        description: 'AI agents transcribe clinical encounters, structure notes into EMR-compatible formats, and generate referral letters and care summaries. They pull relevant history, flag missing information, and ensure documentation meets billing and compliance requirements — saving physicians 2+ hours per day.',
        useCases: ['Automate clinical note transcription', 'Generate referral letters and summaries', 'Flag documentation gaps for billing'],
      },
      {
        icon: ShieldCheck,
        title: 'Prior Authorization Automation',
        description: 'Agents handle the full prior authorization workflow — gathering clinical evidence, submitting requests, responding to payer questions, and tracking approval status. They reduce authorization turnaround from days to hours and cut denial rates by 45% with complete, accurate submissions.',
        useCases: ['Submit prior auth requests automatically', 'Track authorization status in real time', 'Reduce denials with complete submissions'],
      },
      {
        icon: DollarSign,
        title: 'Claims Processing & RCM',
        description: 'Agents automate claims submission, denial management, and appeals. They scrub claims before submission, predict which claims will be denied, and auto-generate appeal letters with supporting documentation — accelerating reimbursement and reducing aged AR.',
        useCases: ['Scrub claims before submission', 'Predict and prevent claim denials', 'Automate denial appeals with evidence'],
      },
      {
        icon: Bell,
        title: 'Patient Engagement & Follow-Up',
        description: 'Agents send personalized follow-up messages, medication reminders, and care plan check-ins via SMS, email, or patient portal. They monitor responses, flag patients who need intervention, and alert care teams — improving outcomes and reducing readmissions.',
        useCases: ['Send automated care plan follow-ups', 'Remind patients about medications', 'Flag at-risk patients for intervention'],
      },
      {
        icon: Activity,
        title: 'Compliance & Quality Reporting',
        description: 'Agents continuously monitor compliance with quality measures (HEDIS, MIPS), track regulatory requirements, and generate audit-ready reports. They flag gaps, recommend corrective actions, and ensure your organization is always survey-ready.',
        useCases: ['Track HEDIS and MIPS quality measures', 'Generate compliance reports automatically', 'Flag and correct quality gaps proactively'],
      },
    ],
  },

  Retail: {
    badge: 'Retail AI',
    title: 'AI Agents for Omnichannel Retail Operations',
    subtitle: '1C Platform unifies POS, e-commerce, inventory, and customer data into a single AI-native system. Agents automate pricing, replenishment, personalization, and customer service — across every channel. Retailers see 35% conversion lift, 25% margin improvement, and 40% retention increase.',
    features: [
      {
        icon: ShoppingBag,
        title: 'Dynamic Pricing & Promotions',
        description: 'Agents continuously analyze competitor prices, demand signals, inventory levels, and margins to optimize pricing across SKUs and channels. They run promotions based on customer segments, weather, and events — maximizing revenue without manual merchandising work.',
        useCases: ['Adjust prices based on competitor and demand data', 'Run targeted promotions by segment', 'Optimize margins across SKUs and channels'],
      },
      {
        icon: Layers,
        title: 'Inventory Optimization',
        description: 'Agents forecast demand by SKU, store, and channel — then auto-replenish to prevent stockouts without overstocking. They account for seasonality, promotions, and supply chain lead times, reducing inventory carrying costs by 25% while improving availability.',
        useCases: ['Forecast demand by SKU and location', 'Auto-replenish to prevent stockouts', 'Optimize safety stock and reorder points'],
      },
      {
        icon: Users,
        title: 'Customer Personalization',
        description: 'Agents build 360-degree customer profiles from POS, e-commerce, loyalty, and behavioral data. They generate personalized product recommendations, tailored email campaigns, and individualized landing pages — lifting conversion by 35% and retention by 40%.',
        useCases: ['Recommend products across channels', 'Personalize email and ad campaigns', 'Create individualized shopping experiences'],
      },
      {
        icon: MessageSquare,
        title: 'Customer Service Automation',
        description: 'AI agents handle customer inquiries across email, chat, SMS, and social — answering product questions, processing returns, tracking orders, and escalating complex issues to human agents. They resolve 80% of inquiries automatically with 24/7 availability.',
        useCases: ['Answer product and order questions 24/7', 'Process returns and exchanges automatically', 'Escalate complex issues to human agents'],
      },
      {
        icon: Globe,
        title: 'Omnichannel Coordination',
        description: 'Agents sync inventory, pricing, and promotions across physical stores, e-commerce, and marketplaces in real time. They coordinate buy-online-pickup-in-store, manage ship-from-store routing, and ensure consistent experiences across every customer touchpoint.',
        useCases: ['Sync inventory and pricing across channels', 'Coordinate BOPIS and ship-from-store', 'Maintain consistent omnichannel experiences'],
      },
      {
        icon: TrendingUp,
        title: 'Demand Forecasting & Planning',
        description: 'Agents forecast demand using ML models trained on your sales data, market trends, weather, and events. They generate merchandising plans, recommend assortment changes, and flag slow movers — turning data into decisions that grow revenue and reduce markdowns.',
        useCases: ['Forecast demand with ML precision', 'Optimize assortment and merchandising plans', 'Identify slow movers early for markdowns'],
      },
    ],
  },

  DataCenters: {
    badge: 'Data Center AI',
    title: 'AI Agents for Data Center Operations and Efficiency',
    subtitle: '1C Platform deploys AI agents that monitor, predict, and optimize every aspect of data center operations — from energy usage to capacity planning to security. Agents integrate with your DCIM, BMS, and monitoring tools for unified, autonomous operations that achieve 99.999% uptime.',
    features: [
      {
        icon: Zap,
        title: 'Energy Optimization',
        description: 'Agents continuously monitor power usage effectiveness (PUE), HVAC efficiency, and cooling loads. They adjust cooling setpoints based on real-time thermal data, workload distribution, and weather — reducing energy consumption by 30% while maintaining safe operating temperatures.',
        useCases: ['Optimize cooling based on thermal sensor data', 'Reduce PUE with intelligent setpoint management', 'Shift workloads to off-peak energy hours'],
      },
      {
        icon: Activity,
        title: 'Predictive Maintenance',
        description: 'Agents analyze vibration, temperature, and performance data from servers, UPS units, and cooling systems to predict failures before they happen. They schedule maintenance during low-traffic windows, order replacement parts, and prevent costly unplanned downtime.',
        useCases: ['Predict equipment failures from sensor data', 'Schedule maintenance during low-traffic windows', 'Prevent unplanned downtime proactively'],
      },
      {
        icon: Server,
        title: 'Capacity Planning',
        description: 'Agents forecast compute, storage, and power demand based on workload trends and growth projections. They recommend when to add capacity, which racks to provision, and how to balance loads across facilities — preventing capacity crunches and stranded resources.',
        useCases: ['Forecast power and cooling capacity needs', 'Recommend rack provisioning and balancing', 'Prevent capacity crunches before they occur'],
      },
      {
        icon: Shield,
        title: 'Security Monitoring',
        description: 'Agents monitor physical access, network traffic, and system logs to detect security threats in real time. They integrate with your SIEM, enforce access policies, and respond to incidents automatically — isolating affected systems and alerting your security team.',
        useCases: ['Monitor physical and network security 24/7', 'Detect and respond to threats automatically', 'Enforce access policies across facilities'],
      },
      {
        icon: BarChart3,
        title: 'Performance Analytics',
        description: 'Agents track uptime, latency, throughput, and SLA compliance across all services. They identify bottlenecks, recommend optimizations, and generate executive reports — giving you real-time visibility into data center performance without manual dashboard building.',
        useCases: ['Track uptime and SLA compliance in real time', 'Identify and resolve performance bottlenecks', 'Generate executive performance reports'],
      },
      {
        icon: Plug,
        title: 'DCIM Integration',
        description: 'Agents integrate with your Data Center Infrastructure Management tools — pulling data from sensors, PDUs, CRAC units, and rack sensors. They also connect to your workload orchestration platform (Kubernetes, VMware) to balance loads based on thermal and power conditions.',
        useCases: ['Integrate with DCIM and BMS systems', 'Balance workloads based on thermal conditions', 'Unify monitoring across all systems'],
      },
    ],
  },

  FinancialInstitutions: {
    badge: 'Financial Services AI',
    title: 'AI Agents for Banking, Lending, and Compliance',
    subtitle: '1C Platform deploys AI agents that automate KYC/AML, loan processing, fraud detection, and customer service for financial institutions. Agents process loans in under 3 minutes, detect 95% of fraud cases, and maintain full regulatory compliance — all with auditable decision trails.',
    features: [
      {
        icon: ShieldCheck,
        title: 'KYC & AML Automation',
        description: 'Agents automate the entire KYC/AML workflow — identity verification, sanctions screening, risk scoring, and ongoing monitoring. They pull data from multiple sources, flag high-risk customers, generate SARs, and maintain audit-ready records for regulators.',
        useCases: ['Verify identities and screen sanctions automatically', 'Score customer risk with ML models', 'Generate SARs and maintain audit trails'],
      },
      {
        icon: DollarSign,
        title: 'Loan Processing & Underwriting',
        description: 'Agents process loan applications in under 3 minutes — pulling credit reports, income verification, and collateral data. They score applications with ML models, recommend approval decisions, and generate loan documents — all while explaining the reasoning behind each decision.',
        useCases: ['Process loan applications in minutes', 'Underwrite with explainable ML models', 'Generate loan documents automatically'],
      },
      {
        icon: Eye,
        title: 'Fraud Detection',
        description: 'Agents analyze transactions in real time to detect fraud patterns, suspicious behavior, and money laundering. They use behavioral analytics, network analysis, and ML models to identify 95% of fraud cases — with false positive rates 50% lower than rules-based systems.',
        useCases: ['Detect fraud in real time with ML', 'Reduce false positives with behavioral analytics', 'Flag suspicious transactions automatically'],
      },
      {
        icon: MessageSquare,
        title: 'Customer Service & Support',
        description: 'AI agents handle customer inquiries across chat, email, phone, and mobile — answering account questions, processing transactions, and resolving disputes. They handle 80% of inquiries automatically, with seamless escalation to human agents for complex issues.',
        useCases: ['Answer account questions 24/7', 'Process routine transactions automatically', 'Escalate complex issues to human agents'],
      },
      {
        icon: BarChart3,
        title: 'Risk Analytics & Reporting',
        description: 'Agents continuously monitor portfolio risk, capital adequacy, and regulatory metrics. They generate stress test scenarios, calculate Basel III ratios, and produce regulatory reports — ensuring you\'re always examination-ready and within risk limits.',
        useCases: ['Monitor portfolio risk in real time', 'Run stress tests and scenario analysis', 'Generate regulatory reports automatically'],
      },
      {
        icon: Lock,
        title: 'Compliance & Audit',
        description: 'Agents track every decision, transaction, and customer interaction with immutable audit trails. They map controls to regulatory requirements, flag compliance gaps, and generate examination-ready reports for OCC, FDIC, and state regulators — reducing audit prep from months to days.',
        useCases: ['Maintain immutable audit trails', 'Map controls to regulatory requirements', 'Generate examination-ready reports'],
      },
    ],
  },

  CorporateCampuses: {
    badge: 'Corporate Facilities AI',
    title: 'AI Agents for Workplace and Facility Management',
    subtitle: '1C Platform deploys AI agents that optimize space utilization, energy usage, visitor management, and employee services for corporate campuses. Agents integrate with IoT sensors, BMS, and workplace tools — reducing costs 30% while improving employee satisfaction by 60%.',
    features: [
      {
        icon: Building,
        title: 'Space Management',
        description: 'Agents monitor desk and meeting room utilization via IoT sensors, optimize reservations, and recommend space reconfigurations. They forecast space needs based on attendance patterns and growth — helping you right-size your real estate footprint and reduce unused capacity by 40%.',
        useCases: ['Monitor desk and room utilization in real time', 'Optimize reservations and hot-desking', 'Recommend space reconfigurations from data'],
      },
      {
        icon: Users,
        title: 'Visitor Management',
        description: 'Agents automate visitor registration, access provisioning, host notifications, and check-in. They coordinate with security, issue badges, and log entries — ensuring a seamless visitor experience while maintaining strict security protocols.',
        useCases: ['Automate visitor registration and check-in', 'Coordinate access with security protocols', 'Notify hosts and issue badges automatically'],
      },
      {
        icon: Zap,
        title: 'Energy Optimization',
        description: 'Agents control HVAC, lighting, and plug loads based on occupancy, weather, and time of day. They reduce energy waste in unoccupied areas, optimize setpoints for comfort and efficiency, and generate sustainability reports — cutting energy costs by 30%.',
        useCases: ['Optimize HVAC based on occupancy patterns', 'Reduce lighting in unoccupied areas', 'Generate sustainability and ESG reports'],
      },
      {
        icon: Calendar,
        title: 'Employee Services',
        description: 'Agents handle employee service requests — IT tickets, facility issues, catering orders, and room bookings — through a single AI interface. They route requests to the right team, track resolution, and follow up on satisfaction — reducing response times by 60%.',
        useCases: ['Handle IT and facility requests via AI', 'Route tickets to the right team automatically', 'Track resolution and follow up on satisfaction'],
      },
      {
        icon: Shield,
        title: 'Security & Access Control',
        description: 'Agents integrate with access control systems to monitor building access, enforce policies, and detect anomalies. They manage badge access, alert on tailgating or after-hours entry, and coordinate with security teams — keeping your campus secure without friction.',
        useCases: ['Monitor building access in real time', 'Detect and alert on access anomalies', 'Coordinate security responses automatically'],
      },
      {
        icon: Activity,
        title: 'Facility Performance Analytics',
        description: 'Agents track operational metrics — uptime, work order completion, energy usage, satisfaction scores — and surface insights for facility leaders. They recommend preventive maintenance, flag underperforming buildings, and generate executive reports.',
        useCases: ['Track facility KPIs in real time', 'Recommend preventive maintenance', 'Generate executive facility reports'],
      },
    ],
  },

  Transit: {
    badge: 'Public Transit AI',
    title: 'AI Agents for Transit Operations and Passenger Experience',
    subtitle: '1C Platform deploys AI agents that optimize routes, predict maintenance, and enhance passenger communications for public transit agencies. Agents integrate with your scheduling, ticketing, and fleet management systems — improving on-time performance 35% and passenger satisfaction 50%.',
    features: [
      {
        icon: Train,
        title: 'Route Optimization',
        description: 'Agents continuously analyze ridership, traffic, and schedule adherence to optimize routes in real time. They recommend schedule adjustments, add or remove service based on demand, and reroute around disruptions — improving on-time performance by 35%.',
        useCases: ['Optimize routes based on ridership data', 'Adjust schedules for demand patterns', 'Reroute around disruptions in real time'],
      },
      {
        icon: Activity,
        title: 'Predictive Fleet Maintenance',
        description: 'Agents analyze vehicle telematics — engine data, brake wear, tire pressure — to predict maintenance needs before breakdowns occur. They schedule service during off-peak hours, order parts automatically, and prevent costly in-service failures.',
        useCases: ['Predict vehicle failures from telematics', 'Schedule maintenance during off-peak hours', 'Prevent in-service breakdowns proactively'],
      },
      {
        icon: MessageSquare,
        title: 'Passenger Information',
        description: 'Agents provide real-time updates via SMS, app, and station displays — next bus arrival, service alerts, and trip planning. They answer passenger questions, process feedback, and escalate complaints — keeping passengers informed and satisfied 24/7.',
        useCases: ['Provide real-time arrival updates', 'Answer passenger questions automatically', 'Process feedback and route complaints'],
      },
      {
        icon: DollarSign,
        title: 'Fare Collection & Revenue',
        description: 'Agents monitor fare evasion, optimize pricing, and analyze ridership-to-revenue ratios. They detect fraud patterns, recommend fare adjustments, and integrate with payment systems — maximizing revenue while ensuring equitable access.',
        useCases: ['Monitor fare evasion and detect fraud', 'Optimize pricing based on ridership', 'Integrate with payment systems seamlessly'],
      },
      {
        icon: Gauge,
        title: 'Performance Analytics',
        description: 'Agents track on-time performance, ridership trends, and operational costs across routes and modes. They identify underperforming routes, recommend service changes, and generate reports for board meetings and grant compliance.',
        useCases: ['Track on-time performance by route', 'Identify underperforming routes', 'Generate board and grant compliance reports'],
      },
      {
        icon: Shield,
        title: 'Safety & Security',
        description: 'Agents monitor CCTV, passenger emergency calls, and incident reports to detect safety issues in real time. They coordinate with operators and first responders, log incidents, and generate safety reports — ensuring a secure environment for passengers and staff.',
        useCases: ['Monitor CCTV for safety incidents', 'Coordinate emergency response automatically', 'Generate safety and incident reports'],
      },
    ],
  },

  GovernmentAgencies: {
    badge: 'Government AI',
    title: 'AI Agents for Public Services and Government Operations',
    subtitle: '1C Platform deploys FedRAMP-ready AI agents that automate citizen services, document processing, compliance, and budget management for government agencies. Agents improve citizen satisfaction 55% while reducing operational costs 35% — all with full audit trails and transparency.',
    features: [
      {
        icon: MessageSquare,
        title: 'Citizen Services',
        description: 'Agents handle citizen inquiries across web, phone, and mobile — answering questions, processing applications, and routing requests. They provide 24/7 availability in multiple languages, reducing wait times and improving the citizen experience.',
        useCases: ['Answer citizen questions 24/7', 'Process applications automatically', 'Route requests to the right department'],
      },
      {
        icon: FileText,
        title: 'Document Processing',
        description: 'Agents automate document intake — licenses, permits, claims, and filings — with OCR, data extraction, and validation. They route documents for approval, flag errors, and track status — reducing processing time from weeks to days.',
        useCases: ['Automate license and permit processing', 'Extract data from documents with OCR', 'Route documents for approval automatically'],
      },
      {
        icon: ShieldCheck,
        title: 'Compliance & Reporting',
        description: 'Agents track regulatory requirements, monitor compliance, and generate audit-ready reports. They map controls to mandates, flag gaps, and ensure your agency is always prepared for oversight reviews and inspector general audits.',
        useCases: ['Track regulatory compliance continuously', 'Map controls to federal mandates', 'Generate audit-ready compliance reports'],
      },
      {
        icon: DollarSign,
        title: 'Budget & Grant Management',
        description: 'Agents monitor spending against budgets, track grant compliance, and flag budget variances. They automate procurement workflows, generate financial reports, and ensure funds are spent according to authorization — improving fiscal accountability.',
        useCases: ['Monitor spending against budgets in real time', 'Track grant compliance and reporting', 'Automate procurement workflows'],
      },
      {
        icon: Lock,
        title: 'Data Security & Privacy',
        description: 'Agents enforce data access policies, monitor for breaches, and ensure PII is handled according to law. They maintain immutable audit trails, support FOIA requests, and ensure your agency meets federal security standards.',
        useCases: ['Enforce data access and privacy policies', 'Monitor for breaches and anomalies', 'Support FOIA requests with audit trails'],
      },
      {
        icon: BarChart3,
        title: 'Performance & Outcomes',
        description: 'Agents track agency performance metrics, service outcomes, and citizen satisfaction. They identify service gaps, recommend improvements, and generate reports for leadership and oversight bodies — ensuring data-driven governance.',
        useCases: ['Track agency performance in real time', 'Identify service gaps and improvements', 'Generate performance and outcome reports'],
      },
    ],
  },

  EnergyUtilities: {
    badge: 'Energy & Utilities AI',
    title: 'AI Agents for Grid Operations and Utility Management',
    subtitle: '1C Platform deploys AI agents that optimize grid performance, predict outages, and automate customer service for energy and utility companies. Agents integrate with SCADA, IoT sensors, and billing systems — preventing 90% of outages while improving efficiency 25%.',
    features: [
      {
        icon: Zap,
        title: 'Grid Optimization',
        description: 'Agents monitor grid load, voltage, and frequency in real time to optimize power distribution. They balance supply and demand, integrate renewable sources, and prevent overloading — improving grid efficiency by 25% while maintaining stability.',
        useCases: ['Optimize load balancing in real time', 'Integrate renewable energy sources', 'Prevent grid overloading automatically'],
      },
      {
        icon: Activity,
        title: 'Outage Prediction & Response',
        description: 'Agents analyze weather data, equipment sensors, and historical patterns to predict outages before they occur. They dispatch crews, route power, and communicate with customers — reducing outage duration by 60% and preventing 90% of preventable outages.',
        useCases: ['Predict outages from weather and sensor data', 'Dispatch crews automatically', 'Communicate outage status to customers'],
      },
      {
        icon: DollarSign,
        title: 'Customer Billing & Service',
        description: 'Agents automate billing, payment processing, and customer inquiries. They detect billing anomalies, process payment arrangements, and answer usage questions — reducing call center volume by 50% while improving customer satisfaction.',
        useCases: ['Automate billing and payment processing', 'Detect billing anomalies automatically', 'Answer customer usage questions 24/7'],
      },
      {
        icon: Gauge,
        title: 'Demand Forecasting',
        description: 'Agents forecast energy demand using ML models trained on weather, usage patterns, and grid data. They recommend generation adjustments, optimize storage dispatch, and support capacity planning — ensuring reliable supply at lowest cost.',
        useCases: ['Forecast demand with ML precision', 'Optimize generation and storage dispatch', 'Support capacity planning decisions'],
      },
      {
        icon: Globe,
        title: 'Renewable Integration',
        description: 'Agents manage the integration of solar, wind, and storage into the grid. They predict renewable generation, balance intermittency with storage, and ensure stable power supply — accelerating the transition to clean energy without reliability risk.',
        useCases: ['Predict renewable generation output', 'Balance intermittency with battery storage', 'Ensure stable supply with renewables'],
      },
      {
        icon: Shield,
        title: 'Asset Management',
        description: 'Agents track the health of transformers, lines, and substations via IoT sensors. They predict equipment failures, schedule maintenance, and extend asset life — reducing capital expenditures and preventing costly infrastructure failures.',
        useCases: ['Predict asset failures from sensor data', 'Schedule maintenance to extend asset life', 'Reduce capital expenditures proactively'],
      },
    ],
  },

  SportsEntertainment: {
    badge: 'Sports & Entertainment AI',
    title: 'AI Agents for Fan Engagement and Venue Operations',
    subtitle: '1C Platform deploys AI agents that personalize fan experiences, optimize ticketing, and automate venue operations for sports and entertainment organizations. Agents integrate with your ticketing, CRM, and venue systems — increasing revenue per fan 30% and efficiency 45%.',
    features: [
      {
        icon: Users,
        title: 'Fan Engagement',
        description: 'Agents build 360-degree fan profiles from ticketing, merchandise, and digital engagement data. They deliver personalized content, offers, and experiences across channels — increasing fan engagement and lifetime value by 30%.',
        useCases: ['Personalize content and offers per fan', 'Engage fans across digital channels', 'Increase merchandise and ticket sales'],
      },
      {
        icon: DollarSign,
        title: 'Ticketing Optimization',
        description: 'Agents optimize ticket pricing based on demand, opponent, and seat location. They manage dynamic pricing, prevent scalping, and fill seats — maximizing revenue while ensuring fair access for all fans.',
        useCases: ['Optimize dynamic ticket pricing', 'Prevent scalping with demand detection', 'Fill seats with targeted promotions'],
      },
      {
        icon: Building,
        title: 'Venue Operations',
        description: 'Agents automate venue logistics — staffing schedules, inventory, security coordination, and maintenance. They optimize concessions staffing, predict crowd flow, and ensure smooth operations on event days.',
        useCases: ['Optimize staffing and concessions', 'Predict and manage crowd flow', 'Coordinate security and maintenance'],
      },
      {
        icon: BarChart3,
        title: 'Revenue Management',
        description: 'Agents track revenue across ticketing, merchandise, concessions, and sponsorship. They identify upsell opportunities, optimize inventory, and forecast seasonal revenue — maximizing the value of every fan interaction.',
        useCases: ['Track revenue across all channels', 'Identify upsell and cross-sell opportunities', 'Forecast seasonal revenue accurately'],
      },
      {
        icon: MessageSquare,
        title: 'Fan Service & Support',
        description: 'AI agents handle fan inquiries across chat, social, and phone — answering questions about tickets, parking, accessibility, and venue policies. They resolve 80% of inquiries automatically, with seamless escalation to staff for complex issues.',
        useCases: ['Answer fan questions 24/7', 'Handle ticket and parking inquiries', 'Escalate complex issues to staff'],
      },
      {
        icon: Eye,
        title: 'Safety & Security',
        description: 'Agents monitor CCTV, crowd density, and incident reports to ensure fan safety. They detect anomalies, coordinate with security and medical teams, and generate post-event safety reports — ensuring a secure environment for all attendees.',
        useCases: ['Monitor crowd density and safety', 'Coordinate security and medical response', 'Generate post-event safety reports'],
      },
    ],
  },

  Gaming: {
    badge: 'Gaming AI',
    title: 'AI Agents for Game Operations and Infrastructure',
    subtitle: '1C Platform deploys AI agents that handle matchmaking, cheat detection, infrastructure scaling, and LiveOps for gaming companies. Agents integrate with your game engine, matchmaking service, and analytics — reducing infrastructure costs 40% with 99% cheat detection.',
    features: [
      {
        icon: Gamepad2,
        title: 'Player Matchmaking',
        description: 'Agents match players based on skill, latency, playstyle, and behavior patterns. They optimize match quality, reduce wait times, and balance teams — improving player retention and satisfaction with ML-driven matchmaking.',
        useCases: ['Match players by skill and latency', 'Reduce matchmaking wait times', 'Balance teams for fair gameplay'],
      },
      {
        icon: Shield,
        title: 'Cheat Detection',
        description: 'Agents analyze player behavior in real time to detect cheating, aimbots, and exploits. They use behavioral analysis and ML to identify 99% of cheaters — with false positive rates low enough to avoid banning legitimate players.',
        useCases: ['Detect cheats with behavioral analysis', 'Reduce false positives with ML models', 'Ban cheaters automatically or flag for review'],
      },
      {
        icon: Server,
        title: 'Infrastructure Scaling',
        description: 'Agents auto-scale game servers based on player count, region, and load. They spin up instances during peak hours, scale to zero during off-peak, and route players to the nearest healthy server — reducing infrastructure costs by 40%.',
        useCases: ['Auto-scale servers for peak demand', 'Route players to nearest server', 'Reduce idle infrastructure costs'],
      },
      {
        icon: Zap,
        title: 'LiveOps Automation',
        description: 'Agents automate LiveOps — events, promotions, content updates, and A/B tests. They schedule events, segment players, and deliver personalized content — driving engagement and monetization without manual operations work.',
        useCases: ['Schedule and automate in-game events', 'Segment players for targeted promotions', 'Run A/B tests on game features'],
      },
      {
        icon: BarChart3,
        title: 'Player Analytics',
        description: 'Agents track player behavior, retention, monetization, and engagement metrics. They identify churn risk, recommend retention campaigns, and surface insights for game designers — turning data into decisions that improve player experience.',
        useCases: ['Track retention and churn metrics', 'Identify at-risk players automatically', 'Recommend retention campaigns from data'],
      },
      {
        icon: MessageSquare,
        title: 'Player Support',
        description: 'AI agents handle player support tickets across chat, email, and in-game — answering questions, processing refunds, and escalating complex issues. They resolve 80% of tickets automatically, 24/7, with game-specific knowledge.',
        useCases: ['Answer player questions 24/7', 'Process refunds and account issues', 'Escalate complex tickets to human agents'],
      },
    ],
  },

  PublicSafety: {
    badge: 'Public Safety AI',
    title: 'AI Agents for Public Safety and Emergency Response',
    subtitle: '1C Platform deploys FedRAMP-ready AI agents that automate surveillance analysis, incident detection, and emergency response coordination for public safety agencies. Agents reduce response times 60% while maintaining strict privacy controls and full audit trails.',
    features: [
      {
        icon: Eye,
        title: 'Surveillance Analysis',
        description: 'Agents analyze CCTV feeds in real time to detect anomalies — unauthorized access, loitering, crowd formation, and safety hazards. They alert operators only when action is needed, reducing alert fatigue while ensuring critical events aren\'t missed.',
        useCases: ['Detect anomalies in CCTV feeds', 'Alert operators only for actionable events', 'Reduce alert fatigue with smart filtering'],
      },
      {
        icon: Bell,
        title: 'Incident Detection & Dispatch',
        description: 'Agents detect incidents from calls, sensors, and social media — then dispatch the right responders automatically. They route by location, priority, and available resources — reducing response times by 60% and ensuring the right team is always en route.',
        useCases: ['Detect incidents from multiple sources', 'Dispatch responders by priority and location', 'Reduce response times automatically'],
      },
      {
        icon: Shield,
        title: 'Emergency Response Coordination',
        description: 'Agents coordinate multi-agency responses — police, fire, EMS — with shared situational awareness. They relay updates, track responder locations, and manage resources — ensuring coordinated, efficient responses to complex emergencies.',
        useCases: ['Coordinate multi-agency responses', 'Track responder locations in real time', 'Manage resources across agencies'],
      },
      {
        icon: Lock,
        title: 'Privacy & Civil Liberties',
        description: 'Agents enforce privacy policies, mask innocent faces, and delete footage after retention periods. They log every access, ensure data is used only for authorized purposes, and support oversight — protecting civil liberties while enhancing safety.',
        useCases: ['Enforce privacy and retention policies', 'Mask faces and protect identities', 'Log every data access for oversight'],
      },
      {
        icon: FileText,
        title: 'Case Management & Reporting',
        description: 'Agents automate case file creation, evidence tracking, and report generation. They organize digital evidence, generate incident reports, and ensure chain of custody — reducing administrative workload for officers and investigators.',
        useCases: ['Automate case file and report creation', 'Track digital evidence with chain of custody', 'Generate incident reports automatically'],
      },
      {
        icon: BarChart3,
        title: 'Crime Analytics & Prevention',
        description: 'Agents analyze crime patterns, hot spots, and trends to support predictive policing and resource deployment. They recommend patrol routes, flag emerging threats, and generate intelligence reports — helping agencies prevent crime before it happens.',
        useCases: ['Analyze crime patterns and hot spots', 'Recommend patrol routes from data', 'Generate intelligence reports for leadership'],
      },
    ],
  },

  Cities: {
    badge: 'Smart City AI',
    title: 'AI Agents for Smart City Operations',
    subtitle: '1C Platform deploys AI agents that coordinate traffic, public services, energy, and infrastructure for smart cities. Agents integrate with IoT sensors, cameras, and municipal systems — reducing congestion 30% and improving citizen satisfaction 45%.',
    features: [
      {
        icon: TrafficCone,
        title: 'Traffic Management',
        description: 'Agents optimize traffic signals based on real-time vehicle counts, congestion, and events. They detect incidents, reroute traffic, and coordinate with transit — reducing congestion by 30% and improving emergency vehicle response times.',
        useCases: ['Optimize traffic signals in real time', 'Detect incidents and reroute traffic', 'Coordinate with transit for multimodal flow'],
      },
      {
        icon: Zap,
        title: 'Energy Management',
        description: 'Agents manage municipal energy usage — street lighting, public buildings, and EV charging. They dim lights in low-traffic areas, optimize building HVAC, and balance EV charging loads — reducing energy costs and carbon footprint.',
        useCases: ['Optimize street lighting by traffic patterns', 'Manage public building energy usage', 'Balance EV charging loads across the grid'],
      },
      {
        icon: Shield,
        title: 'Public Safety',
        description: 'Agents monitor public spaces via CCTV and sensors to detect safety issues. They coordinate with emergency services, alert on suspicious activity, and support disaster response — ensuring citizen safety across the city.',
        useCases: ['Monitor public spaces for safety', 'Coordinate emergency response across agencies', 'Support disaster and event management'],
      },
      {
        icon: MessageSquare,
        title: 'Citizen Services',
        description: 'Agents handle citizen requests — potholes, noise complaints, permits — through a single AI interface. They route requests to the right department, track resolution, and provide status updates — improving citizen satisfaction by 45%.',
        useCases: ['Handle citizen service requests via AI', 'Route requests to the right department', 'Provide status updates automatically'],
      },
      {
        icon: Activity,
        title: 'Infrastructure Monitoring',
        description: 'Agents monitor bridges, roads, water systems, and public buildings via IoT sensors. They predict maintenance needs, flag structural issues, and schedule repairs — preventing infrastructure failures and extending asset life.',
        useCases: ['Monitor infrastructure with IoT sensors', 'Predict maintenance and repairs', 'Prevent infrastructure failures proactively'],
      },
      {
        icon: BarChart3,
        title: 'City Analytics & Planning',
        description: 'Agents analyze data across all city systems to support urban planning, budget allocation, and policy decisions. They generate insights on mobility, sustainability, and service delivery — helping leaders make data-driven decisions.',
        useCases: ['Analyze citywide data for planning', 'Support budget allocation with data', 'Generate policy insights for leadership'],
      },
    ],
  },

  Airports: {
    badge: 'Airport AI',
    title: 'AI Agents for Airport Operations and Passenger Experience',
    subtitle: '1C Platform deploys AI agents that optimize passenger flow, security screening, and baggage handling for airports. Agents integrate with your flight scheduling, security, and passenger systems — improving on-time performance 25% and passenger satisfaction 40%.',
    features: [
      {
        icon: Plane,
        title: 'Passenger Flow Management',
        description: 'Agents monitor passenger density at check-in, security, and boarding areas in real time. They open additional lanes, adjust staffing, and provide wait-time estimates — reducing congestion and ensuring passengers reach gates on time.',
        useCases: ['Monitor passenger density in real time', 'Open lanes and adjust staffing dynamically', 'Provide accurate wait-time estimates'],
      },
      {
        icon: Shield,
        title: 'Security Screening',
        description: 'Agents coordinate security checkpoint operations — staffing, lane management, and threat detection. They optimize throughput during peak hours, flag high-risk passengers for additional screening, and ensure compliance with TSA regulations.',
        useCases: ['Optimize security throughput', 'Flag high-risk passengers for screening', 'Ensure TSA regulatory compliance'],
      },
      {
        icon: Layers,
        title: 'Baggage Handling',
        description: 'Agents track baggage through the handling system, predict bottlenecks, and route bags efficiently. They detect mishandled bags, initiate tracing, and coordinate with airlines — reducing baggage delays and improving passenger satisfaction.',
        useCases: ['Track baggage through the handling system', 'Predict and prevent bottlenecks', 'Initiate tracing for mishandled bags'],
      },
      {
        icon: MessageSquare,
        title: 'Passenger Communications',
        description: 'Agents provide real-time flight updates, gate changes, and wayfinding via app, SMS, and airport displays. They answer passenger questions, process feedback, and coordinate with airlines — keeping passengers informed 24/7.',
        useCases: ['Provide real-time flight and gate updates', 'Answer passenger questions automatically', 'Coordinate with airlines on communications'],
      },
      {
        icon: Activity,
        title: 'Operations Coordination',
        description: 'Agents coordinate operations across airport departments — airside, landside, retail, and security. They share situational awareness, manage disruptions, and ensure smooth operations during irregular events.',
        useCases: ['Coordinate across airport departments', 'Manage disruptions and irregular operations', 'Maintain situational awareness airport-wide'],
      },
      {
        icon: BarChart3,
        title: 'Performance & Revenue',
        description: 'Agents track on-time performance, passenger throughput, retail revenue, and operational costs. They identify bottlenecks, recommend improvements, and generate reports for airport leadership and airline partners.',
        useCases: ['Track on-time performance and throughput', 'Identify bottlenecks and recommend fixes', 'Generate reports for leadership and partners'],
      },
    ],
  },

  Education: {
    badge: 'Education AI',
    title: 'AI Agents for Educational Operations and Student Success',
    subtitle: '1C Platform deploys AI agents that automate grading, engagement, administration, and analytics for educational institutions. Agents integrate with your LMS, SIS, and collaboration tools — increasing engagement 60% and saving 50% of administrative time.',
    features: [
      {
        icon: GraduationCap,
        title: 'Student Engagement',
        description: 'Agents monitor student engagement across the LMS — logins, assignments, discussions, and assessments. They flag at-risk students, send personalized nudges, and recommend interventions — improving engagement and retention by 60%.',
        useCases: ['Monitor engagement across the LMS', 'Flag at-risk students automatically', 'Send personalized engagement nudges'],
      },
      {
        icon: CheckSquare,
        title: 'Automated Grading',
        description: 'Agents grade assignments, quizzes, and short-answer questions with AI — providing instant feedback to students and freeing instructors for higher-value work. They maintain rubric consistency and flag submissions that need human review.',
        useCases: ['Grade assignments and quizzes automatically', 'Provide instant feedback to students', 'Flag submissions for human review'],
      },
      {
        icon: FileText,
        title: 'Administrative Automation',
        description: 'Agents automate admissions processing, enrollment management, scheduling, and compliance reporting. They handle routine paperwork, route approvals, and generate reports — saving 50% of administrative time.',
        useCases: ['Automate admissions and enrollment', 'Manage scheduling and compliance', 'Generate administrative reports'],
      },
      {
        icon: BarChart3,
        title: 'Learning Analytics',
        description: 'Agents analyze student performance, learning outcomes, and program effectiveness. They identify curriculum gaps, recommend interventions, and generate insights for instructors and leadership — supporting data-driven education.',
        useCases: ['Analyze student performance trends', 'Identify curriculum gaps and improvements', 'Generate insights for instructors'],
      },
      {
        icon: MessageSquare,
        title: 'Student Support',
        description: 'AI agents handle student inquiries across chat, email, and the LMS — answering questions about assignments, deadlines, and policies. They resolve 80% of inquiries automatically, with escalation to advisors for complex issues.',
        useCases: ['Answer student questions 24/7', 'Handle assignment and policy inquiries', 'Escalate to advisors when needed'],
      },
      {
        icon: Plug,
        title: 'LMS Integration',
        description: 'Agents integrate with Canvas, Blackboard, Moodle, Google Classroom, and custom LMS platforms. They sync grades, track engagement, and automate workflows — all within your existing learning environment.',
        useCases: ['Integrate with major LMS platforms', 'Sync grades and engagement data', 'Automate workflows within the LMS'],
      },
    ],
  },

  Traffic: {
    badge: 'Traffic Management AI',
    title: 'AI Agents for Traffic Management and Urban Mobility',
    subtitle: '1C Platform deploys AI agents that optimize signals, detect incidents, and predict congestion for traffic management agencies. Agents integrate with your traffic cameras, sensors, and signal systems — reducing congestion 30% and improving response times 60%.',
    features: [
      {
        icon: TrafficCone,
        title: 'Signal Optimization',
        description: 'Agents continuously adjust traffic signals based on real-time vehicle counts, queue lengths, and traffic patterns. They optimize coordination along corridors, prioritize transit and emergency vehicles, and reduce stops and delays — cutting congestion by 30%.',
        useCases: ['Optimize signals in real time', 'Prioritize transit and emergency vehicles', 'Coordinate signals along corridors'],
      },
      {
        icon: Bell,
        title: 'Incident Detection',
        description: 'Agents detect accidents, stalls, and debris from cameras and sensors within seconds. They alert responders, reroute traffic, and update variable message signs — reducing incident response times by 60%.',
        useCases: ['Detect incidents from cameras and sensors', 'Alert responders automatically', 'Reroute traffic and update signs'],
      },
      {
        icon: BarChart3,
        title: 'Congestion Prediction',
        description: 'Agents forecast congestion using ML models trained on traffic, weather, events, and historical patterns. They recommend proactive signal changes, variable toll pricing, and traveler alerts — preventing congestion before it forms.',
        useCases: ['Forecast congestion with ML models', 'Recommend proactive signal changes', 'Alert travelers before congestion forms'],
      },
      {
        icon: Gauge,
        title: 'Performance Monitoring',
        description: 'Agents track travel times, throughput, and delay metrics across the network. They identify bottlenecks, measure signal performance, and generate reports for transportation planning and investment decisions.',
        useCases: ['Track travel times and delays in real time', 'Identify bottlenecks and signal issues', 'Generate planning and investment reports'],
      },
      {
        icon: MessageSquare,
        title: 'Traveler Information',
        description: 'Agents provide real-time travel information via apps, websites, and message signs. They answer route questions, suggest alternatives, and alert drivers to incidents — helping travelers make informed decisions.',
        useCases: ['Provide real-time travel updates', 'Suggest alternative routes automatically', 'Alert travelers to incidents'],
      },
      {
        icon: Plug,
        title: 'System Integration',
        description: 'Agents integrate with your existing traffic management systems — signal controllers, cameras, detectors, and ramp meters. They pull and synthesize data across systems for unified, autonomous traffic management.',
        useCases: ['Integrate with signal controllers and cameras', 'Synthesize data across systems', 'Manage all traffic assets from one platform'],
      },
    ],
  },
};

export default featureDetails;