import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { BookOpen, Clock, Star, Play, ArrowLeft, CheckCircle, Users, Award, Download, Globe } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import InternalLinker from '@/components/seo/InternalLinker';

const courseData = {
  'intro-agentic-ai': {
    title: 'Introduction to Agentic AI',
    description: 'Learn the fundamentals of building autonomous AI agents that can make decisions and take actions independently.',
    longDescription: 'This comprehensive course introduces you to the world of Agentic AI, covering everything from basic concepts to building your first autonomous agent. You\'ll learn how AI agents perceive their environment, make decisions, and take actions to achieve their goals.',
    duration: '6 hours',
    students: 12500,
    rating: 4.9,
    reviews: 2840,
    level: 'Beginner',
    modules: 8,
    lessons: 42,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200&h=600&fit=crop',
    instructor: 'Dr. Sarah Chen',
    instructorBio: 'AI researcher with 15+ years of experience in autonomous systems',
    price: 'Free',
    curriculum: [
      {
        module: 'Module 1: Introduction to AI Agents',
        lessons: [
          { title: 'What are AI Agents?', duration: '15 min', type: 'video' },
          { title: 'Types of AI Agents', duration: '20 min', type: 'video' },
          { title: 'Agent Architectures', duration: '25 min', type: 'video' },
          { title: 'Quiz: Understanding Agents', duration: '10 min', type: 'quiz' }
        ]
      },
      {
        module: 'Module 2: Agent Perception',
        lessons: [
          { title: 'Sensor Systems', duration: '18 min', type: 'video' },
          { title: 'Data Processing', duration: '22 min', type: 'video' },
          { title: 'Environment Modeling', duration: '28 min', type: 'video' },
          { title: 'Lab: Building a Sensor', duration: '30 min', type: 'lab' }
        ]
      },
      {
        module: 'Module 3: Decision Making',
        lessons: [
          { title: 'Decision Frameworks', duration: '25 min', type: 'video' },
          { title: 'Goal-Based Actions', duration: '20 min', type: 'video' },
          { title: 'Utility Theory', duration: '30 min', type: 'video' },
          { title: 'Quiz: Decision Making', duration: '10 min', type: 'quiz' }
        ]
      },
      {
        module: 'Module 4: Building Your First Agent',
        lessons: [
          { title: 'Project Setup', duration: '15 min', type: 'video' },
          { title: 'Agent Implementation', duration: '45 min', type: 'video' },
          { title: 'Testing & Debugging', duration: '30 min', type: 'video' },
          { title: 'Final Project', duration: '60 min', type: 'project' }
        ]
      }
    ],
    learningOutcomes: [
      'Understand the fundamental concepts of AI agents',
      'Design and implement basic autonomous agents',
      'Apply decision-making algorithms in agent systems',
      'Build a complete AI agent from scratch'
    ],
    requirements: [
      'Basic programming knowledge (Python recommended)',
      'Understanding of basic algorithms',
      'No prior AI experience required'
    ]
  },
  'advanced-agent-orchestration': {
    title: 'Advanced Agent Orchestration',
    description: 'Master complex multi-agent systems and learn to coordinate AI agents working together to solve enterprise challenges.',
    longDescription: 'Dive deep into the world of multi-agent systems where multiple AI agents collaborate, communicate, and coordinate to solve complex problems. This advanced course covers state-of-the-art orchestration patterns and real-world applications.',
    duration: '12 hours',
    students: 8200,
    rating: 4.8,
    reviews: 1650,
    level: 'Advanced',
    modules: 15,
    lessons: 78,
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&h=600&fit=crop',
    instructor: 'Prof. Michael Rodriguez',
    instructorBio: 'Former Google Brain researcher specializing in distributed AI systems',
    price: '$299',
    curriculum: [
      {
        module: 'Module 1: Multi-Agent Fundamentals',
        lessons: [
          { title: 'Introduction to Multi-Agent Systems', duration: '20 min', type: 'video' },
          { title: 'Agent Communication Protocols', duration: '25 min', type: 'video' },
          { title: 'Coordination Mechanisms', duration: '30 min', type: 'video' },
          { title: 'Lab: Basic Agent Communication', duration: '45 min', type: 'lab' }
        ]
      },
      {
        module: 'Module 2: Orchestration Patterns',
        lessons: [
          { title: 'Centralized Orchestration', duration: '25 min', type: 'video' },
          { title: 'Distributed Coordination', duration: '30 min', type: 'video' },
          { title: 'Hierarchical Systems', duration: '28 min', type: 'video' },
          { title: 'Project: Building an Orchestrator', duration: '60 min', type: 'project' }
        ]
      },
      {
        module: 'Module 3: Advanced Topics',
        lessons: [
          { title: 'Conflict Resolution', duration: '35 min', type: 'video' },
          { title: 'Load Balancing', duration: '30 min', type: 'video' },
          { title: 'Fault Tolerance', duration: '40 min', type: 'video' },
          { title: 'Final Capstone Project', duration: '120 min', type: 'project' }
        ]
      }
    ],
    learningOutcomes: [
      'Design and implement multi-agent systems',
      'Master agent communication protocols',
      'Apply orchestration patterns at scale',
      'Build fault-tolerant distributed systems'
    ],
    requirements: [
      'Completion of "Introduction to Agentic AI" or equivalent',
      'Strong programming skills',
      'Understanding of distributed systems'
    ]
  },
  'building-production-ai': {
    title: 'Building Production AI Systems',
    description: 'Deploy scalable, reliable AI agents in production environments with best practices for monitoring and optimization.',
    longDescription: 'Learn how to take AI agents from development to production with confidence. This course covers deployment strategies, monitoring, optimization, and maintenance of AI systems at scale.',
    duration: '10 hours',
    students: 9800,
    rating: 4.9,
    reviews: 2120,
    level: 'Intermediate',
    modules: 12,
    lessons: 58,
    image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=1200&h=600&fit=crop',
    instructor: 'Emma Thompson',
    instructorBio: 'Senior DevOps Engineer with expertise in AI/ML infrastructure',
    price: '$249',
    curriculum: [
      {
        module: 'Module 1: Production Readiness',
        lessons: [
          { title: 'Production vs Development', duration: '18 min', type: 'video' },
          { title: 'Deployment Strategies', duration: '25 min', type: 'video' },
          { title: 'Environment Setup', duration: '30 min', type: 'video' },
          { title: 'Lab: Containerization', duration: '40 min', type: 'lab' }
        ]
      },
      {
        module: 'Module 2: Monitoring & Observability',
        lessons: [
          { title: 'Monitoring Fundamentals', duration: '22 min', type: 'video' },
          { title: 'Logging Best Practices', duration: '20 min', type: 'video' },
          { title: 'Performance Metrics', duration: '28 min', type: 'video' },
          { title: 'Lab: Setting Up Monitoring', duration: '45 min', type: 'lab' }
        ]
      },
      {
        module: 'Module 3: Scaling & Optimization',
        lessons: [
          { title: 'Horizontal Scaling', duration: '30 min', type: 'video' },
          { title: 'Performance Optimization', duration: '35 min', type: 'video' },
          { title: 'Cost Management', duration: '25 min', type: 'video' },
          { title: 'Final Project: Production Deployment', duration: '90 min', type: 'project' }
        ]
      }
    ],
    learningOutcomes: [
      'Deploy AI systems to production environments',
      'Implement comprehensive monitoring solutions',
      'Optimize performance and reduce costs',
      'Handle production incidents effectively'
    ],
    requirements: [
      'Basic understanding of AI agents',
      'Familiarity with cloud platforms',
      'Knowledge of Docker and CI/CD'
    ]
  },
  'enterprise-security-ai': {
    title: 'Enterprise Security for AI',
    description: 'Implement comprehensive security controls, compliance frameworks, and risk management for AI systems.',
    longDescription: 'Secure your AI systems against threats and ensure compliance with industry regulations. This course covers security best practices, threat modeling, and compliance frameworks for enterprise AI.',
    duration: '8 hours',
    students: 6500,
    rating: 4.7,
    reviews: 1420,
    level: 'Advanced',
    modules: 10,
    lessons: 48,
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=1200&h=600&fit=crop',
    instructor: 'James Martinez',
    instructorBio: 'Cybersecurity expert with 20+ years protecting AI systems',
    price: '$349',
    curriculum: [
      {
        module: 'Module 1: AI Security Fundamentals',
        lessons: [
          { title: 'Security Landscape', duration: '20 min', type: 'video' },
          { title: 'Threat Modeling', duration: '25 min', type: 'video' },
          { title: 'Risk Assessment', duration: '30 min', type: 'video' },
          { title: 'Lab: Security Analysis', duration: '35 min', type: 'lab' }
        ]
      },
      {
        module: 'Module 2: Compliance & Governance',
        lessons: [
          { title: 'Regulatory Requirements', duration: '28 min', type: 'video' },
          { title: 'GDPR for AI', duration: '25 min', type: 'video' },
          { title: 'SOC 2 Compliance', duration: '30 min', type: 'video' },
          { title: 'Project: Compliance Framework', duration: '60 min', type: 'project' }
        ]
      }
    ],
    learningOutcomes: [
      'Implement security controls for AI systems',
      'Ensure regulatory compliance',
      'Conduct threat modeling and risk assessment',
      'Build secure AI architectures'
    ],
    requirements: [
      'Understanding of AI systems',
      'Basic security knowledge',
      'Familiarity with compliance frameworks'
    ]
  }
};

