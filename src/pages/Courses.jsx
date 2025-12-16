import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, Star, CheckCircle, ArrowRight, Play, Map, Target, TrendingUp, Award, Code, Rocket, Infinity, Video, FileText, Zap } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SubscriptionWorkflow from '@/components/SubscriptionWorkflow';

const categories = [
  { id: 'agentic-ai-fundamentals', name: 'Agentic AI Fundamentals', count: 12, level: 'Beginner' },
  { id: 'platform-development', name: 'Platform Development', count: 18, level: 'Intermediate' },
  { id: 'enterprise-architecture', name: 'Enterprise Architecture', count: 15, level: 'Advanced' },
  { id: 'security-compliance', name: 'Security & Compliance', count: 10, level: 'Intermediate' },
  { id: 'ai-model-training', name: 'AI Model Training', count: 14, level: 'Advanced' },
  { id: 'integration-patterns', name: 'Integration Patterns', count: 9, level: 'Intermediate' }
];

const featuredCourses = [
  {
    id: 'intro-agentic-ai',
    title: 'Introduction to Agentic AI',
    description: 'Learn the fundamentals of building autonomous AI agents that can make decisions and take actions independently.',
    duration: '6 hours',
    students: 12500,
    rating: 4.9,
    level: 'Beginner',
    modules: 8,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
  },
  {
    id: 'advanced-agent-orchestration',
    title: 'Advanced Agent Orchestration',
    description: 'Master complex multi-agent systems and learn to coordinate AI agents working together to solve enterprise challenges.',
    duration: '12 hours',
    students: 8200,
    rating: 4.8,
    level: 'Advanced',
    modules: 15,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop'
  },
  {
    id: 'building-production-ai',
    title: 'Building Production AI Systems',
    description: 'Deploy scalable, reliable AI agents in production environments with best practices for monitoring and optimization.',
    duration: '10 hours',
    students: 9800,
    rating: 4.9,
    level: 'Intermediate',
    modules: 12,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=250&fit=crop'
  },
  {
    id: 'enterprise-security-ai',
    title: 'Enterprise Security for AI',
    description: 'Implement comprehensive security controls, compliance frameworks, and risk management for AI systems.',
    duration: '8 hours',
    students: 6500,
    rating: 4.7,
    level: 'Advanced',
    modules: 10,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop'
  }
];

