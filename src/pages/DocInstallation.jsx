import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, ArrowRight, Terminal, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function DocInstallation() {
  return (
        <InternalLinker currentPage="DocInstallation">
    <div className="bg-white min-h-screen">
      <PageMeta
        title="Installation & Setup"
        description="Get up and running with 1C Platform in under 5 minutes. Install the SDK, configure your API key, and verify your setup."
        url="/DocInstallation"
        keywords={['installation', 'setup guide', 'SDK install', 'API key setup', 'getting started']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Documentation', url: '/Documentation' }, { name: 'Installation', url: '/DocInstallation' }]}
        howTo={{
          name: 'Installing 1C Platform SDK',
          description: 'Follow these steps to install and configure the 1C Platform SDK in your project',
          steps: [
            { name: 'Install the SDK', text: 'Run npm install @base44/sdk for Node.js or pip install base44 for Python to add the SDK to your project.' },
            { name: 'Get your API key', text: 'Navigate to Settings > API Keys in the dashboard and generate a new API key. Store it securely as an environment variable.' },
            { name: 'Initialize the client', text: 'Create a new client instance with your API key: const base44 = createClient(process.env.API_KEY).' },
            { name: 'Verify your connection', text: 'Run a test call to list your agents or create a simple test agent to verify the SDK is properly configured.' },
            { name: 'Set up your environment', text: 'Configure environment variables for development, staging, and production. Use separate API keys for each environment.' },
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
          <h1 className="text-5xl font-bold text-gray-900 mb-6">Installation & Setup</h1>
          <p className="text-xl text-gray-600 mb-12">Get up and running with 1cPlatform in under 5 minutes</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Prerequisites</h2>
              <Card>
                <CardContent className="p-6">
                  <ul className="space-y-3">
                    {['Node.js 16.x or higher', 'npm or yarn package manager', '1cPlatform account (sign up free)', 'API key from dashboard'].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 1: Install the SDK</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-6 py-3 border-b border-gray-800">
                  <Terminal className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-400">Terminal</span>
                </div>
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`npm install @1cplatform/sdk`}</code>
                </pre>
              </div>
              <p className="text-gray-600 mt-4">Or using yarn:</p>
              <div className="bg-gray-900 rounded-xl overflow-hidden mt-2">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`yarn add @1cplatform/sdk`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 2: Get Your API Key</h2>
              <p className="text-gray-700 mb-4">Navigate to your dashboard and generate an API key:</p>
              <ol className="list-decimal list-inside space-y-2 text-gray-700 ml-4">
                <li>Log in to <Link to={createPageUrl('Onboarding')} className="text-[#8B2EE5] hover:underline">1cPlatform Dashboard</Link></li>
                <li>Go to Settings → API Keys</li>
                <li>Click "Generate New Key"</li>
                <li>Copy your API key (keep it secure!)</li>
              </ol>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Step 3: Initialize the Client</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <div className="flex items-center gap-2 px-6 py-3 border-b border-gray-800">
                  <span className="text-sm text-gray-400">index.js</span>
                </div>
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`import { OneC } from '@1cplatform/sdk';

const client = new OneC({
  apiKey: process.env.ONEC_API_KEY
});

// Verify connection
const status = await client.ping();
console.log('Connected:', status);`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Next Steps</h2>
              <div className="grid md:grid-cols-2 gap-4">
                <Link to={createPageUrl('DocFirstAgent')}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">Create Your First Agent →</h3>
                      <p className="text-sm text-gray-600">Build an AI agent in minutes</p>
                    </CardContent>
                  </Card>
                </Link>
                <Link to={createPageUrl('DocAuthentication')}>
                  <Card className="hover:shadow-lg transition-shadow cursor-pointer h-full">
                    <CardContent className="p-6">
                      <h3 className="font-bold text-gray-900 mb-2">Authentication Guide →</h3>
                      <p className="text-sm text-gray-600">Secure your API calls</p>
                    </CardContent>
                  </Card>
                </Link>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
    </InternalLinker>
  );
}