import React from 'react';
import { motion } from 'framer-motion';
import { Compass, Map, BookOpen, Award, Rocket, Users, Target, TrendingUp, ArrowRight, CheckCircle2, Clock, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InternalLinker from '@/components/seo/InternalLinker';
import RelatedContent from '@/components/seo/RelatedContent';
import { Button } from '@/components/ui/button';

const phases = [
  {
    phase: 'Foundation',
    icon: Compass,
    duration: 'Week 1-2',
    desc: 'Build your foundational understanding of agentic AI and the 1C Platform.',
    milestones: ['Complete platform orientation', 'Set up your first workspace', 'Understand core concepts: agents, tools, workflows', 'Join the community forum'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    phase: 'Building',
    icon: Map,
    duration: 'Week 3-6',
    desc: 'Start building your first agents and integrating tools.',
    milestones: ['Create your first AI agent', 'Connect external tools and APIs', 'Build a multi-step workflow', 'Test and validate agent behavior'],
    color: 'from-purple-500 to-pink-500',
  },
  {
    phase: 'Scaling',
    icon: Rocket,
    duration: 'Week 7-12',
    desc: 'Scale your agents across teams and use cases.',
    milestones: ['Deploy agents to production', 'Implement monitoring and observability', 'Optimize for cost and performance', 'Enable team collaboration'],
    color: 'from-orange-500 to-red-500',
  },
  {
    phase: 'Mastery',
    icon: Award,
    duration: 'Month 3+',
    desc: 'Master advanced patterns and share your expertise.',
    milestones: ['Earn platform certifications', 'Build custom tools and integrations', 'Contribute to the community', 'Mentor new team members'],
    color: 'from-green-500 to-emerald-500',
  },
];

const tracks = [
  { icon: BookOpen, title: 'Beginner Track', desc: 'No-code agent building for business users', time: '2 hours', lessons: 12 },
  { icon: GraduationCap, title: 'Developer Track', desc: 'API integration and custom tool development', time: '8 hours', lessons: 24 },
  { icon: Target, title: 'Architect Track', desc: 'Enterprise architecture and multi-agent systems', time: '12 hours', lessons: 18 },
  { icon: TrendingUp, title: 'Analytics Track', desc: 'Agent monitoring, optimization, and ROI', time: '6 hours', lessons: 15 },
];

export default function LearningJourney() {
  return (
    <div className="bg-white min-h-screen">
      <PageMeta
        title="Learning Journey - 1C Platform Education & Certification Path"
        description="Your guided learning journey on the 1C Platform. Progress from beginner to expert through four phases: Foundation, Building, Scaling, and Mastery. Access tracks, courses, and certifications."
        url="/LearningJourney"
        keywords={['learning journey', 'AI education', 'certification path', 'agentic AI training', 'platform onboarding', 'learning track', '1c platform courses']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Learning Journey', url: '/LearningJourney' }]}
      />

      <section className="pt-32 pb-12 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 text-white">
        <div className="max-w-6xl mx-auto px-6">
          <BreadcrumbNav items={[{ label: 'Learning Journey' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <GraduationCap className="w-16 h-16 mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Learning Journey</h1>
            <p className="text-xl text-purple-100 max-w-2xl mx-auto">
              From first steps to full mastery—a structured path to becoming an agentic AI expert on the 1C Platform.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The Four Phases</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">Progress through each phase at your own pace, building skills incrementally.</p>
          </div>

          <InternalLinker currentPage="LearningJourney">
            <div className="space-y-8 mb-20">
              {phases.map((phase, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: idx % 2 === 0 ? -20 : 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className={`flex flex-col md:flex-row gap-6 items-start ${idx % 2 === 0 ? '' : 'md:flex-row-reverse'}`}
                >
                  <div className="flex-shrink-0">
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center text-white`}>
                      <phase.icon className="w-8 h-8" />
                    </div>
                  </div>
                  <div className="flex-1 bg-white border border-gray-200 rounded-2xl p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{phase.phase}</h3>
                      <span className="flex items-center gap-1 text-sm text-gray-500"><Clock className="w-4 h-4" />{phase.duration}</span>
                    </div>
                    <p className="text-gray-600 mb-4">{phase.desc}</p>
                    <div className="space-y-2">
                      {phase.milestones.map((milestone, midx) => (
                        <div key={midx} className="flex items-center gap-2 text-sm text-gray-700">
                          <CheckCircle2 className="w-4 h-4 text-green-600 flex-shrink-0" />
                          {milestone}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </InternalLinker>

          <div className="mb-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Learning Tracks</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">Choose the track that matches your role and goals.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {tracks.map((track, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl hover:border-[#8B2EE5] transition-all"
                >
                  <track.icon className="w-10 h-10 text-[#8B2EE5] mb-4" />
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{track.title}</h3>
                  <p className="text-gray-600 mb-4">{track.desc}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                    <span className="flex items-center gap-1"><Clock className="w-4 h-4" />{track.time}</span>
                    <span className="flex items-center gap-1"><BookOpen className="w-4 h-4" />{track.lessons} lessons</span>
                  </div>
                  <Link to={createPageUrl('Courses')} className="text-[#8B2EE5] font-semibold text-sm flex items-center gap-1 hover:text-[#7325C4]">
                    Start Track <ArrowRight className="w-4 h-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-50 to-violet-50 rounded-3xl p-12 text-center">
            <Users className="w-12 h-12 text-[#8B2EE5] mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Join 10,000+ Learners</h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">Start your learning journey today and become part of a thriving community of agentic AI practitioners.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Courses')}>
                <Button size="lg" className="bg-[#8B2EE5] hover:bg-[#7325C4] text-white">Browse Courses <ArrowRight className="w-4 h-4 ml-2" /></Button>
              </Link>
              <Link to={createPageUrl('ProfessionalCertifications')}>
                <Button size="lg" variant="outline">View Certifications</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <RelatedContent currentPage="LearningJourney" manualPages={['Courses', 'ProfessionalCertifications', 'DigitalLearningSubscriptions', 'Documentation']} title="Continue Learning" />
    </div>
  );
}