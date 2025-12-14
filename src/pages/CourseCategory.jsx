import React, { useMemo } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Clock, Star, Play, ArrowLeft, Filter } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';

const categoryData = {
  'agentic-ai-fundamentals': {
    name: 'Agentic AI Fundamentals',
    level: 'Beginner',
    description: 'Master the foundational concepts of autonomous AI agents and learn how to build intelligent systems that can make decisions independently.',
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
        id: 'agent-decision-making',
        title: 'Agent Decision Making',
        description: 'Understand how AI agents evaluate options, make choices, and execute actions in complex environments.',
        duration: '5 hours',
        students: 8900,
        rating: 4.8,
        level: 'Beginner',
        modules: 7,
        image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=400&h=250&fit=crop'
      },
      {
        id: 'agent-architecture',
        title: 'Agent Architecture Basics',
        description: 'Explore different architectural patterns for building scalable and efficient AI agents.',
        duration: '7 hours',
        students: 7200,
        rating: 4.7,
        level: 'Beginner',
        modules: 9,
        image: 'https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=400&h=250&fit=crop'
      }
    ]
  },
  'platform-development': {
    name: 'Platform Development',
    level: 'Intermediate',
    description: 'Build robust AI platforms with best practices for deployment, scaling, and maintenance of production systems.',
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
        title: 'Platform Architecture',
        description: 'Design scalable architectures for AI platforms that can handle millions of requests.',
        duration: '9 hours',
        students: 6400,
        rating: 4.8,
        level: 'Intermediate',
        modules: 11,
        image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=250&fit=crop'
      }
    ]
  },
  'enterprise-architecture': {
    name: 'Enterprise Architecture',
    level: 'Advanced',
    description: 'Design and implement enterprise-grade AI architectures that scale to support global operations.',
    courses: [
      {
        id: 'enterprise-ai-design',
        title: 'Enterprise AI Design Patterns',
        description: 'Learn proven design patterns for building enterprise AI systems that scale globally.',
        duration: '14 hours',
        students: 5200,
        rating: 4.9,
        level: 'Advanced',
        modules: 16,
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=250&fit=crop'
      },
      {
        id: 'distributed-ai-systems',
        title: 'Distributed AI Systems',
        description: 'Build distributed AI architectures that work across multiple data centers and cloud providers.',
        duration: '12 hours',
        students: 4100,
        rating: 4.8,
        level: 'Advanced',
        modules: 14,
        image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop'
      }
    ]
  },
  'security-compliance': {
    name: 'Security & Compliance',
    level: 'Intermediate',
    description: 'Implement comprehensive security controls and ensure regulatory compliance for AI systems.',
    courses: [
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
      },
      {
        id: 'ai-compliance',
        title: 'AI Compliance & Governance',
        description: 'Navigate regulatory requirements and implement governance frameworks for AI systems.',
        duration: '7 hours',
        students: 5800,
        rating: 4.6,
        level: 'Intermediate',
        modules: 9,
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=250&fit=crop'
      }
    ]
  },
  'ai-model-training': {
    name: 'AI Model Training',
    level: 'Advanced',
    description: 'Train, fine-tune, and optimize AI models for production use cases with state-of-the-art techniques.',
    courses: [
      {
        id: 'advanced-model-training',
        title: 'Advanced Model Training',
        description: 'Master cutting-edge techniques for training large-scale AI models efficiently.',
        duration: '15 hours',
        students: 4900,
        rating: 4.9,
        level: 'Advanced',
        modules: 18,
        image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop'
      },
      {
        id: 'model-optimization',
        title: 'Model Optimization',
        description: 'Optimize AI models for performance, accuracy, and resource efficiency.',
        duration: '11 hours',
        students: 3700,
        rating: 4.8,
        level: 'Advanced',
        modules: 13,
        image: 'https://images.unsplash.com/photo-1527474305487-b87b222841cc?w=400&h=250&fit=crop'
      }
    ]
  },
  'integration-patterns': {
    name: 'Integration Patterns',
    level: 'Intermediate',
    description: 'Connect AI agents with existing systems using proven integration patterns and best practices.',
    courses: [
      {
        id: 'api-integration',
        title: 'API Integration for AI',
        description: 'Build robust API integrations to connect AI agents with enterprise systems.',
        duration: '8 hours',
        students: 7100,
        rating: 4.7,
        level: 'Intermediate',
        modules: 10,
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&fit=crop'
      },
      {
        id: 'event-driven-ai',
        title: 'Event-Driven AI Architecture',
        description: 'Implement event-driven patterns for real-time AI agent communication.',
        duration: '9 hours',
        students: 5600,
        rating: 4.8,
        level: 'Intermediate',
        modules: 11,
        image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=400&h=250&fit=crop'
      }
    ]
  }
};

export default function CourseCategory() {
  const urlParams = new URLSearchParams(window.location.search);
  const categoryId = urlParams.get('id') || 'agentic-ai-fundamentals';
  
  const category = useMemo(() => categoryData[categoryId] || categoryData['agentic-ai-fundamentals'], [categoryId]);

  return (
    <div className="bg-white">
      <PageMeta 
        title={`${category.name} Courses`}
        description={category.description}
        url={`/course-category?id=${categoryId}`}
        keywords={[category.name, 'AI courses', 'professional training', category.level]}
      />
      
      {/* Header */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <Link to={createPageUrl('Courses')}>
            <Button variant="ghost" className="mb-6 hover:bg-purple-100">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to all courses
            </Button>
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <Badge className="bg-purple-100 text-[#8B2EE5] mb-6">
              {category.level}
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              {category.name}
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-8">
              {category.description}
            </p>
            <div className="flex items-center gap-6 text-gray-600">
              <div className="flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-[#8B2EE5]" />
                <span>{category.courses.length} courses</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span>4.8 avg rating</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {category.courses.map((course, index) => (
              <motion.div
                key={course.id}
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
                      <h3 className="text-xl font-bold text-gray-900 mb-3">{course.title}</h3>
                      <p className="text-gray-600 mb-4 leading-relaxed line-clamp-2">{course.description}</p>
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold text-sm">{course.rating}</span>
                          <span className="text-gray-500 text-sm">({course.students.toLocaleString()})</span>
                        </div>
                      </div>
                      <Button className="w-full bg-[#8B2EE5] hover:bg-[#7325C4]" size="sm">
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
    </div>
  );
}