import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown, HelpCircle, Building2, Brain, ShoppingBag, Code2 } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InlineRelatedGuides from '@/components/seo/InlineRelatedGuides';

const SECTIONS = [
  {
    id: 'enterprise',
    icon: Building2,
    title: 'Enterprise AI',
    subtitle: 'How AI transforms large organizations',
    questions: [
      { q: 'What is enterprise AI?', a: 'Enterprise AI is the deployment of artificial intelligence technologies—machine learning, NLP, computer vision, and agentic systems—within large organizations to automate workflows, enhance decision-making, and drive operational efficiency at scale.' },
      { q: 'How does AI improve enterprise productivity?', a: 'AI automates repetitive tasks, accelerates data analysis, and augments human decision-making, allowing employees to focus on higher-value work. Studies show 40-70% productivity gains in AI-optimized workflows.' },
      { q: 'What are the biggest challenges of enterprise AI adoption?', a: 'Data silos, legacy system integration, talent shortages, regulatory compliance, change management, and ROI measurement are the most common barriers to enterprise AI adoption.' },
      { q: 'How long does it take to implement AI in an enterprise?', a: 'Pilot projects typically take 3-6 months, while full-scale enterprise AI deployment spans 12-24 months depending on data readiness, infrastructure, and organizational complexity.' },
      { q: 'What is the ROI of enterprise AI?', a: 'Enterprise AI delivers ROI through cost reduction (30-50% on automated processes), revenue growth (10-20% from personalization and predictive analytics), and risk mitigation. Most organizations see positive ROI within 12-18 months.' },
      { q: 'How do enterprises choose the right AI use cases?', a: 'Prioritize use cases by business impact, data availability, technical feasibility, and stakeholder alignment. Start with quick wins in high-volume, rules-based processes before tackling complex, judgment-heavy workflows.' },
      { q: 'What is AI governance in the enterprise?', a: 'AI governance is the framework of policies, processes, and controls that ensure AI systems are deployed ethically, compliantly, and transparently—covering data privacy, model accountability, bias monitoring, and audit trails.' },
      { q: 'How do enterprises handle AI data privacy?', a: 'Enterprises protect data privacy through encryption, access controls, data minimization, differential privacy, on-premise or private cloud deployment, and compliance with regulations like GDPR, CCPA, and HIPAA.' },
      { q: 'What is the difference between AI and agentic AI in enterprise?', a: 'Traditional AI performs specific tasks based on prompts or patterns. Agentic AI autonomously plans, decides, and executes multi-step workflows using tools, memory, and reasoning—acting as a digital worker rather than a tool.' },
      { q: 'How do enterprises scale AI from pilot to production?', a: 'Scaling requires MLOps infrastructure, reusable model pipelines, data quality pipelines, monitoring frameworks, cross-functional AI teams, and executive sponsorship to move beyond isolated pilots.' },
      { q: 'What role does cloud play in enterprise AI?', a: 'Cloud platforms provide scalable compute (GPUs/TPUs), managed ML services, pre-trained models, and MLOps tooling, reducing infrastructure costs and accelerating deployment.' },
      { q: 'How do enterprises measure AI success?', a: 'Key metrics include cost savings, revenue impact, process cycle time reduction, error rate reduction, user adoption rates, model accuracy, and time-to-value.' },
      { q: 'What is the cost of implementing enterprise AI?', a: 'Costs range from $50K for small pilots to $5M+ for enterprise-wide deployments, covering data engineering, model development, infrastructure, talent, and ongoing maintenance.' },
      { q: 'How do enterprises build AI teams?', a: 'Effective AI teams combine data scientists, ML engineers, data engineers, MLOps specialists, domain experts, product managers, and AI ethicists working in cross-functional pods.' },
      { q: 'What is MLOps and why does it matter for enterprises?', a: 'MLOps (Machine Learning Operations) is the practice of automating the ML lifecycle—development, deployment, monitoring, and retraining—ensuring models remain accurate, reliable, and compliant in production.' },
      { q: 'How do enterprises ensure AI fairness and reduce bias?', a: 'Enterprises mitigate bias through diverse training data, fairness metrics, bias detection tools, regular audits, diverse AI teams, and governance committees that review model outcomes.' },
      { q: 'What is explainable AI (XAI) and why do enterprises need it?', a: 'Explainable AI makes model decisions interpretable to humans, enabling trust, regulatory compliance, debugging, and accountability—critical in regulated industries like finance and healthcare.' },
      { q: 'How do enterprises integrate AI with existing ERP systems?', a: 'AI integrates with ERP through APIs, middleware, and embedded ML modules that add predictive analytics, anomaly detection, and automation capabilities to existing business processes.' },
      { q: 'What are the risks of enterprise AI?', a: 'Risks include data breaches, model bias, regulatory violations, reputational damage, over-reliance on automation, vendor lock-in, and job displacement without proper change management.' },
      { q: 'How do enterprises choose between building vs buying AI?', a: 'Build when the use case is a core differentiator with proprietary data; buy when off-the-shelf solutions meet needs faster and cheaper. Most enterprises adopt a hybrid approach.' },
      { q: 'What is the role of the CIO in enterprise AI?', a: 'The CIO drives AI strategy, infrastructure investment, vendor selection, data governance, talent development, and ensures AI initiatives align with business objectives.' },
      { q: 'How do enterprises handle AI vendor selection?', a: 'Evaluate vendors on security certifications, model performance, integration capabilities, pricing, scalability, support, and roadmap alignment with enterprise needs.' },
      { q: 'What is the impact of AI on enterprise jobs?', a: 'AI augments rather than replaces most roles, automating routine tasks while creating new positions in AI management, data strategy, and human-AI collaboration. Reskilling programs are essential.' },
      { q: 'How do enterprises future-proof their AI investments?', a: 'Future-proofing requires modular architectures, open standards, vendor portability, continuous learning programs, and governance frameworks that adapt to evolving technology and regulations.' },
      { q: 'What is the enterprise AI maturity model?', a: 'Maturity progresses from ad-hoc experiments, to standardized pilots, to integrated production systems, to scaled AI operations, and finally to AI-first organizations where AI is embedded in every process.' },
    ],
  },
  {
    id: 'ai-future',
    icon: Brain,
    title: 'The Future of AI',
    subtitle: 'Where artificial intelligence is heading',
    questions: [
      { q: 'What is the future of AI in the next 5 years?', a: 'Expect widespread agentic AI adoption, multimodal models that process text, image, audio, and video seamlessly, personalized AI assistants, and AI embedded in every software product and business workflow.' },
      { q: 'Will AI achieve artificial general intelligence (AGI)?', a: 'AGI—AI that matches or exceeds human intelligence across all domains—remains a long-term research goal. Experts debate timelines from 5 to 50+ years, with significant technical and ethical hurdles remaining.' },
      { q: 'How will AI change the workplace by 2030?', a: 'AI will automate 30-40% of routine tasks, create new roles in AI oversight and data strategy, and shift human work toward creativity, strategy, empathy, and complex problem-solving.' },
      { q: 'What are the most promising AI research directions?', a: 'Key areas include agentic systems, multimodal learning, few-shot and zero-shot learning, neuro-symbolic AI, quantum machine learning, and AI safety and alignment research.' },
      { q: 'How will AI impact healthcare in the future?', a: 'AI will enable personalized medicine, early disease detection, drug discovery acceleration, robotic surgery assistance, and continuous health monitoring through wearable-integrated AI.' },
      { q: 'What is the future of AI regulation?', a: 'Expect comprehensive AI legislation globally—EU AI Act, US executive orders, and international standards—focusing on transparency, accountability, risk assessment, and sector-specific requirements.' },
      { q: 'Will AI replace human creativity?', a: 'AI will augment creativity by generating ideas, drafts, and variations, but human judgment, emotional intelligence, and cultural context remain essential for truly original creative work.' },
      { q: 'How will AI evolve beyond large language models?', a: 'Future AI will combine LLMs with reasoning engines, tool use, memory, perception, and action capabilities—moving from text generators to autonomous agents that interact with the physical and digital world.' },
      { q: 'What is the future of AI in education?', a: 'AI will deliver personalized learning paths, intelligent tutoring, automated grading, and adaptive curricula, making quality education accessible to billions while freeing teachers for mentorship.' },
      { q: 'How will AI impact climate change?', a: 'AI optimizes energy grids, accelerates clean energy research, improves climate modeling, and reduces industrial emissions—but AI data centers themselves consume significant energy, requiring sustainable computing solutions.' },
      { q: 'What are the ethical risks of future AI?', a: 'Key risks include mass misinformation, autonomous weapons, surveillance overreach, economic inequality, loss of human agency, and the potential for advanced AI systems to act in misaligned ways.' },
      { q: 'How will AI transform transportation?', a: 'AI will enable autonomous vehicles, optimized traffic management, predictive maintenance, and on-demand mobility services, reducing accidents and emissions while reshaping urban planning.' },
      { q: 'What is the future of AI-human collaboration?', a: 'The future is collaborative intelligence—humans and AI working as partners, with AI handling data processing and pattern recognition while humans provide strategy, ethics, and contextual judgment.' },
      { q: 'How will AI impact democracy and governance?', a: 'AI can improve public services and policy analysis but poses risks to democratic processes through deepfakes, microtargeting, and algorithmic bias—requiring transparency and civic AI literacy.' },
      { q: 'What is the future of AI hardware?', a: 'Expect specialized AI chips (NPUs, TPUs), neuromorphic computing, optical computing, and quantum processors that dramatically increase AI efficiency and reduce energy consumption.' },
      { q: 'How will AI change scientific research?', a: 'AI accelerates discovery by analyzing massive datasets, generating hypotheses, simulating experiments, and identifying patterns—already transforming drug discovery, materials science, and astronomy.' },
      { q: 'What is the future of AI personalization?', a: 'AI will deliver hyper-personalized experiences across all digital interactions—content, products, services, and interfaces—while raising important questions about privacy, consent, and filter bubbles.' },
      { q: 'How will AI impact global inequality?', a: 'AI could widen inequality if access is concentrated among wealthy nations and companies, but could also democratize capabilities—education, healthcare, financial services—for underserved populations.' },
      { q: 'What is the future of AI safety research?', a: 'AI safety focuses on alignment (ensuring AI goals match human values), robustness, interpretability, and control—increasingly critical as AI systems become more capable and autonomous.' },
      { q: 'How will AI transform financial services?', a: 'AI will power real-time fraud detection, personalized wealth management, algorithmic trading, automated underwriting, and autonomous financial agents that manage money on behalf of users.' },
      { q: 'What is the future of AI and copyright?', a: 'AI-generated content raises unresolved copyright questions around training data, output ownership, and fair use—expect evolving legal frameworks and new licensing models.' },
      { q: 'How will AI change how we interact with technology?', a: 'Interfaces will shift from screens and clicks to natural language, gestures, and ambient computing—AI will be invisible, proactive, and conversational rather than tool-based.' },
      { q: 'What is the future of open-source AI?', a: 'Open-source models will continue to democratize AI, but the most capable systems may remain proprietary due to compute costs, creating tension between accessibility and capability.' },
      { q: 'How will AI impact national security?', a: 'AI transforms defense through autonomous systems, intelligence analysis, cyber warfare, and disinformation detection—raising urgent questions about arms control and AI weaponization.' },
      { q: 'What skills will matter most in an AI-driven future?', a: 'Critical thinking, adaptability, emotional intelligence, systems thinking, ethical reasoning, and the ability to collaborate with AI tools will be more valuable than purely technical or routine cognitive skills.' },
    ],
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'AI in Ecommerce',
    subtitle: 'How AI is reshaping online retail',
    questions: [
      { q: 'How is AI used in ecommerce?', a: 'AI powers product recommendations, search, chatbots, dynamic pricing, inventory forecasting, fraud detection, visual search, and personalized marketing—touching every stage of the customer journey.' },
      { q: 'How does AI improve product recommendations?', a: 'AI analyzes browsing history, purchase patterns, and similar-user behavior to surface relevant products, increasing conversion rates by 10-30% and average order value through cross-sell and upsell.' },
      { q: 'What is AI-powered visual search in ecommerce?', a: 'Visual search lets shoppers upload images to find similar products, using computer vision to match style, color, and shape—improving discovery for fashion, home decor, and visual categories.' },
      { q: 'How does AI optimize dynamic pricing?', a: 'AI adjusts prices in real-time based on demand, competitor pricing, inventory levels, customer behavior, and market conditions—maximizing revenue while maintaining competitiveness.' },
      { q: 'What is AI-driven inventory forecasting?', a: 'AI predicts demand using historical sales, seasonality, trends, weather, and events—reducing stockouts by 20-50% and excess inventory by 20-30%, improving working capital efficiency.' },
      { q: 'How do AI chatbots improve ecommerce customer service?', a: 'AI chatbots handle 60-80% of routine inquiries instantly—order tracking, returns, product questions—freeing human agents for complex issues and providing 24/7 support.' },
      { q: 'What is AI-powered personalization in ecommerce?', a: 'AI personalizes homepage content, product listings, email campaigns, search results, and offers based on individual user behavior, preferences, and purchase history.' },
      { q: 'How does AI detect ecommerce fraud?', a: 'AI analyzes transaction patterns, device fingerprints, behavior, and network data in real-time to flag suspicious activity, reducing chargebacks and false positives compared to rules-based systems.' },
      { q: 'What is AI-generated product content?', a: 'AI writes product descriptions, titles, meta tags, and alt text at scale, improving SEO, consistency, and content coverage across large catalogs while saving manual effort.' },
      { q: 'How does AI improve ecommerce search?', a: 'AI-powered search understands natural language, synonyms, and intent, handles typos, and ranks results by relevance and conversion probability—improving search-to-purchase rates significantly.' },
      { q: 'What is AI-driven customer segmentation?', a: 'AI clusters customers by behavior, value, and lifecycle stage automatically, enabling targeted campaigns, personalized offers, and churn prediction without manual segmentation.' },
      { q: 'How does AI predict customer churn in ecommerce?', a: 'AI identifies at-risk customers by analyzing engagement decline, purchase gaps, support interactions, and sentiment—enabling proactive retention campaigns before churn occurs.' },
      { q: 'What is AI-powered demand forecasting?', a: 'AI forecasts product demand using ML models that incorporate sales history, promotions, seasonality, market trends, and external signals—improving forecast accuracy by 15-30% over traditional methods.' },
      { q: 'How does AI enhance the ecommerce checkout experience?', a: 'AI optimizes checkout by pre-filling forms, suggesting payment methods, detecting abandonment risk, and personalizing the flow—reducing cart abandonment by 10-25%.' },
      { q: 'What is AI-driven email marketing in ecommerce?', a: 'AI optimizes send timing, subject lines, content, product selection, and audience targeting for email campaigns, increasing open rates and revenue per email.' },
      { q: 'How does AI handle product returns in ecommerce?', a: 'AI predicts return likelihood, automates return authorization, recommends exchanges over refunds, and analyzes return patterns to improve product descriptions and sizing guides.' },
      { q: 'What is AI-powered social commerce?', a: 'AI enables shopping through social platforms by identifying products in posts, generating shoppable content, and personalizing product feeds within social apps.' },
      { q: 'How does AI optimize ecommerce logistics?', a: 'AI optimizes warehouse routing, delivery routes, carrier selection, and last-mile distribution—reducing shipping costs and delivery times while improving fulfillment accuracy.' },
      { q: 'What is AI-driven voice commerce?', a: 'Voice commerce lets customers shop through voice assistants like Alexa and Google Assistant, with AI handling natural language product search, comparison, and ordering.' },
      { q: 'How does AI improve product reviews and ratings?', a: 'AI summarizes reviews, detects fake reviews, extracts pros and cons, and surfaces the most helpful feedback—helping shoppers make faster, more confident purchase decisions.' },
      { q: 'What is AI-powered virtual try-on?', a: 'Virtual try-on uses AR and computer vision to let shoppers preview products—clothing, eyewear, makeup, furniture—on themselves or in their space, reducing returns and increasing confidence.' },
      { q: 'How does AI optimize ecommerce ad spend?', a: 'AI optimizes bidding, targeting, creative, and budget allocation across ad platforms in real-time, improving ROAS by 20-40% while reducing manual campaign management.' },
      { q: 'What is AI-driven price optimization?', a: 'AI determines optimal prices per product, channel, and customer segment by modeling price elasticity, competitor behavior, and demand curves—maximizing margin and volume.' },
      { q: 'How will generative AI transform ecommerce?', a: 'Generative AI will create product images, lifestyle scenes, marketing copy, personalized storefronts, and conversational shopping assistants—reducing content production costs and enabling hyper-personalization.' },
      { q: 'What is the future of AI in ecommerce?', a: 'The future is autonomous commerce—AI agents that shop on behalf of consumers, negotiate prices, manage subscriptions, and curate entire shopping experiences with minimal human intervention.' },
    ],
  },
  {
    id: 'development',
    icon: Code2,
    title: 'AI in Software Development',
    subtitle: 'How AI is changing how we build software',
    questions: [
      { q: 'How is AI used in software development?', a: 'AI assists with code generation, bug detection, code review, testing, documentation, debugging, and project management—accelerating development cycles and improving code quality.' },
      { q: 'What is AI pair programming?', a: 'AI pair programming tools like GitHub Copilot and Cursor suggest code in real-time, autocomplete functions, explain code, and generate entire features from natural language descriptions.' },
      { q: 'How does AI improve code quality?', a: 'AI detects bugs, security vulnerabilities, code smells, and anti-patterns through static analysis and learned patterns—catching issues before they reach production.' },
      { q: 'What is AI-powered code generation?', a: 'AI generates code from natural language prompts, boilerplate, tests, and documentation—reducing manual coding by 30-50% for routine tasks while developers focus on architecture and logic.' },
      { q: 'How does AI automate software testing?', a: 'AI generates test cases, identifies edge cases, predicts failure-prone code, and automates UI/API testing—improving test coverage while reducing manual test authoring effort.' },
      { q: 'What is AI-driven code review?', a: 'AI reviews pull requests for bugs, style violations, security issues, and best practices—providing instant feedback before human review and reducing review cycles by 40-60%.' },
      { q: 'How does AI help with debugging?', a: 'AI analyzes error logs, traces, and code context to identify root causes, suggest fixes, and explain complex bugs—reducing mean time to resolution significantly.' },
      { q: 'What is AI-powered documentation generation?', a: 'AI generates API docs, code comments, README files, and architecture diagrams from code analysis—keeping documentation in sync with code automatically.' },
      { q: 'How does AI improve DevOps?', a: 'AI predicts deployment failures, optimizes CI/CD pipelines, automates incident response, and monitors system health—reducing downtime and operational toil.' },
      { q: 'What is AI-driven project management?', a: 'AI estimates task effort, predicts project risks, allocates resources, and tracks progress—helping teams deliver on time by identifying bottlenecks early.' },
      { q: 'How does AI help with legacy code modernization?', a: 'AI analyzes legacy codebases, suggests refactoring, translates between languages, and documents undocumented systems—accelerating modernization efforts that would take months manually.' },
      { q: 'What is AI-powered API design?', a: 'AI suggests API endpoints, generates OpenAPI specs, validates schema consistency, and predicts usage patterns—improving API design quality and developer experience.' },
      { q: 'How does AI improve software security?', a: 'AI detects vulnerabilities in code and dependencies, predicts attack patterns, automates patching, and monitors for anomalies—shifting security left in the development lifecycle.' },
      { q: 'What is AI-driven database optimization?', a: 'AI optimizes queries, indexes, and schema design, predicts performance bottlenecks, and automates database tuning—improving application performance without manual DBA effort.' },
      { q: 'How does AI help with technical debt?', a: 'AI identifies technical debt hotspots, prioritizes refactoring, estimates impact, and tracks debt trends—helping teams manage debt systematically rather than reactively.' },
      { q: 'What is AI-powered requirements analysis?', a: 'AI analyzes requirements documents, identifies ambiguities, generates user stories, and validates completeness—reducing miscommunication between stakeholders and developers.' },
      { q: 'How does AI accelerate onboarding for developers?', a: 'AI answers questions about codebases, explains architecture, generates onboarding guides, and provides contextual documentation—reducing ramp-up time for new team members by 40-60%.' },
      { q: 'What is AI-driven microservices architecture?', a: 'AI helps design service boundaries, predicts coupling, monitors service health, and suggests architectural improvements—enabling more resilient and scalable microservices systems.' },
      { q: 'How does AI help with open-source dependency management?', a: 'AI detects vulnerable dependencies, recommends safe upgrades, analyzes license compatibility, and predicts maintenance risks—reducing supply chain security exposure.' },
      { q: 'What is AI-powered UI/UX development?', a: 'AI generates UI components from designs, suggests layouts, creates responsive code, and tests usability—bridging the gap between design and development.' },
      { q: 'How does AI improve code search and navigation?', a: 'AI-powered search understands natural language queries, finds relevant code across repositories, and explains relationships between components—making large codebases navigable.' },
      { q: 'What is the impact of AI on developer productivity?', a: 'AI tools increase developer productivity by 20-50% for routine tasks, with the largest gains in testing, documentation, boilerplate code, and debugging.' },
      { q: 'Will AI replace software developers?', a: 'AI will not replace developers but will transform the role—shifting focus from writing code to system design, problem decomposition, AI orchestration, and code review. Developers who leverage AI will outperform those who do not.' },
      { q: 'How should development teams adopt AI tools?', a: 'Start with code completion and code review tools, establish guidelines for AI-generated code quality and security, train teams on effective prompting, and measure impact on productivity and quality.' },
      { q: 'What is the future of AI in software development?', a: 'The future is AI-native development—where developers describe intent in natural language, AI generates and tests implementations, and human developers focus on architecture, requirements, and oversight of autonomous coding agents.' },
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
  const [openSection, setOpenSection] = useState('enterprise');

  return (
    <>
      <PageMeta
        title="Top 100 Questions: Enterprise AI, Ecommerce & Development"
        description="The 100 most important questions about AI in enterprise, the future of AI, ecommerce, and software development—with expert answers on adoption, strategy, tools, and trends."
        url="/top-100-questions"
        keywords={['enterprise AI questions', 'AI future questions', 'AI ecommerce', 'AI development', 'AI FAQ', 'artificial intelligence Q&A']}
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
            Top 100 Questions: Enterprise AI, Ecommerce & Development
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            The definitive guide to the most pressing questions about AI in enterprise, the future of
            artificial intelligence, AI in ecommerce, and AI in software development—with expert answers.
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