const journeyPaths = [
  {
    id: 'beginner-to-professional',
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
    id: 'enterprise-architect',
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
    id: 'developer-specialization',
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

const subscriptionPlans = [
  {
    name: 'Individual',
    price: '$29',
    period: 'per month',
    description: 'Perfect for individual learners advancing their AI skills',
    features: [
      'Access to 100+ courses',
      'New courses added monthly',
      'Downloadable resources',
      'Mobile & desktop access',
      'Certificate of completion',
      'Community forum access'
    ],
    badge: null,
    color: 'from-purple-600 to-violet-600'
  },
  {
    name: 'Team',
    price: '$99',
    period: 'per month',
    description: 'For teams of up to 10 members',
    features: [
      'Everything in Individual',
      'Team analytics & reporting',
      'Assign & track learning paths',
      'Priority support',
      'Custom integrations',
      'Dedicated account manager'
    ],
    badge: 'Popular',
    color: 'from-purple-700 to-violet-700'
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: 'pricing',
    description: 'For organizations with advanced needs',
    features: [
      'Everything in Team',
      'Unlimited team members',
      'Custom course creation',
      'SSO & advanced security',
      'API access',
      'White-label options',
      '24/7 premium support'
    ],
    badge: null,
    color: 'from-purple-800 to-violet-800'
  }
];

const platformFeatures = [
  { icon: Target, title: 'Personalized Path', description: 'AI-powered recommendations based on your goals and learning pace' },
  { icon: TrendingUp, title: 'Progress Tracking', description: 'Visual dashboard showing your advancement through each skill' },
  { icon: Award, title: 'Certificates', description: 'Earn shareable certificates upon course completion' },
  { icon: BookOpen, title: 'Curated Content', description: 'Expert-selected courses in the optimal learning sequence' },
  { icon: Code, title: 'Hands-on Projects', description: 'Real-world projects that build your portfolio' },
  { icon: Rocket, title: 'Career Support', description: 'Resume reviews, interview prep, and job matching' }
];

export default function Courses() {
  const [workflowOpen, setWorkflowOpen] = useState(false);

  return (
    <div className="bg-white">
      <SubscriptionWorkflow isOpen={workflowOpen} onClose={() => setWorkflowOpen(false)} />
      <PageMeta 
        title="Courses & Learning"
        description="Master Agentic AI with 100+ expert-led courses, structured learning paths, and unlimited subscriptions. From beginner to advanced."
        url="/courses"
        keywords={['AI courses', 'Agentic AI training', 'learning paths', 'AI certification', 'online learning', 'AI subscription']}
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
              <BookOpen className="w-4 h-4" />
              Courses & Learning
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Master
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                Agentic Ai
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Learn from industry experts with 100+ courses, structured learning paths, and unlimited access subscriptions.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                onClick={() => setWorkflowOpen(true)}
                className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14 text-base"
              >
                Start Now <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </div>
            <p className="text-sm text-gray-500 mt-4">14-day free trial • No credit card required</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '100+', label: 'Expert-led courses' },
              { value: '50K+', label: 'Active learners' },
              { value: '500+', label: 'Hours of content' },
              { value: '4.8', label: 'Average rating' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Course categories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore courses across different skill levels and topics
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={createPageUrl('CourseCategory') + `?id=${category.id}`}>
                  <Card className="hover:shadow-xl transition-all cursor-pointer h-full">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center">
                          <BookOpen className="w-6 h-6 text-[#8B2EE5]" />
                        </div>
                        <Badge className="bg-purple-100 text-[#8B2EE5] hover:bg-purple-200">
                          {category.level}
                        </Badge>
                      </div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{category.name}</h3>
                      <p className="text-gray-600">{category.count} courses</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Featured courses
            </h2>
            <p className="text-xl text-gray-600">
              Most popular courses chosen by our community
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {featuredCourses.map((course, index) => (
              <motion.div
                key={course.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={createPageUrl('CourseDetail') + `?id=${course.id}`}>
                  <Card className="h-full hover:shadow-xl transition-all overflow-hidden cursor-pointer">
                    <div className="relative h-48">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-4 right-4 bg-purple-600 text-white">
                        {course.level}
                      </Badge>
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center gap-4 text-white text-sm">
                          <div className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {course.duration}
                          </div>
                          <div className="flex items-center gap-1">
                            <BookOpen className="w-4 h-4" />
                            {course.modules} modules
                          </div>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{course.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed">{course.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-5 h-5 text-yellow-500 fill-current" />
                          <span className="font-semibold">{course.rating}</span>
                          <span className="text-gray-500 text-sm">({course.students.toLocaleString()} students)</span>
                        </div>
                      </div>
                      <Button className="w-full bg-[#8B2EE5] hover:bg-[#7325C4]">
                        <Play className="w-4 h-4 mr-2" />
                        View course
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Structured learning paths
            </h2>
            <p className="text-xl text-gray-600">
              Follow proven paths from beginner to AI expert
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
                            <Clock className="w-4 h-4 text-[#8B2EE5]" />
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
                    <Link to={createPageUrl('LearningTrack') + `?id=${path.id}`}>
                      <Button className="w-full mt-6 bg-[#8B2EE5] hover:bg-[#7325C4]">
                        Start this path <ArrowRight className="ml-2 w-4 h-4" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subscription Plans */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Subscription plans
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Unlimited access with flexible plans for individuals, teams, and enterprises
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {subscriptionPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`h-full relative ${plan.badge ? 'border-[#8B2EE5] border-2' : ''}`}>
                  {plan.badge && (
                    <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#8B2EE5] text-white">
                      {plan.badge}
                    </Badge>
                  )}
                  <CardHeader>
                    <div className={`w-16 h-16 bg-gradient-to-br ${plan.color} rounded-2xl flex items-center justify-center mb-4`}>
                      <Infinity className="w-8 h-8 text-white" />
                    </div>
                    <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-gray-600 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-600">{plan.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3 mb-8">
                      {plan.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-[#8B2EE5] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      onClick={() => setWorkflowOpen(true)}
                      className={`w-full ${plan.badge ? 'bg-[#8B2EE5] hover:bg-[#7325C4] text-white' : 'bg-gray-100 hover:bg-gray-200 text-gray-900'}`}
                    >
                      {plan.price === 'Custom' ? 'Contact sales' : 'Start free trial'}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Features */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive features designed for effective learning
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {platformFeatures.map((feature, index) => (
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
              Begin your AI journey today
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Join thousands of professionals advancing their careers with our expert-led courses and structured learning paths.
            </p>
            <Button 
              onClick={() => setWorkflowOpen(true)}
              className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-10 h-16 text-lg"
            >
              Start free trial <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}