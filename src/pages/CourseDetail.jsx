import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Clock, Users, Star, CheckCircle, Play, Download, Award, ArrowLeft, Lock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const courseData = {
  'intro-agentic-ai': {
    title: 'Introduction to Agentic AI',
    description: 'Learn the fundamentals of building autonomous AI agents that can make decisions and take actions independently.',
    longDescription: 'This comprehensive course introduces you to the world of Agentic AI, covering everything from basic concepts to building your first autonomous agent. You\'ll learn about agent architectures, decision-making processes, and how to implement AI systems that can operate independently.',
    duration: '6 hours',
    students: 12500,
    rating: 4.9,
    reviews: 2840,
    level: 'Beginner',
    modules: 8,
    lessons: 42,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop',
    instructor: {
      name: 'Dr. Sarah Chen',
      title: 'AI Research Scientist',
      bio: '15+ years in AI research with focus on autonomous systems',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop'
    },
    curriculum: [
      {
        title: 'Introduction to AI Agents',
        lessons: 5,
        duration: '45 min',
        topics: [
          'What is an AI Agent?',
          'Types of AI Agents',
          'Agent vs Traditional AI',
          'Real-world Applications',
          'Industry Use Cases'
        ]
      },
      {
        title: 'Agent Architecture',
        lessons: 6,
        duration: '52 min',
        topics: [
          'Core Components',
          'Perception Systems',
          'Decision Making',
          'Action Execution',
          'Memory and Learning',
          'Hands-on Lab'
        ]
      },
      {
        title: 'Building Your First Agent',
        lessons: 7,
        duration: '68 min',
        topics: [
          'Setting up the Environment',
          'Agent Framework Overview',
          'Coding Your Agent',
          'Testing and Debugging',
          'Deployment Basics',
          'Monitoring Agent Performance',
          'Project: Simple Task Agent'
        ]
      },
      {
        title: 'Agent Communication',
        lessons: 6,
        duration: '50 min',
        topics: [
          'Communication Protocols',
          'Multi-Agent Systems',
          'Coordination Strategies',
          'Message Passing',
          'Conflict Resolution',
          'Lab: Agent Collaboration'
        ]
      },
      {
        title: 'Advanced Concepts',
        lessons: 8,
        duration: '72 min',
        topics: [
          'Reinforcement Learning',
          'Goal-Oriented Behavior',
          'Planning Algorithms',
          'Uncertainty Handling',
          'Adaptive Agents',
          'Ethics and Safety',
          'Scaling Considerations',
          'Final Project'
        ]
      }
    ],
    skills: [
      'Build autonomous AI agents',
      'Implement agent architectures',
      'Design decision-making systems',
      'Deploy agents in production',
      'Monitor and optimize performance',
      'Handle multi-agent coordination'
    ],
    requirements: [
      'Basic Python programming',
      'Understanding of machine learning concepts',
      'Familiarity with APIs and REST'
    ],
    certificate: true,
    price: 'Free'
  },
  'advanced-orchestration': {
    title: 'Advanced Agent Orchestration',
    description: 'Master complex multi-agent systems and learn to coordinate AI agents working together to solve enterprise challenges.',
    longDescription: 'Dive deep into advanced orchestration techniques for multi-agent systems. Learn how to coordinate multiple AI agents, handle complex workflows, and build enterprise-scale autonomous systems.',
    duration: '12 hours',
    students: 8200,
    rating: 4.8,
    reviews: 1650,
    level: 'Advanced',
    modules: 15,
    lessons: 68,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    instructor: {
      name: 'Michael Rodriguez',
      title: 'Senior AI Architect',
      bio: '20+ years building distributed AI systems at scale',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop'
    },
    curriculum: [
      {
        title: 'Multi-Agent Fundamentals',
        lessons: 8,
        duration: '85 min',
        topics: [
          'Distributed AI Systems',
          'Agent Cooperation vs Competition',
          'Coordination Mechanisms',
          'Communication Patterns',
          'Synchronization Strategies',
          'Consensus Algorithms',
          'Load Balancing',
          'Lab: Basic Orchestration'
        ]
      },
      {
        title: 'Enterprise Orchestration',
        lessons: 10,
        duration: '120 min',
        topics: [
          'Workflow Design',
          'Task Distribution',
          'Resource Management',
          'Fault Tolerance',
          'State Management',
          'Event-Driven Architecture',
          'Monitoring and Observability',
          'Performance Optimization',
          'Security Considerations',
          'Project: Enterprise Workflow'
        ]
      }
    ],
    skills: [
      'Design multi-agent systems',
      'Implement orchestration patterns',
      'Handle distributed workflows',
      'Optimize agent coordination',
      'Build fault-tolerant systems',
      'Scale to enterprise level'
    ],
    requirements: [
      'Completed Introduction to Agentic AI',
      'Strong programming skills',
      'Experience with distributed systems',
      'Understanding of enterprise architecture'
    ],
    certificate: true,
    price: '$299'
  }
};

