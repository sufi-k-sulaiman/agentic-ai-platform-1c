/**
 * Centralized Blog FAQ Registry
 *
 * Provides FAQ data for BlogPosting schema (FAQPage JSON-LD) across all blog posts.
 * PageMeta.jsx auto-looks up FAQs from here when a blog post doesn't pass its own `faq` prop.
 *
 * Specific FAQs are defined for key posts; the rest are generated from title/description.
 */
import { seoPages } from './seoConfig';

// ─── Specific FAQs for high-priority blog posts ───
const specificFAQs = {
  BlogAgenticVsTraditionalAI: [
    { question: 'What is the difference between agentic AI and traditional AI?', answer: 'Agentic AI autonomously plans, decides, and executes multi-step workflows using tools and external systems. Traditional AI performs single-task predictions or classifications within predefined rules. Agentic AI adapts to new situations, while traditional AI follows fixed patterns.' },
    { question: 'When should I use agentic AI vs traditional AI?', answer: 'Use agentic AI for complex, multi-step workflows requiring reasoning, tool use, and adaptive decision-making. Use traditional AI for well-defined, repetitive tasks like classification, regression, and anomaly detection where rules are clear and stable.' },
    { question: 'Is agentic AI more expensive than traditional AI?', answer: 'Agentic AI has higher per-task costs due to LLM inference and tool calls, but delivers greater ROI through automation of complex workflows. Traditional AI is cheaper per inference but limited in scope. Most enterprises use a hybrid approach.' },
    { question: 'Can I migrate from traditional AI to agentic AI?', answer: 'Yes. Start by wrapping existing traditional AI models as tools for agentic AI agents. Gradually introduce agents that orchestrate those models, then expand to fully autonomous workflows as confidence grows.' },
  ],
  BlogMultiAgentSystems: [
    { question: 'What is a multi-agent system in AI?', answer: 'A multi-agent system is an architecture where multiple AI agents collaborate, each with specialized roles, to solve complex problems. Agents communicate, delegate tasks, share context, and coordinate to achieve outcomes no single agent could handle alone.' },
    { question: 'How do AI agents communicate with each other?', answer: 'AI agents communicate via message passing, shared memory, event buses, and structured protocols. Common patterns include request-response, publish-subscribe, and blackboard architectures for coordination.' },
    { question: 'What are the benefits of multi-agent systems?', answer: 'Multi-agent systems enable specialization (each agent excels at one task), parallelism (agents work simultaneously), resilience (failure of one agent doesn\'t break the system), and scalability (add agents as workloads grow).' },
    { question: 'How do I design a multi-agent architecture?', answer: 'Start by identifying distinct roles, define communication protocols, establish a coordination strategy (hierarchical, peer-to-peer, or blackboard), and implement observability to track agent interactions and system health.' },
  ],
  BlogGenerativeAIIntro: [
    { question: 'What is generative AI?', answer: 'Generative AI is a class of artificial intelligence that creates new content—text, images, code, audio, or video—by learning patterns from training data. Models like GPT, Claude, and DALL-E generate outputs based on prompts.' },
    { question: 'How does generative AI work?', answer: 'Generative AI models are trained on massive datasets to learn patterns and relationships. They use neural networks (transformers for text, diffusion for images) to generate new content by predicting the most likely next token or pixel.' },
    { question: 'What are the business applications of generative AI?', answer: 'Businesses use generative AI for content creation, code generation, customer support, data analysis, marketing personalization, and process automation. It reduces costs and accelerates workflows across departments.' },
    { question: 'What are the risks of generative AI?', answer: 'Key risks include hallucinations (confidently wrong outputs), bias from training data, data privacy concerns, intellectual property issues, and the need for human oversight. Proper governance and guardrails mitigate these risks.' },
  ],
  BlogLLMGuide: [
    { question: 'What is a large language model (LLM)?', answer: 'A large language model is an AI system trained on vast amounts of text data to understand and generate human language. Models like GPT-4, Claude, and Gemini use transformer architectures to process and produce text.' },
    { question: 'How do LLMs work?', answer: 'LLMs use transformer neural networks with billions of parameters. They predict the next token in a sequence based on patterns learned during training. The model processes input text, attends to context, and generates output token by token.' },
    { question: 'What can LLMs do for businesses?', answer: 'LLMs power chatbots, content generation, code assistance, document summarization, data extraction, translation, and sentiment analysis. They automate knowledge work and improve productivity across enterprise operations.' },
    { question: 'What are the limitations of LLMs?', answer: 'LLMs can hallucinate facts, have knowledge cutoffs, struggle with complex math, lack real-time data access, and can produce biased outputs. They require careful prompting, validation, and human oversight for reliable business use.' },
  ],
  BlogAgenticAIROI: [
    { question: 'How do I calculate ROI for agentic AI?', answer: 'Calculate ROI by measuring cost savings (labor reduction, faster processes), revenue gains (new capabilities, better customer experience), and implementation costs (development, infrastructure, training). Track metrics like cost per task, time saved, and error reduction.' },
    { question: 'What is the typical ROI of agentic AI?', answer: 'Enterprises typically see 40-70% cost reduction on automated workflows, with payback periods of 3-9 months. ROI varies by use case—customer support and data processing see the fastest returns.' },
    { question: 'What metrics should I track for agentic AI ROI?', answer: 'Track cost per task, task completion rate, time saved per workflow, error rate reduction, customer satisfaction scores, agent utilization, and total cost of ownership including infrastructure and maintenance.' },
    { question: 'How long does it take to see ROI from agentic AI?', answer: 'Most organizations see measurable ROI within 3-6 months of deployment. Quick wins come from automating high-volume, repetitive tasks. Full ROI across multiple workflows typically takes 6-12 months.' },
  ],
  BlogAgenticAIUseCases: [
    { question: 'What are the top use cases for agentic AI in enterprise?', answer: 'Top use cases include customer support automation, data entry and processing, report generation, workflow orchestration, IT operations, compliance monitoring, and sales lead qualification. Each delivers measurable cost savings and productivity gains.' },
    { question: 'How do I identify good agentic AI use cases?', answer: 'Look for workflows that are multi-step, rule-based but with exceptions, high-volume, and require data from multiple systems. Prioritize tasks where errors are costly and human intervention is expensive.' },
    { question: 'Which departments benefit most from agentic AI?', answer: 'Customer service, finance, IT operations, HR, and sales see the highest impact. These departments have high-volume, multi-step processes that benefit from autonomous execution and tool integration.' },
    { question: 'Can agentic AI work with my existing systems?', answer: 'Yes. Agentic AI agents integrate with existing systems via APIs, databases, and enterprise tools. 1C Platform connects with 500+ tools including Salesforce, Microsoft 365, Slack, SAP, and Oracle.' },
  ],
  BlogAIGovernanceBestPractices: [
    { question: 'What is AI governance?', answer: 'AI governance is the framework of policies, processes, and controls that ensure AI systems are deployed responsibly, ethically, and in compliance with regulations. It covers accountability, transparency, fairness, safety, and privacy.' },
    { question: 'Why is AI governance important?', answer: 'AI governance prevents harmful outcomes, ensures regulatory compliance, builds stakeholder trust, and enables safe scaling of AI. Without governance, organizations face legal, reputational, and operational risks.' },
    { question: 'How do I implement AI governance?', answer: 'Start with an AI governance policy, establish a governance committee, define risk assessment processes, implement monitoring and auditing, create incident response procedures, and train teams on responsible AI practices.' },
    { question: 'What regulations affect AI governance?', answer: 'Key regulations include the EU AI Act, NIST AI Risk Management Framework, GDPR, CCPA, and industry-specific rules like HIPAA for healthcare and SOX for finance. Compliance requirements vary by region and use case.' },
  ],
  BlogAgenticAISecurity: [
    { question: 'How do I secure agentic AI systems?', answer: 'Secure agentic AI by implementing access controls, sandboxing agent execution, monitoring all tool calls, encrypting data in transit and at rest, using rate limiting, and maintaining audit logs of every agent action.' },
    { question: 'What are the security risks of agentic AI?', answer: 'Risks include prompt injection attacks, unauthorized data access, tool misuse, data leakage through LLM outputs, and autonomous actions with unintended consequences. Proper guardrails and monitoring mitigate these risks.' },
    { question: 'Can agentic AI agents access sensitive data safely?', answer: 'Yes, with proper access controls. Implement role-based access, least-privilege permissions, data classification, and output filtering. Agents should only access data necessary for their task, with all access logged and auditable.' },
    { question: 'How do I monitor agentic AI for security threats?', answer: 'Monitor agent behavior in real-time with dashboards for tool calls, data access, error rates, and anomaly detection. Set up alerts for unusual patterns, rate limit violations, and policy breaches.' },
  ],
  BlogFineTuningVsRAG: [
    { question: 'What is the difference between fine-tuning and RAG?', answer: 'Fine-tuning retrains a model on custom data to change its behavior. RAG (Retrieval-Augmented Generation) retrieves relevant documents at inference time to ground responses. Fine-tuning changes the model; RAG augments its context.' },
    { question: 'When should I use fine-tuning vs RAG?', answer: 'Use fine-tuning when you need consistent style, format, or domain-specific reasoning. Use RAG when you need up-to-date information, large knowledge bases, or source attribution. Many systems use both together.' },
    { question: 'Is fine-tuning or RAG more cost-effective?', answer: 'RAG is typically more cost-effective for knowledge-intensive tasks since it avoids retraining costs. Fine-tuning is better for tasks requiring behavioral changes. Consider the total cost of infrastructure, maintenance, and inference.' },
    { question: 'Can I combine fine-tuning and RAG?', answer: 'Yes. Fine-tune a model for domain-specific reasoning and style, then use RAG to provide current, factual information. This hybrid approach leverages the strengths of both methods for production applications.' },
  ],
  BlogAgenticAIScaling: [
    { question: 'How do I scale agentic AI from pilot to production?', answer: 'Scale gradually: start with a single high-impact workflow, establish monitoring and guardrails, then expand to additional use cases. Implement auto-scaling, load balancing, and cost controls as agent volume grows.' },
    { question: 'What are the challenges of scaling agentic AI?', answer: 'Challenges include managing inference costs, maintaining agent reliability at scale, ensuring data access controls, monitoring thousands of concurrent agent runs, and handling failures gracefully across distributed systems.' },
    { question: 'How many AI agents can I run in production?', answer: 'Production systems can run thousands of concurrent agents with proper infrastructure. Use auto-scaling, queue-based task distribution, and resource limits. 1C Platform handles scaling automatically across multiple regions.' },
    { question: 'What infrastructure do I need to scale agentic AI?', answer: 'You need scalable compute (cloud or hybrid), vector databases for memory, API gateways for tool access, monitoring infrastructure, and cost management systems. 1C Platform provides all of this as a managed service.' },
  ],
  BlogAutomationToAutonomy: [
    { question: 'What is the difference between automation and autonomy in AI?', answer: 'Automation follows predefined rules to execute tasks. Autonomy means AI can make decisions, adapt to new situations, and choose actions independently. Autonomous AI agents plan, reason, and act without step-by-step human instructions.' },
    { question: 'How is AI evolving from automation to autonomy?', answer: 'AI is moving from rule-based automation to agentic systems that use LLMs for reasoning, tool use for action, and memory for context. This evolution enables AI to handle complex, multi-step workflows autonomously.' },
    { question: 'What are the stages of AI autonomy?', answer: 'The stages range from assisted AI (human-in-the-loop) through supervised autonomy, conditional autonomy, high autonomy, to full autonomy. Most enterprise deployments today operate at supervised or conditional autonomy levels.' },
    { question: 'Is fully autonomous AI safe for enterprise use?', answer: 'Fully autonomous AI requires robust governance, monitoring, and guardrails. Most enterprises use supervised autonomy where AI acts independently within defined boundaries, with human oversight for edge cases and high-stakes decisions.' },
  ],
  BlogNoCodeAgenticAI: [
    { question: 'Can I build AI agents without coding?', answer: 'Yes. No-code platforms like 1C Platform provide visual builders where you define agent goals, select tools, and configure behavior through drag-and-drop interfaces—no programming required.' },
    { question: 'What can no-code AI agents do?', answer: 'No-code AI agents can automate workflows, integrate with business tools, process documents, answer questions, send notifications, and execute multi-step tasks. They connect to 500+ enterprise tools via pre-built integrations.' },
    { question: 'Is no-code agentic AI suitable for enterprises?', answer: 'Yes. No-code platforms enable business users to build and deploy agents quickly, while developers can extend them with custom code when needed. This democratizes AI development and accelerates time-to-value.' },
    { question: 'How do I get started with no-code AI agents?', answer: 'Start with 1C Platform\'s free Starter plan. Use the visual builder to define your agent\'s goal, connect tools, and test. Deploy to production with built-in monitoring, guardrails, and analytics.' },
  ],
  BlogHumanAICollaboration: [
    { question: 'How will humans and AI agents work together?', answer: 'Humans will focus on strategy, creativity, and oversight while AI agents handle execution, data processing, and routine decisions. The future workplace combines human judgment with AI efficiency for unprecedented productivity.' },
    { question: 'Will AI agents replace human workers?', answer: 'AI agents augment rather than replace humans. They automate repetitive tasks, freeing humans for higher-value work. Organizations that embrace human-AI collaboration see productivity gains of 40-70%.' },
    { question: 'What skills are needed for human-AI collaboration?', answer: 'Key skills include AI literacy, prompt engineering, workflow design, critical thinking, and the ability to evaluate AI outputs. Organizations should invest in training programs to prepare their workforce.' },
    { question: 'How do I design effective human-AI workflows?', answer: 'Design workflows with clear handoffs between human and AI, define escalation triggers, implement feedback loops, maintain transparency about AI involvement, and continuously optimize based on performance data.' },
  ],
  BlogProductionGenAIApps: [
    { question: 'How do I deploy generative AI to production?', answer: 'Deploy generative AI by implementing reliability patterns (retries, fallbacks), monitoring (latency, cost, quality), error handling, version control, and scaling strategies. Use guardrails for safety and rate limiting for cost control.' },
    { question: 'What makes a generative AI app production-ready?', answer: 'Production-ready apps have monitoring, error handling, cost controls, quality evaluation, safety guardrails, fallback models, caching, and proper authentication. They handle failures gracefully and scale under load.' },
    { question: 'How do I monitor generative AI in production?', answer: 'Monitor latency, token usage, cost per request, error rates, output quality scores, user feedback, and safety metrics. Use dashboards and alerts to catch issues before they impact users.' },
    { question: 'What are common production generative AI failures?', answer: 'Common failures include API rate limits, model hallucinations, timeout errors, cost overruns, prompt injection attacks, and degraded output quality. Implement retries, fallbacks, and monitoring to handle these gracefully.' },
  ],
  BlogAgentArchitectureFundamentals: [
    { question: 'What are the core components of an AI agent architecture?', answer: 'Core components include the control loop (orchestrates reasoning and action), decision engine (chooses actions), memory system (stores context), tool interface (connects to external systems), and perception module (ingests inputs).' },
    { question: 'How does an AI agent control loop work?', answer: 'The control loop follows a perceive-reason-act cycle: the agent observes its environment, reasons about the next step using its LLM, takes action via tools, observes the result, and repeats until the goal is achieved.' },
    { question: 'What is agent memory and why is it important?', answer: 'Agent memory stores context across steps—short-term memory holds current task state, long-term memory persists across sessions. Memory enables agents to maintain context, learn from past interactions, and handle complex multi-step workflows.' },
    { question: 'How do I choose the right agent architecture?', answer: 'Choose based on task complexity: simple tasks need basic ReAct loops, complex tasks need planning and memory, multi-agent tasks need coordination protocols. Start simple and add components as requirements demand.' },
  ],
  BlogMigratingToAgenticAI: [
    { question: 'How do I migrate from traditional AI to agentic AI?', answer: 'Start by auditing existing AI workflows, identify tasks that benefit from autonomy, wrap existing models as agent tools, pilot one agentic workflow, measure results, then scale gradually with proper governance.' },
    { question: 'How long does an agentic AI migration take?', answer: 'A pilot migration typically takes 4-8 weeks. Full migration across multiple workflows takes 3-6 months. Timeline depends on system complexity, data readiness, and team expertise.' },
    { question: 'What are the risks of migrating to agentic AI?', answer: 'Risks include cost overruns, reliability issues during transition, integration challenges, and the need for new skills. Mitigate with phased rollout, proper monitoring, and team training.' },
    { question: 'Can I keep my existing AI models when migrating to agentic AI?', answer: 'Yes. Existing ML models become tools that agentic AI agents call. This preserves your investment while gaining the orchestration, reasoning, and autonomy capabilities of agentic systems.' },
  ],
  BlogWhenUseAgenticAI: [
    { question: 'When should I use agentic AI?', answer: 'Use agentic AI for complex, multi-step workflows that require reasoning, tool use, adaptive decision-making, and interaction with multiple systems. Avoid it for simple, single-step tasks where traditional AI suffices.' },
    { question: 'When should I avoid agentic AI?', answer: 'Avoid agentic AI for simple classification, regression, or single-step predictions. Also avoid it when real-time latency requirements are too strict for LLM reasoning, or when costs outweigh benefits for low-value tasks.' },
    { question: 'How do I decide between agentic and traditional AI?', answer: 'Evaluate task complexity, need for autonomy, integration requirements, cost sensitivity, and latency constraints. Use a decision framework that scores each factor to determine the best approach.' },
    { question: 'Can I use both agentic and traditional AI together?', answer: 'Yes. Use traditional AI for high-volume, well-defined tasks and agentic AI for orchestration and complex workflows. Agentic agents can call traditional ML models as tools, combining the strengths of both.' },
  ],
  BlogAgenticAIEthics: [
    { question: 'What are the ethical concerns with agentic AI?', answer: 'Key concerns include accountability for autonomous decisions, bias in agent behavior, transparency of reasoning, data privacy, potential misuse, and the impact on human employment. Ethical frameworks guide responsible deployment.' },
    { question: 'How do I ensure ethical agentic AI deployment?', answer: 'Implement ethical guidelines, conduct impact assessments, ensure transparency and explainability, maintain human oversight, audit agent decisions, and establish accountability frameworks for autonomous actions.' },
    { question: 'Who is responsible when an AI agent makes a mistake?', answer: 'Organizations deploying AI agents remain accountable. Establish clear accountability chains—developers, operators, and governance teams share responsibility. AI agents should log all decisions for audit and review.' },
    { question: 'How do I build trust in autonomous AI agents?', answer: 'Build trust through transparency (explain decisions), reliability (consistent performance), safety (guardrails and limits), oversight (human review), and accountability (audit trails). Start with low-risk tasks and expand as confidence grows.' },
  ],
  BlogEcommerceAIAutomation: [
    { question: 'How is AI transforming ecommerce?', answer: 'AI transforms ecommerce through hyper-personalization, dynamic pricing, autonomous inventory management, AI-driven customer support, visual search, and predictive demand forecasting. These capabilities reduce costs and increase conversion rates.' },
    { question: 'What are the benefits of AI automation in ecommerce?', answer: 'Benefits include 24/7 customer support, personalized product recommendations, optimized pricing, reduced stockouts, faster order processing, and data-driven decision making. AI automation can reduce operational costs by 40-60%.' },
    { question: 'How do I implement AI in my ecommerce business?', answer: 'Start with high-impact areas: product recommendations, customer support chatbots, and inventory forecasting. Integrate AI with your existing ecommerce platform via APIs. Scale to dynamic pricing and autonomous operations as you see results.' },
    { question: 'Can AI agents manage ecommerce operations autonomously?', answer: 'Yes. Agentic AI can autonomously manage inventory levels, adjust pricing, handle customer inquiries, process returns, and optimize product listings. Human oversight ensures quality and handles edge cases.' },
  ],
  BlogDigitalCommerceStrategy: [
    { question: 'What is digital commerce strategy in 2025?', answer: 'Digital commerce strategy in 2025 centers on AI-powered customer journeys, omnichannel experiences, headless commerce architecture, and autonomous operations. AI agents personalize experiences and automate workflows end-to-end.' },
    { question: 'How is AI changing digital commerce?', answer: 'AI enables conversational commerce, predictive personalization, autonomous inventory management, and real-time pricing optimization. AI agents handle customer journeys from discovery to post-purchase support.' },
    { question: 'What is headless commerce and why does it matter?', answer: 'Headless commerce separates the frontend from the backend, enabling flexible, omnichannel experiences. AI agents connect to headless APIs to deliver personalized content across web, mobile, voice, and social channels.' },
    { question: 'How do I build an AI-powered digital commerce strategy?', answer: 'Start with customer journey mapping, identify AI automation points, implement headless architecture, deploy AI agents for personalization and support, and use analytics to continuously optimize the experience.' },
  ],
  BlogTechTrendsEnterpriseAI: [
    { question: 'What are the top enterprise technology trends in 2025?', answer: 'Top trends include agentic AI, cloud-native architecture, edge computing, AI infrastructure optimization, digital transformation acceleration, and AI-powered cybersecurity. AI agents are reshaping how enterprises build and operate technology.' },
    { question: 'How are AI agents reshaping enterprise infrastructure?', answer: 'AI agents automate IT operations, manage infrastructure scaling, handle incident response, optimize resource allocation, and enable self-healing systems. This reduces operational overhead and improves reliability.' },
    { question: 'What is the role of edge computing in enterprise AI?', answer: 'Edge computing brings AI processing closer to data sources, reducing latency for real-time applications. It enables AI agents to operate in remote locations, IoT environments, and latency-sensitive scenarios.' },
    { question: 'How should enterprises prepare for AI-driven technology trends?', answer: 'Invest in AI-ready infrastructure, upskill teams on agentic AI, modernize legacy systems, implement AI governance, and adopt cloud-native architectures. Start with pilot projects and scale proven use cases.' },
  ],
};

