import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Search, Code, Terminal, Copy } from 'lucide-react';

const endpoints = [
  {
    category: 'Agents',
    methods: [
      {
        method: 'POST',
        path: '/v1/agents',
        description: 'Create a new AI agent',
        params: ['name', 'model', 'instructions', 'tools']
      },
      {
        method: 'GET',
        path: '/v1/agents',
        description: 'List all agents',
        params: ['limit', 'offset']
      },
      {
        method: 'GET',
        path: '/v1/agents/{id}',
        description: 'Get agent by ID',
        params: ['id']
      },
      {
        method: 'DELETE',
        path: '/v1/agents/{id}',
        description: 'Delete an agent',
        params: ['id']
      }
    ]
  },
  {
    category: 'Workflows',
    methods: [
      {
        method: 'POST',
        path: '/v1/workflows',
        description: 'Create a workflow',
        params: ['name', 'steps', 'triggers']
      },
      {
        method: 'GET',
        path: '/v1/workflows',
        description: 'List workflows',
        params: ['limit', 'offset']
      },
      {
        method: 'POST',
        path: '/v1/workflows/{id}/execute',
        description: 'Execute a workflow',
        params: ['id', 'input']
      }
    ]
  },
  {
    category: 'Data',
    methods: [
      {
        method: 'POST',
        path: '/v1/datasets',
        description: 'Upload a dataset',
        params: ['name', 'file', 'schema']
      },
      {
        method: 'GET',
        path: '/v1/datasets',
        description: 'List datasets',
        params: ['limit', 'offset']
      }
    ]
  }
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
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('curl');

  return (
    <div className="bg-white">
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
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              RESTful API with comprehensive endpoints for all platform capabilities. Base URL: <code className="px-2 py-1 bg-gray-100 rounded text-[#8B2EE5]">https://api.1cplatform.com</code>
            </p>

            {/* Search */}
            <div className="relative max-w-xl">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search endpoints..."
                className="pl-12 h-12 rounded-full border-gray-300 bg-white"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* API Endpoints */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
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
                          className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors group"
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
                                : 'bg-yellow-100 text-yellow-700'
                            } font-mono text-xs`}
                          >
                            {method.method}
                          </Badge>
                          <span className="text-sm text-gray-700 group-hover:text-[#8B2EE5] font-mono">
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
                    className="p-8 bg-gray-50 rounded-2xl border border-gray-200"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <Badge
                        variant="secondary"
                        className={`${
                          method.method === 'GET'
                            ? 'bg-blue-100 text-blue-700'
                            : method.method === 'POST'
                            ? 'bg-green-100 text-green-700'
                            : method.method === 'DELETE'
                            ? 'bg-red-100 text-red-700'
                            : 'bg-yellow-100 text-yellow-700'
                        } font-mono`}
                      >
                        {method.method}
                      </Badge>
                      <code className="text-lg font-mono text-gray-900">{method.path}</code>
                    </div>
                    
                    <p className="text-gray-600 mb-6">{method.description}</p>

                    {method.params.length > 0 && (
                      <div className="mb-6">
                        <h4 className="font-semibold text-gray-900 mb-3">Parameters</h4>
                        <div className="space-y-2">
                          {method.params.map((param) => (
                            <div key={param} className="flex items-center gap-2">
                              <code className="px-2 py-1 bg-white rounded text-sm text-[#8B2EE5]">
                                {param}
                              </code>
                              <span className="text-sm text-gray-600">string</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="bg-gray-900 rounded-xl overflow-hidden">
                      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-800">
                        <span className="text-sm text-gray-400">Example Request</span>
                        <button className="p-1 hover:bg-gray-800 rounded">
                          <Copy className="w-4 h-4 text-gray-400" />
                        </button>
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

      {/* Code Examples */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Try it in your language</h2>
            <p className="text-xl text-gray-600">Code examples in popular languages</p>
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
                    <span className="text-sm text-gray-400">{lang}.{lang === 'python' ? 'py' : 'js'}</span>
                    <Button size="sm" variant="ghost" className="text-gray-400 hover:text-white">
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