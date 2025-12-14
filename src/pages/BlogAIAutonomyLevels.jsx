import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User, CheckCircle2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogAIAutonomyLevels() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="The 6 Levels of AI Autonomy: A Complete Framework"
        description="Understand the six levels of AI autonomy from assisted to full autonomy. Learn where your AI systems fit and how to advance them."
        url="/blog/ai-autonomy-levels"
      />

      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link to={createPageUrl('Blog')}>
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Blog
            </Button>
          </Link>

          <Badge className="mb-6 bg-[#8B2EE5]">AI Insights</Badge>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight"
          >
            The 6 Levels of AI Autonomy: A Complete Framework
          </motion.h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Michael Stevens
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              January 19, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              14 min read
            </span>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1200" 
            alt="AI Autonomy Levels" 
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Just as self-driving cars have established levels of autonomy (from driver assistance to full self-driving), AI systems exist on a similar spectrum. Understanding these levels is crucial for organizations looking to deploy autonomous AI effectively. This framework will help you assess where your current systems sit and map a path to higher autonomy.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-8">The Complete Framework</h2>

            <div className="space-y-8 mb-12">
              {/* Level 0 */}
              <div className="border-4 border-gray-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center text-2xl font-bold text-gray-900">
                    0
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">No Autonomy</h3>
                    <p className="text-gray-600">Manual Operation</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Humans perform all tasks manually</li>
                      <li>System is just a tool that executes explicit commands</li>
                      <li>No decision-making capability</li>
                      <li>Requires step-by-step human instruction</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Examples:</h4>
                    <p className="text-gray-700">Basic calculators, spreadsheet formulas, simple database queries, manual data entry systems</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Use Cases:</h4>
                    <p className="text-gray-700">When complete human control is necessary, such as sensitive financial transactions or critical medical decisions</p>
                  </div>

                  <div className="bg-red-50 p-4 rounded-lg">
                    <p className="text-sm text-red-900"><strong>Limitation:</strong> Does not scale, extremely time-intensive, prone to human error</p>
                  </div>
                </div>
              </div>

              {/* Level 1 */}
              <div className="border-4 border-blue-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-2xl font-bold text-blue-900">
                    1
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Driver Assistance</h3>
                    <p className="text-gray-600">Assisted Automation</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>System follows predefined rules and workflows</li>
                      <li>Can execute simple if-then logic</li>
                      <li>Requires human oversight and approval</li>
                      <li>Cannot handle exceptions or edge cases</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Examples:</h4>
                    <p className="text-gray-700">Email filters, basic chatbots with decision trees, workflow automation (Zapier/IFTTT), scheduled reports</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Human Involvement:</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div className="bg-blue-500 h-4 rounded-full" style={{width: '80%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">80%</span>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="text-sm text-blue-900"><strong>Best For:</strong> Repetitive, rule-based tasks with clear decision criteria</p>
                  </div>
                </div>
              </div>

              {/* Level 2 */}
              <div className="border-4 border-cyan-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-cyan-100 flex items-center justify-center text-2xl font-bold text-cyan-900">
                    2
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Partial Automation</h3>
                    <p className="text-gray-600">Conditional Autonomy</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Handles well-defined scenarios independently</li>
                      <li>Escalates edge cases to humans</li>
                      <li>Can make simple decisions within parameters</li>
                      <li>Learns from human feedback on escalations</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Examples:</h4>
                    <p className="text-gray-700">Customer service chatbots with transfer capabilities, invoice processing with exception handling, automated content moderation with flagging</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Human Involvement:</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div className="bg-cyan-500 h-4 rounded-full" style={{width: '50%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">50%</span>
                    </div>
                  </div>

                  <div className="bg-cyan-50 p-4 rounded-lg">
                    <p className="text-sm text-cyan-900"><strong>Best For:</strong> High-volume tasks with mostly standard cases and occasional exceptions</p>
                  </div>
                </div>
              </div>

              {/* Level 3 */}
              <div className="border-4 border-teal-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-teal-100 flex items-center justify-center text-2xl font-bold text-teal-900">
                    3
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Conditional Automation</h3>
                    <p className="text-gray-600">Limited Autonomy</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Operates independently in defined domains</li>
                      <li>Handles most exceptions without human input</li>
                      <li>Adapts to changing conditions within scope</li>
                      <li>Human oversight is periodic, not constant</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Examples:</h4>
                    <p className="text-gray-700">Recommendation engines, fraud detection systems, dynamic pricing algorithms, AI-powered customer segmentation</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Human Involvement:</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div className="bg-teal-500 h-4 rounded-full" style={{width: '30%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">30%</span>
                    </div>
                  </div>

                  <div className="bg-teal-50 p-4 rounded-lg">
                    <p className="text-sm text-teal-900"><strong>Best For:</strong> Complex but bounded domains with clear success metrics</p>
                  </div>
                </div>
              </div>

              {/* Level 4 */}
              <div className="border-4 border-green-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center text-2xl font-bold text-green-900">
                    4
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">High Automation</h3>
                    <p className="text-gray-600">High Autonomy</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Handles complex scenarios with minimal oversight</li>
                      <li>Adapts to new situations and learns continuously</li>
                      <li>Makes strategic decisions within guardrails</li>
                      <li>Self-corrects based on outcomes</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Examples:</h4>
                    <p className="text-gray-700">Agentic AI systems, advanced autonomous vehicles in controlled environments, AI-powered trading systems, supply chain optimization</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Human Involvement:</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div className="bg-green-500 h-4 rounded-full" style={{width: '15%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">15%</span>
                    </div>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-900"><strong>Best For:</strong> Complex, dynamic environments where speed and adaptability are critical</p>
                  </div>
                </div>
              </div>

              {/* Level 5 */}
              <div className="border-4 border-purple-200 rounded-2xl p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-2xl font-bold text-purple-900">
                    5
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Full Automation</h3>
                    <p className="text-gray-600">Full Autonomy</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Characteristics:</h4>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Operates completely independently</li>
                      <li>Handles unforeseen scenarios effectively</li>
                      <li>Continuously improves without intervention</li>
                      <li>Can set and adjust its own goals within mission parameters</li>
                    </ul>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Examples:</h4>
                    <p className="text-gray-700">This level is largely theoretical for most business applications. Some specialized AI research systems and narrow-domain AGI approaches this level.</p>
                  </div>

                  <div>
                    <h4 className="font-bold text-gray-900 mb-2">Human Involvement:</h4>
                    <div className="flex items-center gap-3">
                      <div className="flex-1 bg-gray-200 rounded-full h-4">
                        <div className="bg-purple-500 h-4 rounded-full" style={{width: '5%'}}></div>
                      </div>
                      <span className="text-sm font-semibold text-gray-900">5%</span>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-4 rounded-lg">
                    <p className="text-sm text-purple-900"><strong>Status:</strong> Experimental and domain-specific; not yet viable for general business use</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">How to Assess Your Current Level</h2>
            
            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Assessment Questions</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">How often do humans need to intervene in your AI system's operations?</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Can your system handle unexpected situations or does it fail/escalate?</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Does your system learn and improve from experience without reprogramming?</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">Can your system make decisions across multiple steps toward a goal?</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-600 mt-1 flex-shrink-0" />
                  <p className="text-gray-700">How much setup and configuration is required for new scenarios?</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Advancing to Higher Levels</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Moving up the autonomy ladder isn't about technology alone—it's about building trust, establishing guardrails, and proving value incrementally.
            </p>

            <div className="space-y-6 mb-8">
              <div className="bg-blue-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Level 1 → Level 2</h3>
                <p className="text-gray-700 mb-3">Add exception handling and escalation logic. Collect data on edge cases to improve decision-making.</p>
                <p className="text-sm text-gray-600 italic">Timeline: 2-4 months</p>
              </div>

              <div className="bg-cyan-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Level 2 → Level 3</h3>
                <p className="text-gray-700 mb-3">Implement machine learning for pattern recognition. Reduce escalations by enabling the system to handle more edge cases autonomously.</p>
                <p className="text-sm text-gray-600 italic">Timeline: 4-8 months</p>
              </div>

              <div className="bg-teal-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Level 3 → Level 4</h3>
                <p className="text-gray-700 mb-3">Deploy agentic AI architectures. Enable goal-oriented behavior, multi-step reasoning, and continuous learning.</p>
                <p className="text-sm text-gray-600 italic">Timeline: 6-12 months</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2">Level 4 → Level 5</h3>
                <p className="text-gray-700 mb-3">Emerging research area. Requires advances in AGI, robust generalization, and novel safety mechanisms.</p>
                <p className="text-sm text-gray-600 italic">Timeline: 3-10+ years (highly speculative)</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Understanding the 6 levels of AI autonomy provides a roadmap for your AI journey. Most organizations today operate at Levels 1-2, with leaders pushing into Level 3. Level 4 autonomy—where agentic AI shines—is the frontier for competitive advantage in the next 3-5 years.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The key is to progress deliberately: start with low-risk processes, prove value, build organizational trust, and gradually increase autonomy. Each level unlocks new capabilities and efficiencies—but also requires new approaches to oversight and governance.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#8B2EE5] to-[#6D28D9] rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Advance Your AI Autonomy?</h3>
            <p className="text-purple-100 mb-6">
              Discover how 1cPlatform can help you move up the autonomy ladder with confidence.
            </p>
            <Link to={createPageUrl('Contact')}>
              <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}