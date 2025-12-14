import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Code } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function DocAPIReference() {
  const endpoints = [
    {
      method: 'POST',
      path: '/v1/agents',
      description: 'Create a new AI agent',
      color: 'bg-green-100 text-green-700'
    },
    {
      method: 'GET',
      path: '/v1/agents/{id}',
      description: 'Get agent details',
      color: 'bg-blue-100 text-blue-700'
    },
    {
      method: 'PUT',
      path: '/v1/agents/{id}',
      description: 'Update agent configuration',
      color: 'bg-yellow-100 text-yellow-700'
    },
    {
      method: 'DELETE',
      path: '/v1/agents/{id}',
      description: 'Delete an agent',
      color: 'bg-red-100 text-red-700'
    },
    {
      method: 'POST',
      path: '/v1/agents/{id}/chat',
      description: 'Send message to agent',
      color: 'bg-green-100 text-green-700'
    }
  ];

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
            <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center">
              <Code className="w-8 h-8 text-blue-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">API Reference</h1>
          </div>

          <p className="text-xl text-gray-600 mb-12">Complete REST API documentation for all endpoints</p>

          <div className="space-y-6">
            {endpoints.map((endpoint, index) => (
              <motion.div
                key={endpoint.path}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <span className={`px-3 py-1 rounded-lg text-sm font-bold ${endpoint.color}`}>
                        {endpoint.method}
                      </span>
                      <div className="flex-1">
                        <code className="text-lg font-mono text-gray-900">{endpoint.path}</code>
                        <p className="text-gray-600 mt-2">{endpoint.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Example Request</h2>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-6 text-sm text-gray-300">
                <code>{`POST https://api.1cplatform.com/v1/agents
Authorization: Bearer YOUR_API_KEY
Content-Type: application/json

{
  "name": "customer-support",
  "model": "gpt-4",
  "instructions": "You are a helpful assistant",
  "temperature": 0.7
}`}</code>
              </pre>
            </div>
          </section>

          <section className="mt-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Example Response</h2>
            <div className="bg-gray-900 rounded-xl overflow-hidden">
              <pre className="p-6 text-sm text-gray-300">
                <code>{`{
  "id": "agent_123abc",
  "name": "customer-support",
  "model": "gpt-4",
  "created_at": "2025-01-15T10:30:00Z",
  "status": "active"
}`}</code>
              </pre>
            </div>
          </section>
        </motion.div>
      </div>
    </div>
  );
}