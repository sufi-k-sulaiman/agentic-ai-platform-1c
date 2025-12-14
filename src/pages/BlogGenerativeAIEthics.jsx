import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import { Button } from '@/components/ui/button';

export default function BlogGenerativeAIEthics() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Generative AI Ethics: Navigating Risks and Responsibilities"
        description="Understanding the ethical challenges of generative AI including bias, misinformation, copyright, and building responsible AI systems."
        url="/blog/generative-ai-ethics"
        keywords={['AI ethics', 'generative AI risks', 'responsible AI', 'AI bias', 'AI safety']}
      />

      <article className="max-w-4xl mx-auto px-6 py-32">
        <BreadcrumbNav items={[
          { label: 'Blog', page: 'Blog' },
          { label: 'Generative AI Ethics' }
        ]} />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Generative AI Ethics: Navigating Risks and Responsibilities
          </h1>
          
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Dr. Rachel Foster</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>December 7, 2024</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>15 min read</span>
            </div>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200" 
            alt="AI Ethics" 
            className="w-full h-96 object-cover rounded-2xl mb-12"
          />
        </motion.div>

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Generative AI's power comes with profound responsibilities. As these systems become embedded in business, education, and daily life, understanding their ethical implications isn't optional—it's imperative. This guide explores the challenges and frameworks for building responsible AI systems.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Stakes Are High</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Generative AI can spread misinformation at scale, perpetuate societal biases, violate privacy, displace workers, and be weaponized for fraud. The European Union's AI Act, US executive orders, and industry guidelines signal growing recognition that regulation and responsibility matter.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Key Ethical Challenges</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Bias and Fairness</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            AI models learn from internet data reflecting historical prejudices. They can exhibit gender, racial, and cultural biases in hiring recommendations, loan decisions, and content moderation. Example: Image generators historically portrayed "CEO" as predominantly male and white.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Solutions:</strong> Diverse training data, bias testing, fairness constraints, and continuous monitoring. Companies like Anthropic prioritize "constitutional AI" with built-in fairness principles.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Misinformation and Deepfakes</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Photorealistic fake images, videos, and text undermine trust. Political deepfakes, financial fraud, and identity theft are growing threats. Studies show humans can't reliably distinguish AI-generated content.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Solutions:</strong> Watermarking AI content, provenance tracking, detection tools, and clear disclosure requirements. Meta, Google, and OpenAI have committed to content authentication standards.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Privacy and Data Rights</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Models trained on scraped internet data may memorize and regurgitate personal information, copyrighted content, or trade secrets. GDPR's "right to be forgotten" conflicts with model persistence.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Solutions:</strong> Data minimization, differential privacy, opt-out mechanisms, and training only on licensed or public domain content.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Intellectual Property</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Who owns AI-generated content? What about works "in the style of" living artists? Lawsuits against Stability AI, Midjourney, and GitHub Copilot challenge training on copyrighted material without permission.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Solutions:</strong> Transparent training data documentation, artist compensation models, opt-in rather than opt-out policies, and clear commercial usage terms.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Job Displacement</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            AI automates tasks formerly requiring human creativity and cognition. Writers, artists, developers, and analysts face disruption. Goldman Sachs estimates 300 million jobs worldwide affected.
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            <strong>Solutions:</strong> Reskilling programs, focusing AI on augmentation not replacement, creating new AI-adjacent roles, and social safety nets for transitions.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Building Responsible AI Systems</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Ethical Design Principles</h3>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Transparency:</strong> Disclose AI usage; explain how systems work</li>
            <li><strong>Accountability:</strong> Clear ownership of AI outputs and decisions</li>
            <li><strong>Fairness:</strong> Test for and mitigate bias across demographics</li>
            <li><strong>Privacy:</strong> Minimize data collection and protect user information</li>
            <li><strong>Safety:</strong> Implement guardrails against harmful outputs</li>
          </ul>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Governance Frameworks</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Establish AI ethics committees with diverse representation. Create clear policies for acceptable use, human oversight requirements, and escalation procedures. Document decisions and maintain audit trails.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Human-in-the-Loop</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Never fully automate high-stakes decisions. Require human review for content publication, hiring decisions, financial recommendations, and legal analysis. AI should augment human judgment, not replace it.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">4. Continuous Monitoring</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Track AI system performance, user feedback, and unintended consequences. Implement red-teaming to find failure modes. Update systems as risks emerge and capabilities evolve.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Regulatory Landscape</h2>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">European Union AI Act</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Risk-based framework classifying AI systems from minimal to unacceptable risk. High-risk systems require conformity assessments, transparency, and human oversight. Non-compliance fines up to 6% of global revenue.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">US Executive Order on AI</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Requires safety testing of powerful models, establishes AI safety institutes, mandates content authentication, and addresses AI in critical infrastructure. State-level regulations also emerging.
          </p>

          <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Industry Self-Regulation</h3>
          <p className="text-gray-700 leading-relaxed mb-6">
            Companies like OpenAI, Anthropic, and Google have published AI principles. Partnership on AI and other coalitions develop shared standards. Voluntary commitments on safety testing, watermarking, and responsible deployment.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Practical Steps for Organizations</h2>
          <ol className="space-y-3 text-gray-700 mb-8 list-decimal list-inside">
            <li><strong>Conduct AI risk assessments</strong> for each use case</li>
            <li><strong>Develop AI use policies</strong> specifying acceptable and prohibited uses</li>
            <li><strong>Train employees</strong> on ethical AI practices and potential risks</li>
            <li><strong>Implement review processes</strong> before deploying AI systems</li>
            <li><strong>Establish feedback mechanisms</strong> for reporting issues</li>
            <li><strong>Document decisions</strong> and maintain transparency</li>
            <li><strong>Stay informed</strong> on evolving regulations and best practices</li>
          </ol>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Path Forward</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Ethical AI requires balancing innovation with responsibility. We need clear guardrails without stifling beneficial applications. The answer isn't slowing AI development—it's accelerating our ethical frameworks to keep pace.
          </p>

          <p className="text-gray-700 leading-relaxed mb-6">
            Organizations that lead in responsible AI will earn trust, attract talent, avoid regulatory penalties, and build sustainable competitive advantages. Ethics isn't a constraint on AI—it's the foundation for its long-term success.
          </p>

          <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-2xl p-8 mt-12">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Build Ethical AI Systems</h3>
            <p className="text-gray-700 mb-6">
              Learn how to implement generative AI responsibly with built-in safety, fairness, and transparency.
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white">
                Get started
              </Button>
            </Link>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Button>
          </Link>
        </div>
      </article>
    </div>
  );
}