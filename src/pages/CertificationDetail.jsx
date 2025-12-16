import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, Clock, FileCheck, ArrowLeft, TrendingUp, BookOpen, Star, Play, Target, Users, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const certificationData = {
  'ai-specialist': {
    title: 'Certified AI Specialist',
    level: 'Associate',
    duration: '25 hours',
    exams: 1,
    validity: '2 years',
    salary: '$60K-$85K',
    description: 'Entry-level certification validating foundational AI knowledge and practical skills',
    longDescription: 'The Certified AI Specialist certification is designed for professionals starting their journey in Agentic AI. This entry-level certification validates your understanding of core AI concepts, basic agent development, and fundamental implementation skills.',
    examFormat: 'Online proctored exam with 60 multiple choice and scenario-based questions',
    passingScore: '70%',
    cost: '$199',
    outcomes: [
      'Validate foundational AI knowledge',
      'Demonstrate basic agent development skills',
      'Qualify for entry-level AI positions',
      'Build credibility with employers'
    ],
    requiredCourses: [
      { id: 'intro-agentic-ai', title: 'Introduction to Agentic AI', duration: '6 hours', mandatory: true },
      { id: 'agent-decision-making', title: 'Agent Decision Making', duration: '5 hours', mandatory: true },
      { id: 'agent-architecture', title: 'Agent Architecture Basics', duration: '7 hours', mandatory: true },
      { id: 'api-integration', title: 'API Integration for AI', duration: '8 hours', mandatory: false },
      { id: 'platform-architecture', title: 'Platform Architecture', duration: '9 hours', mandatory: false }
    ],
    projects: [
      {
        title: 'Build a Simple AI Agent',
        description: 'Create an autonomous agent that can make decisions and interact with an API',
        duration: '8-10 hours',
        deliverables: ['Working code repository', 'Documentation', 'Demo video']
      }
    ],
    examTopics: [
      { topic: 'AI Fundamentals', weight: '25%', questions: 15 },
      { topic: 'Agent Architecture', weight: '25%', questions: 15 },
      { topic: 'Decision Making', weight: '20%', questions: 12 },
      { topic: 'API Integration', weight: '15%', questions: 9 },
      { topic: 'Best Practices', weight: '15%', questions: 9 }
    ],
    preparationTime: '3-4 weeks',
    renewalRequirements: [
      'Complete 10 hours of continuing education',
      'Demonstrate active project work',
      'Pay renewal fee ($99)'
    ]
  },
  'ai-developer': {
    title: 'Certified Agentic AI Developer',
    level: 'Professional',
    duration: '40 hours',
    exams: 2,
    validity: '3 years',
    salary: '$85K-$120K',
    description: 'Professional certification demonstrating proficiency in developing and deploying production-ready AI agents',
    longDescription: 'The Certified Agentic AI Developer is a professional-level certification that validates advanced skills in building, deploying, and maintaining AI agent systems in production environments. This certification demonstrates your ability to architect scalable solutions and implement best practices.',
    examFormat: 'Two-part assessment: Written exam (90 minutes) + Practical coding assessment (3 hours)',
    passingScore: '75% on both exams',
    cost: '$399',
    outcomes: [
      'Qualify for senior developer positions',
      'Lead AI development projects',
      'Command premium salary ranges',
      'Join exclusive professional network'
    ],
    requiredCourses: [
      { id: 'intro-agentic-ai', title: 'Introduction to Agentic AI', duration: '6 hours', mandatory: true },
      { id: 'building-production-ai', title: 'Building Production AI Systems', duration: '10 hours', mandatory: true },
      { id: 'platform-architecture', title: 'Platform Architecture', duration: '9 hours', mandatory: true },
      { id: 'api-integration', title: 'API Integration for AI', duration: '8 hours', mandatory: true },
      { id: 'event-driven-ai', title: 'Event-Driven AI Architecture', duration: '9 hours', mandatory: true },
      { id: 'agent-architecture', title: 'Agent Architecture Basics', duration: '7 hours', mandatory: true },
      { id: 'advanced-agent-orchestration', title: 'Advanced Agent Orchestration', duration: '12 hours', mandatory: false },
      { id: 'enterprise-security-ai', title: 'Enterprise Security for AI', duration: '8 hours', mandatory: false }
    ],
    projects: [
      {
        title: 'Multi-Agent System',
        description: 'Build a system with multiple coordinating agents that solve a complex problem',
        duration: '15-20 hours',
        deliverables: ['Source code', 'Architecture documentation', 'Deployment guide', 'Demo video']
      },
      {
        title: 'Production Deployment',
        description: 'Deploy an AI agent to production with monitoring and scaling',
        duration: '10-15 hours',
        deliverables: ['Deployed application', 'Infrastructure code', 'Monitoring setup', 'Performance report']
      },
      {
        title: 'API Integration Project',
        description: 'Integrate AI agents with external services and APIs',
        duration: '8-12 hours',
        deliverables: ['Working integration', 'API documentation', 'Test suite', 'Usage examples']
      }
    ],
    examTopics: [
      { topic: 'Advanced Architecture', weight: '20%', questions: 24 },
      { topic: 'Production Deployment', weight: '20%', questions: 24 },
      { topic: 'Multi-Agent Systems', weight: '18%', questions: 22 },
      { topic: 'API Integration', weight: '15%', questions: 18 },
      { topic: 'Performance Optimization', weight: '15%', questions: 18 },
      { topic: 'Security & Best Practices', weight: '12%', questions: 14 }
    ],
    preparationTime: '6-8 weeks',
    renewalRequirements: [
      'Complete 20 hours of continuing education',
      'Present at conference or publish article',
      'Maintain active GitHub contributions',
      'Pay renewal fee ($199)'
    ]
  },
  'ai-architect': {
    title: 'Certified AI Architect',
    level: 'Expert',
    duration: '60 hours',
    exams: 3,
    validity: '3 years',
    salary: '$120K-$180K',
    description: 'Expert-level certification for designing and implementing enterprise-scale AI architectures',
    longDescription: 'The Certified AI Architect is the highest level of certification, validating your expertise in designing, implementing, and leading enterprise-scale AI initiatives. This certification demonstrates mastery of complex architectural patterns, security frameworks, and organizational leadership.',
    examFormat: 'Three-part assessment: Written exam (2 hours) + Architecture design exam (4 hours) + Case study presentation (1 hour)',
    passingScore: '80% on all exams',
    cost: '$799',
    prerequisite: 'Must hold Certified Agentic AI Developer certification',
    outcomes: [
      'Lead enterprise AI transformation initiatives',
      'Design systems handling millions of requests',
      'Command top-tier compensation packages',
      'Speak at industry conferences and events'
    ],
    requiredCourses: [
      { id: 'enterprise-ai-design', title: 'Enterprise AI Design Patterns', duration: '14 hours', mandatory: true },
      { id: 'distributed-ai-systems', title: 'Distributed AI Systems', duration: '12 hours', mandatory: true },
      { id: 'advanced-agent-orchestration', title: 'Advanced Agent Orchestration', duration: '12 hours', mandatory: true },
      { id: 'enterprise-security-ai', title: 'Enterprise Security for AI', duration: '8 hours', mandatory: true },
      { id: 'ai-compliance', title: 'AI Compliance & Governance', duration: '7 hours', mandatory: true },
      { id: 'building-production-ai', title: 'Building Production AI Systems', duration: '10 hours', mandatory: true },
      { id: 'model-optimization', title: 'Model Optimization', duration: '11 hours', mandatory: true },
      { id: 'platform-architecture', title: 'Platform Architecture', duration: '9 hours', mandatory: false },
      { id: 'advanced-model-training', title: 'Advanced Model Training', duration: '15 hours', mandatory: false }
    ],
    projects: [
      {
        title: 'Enterprise Architecture Design',
        description: 'Design a complete enterprise AI architecture for a Fortune 500 company',
        duration: '25-30 hours',
        deliverables: ['Architecture documentation', 'System diagrams', 'Security framework', 'Scalability plan', 'Cost analysis']
      },
      {
        title: 'Case Study Presentation',
        description: 'Present a real-world enterprise AI transformation case study',
        duration: '15-20 hours',
        deliverables: ['Presentation deck', 'Technical deep-dive', 'ROI analysis', 'Lessons learned']
      }
    ],
    examTopics: [
      { topic: 'Enterprise Architecture', weight: '25%', questions: 38 },
      { topic: 'Distributed Systems', weight: '20%', questions: 30 },
      { topic: 'Security & Compliance', weight: '18%', questions: 27 },
      { topic: 'Scalability & Performance', weight: '15%', questions: 23 },
      { topic: 'Leadership & Strategy', weight: '12%', questions: 18 },
      { topic: 'Cost Optimization', weight: '10%', questions: 14 }
    ],
    preparationTime: '3-4 months',
    renewalRequirements: [
      'Complete 30 hours of continuing education',
      'Speak at 2+ conferences or publish research',
      'Mentor certified professionals',
      'Lead enterprise implementation',
      'Pay renewal fee ($399)'
    ]
  }
};

