import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Bot, Brain, Zap, Shield, RefreshCw, Network, ArrowRight, CheckCircle, TrendingUp, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function AgenticAI() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Agentic AI"
        description="Deploy autonomous AI agents that think, decide, and act. No-code builder, multi-agent orchestration, and enterprise-grade security. 70% faster response times."
        url="/agentic-ai"
        keywords={['Agentic AI', 'autonomous agents', 'AI automation', 'intelligent agents', 'no-code AI', 'multi-agent systems']}
      />

      {/* Hero - Fold 1 */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-[1.05]"
          >
            Agentic Ai
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400">
              Think. Decide. Act.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Autonomous AI agents that work independently. No supervision required.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-black hover:bg-gray-200 rounded-full px-12 h-16 text-lg font-medium">
                Get started
              </Button>
            </Link>
          </motion.div>
        </motion.div>

        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center p-2">
            <div className="w-1 h-3 bg-white/50 rounded-full" />
          </div>
        </div>
      </section>

      {/* Cognitive Power - Fold 2 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                True cognitive
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  reasoning
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Not just automation. Real intelligence that understands context, analyzes patterns, and makes decisions.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our agents process information like humans do—considering multiple factors, weighing options, and choosing the best path forward.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-square"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-100 to-purple-100 rounded-3xl" />
              <div className="absolute inset-0 flex items-center justify-center">
                <Brain className="w-48 h-48 text-indigo-600" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real-time Action - Fold 3 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1 relative aspect-square"
            >
              <img 
                src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800" 
                alt="Real-time Processing" 
                className="w-full h-full object-cover rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Lightning fast
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  execution
                </span>
              </h2>
              <div className="space-y-6">
                <div>
                  <div className="text-5xl font-bold text-indigo-600 mb-2">&lt;100ms</div>
                  <div className="text-xl text-gray-600">Average response time</div>
                </div>
                <div>
                  <div className="text-5xl font-bold text-indigo-600 mb-2">10M+</div>
                  <div className="text-xl text-gray-600">Actions per day</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Multi-Agent - Fold 4 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Multi-agent
              <br />
              orchestration
            </h2>
            <p className="text-2xl text-indigo-200 max-w-3xl mx-auto leading-relaxed">
              Deploy teams of specialized agents that work together to solve complex problems
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Bot, title: 'Customer Service', agents: '12 agents', tasks: '50K tasks/day' },
              { icon: Brain, title: 'Data Analysis', agents: '8 agents', tasks: '25K tasks/day' },
              { icon: Zap, title: 'Sales Automation', agents: '15 agents', tasks: '75K tasks/day' }
            ].map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8"
              >
                <item.icon className="w-16 h-16 text-indigo-300 mb-6" />
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <div className="space-y-2 text-indigo-200">
                  <div>{item.agents}</div>
                  <div>{item.tasks}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Continuous Learning - Fold 5 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Learns and
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  improves
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-12">
                Every interaction makes your agents smarter. Patterns emerge. Performance optimizes automatically.
              </p>
              <div className="space-y-4">
                {[
                  'Self-optimizing workflows',
                  'Pattern recognition',
                  'Predictive analytics',
                  'Adaptive responses'
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-xl text-gray-700"
                  >
                    <CheckCircle className="w-6 h-6 text-green-600" />
                    {item}
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" 
                alt="Analytics" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enterprise Security - Fold 6 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-32 h-32 text-indigo-400 mx-auto mb-12" />
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Enterprise-grade
              <br />
              security
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              SOC 2 Type II certified. GDPR compliant. Your data is encrypted and protected at every layer.
            </p>
            <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
              {[
                { value: '256-bit', label: 'Encryption' },
                { value: '99.99%', label: 'Uptime SLA' },
                { value: '24/7', label: 'Monitoring' },
                { value: 'Zero', label: 'Data retention' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-5xl font-bold text-indigo-400 mb-2">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* No-Code Builder - Fold 7 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Build agents.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                No code needed.
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Visual builder with drag-and-drop simplicity. Deploy production-ready agents in minutes.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200" 
              alt="No-code builder" 
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Real Results - Fold 8 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Real results.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Real impact.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              { icon: TrendingUp, value: '70%', label: 'Faster response times', color: 'text-green-600' },
              { icon: Clock, value: '24/7', label: 'Always available', color: 'text-blue-600' },
              { icon: Target, value: '95%', label: 'Accuracy rate', color: 'text-purple-600' }
            ].map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="text-center"
              >
                <item.icon className={`w-20 h-20 ${item.color} mx-auto mb-6`} />
                <div className="text-6xl font-bold text-gray-900 mb-4">{item.value}</div>
                <div className="text-2xl text-gray-600">{item.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Support - Fold 10 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Transform
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  customer support
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                AI agents that handle 90% of customer inquiries instantly. 24/7 availability.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">90%</div>
                  <div className="text-gray-600">Auto-resolved</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">{'<'}30s</div>
                  <div className="text-gray-600">Response time</div>
                </div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800" 
                alt="Customer Support" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sales Automation - Fold 11 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-2 lg:order-1"
            >
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800" 
                alt="Sales Dashboard" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="order-1 lg:order-2"
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Automate
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                  your sales
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Qualify leads, schedule meetings, send follow-ups. All automated.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">3x</div>
                  <div className="text-gray-600">More leads</div>
                </div>
                <div>
                  <div className="text-4xl font-bold text-indigo-600 mb-2">50%</div>
                  <div className="text-gray-600">Higher conversion</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Analysis - Fold 12 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Intelligent
              <br />
              data analysis
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              AI that finds insights humans miss. Automatic anomaly detection and predictive analytics.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '1M+', label: 'Data points/sec' },
                { value: '99.9%', label: 'Accuracy' },
                { value: 'Real-time', label: 'Insights' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
                >
                  <div className="text-5xl font-bold text-indigo-400 mb-3">{stat.value}</div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Workflow Automation - Fold 13 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Complex workflows.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Simple execution.
              </span>
            </h2>
            <p className="text-2xl text-gray-600 max-w-3xl mx-auto">
              Chain multiple agents together. Handle complex multi-step processes automatically.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200" 
              alt="Workflow automation" 
              className="w-full rounded-3xl shadow-2xl"
            />
          </motion.div>
        </div>
      </section>

      {/* Integration - Fold 14 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Connects with
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                everything
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              1,000+ pre-built integrations. Or build your own in minutes.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {['Salesforce', 'Slack', 'HubSpot', 'Zendesk', 'Shopify', 'Stripe', 'Gmail', 'Notion'].map((app, i) => (
                <motion.div
                  key={app}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white rounded-2xl shadow-md p-6 text-center font-semibold text-gray-900"
                >
                  {app}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Compliance - Fold 15 */}
      <section className="min-h-screen flex items-center bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Shield className="w-32 h-32 text-indigo-400 mx-auto mb-12" />
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Compliance
              <br />
              built-in
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              SOC 2, GDPR, HIPAA, CCPA. We handle the complexity.
            </p>
            <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto">
              {['SOC 2 Type II', 'ISO 27001', 'GDPR', 'HIPAA'].map((cert, i) => (
                <motion.div
                  key={cert}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6"
                >
                  <div className="text-xl font-bold">{cert}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ROI Calculator - Fold 16 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Calculate your
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                ROI
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              See how much you could save with AI automation
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '$150K', label: 'Avg annual savings' },
                { value: '1,200', label: 'Hours saved/month' },
                { value: '6 months', label: 'Avg payback period' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl shadow-lg p-8"
                >
                  <div className="text-5xl font-bold text-indigo-600 mb-3">{stat.value}</div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Case Studies - Fold 17 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Real companies.
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                Real results.
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { company: 'TechCorp', stat: '85%', metric: 'Cost reduction', industry: 'SaaS' },
              { company: 'RetailCo', stat: '3x', metric: 'Sales increase', industry: 'E-commerce' },
              { company: 'HealthPlus', stat: '95%', metric: 'Patient satisfaction', industry: 'Healthcare' }
            ].map((item, i) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white rounded-3xl shadow-lg p-8"
              >
                <div className="text-sm text-indigo-600 font-semibold mb-4">{item.industry}</div>
                <div className="text-5xl font-bold text-gray-900 mb-2">{item.stat}</div>
                <div className="text-xl text-gray-600 mb-6">{item.metric}</div>
                <div className="text-2xl font-bold text-gray-900">{item.company}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust - Fold 18 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-indigo-900 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-16">
              Trusted by leaders
            </h2>
            <div className="grid md:grid-cols-4 gap-12 max-w-5xl mx-auto">
              {[
                { value: '10K+', label: 'Companies' },
                { value: '50M+', label: 'Tasks automated' },
                { value: '150', label: 'Countries' },
                { value: '99.9%', label: 'Satisfaction' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-5xl font-bold mb-2">{stat.value}</div>
                  <div className="text-indigo-200">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Fold 19 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 via-purple-900 to-pink-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-400 rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Ready to deploy
            <br />
            your first agent?
          </h2>
          <p className="text-2xl md:text-3xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join 10,000+ companies automating with AI
          </p>
          <Link to={createPageUrl('Onboarding')}>
            <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-12 h-16 text-lg font-medium">
              Get started
            </Button>
          </Link>
          
          <div className="mt-20 grid grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div>
              <div className="text-5xl font-bold mb-2">Free</div>
              <div className="text-purple-200">to start</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">5 min</div>
              <div className="text-purple-200">to deploy</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-purple-200">support</div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}