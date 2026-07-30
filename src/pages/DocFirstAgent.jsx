import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Brain, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function DocFirstAgent() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta
        title="Building Your First AI Agent"
        description="Learn how to create, configure, and deploy your first autonomous AI agent on 1C Platform."
        url="/DocFirstAgent"
        keywords={['first AI agent', 'agent creation', 'agent tutorial', 'autonomous agent', 'no-code AI']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Documentation', url: '/Documentation' }, { name: 'First Agent', url: '/DocFirstAgent' }]}
        howTo={{
          name: 'Building Your First AI Agent',
          description: 'Step-by-step guide to creating and deploying your first autonomous AI agent',
          steps: [
            { name: 'Choose a template', text: 'Browse the agent template gallery and select a template that matches your use case, or start from a blank agent.' },
            { name: 'Configure the agent', text: 'Set the agent name, description, system prompt, and select the AI model that powers your agent.' },
            { name: 'Add tools and integrations', text: 'Connect tools like databases, APIs, and external services that your agent needs to interact with.' },
            { name: 'Test in the sandbox', text: 'Run your agent in the sandbox environment to test its behavior with sample inputs before going live.' },
            { name: 'Deploy to production', text: 'Once tested, deploy your agent with a single click. Monitor its performance and iterate as needed.' },
          ],
        }}
      />
      <div className="max-w-4xl mx-auto px-6 py-24">
        <Link to={createPageUrl('Documentation')} className="inline-flex items-center text-[#8B2EE5] hover:underline mb-8">
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Documentation
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
              <Brain className="w-8 h-8 text-[#8B2EE5]" />
            </div>
            <div>
              <h1 className="text-5xl font-bold text-gray-900">Your First Agent</h1>
              <p className="text-gray-600">Quick Start Guide</p>
            </div>
          </div>

          <p className="text-xl text-gray-600 mb-12">Create and deploy your first AI agent in under 5 minutes</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">What You'll Build</h2>
              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="p-6">
                  <p className="text-gray-700 mb-4">In this guide, you'll create a customer support agent that can:</p>
                  <ul className="space-y-2">
                    {['Answer common questions automatically', 'Route complex issues to humans', 'Learn from interactions', 'Integrate with your existing tools'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-purple-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 1: Create the Agent</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`import { OneC } from '@1cplatform/sdk';

const client = new OneC({
  apiKey: process.env.ONEC_API_KEY
});

const agent = await client.agents.create({
  name: 'customer-support',
  model: 'gpt-4',
  instructions: \`You are a helpful customer support agent.
  Be friendly, concise, and always prioritize customer satisfaction.\`,
  tools: ['knowledge_base', 'ticket_creation']
});

console.log('Agent created:', agent.id);`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 2: Configure Agent Settings</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`await client.agents.update(agent.id, {
  temperature: 0.7,
  max_tokens: 500,
  response_format: 'markdown',
  fallback_behavior: 'escalate_to_human'
});`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 3: Test Your Agent</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`const response = await client.agents.chat(agent.id, {
  message: 'How do I reset my password?'
});

console.log('Agent response:', response.message);`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 4: Deploy to Production</h2>
              <p className="text-gray-700 mb-4">Once you're satisfied with your agent's performance:</p>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`await client.agents.deploy(agent.id, {
  environment: 'production',
  auto_scaling: true,
  rate_limit: 1000 // requests per minute
});`}</code>
                </pre>
              </div>
            </section>

            <section className="border-t pt-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Next?</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to={createPageUrl('DocWorkflowAutomation')}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">Workflow Automation →</h3>
                      <p className="text-sm text-gray-600">Build complex automated workflows</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to={createPageUrl('DocDataIntegration')}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">Data Integration →</h3>
                      <p className="text-sm text-gray-600">Connect to your data sources</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}