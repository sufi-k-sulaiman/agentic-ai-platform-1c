import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Users, Star, Filter, ArrowLeft, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const categoryData = {
  'agentic-ai-fundamentals': {
    name: 'Agentic AI Fundamentals',
    description: 'Master the core concepts of autonomous AI agents and build a strong foundation for advanced topics.',
    level: 'Beginner',
    courses: [
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
        id: 'ai-agent-basics',
        title: 'AI Agent Basics',
        description: 'Understanding core concepts of agent architecture, perception, and decision-making.',
        duration: '4 hours',
        students: 8900,
        rating: 4.7,
        level: 'Beginner',
        modules: 6,
        image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop'
      },
      {
        id: 'agent-communication',
        title: 'Agent Communication Protocols',
        description: 'Learn how AI agents communicate and coordinate with each other and external systems.',
        duration: '5 hours',
        students: 7200,
        rating: 4.8,
        level: 'Beginner',
        modules: 7,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop'
      }
    ]
  },
  'platform-development': {
    name: 'Platform Development',
    description: 'Build and deploy scalable AI platforms with best practices for production environments.',
    level: 'Intermediate',
    courses: [
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
        id: 'platform-architecture',
        title: 'Platform Architecture Design',
        description: 'Design robust, scalable architectures for AI platforms serving millions of users.',
        duration: '8 hours',
        students: 6400,
        rating: 4.7,
        level: 'Intermediate',
        modules: 10,
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop'
      }
    ]
  },
  'enterprise-architecture': {
    name: 'Enterprise Architecture',
    description: 'Design and implement enterprise-grade AI solutions at scale.',
    level: 'Advanced',
    courses: [
      {
        id: 'advanced-orchestration',
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
        id: 'enterprise-scaling',
        title: 'Enterprise AI Scaling',
        description: 'Scale AI systems to handle millions of requests with reliability and performance.',
        duration: '9 hours',
        students: 5600,
        rating: 4.9,
        level: 'Advanced',
        modules: 11,
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop'
      }
    ]
  },
  'security-compliance': {
    name: 'Security & Compliance',
    description: 'Implement comprehensive security and compliance frameworks for AI systems.',
    level: 'Intermediate',
    courses: [
      {
        id: 'enterprise-security',
        title: 'Enterprise Security for AI',
        description: 'Implement comprehensive security controls, compliance frameworks, and risk management for AI systems.',
        duration: '8 hours',
        students: 6500,
        rating: 4.7,
        level: 'Advanced',
        modules: 10,
        image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=250&fit=crop'
      }
    ]
  }
};

export default function CourseCategory() {
  const [filter, setFilter] = useState('all');
  const categorySlug = new URLSearchParams(window.location.search).get('category') || 'agentic-ai-fundamentals';
  const category = categoryData[categorySlug] || categoryData['agentic-ai-fundamentals'];

  const filteredCourses = filter === 'all' ? category.courses : category.courses.filter(c => c.level === filter);

  return (
    <div className="bg-white min-h-screen">
      <PageMeta 
        title={`${category.name} Courses`}
        description={category.description}
        url={`/course-category?category=${categorySlug}`}
        keywords={['AI courses', category.name, 'online learning', 'certification']}
      />

      {/* Hero */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Courses')}>
            <Button variant="ghost" className="mb-8 -ml-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all courses
            </Button>
          </Link>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <Badge className="bg-purple-100 text-[#8B2EE5] mb-4">
              {category.level} Level
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              {category.name}
            </h1>
            <p className="text-2xl text-gray-600 max-w-3xl">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-4">
            <Filter className="w-5 h-5 text-gray-500" />
            <div className="flex gap-2">
              {['all', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
                <Button
                  key={level}
                  variant={filter === level ? 'default' : 'outline'}
                  className={filter === level ? 'bg-[#8B2EE5]' : ''}
                  onClick={() => setFilter(level)}
                  size="sm"
                >
                  {level === 'all' ? 'All Levels' : level}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold text-gray-900">
              {filteredCourses.length} {filteredCourses.length === 1 ? 'course' : 'courses'}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCourses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`${createPageUrl('CourseDetail')}?id=${course.id}`}>
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
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                      <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
                      <div className="flex items-center gap-2 mb-4">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="font-semibold">{course.rating}</span>
                        <span className="text-gray-500 text-sm">({course.students.toLocaleString()})</span>
                      </div>
                      <Button className="w-full bg-[#8B2EE5] hover:bg-[#7325C4]">
                        <Play className="w-4 h-4 mr-2" />
                        Start learning
                      </Button>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}