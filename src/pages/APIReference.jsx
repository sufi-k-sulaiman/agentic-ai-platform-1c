import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Code, Terminal, Copy, Key, Shield, Zap, AlertCircle, Check, Clock, Globe, Package, Webhook, PlayCircle } from 'lucide-react';
import { toast } from 'sonner';
import PageMeta from '@/components/PageMeta';

const endpoints = [
  {
    category: 'Agents',
    methods: [
      {
        method: 'POST',
        path: '/v1/agents',
        description: 'Create a new AI agent with custom instructions and tools',
        params: [
          { name: 'name', type: 'string', required: true, description: 'Agent name' },
          { name: 'model', type: 'string', required: true, description: 'Model (gpt-4, gpt-3.5-turbo)' },
          { name: 'instructions', type: 'string', required: true, description: 'System instructions' },
          { name: 'tools', type: 'array', required: false, description: 'Available tools' },
          { name: 'temperature', type: 'float', required: false, description: '0-1, controls randomness' }
        ],
        response: {
          id: 'agent_abc123',
          name: 'customer-support',
          model: 'gpt-4',
          status: 'active',
          created_at: '2024-01-15T10:30:00Z'
        }
      },
      {
        method: 'GET',
        path: '/v1/agents',
        description: 'List all agents with pagination',
        params: [
          { name: 'limit', type: 'integer', required: false, description: 'Max results (default: 20)' },
          { name: 'offset', type: 'integer', required: false, description: 'Pagination offset' },
          { name: 'status', type: 'string', required: false, description: 'Filter by status' }
        ],
        response: {
          data: [{ id: 'agent_abc123', name: 'customer-support' }],
          total: 42,
          has_more: true
        }
      },
      {
        method: 'GET',
        path: '/v1/agents/{id}',
        description: 'Get detailed information about a specific agent',
        params: [
          { name: 'id', type: 'string', required: true, description: 'Agent ID' }
        ],
        response: {
          id: 'agent_abc123',
          name: 'customer-support',
          model: 'gpt-4',
          instructions: 'Help customers...',
          tools: ['knowledge_base'],
          status: 'active'
        }
      },
      {
        method: 'PATCH',
        path: '/v1/agents/{id}',
        description: 'Update agent configuration',
        params: [
          { name: 'id', type: 'string', required: true, description: 'Agent ID' },
          { name: 'name', type: 'string', required: false, description: 'New name' },
          { name: 'instructions', type: 'string', required: false, description: 'Updated instructions' }
        ]
      },
      {
        method: 'DELETE',
        path: '/v1/agents/{id}',
        description: 'Permanently delete an agent',
        params: [
          { name: 'id', type: 'string', required: true, description: 'Agent ID' }
        ],
        response: { success: true, message: 'Agent deleted' }
      }
    ]
  },
  {
    category: 'Conversations',
    methods: [
      {
        method: 'POST',
        path: '/v1/agents/{agent_id}/conversations',
        description: 'Start a new conversation with an agent',
        params: [
          { name: 'agent_id', type: 'string', required: true, description: 'Agent ID' },
          { name: 'metadata', type: 'object', required: false, description: 'Custom metadata' }
        ],
        response: {
          id: 'conv_xyz789',
          agent_id: 'agent_abc123',
          created_at: '2024-01-15T10:30:00Z'
        }
      },
      {
        method: 'POST',
        path: '/v1/conversations/{id}/messages',
        description: 'Send a message in a conversation',
        params: [
          { name: 'id', type: 'string', required: true, description: 'Conversation ID' },
          { name: 'content', type: 'string', required: true, description: 'Message content' },
          { name: 'stream', type: 'boolean', required: false, description: 'Enable streaming' }
        ],
        response: {
          id: 'msg_def456',
          role: 'assistant',
          content: 'Response text...',
          created_at: '2024-01-15T10:30:05Z'
        }
      }
    ]
  },
  {
    category: 'Workflows',
    methods: [
      {
        method: 'POST',
        path: '/v1/workflows',
        description: 'Create an automated workflow',
        params: [
          { name: 'name', type: 'string', required: true, description: 'Workflow name' },
          { name: 'steps', type: 'array', required: true, description: 'Workflow steps' },
          { name: 'triggers', type: 'array', required: true, description: 'Trigger conditions' }
        ]
      },
      {
        method: 'GET',
        path: '/v1/workflows',
        description: 'List all workflows',
        params: [
          { name: 'limit', type: 'integer', required: false, description: 'Max results' },
          { name: 'offset', type: 'integer', required: false, description: 'Pagination offset' }
        ]
      },
      {
        method: 'POST',
        path: '/v1/workflows/{id}/execute',
        description: 'Execute a workflow',
        params: [
          { name: 'id', type: 'string', required: true, description: 'Workflow ID' },
          { name: 'input', type: 'object', required: true, description: 'Input data' }
        ],
        response: {
          execution_id: 'exec_ghi789',
          status: 'running',
          started_at: '2024-01-15T10:30:00Z'
        }
      }
    ]
  },
  {
    category: 'Data',
    methods: [
      {
        method: 'POST',
        path: '/v1/datasets',
        description: 'Upload and index a dataset',
        params: [
          { name: 'name', type: 'string', required: true, description: 'Dataset name' },
          { name: 'file', type: 'file', required: true, description: 'Data file' },
          { name: 'schema', type: 'object', required: false, description: 'Data schema' }
        ]
      },
      {
        method: 'GET',
        path: '/v1/datasets',
        description: 'List all datasets',
        params: [
          { name: 'limit', type: 'integer', required: false, description: 'Max results' },
          { name: 'offset', type: 'integer', required: false, description: 'Pagination offset' }
        ]
      },
      {
        method: 'POST',
        path: '/v1/datasets/{id}/query',
        description: 'Query dataset with semantic search',
        params: [
          { name: 'id', type: 'string', required: true, description: 'Dataset ID' },
          { name: 'query', type: 'string', required: true, description: 'Search query' },
          { name: 'top_k', type: 'integer', required: false, description: 'Number of results' }
        ]
      }
    ]
  }
];

