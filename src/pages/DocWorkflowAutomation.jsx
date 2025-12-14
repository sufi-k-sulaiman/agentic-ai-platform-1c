import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Workflow } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function DocWorkflowAutomation() {
  return (
    <div className="bg-white min-h-screen">
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
            <div className="w-16 h-16 bg-indigo-100 rounded-xl flex items-center justify-center">
              <Workflow className="w-8 h-8 text-indigo-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Workflow Automation</h1>
          </div>

          <p className="text-xl text-gray-600 mb-12">Build complex multi-step workflows with conditional logic</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Creating a Workflow</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`const workflow = await client.workflows.create({
  name: 'customer-onboarding',
  trigger: {
    type: 'webhook',
    event: 'user.created'
  },
  steps: [
    {
      id: 'send-welcome-email',
      type: 'email',
      template: 'welcome',
      to: '{{user.email}}'
    },
    {
      id: 'assign-agent',
      type: 'agent',
      agent_id: 'onboarding-agent',
      message: 'Help user get started'
    },
    {
      id: 'create-ticket',
      type: 'integration',
      service: 'zendesk',
      action: 'create_ticket'
    }
  ]
});`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Conditional Logic</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`{
  id: 'check-plan',
  type: 'condition',
  if: '{{user.plan}} == "enterprise"',
  then: [
    {
      id: 'assign-success-manager',
      type: 'task'
    }
  ],
  else: [
    {
      id: 'send-self-serve-guide',
      type: 'email'
    }
  ]
}`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Error Handling</h2>
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-6">
                  <p className="text-gray-700">Workflows automatically retry failed steps with exponential backoff. Configure retry behavior:</p>
                  <div className="bg-white rounded-lg p-4 mt-4">
                    <code className="text-sm">{`retry_policy: { max_attempts: 3, backoff: 'exponential' }`}</code>
                  </div>
                </CardContent>
              </Card>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}