import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Wrench, Code, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function BlogToolUseFunctionCalling() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Tool Use and Function Calling Capabilities in AI Agents"
        description="Learn how agents interact with external tools and APIs. Function calling, parameter extraction, tool selection, and execution patterns."
        url="/blog/tool-use-function-calling"
        keywords={['function calling', 'AI tools', 'tool use', 'API integration', 'agent capabilities']}
      />

      <article className="max-w-4xl mx-auto px-6 py-12">
        <Link to={createPageUrl('Blog')}>
          <Button variant="ghost" className="mb-8">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </Link>

        <Badge className="mb-6 bg-purple-100 text-[#8B2EE5]">Agentic Capabilities</Badge>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight"
        >
          Tool Use and Function Calling Capabilities in AI Agents
        </motion.h1>

        <div className="flex items-center gap-6 text-gray-600 mb-8">
          <span>By Kevin Zhang</span>
          <span>•</span>
          <span>January 23, 2025</span>
          <span>•</span>
          <span>18 min read</span>
        </div>

        <img 
          src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200"
          alt="Tool Use"
          className="w-full h-96 object-cover rounded-2xl mb-12"
        />

        <div className="prose prose-lg max-w-none">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            Tool use is what transforms chatbots into agents. The ability to call functions, interact with APIs, execute code, and manipulate external systems enables agents to take real actions in the world. This guide covers function calling capabilities in detail.
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Function Calling Flow</h2>

          <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="w-6 h-6 text-blue-600" />
              <h3 className="font-bold text-gray-900">How Agents Use Tools</h3>
            </div>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-blue-200">
                <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-xs">1</div>
                <span className="text-gray-700">User: "What's the weather in Tokyo?"</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-blue-200">
                <div className="w-6 h-6 bg-purple-500 text-white rounded-full flex items-center justify-center text-xs">2</div>
                <span className="text-gray-700">Agent decides to call weather_api tool</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-blue-200">
                <div className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-xs">3</div>
                <span className="text-gray-700">Extracts parameters: {`{city: "Tokyo"}`}</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-blue-200">
                <div className="w-6 h-6 bg-orange-500 text-white rounded-full flex items-center justify-center text-xs">4</div>
                <span className="text-gray-700">Executes API call, gets result</span>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white rounded border border-blue-200">
                <div className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs">5</div>
                <span className="text-gray-700">Formats response: "Tokyo is 22°C and sunny"</span>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tool Definition</h2>

          <div className="bg-gray-900 rounded-xl p-6 mb-8">
            <pre className="text-gray-300 text-sm overflow-x-auto">
{`{
  "name": "get_weather",
  "description": "Get current weather for a city",
  "parameters": {
    "type": "object",
    "properties": {
      "city": {
        "type": "string",
        "description": "City name"
      },
      "units": {
        "type": "string",
        "enum": ["celsius", "fahrenheit"],
        "default": "celsius"
      }
    },
    "required": ["city"]
  }
}`}
            </pre>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Parameter Extraction</h2>

          <p className="text-gray-700 mb-6">
            Agents extract structured parameters from natural language:
          </p>

          <div className="bg-purple-50 border border-purple-200 rounded-xl p-6 mb-8">
            <div className="space-y-3 text-sm">
              <div className="bg-white rounded p-3 border border-purple-200">
                <div className="text-gray-700">"Send $50 to john@example.com for the pizza"</div>
                <div className="text-xs text-gray-600 mt-2">↓ Extracted parameters ↓</div>
              </div>
              <div className="bg-white rounded p-3 border border-purple-200">
                <code className="text-xs text-purple-600">
                  {`{
  "function": "send_payment",
  "amount": 50,
  "recipient": "john@example.com",
  "note": "pizza"
}`}
                </code>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Tool Selection</h2>

          <p className="text-gray-700 mb-6">
            When multiple tools available, agents choose the right one:
          </p>

          <div className="bg-white border border-gray-200 rounded-xl p-6 mb-8">
            <div className="text-sm space-y-3">
              <div className="p-3 bg-gray-50 rounded">
                <strong className="text-gray-900">Query:</strong> <span className="text-gray-700">"What's my account balance?"</span>
              </div>
              <div className="p-3 bg-blue-50 rounded border border-blue-200">
                <strong className="text-gray-900">Available tools:</strong>
                <ul className="text-gray-700 mt-1 ml-4 space-y-1 text-xs">
                  <li>• get_account_balance ✅ SELECTED</li>
                  <li>• get_transaction_history</li>
                  <li>• transfer_money</li>
                </ul>
              </div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Multi-Tool Execution</h2>

          <p className="text-gray-700 mb-6">
            Agents can chain multiple tool calls:
          </p>

          <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-lg mb-8">
            <div className="space-y-2 text-xs">
              <div><strong>User:</strong> "Email me a summary of my top 5 expenses this month"</div>
              <div className="text-green-600 font-semibold mt-2">→ Agent executes:</div>
              <div className="ml-4 text-gray-700">1. get_transactions(start_date, end_date)</div>
              <div className="ml-4 text-gray-700">2. analyze_expenses(transactions)</div>
              <div className="ml-4 text-gray-700">3. generate_summary(top_5_expenses)</div>
              <div className="ml-4 text-gray-700">4. send_email(user.email, summary)</div>
            </div>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Error Handling</h2>

          <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-8">
            <h3 className="font-bold text-gray-900 mb-4">When Tools Fail</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Retry with adjusted parameters</li>
              <li>• Try alternative tool</li>
              <li>• Explain issue to user</li>
              <li>• Suggest manual alternative</li>
            </ul>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mt-12 mb-6">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            Tool use capabilities are what make agents truly useful. By mastering function calling, parameter extraction, and multi-tool orchestration, you create agents that can take meaningful actions beyond just generating text.
          </p>
        </div>

        <div className="mt-16 pt-8 border-t border-gray-200">
          <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-2xl p-8 text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Equip your agents with tools</h3>
            <p className="text-lg text-purple-100 mb-6">
              Build AI that takes action through function calling
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-8 h-12">
                Get Started
              </Button>
            </Link>
          </div>
        </div>
      </article>
    </div>
  );
}