import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, TrendingDown, Database, Workflow, DollarSign, Users, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const challenges = [
  {
    icon: Users,
    title: 'Student Engagement',
    problem: 'One-size-fits-all teaching, lack of personalization, declining engagement',
    solution: 'AI personalizes learning paths, adapts content to student needs, increasing engagement by 45%'
  },
  {
    icon: DollarSign,
    title: 'Administrative Burden',
    problem: 'Manual grading, scheduling, enrollment, reporting—overwhelming staff',
    solution: 'Automated grading, smart scheduling, enrollment workflows—saving 60% of admin time'
  },
  {
    icon: Database,
    title: 'Fragmented Systems',
    problem: 'LMS, SIS, finance, library—disconnected systems with no unified view',
    solution: 'Unified AI platform integrates all systems, providing complete student insights'
  },
  {
    icon: BookOpen,
    title: 'Learning Outcomes',
    problem: 'Difficulty identifying at-risk students, no personalized intervention',
    solution: 'AI predicts student performance, enables early intervention, improving outcomes by 30%'
  }
];

const solutions = [
  {
    category: 'Student Experience',
    items: [
      '24/7 Agentic Ai tutor for personalized learning support',
      'Adaptive learning paths based on progress',
      'Intelligent course recommendations',
      'Mental health and wellness monitoring'
    ]
  },
  {
    category: 'Teaching & Assessment',
    items: [
      'Automated grading and feedback generation',
      'Plagiarism detection and academic integrity',
      'Personalized content recommendations',
      'Real-time student performance analytics'
    ]
  },
  {
    category: 'Administration',
    items: [
      'Automated enrollment and registration',
      'Intelligent course scheduling',
      'Financial aid processing automation',
      'Compliance reporting and accreditation'
    ]
  },
  {
    category: 'Student Success',
    items: [
      'Early warning system for at-risk students',
      'Career guidance and placement matching',
      'Alumni engagement automation',
      'Retention prediction and intervention'
    ]
  }
];

const metrics = [
  { value: '45%', label: 'Higher Engagement', description: 'Personalized learning' },
  { value: '60%', label: 'Admin Time Saved', description: 'Automated workflows' },
  { value: '30%', label: 'Better Outcomes', description: 'Early intervention' },
  { value: '40%', label: 'Retention Rate', description: 'Student success programs' }
];

export default function Education() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Education AI Platform"
        description="AI-powered education platform for personalized learning. 45% higher engagement, 60% admin time saved, 30% better learning outcomes through adaptive technology."
        url="/education"
        keywords={['education AI', 'personalized learning', 'adaptive learning', 'automated grading', 'student success', 'learning platform']}
      />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <GraduationCap className="w-4 h-4" />
                Education
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  education platform
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform education with Agentic Ai that personalizes learning, automates admin work, and improves outcomes—boosting engagement by 45% while saving 60% of admin time.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                  Request demo <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                  Education solutions
                </Button>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=800" alt="Education" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">{metric.value}</div>
                <div className="text-white font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Education challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms educational institutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <challenge.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-2xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-red-600 mb-2">❌ The Problem</div>
                        <p className="text-gray-600">{challenge.problem}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600 mb-2">✓ Agentic Ai Solution</div>
                        <p className="text-gray-900 font-medium">{challenge.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete education platform
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai managing every aspect of educational operations
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((section, index) => (
              <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#8B2EE5]">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready to transform education?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join leading institutions improving outcomes with Agentic Ai
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Schedule consultation <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}