export default function CourseDetail() {
  const [activeTab, setActiveTab] = useState('overview');
  const courseId = new URLSearchParams(window.location.search).get('id') || 'intro-agentic-ai';
  const course = courseData[courseId] || courseData['intro-agentic-ai'];

  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title={course.title}
        description={course.description}
        url={`/course-detail?id=${courseId}`}
        keywords={['AI course', course.title, 'online learning', 'certification']}
      />

      {/* Hero */}
      <section className="pt-32 pb-0 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Courses')}>
            <Button variant="ghost" className="mb-8 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to courses
            </Button>
          </Link>
          <div className="grid lg:grid-cols-3 gap-12 pb-16">
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                <Badge className="bg-purple-400 text-white mb-4">
                  {course.level}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-6">
                  {course.title}
                </h1>
                <p className="text-xl text-purple-100 mb-8">
                  {course.description}
                </p>
                <div className="flex flex-wrap gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-current" />
                    <span className="font-bold">{course.rating}</span>
                    <span className="text-purple-200">({course.reviews} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>{course.lessons} lessons</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <img 
                    src={course.instructor.image} 
                    alt={course.instructor.name}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{course.instructor.name}</div>
                    <div className="text-sm text-purple-200">{course.instructor.title}</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            {/* Enrollment Card */}
            <div className="lg:col-span-1">
              <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <Card className="sticky top-24">
                  <CardContent className="p-6">
                    <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                      <img src={course.image} alt={course.title} className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center">
                          <Play className="w-8 h-8 text-[#8B2EE5] ml-1" />
                        </div>
                      </div>
                    </div>
                    <div className="text-3xl font-bold text-gray-900 mb-4">
                      {course.price}
                    </div>
                    <Button className="w-full bg-[#8B2EE5] hover:bg-[#7325C4] h-12 mb-4">
                      Enroll now
                    </Button>
                    <div className="text-center text-sm text-gray-600 mb-6">
                      30-day money-back guarantee
                    </div>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Lifetime access</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-600" />
                        <span>Access on mobile and TV</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Tabs */}
      <section className="border-b border-gray-200 bg-white sticky top-16 z-10">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-8">
            {['overview', 'curriculum', 'instructor', 'reviews'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`py-4 font-medium capitalize transition-colors relative ${
                  activeTab === tab ? 'text-[#8B2EE5]' : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                {tab}
                {activeTab === tab && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#8B2EE5]"
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {activeTab === 'overview' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">About this course</h2>
                  <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                    {course.longDescription}
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">What you'll learn</h3>
                  <div className="grid md:grid-cols-2 gap-4 mb-8">
                    {course.skills.map((skill) => (
                      <div key={skill} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{skill}</span>
                      </div>
                    ))}
                  </div>

                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h3>
                  <ul className="space-y-2 mb-8">
                    {course.requirements.map((req) => (
                      <li key={req} className="flex items-start gap-3 text-gray-700">
                        <span className="text-[#8B2EE5] mt-1">•</span>
                        {req}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}

              {activeTab === 'curriculum' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-6">Course curriculum</h2>
                  <p className="text-gray-600 mb-8">
                    {course.modules} modules • {course.lessons} lessons • {course.duration} total length
                  </p>
                  <Accordion type="single" collapsible className="space-y-4">
                    {course.curriculum.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`} className="border border-gray-200 rounded-lg px-6">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center justify-between w-full pr-4">
                            <div className="text-left">
                              <div className="font-semibold text-gray-900">{module.title}</div>
                              <div className="text-sm text-gray-600 mt-1">
                                {module.lessons} lessons • {module.duration}
                              </div>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3 pt-4">
                            {module.topics.map((topic, topicIndex) => (
                              <div key={topicIndex} className="flex items-center justify-between py-2 border-t border-gray-100">
                                <div className="flex items-center gap-3">
                                  {topicIndex === 0 ? (
                                    <Play className="w-4 h-4 text-[#8B2EE5]" />
                                  ) : (
                                    <Lock className="w-4 h-4 text-gray-400" />
                                  )}
                                  <span className="text-gray-700">{topic}</span>
                                </div>
                                <span className="text-sm text-gray-500">5:24</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </motion.div>
              )}

              {activeTab === 'instructor' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Your instructor</h2>
                  <div className="flex gap-6 mb-8">
                    <img 
                      src={course.instructor.image} 
                      alt={course.instructor.name}
                      className="w-32 h-32 rounded-full"
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-2">{course.instructor.name}</h3>
                      <p className="text-[#8B2EE5] font-semibold mb-4">{course.instructor.title}</p>
                      <p className="text-gray-700">{course.instructor.bio}</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900 mb-2">4.9</div>
                      <div className="text-sm text-gray-600">Instructor Rating</div>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900 mb-2">28K</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="text-center p-6 bg-gray-50 rounded-lg">
                      <div className="text-3xl font-bold text-gray-900 mb-2">12</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'reviews' && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                  <h2 className="text-3xl font-bold text-gray-900 mb-8">Student reviews</h2>
                  <div className="flex items-center gap-8 mb-8 p-8 bg-gray-50 rounded-lg">
                    <div className="text-center">
                      <div className="text-6xl font-bold text-gray-900 mb-2">{course.rating}</div>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
                        ))}
                      </div>
                      <div className="text-sm text-gray-600">Course rating</div>
                    </div>
                    <div className="flex-1 space-y-2">
                      {[5, 4, 3, 2, 1].map((stars) => (
                        <div key={stars} className="flex items-center gap-3">
                          <div className="flex items-center gap-1 w-24">
                            {[...Array(stars)].map((_, i) => (
                              <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                            ))}
                          </div>
                          <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                            <div 
                              className="h-full bg-yellow-500"
                              style={{ width: `${stars === 5 ? 85 : stars === 4 ? 12 : 3}%` }}
                            />
                          </div>
                          <div className="text-sm text-gray-600 w-12">{stars === 5 ? '85%' : stars === 4 ? '12%' : '3%'}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="space-y-6">
                    {[
                      { name: 'John Smith', rating: 5, date: '2 days ago', review: 'Excellent course! The instructor explains complex concepts in a very clear and understandable way. The hands-on projects really helped solidify my understanding.' },
                      { name: 'Maria Garcia', rating: 5, date: '1 week ago', review: 'This is exactly what I needed to get started with Agentic AI. Well structured, comprehensive, and practical. Highly recommended!' },
                      { name: 'David Lee', rating: 4, date: '2 weeks ago', review: 'Great content overall. Some sections could use more examples, but the core material is solid and valuable.' }
                    ].map((review, index) => (
                      <div key={index} className="border-b border-gray-200 pb-6">
                        <div className="flex items-start gap-4 mb-3">
                          <div className="w-12 h-12 bg-gray-200 rounded-full" />
                          <div>
                            <div className="font-semibold text-gray-900">{review.name}</div>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                              <div className="flex items-center gap-1">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star key={i} className="w-3 h-3 text-yellow-500 fill-current" />
                                ))}
                              </div>
                              <span>•</span>
                              <span>{review.date}</span>
                            </div>
                          </div>
                        </div>
                        <p className="text-gray-700">{review.review}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-32 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">This course includes</h3>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3">
                        <Clock className="w-4 h-4 text-gray-600" />
                        <span>{course.duration} on-demand video</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Download className="w-4 h-4 text-gray-600" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Award className="w-4 h-4 text-gray-600" />
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <BookOpen className="w-4 h-4 text-gray-600" />
                        <span>Full lifetime access</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-bold text-gray-900 mb-4">Share this course</h3>
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="flex-1">Twitter</Button>
                      <Button variant="outline" size="sm" className="flex-1">LinkedIn</Button>
                      <Button variant="outline" size="sm" className="flex-1">Email</Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}