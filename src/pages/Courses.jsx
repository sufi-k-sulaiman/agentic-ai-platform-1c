import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, Star, CheckCircle, ArrowRight, Play } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const categories = [
  { name: 'Agentic Ai Fundamentals', count: 12, level: 'Beginner' },
  { name: 'Platform Development', count: 18, level: 'Intermediate' },
  { name: 'Enterprise Architecture', count: 15, level: 'Advanced' },
  { name: 'Security & Compliance', count: 10, level: 'Intermediate' },
  { name: 'AI Model Training', count: 14, level: 'Advanced' },
  { name: 'Integration Patterns', count: 9, level: 'Intermediate' }
];

const featuredCourses = [
  {
    title: 'Introduction to Agentic Ai',
    description: 'Learn the fundamentals of building autonomous AI agents that can make decisions and take actions independently.',
    duration: '6 hours',
    students: 12500,
    rating: 4.9,
    level: 'Beginner',
    modules: 8,
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=400&h=250&fit=crop'
  },
  {
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

const benefits = [
  'Hands-on labs with real-world scenarios',
  'Expert instructors from top AI companies',
  'Certificate of completion',
  'Lifetime access to course materials',
  'Community forum support',
  'Regular content updates'
];

export default function Courses() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Professional Courses"
        description="Master Agentic AI with expert-led courses. 100+ courses, hands-on labs, and certificates of completion."
        url="/courses"
        keywords={['AI courses', 'Agentic AI training', 'professional development', 'AI certification', 'online learning']}
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
              Professional Courses
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Master
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                Agentic Ai
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Learn from industry experts with comprehensive courses designed to take you from beginner to advanced AI practitioner.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14 text-base">
                Browse courses <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14 text-base">
                View free courses
              </Button>
            </div>
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
              { value: '95%', label: 'Completion rate' },
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

      {/* Categories */}
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
                <Card className="hover:shadow-xl transition-all cursor-pointer">
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
                <Card className="h-full hover:shadow-xl transition-all overflow-hidden">
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
                      Start learning
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
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Why learn with us?
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Get the complete learning experience designed to help you succeed in your AI career.
              </p>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-[#8B2EE5]" />
                    </div>
                    <span className="text-gray-700">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <img 
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=800&fit=crop" 
                alt="Learning" 
                className="rounded-3xl shadow-2xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start learning today
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join thousands of professionals advancing their careers with our expert-led courses.
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
              Browse all courses <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}