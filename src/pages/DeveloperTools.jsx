import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Code, Terminal, Book, Boxes, Webhook, Cpu, CheckCircle, ArrowRight, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';

export default function DeveloperTools() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Developer Tools"
        description="Complete developer platform with REST & GraphQL APIs, SDKs in 8 languages, CLI tools, webhooks, and edge functions. 99.99% API uptime, <50ms response time."
        url="/developer-tools"
        keywords={['developer tools', 'API', 'SDK', 'CLI', 'webhooks', 'GraphQL', 'REST API', 'edge functions']}
        image="https://images.unsplash.com/photo-1555066925-5d3719e8b3a0?w=1200&h=630&fit=crop"
      />
      <BreadcrumbNav items={[
        { label: 'Home', page: 'Home' },
        { label: 'Developer Tools' }
      ]} />

      {/* Hero - Fold 1 */}
      <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 to-black" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-pink-500 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
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
            Developer Tools.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-red-400">
              Build faster.
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-2xl md:text-3xl text-gray-300 mb-12 max-w-4xl mx-auto leading-relaxed"
          >
            Everything developers need. APIs, SDKs, CLI tools, and documentation that doesn't suck.
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

      {/* API Performance - Fold 2 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              APIs that
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                just work
              </span>
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-12">
            {[
              { value: '99.99%', label: 'Uptime', sublabel: 'Last 12 months' },
              { value: '<50ms', label: 'Response time', sublabel: 'Global average' },
              { value: '2.5B', label: 'Daily requests', sublabel: 'All endpoints' },
              { value: '500K+', label: 'Developers', sublabel: 'Monthly active' }
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-6xl md:text-7xl font-bold text-purple-600 mb-4">{stat.value}</div>
                <div className="text-2xl font-semibold text-gray-900 mb-2">{stat.label}</div>
                <div className="text-lg text-gray-500">{stat.sublabel}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* REST & GraphQL - Fold 3 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                REST & GraphQL.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  Your choice.
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Use REST for simplicity or GraphQL for precision. Both fully supported with the same data.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Complete OpenAPI specs. Interactive playground. Auto-generated docs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
              </div>
              <pre className="text-green-400 text-sm">
{`POST /api/v1/agents
{
  "name": "support-bot",
  "model": "gpt-4",
  "instructions": "Help customers"
}

→ 201 Created
{
  "id": "agent_abc123",
  "status": "active",
  "created_at": "2025-01-14"
}`}
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SDKs - Fold 4 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              SDKs for every
              <br />
              language
            </h2>
            <p className="text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
              Type-safe libraries with full IntelliSense support
            </p>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-6">
            {[
              'JavaScript', 'Python', 'Go', 'Java',
              'Ruby', 'PHP', '.NET', 'Rust'
            ].map((lang, i) => (
              <motion.div
                key={lang}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 text-center"
              >
                <Code className="w-12 h-12 text-purple-300 mx-auto mb-4" />
                <div className="text-2xl font-bold">{lang}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CLI - Fold 5 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                Powerful CLI.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Deploy anywhere.
                </span>
              </h2>
              <p className="text-2xl text-gray-300 leading-relaxed mb-8">
                One-line installs. Deploy from your terminal in seconds.
              </p>
              <div className="space-y-4">
                {[
                  'Cross-platform support',
                  'Auto-completion',
                  'Interactive prompts',
                  'CI/CD integration'
                ].map((item, i) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3 text-xl"
                  >
                    <CheckCircle className="w-6 h-6 text-green-500" />
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
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800"
            >
              <pre className="text-green-400 text-lg">
{`$ npm install -g @1c/cli

$ 1c login
✓ Authenticated

$ 1c deploy
✓ Deployed in 8s`}
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Webhooks - Fold 6 */}
      <section className="min-h-screen flex items-center bg-white">
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
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800" 
                alt="Webhooks" 
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
                Real-time
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  webhooks
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Get instant notifications for every event. HMAC-signed. Automatically retried.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Test webhooks locally. Replay failed events. Monitor delivery in real-time.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Edge Functions - Fold 7 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Edge functions
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Deploy code to 150+ locations. Run closer to users with {'<'}10ms latency.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '<10ms', label: 'Cold start time' },
                { value: 'Zero', label: 'Configuration' },
                { value: 'Instant', label: 'Global deploy' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="text-5xl font-bold text-purple-600 mb-3">{item.value}</div>
                  <div className="text-xl text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Documentation - Fold 8 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <Book className="w-32 h-32 text-purple-400 mx-auto mb-12" />
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Docs that developers
              <br />
              actually read
            </h2>
            <p className="text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
              Interactive examples. Step-by-step guides. Search that works.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { title: 'API Reference', desc: 'Every endpoint documented with examples' },
              { title: 'Tutorials', desc: 'Learn by building real applications' },
              { title: 'Playground', desc: 'Test APIs directly in your browser' }
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Type Safety - Fold 9 */}
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
                Fully
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  type-safe
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Auto-generated TypeScript definitions. Catch errors before runtime.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                IntelliSense support in VS Code, WebStorm, and all major IDEs.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800" 
                alt="Code editor" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community - Fold 10 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Join the community
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              500K+ developers building with our platform
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '50K+', label: 'GitHub stars' },
                { value: '25K+', label: 'Discord members' },
                { value: '100K+', label: 'Forum posts' }
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="text-5xl font-bold text-purple-600 mb-3">{item.value}</div>
                  <div className="text-xl text-gray-600">{item.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Error Handling - Fold 12 */}
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
                Errors that
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  help you debug
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Detailed error messages. Stack traces. Logs. Everything you need to fix issues fast.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our errors actually tell you what went wrong and how to fix it.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?w=800" 
                alt="Error debugging" 
                className="w-full rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Rate Limiting - Fold 13 */}
      <section className="min-h-screen flex items-center bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Generous
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                rate limits
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Build without worrying about hitting limits
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: '10K', label: 'Requests/minute' },
                { value: 'Unlimited', label: 'Endpoints' },
                { value: 'Real-time', label: 'Usage stats' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg p-8"
                >
                  <div className="text-5xl font-bold text-purple-600 mb-3">{stat.value}</div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Versioning - Fold 14 */}
      <section className="min-h-screen flex items-center bg-gradient-to-br from-purple-900 to-pink-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-32">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-6xl md:text-7xl font-bold mb-8 leading-tight">
                API versioning.
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-300">
                  Done right.
                </span>
              </h2>
              <p className="text-2xl text-purple-100 leading-relaxed mb-8">
                Multiple API versions supported simultaneously. Migrate at your own pace.
              </p>
              <p className="text-xl text-purple-200 leading-relaxed">
                Breaking changes? Never without warning. Full deprecation timelines.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-gray-900 rounded-3xl p-8 border border-gray-800"
            >
              <pre className="text-green-400 text-base">
{`// Use any API version
const v1 = client.v1.agents.list()
const v2 = client.v2.agents.list()

// Automatic migration tools
$ 1c migrate v1 v2
✓ Code updated
✓ Tests passing`}
              </pre>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testing - Fold 15 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-8">
              Test in
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                production
              </span>
            </h2>
            <p className="text-2xl text-gray-600 mb-16 max-w-3xl mx-auto leading-relaxed">
              Sandbox environments. Test mode for all APIs. No risk.
            </p>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                { value: 'Unlimited', label: 'Test requests' },
                { value: 'Instant', label: 'Reset' },
                { value: 'Full', label: 'Feature parity' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-50 rounded-2xl shadow-lg p-8"
                >
                  <div className="text-5xl font-bold text-purple-600 mb-3">{stat.value}</div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Analytics - Fold 16 */}
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
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800" 
                alt="Analytics" 
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
                Analytics
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  built-in
                </span>
              </h2>
              <p className="text-2xl text-gray-600 leading-relaxed mb-8">
                Track every API call. Monitor usage. Optimize performance.
              </p>
              <p className="text-xl text-gray-600 leading-relaxed">
                Real-time dashboards show exactly how developers use your APIs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Migration Tools - Fold 17 */}
      <section className="min-h-screen flex items-center bg-black text-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold mb-8">
              Migrate from
              <br />
              anywhere
            </h2>
            <p className="text-2xl text-gray-300 mb-16 max-w-3xl mx-auto leading-relaxed">
              Automated migration tools for AWS, Azure, Google Cloud, and more
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {['AWS', 'Azure', 'GCP', 'Heroku', 'DigitalOcean', 'Vercel', 'Netlify', 'Railway'].map((platform, i) => (
                <motion.div
                  key={platform}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl p-6 text-center font-semibold"
                >
                  {platform}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust - Fold 18 */}
      <section className="min-h-screen flex items-center bg-white">
        <div className="max-w-7xl mx-auto px-6 py-32 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-6xl md:text-7xl font-bold text-gray-900 mb-16">
              Trusted worldwide
            </h2>
            <div className="grid md:grid-cols-4 gap-12 max-w-5xl mx-auto">
              {[
                { value: '500K+', label: 'Active developers' },
                { value: '2.5B', label: 'API calls/day' },
                { value: '180+', label: 'Countries' },
                { value: '99.99%', label: 'Reliability' }
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <div className="text-5xl font-bold text-purple-600 mb-2">{stat.value}</div>
                  <div className="text-xl text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA - Fold 19 */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-red-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-400 rounded-full blur-3xl" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-5xl mx-auto"
        >
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-8 leading-tight">
            Start building
            <br />
            today
          </h2>
          <p className="text-2xl md:text-3xl text-purple-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Get your API key in 30 seconds. No credit card required.
          </p>
          <Link to={createPageUrl('Onboarding')}>
            <Button className="bg-white text-purple-900 hover:bg-gray-100 rounded-full px-12 h-16 text-lg font-medium">
              Get started
            </Button>
          </Link>
          
          <div className="mt-20 grid grid-cols-3 gap-12 max-w-3xl mx-auto">
            <div>
              <div className="text-5xl font-bold mb-2">Free</div>
              <div className="text-purple-200">Forever</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">10K</div>
              <div className="text-purple-200">API calls/day</div>
            </div>
            <div>
              <div className="text-5xl font-bold mb-2">24/7</div>
              <div className="text-purple-200">Support</div>
            </div>
          </div>
        </motion.div>
      </section>
      <RelatedContent
        currentPage="DeveloperTools"
        category="product"
        crossCategories={['resources']}
        title="Explore Related Solutions"
      />
    </div>
  );
}