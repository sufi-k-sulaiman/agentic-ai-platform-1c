import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { CheckCircle, Clock, BookOpen, Star, Play, ArrowLeft, Award, Target, TrendingUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import InternalLinker from '@/components/seo/InternalLinker';

const trackData = {
  'beginner-to-professional': {
    title: 'AI Beginner to Professional',
    duration: '6 months',
    totalCourses: 12,
    level: 'Beginner to Advanced',
    description: 'Complete learning path from fundamentals to building production AI systems',
    outcomes: [
      'Build autonomous AI agents from scratch',
      'Deploy production-ready AI systems',
      'Master advanced orchestration techniques',
      'Complete real-world capstone project'
    ],
    stages: [
      {
        title: 'Stage 1: Foundations',
        weeks: 4,
        description: 'Master the fundamentals of AI agents and core concepts',
        courses: [
          {
            id: 'intro-agentic-ai',
            title: 'Introduction to Agentic AI',
            duration: '6 hours',
            modules: 8,
            rating: 4.9,
            students: 12500,
            completed: false
          },
          {
            id: 'agent-decision-making',
            title: 'Agent Decision Making',
            duration: '5 hours',
            modules: 7,
            rating: 4.8,
            students: 8900,
            completed: false
          },
          {
            id: 'agent-architecture',
            title: 'Agent Architecture Basics',
            duration: '7 hours',
            modules: 9,
            rating: 4.7,
            students: 7200,
            completed: false
          }
        ]
      },
      {
        title: 'Stage 2: Core Concepts',
        weeks: 8,
        description: 'Build production systems and integrate with platforms',
        courses: [
          {
            id: 'building-production-ai',
            title: 'Building Production AI Systems',
            duration: '10 hours',
            modules: 12,
            rating: 4.9,
            students: 9800,
            completed: false
          },
          {
            id: 'platform-architecture',
            title: 'Platform Architecture',
            duration: '9 hours',
            modules: 11,
            rating: 4.8,
            students: 6400,
            completed: false
          },
          {
            id: 'api-integration',
            title: 'API Integration for AI',
            duration: '8 hours',
            modules: 10,
            rating: 4.7,
            students: 7100,
            completed: false
          },
          {
            id: 'event-driven-ai',
            title: 'Event-Driven AI Architecture',
            duration: '9 hours',
            modules: 11,
            rating: 4.8,
            students: 5600,
            completed: false
          }
        ]
      },
      {
        title: 'Stage 3: Advanced Topics',
        weeks: 10,
        description: 'Master advanced techniques and security',
        courses: [
          {
            id: 'advanced-agent-orchestration',
            title: 'Advanced Agent Orchestration',
            duration: '12 hours',
            modules: 15,
            rating: 4.8,
            students: 8200,
            completed: false
          },
          {
            id: 'enterprise-security-ai',
            title: 'Enterprise Security for AI',
            duration: '8 hours',
            modules: 10,
            rating: 4.7,
            students: 6500,
            completed: false
          },
          {
            id: 'advanced-model-training',
            title: 'Advanced Model Training',
            duration: '15 hours',
            modules: 18,
            rating: 4.9,
            students: 4900,
            completed: false
          }
        ]
      },
      {
        title: 'Stage 4: Capstone Project',
        weeks: 4,
        description: 'Build your final portfolio project',
        courses: [
          {
            id: 'enterprise-ai-design',
            title: 'Enterprise AI Design Patterns',
            duration: '14 hours',
            modules: 16,
            rating: 4.9,
            students: 5200,
            completed: false
          },
          {
            id: 'final-capstone',
            title: 'Capstone: Build Your AI Platform',
            duration: '20 hours',
            modules: 1,
            rating: 5.0,
            students: 3800,
            completed: false
          }
        ]
      }
    ]
  },
  'enterprise-architect': {
    title: 'Enterprise Architect Track',
    duration: '4 months',
    totalCourses: 10,
    level: 'Intermediate to Expert',
    description: 'Specialized path for designing and implementing enterprise AI architecture',
    outcomes: [
      'Design enterprise-grade AI architectures',
      'Implement security and compliance frameworks',
      'Scale systems to handle millions of requests',
      'Lead enterprise AI transformation projects'
    ],
    stages: [
      {
        title: 'Stage 1: Architecture Principles',
        weeks: 4,
        description: 'Learn foundational architecture patterns',
        courses: [
          {
            id: 'enterprise-ai-design',
            title: 'Enterprise AI Design Patterns',
            duration: '14 hours',
            modules: 16,
            rating: 4.9,
            students: 5200,
            completed: false
          },
          {
            id: 'distributed-ai-systems',
            title: 'Distributed AI Systems',
            duration: '12 hours',
            modules: 14,
            rating: 4.8,
            students: 4100,
            completed: false
          },
          {
            id: 'platform-architecture',
            title: 'Platform Architecture',
            duration: '9 hours',
            modules: 11,
            rating: 4.8,
            students: 6400,
            completed: false
          }
        ]
      },
      {
        title: 'Stage 2: System Design',
        weeks: 6,
        description: 'Master complex system design and orchestration',
        courses: [
          {
            id: 'advanced-agent-orchestration',
            title: 'Advanced Agent Orchestration',
            duration: '12 hours',
            modules: 15,
            rating: 4.8,
            students: 8200,
            completed: false
          },
          {
            id: 'building-production-ai',
            title: 'Building Production AI Systems',
            duration: '10 hours',
            modules: 12,
            rating: 4.9,
            students: 9800,
            completed: false
          },
          {
            id: 'model-optimization',
            title: 'Model Optimization',
            duration: '11 hours',
            modules: 13,
            rating: 4.8,
            students: 3700,
            completed: false
          }
        ]
      },
      {
        title: 'Stage 3: Security & Scale',
        weeks: 6,
        description: 'Implement enterprise security and scalability',
        courses: [
          {
            id: 'enterprise-security-ai',
            title: 'Enterprise Security for AI',
            duration: '8 hours',
            modules: 10,
            rating: 4.7,
            students: 6500,
            completed: false
          },
          {
            id: 'ai-compliance',
            title: 'AI Compliance & Governance',
            duration: '7 hours',
            modules: 9,
            rating: 4.6,
            students: 5800,
            completed: false
          }
        ]
      },
      {
        title: 'Stage 4: Real-world Projects',
        weeks: 4,
        description: 'Apply your knowledge in enterprise scenarios',
        courses: [
          {
            id: 'architect-capstone',
            title: 'Architect Capstone Project',
            duration: '18 hours',
            modules: 1,
            rating: 5.0,
            students: 2400,
            completed: false
          },
          {
            id: 'case-studies',
            title: 'Enterprise Case Studies',
            duration: '6 hours',
            modules: 8,
            rating: 4.8,
            students: 3200,
            completed: false
          }
        ]
      }
    ]
  },
  'developer-specialization': {
    title: 'Developer Specialization',
    duration: '5 months',
    totalCourses: 15,
    level: 'Intermediate',
    description: 'Hands-on path focused on building AI applications and integrations',
    outcomes: [
      'Build full-stack AI applications',
      'Master API integration patterns',
      'Deploy and scale AI systems',
      'Create professional portfolio projects'
    ],
    stages: [
      {
        title: 'Stage 1: Development Basics',
        weeks: 5,
        description: 'Foundation in AI development',
        courses: [
          {
            id: 'intro-agentic-ai',
            title: 'Introduction to Agentic AI',
            duration: '6 hours',
            modules: 8,
            rating: 4.9,
            students: 12500,
            completed: false
          },
          {
            id: 'agent-architecture',
            title: 'Agent Architecture Basics',
            duration: '7 hours',
            modules: 9,
            rating: 4.7,
            students: 7200,
            completed: false
          },
          {
            id: 'agent-decision-making',
            title: 'Agent Decision Making',
            duration: '5 hours',
            modules: 7,
            rating: 4.8,
            students: 8900,
            completed: false
          },
          {
            id: 'platform-architecture',
            title: 'Platform Architecture',
            duration: '9 hours',
            modules: 11,
            rating: 4.8,
            students: 6400,
            completed: false
          }
        ]
      },
      {
        title: 'Stage 2: API Integration',
        weeks: 6,
        description: 'Connect AI with external systems',
        courses: [
          {
            id: 'api-integration',
            title: 'API Integration for AI',
            duration: '8 hours',
            modules: 10,
            rating: 4.7,
            students: 7100,
            completed: false
          },
          {
            id: 'event-driven-ai',
            title: 'Event-Driven AI Architecture',
            duration: '9 hours',
            modules: 11,
            rating: 4.8,
            students: 5600,
            completed: false
          },
          {
            id: 'building-production-ai',
            title: 'Building Production AI Systems',
            duration: '10 hours',
            modules: 12,
            rating: 4.9,
            students: 9800,
            completed: false
          },
          {
            id: 'advanced-agent-orchestration',
            title: 'Advanced Agent Orchestration',
            duration: '12 hours',
            modules: 15,
            rating: 4.8,
            students: 8200,
            completed: false
          }
        ]
      },
      {
        title: 'Stage 3: Production Deploy',
        weeks: 6,
        description: 'Deploy and optimize AI in production',
        courses: [
          {
            id: 'enterprise-security-ai',
            title: 'Enterprise Security for AI',
            duration: '8 hours',
            modules: 10,
            rating: 4.7,
            students: 6500,
            completed: false
          },
          {
            id: 'model-optimization',
            title: 'Model Optimization',
            duration: '11 hours',
            modules: 13,
            rating: 4.8,
            students: 3700,
            completed: false
          },
          {
            id: 'distributed-ai-systems',
            title: 'Distributed AI Systems',
            duration: '12 hours',
            modules: 14,
            rating: 4.8,
            students: 4100,
            completed: false
          },
          {
            id: 'ai-compliance',
            title: 'AI Compliance & Governance',
            duration: '7 hours',
            modules: 9,
            rating: 4.6,
            students: 5800,
            completed: false
          }
        ]
      },
      {
        title: 'Stage 4: Portfolio Build',
        weeks: 4,
        description: 'Build professional portfolio projects',
        courses: [
          {
            id: 'developer-portfolio',
            title: 'Building Your AI Portfolio',
            duration: '8 hours',
            modules: 6,
            rating: 4.9,
            students: 4200,
            completed: false
          },
          {
            id: 'developer-capstone',
            title: 'Developer Capstone Project',
            duration: '22 hours',
            modules: 1,
            rating: 5.0,
            students: 3100,
            completed: false
          },
          {
            id: 'career-prep',
            title: 'Career Preparation',
            duration: '4 hours',
            modules: 5,
            rating: 4.8,
            students: 5500,
            completed: false
          }
        ]
      }
    ]
  }
};

export default function LearningTrack() {
  const urlParams = new URLSearchParams(window.location.search);
  const trackId = urlParams.get('id') || 'beginner-to-professional';
  
  const track = useMemo(() => trackData[trackId] || trackData['beginner-to-professional'], [trackId]);
  
  const totalCompleted = track.stages.reduce((sum, stage) => 
    sum + stage.courses.filter(c => c.completed).length, 0
  );
  const progressPercent = (totalCompleted / track.totalCourses) * 100;

  return (
        <InternalLinker currentPage="LearningTrack">
    <div className="bg-white">
      <PageMeta 
        title={track.title}
        description={track.description}
        url={`/learning-track?id=${trackId}`}
        keywords={['learning track', track.title, 'AI curriculum', 'structured learning']}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('LearningJourney')}>
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to learning journeys
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge className="bg-purple-400 text-white mb-4">
                  {track.level}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {track.title}
                </h1>
                <p className="text-xl text-purple-100 leading-relaxed mb-8">
                  {track.description}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{track.duration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <BookOpen className="w-5 h-5" />
                    <span>{track.totalCourses} courses</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Certificate included</span>
                  </div>
                </div>

                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium">Your Progress</span>
                    <span className="text-sm font-bold">{Math.round(progressPercent)}%</span>
                  </div>
                  <div className="h-3 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${progressPercent}%` }}
                      className="h-full bg-gradient-to-r from-green-400 to-emerald-500"
                    />
                  </div>
                  <div className="text-sm text-purple-200 mt-2">
                    {totalCompleted} of {track.totalCourses} courses completed
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <h3 className="text-xl font-bold mb-4">What you'll achieve</h3>
                <ul className="space-y-3">
                  {track.outcomes.map((outcome, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                      <span className="text-purple-100">{outcome}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="space-y-12">
            {track.stages.map((stage, stageIndex) => (
              <motion.div
                key={stageIndex}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: stageIndex * 0.1 }}
              >
                <div className="mb-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] rounded-xl flex items-center justify-center">
                      <span className="text-white text-xl font-bold">{stageIndex + 1}</span>
                    </div>
                    <div>
                      <h2 className="text-3xl font-bold text-gray-900">{stage.title}</h2>
                      <p className="text-gray-600">{stage.description} • {stage.weeks} weeks</p>
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {stage.courses.map((course, courseIndex) => (
                    <motion.div
                      key={course.id}
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: courseIndex * 0.05 }}
                    >
                      <Link to={createPageUrl('CourseDetail') + `?id=${course.id}`}>
                        <Card className={`h-full hover:shadow-xl transition-all cursor-pointer ${
                          course.completed ? 'bg-green-50 border-green-200' : ''
                        }`}>
                          <CardContent className="p-6">
                            {course.completed && (
                              <div className="flex items-center gap-2 text-green-600 mb-3">
                                <CheckCircle className="w-5 h-5 fill-current" />
                                <span className="text-sm font-semibold">Completed</span>
                              </div>
                            )}
                            <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                              {course.title}
                            </h3>
                            <div className="space-y-2 mb-4">
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Clock className="w-4 h-4 text-[#8B2EE5]" />
                                <span>{course.duration}</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <BookOpen className="w-4 h-4 text-[#8B2EE5]" />
                                <span>{course.modules} modules</span>
                              </div>
                              <div className="flex items-center gap-2 text-sm text-gray-600">
                                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                                <span>{course.rating} ({course.students.toLocaleString()})</span>
                              </div>
                            </div>
                            <Button 
                              className={`w-full ${
                                course.completed 
                                  ? 'bg-green-600 hover:bg-green-700' 
                                  : 'bg-[#8B2EE5] hover:bg-[#7325C4]'
                              }`}
                              size="sm"
                            >
                              <Play className="w-4 h-4 mr-2" />
                              {course.completed ? 'Review' : 'Start course'}
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {stageIndex < track.stages.length - 1 && (
                  <div className="flex justify-center my-8">
                    <div className="w-px h-12 bg-gradient-to-b from-purple-300 to-purple-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Completion Certificate */}
      <section className="py-24 bg-gradient-to-br from-purple-50 to-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="w-24 h-24 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] rounded-full flex items-center justify-center mx-auto mb-8">
              <Award className="w-12 h-12 text-white" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Earn your professional certificate
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Complete this learning track to earn an industry-recognized certificate demonstrating your expertise in Agentic AI.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { icon: Target, label: 'Career advancement' },
                { icon: TrendingUp, label: 'Salary increase' },
                { icon: Award, label: 'Industry recognition' }
              ].map((benefit, index) => (
                <div key={index} className="bg-white p-6 rounded-xl border border-purple-200">
                  <benefit.icon className="w-8 h-8 text-[#8B2EE5] mx-auto mb-3" />
                  <div className="font-semibold text-gray-900">{benefit.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
    </InternalLinker>
  );
}