import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function SupportArticle9() {
  return (
    <>
      <PageMeta
        title="Team Management and Permissions"
        description="Learn how to invite team members, manage role-based permissions, and collaborate effectively on 1cPlatform projects and agents."
        url="/SupportArticle9"
        keywords={['team management', 'permissions', 'user roles', 'collaboration', 'team access control', 'invite users', 'RBAC']}
        article={{ datePublished: '2025-12-14', section: 'Collaboration', tags: ['team management','permissions','user roles','collaboration','team access control','invite users','RBAC'] }}
      />
      <div className="bg-white min-h-screen">
        <InternalLinker currentPage="SupportArticle9">
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-4xl mx-auto px-6">
          <Link to={createPageUrl('HelpCenter')}>
            <Button variant="ghost" className="mb-8">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Help Center
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <p className="text-[#8B2EE5] font-semibold mb-4">COLLABORATION</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Team Management and Permissions
            </h1>
            <p className="text-gray-600 mb-4">Last updated: December 14, 2025 • 6 min read</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Learn how to invite team members, manage permissions, and collaborate effectively on 1cPlatform.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Inviting Team Members</h2>
            <p className="text-gray-700 mb-4">
              To add new members to your team:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Navigate to Settings → Team</li>
              <li>Click "Invite Member"</li>
              <li>Enter their email address</li>
              <li>Select their role</li>
              <li>Send the invitation</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Role Types</h2>
            <div className="space-y-4 mb-8">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Owner</p>
                <p className="text-gray-700 text-sm">Full access to all features, billing, and team management. Cannot be removed.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Admin</p>
                <p className="text-gray-700 text-sm">Can manage agents, integrations, and team members. Cannot access billing.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Developer</p>
                <p className="text-gray-700 text-sm">Can create and modify agents, view analytics. Cannot manage team or billing.</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-semibold text-gray-900 mb-2">Viewer</p>
                <p className="text-gray-700 text-sm">Read-only access to agents and analytics. Cannot make changes.</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Changing Member Roles</h2>
            <p className="text-gray-700 mb-4">
              To update a team member's role:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Go to Settings → Team</li>
              <li>Find the member in the list</li>
              <li>Click the role dropdown</li>
              <li>Select the new role</li>
              <li>Confirm the change</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Removing Team Members</h2>
            <p className="text-gray-700 mb-4">
              To remove someone from your team:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Navigate to Settings → Team</li>
              <li>Find the member you want to remove</li>
              <li>Click the "Remove" button</li>
              <li>Confirm the action</li>
            </ol>
            <p className="text-gray-700 mb-8">
              Removed members will lose access immediately but will receive an email notification.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">SSO Integration</h2>
            <p className="text-gray-700 mb-4">
              Enterprise plans can enable Single Sign-On (SSO) for streamlined authentication:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>SAML 2.0 support</li>
              <li>Integration with popular identity providers</li>
              <li>Automatic user provisioning</li>
              <li>Just-in-time (JIT) provisioning</li>
            </ul>

            <div className="bg-purple-50 border-l-4 border-[#8B2EE5] p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 font-semibold mb-2">👥 Team Limits</p>
              <p className="text-gray-700">
                Free plans support up to 3 team members. Professional plans support up to 10. Enterprise plans have unlimited team members.
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-700 mb-4">Was this article helpful?</p>
            <div className="flex gap-3">
              <Button variant="outline" className="gap-2">
                <ThumbsUp className="w-4 h-4" />
                Yes
              </Button>
              <Button variant="outline" className="gap-2">
                <ThumbsDown className="w-4 h-4" />
                No
              </Button>
            </div>
          </div>
        </div>
      </section>
      </InternalLinker>
    </div>
    </>
  );
}