export default function CertificationDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const certId = urlParams.get('id') || 'ai-developer';
  
  const cert = useMemo(() => certificationData[certId] || certificationData['ai-developer'], [certId]);

  return (
    <div className="bg-white">
      <PageMeta 
        title={cert.title}
        description={cert.description}
        url={`/certification-detail?id=${certId}`}
        keywords={[cert.title, 'AI certification', cert.level, 'professional development']}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-gray-900 to-black text-white">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('ProfessionalCertifications')}>
            <Button variant="ghost" className="mb-6 text-white hover:bg-white/10">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to certifications
            </Button>
          </Link>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <Badge className="bg-purple-600 text-white mb-4">
                  {cert.level}
                </Badge>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                  {cert.title}
                </h1>
                <p className="text-xl text-gray-300 leading-relaxed mb-8">
                  {cert.longDescription}
                </p>
                
                <div className="flex flex-wrap items-center gap-6 mb-8">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span>{cert.duration} prep time</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <FileCheck className="w-5 h-5" />
                    <span>{cert.exams} exam{cert.exams > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-5 h-5" />
                    <span>{cert.salary} avg salary</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Award className="w-5 h-5" />
                    <span>Valid {cert.validity}</span>
                  </div>
                </div>

                {cert.prerequisite && (
                  <div className="bg-yellow-500/20 border border-yellow-500/40 rounded-xl p-4 mb-6">
                    <div className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-yellow-300 flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="font-semibold text-yellow-200 mb-1">Prerequisite Required</div>
                        <div className="text-yellow-100 text-sm">{cert.prerequisite}</div>
                      </div>
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
            
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                className="sticky top-24"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-6">
                    <div className="text-4xl font-bold text-white mb-2">{cert.cost}</div>
                    <div className="text-purple-200 text-sm mb-6">Exam fee + study materials included</div>
                    <Button className="w-full bg-white text-gray-900 hover:bg-gray-100 h-12 text-lg mb-4">
                      Register now
                    </Button>
                    <div className="mt-6 pt-6 border-t border-white/20 space-y-3 text-sm">
                      <div className="flex items-center justify-between text-purple-200">
                        <span>Preparation time</span>
                        <span className="font-semibold text-white">{cert.preparationTime}</span>
                      </div>
                      <div className="flex items-center justify-between text-purple-200">
                        <span>Passing score</span>
                        <span className="font-semibold text-white">{cert.passingScore}</span>
                      </div>
                      <div className="flex items-center justify-between text-purple-200">
                        <span>Exam format</span>
                        <span className="font-semibold text-white">Online</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Achieve */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">What you'll achieve</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {cert.outcomes.map((outcome, index) => (
                <div key={index} className="flex items-start gap-3 bg-white p-6 rounded-xl border border-gray-200">
                  <CheckCircle className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" />
                  <span className="text-lg text-gray-700">{outcome}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Required Courses */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Required preparation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {cert.requiredCourses.map((course, index) => (
                <Link key={course.id} to={createPageUrl('CourseDetail') + `?id=${course.id}`}>
                  <Card className="h-full hover:shadow-xl transition-all cursor-pointer">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-3">
                        <Badge className={course.mandatory ? 'bg-red-100 text-red-700' : 'bg-gray-100 text-gray-700'}>
                          {course.mandatory ? 'Required' : 'Optional'}
                        </Badge>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight">
                        {course.title}
                      </h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Clock className="w-4 h-4 text-[#8B2EE5]" />
                        <span>{course.duration}</span>
                      </div>
                      <Button className="w-full mt-4 bg-[#8B2EE5] hover:bg-[#7325C4]" size="sm">
                        <Play className="w-4 h-4 mr-2" />
                        View course
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Portfolio projects</h2>
            <div className="space-y-6">
              {cert.projects.map((project, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                      <Badge className="bg-purple-100 text-[#8B2EE5]">{project.duration}</Badge>
                    </div>
                    <p className="text-gray-600 mb-4">{project.description}</p>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">Deliverables:</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.deliverables.map((item, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
                            <CheckCircle className="w-4 h-4 text-[#8B2EE5]" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Exam Breakdown */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Exam breakdown</h2>
            <p className="text-gray-600 mb-8">{cert.examFormat}</p>
            <div className="grid gap-4">
              {cert.examTopics.map((topic, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="text-lg font-bold text-gray-900">{topic.topic}</h3>
                      <div className="flex items-center gap-4">
                        <Badge className="bg-purple-100 text-[#8B2EE5]">{topic.weight}</Badge>
                        <span className="text-sm text-gray-600">{topic.questions} questions</span>
                      </div>
                    </div>
                    <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: topic.weight }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-[#8B2EE5] to-[#A855F7]"
                      />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Renewal Requirements */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Maintaining your certification</h2>
            <Card>
              <CardContent className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Award className="w-8 h-8 text-[#8B2EE5]" />
                    <div>
                      <div className="font-semibold text-gray-900">Valid for {cert.validity}</div>
                      <div className="text-sm text-gray-600">Renewable upon completion of requirements</div>
                    </div>
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-4">Renewal requirements:</h3>
                <ul className="space-y-3">
                  {cert.renewalRequirements.map((req, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
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
              Ready to get certified?
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Start your preparation today and join thousands of certified AI professionals.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-10 h-16 text-lg">
                Register for exam
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-10 h-16 text-lg">
                <Download className="w-5 h-5 mr-2" />
                Download study guide
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}