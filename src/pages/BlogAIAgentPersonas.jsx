import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import RelatedContent from '@/components/seo/RelatedContent';
import InternalLinker from '@/components/seo/InternalLinker';

export default function BlogAIAgentPersonas() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Designing AI Agent Personas: Character and Voice Guidelines"
        description="Create compelling AI agent personalities. Persona development, voice design, tone guidelines, and character consistency."
        url="/blog/ai-agent-personas"
        keywords={['AI personas', 'agent personality', 'voice design', 'character design']}
        article={{
        author: 'Jessica Park',
        datePublished: '2025-01-17',
        image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/1a49d1181_generated_image.png',
        section: 'Agentic Design',
        tags: ['agentic design', 'AI', 'agentic AI'],
        timeRequired: 'PT13M',
      }}
      />

      <BreadcrumbNav items={[{ label: 'Blog', page: 'Blog' }, { label: 'Designing AI Agent Personas: Character a' }]} />

      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <Badge className="mb-6">Agentic Design</Badge>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Designing AI Agent Personas: Character and Voice Guidelines
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Jessica Park</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January 17, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>13 min read</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
          <InternalLinker currentPage="BlogAIAgentPersonas">
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/1a49d1181_generated_image.png"
              alt="AI Agent Personas"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </InternalLinker></motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <motion.article 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="prose prose-lg max-w-none"
          >
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              AI agent personas define how agents communicate, behave, and present themselves to users. A well-crafted persona makes agents feel more natural, trustworthy, and aligned with your brand. This guide explores how to create compelling agent personalities.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Personas Matter</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Generic, robotic AI interactions feel cold and impersonal. Personas humanize agents, making them more relatable and easier to work with. A strong persona also differentiates your agent from competitors and reinforces brand identity.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Core Persona Elements</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Voice and Tone</h3>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
              <p className="text-gray-700 mb-3"><strong>Voice</strong> is your agent's personality - it remains constant.</p>
              <p className="text-gray-700 mb-3"><strong>Tone</strong> adapts to context and situation.</p>
              <p className="text-gray-700 mt-4">Examples:</p>
              <ul className="space-y-2 text-gray-700 mt-2">
                <li><strong>Professional voice, encouraging tone:</strong> "You're making great progress on this project."</li>
                <li><strong>Professional voice, serious tone:</strong> "This requires immediate attention."</li>
                <li><strong>Casual voice, friendly tone:</strong> "Hey! Let's tackle this together."</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Vocabulary and Language Style</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Choose words that match your audience and use case:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li><strong>Technical agents:</strong> Industry jargon is appropriate</li>
              <li><strong>Consumer agents:</strong> Plain language, avoid acronyms</li>
              <li><strong>Medical agents:</strong> Balance precision with empathy</li>
              <li><strong>Financial agents:</strong> Clear, confident, accurate</li>
            </ul>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Personality Traits</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Define 3-5 core traits that guide agent behavior:
            </p>
            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-6">
              <p className="font-semibold text-gray-900 mb-2">Example: Sales Agent Persona</p>
              <ul className="space-y-2 text-gray-700">
                <li>Enthusiastic - Shows genuine excitement about solutions</li>
                <li>Helpful - Prioritizes customer success</li>
                <li>Confident - Knowledgeable without being pushy</li>
                <li>Respectful - Values customer time and boundaries</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Persona Development Process</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 1: Define Purpose</h3>
                <p className="text-gray-700">What will this agent do? Who will use it? In what context?</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 2: Know Your Audience</h3>
                <p className="text-gray-700">Create user personas for agent users. Match agent personality to user expectations.</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 3: Align with Brand</h3>
                <p className="text-gray-700">Agent personality should reflect and reinforce your brand values.</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 4: Create Guidelines</h3>
                <p className="text-gray-700">Document tone, vocabulary, example phrases, and what to avoid.</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Step 5: Test and Iterate</h3>
                <p className="text-gray-700">Gather user feedback and refine the persona based on real interactions.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Voice Design Spectrum</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left">Dimension</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">One End</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">Other End</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Formality</td>
                    <td className="border border-gray-300 px-4 py-3">Casual, conversational</td>
                    <td className="border border-gray-300 px-4 py-3">Formal, professional</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Enthusiasm</td>
                    <td className="border border-gray-300 px-4 py-3">Reserved, measured</td>
                    <td className="border border-gray-300 px-4 py-3">Enthusiastic, expressive</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Humor</td>
                    <td className="border border-gray-300 px-4 py-3">Serious, matter-of-fact</td>
                    <td className="border border-gray-300 px-4 py-3">Playful, witty</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Directness</td>
                    <td className="border border-gray-300 px-4 py-3">Indirect, diplomatic</td>
                    <td className="border border-gray-300 px-4 py-3">Direct, straightforward</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Empathy</td>
                    <td className="border border-gray-300 px-4 py-3">Neutral, objective</td>
                    <td className="border border-gray-300 px-4 py-3">Warm, empathetic</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Consistency Across Contexts</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Agents interact in different situations. Maintain persona while adapting appropriately:
            </p>

            <div className="bg-purple-50 border-l-4 border-[#8B2EE5] p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Context-Specific Examples</h3>
              <div className="space-y-4 text-gray-700">
                <div>
                  <p className="font-semibold mb-1">Success Message:</p>
                  <p className="text-sm">"Great! Your report is ready. I've highlighted the key insights you asked for."</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Error Message:</p>
                  <p className="text-sm">"I ran into an issue generating that report. The data source seems unavailable. Let's try again in a few minutes?"</p>
                </div>
                <div>
                  <p className="font-semibold mb-1">Clarification Request:</p>
                  <p className="text-sm">"Just to make sure I understand - you want the Q4 numbers broken down by region, correct?"</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Emotional Intelligence</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Good personas demonstrate emotional awareness:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Acknowledge frustration:</strong> "I can tell this is frustrating. Let me help resolve it."</li>
              <li><strong>Celebrate success:</strong> "That's a big accomplishment - well done!"</li>
              <li><strong>Show patience:</strong> "No problem at all. Happy to explain that again."</li>
              <li><strong>Express uncertainty appropriately:</strong> "I'm not entirely sure about that. Let me find someone who can help."</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Common Pitfalls to Avoid</h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">What Not to Do</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✗ Trying to be too human (avoid "I feel" or "I believe")</li>
                <li>✗ Using inconsistent voice across interactions</li>
                <li>✗ Forcing humor in serious situations</li>
                <li>✗ Being overly apologetic or self-deprecating</li>
                <li>✗ Using slang or idioms that don't translate well</li>
                <li>✗ Making the persona more important than helpfulness</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Documentation and Guidelines</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Create a persona guide that includes:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Persona overview:</strong> Name, role, core traits</li>
              <li><strong>Voice characteristics:</strong> How the agent sounds</li>
              <li><strong>Sample phrases:</strong> Common expressions and greetings</li>
              <li><strong>Do's and don'ts:</strong> Clear examples of what fits and doesn't</li>
              <li><strong>Context variations:</strong> How persona adapts to different situations</li>
              <li><strong>Writing principles:</strong> Guidelines for maintaining consistency</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Testing Your Persona</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">User Testing</h3>
                <p className="text-gray-700">Test with real users. Ask: Does the agent feel helpful? Trustworthy? Appropriate?</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">A/B Testing</h3>
                <p className="text-gray-700">Try variations of your persona to see which resonates better.</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-3">Consistency Checks</h3>
                <p className="text-gray-700">Review agent responses periodically to ensure persona remains consistent.</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              A well-designed persona transforms AI agents from tools into teammates. By carefully crafting voice, tone, and personality, you create agents that users trust, enjoy interacting with, and rely on for important work.
            </p>

            <div className="bg-gradient-to-r from-[#8B2EE5] to-[#7325C4] text-white rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4">Create Compelling Agent Personas</h3>
              <p className="text-purple-100 mb-6">
                Start building agents with personality using our platform.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>

          </motion.article>
        </div>
      
      <RelatedContent currentPage="BlogAIAgentPersonas" category="resources" crossCategories={['product']} title="Explore Related Content" />
      </section>
    </div>
  );
}