export default function CourseDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const courseId = urlParams.get('id') || 'intro-agentic-ai';
  
  const course = useMemo(() => courseData[courseId] || courseData['intro-agentic-ai'], [courseId]);

  return (
        <InternalLinker currentPage="CourseDetail">
    <div className="bg-white">
      <PageMeta 
        title={course.title}
        description={course.description}
        url={`/course-detail?id=${courseId}`}
        keywords={[course.title, 'AI course', course.level, 'online learning']}
        image={course.image}
        course={{
          name: course.title,
          provider: '1C Platform',
          description: course.description,
          rating: String(course.rating),
          reviewCount: String(course.reviews || 1),
        }}
        noIndex={false}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Courses')}>
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to courses
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge className="bg-purple-600 text-white mb-4">
                  {course.level}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {course.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {course.longDescription}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500 fill-current" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-gray-400">({course.reviews.toLocaleString()} reviews)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Users className="w-5 h-5 text-gray-400" />
                    <span>{course.students.toLocaleString()} students</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-gray-400" />
                    <span>{course.duration}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <img 
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop" 
                    alt={course.instructor}
                    className="w-12 h-12 rounded-full"
                  />
                  <div>
                    <div className="font-semibold">{course.instructor}</div>
                    <div className="text-sm text-gray-400">{course.instructorBio}</div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24"
              >
                <Card className="overflow-hidden">
                  <img src={course.image} alt={course.title} className="w-full h-48 object-cover" />
                  <CardContent className="p-6">
                    <div className="text-3xl font-bold text-gray-900 mb-6">{course.price}</div>
                    <Button className="w-full bg-[#8B2EE5] hover:bg-[#7325C4] h-12 text-lg mb-4">
                      <Play className="w-5 h-5 mr-2" />
                      Start learning
                    </Button>
                    <div className="space-y-3 text-sm">
                      <div className="flex items-center gap-3 text-gray-600">
                        <BookOpen className="w-5 h-5 text-[#8B2EE5]" />
                        <span>{course.modules} modules • {course.lessons} lessons</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Award className="w-5 h-5 text-[#8B2EE5]" />
                        <span>Certificate of completion</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Download className="w-5 h-5 text-[#8B2EE5]" />
                        <span>Downloadable resources</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-600">
                        <Globe className="w-5 h-5 text-[#8B2EE5]" />
                        <span>Lifetime access</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Course Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              {/* What You'll Learn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">What you'll learn</h2>
                <div className="grid md:grid-cols-2 gap-4">
                  {course.learningOutcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                      <span className="text-gray-700">{outcome}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Curriculum */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Course curriculum</h2>
                <Accordion type="single" collapsible className="space-y-4">
                  {course.curriculum.map((module, index) => (
                    <AccordionItem key={index} value={`module-${index}`} className="border border-gray-200 rounded-xl px-6">
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex items-center gap-4 text-left">
                          <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                            <span className="text-[#8B2EE5] font-bold">{index + 1}</span>
                          </div>
                          <div>
                            <div className="font-semibold text-gray-900">{module.module}</div>
                            <div className="text-sm text-gray-600">{module.lessons.length} lessons</div>
                          </div>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="pt-4">
                        <div className="space-y-3 ml-14">
                          {module.lessons.map((lesson, lessonIndex) => (
                            <div key={lessonIndex} className="flex items-center justify-between py-2">
                              <div className="flex items-center gap-3">
                                <Play className="w-4 h-4 text-gray-400" />
                                <span className="text-gray-700">{lesson.title}</span>
                              </div>
                              <span className="text-sm text-gray-500">{lesson.duration}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </motion.div>

              {/* Requirements */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-3xl font-bold text-gray-900 mb-6">Requirements</h2>
                <ul className="space-y-3">
                  {course.requirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-1.5 h-1.5 bg-gray-400 rounded-full mt-2 flex-shrink-0" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
    </InternalLinker>
  );
}