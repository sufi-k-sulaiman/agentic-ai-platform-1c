import React from 'react';
import { motion } from 'framer-motion';
import { Gift, Star, Crown, Trophy, Coins, Zap, TrendingUp, Users, Award, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InternalLinker from '@/components/seo/InternalLinker';
import RelatedContent from '@/components/seo/RelatedContent';
import { Button } from '@/components/ui/button';

const tiers = [
  {
    name: 'Bronze',
    icon: Star,
    color: 'from-amber-600 to-amber-800',
    points: '0 - 2,499',
    benefits: ['5% discount on platform fees', 'Early access to new features', 'Community badge', 'Monthly newsletter'],
  },
  {
    name: 'Silver',
    icon: Trophy,
    color: 'from-gray-400 to-gray-600',
    points: '2,500 - 9,999',
    benefits: ['10% discount on platform fees', 'Priority email support', 'Exclusive webinars', 'Beta feature access', 'Custom dashboard themes'],
  },
  {
    name: 'Gold',
    icon: Crown,
    color: 'from-yellow-400 to-yellow-600',
    points: '10,000 - 49,999',
    benefits: ['20% discount on platform fees', 'Priority phone & chat support', 'Dedicated success manager', 'Free training sessions', 'API rate limit boost', 'Quarterly business reviews'],
  },
  {
    name: 'Platinum',
    icon: Award,
    color: 'from-purple-400 to-purple-600',
    points: '50,000+',
    benefits: ['30% discount on platform fees', '24/7 dedicated support line', 'Executive sponsorship', 'Custom integrations', 'On-site training', 'Early roadmap input', 'White-glove onboarding', 'SLA guarantees'],
  },
];

const earningMethods = [
  { icon: Zap, title: 'Daily Platform Usage', points: '10-50 pts/day', desc: 'Earn points for every active day on the platform.' },
  { icon: TrendingUp, title: 'Milestone Achievements', points: '100-1,000 pts', desc: 'Complete automation milestones and workflow goals.' },
  { icon: Users, title: 'Referrals', points: '500 pts/referral', desc: 'Invite colleagues and earn points when they sign up.' },
  { icon: Award, title: 'Certifications', points: '250-1,000 pts', desc: 'Complete learning tracks and earn certifications.' },
  { icon: Gift, title: 'Community Contributions', points: '50-200 pts', desc: 'Share templates, write reviews, and help other users.' },
  { icon: Coins, title: 'Monthly Challenges', points: '200-500 pts', desc: 'Participate in monthly automation challenges.' },
];

export default function Rewards() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta
        title="1C Platform Rewards Program - Earn Points & Unlock Benefits"
        description="Join the 1C Platform rewards program. Earn points through platform usage, referrals, and achievements. Unlock discounts, priority support, dedicated managers, and exclusive benefits across four tiers."
        url="/Rewards"
        keywords={['rewards program', 'loyalty program', 'earn points', 'platform discounts', 'customer benefits', '1c platform rewards']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Rewards', url: '/Rewards' }]}
      />

      <section className="pt-32 pb-12 bg-gradient-to-br from-purple-600 via-violet-600 to-indigo-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <BreadcrumbNav items={[{ label: 'Rewards' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <Gift className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">1C Platform Rewards</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto mb-8">
              The more you build, the more you earn. Unlock exclusive benefits, discounts, and perks as you grow with the 1C Platform.
            </p>
            <Link to={createPageUrl('Onboarding')}>
              <Button size="lg" className="bg-white text-[#8B2EE5] hover:bg-gray-100">Start Earning Today</Button>
            </Link>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Reward Tiers</h2>
            <p className="text-lg text-gray-600">Progress through four tiers and unlock increasingly valuable benefits.</p>
          </div>

          <InternalLinker currentPage="Rewards">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {tiers.map((tier, idx) => (
                <motion.div
                  key={tier.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative rounded-2xl p-8 ${idx === 3 ? 'lg:scale-105 shadow-2xl' : ''}`}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} rounded-2xl opacity-10`} />
                  <div className="relative">
                    <tier.icon className={`w-12 h-12 mb-4 bg-gradient-to-br ${tier.color} text-white p-2 rounded-xl`} />
                    <h3 className="text-2xl font-bold text-gray-900 mb-1">{tier.name}</h3>
                    <p className="text-sm text-gray-500 mb-4">{tier.points} points</p>
                    <ul className="space-y-2">
                      {tier.benefits.map((benefit, bidx) => (
                        <li key={bidx} className="flex items-start gap-2 text-sm text-gray-700">
                          <Check className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </InternalLinker>

          <div className="mb-20">
            <div className="text-center mb-12">
              <Coins className="w-10 h-10 text-[#8B2EE5] mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How to Earn Points</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Multiple ways to accumulate points and climb the tiers.</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {earningMethods.map((method, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.05 }}
                  className="bg-gray-50 rounded-xl p-6"
                >
                  <method.icon className="w-8 h-8 text-[#8B2EE5] mb-3" />
                  <h3 className="font-bold text-gray-900 mb-1">{method.title}</h3>
                  <div className="text-sm font-semibold text-[#8B2EE5] mb-2">{method.points}</div>
                  <p className="text-sm text-gray-600">{method.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-3xl p-12 text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ready to Start Earning?</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Join thousands of organizations already earning rewards on the 1C Platform.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button size="lg" className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white">Get Started <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
              <Link to={createPageUrl('ContactUs')}>
                <Button size="lg" variant="outline">Learn More</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <RelatedContent currentPage="Rewards" manualPages={['Pricing', 'Onboarding', 'LearningJourney', 'DigitalLearningSubscriptions']} title="Explore More" />
    </div>
  );
}