const errorCodes = [
  { code: 200, status: 'OK', description: 'Request successful' },
  { code: 201, status: 'Created', description: 'Resource created successfully' },
  { code: 400, status: 'Bad Request', description: 'Invalid request parameters' },
  { code: 401, status: 'Unauthorized', description: 'Missing or invalid API key' },
  { code: 403, status: 'Forbidden', description: 'Insufficient permissions' },
  { code: 404, status: 'Not Found', description: 'Resource not found' },
  { code: 429, status: 'Too Many Requests', description: 'Rate limit exceeded' },
  { code: 500, status: 'Internal Server Error', description: 'Server error' },
  { code: 503, status: 'Service Unavailable', description: 'Service temporarily unavailable' }
];

const sdks = [
  { name: 'JavaScript/TypeScript', package: '@1cplatform/sdk', version: '2.4.0', install: 'npm install @1cplatform/sdk' },
  { name: 'Python', package: 'onec-sdk', version: '1.8.2', install: 'pip install onec-sdk' },
  { name: 'Go', package: 'github.com/1c/go-sdk', version: '0.9.1', install: 'go get github.com/1c/go-sdk' },
  { name: 'Ruby', package: 'onec-ruby', version: '1.5.0', install: 'gem install onec-ruby' }
];

const codeExamples = {
  curl: `curl -X POST https://api.1cplatform.com/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d '{
    "name": "customer-support",
    "model": "gpt-4",
    "instructions": "Help customers with their questions",
    "tools": ["knowledge_base"]
  }'`,
  javascript: `import { OneC } from '@1cplatform/sdk';

const client = new OneC({
  apiKey: process.env.ONEC_API_KEY
});

const agent = await client.agents.create({
  name: 'customer-support',
  model: 'gpt-4',
  instructions: 'Help customers with their questions',
  tools: ['knowledge_base']
});`,
  python: `from onec import OneC

client = OneC(api_key=os.environ.get('ONEC_API_KEY'))

agent = client.agents.create(
    name='customer-support',
    model='gpt-4',
    instructions='Help customers with their questions',
    tools=['knowledge_base']
)`
};

