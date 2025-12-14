import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Award, CheckCircle, ArrowRight, Star, Users, Clock, FileCheck, Briefcase, TrendingUp } from 'lucide-react';

const certifications = [
  {
    title: 'Certified Agentic AI Developer',
    level: 'Professional',
    duration: '40 hours',
    exams: 2,
    validity: '3 years',
    salary: '$85K-$120K',
    description: 'Demonstrates proficiency in developing and deploying production-ready AI agents',
    requirements: [
      'Complete 8 core courses',
      'Build 3 portfolio projects',
      'Pass written exam (75%+)',
      'Complete practical assessment'
    ],
    skills: [
      'Agent architecture design',
      'API integration',
      'Production deployment',
      'Performance optimization',
      'Security best practices'
    ],
    popular: true
  },
  {
    title: 'Certified AI Architect',
    level: 'Expert',
    duration: '60 hours',
    exams: 3,
    validity: '3 years',
    salary: '$120K-$180K',
    description: 'Advanced certification for designing enterprise-scale AI systems',
    requirements: [
      'Hold Professional certification',
      'Complete 12 advanced courses',
      'Design enterprise project',
      'Pass architecture exam (80%+)',
      'Present case study'
    ],
    skills: [
      'Enterprise architecture',
      'Multi-agent orchestration',
      'Infrastructure design',
      'Security architecture',
      'Compliance frameworks'
    ],
    popular: false
  },
  {
    title: 'Certified AI Specialist',
    level: 'Associate',
    duration: '25 hours',
    exams: 1,
    validity: '2 years',
    salary: '$60K-$85K',
    description: 'Entry-level certification validating foundational AI knowledge',
    requirements: [
      'Complete 5 fundamental courses',
      'Build 1 capstone project',
      'Pass certification exam (70%+)'
    ],
    skills: [
      'AI fundamentals',
      'Basic agent development',
      'API usage',
      'Testing & debugging',
      'Documentation'
    ],
    popular: false
  }
];

const benefits = [
  {
    icon: Briefcase,
    title: 'Career Advancement',
    description: 'Certified professionals earn 25% more on average and have access to exclusive job opportunities'
  },
  {
    icon: Star,
    title: 'Industry Recognition',
    description: 'Our certifications are recognized by leading tech companies and validate your expertise'
  },
  {
    icon: TrendingUp,
    title: 'Skill Validation',
    description: 'Demonstrate measurable competency in AI development to employers and clients'
  },
  {
    icon: Users,
    title: 'Professional Network',
    description: 'Join an exclusive community of certified AI professionals worldwide'
  },
  {
    icon: FileCheck,
    title: 'Digital Credentials',
    description: 'Shareable badges and certificates for LinkedIn, resumes, and professional profiles'
  },
  {
    icon: Award,
    title: 'Continuing Education',
    description: 'Access to exclusive workshops, webinars, and advanced learning resources'
  }
];

const stats = [
  { value: '15K+', label: 'Certified professionals' },
  { value: '95%', label: 'Pass rate' },
  { value: '$100K', label: 'Average salary' },
  { value: '500+', label: 'Hiring companies' }
];

const process = [
  {
    step: 1,
    title: 'Learn',
    description: 'Complete required courses and hands-on projects at your own pace',
    icon: Clock
  },
  {
    step: 2,
    title: 'Practice',
    description: 'Build real-world projects and prepare with practice exams',
    icon: CheckCircle
  },
  {
    step: 3,
    title: 'Certify',
    description: 'Pass the certification exam and practical assessment',
    icon: FileCheck
  },
  {
    step: 4,
    title: 'Succeed',
    description: 'Showcase your certification and advance your career',
    icon: Award
  }
];

export default function ProfessionalCertifications() {
  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
              <Award className="w-4 h-4" />
              Professional Certifications
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Get certified,
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                get ahead
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Industry-recognized certifications that validate your AI expertise and accelerate your career.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              View certifications <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
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

      {/* Certification Process */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your path to certification
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A clear, structured process to earn your professional certification
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {process.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {index < process.length - 1 && (
                  <div className="hidden md:block absolute top-16 left-full w-full h-0.5 bg-purple-200 -z-10" />
                )}
                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-[#8B2EE5] to-[#A855F7] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                    <item.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Available certifications
            </h2>
            <p className="text-xl text-gray-600">
              Choose the certification that matches your experience and goals
            </p>
          </div>

          <div className="space-y-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={cert.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`hover:shadow-xl transition-all ${cert.popular ? 'border-[#8B2EE5] border-2' : ''}`}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <CardTitle className="text-2xl">{cert.title}</CardTitle>
                          {cert.popular && (
                            <Badge className="bg-[#8B2EE5] text-white">Most Popular</Badge>
                          )}
                        </div>
                        <p className="text-gray-600 mb-4">{cert.description}</p>
                        <div className="flex flex-wrap gap-4 text-sm">
                          <Badge className="bg-purple-100 text-[#8B2EE5]">{cert.level}</Badge>
                          <div className="flex items-center gap-1 text-gray-600">
                            <Clock className="w-4 h-4" />
                            {cert.duration}
                          </div>
                          <div className="flex items-center gap-1 text-gray-600">
                            <FileCheck className="w-4 h-4" />
                            {cert.exams} exam{cert.exams > 1 ? 's' : ''}
                          </div>
                          <div className="flex items-center gap-1 text-gray-600">
                            <Award className="w-4 h-4" />
                            Valid {cert.validity}
                          </div>
                          <div className="flex items-center gap-1 font-semibold text-green-600">
                            <TrendingUp className="w-4 h-4" />
                            {cert.salary} avg salary
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-8">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Requirements</h4>
                        <ul className="space-y-2">
                          {cert.requirements.map((req, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-[#8B2EE5] flex-shrink-0 mt-0.5" />
                              {req}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Skills Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {cert.skills.map((skill, i) => (
                            <Badge key={i} variant="outline" className="text-gray-700">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                    <Button className="w-full mt-6 bg-[#8B2EE5] hover:bg-[#7325C4]">
                      Start preparation <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why get certified?
            </h2>
            <p className="text-xl text-gray-600">
              The advantages of professional certification
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardContent className="p-8">
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                      <benefit.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
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
              Ready to get certified?
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Start your certification journey today and join thousands of successful AI professionals.
            </p>
            <Button className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-10 h-16 text-lg">
              Begin preparation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}