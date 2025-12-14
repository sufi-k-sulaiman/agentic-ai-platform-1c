import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, Code, Terminal, Book, Boxes, Webhook, Cpu } from 'lucide-react';

const tools = [
  {
    icon: Code,
    name: 'REST & GraphQL APIs',
    description: 'Comprehensive APIs with OpenAPI specs, GraphQL schemas, and interactive documentation.',
    language: 'cURL, JavaScript, Python, Go'
  },
  {
    icon: Terminal,
    name: 'CLI Tools',
    description: 'Command-line tools for deployment, testing, and infrastructure management.',
    language: 'Bash, PowerShell'
  },
  {
    icon: Boxes,
    name: 'SDKs & Libraries',
    description: 'Native SDKs for all major languages with type safety and intelligent autocomplete.',
    language: 'JavaScript, Python, Java, Go, Ruby, PHP'
  },
  {
    icon: Webhook,
    name: 'Webhooks',
    description: 'Real-time event notifications for every action in your platform.',
    language: 'HTTP POST with signatures'
  },
  {
    icon: Cpu,
    name: 'Edge Functions',
    description: 'Deploy serverless functions to our global edge network for ultra-low latency.',
    language: 'JavaScript, TypeScript, WebAssembly'
  },
  {
    icon: Book,
    name: 'Interactive Docs',
    description: 'Comprehensive documentation with live code examples and API playground.',
    language: 'Try it live'
  }
];

const codeExample = `import { OneC } from '@1cplatform/sdk';

const client = new OneC({
  apiKey: process.env.ONEC_API_KEY
});

// Deploy an AI agent
const agent = await client.agents.create({
  name: 'customer-support',
  model: 'gpt-4',
  instructions: 'Help customers with inquiries',
  tools: ['knowledge_base', 'ticket_system']
});

// Execute a workflow
const result = await agent.run({
  input: 'Customer wants refund for order #12345'
});

console.log(result.output);`;

export default function DeveloperTools() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Code className="w-4 h-4" />
                Developer Tools
              </div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
                Built for
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  developers
                </span>
              </h1>
              <p className="text-2xl text-gray-600 leading-relaxed mb-10">
                Everything you need to integrate AI into your applications. Modern APIs, comprehensive SDKs, and world-class documentation.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14 text-base">
                  Get API key <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14 text-base">
                  Read docs
                </Button>
              </div>
            </motion.div>

            {/* Code Example */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden">
                <div className="flex items-center gap-2 px-4 py-3 border-b border-gray-800">
                  <div className="w-3 h-3 bg-red-500 rounded-full" />
                  <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                  <div className="w-3 h-3 bg-green-500 rounded-full" />
                  <span className="ml-2 text-sm text-gray-400">app.js</span>
                </div>
                <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                  <code>{codeExample}</code>
                </pre>
              </div>
              <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                ✓ Works in seconds
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Powerful developer tools
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to build, test, and deploy AI-powered applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-gray-200">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <tool.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{tool.name}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>
                    <div className="inline-block px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">
                      {tool.language}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#8B2EE5] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Lightning fast</h3>
              <p className="text-gray-600 leading-relaxed">
                Average API response time under 50ms globally. Built for performance at scale.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#8B2EE5] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Type-safe</h3>
              <p className="text-gray-600 leading-relaxed">
                Full TypeScript support with auto-generated types for every API endpoint.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-[#8B2EE5] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Well documented</h3>
              <p className="text-gray-600 leading-relaxed">
                Comprehensive guides, tutorials, and API references with live examples.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start building in minutes
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Get your API key and make your first request in under 5 minutes.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
                Get started free <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full border-gray-300 px-10 h-16 text-lg">
                View documentation
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}