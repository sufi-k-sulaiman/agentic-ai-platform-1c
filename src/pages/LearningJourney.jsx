import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Map, CheckCircle, ArrowRight, Target, TrendingUp, Award, BookOpen, Code, Rocket } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const journeyPaths = [
  {
    title: 'AI Beginner to Professional',
    duration: '6 months',
    courses: 12,
    level: 'Beginner to Advanced',
    description: 'Complete learning path from fundamentals to building production AI systems',
    milestones: [
      { title: 'Foundations', courses: 3, weeks: 4 },
      { title: 'Core Concepts', courses: 4, weeks: 8 },
      { title: 'Advanced Topics', courses: 3, weeks: 10 },
      { title: 'Capstone Project', courses: 2, weeks: 4 }
    ]
  },
  {
    title: 'Enterprise Architect Track',
    duration: '4 months',
    courses: 10,
    level: 'Intermediate to Expert',
    description: 'Specialized path for designing and implementing enterprise AI architecture',
    milestones: [
      { title: 'Architecture Principles', courses: 3, weeks: 4 },
      { title: 'System Design', courses: 3, weeks: 6 },
      { title: 'Security & Scale', courses: 2, weeks: 6 },
      { title: 'Real-world Projects', courses: 2, weeks: 4 }
    ]
  },
  {
    title: 'Developer Specialization',
    duration: '5 months',
    courses: 15,
    level: 'Intermediate',
    description: 'Hands-on path focused on building AI applications and integrations',
    milestones: [
      { title: 'Development Basics', courses: 4, weeks: 5 },
      { title: 'API Integration', courses: 4, weeks: 6 },
      { title: 'Production Deploy', courses: 4, weeks: 6 },
      { title: 'Portfolio Build', courses: 3, weeks: 4 }
    ]
  }
];

const features = [
  {
    icon: Target,
    title: 'Personalized Path',
    description: 'AI-powered recommendations based on your goals, experience, and learning pace'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Visual dashboard showing your advancement through each milestone and skill'
  },
  {
    icon: Award,
    title: 'Milestone Certificates',
    description: 'Earn certificates as you complete each major milestone in your journey'
  },
  {
    icon: BookOpen,
    title: 'Curated Content',
    description: 'Expert-selected courses organized in the optimal learning sequence'
  },
  {
    icon: Code,
    title: 'Hands-on Projects',
    description: 'Real-world projects that build your portfolio as you progress'
  },
  {
    icon: Rocket,
    title: 'Career Support',
    description: 'Resume reviews, interview prep, and job matching assistance'
  }
];

const stages = [
  {
    stage: 1,
    title: 'Foundation',
    description: 'Master the fundamentals of AI and understand core concepts',
    duration: '4-6 weeks',
    color: 'from-purple-600 to-violet-600'
  },
  {
    stage: 2,
    title: 'Application',
    description: 'Build your first AI agents and integrate with real systems',
    duration: '8-10 weeks',
    color: 'from-purple-700 to-violet-700'
  },
  {
    stage: 3,
    title: 'Specialization',
    description: 'Deep dive into your chosen track and advanced topics',
    duration: '10-12 weeks',
    color: 'from-purple-800 to-violet-800'
  },
  {
    stage: 4,
    title: 'Mastery',
    description: 'Complete capstone projects and earn professional certification',
    duration: '4-6 weeks',
    color: 'from-purple-900 to-violet-900'
  }
];

export default function LearningJourney() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Learning Journey"
        description="Structured learning paths from beginner to AI expert. Personalized guidance, milestone certificates, and career support."
        url="/learning-journey"
        keywords={['AI learning path', 'structured training', 'AI career', 'learning roadmap', 'AI mastery']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
              <Map className="w-4 h-4" />
              Learning Journey
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Your path to
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                AI mastery
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Structured learning paths that take you from beginner to expert with personalized guidance every step of the way.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Start your journey <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Learning Stages */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Four stages to mastery
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven progression that builds skills systematically
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stages.map((stage, index) => (
              <motion.div
                key={stage.stage}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full relative overflow-hidden">
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${stage.color}`} />
                  <CardContent className="p-6 pt-8">
                    <div className={`w-16 h-16 bg-gradient-to-br ${stage.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <span className="text-2xl font-bold text-white">{stage.stage}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{stage.title}</h3>
                    <p className="text-gray-600 mb-4">{stage.description}</p>
                    <Badge className="bg-purple-100 text-[#8B2EE5]">
                      {stage.duration}
                    </Badge>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Journey Paths */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Choose your path
            </h2>
            <p className="text-xl text-gray-600">
              Structured learning journeys designed for different career goals
            </p>
          </div>

          <div className="space-y-8">
            {journeyPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <CardTitle className="text-2xl mb-2">{path.title}</CardTitle>
                        <p className="text-gray-600 mb-4">{path.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center gap-2">
                            <BookOpen className="w-4 h-4 text-[#8B2EE5]" />
                            {path.courses} courses
                          </div>
                          <div className="flex items-center gap-2">
                            <Target className="w-4 h-4 text-[#8B2EE5]" />
                            {path.duration}
                          </div>
                        </div>
                      </div>
                      <Badge className="bg-purple-100 text-[#8B2EE5]">
                        {path.level}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                      {path.milestones.map((milestone, i) => (
                        <div key={i} className="relative">
                          {i < path.milestones.length - 1 && (
                            <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-purple-200" />
                          )}
                          <div className="relative bg-purple-50 rounded-xl p-4">
                            <div className="w-8 h-8 bg-[#8B2EE5] rounded-full flex items-center justify-center mb-3">
                              <span className="text-white text-sm font-bold">{i + 1}</span>
                            </div>
                            <h4 className="font-semibold text-gray-900 mb-2">{milestone.title}</h4>
                            <div className="text-sm text-gray-600 space-y-1">
                              <div>{milestone.courses} courses</div>
                              <div>{milestone.weeks} weeks</div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                    <Button className="w-full mt-6 bg-[#8B2EE5] hover:bg-[#7325C4]">
                      Start this path <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Guided every step of the way
            </h2>
            <p className="text-xl text-gray-600">
              Features designed to keep you motivated and on track
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <feature.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Begin your transformation
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Join thousands of learners advancing their careers with structured, personalized learning paths.
            </p>
            <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-10 h-16 text-lg">
              Get started now <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}