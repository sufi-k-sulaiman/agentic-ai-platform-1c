import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Brain, ShoppingBag, ShoppingCart, Plug, Users, Bug, TrendingUp, AlertTriangle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InlineRelatedGuides from '@/components/seo/InlineRelatedGuides';

const AUTHOR = {
  name: 'Sufi Khan Sulaiman',
  url: 'https://sufikhan.com/',
};

const SECTIONS = [
  {
    id: 'ai',
    icon: Brain,
    title: 'AI Fundamentals',
    subtitle: 'Core concepts, capabilities, and strategy',
    questions: [
      { q: 'What is artificial intelligence (AI)?', a: 'AI is the field of computer science focused on building systems that perform tasks requiring human intelligence—reasoning, learning, perception, language understanding, and decision-making—using techniques like machine learning, deep learning, and natural language processing.' },
      { q: 'What is the difference between AI, machine learning, and deep learning?', a: 'AI is the broad field. Machine learning is a subset where systems learn patterns from data instead of being explicitly programmed. Deep learning is a subset of ML using multi-layered neural networks, powering breakthroughs in vision, language, and speech.' },
      { q: 'What is agentic AI?', a: 'Agentic AI refers to AI systems that autonomously plan, reason, use tools, and execute multi-step workflows to achieve goals—acting as digital workers rather than passive tools. Unlike traditional AI that responds to single prompts, agents maintain memory, make decisions, and take actions across systems.' },
      { q: 'What are large language models (LLMs)?', a: 'LLMs are neural networks trained on massive text datasets to understand and generate human language. Models like GPT, Claude, and Gemini power chatbots, content generation, code assistance, search, and increasingly agentic workflows.' },
      { q: 'What is the difference between generative AI and predictive AI?', a: 'Predictive AI analyzes data to forecast outcomes—classification, regression, recommendation. Generative AI creates new content—text, images, code, audio—by learning the distribution of training data and producing novel outputs.' },
      { q: 'What is retrieval-augmented generation (RAG)?', a: 'RAG combines an LLM with a knowledge base, retrieving relevant documents before generating responses. This grounds answers in factual, up-to-date data, reduces hallucinations, and enables enterprise-specific AI without retraining the model.' },
      { q: 'What is fine-tuning vs. RAG?', a: 'Fine-tuning retrains a model on domain data to change its behavior or knowledge. RAG retrieves external knowledge at inference time. Fine-tuning is better for style, tone, and specialized tasks; RAG is better for frequently changing knowledge and citations.' },
      { q: 'What are AI hallucinations?', a: 'Hallucinations are confident but false outputs from AI models. They occur because LLMs generate plausible-sounding text without verifying facts. Mitigation strategies include RAG, grounding, fact-checking layers, and confidence scoring.' },
      { q: 'What is multimodal AI?', a: 'Multimodal AI processes and generates content across multiple formats—text, images, audio, video—within a single model. This enables richer understanding, cross-format reasoning, and more natural human-AI interaction.' },
      { q: 'What is the AI maturity model for businesses?', a: 'Maturity progresses from ad-hoc experiments, to standardized pilots, to integrated production systems, to scaled AI operations, and finally to AI-first organizations where AI is embedded in every process and decision.' },
      { q: 'How do businesses choose the right AI use cases?', a: 'Prioritize by business impact, data availability, technical feasibility, and stakeholder alignment. Start with high-volume, rules-based processes for quick wins, then tackle complex, judgment-heavy workflows as capabilities mature.' },
      { q: 'What is the ROI of AI for businesses?', a: 'AI delivers ROI through cost reduction (30-50% on automated processes), revenue growth (10-20% from personalization and predictive analytics), and risk mitigation. Most organizations see positive ROI within 12-18 months of production deployment.' },
      { q: 'What is AI governance?', a: 'AI governance is the framework of policies, processes, and controls ensuring AI systems are deployed ethically, compliantly, and transparently—covering data privacy, model accountability, bias monitoring, audit trails, and risk management.' },
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'Ecommerce',
    subtitle: 'AI in online retail and store operations',
    questions: [
      { q: 'How is AI used in ecommerce?', a: 'AI powers product recommendations, search, chatbots, dynamic pricing, inventory forecasting, fraud detection, visual search, and personalized marketing—touching every stage of the customer journey from discovery to post-purchase.' },
      { q: 'How does AI improve product recommendations?', a: 'AI analyzes browsing history, purchase patterns, and similar-user behavior to surface relevant products, increasing conversion rates by 10-30% and average order value through intelligent cross-sell and upsell.' },
      { q: 'What is AI-powered visual search in ecommerce?', a: 'Visual search lets shoppers upload images to find similar products using computer vision to match style, color, and shape—improving discovery for fashion, home decor, and visual categories.' },
      { q: 'How does AI optimize dynamic pricing?', a: 'AI adjusts prices in real-time based on demand, competitor pricing, inventory levels, customer behavior, and market conditions—maximizing revenue while maintaining competitiveness.' },
      { q: 'What is AI-driven inventory forecasting?', a: 'AI predicts demand using historical sales, seasonality, trends, weather, and events—reducing stockouts by 20-50% and excess inventory by 20-30%, improving working capital efficiency.' },
      { q: 'How do AI chatbots improve ecommerce customer service?', a: 'AI chatbots handle 60-80% of routine inquiries instantly—order tracking, returns, product questions—freeing human agents for complex issues and providing 24/7 support at scale.' },
      { q: 'What is AI-powered personalization in ecommerce?', a: 'AI personalizes homepage content, product listings, email campaigns, search results, and offers based on individual user behavior, preferences, and purchase history—creating unique experiences per shopper.' },
      { q: 'How does AI detect ecommerce fraud?', a: 'AI analyzes transaction patterns, device fingerprints, behavior, and network data in real-time to flag suspicious activity, reducing chargebacks and false positives compared to rules-based systems.' },
      { q: 'What is AI-generated product content?', a: 'AI writes product descriptions, titles, meta tags, and alt text at scale, improving SEO, consistency, and content coverage across large catalogs while saving manual effort.' },
      { q: 'How does AI improve ecommerce search?', a: 'AI-powered search understands natural language, synonyms, and intent, handles typos, and ranks results by relevance and conversion probability—improving search-to-purchase rates significantly.' },
      { q: 'How does AI handle product returns in ecommerce?', a: 'AI predicts return likelihood, automates return authorization, recommends exchanges over refunds, and analyzes return patterns to improve product descriptions and sizing guides.' },
      { q: 'What is AI-powered virtual try-on?', a: 'Virtual try-on uses AR and computer vision to let shoppers preview products—clothing, eyewear, makeup, furniture—on themselves or in their space, reducing returns and increasing purchase confidence.' },
    ],
  },
  {
    id: 'digital-commerce',
    icon: ShoppingCart,
    title: 'Digital Commerce',
    subtitle: 'AI in digital transactions, platforms, and channels',
    questions: [
      { q: 'What is digital commerce?', a: 'Digital commerce is the end-to-end process of selling products and services through digital channels—websites, mobile apps, marketplaces, social platforms, and voice assistants—encompassing discovery, transaction, fulfillment, and post-purchase engagement.' },
      { q: 'How does AI power conversational commerce?', a: 'AI chatbots and voice assistants enable shopping through natural language conversations—product discovery, comparison, recommendations, and checkout—across messaging apps, social platforms, and voice devices.' },
      { q: 'What is AI-driven social commerce?', a: 'AI enables shopping through social platforms by identifying products in posts, generating shoppable content, and personalizing product feeds within social apps—bridging content and commerce seamlessly.' },
      { q: 'How does AI optimize the checkout experience?', a: 'AI optimizes checkout by pre-filling forms, suggesting payment methods, detecting abandonment risk in real-time, and personalizing the flow—reducing cart abandonment by 10-25%.' },
      { q: 'What is AI-powered voice commerce?', a: 'Voice commerce lets customers shop through voice assistants like Alexa and Google Assistant, with AI handling natural language product search, comparison, and ordering without screens or keyboards.' },
      { q: 'How does AI enable headless commerce?', a: 'AI-powered headless commerce separates the frontend presentation layer from the backend commerce engine, using AI to deliver personalized experiences across any channel—web, mobile, IoT, AR—through APIs.' },
      { q: 'What is AI-driven subscription commerce?', a: 'AI optimizes subscription models by predicting churn, personalizing renewal offers, managing inventory for recurring deliveries, and recommending plan upgrades—increasing lifetime value and retention.' },
      { q: 'How does AI improve digital payment processing?', a: 'AI routes payments optimally, detects fraud in real-time, predicts payment failures, and enables alternative payment methods—improving authorization rates and reducing false declines.' },
      { q: 'What is AI-powered marketplace optimization?', a: 'AI optimizes marketplace listings, pricing, search ranking, and seller recommendations—helping sellers compete while marketplaces deliver relevant results to buyers.' },
      { q: 'How does AI enable B2B digital commerce?', a: 'AI powers B2B commerce through personalized catalogs, contract pricing, bulk ordering automation, predictive replenishment, and self-service portals—bringing consumer-grade experiences to business buyers.' },
      { q: 'What is AI-driven commerce analytics?', a: 'AI unifies data across channels to provide real-time insights on customer behavior, product performance, channel attribution, and revenue forecasting—enabling data-driven commerce decisions.' },
      { q: 'What is the future of autonomous commerce?', a: 'Autonomous commerce uses AI agents that shop on behalf of consumers—negotiating prices, managing subscriptions, comparing products, and curating entire shopping experiences with minimal human intervention.' },
    ],
  },
  {
    id: 'integration',
    icon: Plug,
    title: 'Integration',
    subtitle: 'Connecting AI with systems, data, and tools',
    questions: [
      { q: 'What is AI integration?', a: 'AI integration is the process of embedding AI capabilities—models, agents, predictions, automation—into existing business systems, workflows, and data pipelines to create measurable business value.' },
      { q: 'How do enterprises integrate AI with existing ERP systems?', a: 'AI integrates with ERP through APIs, middleware, and embedded ML modules that add predictive analytics, anomaly detection, and automation capabilities to existing business processes without rip-and-replace.' },
      { q: 'What is the role of APIs in AI integration?', a: 'APIs enable AI models to access data, invoke business logic, and trigger actions across systems. Well-designed APIs are the backbone of agentic AI—agents use APIs as tools to execute real-world workflows.' },
      { q: 'How does AI integrate with CRM systems?', a: 'AI enhances CRM with lead scoring, sentiment analysis, churn prediction, next-best-action recommendations, and automated data entry—making sales and service teams more effective.' },
      { q: 'What is AI middleware?', a: 'AI middleware sits between AI models and enterprise systems, handling data transformation, routing, security, monitoring, and fallback logic—simplifying integration and reducing custom code.' },
      { q: 'How do AI agents use tools and APIs?', a: 'Agentic AI systems call external tools and APIs to gather information, execute actions, and interact with systems—function calling lets LLMs invoke predefined functions with structured parameters and use the results in reasoning.' },
      { q: 'What is the challenge of integrating AI with legacy systems?', a: 'Legacy systems often lack APIs, use outdated data formats, and resist change. Integration requires abstraction layers, data extraction pipelines, and sometimes gradual modernization to expose functionality to AI.' },
      { q: 'How does AI integrate with data warehouses and lakes?', a: 'AI connects to data warehouses (Snowflake, BigQuery) and lakes through connectors and query engines, using the data for training, inference, RAG, and analytics while respecting governance policies.' },
      { q: 'What is MLOps and why does it matter for integration?', a: 'MLOps automates the ML lifecycle—development, deployment, monitoring, and retraining—ensuring models integrate reliably with production systems and remain accurate, compliant, and available.' },
      { q: 'How do enterprises build AI data pipelines?', a: 'AI data pipelines collect, clean, transform, and deliver data to models. Key components include data ingestion, validation, feature engineering, lineage tracking, and quality monitoring.' },
      { q: 'What is the role of event-driven architecture in AI?', a: 'Event-driven architectures let AI systems react to real-time events—transactions, sensor data, user actions—enabling instant predictions, alerts, and automated responses without polling.' },
      { q: 'How does AI integrate with customer support systems?', a: 'AI integrates with help desks, ticketing, and knowledge bases to triage tickets, suggest responses, auto-resolve issues, and surface relevant knowledge—reducing handle times and improving CSAT.' },
      { q: 'What is the cost of AI integration?', a: 'Integration costs range from $30K for simple API connections to $1M+ for enterprise-wide integration, covering middleware, data pipelines, security, monitoring, and ongoing maintenance.' },
    ],
  },
  {
    id: 'customer-acquisition',
    icon: Users,
    title: 'Customer Acquisition',
    subtitle: 'Using AI to find, convert, and retain customers',
    questions: [
      { q: 'How does AI improve customer acquisition?', a: 'AI improves acquisition by identifying high-intent prospects, personalizing outreach, optimizing ad targeting, predicting conversion likelihood, and automating lead nurturing—lowering customer acquisition cost (CAC) while increasing quality.' },
      { q: 'What is AI-driven lead scoring?', a: 'AI scores leads based on behavioral data, firmographics, engagement patterns, and historical conversion data—prioritizing sales effort on leads most likely to convert, increasing efficiency by 30-50%.' },
      { q: 'How does AI optimize ad spend and targeting?', a: 'AI optimizes bidding, targeting, creative, and budget allocation across ad platforms in real-time, improving ROAS by 20-40% while reducing manual campaign management overhead.' },
      { q: 'What is AI-powered content marketing?', a: 'AI generates and optimizes blog posts, ad copy, email content, and social posts, personalizes content per audience segment, and predicts which content will drive engagement and conversions.' },
      { q: 'How does AI enable predictive customer segmentation?', a: 'AI clusters customers by behavior, value, and lifecycle stage automatically, enabling targeted campaigns, personalized offers, and lookalike audience creation without manual segmentation.' },
      { q: 'What is AI-driven email marketing?', a: 'AI optimizes send timing, subject lines, content, product selection, and audience targeting for email campaigns, increasing open rates and revenue per email by 20-40%.' },
      { q: 'How does AI improve SEO for customer acquisition?', a: 'AI identifies keyword opportunities, generates optimized content, predicts search intent, and automates technical SEO—driving organic traffic growth and reducing dependence on paid acquisition.' },
      { q: 'What is AI-powered sales outreach?', a: 'AI personalizes cold outreach at scale, predicts the best time and channel to contact prospects, generates tailored messaging, and automates follow-ups—increasing reply rates and pipeline.' },
      { q: 'How does AI predict customer lifetime value (CLV)?', a: 'AI forecasts CLV using purchase history, engagement, demographics, and behavioral signals—enabling businesses to optimize acquisition spend toward high-value customers.' },
      { q: 'What is AI-driven churn prediction?', a: 'AI identifies at-risk customers by analyzing engagement decline, purchase gaps, support interactions, and sentiment—enabling proactive retention campaigns before churn occurs, reducing loss by 15-30%.' },
      { q: 'How does AI optimize the marketing funnel?', a: 'AI maps customer journeys, identifies drop-off points, personalizes experiences at each stage, and recommends interventions—improving conversion rates from top to bottom of funnel.' },
      { q: 'What is AI-powered lookalike audience targeting?', a: 'AI analyzes existing customer data to find prospects with similar characteristics and behaviors across ad platforms, expanding reach to high-probability converters.' },
    ],
  },
  {
    id: 'tech-debt',
    icon: Bug,
    title: 'Tech Debt',
    subtitle: 'Managing legacy systems and AI-driven modernization',
    questions: [
      { q: 'What is technical debt?', a: 'Technical debt is the implied cost of future rework caused by choosing expedient solutions over better long-term approaches. It accumulates through shortcuts, outdated architecture, skipped testing, and deferred maintenance—slowing development over time.' },
      { q: 'How does AI help manage technical debt?', a: 'AI identifies tech debt hotspots, prioritizes refactoring by impact, estimates effort, tracks debt trends, and even assists with code modernization—helping teams manage debt systematically rather than reactively.' },
      { q: 'How does AI help with legacy code modernization?', a: 'AI analyzes legacy codebases, suggests refactoring, translates between programming languages, generates documentation for undocumented systems, and identifies dependencies—accelerating modernization efforts that would take months manually.' },
      { q: 'What is AI-driven code refactoring?', a: 'AI identifies code smells, suggests improvements, generates refactored code, and validates that behavior is preserved—reducing the risk and effort of refactoring critical systems.' },
      { q: 'How does AI detect security vulnerabilities in legacy code?', a: 'AI scans code and dependencies for known vulnerabilities, predicts attack patterns, identifies insecure patterns, and recommends patches—shifting security left and reducing breach risk.' },
      { q: 'What is the cost of tech debt?', a: 'Tech debt slows feature delivery by 20-50%, increases bug rates, raises maintenance costs, makes hiring harder, and creates competitive risk. Studies estimate tech debt costs companies 10-20% of new feature development time.' },
      { q: 'How does AI automate testing for legacy systems?', a: 'AI generates test cases for untested code, identifies edge cases, predicts failure-prone areas, and creates regression tests—building safety nets before refactoring legacy systems.' },
      { q: 'What is AI-powered dependency management?', a: 'AI detects vulnerable dependencies, recommends safe upgrades, analyzes license compatibility, and predicts maintenance risks—reducing supply chain security exposure in legacy codebases.' },
      { q: 'How does AI help with database modernization?', a: 'AI analyzes schema design, optimizes queries, suggests indexes, predicts performance bottlenecks, and automates migration planning—modernizing data layers without disruption.' },
      { q: 'What is the role of AI in cloud migration?', a: 'AI assesses migration readiness, identifies dependencies, recommends right-sizing, predicts migration risks, and automates deployment—accelerating cloud migration while reducing errors.' },
      { q: 'How does AI help document undocumented systems?', a: 'AI reads code, generates API documentation, creates architecture diagrams, explains business logic, and produces onboarding guides—recovering knowledge from legacy systems before the experts retire.' },
      { q: 'How can teams prioritize tech debt reduction with AI?', a: 'AI scores debt items by business impact, risk, and effort, tracks debt-to-feature ratios, and recommends refactoring sprints—ensuring debt reduction is data-driven rather than opinion-based.' },
    ],
  },
  {
    id: 'current-adoption',
    icon: TrendingUp,
    title: 'Current AI Adoption',
    subtitle: 'Where AI stands today across industries',
    questions: [
      { q: 'What is the current state of enterprise AI adoption?', a: 'As of 2026, approximately 65-75% of enterprises have AI initiatives underway, but only 20-30% have moved beyond pilots to production scale. Adoption is led by tech, finance, and retail, with healthcare and manufacturing accelerating rapidly.' },
      { q: 'Which industries lead in AI adoption?', a: 'Technology, financial services, retail/e-commerce, and telecommunications lead AI adoption. Healthcare, manufacturing, and logistics are fast followers. Government and education lag due to regulatory and budget constraints.' },
      { q: 'What percentage of companies use generative AI?', a: 'Generative AI adoption surged from under 20% in 2023 to over 60% by 2025-2026, with marketing, content creation, code generation, and customer service as the most common use cases.' },
      { q: 'How many enterprises have deployed agentic AI?', a: 'Agentic AI is early-stage: roughly 10-20% of enterprises are piloting or deploying AI agents as of 2026, with rapid growth expected as platforms mature and trust frameworks develop.' },
      { q: 'What are the most common AI use cases today?', a: 'Top use cases include chatbots and virtual assistants, content generation, predictive analytics, fraud detection, recommendation engines, process automation, code generation, and image recognition.' },
      { q: 'How has AI adoption changed since ChatGPT?', a: 'ChatGPT democratized AI access, shifted focus from predictive ML to generative AI, accelerated enterprise budgets, and moved AI from data science teams to mainstream business units—transforming AI from niche to necessity.' },
      { q: 'What is the average AI budget for enterprises?', a: 'Enterprise AI spending varies widely: mid-market companies spend $100K-$1M annually, while large enterprises invest $5M-$50M+. AI budgets are growing 25-40% year over year as a share of IT spend.' },
      { q: 'How many employees use AI tools at work?', a: 'Studies show 50-70% of knowledge workers use AI tools at least weekly, with highest adoption among developers, marketers, and analysts. However, many use unsanctioned "shadow AI" tools, creating security risks.' },
      { q: 'What is the AI skills gap?', a: 'There is a significant shortage of AI talent—data scientists, ML engineers, MLOps specialists, and AI product managers. The gap is narrowing as training programs expand, but demand still outpaces supply.' },
      { q: 'How are small businesses adopting AI?', a: 'Small businesses adopt AI through SaaS tools—content generators, chatbots, marketing automation, and analytics—rather than building custom models. Affordable, no-code AI tools are democratizing access.' },
      { q: 'What is the adoption gap between large and small companies?', a: 'Large enterprises invest in custom AI, dedicated teams, and infrastructure. Small businesses rely on off-the-shelf tools. The gap is narrowing as AI-as-a-service platforms reduce cost and complexity barriers.' },
      { q: 'How is AI adoption measured?', a: 'Adoption is measured by use case deployment count, production vs. pilot ratio, employee usage rates, AI-driven revenue, cost savings, model count in production, and time-to-value metrics.' },
      { q: 'What drives AI adoption success?', a: 'Success correlates with executive sponsorship, data readiness, cross-functional teams, clear use-case prioritization, investment in MLOps, change management, and a culture of experimentation and learning.' },
    ],
  },
  {
    id: 'issues',
    icon: AlertTriangle,
    title: 'Issues & Challenges',
    subtitle: 'Risks, barriers, and unsolved problems',
    questions: [
      { q: 'What are the biggest challenges of enterprise AI adoption?', a: 'Data silos, legacy system integration, talent shortages, regulatory compliance, change management, ROI measurement, security concerns, and scaling from pilot to production are the most common barriers to enterprise AI adoption.' },
      { q: 'What are the risks of enterprise AI?', a: 'Risks include data breaches, model bias, regulatory violations, reputational damage, over-reliance on automation, vendor lock-in, hallucinations in critical decisions, and job displacement without proper change management.' },
      { q: 'How does AI bias affect businesses?', a: 'AI bias can discriminate in hiring, lending, healthcare, and criminal justice, leading to legal liability, reputational damage, and unfair outcomes. Mitigation requires diverse training data, bias detection, regular audits, and governance.' },
      { q: 'What are the data privacy concerns with AI?', a: 'AI systems process vast personal data, raising concerns about consent, data collection, retention, cross-border transfer, and unauthorized access. Compliance with GDPR, CCPA, HIPAA, and emerging AI regulations is essential.' },
      { q: 'What is the AI black box problem?', a: 'Many AI models, especially deep neural networks, are not interpretable—making it hard to understand why they made a decision. This creates challenges for trust, debugging, compliance, and accountability in regulated domains.' },
      { q: 'What are the security risks of AI systems?', a: 'AI faces unique threats: prompt injection, model theft, data poisoning, adversarial attacks, model inversion, and supply chain attacks on ML dependencies—requiring AI-specific security practices beyond traditional cybersecurity.' },
      { q: 'How does AI impact jobs and employment?', a: 'AI automates routine tasks, displacing some roles while creating new ones in AI management, data strategy, and human-AI collaboration. Net impact is debated, but reskilling programs and transition support are essential.' },
      { q: 'What is the AI regulation landscape?', a: 'The EU AI Act imposes risk-based requirements, the US uses sector-specific guidance and executive orders, and other regions vary. Expect comprehensive AI legislation globally focusing on transparency, accountability, and risk assessment.' },
      { q: 'What are the ethical concerns of AI?', a: 'Key ethical concerns include fairness and bias, transparency, accountability, privacy, autonomy and human agency, concentration of power, environmental impact of compute, and the potential for misuse in surveillance and disinformation.' },
      { q: 'How does AI impact the environment?', a: 'Training large AI models consumes significant energy and water. A single large model can emit hundreds of tons of CO2. Sustainable AI requires efficient models, green data centers, and responsible compute usage.' },
      { q: 'What is the problem of AI vendor lock-in?', a: 'Relying on a single AI provider creates dependency, pricing power, and migration risk. Mitigation requires multi-provider strategies, open standards, portable architectures, and exit plans built into AI strategy.' },
      { q: 'What are the challenges of scaling AI from pilot to production?', a: 'Scaling requires MLOps infrastructure, data quality at scale, monitoring frameworks, cross-functional teams, change management, and executive sponsorship. Most pilots fail to scale due to organizational, not technical, barriers.' },
      { q: 'What is the AI trust problem?', a: 'Users and businesses struggle to trust AI due to hallucinations, unpredictability, bias, and lack of transparency. Building trust requires explainability, human oversight, provenance tracking, consistent performance, and transparent communication about limitations.' },
    ],
  },
];

const ALL_QUESTIONS = SECTIONS.flatMap(s => s.questions);
const FAQ_SCHEMA = ALL_QUESTIONS.map(item => ({
  question: item.q,
  answer: item.a,
}));

export default function Top100Questions() {
  const [openId, setOpenId] = useState(null);
  const [openSection, setOpenSection] = useState('ai');

  return (
    <>
      <PageMeta
        title="Top 100 Questions: AI, Ecommerce, Digital Commerce & Integration"
        description="The 100 most important questions about AI, ecommerce, digital commerce, integration, customer acquisition, tech debt, current adoption, and challenges—with expert answers by Sufi Khan Sulaiman."
        url="/top-100-questions"
        keywords={['AI questions', 'ecommerce AI', 'digital commerce', 'AI integration', 'customer acquisition AI', 'tech debt', 'AI adoption', 'AI challenges', 'AI FAQ']}
        faq={FAQ_SCHEMA}
        breadcrumbs={[{ name: 'Company', url: '/AboutUs' }, { name: 'Top 100 AI Questions', url: '/top-100-questions' }]}
      />

      <BreadcrumbNav items={[{ label: 'Company', page: 'AboutUs' }, { label: 'Top 100 AI Questions' }]} />

      <div className="max-w-5xl mx-auto px-6">
        {/* Hero */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#8B2EE5]/10 text-[#8B2EE5] text-sm font-semibold mb-4">
            <HelpCircle className="w-4 h-4" />
            100 Essential Questions
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 leading-tight">
            Top 100 Questions: AI, Ecommerce, Digital Commerce & Integration
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-5">
            The definitive guide to the most pressing questions about AI fundamentals, ecommerce,
            digital commerce, integration, customer acquisition, tech debt, current adoption, and
            critical issues—with expert answers.
          </p>
          <p className="text-sm text-gray-500">
            By{' '}
            <a
              href={AUTHOR.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#8B2EE5] hover:text-[#7325C4] font-semibold underline decoration-[#8B2EE5]/30 hover:decoration-[#8B2EE5] transition-colors"
            >
              {AUTHOR.name}
            </a>
          </p>
        </motion.div>

        {/* Section Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {SECTIONS.map((section) => {
            const Icon = section.icon;
            const active = openSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => { setOpenSection(section.id); setOpenId(null); }}
                className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                  active
                    ? 'bg-[#8B2EE5] text-white shadow-md'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Icon className="w-4 h-4" />
                {section.title}
                <span className={`text-xs px-1.5 py-0.5 rounded-full ${active ? 'bg-white/20' : 'bg-gray-200'}`}>
                  {section.questions.length}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Section */}
        {SECTIONS.filter(s => s.id === openSection).map((section) => {
          const Icon = section.icon;
          return (
            <motion.div
              key={section.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-[#8B2EE5]/10 flex items-center justify-center">
                  <Icon className="w-5 h-5 text-[#8B2EE5]" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                  <p className="text-sm text-gray-500">{section.subtitle}</p>
                </div>
              </div>

              <div className="space-y-3">
                {section.questions.map((item, idx) => {
                  const itemId = `${section.id}-${idx}`;
                  const isOpen = openId === itemId;
                  return (
                    <div
                      key={itemId}
                      className="border border-gray-200 rounded-xl overflow-hidden bg-white hover:border-[#8B2EE5]/40 transition-colors"
                    >
                      <button
                        onClick={() => setOpenId(isOpen ? null : itemId)}
                        className="flex items-start gap-4 w-full text-left p-5"
                      >
                        <span className="flex-shrink-0 w-7 h-7 rounded-lg bg-[#8B2EE5]/10 text-[#8B2EE5] text-xs font-bold flex items-center justify-center mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="flex-1 font-semibold text-gray-900 text-base">
                          {item.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-gray-400 flex-shrink-0 mt-1 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <motion.div
                        initial={false}
                        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
                        transition={{ duration: 0.25 }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-5 pl-16 text-gray-600 leading-relaxed">
                          {item.a}
                        </p>
                      </motion.div>
                    </div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}

        <div className="my-12">
          <InlineRelatedGuides
            currentPage="Top100Questions"
            relatedPages={['AgenticAI', 'EnterpriseSuite', 'AIAutomation', 'Blog']}
            title="Deep Dive Further"
          />
        </div>
      </div>

      <RelatedContent
        currentPage="Top100Questions"
        category="product"
        crossCategories={['blog']}
        title="Keep Exploring"
      />
    </>
  );
}