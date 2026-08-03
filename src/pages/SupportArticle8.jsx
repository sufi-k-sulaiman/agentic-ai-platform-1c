import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ThumbsUp, ThumbsDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

export default function SupportArticle8() {
  return (
    <>
      <PageMeta
        title="Managing Your Subscription"
        description="Everything you need to know about managing your 1cPlatform subscription, billing, plan upgrades, downgrades, and renewal cycles."
        url="/SupportArticle8"
        keywords={['subscription management', 'billing', 'plan changes', 'upgrade plan', 'subscription billing', 'plan management']}
        article={{ datePublished: '2025-12-14', section: 'Account Management', tags: ['subscription management','billing','plan changes','upgrade plan','subscription billing','plan management'] }}
      />
      <div className="bg-white min-h-screen">
        <InternalLinker currentPage="SupportArticle8">
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
            <p className="text-[#8B2EE5] font-semibold mb-4">ACCOUNT MANAGEMENT</p>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Managing Your Subscription
            </h1>
            <p className="text-gray-600 mb-4">Last updated: December 14, 2025 • 5 min read</p>
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-xl text-gray-700 mb-8">
              Everything you need to know about managing your 1cPlatform subscription, billing, and plan changes.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Upgrading Your Plan</h2>
            <p className="text-gray-700 mb-4">
              To upgrade to a higher plan tier:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Go to Settings → Billing</li>
              <li>Click "Change Plan"</li>
              <li>Select your new plan</li>
              <li>Review the prorated charges</li>
              <li>Confirm the upgrade</li>
            </ol>
            <p className="text-gray-700 mb-8">
              <strong>Note:</strong> Upgrades take effect immediately, and you'll be charged a prorated amount for the remainder of your billing cycle.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Downgrading Your Plan</h2>
            <p className="text-gray-700 mb-4">
              To downgrade to a lower plan tier:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Go to Settings → Billing</li>
              <li>Click "Change Plan"</li>
              <li>Select your new plan</li>
              <li>Confirm the change</li>
            </ol>
            <p className="text-gray-700 mb-8">
              <strong>Note:</strong> Downgrades take effect at the end of your current billing cycle. You'll retain access to your current plan features until then.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Updating Payment Method</h2>
            <p className="text-gray-700 mb-4">
              To update your payment information:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Navigate to Settings → Billing</li>
              <li>Click "Payment Method"</li>
              <li>Enter your new credit card details</li>
              <li>Click "Save"</li>
            </ol>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Viewing Invoices</h2>
            <p className="text-gray-700 mb-4">
              All your invoices are available in the Billing section:
            </p>
            <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-8">
              <li>View invoice details online</li>
              <li>Download PDF copies</li>
              <li>Set up automatic email delivery</li>
              <li>Access up to 7 years of history</li>
            </ul>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">Canceling Your Subscription</h2>
            <p className="text-gray-700 mb-4">
              If you need to cancel:
            </p>
            <ol className="list-decimal pl-6 text-gray-700 space-y-2 mb-8">
              <li>Go to Settings → Billing</li>
              <li>Click "Cancel Subscription"</li>
              <li>Select a reason (optional)</li>
              <li>Confirm cancellation</li>
            </ol>
            <p className="text-gray-700 mb-8">
              Your account will remain active until the end of your billing period. All data will be available for 30 days after cancellation.
            </p>

            <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mt-8">
              <p className="text-gray-800 font-semibold mb-2">⚠️ Data Retention</p>
              <p className="text-gray-700">
                After 30 days of cancellation, all your data will be permanently deleted and cannot be recovered. Export any important data before canceling.
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