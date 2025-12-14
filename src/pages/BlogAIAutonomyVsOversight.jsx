import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogAIAutonomyVsOversight() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="AI Autonomy vs Human Oversight: Finding the Right Balance"
        description="When should AI act autonomously and when do humans need to intervene? Framework for balancing autonomy with oversight and control."
        url="/blog/ai-autonomy-vs-oversight"
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
            AI Autonomy vs Human Oversight: Finding the Right Balance
          </motion.h1>

          <div className="flex items-center gap-6 text-gray-600 mb-8">
            <span className="flex items-center gap-2">
              <User className="w-5 h-5" />
              Jennifer Martinez
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              January 16, 2025
            </span>
            <span className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              15 min read
            </span>
          </div>

          <img 
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200" 
            alt="AI Autonomy vs Oversight" 
            className="w-full h-[400px] object-cover rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              The promise of autonomous AI is that it operates independently, freeing humans from tedious oversight. But complete autonomy without any human involvement can be risky, even dangerous. How do you find the right balance? This guide provides a framework for deciding when AI should act autonomously and when humans must stay in the loop.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Oversight Spectrum</h2>
            <p className="text-gray-700 leading-relaxed mb-8">
              Human oversight exists on a spectrum from constant supervision to occasional auditing:
            </p>

            <div className="space-y-6 mb-12">
              <div className="bg-red-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-red-900 mb-2">Human-in-the-Loop (HITL)</h3>
                <p className="text-gray-700 mb-3">Human approves every action before execution</p>
                <p className="text-sm text-gray-600">Use when: Decisions are high-stakes, irreversible, or involve significant risk</p>
                <p className="text-sm text-gray-600 font-semibold mt-2">Example: Approving large financial transactions</p>
              </div>

              <div className="bg-orange-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-orange-900 mb-2">Human-on-the-Loop (HOTL)</h3>
                <p className="text-gray-700 mb-3">Human monitors and can intervene if needed</p>
                <p className="text-sm text-gray-600">Use when: Most decisions are routine but edge cases require judgment</p>
                <p className="text-sm text-gray-600 font-semibold mt-2">Example: Content moderation with escalation</p>
              </div>

              <div className="bg-yellow-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-yellow-900 mb-2">Human-above-the-Loop</h3>
                <p className="text-gray-700 mb-3">Human reviews periodically and adjusts guardrails</p>
                <p className="text-sm text-gray-600">Use when: System is reliable and consequences are manageable</p>
                <p className="text-sm text-gray-600 font-semibold mt-2">Example: Email categorization and routing</p>
              </div>

              <div className="bg-green-50 rounded-xl p-6">
                <h3 className="text-xl font-bold text-green-900 mb-2">Full Autonomy</h3>
                <p className="text-gray-700 mb-3">System operates completely independently</p>
                <p className="text-sm text-gray-600">Use when: Decisions are low-risk, reversible, and well-constrained</p>
                <p className="text-sm text-gray-600 font-semibold mt-2">Example: Automated report generation</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">The Decision Framework</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Use this framework to determine the appropriate level of oversight for each use case:
            </p>

            <div className="bg-gray-900 text-white rounded-xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-6">Oversight Level = f(Risk, Reversibility, Frequency, Complexity)</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-bold text-green-400 mb-2">Risk Assessment</h4>
                  <p className="text-sm">What's the potential harm if the AI makes a mistake?</p>
                  <p className="text-xs text-gray-400 mt-2">High Risk → More Oversight | Low Risk → Less Oversight</p>
                </div>

                <div>
                  <h4 className="font-bold text-blue-400 mb-2">Reversibility</h4>
                  <p className="text-sm">Can the action be easily undone or corrected?</p>
                  <p className="text-xs text-gray-400 mt-2">Irreversible → More Oversight | Reversible → Less Oversight</p>
                </div>

                <div>
                  <h4 className="font-bold text-yellow-400 mb-2">Frequency</h4>
                  <p className="text-sm">How often does this decision occur?</p>
                  <p className="text-xs text-gray-400 mt-2">High Frequency → Push toward automation | Low Frequency → Human OK</p>
                </div>

                <div>
                  <h4 className="font-bold text-purple-400 mb-2">Complexity</h4>
                  <p className="text-sm">How nuanced and context-dependent is the decision?</p>
                  <p className="text-xs text-gray-400 mt-2">High Complexity → More Oversight | Low Complexity → Less Oversight</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Real-World Examples</h2>

            <div className="space-y-8 mb-12">
              <div className="border-2 border-gray-200 rounded-xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Email Classification</h3>
                    <p className="text-gray-600">Automatically categorizing and routing customer emails</p>
                  </div>
                  <Badge className="bg-green-500">Full Autonomy</Badge>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Risk:</span>
                    <span className="text-gray-700">Low (misrouting causes minor delay, not catastrophic)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Reversible:</span>
                    <span className="text-gray-700">Yes (can be manually rerouted)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Frequency:</span>
                    <span className="text-gray-700">Very High (thousands per day)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Complexity:</span>
                    <span className="text-gray-700">Low (pattern matching and keywords)</span>
                  </div>
                  <div className="mt-4 p-4 bg-green-50 rounded-lg">
                    <p className="text-green-900 font-semibold">Recommendation: Let AI run fully autonomously with periodic accuracy audits</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Fraud Detection</h3>
                    <p className="text-gray-600">Identifying and blocking fraudulent transactions</p>
                  </div>
                  <Badge className="bg-yellow-500">HOTL</Badge>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Risk:</span>
                    <span className="text-gray-700">Medium (false positives anger customers, false negatives lose money)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Reversible:</span>
                    <span className="text-gray-700">Partially (blocked transaction can be unblocked, lost money harder to recover)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Frequency:</span>
                    <span className="text-gray-700">High (thousands of transactions daily)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Complexity:</span>
                    <span className="text-gray-700">Medium (patterns exist but context matters)</span>
                  </div>
                  <div className="mt-4 p-4 bg-yellow-50 rounded-lg">
                    <p className="text-yellow-900 font-semibold">Recommendation: AI acts autonomously on high-confidence cases, escalates borderline cases to humans</p>
                  </div>
                </div>
              </div>

              <div className="border-2 border-gray-200 rounded-xl p-8">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Medical Diagnosis</h3>
                    <p className="text-gray-600">AI-assisted diagnosis of medical conditions</p>
                  </div>
                  <Badge className="bg-red-500">HITL</Badge>
                </div>
                <div className="space-y-3 text-sm">
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Risk:</span>
                    <span className="text-gray-700">Very High (wrong diagnosis can harm or kill patients)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Reversible:</span>
                    <span className="text-gray-700">No (health consequences can be permanent)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Frequency:</span>
                    <span className="text-gray-700">Medium (dozens to hundreds per day per doctor)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="font-semibold w-24">Complexity:</span>
                    <span className="text-gray-700">Very High (requires deep medical knowledge and context)</span>
                  </div>
                  <div className="mt-4 p-4 bg-red-50 rounded-lg">
                    <p className="text-red-900 font-semibold">Recommendation: AI provides suggestions, but licensed physician must review and approve all diagnoses</p>
                  </div>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Implementing Effective Oversight</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">1. Dynamic Confidence Thresholds</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Don't treat all decisions the same. Route based on the AI's confidence:
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-semibold">High Confidence</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div className="bg-green-500 h-6 rounded-full" style={{width: '95%'}}></div>
                  </div>
                  <div className="w-24 text-right text-sm">≥ 95%</div>
                  <div className="w-32 text-sm text-gray-600">Auto-execute</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-semibold">Medium Confidence</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div className="bg-yellow-500 h-6 rounded-full" style={{width: '75%'}}></div>
                  </div>
                  <div className="w-24 text-right text-sm">75-94%</div>
                  <div className="w-32 text-sm text-gray-600">Flag for review</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-32 text-sm font-semibold">Low Confidence</div>
                  <div className="flex-1 bg-gray-200 rounded-full h-6">
                    <div className="bg-red-500 h-6 rounded-full" style={{width: '60%'}}></div>
                  </div>
                  <div className="w-24 text-right text-sm">{'<'} 75%</div>
                  <div className="w-32 text-sm text-gray-600">Escalate immediately</div>
                </div>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">2. Risk-Based Routing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Increase oversight as risk increases:
            </p>

            <div className="space-y-4 mb-8">
              <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded">
                <p className="font-bold text-green-900 mb-2">Low Risk (e.g., transaction under $50)</p>
                <p className="text-gray-700 text-sm">→ Full autonomy, periodic auditing</p>
              </div>

              <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 rounded">
                <p className="font-bold text-yellow-900 mb-2">Medium Risk (e.g., transaction $50-$5,000)</p>
                <p className="text-gray-700 text-sm">→ Autonomous with anomaly detection and spot checks</p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-6 rounded">
                <p className="font-bold text-orange-900 mb-2">High Risk (e.g., transaction $5,000-$50,000)</p>
                <p className="text-gray-700 text-sm">→ Automated processing with manager review within 24 hours</p>
              </div>

              <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded">
                <p className="font-bold text-red-900 mb-2">Critical Risk (e.g., transaction {'>'} $50,000)</p>
                <p className="text-gray-700 text-sm">→ Human approval required before execution</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">3. Time-Based Oversight</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Some decisions become more certain with time:
            </p>

            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <p className="font-bold text-gray-900 mb-4">Example: Content Moderation</p>
              <div className="space-y-3 text-sm text-gray-700">
                <p>• <strong>Immediate:</strong> AI flags obviously violating content (100% confidence) → Auto-remove</p>
                <p>• <strong>15-min delay:</strong> Borderline content → AI reviews again with more context</p>
                <p>• <strong>24-hour review:</strong> Human moderator reviews AI decisions for quality assurance</p>
                <p>• <strong>Weekly audit:</strong> Analyze patterns, retrain models, adjust thresholds</p>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Building Trust: The Gradual Autonomy Path</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Don't jump straight to full autonomy. Build trust incrementally:
            </p>

            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center font-bold text-blue-900 flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Shadow Mode</h4>
                  <p className="text-gray-700 text-sm">AI makes recommendations but humans make all decisions. Compare AI suggestions to human choices.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center font-bold text-cyan-900 flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Supervised Autonomy</h4>
                  <p className="text-gray-700 text-sm">AI acts autonomously on simple cases, escalates complex ones. Monitor closely.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-teal-100 flex items-center justify-center font-bold text-teal-900 flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Monitored Autonomy</h4>
                  <p className="text-gray-700 text-sm">AI handles most cases autonomously. Humans review periodically and adjust guardrails.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center font-bold text-green-900 flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 mb-2">Full Autonomy</h4>
                  <p className="text-gray-700 text-sm">AI operates independently with occasional audits and continuous monitoring of KPIs.</p>
                </div>
              </div>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              The goal isn't to eliminate human oversight entirely—it's to apply it intelligently. High-risk, irreversible decisions benefit from human judgment. Low-risk, high-frequency decisions benefit from automation. Everything in between requires nuanced oversight strategies.
            </p>

            <p className="text-gray-700 leading-relaxed">
              The organizations that succeed with autonomous AI won't be those that push hardest for complete autonomy. They'll be those that thoughtfully balance autonomy with oversight, building trust incrementally, and applying human judgment where it matters most.
            </p>
          </div>

          {/* CTA */}
          <div className="mt-16 p-8 bg-gradient-to-br from-[#8B2EE5] to-[#6D28D9] rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">Balance Autonomy with Control</h3>
            <p className="text-purple-100 mb-6">
              Learn how 1cPlatform helps you implement the right level of oversight for your AI systems.
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