import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Shield, AlertTriangle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function DocAuthentication() {
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
            <div className="w-16 h-16 bg-green-100 rounded-xl flex items-center justify-center">
              <Shield className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Authentication</h1>
          </div>

          <p className="text-xl text-gray-600 mb-12">Secure your API calls with API keys and OAuth</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">API Key Authentication</h2>
              <p className="text-gray-700 mb-6">The simplest way to authenticate. Include your API key in the request header:</p>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`curl https://api.1cplatform.com/v1/agents \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}</code>
                </pre>
              </div>
            </section>

            <Card className="bg-yellow-50 border-yellow-200">
              <CardContent className="p-6">
                <div className="flex gap-3">
                  <AlertTriangle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-gray-900 mb-2">Security Best Practices</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>• Never commit API keys to version control</li>
                      <li>• Use environment variables for production keys</li>
                      <li>• Rotate keys regularly (every 90 days)</li>
                      <li>• Use different keys for dev/staging/production</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">OAuth 2.0</h2>
              <p className="text-gray-700 mb-6">For user-facing applications, use OAuth for secure delegated access:</p>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`// Step 1: Redirect user to authorization URL
const authUrl = \`https://auth.1cplatform.com/oauth/authorize?
  client_id=\${clientId}&
  redirect_uri=\${redirectUri}&
  response_type=code&
  scope=agents:read agents:write\`;

// Step 2: Exchange code for access token
const response = await fetch('https://auth.1cplatform.com/oauth/token', {
  method: 'POST',
  body: JSON.stringify({
    grant_type: 'authorization_code',
    code: authorizationCode,
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uri: redirectUri
  })
});

const { access_token } = await response.json();`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Rate Limits</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Free Tier</h3>
                    <p className="text-gray-600 text-sm mb-4">1,000 requests/hour</p>
                    <div className="text-sm text-gray-600">Perfect for development and testing</div>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold mb-2">Pro Tier</h3>
                    <p className="text-gray-600 text-sm mb-4">100,000 requests/hour</p>
                    <div className="text-sm text-gray-600">For production applications</div>
                  </CardContent>
                </Card>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}