import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight, Code, Terminal, Book, Boxes, Webhook, Cpu, CheckCircle, Clock, Zap } from 'lucide-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PageMeta from '@/components/PageMeta';

const apiPerformance = [
  { endpoint: 'Auth', avgLatency: 28, requests: 450000 },
  { endpoint: 'Agents', avgLatency: 45, requests: 2800000 },
  { endpoint: 'Data', avgLatency: 32, requests: 1900000 },
  { endpoint: 'Search', avgLatency: 52, requests: 820000 }
];

const developerMetrics = [
  { metric: 'API Uptime', value: '99.99%', description: 'Last 12 months' },
  { metric: 'Avg Response', value: '<50ms', description: 'Global average' },
  { metric: 'Daily Requests', value: '2.5B', description: 'Across all endpoints' },
  { metric: 'SDK Downloads', value: '500K+', description: 'Monthly installs' }
];

const tools = [
  {
    icon: Code,
    name: 'REST & GraphQL APIs',
    description: 'Comprehensive API suite providing both REST and GraphQL interfaces for maximum flexibility in how you interact with our platform. Our REST API follows industry best practices with predictable resource-oriented URLs, accepts and returns JSON payloads, uses standard HTTP methods and response codes, and includes detailed error messages with debugging information. The GraphQL API provides a powerful alternative for clients needing fine-grained control over data fetching, enabling you to request exactly the fields you need in a single query while avoiding over-fetching and under-fetching problems common with REST. Both APIs include complete OpenAPI 3.0 specifications and GraphQL schemas with detailed descriptions of every endpoint, parameter, and response field. Interactive documentation lets you test API calls directly in your browser with syntax highlighting and example responses. Rate limiting is generous with 10,000 requests per minute on paid plans, and we provide detailed usage analytics so you can monitor your consumption and optimize your integration.',
    language: 'cURL, JavaScript, Python, Go, Java, Ruby'
  },
  {
    icon: Terminal,
    name: 'CLI Tools',
    description: 'Powerful command-line interface that brings the full capabilities of our platform to your terminal, enabling rapid deployment, testing, debugging, and infrastructure management without ever leaving your development environment. The CLI supports every platform feature accessible through our web dashboard and APIs, with additional developer-focused commands for local testing, log streaming, and debugging. Install with a single npm or pip command, authenticate once, and you\'re ready to deploy applications, manage databases, view real-time logs, run database migrations, execute remote commands, download backups, and configure infrastructure as code. The CLI includes intelligent autocomplete for all commands and parameters, colorized output for better readability, progress indicators for long-running operations, and the ability to output results in JSON format for scripting and automation. Built-in CI/CD integration makes it easy to incorporate deployment steps into your GitHub Actions, GitLab CI, Jenkins, or CircleCI pipelines.',
    language: 'Cross-platform: Bash, PowerShell, Zsh'
  },
  {
    icon: Boxes,
    name: 'SDKs & Libraries',
    description: 'Production-ready software development kits for every major programming language, providing idiomatic interfaces that feel natural to developers in each ecosystem while maintaining consistency across languages. All SDKs include full TypeScript definitions for JavaScript/TypeScript users, type hints for Python, and strongly typed interfaces for compiled languages ensuring compile-time safety and reducing runtime errors. Features include automatic retry logic with exponential backoff for transient failures, request deduplication to prevent accidental double-processing, built-in logging and debugging capabilities, connection pooling for optimal performance, streaming support for large responses, webhook signature verification helpers, and async/await support for modern asynchronous programming patterns. SDKs are open source, actively maintained with weekly updates, extensively tested with 95%+ code coverage, and include comprehensive inline documentation with IntelliSense support in popular IDEs. Install via your language standard package manager (npm, pip, Maven, Go modules, Bundler, Composer) and start making authenticated API calls in under 60 seconds.',
    language: 'JavaScript/TypeScript, Python, Java, Go, Ruby, PHP, .NET, Rust'
  },
  {
    icon: Webhook,
    name: 'Webhooks',
    description: 'Sophisticated webhook system that sends real-time HTTP notifications to your application whenever specific events occur in your account, enabling you to build reactive integrations, trigger automated workflows, and keep external systems synchronized without polling APIs. Subscribe to events including user registrations, data changes, payment processing, AI agent completions, and hundreds of other triggers. Each webhook delivery includes a cryptographically signed payload using HMAC-SHA256 so you can verify the request authenticity and prevent spoofing attacks. Our infrastructure guarantees at-least-once delivery with automatic retries using exponential backoff for failed deliveries, stores event history for 30 days so you can replay missed events, provides webhook logs showing delivery attempts and responses, and includes a testing interface for simulating events during development. Configure multiple webhook endpoints for different event types, add custom headers for routing or authentication, filter events with sophisticated query logic, and transform payloads using JavaScript functions before delivery.',
    language: 'HTTP POST with HMAC signatures, retry logic'
  },
  {
    icon: Cpu,
    name: 'Edge Functions',
    description: 'Serverless compute platform that executes your code at the edge, closer to your users, delivering response times under 10 milliseconds globally compared to 200-500ms for traditional server-based architectures. Deploy JavaScript, TypeScript, or WebAssembly functions to our network of 150+ edge locations and we will automatically route each request to the optimal location based on user geography, current load, and health status. Edge functions are perfect for API endpoints, authentication logic, A/B testing, personalization, content transformation, and any logic that needs to run before reaching your origin servers. Each function runs in a secure V8 isolate with no cold starts, automatic scaling from zero to millions of concurrent executions, built-in caching with fine-grained control, access to edge key-value storage for stateful operations, and the ability to modify requests and responses in flight. Deploy code in under 60 seconds globally with automatic distribution to all edge locations, zero-downtime deployments, instant rollback capabilities, and comprehensive logging and monitoring built-in.',
    language: 'JavaScript, TypeScript, WebAssembly, Rust'
  },
  {
    icon: Book,
    name: 'Interactive Docs',
    description: 'Award-winning documentation platform that combines comprehensive reference materials, step-by-step tutorials, best practice guides, and interactive code examples into one seamless learning experience. Every API endpoint includes working code examples in all supported languages that you can copy, modify, and execute directly in the browser using our live API playground with your actual API credentials. The playground automatically generates code in your preferred language based on the parameters you configure through a visual interface, making it trivial to test ideas and prototype integrations. Documentation includes detailed conceptual guides explaining architecture and design patterns, migration guides for transitioning from other platforms, troubleshooting sections with solutions to common issues, video tutorials walking through complex implementations, and a community forum where you can get help from our developer relations team and thousands of other developers building on the platform. Everything is searchable, version-controlled to match your API version, and updated continuously.',
    language: 'Interactive playground with live examples'
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
      <PageMeta 
        title="Developer Tools"
        description="Complete developer platform with REST & GraphQL APIs, SDKs in 8 languages, CLI tools, webhooks, and edge functions. 99.99% API uptime, <50ms response time."
        url="/developer-tools"
        keywords={['developer tools', 'API', 'SDK', 'CLI', 'webhooks', 'GraphQL', 'REST API', 'edge functions']}
      />
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
                Everything you need to integrate Agentic Ai into your applications with confidence and speed. Our developer platform combines modern, well-designed APIs that follow RESTful principles and industry standards, comprehensive SDKs in every major programming language with full type safety and intelligent autocomplete, world-class documentation with interactive examples and tutorials, powerful CLI tools for rapid development and deployment, and a thriving community of developers building innovative AI-powered solutions. Whether you're a solo developer building your first AI integration or an engineering team at a Fortune 500 company deploying mission-critical AI infrastructure, our platform provides the tools, support, and reliability you need to succeed. We obsess over developer experience, measuring success not just by uptime and performance but by how quickly developers can go from signup to first successful API call (currently averaging 4.2 minutes).
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

      {/* API Performance */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              API performance metrics
            </h2>
            <p className="text-xl text-gray-600">
              Real-time insights into our API reliability and speed across all endpoints.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-12">
            {developerMetrics.map((item, index) => (
              <motion.div
                key={item.metric}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="text-sm text-gray-500 mb-2">{item.metric}</div>
                    <div className="text-3xl font-bold text-[#8B2EE5] mb-1">{item.value}</div>
                    <div className="text-xs text-gray-500">{item.description}</div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <Card>
            <CardHeader>
              <CardTitle>API Endpoint Performance</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={apiPerformance}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="endpoint" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Bar yAxisId="right" dataKey="avgLatency" fill="#8B2EE5" name="Latency (ms)" />
                  <Bar yAxisId="left" dataKey="requests" fill="#A855F7" name="Daily Requests" />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
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
              Everything you need to build, test, deploy, and monitor Agentic Ai-powered applications in production. Our developer tools are designed to maximize your productivity and minimize the time from idea to deployment, with thoughtful features that handle the mundane infrastructure tasks so you can focus on building exceptional user experiences and solving unique business problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all border-gray-200">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <tool.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-2xl">{tool.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-4 leading-relaxed">{tool.description}</p>
                    <div className="inline-block px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-full text-sm text-[#8B2EE5] font-medium">
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
                Average API response time under 50ms globally with p99 latency under 200ms. Our infrastructure is built for performance at massive scale, handling billions of requests daily with consistent speed regardless of load. We achieve this through aggressive caching at multiple layers, optimized database queries with connection pooling, strategically distributed edge locations that serve requests from the nearest datacenter, and continuous performance monitoring that identifies and resolves bottlenecks before they impact users.
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
                Full TypeScript support with auto-generated types for every API endpoint, request parameter, and response field. Our type definitions are generated directly from the same OpenAPI specifications that power our API, ensuring perfect accuracy and eliminating the drift between documentation and reality that plagues many APIs. This means your IDE provides accurate autocomplete suggestions, catches type errors at compile time before they reach production, and gives you confidence that your code will work correctly the first time.
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
                Comprehensive documentation that developers consistently rate as best-in-class, including detailed API references for every endpoint with request/response schemas, step-by-step tutorials for common integration patterns, conceptual guides explaining platform architecture and design decisions, security best practices and compliance guidance, migration guides from competing platforms, troubleshooting sections with solutions to common issues, and a searchable knowledge base with hundreds of articles. Every code example is tested and runnable, with syntax highlighting and copy-to-clipboard functionality.
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
              Get your API key and make your first request in under 5 minutes with our quickstart guide that walks you through authentication, making your first API call, handling responses, and deploying your first Agentic Ai agent. Our free tier includes everything you need to build and test your integration with no credit card required, and our support team is standing by to help you succeed. Join over 500,000 developers worldwide who have chosen our platform for its combination of power, simplicity, and reliability.
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