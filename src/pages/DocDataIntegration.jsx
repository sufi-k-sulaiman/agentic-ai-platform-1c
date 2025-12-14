import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, Database, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

export default function DocDataIntegration() {
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
            <div className="w-16 h-16 bg-cyan-100 rounded-xl flex items-center justify-center">
              <Database className="w-8 h-8 text-cyan-600" />
            </div>
            <h1 className="text-5xl font-bold text-gray-900">Data Integration</h1>
          </div>

          <p className="text-xl text-gray-600 mb-12">Connect your data sources and sync in real-time</p>

          <div className="space-y-12">
            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Supported Integrations</h2>
              <div className="grid md:grid-cols-3 gap-4">
                {['Salesforce', 'HubSpot', 'Slack', 'AWS S3', 'PostgreSQL', 'MongoDB', 'Snowflake', 'BigQuery', 'MySQL'].map((service) => (
                  <Card key={service}>
                    <CardContent className="p-4 flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span className="font-medium">{service}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Connect a Data Source</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`const integration = await client.integrations.create({
  type: 'salesforce',
  credentials: {
    client_id: process.env.SF_CLIENT_ID,
    client_secret: process.env.SF_CLIENT_SECRET,
    refresh_token: process.env.SF_REFRESH_TOKEN
  },
  sync_settings: {
    auto_sync: true,
    sync_interval: '5m',
    objects: ['Account', 'Contact', 'Opportunity']
  }
});`}</code>
                </pre>
              </div>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Query Integrated Data</h2>
              <div className="bg-gray-900 rounded-xl overflow-hidden">
                <pre className="p-6 text-sm text-gray-300">
                  <code>{`// Query data from any connected source
const results = await client.query({
  source: 'salesforce',
  object: 'Account',
  filter: {
    Industry: 'Technology',
    AnnualRevenue: { $gt: 1000000 }
  },
  fields: ['Name', 'AnnualRevenue', 'Owner.Email']
});`}</code>
                </pre>
              </div>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
}