export default function APIReference() {
  const [selectedLanguage, setSelectedLanguage] = useState('curl');
  const [selectedEndpoint, setSelectedEndpoint] = useState(null);

  const handleCopy = (text) => {
    navigator.clipboard.writeText(text);
    toast.success('Copied to clipboard!');
  };

  return (
    <div className="bg-white">
      <PageMeta 
        title="API Reference"
        description="Complete REST & GraphQL API reference for 1C Platform. Authentication, endpoints, SDKs, webhooks, and code examples in multiple languages."
        url="/api-reference"
        keywords={['API reference', 'REST API', 'GraphQL', 'API documentation', 'SDK', 'API endpoints']}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#8B2EE5] rounded-xl flex items-center justify-center">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <p className="text-[#8B2EE5] font-semibold">API REFERENCE</p>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Complete API documentation
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              RESTful API with comprehensive endpoints for all platform capabilities. Base URL: <code className="px-2 py-1 bg-gray-100 rounded text-[#8B2EE5]">https://api.1cplatform.com</code>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick Start Cards */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-6">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Key className="w-8 h-8 text-[#8B2EE5] mb-2" />
                <CardTitle className="text-lg">Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Secure API key-based authentication with Bearer tokens</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Zap className="w-8 h-8 text-[#8B2EE5] mb-2" />
                <CardTitle className="text-lg">Rate Limits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">1000 req/min standard, 5000 req/min enterprise</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Globe className="w-8 h-8 text-[#8B2EE5] mb-2" />
                <CardTitle className="text-lg">Global CDN</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Low latency worldwide with edge locations</p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Shield className="w-8 h-8 text-[#8B2EE5] mb-2" />
                <CardTitle className="text-lg">99.99% Uptime</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">Enterprise-grade reliability and monitoring</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Authentication</h2>
          <Alert className="mb-6">
            <Key className="w-4 h-4" />
            <AlertDescription>
              All API requests require authentication using an API key. Include it in the Authorization header as a Bearer token.
            </AlertDescription>
          </Alert>

          <div className="bg-gray-900 rounded-xl overflow-hidden">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
              <span className="text-sm text-gray-400">Example Authentication</span>
              <Button size="sm" variant="ghost" onClick={() => handleCopy('Authorization: Bearer YOUR_API_KEY')} className="text-gray-400 hover:text-white">
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </Button>
            </div>
            <pre className="p-6 text-sm text-gray-300">
              <code>{`curl https://api.1cplatform.com/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
            </pre>
          </div>

          <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <AlertCircle className="w-5 h-5 text-blue-600 mt-0.5" />
              <div>
                <p className="text-sm font-semibold text-blue-900 mb-1">Getting Your API Key</p>
                <p className="text-sm text-blue-800">Generate and manage API keys from your dashboard under Settings → API Keys</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">API Endpoints</h2>
          
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar with endpoints */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-8">
                {endpoints.map((category) => (
                  <div key={category.category}>
                    <h3 className="font-bold text-gray-900 mb-4">{category.category}</h3>
                    <div className="space-y-2">
                      {category.methods.map((method, index) => (
                        <a
                          key={index}
                          href={`#${method.path}`}
                          onClick={() => setSelectedEndpoint(method.path)}
                          className={`flex items-center gap-3 p-3 rounded-lg transition-colors group ${
                            selectedEndpoint === method.path ? 'bg-purple-50 border-2 border-[#8B2EE5]' : 'hover:bg-gray-50 border-2 border-transparent'
                          }`}
                        >
                          <Badge
                            variant="secondary"
                            className={`${
                              method.method === 'GET'
                                ? 'bg-blue-100 text-blue-700'
                                : method.method === 'POST'
                                ? 'bg-green-100 text-green-700'
                                : method.method === 'DELETE'
                                ? 'bg-red-100 text-red-700'
                                : method.method === 'PATCH'
                                ? 'bg-orange-100 text-orange-700'
                                : 'bg-yellow-100 text-yellow-700'
                            } font-mono text-xs`}
                          >
                            {method.method}
                          </Badge>
                          <span className="text-sm text-gray-700 group-hover:text-[#8B2EE5] font-mono truncate">
                            {method.path}
                          </span>
                        </a>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Main content */}
            <div className="lg:col-span-2 space-y-12">
              {endpoints.map((category) =>
                category.methods.map((method, index) => (
                  <motion.div
                    key={`${category.category}-${index}`}
                    id={method.path}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="p-8 bg-white rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-md transition-shadow"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <Badge
                          variant="secondary"
                          className={`${
                            method.method === 'GET'
                              ? 'bg-blue-100 text-blue-700'
                              : method.method === 'POST'
                              ? 'bg-green-100 text-green-700'
                              : method.method === 'DELETE'
                              ? 'bg-red-100 text-red-700'
                              : method.method === 'PATCH'
                              ? 'bg-orange-100 text-orange-700'
                              : 'bg-yellow-100 text-yellow-700'
                          } font-mono font-semibold`}
                        >
                          {method.method}
                        </Badge>
                        <code className="text-lg font-mono text-gray-900">{method.path}</code>
                      </div>
                      <Button size="sm" variant="outline" onClick={() => handleCopy(method.path)}>
                        <Copy className="w-4 h-4 mr-2" />
                        Copy
                      </Button>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{method.description}</p>

                    {method.params && method.params.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-4 flex items-center gap-2">
                          <Code className="w-4 h-4" />
                          Parameters
                        </h4>
                        <div className="space-y-3 bg-gray-50 rounded-lg p-4">
                          {method.params.map((param) => (
                            <div key={param.name} className="flex flex-col gap-1">
                              <div className="flex items-center gap-3">
                                <code className="px-2 py-1 bg-white rounded text-sm text-[#8B2EE5] font-semibold">
                                  {param.name}
                                </code>
                                <Badge variant="secondary" className="text-xs">{param.type}</Badge>
                                {param.required && (
                                  <Badge className="bg-red-100 text-red-700 text-xs">Required</Badge>
                                )}
                              </div>
                              <p className="text-sm text-gray-600 ml-2">{param.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {method.response && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                          <Check className="w-4 h-4 text-green-600" />
                          Response
                        </h4>
                        <div className="bg-gray-900 rounded-xl overflow-hidden">
                          <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
                            <span className="text-sm text-gray-400">200 OK</span>
                            <Button size="sm" variant="ghost" onClick={() => handleCopy(JSON.stringify(method.response, null, 2))} className="text-gray-400 hover:text-white">
                              <Copy className="w-4 h-4 mr-2" />
                              Copy
                            </Button>
                          </div>
                          <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                            <code>{JSON.stringify(method.response, null, 2)}</code>
                          </pre>
                        </div>
                      </div>
                    )}

                    <div className="bg-gray-900 rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                        <span className="text-sm text-gray-400">Example Request</span>
                        <div className="flex gap-2">
                          <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
                            <PlayCircle className="w-4 h-4 mr-2" />
                            Try it
                          </Button>
                          <Button size="sm" variant="ghost" onClick={() => handleCopy(codeExamples.curl)} className="text-gray-400 hover:text-white">
                            <Copy className="w-4 h-4 mr-2" />
                            Copy
                          </Button>
                        </div>
                      </div>
                      <pre className="p-4 text-sm text-gray-300 overflow-x-auto">
                        <code>{codeExamples.curl}</code>
                      </pre>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SDKs */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Official SDKs</h2>
            <p className="text-xl text-gray-600">Install our SDKs for your preferred language</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {sdks.map((sdk) => (
              <Card key={sdk.name} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Package className="w-8 h-8 text-[#8B2EE5] mb-2" />
                  <CardTitle className="text-lg">{sdk.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Package</p>
                      <code className="text-sm text-gray-900 font-mono">{sdk.package}</code>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Version</p>
                      <Badge variant="secondary">{sdk.version}</Badge>
                    </div>
                    <div className="bg-gray-900 rounded-lg p-3 mt-3">
                      <code className="text-xs text-gray-300 font-mono">{sdk.install}</code>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Error Codes */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Status Codes & Errors</h2>
          
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Code</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">Description</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {errorCodes.map((error) => (
                  <tr key={error.code} className="hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <Badge className={`${
                        error.code < 300 ? 'bg-green-100 text-green-700' :
                        error.code < 400 ? 'bg-blue-100 text-blue-700' :
                        error.code < 500 ? 'bg-yellow-100 text-yellow-700' :
                        'bg-red-100 text-red-700'
                      }`}>
                        {error.code}
                      </Badge>
                    </td>
                    <td className="px-6 py-4 font-mono text-sm text-gray-900">{error.status}</td>
                    <td className="px-6 py-4 text-sm text-gray-600">{error.description}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Rate Limits */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Rate Limits</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <Clock className="w-8 h-8 text-blue-600 mb-2" />
                <CardTitle>Free Tier</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">100</div>
                <p className="text-sm text-gray-600">requests per minute</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Zap className="w-8 h-8 text-[#8B2EE5] mb-2" />
                <CardTitle>Pro Tier</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">1,000</div>
                <p className="text-sm text-gray-600">requests per minute</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <Shield className="w-8 h-8 text-green-600 mb-2" />
                <CardTitle>Enterprise</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold text-gray-900 mb-2">5,000+</div>
                <p className="text-sm text-gray-600">requests per minute</p>
              </CardContent>
            </Card>
          </div>

          <Alert className="mt-6">
            <AlertCircle className="w-4 h-4" />
            <AlertDescription>
              Rate limit information is included in response headers: <code>X-RateLimit-Limit</code>, <code>X-RateLimit-Remaining</code>, <code>X-RateLimit-Reset</code>
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Webhooks */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-6">
            <Webhook className="w-8 h-8 text-[#8B2EE5]" />
            <h2 className="text-3xl font-bold text-gray-900">Webhooks</h2>
          </div>
          
          <p className="text-lg text-gray-600 mb-8">
            Receive real-time notifications when events occur in your account. Configure webhook endpoints in your dashboard.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Available Events</h3>
              <ul className="space-y-2">
                {[
                  'agent.created',
                  'agent.updated',
                  'conversation.started',
                  'conversation.completed',
                  'workflow.executed',
                  'dataset.indexed'
                ].map(event => (
                  <li key={event} className="flex items-center gap-2 text-sm">
                    <Check className="w-4 h-4 text-green-600" />
                    <code className="text-[#8B2EE5]">{event}</code>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="font-semibold text-gray-900 mb-4">Webhook Payload</h3>
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <pre className="p-4 text-xs text-gray-300 overflow-x-auto">
                  <code>{`{
  "event": "agent.created",
  "timestamp": "2024-01-15T10:30:00Z",
  "data": {
    "id": "agent_abc123",
    "name": "customer-support",
    "status": "active"
  }
}`}</code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Quick Start Examples</h2>
            <p className="text-xl text-gray-600">Get started in your favorite language</p>
          </div>

          <Tabs value={selectedLanguage} onValueChange={setSelectedLanguage}>
            <TabsList className="mb-6">
              <TabsTrigger value="curl">cURL</TabsTrigger>
              <TabsTrigger value="javascript">JavaScript</TabsTrigger>
              <TabsTrigger value="python">Python</TabsTrigger>
            </TabsList>
            
            {Object.entries(codeExamples).map(([lang, code]) => (
              <TabsContent key={lang} value={lang}>
                <div className="bg-gray-900 rounded-xl overflow-hidden">
                  <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                    <span className="text-sm text-gray-400">{lang === 'curl' ? 'bash' : lang}.{lang === 'python' ? 'py' : lang === 'curl' ? 'sh' : 'js'}</span>
                    <Button size="sm" variant="ghost" onClick={() => handleCopy(code)} className="text-gray-400 hover:text-white">
                      <Copy className="w-4 h-4 mr-2" />
                      Copy
                    </Button>
                  </div>
                  <pre className="p-6 text-sm text-gray-300 overflow-x-auto">
                    <code>{code}</code>
                  </pre>
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>
    </div>
  );
}