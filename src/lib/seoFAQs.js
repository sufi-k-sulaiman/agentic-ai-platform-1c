/**
 * Centralized FAQ Registry for Landing Pages
 *
 * Maps pageName -> array of { question, answer } pairs.
 * Used by FAQSection component to render visual FAQ accordions
 * with FAQPage schema on landing pages.
 *
 * Pages not listed here fall back to getGenericFAQs(pageName) which
 * generates FAQs from the page's SEO metadata in seoConfig.js.
 */
import { getSeoPage } from '@/lib/seoConfig';

export const seoFAQs = {
  // ── Industry Verticals ──────────────────────────────────────────
  Healthcare: [
    { question: 'How does 1C Platform ensure HIPAA compliance for healthcare AI?', answer: '1C Platform enforces end-to-end encryption at rest and in transit, automated key rotation, role-based access control, and tamper-proof audit trails across all systems. Continuous compliance monitoring validates that controls are functioning, staff certifications are current, and policies are followed—producing audit-ready documentation for HIPAA, HITECH, and state regulations instantly.' },
    { question: 'Can AI agents integrate with our existing EMR systems?', answer: 'Yes. 1C Platform aggregates data from all EMR systems, labs, pharmacies, wearables, and health information exchanges via standard HL7/FHIR APIs. Unified patient profiles are accessible at the point of care, reducing duplicate testing by up to 85% and medical errors by 40%.' },
    { question: 'How much time can healthcare staff save with Agentic AI?', answer: 'Healthcare organizations using 1C Platform report a 50% reduction in documentation time through AI-generated clinical notes, 45% fewer no-shows via automated scheduling and reminders, and 95% first-pass claim approval rates through automated coding and billing—freeing up to 50% of admin time for direct patient care.' },
    { question: 'What healthcare use cases does the platform support?', answer: '1C Platform supports 24/7 AI triage and symptom assessment, automated appointment scheduling, post-discharge care coordination, insurance verification, automated coding and billing, medication management, and remote patient monitoring—all with HIPAA-compliant audit trails.' },
    { question: 'How long does it take to deploy AI agents in a healthcare setting?', answer: 'Most healthcare organizations are live in 4–8 weeks. The platform connects to existing EMR, billing, and scheduling systems via standard APIs, and no-code agent building means clinical staff can configure workflows without developer involvement.' },
  ],
  FinancialInstitutions: [
    { question: 'How does 1C Platform detect fraud with Agentic AI?', answer: 'Autonomous agents analyze transaction patterns in real time across all channels, flagging anomalies, velocity changes, and behavioral deviations in milliseconds. The platform combines rule-based controls with ML anomaly detection and graph-based relationship analysis, reducing fraud losses by up to 60% while keeping false positives under 2%.' },
    { question: 'Can the platform help with banking compliance and regulatory reporting?', answer: 'Yes. 1C Platform automates compliance monitoring for AML/KYC, SOX, PCI-DSS, and Basel III. Audit trails capture every decision, automated report generation produces regulator-ready documentation, and continuous control validation ensures compliance gaps are detected and remediated before they become findings.' },
    { question: 'What ROI can financial institutions expect from Agentic AI?', answer: 'Banks and credit unions using 1C Platform report 40–70% reduction in manual processing costs, 3x faster loan origination, 60% reduction in compliance reporting time, and 25% improvement in customer satisfaction through faster, more personalized service. Use our ROI calculator to model your specific savings.' },
    { question: 'Does the platform integrate with core banking systems?', answer: '1C Platform integrates with all major core banking systems (Fiserv, FIS, Jack Henry, Temenos) via APIs and standard financial messaging protocols (ISO 8583, ISO 20022, SWIFT). Agents can read from and write to core systems with full audit logging.' },
    { question: 'How does the platform handle sensitive financial data?', answer: 'All data is encrypted at rest (AES-256) and in transit (TLS 1.3). The platform supports tokenization, field-level encryption, and data residency controls. Role-based access control and least-privilege permissions ensure agents only access data necessary for their tasks, with every access logged for audit.' },
  ],
  Retail: [
    { question: 'How can Agentic AI improve retail inventory management?', answer: '1C Platform agents forecast demand using historical sales, seasonality, weather, and market trends—reducing stockouts by 35% and overstock by 25%. Autonomous reordering, real-time inventory tracking across all channels, and dynamic pricing optimization run continuously without manual intervention.' },
    { question: 'What retail customer experience improvements does the platform offer?', answer: 'AI agents provide 24/7 personalized product recommendations, automated customer support across chat/email/voice, dynamic pricing based on customer lifetime value, and predictive cart abandonment recovery—increasing conversion rates by 20–30% and average order value by 15%.' },
    { question: 'Can the platform handle omnichannel retail operations?', answer: 'Yes. 1C Platform unifies online, in-store, and mobile channels into a single view. Agents track inventory across all locations, route orders to the optimal fulfillment center, and provide customers with real-time availability and delivery estimates across every touchpoint.' },
    { question: 'How quickly can a retailer deploy 1C Platform?', answer: 'Most retailers are live in 4–6 weeks. The platform connects to existing POS, e-commerce, ERP, and inventory systems via APIs. No-code agent building means merchandising and operations teams can configure workflows without developer involvement.' },
    { question: 'What is the typical ROI for retail AI implementations?', answer: 'Retailers using 1C Platform report 25–35% reduction in inventory carrying costs, 20–30% increase in conversion rates, 40% reduction in customer service costs, and 15% improvement in gross margin through dynamic pricing. Use our savings calculator to model your specific ROI.' },
  ],
  Education: [
    { question: 'How does 1C Platform support student success with AI?', answer: 'AI agents provide 24/7 academic tutoring, automated personalized learning paths, early warning systems for at-risk students, and intelligent course recommendations. Institutions using the platform report 30% improvement in retention rates and 40% reduction in advisor workload through automated routine advising.' },
    { question: 'Can the platform integrate with our LMS and SIS systems?', answer: 'Yes. 1C Platform integrates with all major LMS platforms (Canvas, Blackboard, Moodle, D2L) and SIS systems (Banner, Workday, PeopleSoft) via standard APIs. Agents read and write data with full audit logging and FERPA-compliant access controls.' },
    { question: 'How does the platform help with administrative automation?', answer: 'Autonomous agents handle enrollment processing, financial aid verification, transcript evaluation, scheduling optimization, and automated communications with prospective and current students—reducing administrative workload by 50% and processing times by 70%.' },
    { question: 'Is the platform FERPA compliant?', answer: 'Yes. 1C Platform enforces FERPA-compliant access controls, audit trails, and data retention policies. Role-based permissions ensure agents and users only access student records they are authorized to view, with every access logged for audit.' },
    { question: 'What types of educational institutions use 1C Platform?', answer: '1C Platform serves K-12 districts, community colleges, universities, online learning platforms, and corporate training programs. The platform scales from a single department to institution-wide deployment with multi-campus support.' },
  ],
  PropertyManagement: [
    { question: 'How can Agentic AI improve property management operations?', answer: '1C Platform agents automate tenant communications, maintenance request routing, lease renewal management, rent collection, and vendor coordination. Property managers report 50% reduction in administrative workload, 35% faster maintenance resolution, and 20% improvement in tenant satisfaction scores.' },
    { question: 'Can the platform handle multi-property and portfolio management?', answer: 'Yes. 1C Platform scales from a single property to portfolios of thousands of units. Agents maintain unified tenant profiles, cross-property availability, and portfolio-level financial reporting with per-property drill-down.' },
    { question: 'Does the platform integrate with existing property management software?', answer: '1C Platform integrates with Yardi, AppFolio, Buildium, RealPage, and MRI via APIs. Agents read and write data with full audit logging, eliminating double data entry and ensuring consistency across systems.' },
    { question: 'How does AI help with tenant screening and onboarding?', answer: 'Autonomous agents screen applications using configurable criteria, verify income and references, run background checks, generate lease documents, and coordinate move-in logistics—reducing time-to-occupy by 40% and eliminating manual processing errors.' },
  ],
  DataCenters: [
    { question: 'How does 1C Platform optimize data center operations with AI?', answer: 'AI agents monitor infrastructure health, predict hardware failures, optimize cooling and power usage, automate workload placement, and handle incident response. Data centers using the platform report 30% reduction in energy costs, 50% faster incident resolution, and 40% fewer unplanned outages.' },
    { question: 'Can the platform integrate with our existing DCIM tools?', answer: 'Yes. 1C Platform integrates with all major DCIM platforms (Schneider EcoStruxure, Sunbird, Nlyte, Device42) via APIs and standard protocols (SNMP, Redfish, IPMI). Agents read sensor data, power metrics, and asset inventories in real time.' },
    { question: 'How does the platform handle predictive maintenance?', answer: 'AI agents analyze sensor data, log patterns, and historical failure rates to predict hardware failures before they occur. Automated work order generation, spare part pre-positioning, and maintenance window scheduling reduce unplanned downtime by 40% and extend asset lifecycles by 20%.' },
    { question: 'What energy efficiency improvements can we expect?', answer: 'AI agents optimize cooling setpoints, workload distribution, and power management based on real-time conditions—reducing PUE by 0.2–0.4 points and cutting energy costs by 25–35% without compromising reliability.' },
  ],
  CorporateCampuses: [
    { question: 'How can Agentic AI improve corporate facility management?', answer: '1C Platform agents automate HVAC optimization, space utilization tracking, maintenance scheduling, visitor management, and employee service requests. Corporate campuses report 30% reduction in facility operating costs, 40% faster maintenance resolution, and 25% improvement in employee satisfaction.' },
    { question: 'Can the platform handle smart building integration?', answer: 'Yes. 1C Platform integrates with BMS/BAS systems (Honeywell, Johnson Controls, Siemens), IoT sensors, access control, and lighting systems via standard protocols (BACnet, Modbus, MQTT). Agents read and act on real-time building data.' },
    { question: 'How does AI improve employee experience on campus?', answer: 'AI agents handle room booking, desk reservation, visitor check-in, IT helpdesk, cafeteria ordering, and facility service requests via chat, mobile, and voice—reducing friction and freeing employees to focus on their work.' },
    { question: 'What space optimization capabilities does the platform offer?', answer: 'AI agents analyze occupancy data, meeting patterns, and utilization trends to recommend space reconfigurations, identify underutilized areas, and optimize cleaning and maintenance schedules—reducing real estate costs by 15–25%.' },
  ],
  Transit: [
    { question: 'How does 1C Platform optimize public transit with AI?', answer: 'AI agents optimize routes and schedules in real time based on ridership, traffic, and weather conditions. Transit agencies report 20% reduction in operating costs, 30% improvement in on-time performance, and 25% increase in ridership through better service reliability.' },
    { question: 'Can the platform integrate with existing transit systems?', answer: '1C Platform integrates with CAD/AVL systems, fare collection, passenger information systems, and fleet management tools via standard APIs and protocols (GTFS, GTFS-Realtime, SIRI). Agents read and act on real-time vehicle and ridership data.' },
    { question: 'How does AI help with transit maintenance?', answer: 'AI agents predict vehicle maintenance needs based on telematics, mileage, and condition data—reducing breakdowns by 40%, extending vehicle lifecycles by 20%, and cutting maintenance costs by 25% through proactive rather than reactive service.' },
    { question: 'What passenger experience improvements does the platform offer?', answer: 'AI agents provide real-time arrival predictions, dynamic rerouting alerts, personalized trip planning, automated accessibility assistance, and 24/7 customer support—improving passenger satisfaction by 35%.' },
  ],
  GovernmentAgencies: [
    { question: 'How does 1C Platform help government agencies with AI?', answer: 'AI agents automate citizen services, permit processing, compliance monitoring, case management, and inter-agency coordination. Government agencies report 50% reduction in processing times, 40% reduction in administrative costs, and 30% improvement in citizen satisfaction.' },
    { question: 'Is the platform compliant with government security requirements?', answer: 'Yes. 1C Platform supports FedRAMP, FISMA, and state-level security frameworks. The platform offers data residency controls, encryption at rest and in transit, role-based access control, and comprehensive audit trails meeting government compliance requirements.' },
    { question: 'Can the platform handle multi-agency coordination?', answer: 'Yes. 1C Platform supports multi-tenant architectures with agency-level data isolation. Agents coordinate across agencies for shared services, data exchange, and joint case management while maintaining strict access controls and audit trails.' },
    { question: 'How does AI improve citizen engagement?', answer: 'AI agents provide 24/7 multilingual citizen support via chat, voice, and mobile. Automated permit processing, case status tracking, and proactive notifications reduce wait times by 60% and improve first-contact resolution rates to 85%.' },
  ],
  EnergyUtilities: [
    { question: 'How can Agentic AI improve energy grid management?', answer: 'AI agents monitor grid health, predict demand, optimize load balancing, detect outages, and coordinate field crew dispatch. Utilities report 25% reduction in outage duration, 20% improvement in grid reliability, and 15% reduction in operating costs.' },
    { question: 'Can the platform integrate with SCADA and grid management systems?', answer: 'Yes. 1C Platform integrates with SCADA systems, EMS/DMS platforms, AMI/smart meters, and DER management systems via standard protocols (IEC 61850, DNP3, Modbus, OPC UA). Agents read and act on real-time grid data.' },
    { question: 'How does AI help with utility billing and customer service?', answer: 'AI agents automate billing, payment processing, usage analytics, outage notifications, and 24/7 customer support. Utilities report 40% reduction in call center volume and 30% improvement in first-call resolution rates.' },
    { question: 'What predictive maintenance capabilities does the platform offer for utilities?', answer: 'AI agents analyze sensor data, weather conditions, and historical failure patterns to predict equipment failures on the grid. Automated work order generation and crew dispatch reduce outage duration by 25% and extend asset lifecycles by 20%.' },
  ],
  SportsEntertainment: [
    { question: 'How does 1C Platform enhance sports and entertainment operations?', answer: 'AI agents handle ticketing, crowd management, content moderation, audience analytics, personalized fan engagement, and event logistics. Venues report 30% increase in revenue per fan, 40% reduction in operational costs, and 25% improvement in fan satisfaction.' },
    { question: 'Can the platform handle live event operations?', answer: 'Yes. 1C Platform agents monitor crowd flow, manage entry points, coordinate staff, handle real-time incident response, and provide live fan engagement via mobile apps—ensuring safe, smooth event operations.' },
    { question: 'How does AI improve audience analytics?', answer: 'AI agents analyze ticket sales, social media sentiment, concession purchases, and fan behavior patterns to provide actionable insights for marketing, pricing, and experience optimization—increasing revenue per fan by 30%.' },
    { question: 'What content moderation capabilities does the platform offer?', answer: 'AI agents monitor user-generated content across social media, forums, and community platforms in real time, flagging inappropriate content, detecting bots, and ensuring brand safety—reducing moderation costs by 60%.' },
  ],
  Gaming: [
    { question: 'How can Agentic AI improve gaming operations?', answer: 'AI agents handle player behavior analysis, in-game intelligence, fraud detection, customer support, and dynamic difficulty adjustment. Gaming companies report 25% increase in player retention, 40% reduction in fraud losses, and 30% improvement in player satisfaction.' },
    { question: 'Can the platform power in-game AI characters?', answer: 'Yes. 1C Platform provides autonomous NPC agents with reasoning, memory, and goal-driven behavior. NPCs adapt to player actions, coordinate with other agents, and provide dynamic, non-repetitive gameplay experiences.' },
    { question: 'How does AI help with player retention?', answer: 'AI agents analyze player behavior, predict churn risk, trigger personalized retention campaigns, adjust difficulty dynamically, and provide 24/7 player support—improving retention rates by 25% and lifetime value by 20%.' },
    { question: 'What fraud detection capabilities does the platform offer for gaming?', answer: 'AI agents detect cheating, account sharing, payment fraud, and bonus abuse in real time by analyzing behavioral patterns, device fingerprints, and transaction anomalies—reducing fraud losses by 40%.' },
  ],
  PublicSafety: [
    { question: 'How does 1C Platform support public safety operations?', answer: 'AI agents assist with surveillance analysis, incident response coordination, resource dispatch, threat assessment, and case management. Public safety agencies report 40% faster incident response, 30% improvement in case clearance rates, and 25% reduction in false alarms.' },
    { question: 'Can the platform integrate with existing public safety systems?', answer: '1C Platform integrates with CAD (Computer-Aided Dispatch) systems, RMS (Records Management Systems), video management systems, and CAD-to-CAD interoperability platforms via standard APIs and protocols.' },
    { question: 'How does AI assist with surveillance and threat detection?', answer: 'AI agents analyze video feeds, sensor data, and social media signals in real time to detect anomalies, identify potential threats, and alert operators—reducing response times by 40% and improving situational awareness.' },
    { question: 'Is the platform compliant with public safety data standards?', answer: 'Yes. 1C Platform supports NEMSIS, NIEM, and Global JXDM data standards. The platform offers CJIS-compliant security controls, audit trails, and data sharing capabilities meeting public safety requirements.' },
  ],
  Cities: [
    { question: 'How can Agentic AI improve smart city operations?', answer: 'AI agents optimize traffic management, waste collection, energy usage, public safety, citizen services, and infrastructure maintenance. Cities report 20% reduction in traffic congestion, 30% reduction in energy costs, and 35% improvement in citizen satisfaction.' },
    { question: 'Can the platform integrate with existing city systems?', answer: '1C Platform integrates with traffic management systems, IoT sensor networks, 311 systems, utility SCADA, and public safety CAD via standard APIs and protocols (MQTT, OneM2M, NGSI-LD).' },
    { question: 'How does AI improve citizen services?', answer: 'AI agents provide 24/7 multilingual citizen support, automate permit processing, track service requests, and proactively notify citizens of relevant information—reducing wait times by 60% and improving first-contact resolution to 85%.' },
    { question: 'What infrastructure optimization capabilities does the platform offer?', answer: 'AI agents monitor infrastructure health, predict maintenance needs, optimize resource allocation, and coordinate field crews—reducing maintenance costs by 25% and extending asset lifecycles by 20%.' },
  ],
  Airports: [
    { question: 'How does 1C Platform optimize airport operations with AI?', answer: 'AI agents handle flight scheduling optimization, passenger flow management, baggage tracking, security screening coordination, and ground crew dispatch. Airports report 25% reduction in delays, 30% improvement in on-time performance, and 20% increase in retail revenue.' },
    { question: 'Can the platform integrate with existing airport systems?', answer: '1C Platform integrates with AODB (Airport Operational Database), AODB, BMS (Baggage Management Systems), security systems, and airline DCS via standard APIs and protocols (AIDX, A-CDM).' },
    { question: 'How does AI improve passenger experience?', answer: 'AI agents provide real-time flight updates, personalized wayfinding, automated check-in and bag drop, security wait time predictions, and 24/7 customer support—improving passenger satisfaction by 35%.' },
    { question: 'What security enhancements does the platform offer?', answer: 'AI agents analyze video feeds, passenger flow data, and threat intelligence in real time to detect anomalies, optimize screening lane allocation, and alert security personnel—reducing wait times by 30% while improving threat detection.' },
  ],

  // ── Product Pages ────────────────────────────────────────────────
  Cyber: [
    { question: 'How does 1C Platform use AI for cybersecurity?', answer: '1C Platform deploys autonomous AI agents that monitor networks, endpoints, and applications 24/7. Agents detect threats in milliseconds using behavioral analysis, anomaly detection, and threat intelligence feeds—reducing mean time to detection (MTTD) by 90% and mean time to response (MTTR) by 80%.' },
    { question: 'Can the platform help with compliance automation?', answer: 'Yes. 1C Platform automates compliance monitoring for SOC 2, ISO 27001, NIST, HIPAA, PCI-DSS, and GDPR. Continuous control validation, automated evidence collection, and audit-ready report generation reduce compliance reporting time by 70%.' },
    { question: 'How does the platform handle incident response?', answer: 'AI agents detect, triage, and respond to security incidents automatically. They isolate affected systems, collect forensic evidence, notify stakeholders, and execute predefined response playbooks—reducing incident impact by 60% and response time by 80%.' },
    { question: 'What threat detection capabilities does the platform offer?', answer: '1C Platform combines signature-based detection, ML anomaly detection, behavioral analysis, and threat intelligence integration to detect known and zero-day threats across networks, endpoints, cloud, and applications.' },
    { question: 'Is the platform suitable for regulated industries?', answer: 'Yes. 1C Platform meets the security and compliance requirements of financial institutions, healthcare, government, and critical infrastructure. The platform offers data residency controls, encryption, audit trails, and compliance frameworks for SOC 2, ISO, HIPAA, FedRAMP, and PCI-DSS.' },
  ],
  SavingsCalculator: [
    { question: 'How does the ROI calculator work?', answer: 'Our ROI calculator uses industry benchmarks and your inputs—company size, salary data, labor costs, and software usage—to estimate annual financial savings, time savings, and productivity gains from implementing Agentic AI. The model factors in remote/hybrid workforce multipliers, department complexity, and team size.' },
    { question: 'What inputs do I need to use the calculator?', answer: 'You need your company size, average employee salary, current software tools, number of departments, and estimated hours spent on manual tasks. The calculator handles the rest, applying industry benchmarks and efficiency multipliers.' },
    { question: 'How accurate are the savings estimates?', answer: 'The calculator uses conservative benchmarks from 500+ enterprise deployments. Actual results vary based on implementation scope, but most organizations achieve 70–90% of projected savings within the first year. The estimates are designed to be realistic, not inflated.' },
    { question: 'Can I save or share my ROI results?', answer: 'Yes. After calculating your ROI, you can download a detailed report, share it with your team, or schedule a call with our team to discuss implementation. The report includes financial projections, time savings, and productivity metrics tailored to your inputs.' },
    { question: 'What ROI have other companies achieved with 1C Platform?', answer: 'Our customers report average annual savings of $2M–$10M depending on company size, with payback periods of 3–6 months. Common outcomes include 40–70% reduction in manual processing costs and 30–50% productivity improvements.' },
  ],
  AboutUs: [
    { question: 'What is 1C Platform\'s mission?', answer: '1C Platform\'s mission is to democratize enterprise AI by making autonomous AI agents accessible to every organization. We believe AI should think, decide, and act on behalf of businesses—handling complex multi-step workflows so teams can focus on strategic work.' },
    { question: 'How many enterprises use 1C Platform?', answer: '1C Platform is trusted by 500+ enterprises across financial services, healthcare, retail, government, manufacturing, and technology. Our customers range from mid-market companies to Fortune 500 organizations.' },
    { question: 'What makes 1C Platform different from other AI platforms?', answer: '1C Platform combines agentic AI, enterprise suite (ERP, CRM, BI), cloud infrastructure, and developer tools in one unified platform. Unlike point solutions, we provide the full stack—from infrastructure to applications—so enterprises can deploy AI without stitching together multiple vendors.' },
    { question: 'Where is 1C Platform headquartered?', answer: '1C Platform is headquartered in Canada with operations across North America, Europe, and Asia. Our cloud platform operates in 32 global regions with 200+ edge locations for low-latency delivery.' },
    { question: 'How can I learn more about 1C Platform?', answer: 'Explore our product pages (Agentic AI, Enterprise Suite, Cloud Platform, Developer Tools), read our blog for AI insights, or contact us to schedule a demo. You can also use our ROI calculator to model potential savings for your organization.' },
  ],
  Careers: [
    { question: 'What types of roles does 1C Platform hire for?', answer: 'We hire across engineering, product, design, sales, marketing, customer success, and leadership. Our engineering roles span AI/ML, full-stack development, infrastructure, security, and data engineering. Visit our careers page for current openings.' },
    { question: 'Does 1C Platform offer remote work?', answer: 'Yes. We offer flexible work arrangements including fully remote, hybrid, and on-site roles depending on the position. Our distributed team spans multiple countries and time zones.' },
    { question: 'What is the company culture like at 1C Platform?', answer: 'We foster a culture of innovation, ownership, and collaboration. Teams have autonomy to solve hard problems, ship quickly, and learn from outcomes. We value diversity, continuous learning, and customer obsession.' },
    { question: 'Does 1C Platform offer internships or new grad programs?', answer: 'Yes. We offer internship programs and new graduate roles across engineering, product, and design. Our programs provide mentorship, real project work, and a path to full-time employment. Check our careers page for current opportunities.' },
    { question: 'How do I apply for a role at 1C Platform?', answer: 'Visit our careers page, find a role that matches your skills, and submit your application online. Our hiring process typically includes an initial screen, technical/role-specific assessment, team interviews, and a final conversation with leadership.' },
  ],
  Community: [
    { question: 'What is the 1C Platform community?', answer: 'The 1C Platform community is a global network of AI developers, architects, and business leaders building with agentic AI. Members share projects, get support, access exclusive resources, and connect with peers and experts.' },
    { question: 'Is the community free to join?', answer: 'Yes. The 1C Platform community is free to join. You get access to forums, open-source projects, documentation, events, and peer support without any cost.' },
    { question: 'What can I do in the community?', answer: 'You can ask questions, share projects, contribute to open-source tools, attend events and webinars, access exclusive resources, and connect with other AI developers and practitioners. The community is a place to learn, share, and grow.' },
    { question: 'How active is the community?', answer: 'Our community has thousands of active members across the globe. Forums are active daily, with new posts, discussions, and project shares. We also host regular events, AMAs, and hackathons.' },
    { question: 'Can I contribute to 1C Platform open-source projects?', answer: 'Yes. We maintain several open-source projects including SDKs, tools, and example agents. Community contributions are welcome. Visit our community page to explore projects and contribution guidelines.' },
  ],
  Events: [
    { question: 'What types of events does 1C Platform host?', answer: 'We host conferences, workshops, webinars, meetups, and hackathons covering agentic AI, enterprise AI, developer tools, and industry use cases. Events range from technical deep dives to business strategy sessions.' },
    { question: 'Are 1C Platform events free?', answer: 'Many of our events are free, including webinars, meetups, and community events. Conferences and specialized workshops may have registration fees. Check individual event pages for details.' },
    { question: 'Can I watch past events online?', answer: 'Yes. Recordings of past webinars, conference talks, and workshops are available on our events page and YouTube channel. Subscribe to stay updated on new content.' },
    { question: 'How do I register for an event?', answer: 'Visit our events page, find the event you want to attend, and click Register. You will receive a confirmation email with details and a calendar invite. For virtual events, you will get a link to join.' },
    { question: 'Does 1C Platform sponsor or speak at external events?', answer: 'Yes. We sponsor and speak at major AI and enterprise technology conferences. If you would like us to speak at your event or explore sponsorship, contact us through our events page.' },
  ],
  AgenticAI: [
    { question: 'What is Agentic AI?', answer: 'Agentic AI refers to autonomous AI agents that can think, decide, and act independently to complete complex multi-step workflows. Unlike traditional AI that responds to single prompts, agentic AI agents plan, use tools, remember context, and coordinate with other agents to achieve goals.' },
    { question: 'How is Agentic AI different from traditional AI?', answer: 'Traditional AI responds to individual requests (one input, one output). Agentic AI agents operate autonomously—they break down goals into steps, use tools and APIs, maintain memory, adapt to changes, and coordinate with other agents. This makes agentic AI suited for complex, multi-step business workflows.' },
    { question: 'Do I need coding skills to build AI agents?', answer: 'No. 1C Platform offers a no-code agent builder that lets business users create, configure, and deploy AI agents without writing code. Developers can also use our SDK and API for custom integrations and advanced control.' },
    { question: 'What enterprise systems can AI agents integrate with?', answer: '1C Platform integrates with 30+ enterprise platforms including Salesforce, SAP, Microsoft 365, Google Workspace, ServiceNow, Slack, Teams, and major databases and cloud providers. Agents can read, write, and orchestrate across all connected systems.' },
    { question: 'How do you ensure AI agent safety and governance?', answer: '1C Platform includes built-in AI governance with role-based access control, audit trails, human-in-the-loop approvals, compliance frameworks (SOC 2, ISO, HIPAA), and real-time monitoring. Every agent decision is logged, reviewable, and reversible.' },
  ],
};

/**
 * Generate generic FAQs from page SEO metadata for pages without
 * specific FAQs in the registry. Returns 3 standard FAQs.
 */
export function getGenericFAQs(pageName) {
  const page = getSeoPage(pageName);
  if (!page) return [];

  const title = page.title;
  const desc = page.description;

  return [
    {
      question: `What is ${title}?`,
      answer: desc,
    },
    {
      question: `How can ${title} help my business?`,
      answer: `${title} leverages agentic AI to automate complex workflows, reduce manual effort, and improve operational efficiency. Organizations using 1C Platform report 40–70% reduction in manual processing costs and 30–50% productivity improvements. Use our ROI calculator to model your specific savings.`,
    },
    {
      question: `How do I get started with ${title}?`,
      answer: `Getting started is easy. Visit our onboarding page to set up your account, explore our documentation for technical guides, or contact us to schedule a demo. Most organizations are live in 4–8 weeks with no-code agent building and pre-built integrations.`,
    },
  ];
}

/**
 * Get FAQs for a page—specific FAQs from the registry, or generic
 * fallbacks generated from SEO metadata.
 */
export function getFAQs(pageName) {
  return seoFAQs[pageName] || getGenericFAQs(pageName);
}