// ─── Generator for posts without specific FAQs ───
function generateFAQs(page) {
  const title = page.title || '';
  const desc = page.description || '';

  // Extract the main topic from the title (before any colon or "vs")
  let topic = title.split(':')[0].replace(/\s*vs\s.*/i, '').replace(/\s*-\s.*$/, '').trim();
  // Remove trailing articles/prepositions
  topic = topic.replace(/\s+(in|for|of|the|a|an|to|from|with|by)\s.*$/i, '').trim() || topic;

  const lowerTopic = topic.toLowerCase();

  return [
    {
      question: `What is ${topic}?`,
      answer: desc,
    },
    {
      question: `Why is ${topic} important for enterprises?`,
      answer: `${topic} is critical for enterprises because it enables automation of complex workflows, reduces operational costs, improves decision-making speed, and allows organizations to scale AI capabilities efficiently. ${desc}`,
    },
    {
      question: `How do I implement ${topic}?`,
      answer: `To implement ${topic}, start by assessing your current systems, identify high-impact use cases, begin with a pilot project, and scale gradually. 1C Platform provides the tools, documentation, and enterprise support to help you deploy ${lowerTopic} effectively.`,
    },
    {
      question: `What are the best practices for ${topic}?`,
      answer: `Best practices for ${topic} include starting with clear objectives, implementing proper monitoring and governance, ensuring data quality, training your team, and iterating based on results. Use proven frameworks and tools to accelerate implementation and reduce risk.`,
    },
  ];
}

/**
 * Get FAQs for a blog post by its pageName.
 * Returns specific FAQs if available, otherwise generates from title/description.
 */
export function getBlogFAQs(pageName) {
  if (specificFAQs[pageName]) return specificFAQs[pageName];
  const page = seoPages[pageName];
  if (!page) return [];
  return generateFAQs(page);
}