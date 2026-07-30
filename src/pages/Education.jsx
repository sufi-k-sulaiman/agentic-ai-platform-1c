import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { GraduationCap, TrendingDown, Database, Workflow, DollarSign, Users, BookOpen, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import VerticalAnalytics from '@/components/VerticalAnalytics';

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
        image="https://images.unsplash.com/photo-1523243827797-8c9b0b0b0b0b?w=1200&h=630&fit=crop"
        service={{
          type: 'Education AI Platform',
          areaServed: 'Worldwide',
        }}
        localBusiness={{
          name: '1C Platform - Education AI',
          telephone: '+1-800-1C-LEARN',
        }}
      
        faq={[{"question":"How does AI transform educational operations?","answer":"Agents automate student engagement, grading, administrative tasks, and learning analytics. The platform increases student engagement by 60% while saving 50% of administrative time."},{"question":"Can it integrate with your LMS?","answer":"Yes. We connect to Canvas, Blackboard, Moodle, Google Classroom, and custom LMS platforms. Agents track student progress, automate grading, and personalize learning paths."},{"question":"What engagement improvements can I expect?","answer":"Educational institutions typically see 60% engagement increase, 50% time savings, and 30% better learning outcomes when deploying agentic AI."}]}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Industries', url: '/Blog' }, { name: 'Education', url: '/Education' }]}
      />
      <BreadcrumbNav items={[
        { label: 'Home', page: 'Home' },
        { label: 'Education' }
      ]} />
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
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                    Get started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('SavingsCalculator')}>
                  <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                    Calculate Savings
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&q=80" alt="Education" className="rounded-3xl shadow-2xl" />
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

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education's Personalization Problem</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Traditional education's one-size-fits-all approach fails the majority of students: teachers present material at a single pace and style, leaving struggling students confused and falling further behind while advanced students sit bored waiting for classmates to catch up. A student who misses the foundational concept in week 2 struggles through week 3 material that builds on it, with gaps compounding until they're failing and have lost confidence in their ability. Teachers want to provide individual support but face impossible ratios—one teacher managing 30 students across six class periods means 180 students, making personalized instruction mathematically impossible. Grading consumes evenings and weekends: routine assignments require hours to grade and return, delaying feedback when it would be most valuable for learning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Administrative burden crushes educator effectiveness: teachers spend 50% of work time on non-instructional tasks—taking attendance, entering grades, planning lessons, creating assessments, communicating with parents, completing compliance paperwork. Special education requires extensive documentation of accommodations and progress, consuming hours weekly. At-risk students fall through cracks because by the time quarterly grades reveal problems, they've missed months of foundational learning. School administrators manually create schedules balancing hundreds of constraints—course requirements, teacher certifications, room capacities, equipment availability—a puzzle taking weeks that still produces conflicts and inefficiencies. Data exists across student information systems, learning platforms, and assessment tools but remains siloed, preventing holistic understanding of student needs and learning patterns that could inform better teaching strategies.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Personalized Learning Automation</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI revolutionizes education by providing every student with a personalized AI tutor that adapts to their learning style, pace, and needs. These intelligent agents assess understanding through conversations and exercises, identify exactly where knowledge gaps exist, and provide targeted explanations and practice until concepts are mastered—whether a student needs three different approaches to understand fractions or is ready to accelerate into advanced topics. Grading automation instantly evaluates routine assignments, providing immediate feedback while teachers focus on complex projects requiring human assessment. Adaptive learning platforms adjust difficulty and content based on student performance, ensuring everyone is challenged appropriately. Early warning AI flags at-risk students weeks before they fail by analyzing engagement patterns, assessment scores, and participation—triggering interventions while there's still time to help.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Administrative automation liberates teacher time: attendance, grade entry, progress reporting, and parent communication happen automatically. Lesson planning AI suggests resources, activities, and assessments aligned with standards and student needs. Scheduling optimization creates efficient schedules in hours rather than weeks, maximizing facility utilization while minimizing conflicts. Special education AI maintains required documentation automatically, tracking accommodations and progress without manual paperwork. Teachers finally spend time on what matters: one-on-one instruction, mentoring, and inspiring students. Outcomes improve dramatically: 60% higher student engagement from personalized learning that meets them where they are, 30% better learning outcomes from early intervention and adaptive instruction, 40% higher retention as struggling students get support before giving up, and 50% less teacher burnout from eliminated administrative burden. Education fulfills its promise of helping every student reach their potential while making teaching careers sustainable and rewarding.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Education's Personalization Problem</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Traditional education's one-size-fits-all approach fails the majority of students: teachers present material at a single pace and style, leaving struggling students confused and falling further behind while advanced students sit bored waiting for classmates to catch up. A student who misses the foundational concept in week 2 struggles through week 3 material that builds on it, with gaps compounding until they're failing and have lost confidence in their ability. Teachers want to provide individual support but face impossible ratios—one teacher managing 30 students across six class periods means 180 students, making personalized instruction mathematically impossible. Grading consumes evenings and weekends: routine assignments require hours to grade and return, delaying feedback when it would be most valuable for learning.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Administrative burden crushes educator effectiveness: teachers spend 50% of work time on non-instructional tasks—taking attendance, entering grades, planning lessons, creating assessments, communicating with parents, completing compliance paperwork. Special education requires extensive documentation of accommodations and progress, consuming hours weekly. At-risk students fall through cracks because by the time quarterly grades reveal problems, they've missed months of foundational learning. School administrators manually create schedules balancing hundreds of constraints—course requirements, teacher certifications, room capacities, equipment availability—a puzzle taking weeks that still produces conflicts and inefficiencies. Data exists across student information systems, learning platforms, and assessment tools but remains siloed, preventing holistic understanding of student needs and learning patterns that could inform better teaching strategies.
            </p>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 mt-8">Personalized Learning Automation</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI revolutionizes education by providing every student with a personalized AI tutor that adapts to their learning style, pace, and needs. These intelligent agents assess understanding through conversations and exercises, identify exactly where knowledge gaps exist, and provide targeted explanations and practice until concepts are mastered—whether a student needs three different approaches to understand fractions or is ready to accelerate into advanced topics. Grading automation instantly evaluates routine assignments, providing immediate feedback while teachers focus on complex projects requiring human assessment. Adaptive learning platforms adjust difficulty and content based on student performance, ensuring everyone is challenged appropriately. Early warning AI flags at-risk students weeks before they fail by analyzing engagement patterns, assessment scores, and participation—triggering interventions while there's still time to help.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Administrative automation liberates teacher time: attendance, grade entry, progress reporting, and parent communication happen automatically. Lesson planning AI suggests resources, activities, and assessments aligned with standards and student needs. Scheduling optimization creates efficient schedules in hours rather than weeks, maximizing facility utilization while minimizing conflicts. Special education AI maintains required documentation automatically, tracking accommodations and progress without manual paperwork. Teachers finally spend time on what matters: one-on-one instruction, mentoring, and inspiring students. Outcomes improve dramatically: 60% higher student engagement from personalized learning that meets them where they are, 30% better learning outcomes from early intervention and adaptive instruction, 40% higher retention as struggling students get support before giving up, and 50% less teacher burnout from eliminated administrative burden. Education fulfills its promise of helping every student reach their potential while making teaching careers sustainable and rewarding.
            </p>
          </div>
        </div>
      </section>

      {/* Analytics */}
      <VerticalAnalytics industry={{
        activityTimeline: [
          { time: '10:30 AM', action: 'Assignment graded', description: '32 student submissions processed', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '10:45 AM', action: 'At-risk student identified', description: 'Early intervention triggered', icon: 'AlertCircle', color: 'text-orange-500' },
          { time: '11:20 AM', action: 'Lesson plan generated', description: 'Personalized content created', icon: 'CheckCircle', color: 'text-green-500' },
          { time: '11:45 AM', action: 'Parent notification sent', description: 'Progress reports delivered', icon: 'CheckCircle', color: 'text-green-500' }
        ],
        goalsProgress: [
          { goal: 'Student Engagement', current: 880, target: 1000, percentage: 88, color: 'bg-purple-500' },
          { goal: 'Learning Outcomes', current: 750, target: 1000, percentage: 75, color: 'bg-green-500' },
          { goal: 'Admin Time Saved', current: 92, target: 100, percentage: 92, color: 'bg-blue-500' },
          { goal: 'Retention Rate', current: 85, target: 100, percentage: 85, color: 'bg-orange-500' }
        ],
        notifications: [
          { title: 'Improved Test Scores', description: 'Class average up 15% this semester...', time: '2 min ago', icon: 'CheckCircle', color: 'text-green-500' },
          { title: 'Attendance Boost', description: 'Daily attendance at 96%...', time: '15 min ago', icon: 'TrendingUp', color: 'text-blue-500' },
          { title: 'New Content', description: 'AI generated 12 personalized lessons...', time: '1 hour ago', icon: 'Info', color: 'text-purple-500' },
          { title: 'Parent Engagement', description: 'Parent portal usage increased 40%...', time: '3 hours ago', icon: 'AlertCircle', color: 'text-orange-500' }
        ]
      }} />

      <section className="py-24 bg-gray-50">
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
                    <div className="flex items-start justify-between gap-4">
                      <CardTitle className="text-2xl flex-1">{challenge.title}</CardTitle>
                      <div className="w-14 h-14 flex items-center justify-center flex-shrink-0">
                        <challenge.icon className="w-7 h-7 text-[#8B2EE5]" />
                      </div>
                    </div>
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

      <section className="py-24 bg-white">
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
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
                  Get started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('SavingsCalculator')}>
                <Button variant="outline" className="rounded-full border-gray-300 px-10 h-16 text-lg">
                  Calculate Savings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <RelatedContent
        currentPage="Education"
        category="industry"
        crossCategories={['product', 'resources']}
        title="Explore Related Solutions"
      />
    </div>
  );
}