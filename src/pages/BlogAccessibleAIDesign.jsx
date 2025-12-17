import React from 'react';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogAccessibleAIDesign() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title="Accessibility in Agentic AI Design: Inclusive Agent Experiences"
        description="Design accessible AI agents for all users. WCAG compliance, screen reader support, keyboard navigation, and inclusive design principles."
        url="/blog/accessible-ai-design"
        keywords={['accessible AI', 'inclusive design', 'WCAG compliance', 'AI accessibility']}
      />

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
            Accessibility in Agentic AI Design: Inclusive Agent Experiences
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-wrap items-center gap-6 text-gray-600 mb-8"
          >
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>Maria Rodriguez</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January 15, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5" />
              <span>16 min read</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <img
              src="https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/a2aae8476_generated_image.png"
              alt="Accessible AI Design"
              className="w-full h-96 object-cover rounded-2xl shadow-xl"
            />
          </motion.div>
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
              AI agents must be accessible to everyone, regardless of ability. This guide explores how to design inclusive agent experiences that work for users with visual, auditory, motor, and cognitive disabilities, while meeting WCAG standards.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Why Accessibility Matters for AI</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              AI agents have the potential to democratize access to information and services. However, if not designed inclusively, they can create new barriers. Accessible AI design isn't just compliance—it's about ensuring everyone can benefit from autonomous technology.
            </p>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">WCAG Compliance for AI Interfaces</h2>

            <div className="overflow-x-auto mb-8">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-3 text-left">Principle</th>
                    <th className="border border-gray-300 px-4 py-3 text-left">AI Application</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Perceivable</td>
                    <td className="border border-gray-300 px-4 py-3">Agent status and responses must be perceivable through multiple senses</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Operable</td>
                    <td className="border border-gray-300 px-4 py-3">All agent controls work with keyboard, voice, and assistive tech</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Understandable</td>
                    <td className="border border-gray-300 px-4 py-3">Agent behavior and responses are clear and predictable</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-3 font-semibold">Robust</td>
                    <td className="border border-gray-300 px-4 py-3">Interfaces work across devices and assistive technologies</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Screen Reader Support</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">ARIA Labels for Agent Components</h3>
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-6">
              <p className="text-gray-700 mb-3">Properly label AI-specific elements:</p>
              <ul className="space-y-2 text-gray-700">
                <li><code>aria-label="Agent is thinking"</code> for thinking indicators</li>
                <li><code>aria-live="polite"</code> for agent responses</li>
                <li><code>role="status"</code> for agent status updates</li>
                <li><code>aria-busy="true"</code> while agent processes</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Dynamic Content Announcements</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              As agents generate content dynamically:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>Use <code>aria-live</code> regions to announce new messages</li>
              <li>Set <code>aria-atomic="true"</code> when entire messages should be read</li>
              <li>Announce agent state changes (thinking → responding)</li>
              <li>Provide text alternatives for visual indicators</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Keyboard Navigation</h2>

            <div className="bg-green-50 border-l-4 border-green-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Essential Keyboard Patterns</h3>
              <ul className="space-y-3 text-gray-700">
                <li><strong>Tab:</strong> Navigate between agent controls and messages</li>
                <li><strong>Enter/Space:</strong> Activate buttons and trigger agent actions</li>
                <li><strong>Escape:</strong> Cancel current agent operation or close modals</li>
                <li><strong>Arrow keys:</strong> Navigate message history</li>
                <li><strong>Ctrl+Enter:</strong> Submit prompts without mouse</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Focus Management</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Properly manage focus as content appears:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Move focus to new agent responses when they appear</li>
              <li>Trap focus in modals and dialogs</li>
              <li>Provide skip links to bypass repetitive content</li>
              <li>Visible focus indicators on all interactive elements</li>
              <li>Restore focus appropriately when interactions complete</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Visual Accessibility</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Color and Contrast</h3>
            <div className="bg-purple-50 border-l-4 border-[#8B2EE5] p-6 my-6">
              <h4 className="font-bold text-gray-900 mb-3">WCAG AAA Standards</h4>
              <ul className="space-y-2 text-gray-700">
                <li>Minimum 7:1 contrast ratio for text</li>
                <li>Don't rely solely on color to convey agent status</li>
                <li>Use patterns/icons alongside color coding</li>
                <li>Test with color blindness simulators</li>
                <li>Provide high-contrast mode option</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Text and Typography</h3>
            <p className="text-gray-700 leading-relaxed mb-4">
              Ensure agent messages are readable:
            </p>
            <ul className="space-y-2 text-gray-700 mb-6">
              <li>Minimum 16px font size for body text</li>
              <li>1.5 line height for better readability</li>
              <li>Sans-serif fonts for digital interfaces</li>
              <li>Allow text resizing up to 200% without breaking layout</li>
              <li>Avoid all-caps for long messages</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Cognitive Accessibility</h2>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Reducing Cognitive Load</h3>
            <div className="space-y-4 mb-8">
              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Clear Language</h4>
                <p className="text-gray-700 text-sm">Use simple, direct language. Avoid jargon. Write at 8th-grade reading level.</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Predictable Behavior</h4>
                <p className="text-gray-700 text-sm">Agents should behave consistently. Similar inputs yield similar outputs.</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Error Prevention</h4>
                <p className="text-gray-700 text-sm">Confirm before destructive actions. Provide undo options.</p>
              </div>

              <div className="bg-white border-2 border-gray-200 rounded-lg p-6">
                <h4 className="text-lg font-bold text-gray-900 mb-2">Progressive Disclosure</h4>
                <p className="text-gray-700 text-sm">Show essential information first. Hide complexity until needed.</p>
              </div>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Time and Timing</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Consider users who need more time:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li>No automatic timeouts for agent interactions</li>
              <li>Allow users to pause agent operations</li>
              <li>Provide ample time to review agent recommendations</li>
              <li>Don't auto-advance through agent messages</li>
              <li>Allow users to control animation speeds</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Motor Accessibility</h2>

            <div className="bg-orange-50 border-l-4 border-orange-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Touch Target Sizes</h3>
              <ul className="space-y-2 text-gray-700">
                <li>Minimum 44x44px touch targets for mobile</li>
                <li>Adequate spacing between clickable elements</li>
                <li>Large, easy-to-hit buttons for critical actions</li>
                <li>Support for voice commands as alternative input</li>
              </ul>
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mt-8 mb-4">Alternative Input Methods</h3>
            <p className="text-gray-700 leading-relaxed mb-6">
              Support diverse input methods:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li><strong>Voice input:</strong> Accept spoken prompts and commands</li>
              <li><strong>Switch access:</strong> Work with single-switch devices</li>
              <li><strong>Eye tracking:</strong> Support gaze-based interaction</li>
              <li><strong>Dictation:</strong> Allow users to dictate longer messages</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Testing for Accessibility</h2>

            <div className="bg-blue-50 border-l-4 border-blue-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Testing Strategy</h3>
              <ol className="space-y-2 text-gray-700 list-decimal list-inside">
                <li><strong>Automated testing:</strong> Use tools like axe, WAVE, Lighthouse</li>
                <li><strong>Screen reader testing:</strong> Test with NVDA, JAWS, VoiceOver</li>
                <li><strong>Keyboard-only testing:</strong> Navigate without mouse</li>
                <li><strong>Color contrast analysis:</strong> Check all color combinations</li>
                <li><strong>User testing:</strong> Include users with disabilities</li>
                <li><strong>Assistive tech testing:</strong> Test with switches, eye trackers</li>
              </ol>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Documentation and Training</h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Help users understand how to use agents accessibly:
            </p>

            <ul className="space-y-3 text-gray-700 mb-6">
              <li>Provide keyboard shortcut documentation</li>
              <li>Explain how to use agents with screen readers</li>
              <li>Offer alternative interaction methods</li>
              <li>Document accessibility features prominently</li>
              <li>Create video tutorials with captions</li>
            </ul>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Legal and Compliance</h2>

            <div className="bg-red-50 border-l-4 border-red-600 p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Key Regulations</h3>
              <ul className="space-y-2 text-gray-700">
                <li><strong>ADA (US):</strong> Americans with Disabilities Act</li>
                <li><strong>Section 508 (US):</strong> Federal accessibility standards</li>
                <li><strong>EAA (EU):</strong> European Accessibility Act</li>
                <li><strong>EN 301 549 (EU):</strong> EU accessibility standard</li>
                <li><strong>Accessibility for Ontarians with Disabilities Act (Canada)</strong></li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Best Practices Summary</h2>

            <div className="bg-purple-50 border-l-4 border-[#8B2EE5] p-6 my-8">
              <h3 className="text-xl font-bold text-gray-900 mb-3">Quick Checklist</h3>
              <ul className="space-y-2 text-gray-700">
                <li>✓ All functionality works with keyboard only</li>
                <li>✓ Screen reader announces agent status and responses</li>
                <li>✓ Minimum 4.5:1 color contrast (7:1 for AAA)</li>
                <li>✓ Clear focus indicators on all interactive elements</li>
                <li>✓ Alternative text for all images and icons</li>
                <li>✓ No time limits on agent interactions</li>
                <li>✓ Clear, simple language in agent messages</li>
                <li>✓ Support for text resizing without layout breaking</li>
                <li>✓ Error messages are clear and actionable</li>
                <li>✓ Regular accessibility audits and user testing</li>
              </ul>
            </div>

            <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
            <p className="text-gray-700 leading-relaxed">
              Accessible AI design ensures everyone can benefit from autonomous agents. By following WCAG guidelines, supporting assistive technologies, and testing with diverse users, you create inclusive experiences that work for all.
            </p>

            <div className="bg-gradient-to-r from-[#8B2EE5] to-[#7325C4] text-white rounded-2xl p-8 my-12">
              <h3 className="text-2xl font-bold mb-4">Build Accessible AI Experiences</h3>
              <p className="text-purple-100 mb-6">
                Start creating inclusive AI agents with our accessibility toolkit.
              </p>
              <Link to={createPageUrl('Contact')}>
                <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100">
                  Get Started
                </Button>
              </Link>
            </div>

          </motion.article>
        </div>
      </section>
    </div>
  );
}