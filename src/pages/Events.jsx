import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Calendar, MapPin, Users, Clock, Video, ArrowRight } from 'lucide-react';
import { base44 } from '@/api/base44Client';
import { useQuery } from '@tanstack/react-query';
import RegistrationForm from '@/components/events/RegistrationForm';
import { toast } from 'sonner';

const events = [
  {
    title: 'AI for Property Management Summit 2026',
    date: 'March 12-14, 2026',
    time: '9:00 AM - 6:00 PM EST',
    location: 'New York, NY',
    format: 'Hybrid',
    attendees: '3,500+',
    description: 'Explore AI automation for property operations, tenant management, and smart buildings.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800',
    type: 'conference',
    featured: true
  },
  {
    title: 'Financial Services AI Conference',
    date: 'May 20-22, 2026',
    time: '9:00 AM - 5:00 PM EDT',
    location: 'Toronto, Canada',
    format: 'In-person',
    attendees: '2,800+',
    description: 'AI-powered fraud detection, automated compliance, and intelligent customer service for banking.',
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=800',
    type: 'conference'
  },
  {
    title: 'Healthcare AI & Automation Workshop',
    date: 'April 8, 2026',
    time: '1:00 PM - 5:00 PM GMT',
    location: 'London, UK',
    format: 'In-person',
    attendees: '450+',
    description: 'Hands-on workshop on AI for patient scheduling, medical coding, and clinical documentation.',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800',
    type: 'workshop'
  },
  {
    title: 'Retail AI Transformation Meetup',
    date: 'June 18, 2026',
    time: '6:00 PM - 8:30 PM PDT',
    location: 'San Francisco, CA',
    format: 'In-person',
    attendees: '250+',
    description: 'Network with retail leaders implementing AI for inventory, personalization, and dynamic pricing.',
    image: 'https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=800',
    type: 'meetup'
  },
  {
    title: 'Energy & Utilities AI Forum',
    date: 'September 15-16, 2026',
    time: '9:00 AM - 4:00 PM CDT',
    location: 'Chicago, IL',
    format: 'Hybrid',
    attendees: '1,800+',
    description: 'Grid optimization, predictive maintenance, and renewable energy integration with AI.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    type: 'conference'
  },
  {
    title: 'Data Center Operations Workshop',
    date: 'July 22, 2026',
    time: '10:00 AM - 3:00 PM PDT',
    location: 'Seattle, WA',
    format: 'In-person',
    attendees: '300+',
    description: 'AI for energy optimization, capacity planning, and automated infrastructure management.',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800',
    type: 'workshop'
  },
  {
    title: 'Smart Cities & Transit AI Summit',
    date: 'October 10-11, 2026',
    time: '9:00 AM - 5:00 PM EDT',
    location: 'Boston, MA',
    format: 'In-person',
    attendees: '2,200+',
    description: 'AI solutions for traffic management, public transit optimization, and smart city infrastructure.',
    image: 'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=800',
    type: 'conference'
  },
  {
    title: 'AI Governance & Ethics Workshop',
    date: 'February 25, 2027',
    time: '2:00 PM - 6:00 PM GMT',
    location: 'Manchester, UK',
    format: 'Hybrid',
    attendees: '600+',
    description: 'Best practices for AI governance, compliance frameworks, and ethical AI implementation.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    type: 'workshop'
  },
  {
    title: 'Gaming & Entertainment AI Meetup',
    date: 'March 30, 2027',
    time: '5:00 PM - 9:00 PM PDT',
    location: 'Los Angeles, CA',
    format: 'In-person',
    attendees: '350+',
    description: 'AI in game development, player analytics, and automated LiveOps for gaming studios.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
    type: 'meetup'
  },
  {
    title: 'Corporate Campus Automation Conference',
    date: 'May 18-19, 2027',
    time: '9:00 AM - 5:00 PM EDT',
    location: 'New York, NY',
    format: 'In-person',
    attendees: '1,500+',
    description: 'Space management, energy optimization, and AI-powered employee services for corporate facilities.',
    image: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
    type: 'conference'
  },
  {
    title: 'Education AI Workshop',
    date: 'April 14, 2027',
    time: '10:00 AM - 4:00 PM PDT',
    location: 'Vancouver, Canada',
    format: 'Hybrid',
    attendees: '550+',
    description: 'Personalized learning, automated grading, and student engagement with AI tools.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800',
    type: 'workshop'
  },
  {
    title: 'Airport Operations AI Summit',
    date: 'June 8-9, 2027',
    time: '8:00 AM - 5:00 PM EDT',
    location: 'Washington, DC',
    format: 'In-person',
    attendees: '1,200+',
    description: 'AI for passenger flow optimization, security screening, and operational coordination.',
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800',
    type: 'conference'
  },
  {
    title: 'Government AI Implementation Forum',
    date: 'August 25-26, 2027',
    time: '9:00 AM - 4:00 PM GMT',
    location: 'Birmingham, UK',
    format: 'Hybrid',
    attendees: '900+',
    description: 'Citizen services automation, document processing, and compliance reporting for government agencies.',
    image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=800',
    type: 'conference'
  },
  {
    title: 'Generative AI Webinar Series',
    date: 'Every Tuesday in 2026',
    time: '2:00 PM - 3:00 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,500+',
    description: 'Weekly deep dives into LLMs, prompt engineering, fine-tuning, and RAG systems.',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800',
    type: 'webinar'
  },
  {
    title: 'Agentic AI Fundamentals Webinar',
    date: 'Every Wednesday in 2026',
    time: '12:00 PM - 1:00 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '2,000+',
    description: 'Introduction to autonomous agents, tool use, reasoning, and multi-agent systems for beginners.',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=800',
    type: 'webinar'
  },
  {
    title: 'Building Production-Ready AI Agents',
    date: 'Every Thursday in 2026',
    time: '3:00 PM - 4:00 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,800+',
    description: 'Deploy reliable autonomous agents: error handling, monitoring, testing, and scaling strategies.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    type: 'webinar'
  },
  {
    title: 'Advanced Agent Memory & Context',
    date: 'Bi-weekly Fridays in 2026',
    time: '2:00 PM - 3:30 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,600+',
    description: 'Deep dive into episodic memory, semantic memory, and long-term context management for agents.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    type: 'webinar'
  },
  {
    title: 'Multi-Agent Coordination Patterns',
    date: 'Monthly - First Monday',
    time: '1:00 PM - 2:30 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,400+',
    description: 'Patterns for agent-to-agent communication, task delegation, and collaborative problem solving.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    type: 'webinar'
  },
  {
    title: 'Tool Calling & Function Use Mastery',
    date: 'Monthly - Second Tuesday',
    time: '11:00 AM - 12:30 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,700+',
    description: 'Design robust tool ecosystems: API integration, error recovery, and function composition for agents.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    type: 'webinar'
  },
  {
    title: 'Agent Reasoning & Planning',
    date: 'Monthly - Third Wednesday',
    time: '2:00 PM - 3:30 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,500+',
    description: 'Implementing chain-of-thought, tree-of-thought, and advanced planning algorithms for autonomous agents.',
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800',
    type: 'webinar'
  },
  {
    title: 'Agentic AI Security & Safety',
    date: 'Monthly - Fourth Thursday',
    time: '10:00 AM - 11:30 AM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,900+',
    description: 'Securing autonomous agents: sandboxing, permission systems, monitoring, and preventing misuse.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    type: 'webinar'
  },
  {
    title: 'Agent Evaluation & Testing',
    date: 'Bi-weekly Mondays',
    time: '4:00 PM - 5:00 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,300+',
    description: 'Testing strategies, benchmarks, and evaluation frameworks for measuring agent performance.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    type: 'webinar'
  },
  {
    title: 'Enterprise Agentic AI Deployment',
    date: 'Monthly - Last Friday',
    time: '1:00 PM - 2:30 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '2,200+',
    description: 'Best practices for deploying autonomous agents at enterprise scale: governance, compliance, and ROI.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
    type: 'webinar'
  },
  {
    title: 'Agent Observability & Debugging',
    date: 'Bi-weekly Tuesdays',
    time: '3:00 PM - 4:00 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,450+',
    description: 'Tracing agent behavior, logging, debugging tools, and observability best practices.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
    type: 'webinar'
  },
  {
    title: 'Agentic Workflows for Business',
    date: 'Monthly - Second Thursday',
    time: '12:00 PM - 1:30 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,800+',
    description: 'Business process automation with agentic AI: customer service, data processing, and operations.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    type: 'webinar'
  },
  {
    title: 'Cost Optimization for AI Agents',
    date: 'Monthly - Third Friday',
    time: '11:00 AM - 12:00 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,550+',
    description: 'Reduce costs of autonomous agents: caching, batching, model selection, and efficient prompting.',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800',
    type: 'webinar'
  },
  {
    title: 'Agentic AI Developer Meetup',
    date: 'Monthly - Last Friday',
    time: '6:00 PM - 9:00 PM Local',
    location: 'Multiple Cities (US, CA, UK)',
    format: 'In-person',
    attendees: '150+',
    description: 'Monthly gatherings for developers building multi-agent systems and autonomous workflows.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
    type: 'meetup'
  },
  {
    title: 'Building Autonomous AI Agents Workshop',
    date: 'March 25, 2026',
    time: '10:00 AM - 5:00 PM PST',
    location: 'San Francisco, CA',
    format: 'In-person',
    attendees: '400+',
    description: 'Hands-on workshop building multi-step autonomous agents with tool use, memory, and decision-making.',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800',
    type: 'workshop'
  },
  {
    title: 'Multi-Agent Systems Architecture Workshop',
    date: 'April 16, 2026',
    time: '9:00 AM - 4:00 PM EDT',
    location: 'New York, NY',
    format: 'Hybrid',
    attendees: '350+',
    description: 'Design patterns for multi-agent coordination, communication protocols, and shared state management.',
    image: 'https://images.unsplash.com/photo-1531498860502-7c67cf02f657?w=800',
    type: 'workshop'
  },
  {
    title: 'Agentic AI for Enterprise Workshop',
    date: 'May 28, 2026',
    time: '1:00 PM - 6:00 PM CDT',
    location: 'Chicago, IL',
    format: 'In-person',
    attendees: '320+',
    description: 'Deploying agentic AI at scale: security, compliance, monitoring, and cost optimization strategies.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800',
    type: 'workshop'
  },
  {
    title: 'Advanced Agent Memory Systems Workshop',
    date: 'June 12, 2026',
    time: '10:00 AM - 3:00 PM PDT',
    location: 'Seattle, WA',
    format: 'In-person',
    attendees: '280+',
    description: 'Implementing episodic and semantic memory for AI agents using vector databases and knowledge graphs.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    type: 'workshop'
  },
  {
    title: 'Tool-Calling and Function Use Workshop',
    date: 'July 9, 2026',
    time: '2:00 PM - 7:00 PM EDT',
    location: 'Toronto, Canada',
    format: 'Hybrid',
    attendees: '400+',
    description: 'Building robust tool ecosystems for AI agents: API design, error handling, and retry strategies.',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=800',
    type: 'workshop'
  },
  {
    title: 'Agent Orchestration Patterns Workshop',
    date: 'August 20, 2026',
    time: '9:00 AM - 4:00 PM GMT',
    location: 'London, UK',
    format: 'In-person',
    attendees: '360+',
    description: 'Hierarchical, peer-to-peer, and blackboard architectures for coordinating multiple AI agents.',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800',
    type: 'workshop'
  },
  {
    title: 'Prompt Engineering Mastery Workshop',
    date: 'April 22, 2026',
    time: '1:00 PM - 5:00 PM PST',
    location: 'Los Angeles, CA',
    format: 'Hybrid',
    attendees: '500+',
    description: 'Advanced prompt engineering techniques for GPT-4, Claude, and other LLMs. Chain-of-thought, few-shot, and optimization.',
    image: 'https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=800',
    type: 'workshop'
  },
  {
    title: 'LLM Fine-Tuning Workshop',
    date: 'May 14, 2026',
    time: '10:00 AM - 6:00 PM EDT',
    location: 'Boston, MA',
    format: 'In-person',
    attendees: '380+',
    description: 'Hands-on fine-tuning of LLMs using LoRA, QLoRA, and full fine-tuning. Dataset preparation and evaluation.',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800',
    type: 'workshop'
  },
  {
    title: 'RAG Systems Implementation Workshop',
    date: 'June 25, 2026',
    time: '9:00 AM - 5:00 PM PDT',
    location: 'San Francisco, CA',
    format: 'Hybrid',
    attendees: '450+',
    description: 'Building production-ready RAG systems: vector databases, chunking strategies, and retrieval optimization.',
    image: 'https://images.unsplash.com/photo-1581093588401-fbb62a02f120?w=800',
    type: 'workshop'
  },
  {
    title: 'Generative AI for Content Creation Workshop',
    date: 'July 30, 2026',
    time: '1:00 PM - 6:00 PM EDT',
    location: 'New York, NY',
    format: 'In-person',
    attendees: '420+',
    description: 'Using generative AI for marketing, copywriting, and creative content. Tools, workflows, and best practices.',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=800',
    type: 'workshop'
  },
  {
    title: 'Multimodal AI Workshop: Vision + Language',
    date: 'September 17, 2026',
    time: '10:00 AM - 4:00 PM PDT',
    location: 'Seattle, WA',
    format: 'Hybrid',
    attendees: '340+',
    description: 'Building applications with GPT-4V, Claude 3, and other multimodal models. Image analysis and generation.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800',
    type: 'workshop'
  },
  {
    title: 'Synthetic Data Generation Workshop',
    date: 'October 8, 2026',
    time: '2:00 PM - 7:00 PM GMT',
    location: 'Manchester, UK',
    format: 'In-person',
    attendees: '300+',
    description: 'Generating high-quality synthetic training data for LLMs. Privacy preservation and quality evaluation.',
    image: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?w=800',
    type: 'workshop'
  },
  {
    title: 'LLM Deployment and Optimization Workshop',
    date: 'November 12, 2026',
    time: '9:00 AM - 5:00 PM EST',
    location: 'Toronto, Canada',
    format: 'Hybrid',
    attendees: '390+',
    description: 'Production deployment strategies: quantization, caching, batching, and cost optimization for LLMs.',
    image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=800',
    type: 'workshop'
  },
  {
    title: 'AI Hackathon: Agentic Systems Challenge',
    date: 'April 10-12, 2026',
    time: '48 hours',
    location: 'San Francisco, CA',
    format: 'Hybrid',
    attendees: '1,500+',
    description: '$150K in prizes. Build autonomous AI agents that solve real-world problems. Judged by industry leaders.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    type: 'hackathon'
  },
  {
    title: 'Generative AI Hackathon: Creative Solutions',
    date: 'June 19-21, 2026',
    time: '48 hours',
    location: 'New York, NY',
    format: 'In-person',
    attendees: '1,200+',
    description: '$100K prizes for best generative AI applications in art, music, writing, and design. All skill levels welcome.',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800',
    type: 'hackathon'
  },
  {
    title: 'Healthcare AI Hackathon',
    date: 'August 14-16, 2026',
    time: '48 hours',
    location: 'Boston, MA',
    format: 'Hybrid',
    attendees: '800+',
    description: '$80K in prizes for AI solutions improving patient care, diagnostics, and medical workflows.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800',
    type: 'hackathon'
  },
  {
    title: 'FinTech AI Hackathon',
    date: 'September 25-27, 2026',
    time: '48 hours',
    location: 'Toronto, Canada',
    format: 'Hybrid',
    attendees: '1,000+',
    description: '$120K prizes for AI-powered financial services: fraud detection, trading, risk management, and more.',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800',
    type: 'hackathon'
  },
  {
    title: 'Climate Tech AI Hackathon',
    date: 'October 23-25, 2026',
    time: '48 hours',
    location: 'Seattle, WA',
    format: 'Hybrid',
    attendees: '900+',
    description: '$100K prizes for AI solutions tackling climate change: energy optimization, carbon tracking, and sustainability.',
    image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800',
    type: 'hackathon'
  },
  {
    title: 'AI for Social Good Hackathon',
    date: 'November 8-10, 2026',
    time: '48 hours',
    location: 'London, UK',
    format: 'Hybrid',
    attendees: '1,100+',
    description: '$90K prizes for AI addressing social challenges: education, accessibility, poverty, and community development.',
    image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=800',
    type: 'hackathon'
  },
  {
    title: 'Enterprise AI Hackathon',
    date: 'February 12-14, 2027',
    time: '48 hours',
    location: 'Chicago, IL',
    format: 'Hybrid',
    attendees: '1,300+',
    description: '$140K in prizes for B2B AI solutions: automation, analytics, workflow optimization, and productivity tools.',
    image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=800',
    type: 'hackathon'
  },
  {
    title: 'AI Gaming Hackathon',
    date: 'March 19-21, 2027',
    time: '48 hours',
    location: 'Los Angeles, CA',
    format: 'In-person',
    attendees: '950+',
    description: '$110K prizes for AI-powered gaming: NPC behavior, procedural generation, player analytics, and LiveOps.',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?w=800',
    type: 'hackathon'
  },
  {
    title: 'Multi-Agent AI Hackathon',
    date: 'May 7-9, 2027',
    time: '48 hours',
    location: 'San Francisco, CA',
    format: 'Hybrid',
    attendees: '1,400+',
    description: '$160K prizes for innovative multi-agent systems. Best collaboration, coordination, and emergent behaviors.',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800',
    type: 'hackathon'
  },
  {
    title: 'AI Voice & Audio Hackathon',
    date: 'July 16-18, 2027',
    time: '48 hours',
    location: 'New York, NY',
    format: 'Hybrid',
    attendees: '850+',
    description: '$95K prizes for voice AI, speech synthesis, audio generation, and conversational interfaces.',
    image: 'https://images.unsplash.com/photo-1478737270239-2f02b77fc618?w=800',
    type: 'hackathon'
  }
];

export default function Events() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { data: dbEvents = [], refetch } = useQuery({
    queryKey: ['events'],
    queryFn: () => base44.entities.Event.list('-created_date'),
    initialData: []
  });

  const allEvents = dbEvents.length > 0 ? dbEvents : events;

  const filteredEvents = activeTab === 'all'
    ? allEvents
    : allEvents.filter(event => event.type === activeTab);

  const featuredEvent = allEvents.find(event => event.featured);

  const handleRegisterClick = (event) => {
    setSelectedEvent(event);
    setShowRegistration(true);
  };

  const handleRegistrationSuccess = () => {
    refetch();
  };

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    try {
      await base44.entities.NewsletterSignup.create({
        email,
        source: 'Events'
      });
      toast.success('Successfully subscribed to event updates!');
      setEmail('');
    } catch (error) {
      toast.error('Failed to subscribe. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
            <div className="w-16 h-16 bg-[#6209e6] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Upcoming
              <span className="block bg-gradient-to-r from-[#6209e6] to-[#A855F7] bg-clip-text text-transparent">
                events
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Join us for workshops, webinars, conferences, and community gatherings
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-gray-200 sticky top-16 bg-white z-10">
        <div className="max-w-7xl mx-auto px-6">
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="bg-gray-100">
              <TabsTrigger value="all">All Events</TabsTrigger>
              <TabsTrigger value="conference">Conferences</TabsTrigger>
              <TabsTrigger value="workshop">Workshops</TabsTrigger>
              <TabsTrigger value="webinar">Webinars</TabsTrigger>
              <TabsTrigger value="meetup">Meetups</TabsTrigger>
              <TabsTrigger value="hackathon">Hackathons</TabsTrigger>
            </TabsList>
          </Tabs>
        </div>
      </section>

      {/* Featured Event */}
      {featuredEvent && activeTab === 'all' && (
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <Card className="overflow-hidden border-2 border-[#6209e6]">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-video lg:aspect-auto">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#6209e6] text-white">
                      Featured Event
                    </Badge>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <CardTitle className="text-4xl mb-4">{featuredEvent.title}</CardTitle>
                    <p className="text-xl text-gray-600 mb-6">{featuredEvent.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-[#6209e6]" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Date</div>
                          <div className="font-medium">{featuredEvent.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-[#6209e6]" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Location</div>
                          <div className="font-medium">{featuredEvent.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Users className="w-5 h-5 text-[#6209e6]" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Attendees</div>
                          <div className="font-medium">{featuredEvent.attendees}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                        <Video className="w-5 h-5 text-[#6209e6]" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Format</div>
                          <div className="font-medium">{featuredEvent.format}</div>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleRegisterClick(featuredEvent)}
                      className="bg-[#6209e6] hover:bg-[#5008c5] rounded-full w-full md:w-auto"
                    >
                      Register now <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </div>
        </section>
      )}

      {/* Events Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.filter(e => !e.featured).map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all group">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">
                      {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                    </Badge>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-xl mb-2 group-hover:text-[#6209e6] transition-colors">
                      {event.title}
                    </CardTitle>
                    <p className="text-gray-600 text-sm">{event.description}</p>
                  </CardHeader>
                  <CardContent className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Calendar className="w-4 h-4" />
                      {event.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      {event.time}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <MapPin className="w-4 h-4" />
                      {event.location}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Users className="w-4 h-4" />
                      {event.attendees} expected
                    </div>
                    <Button 
                      onClick={() => handleRegisterClick(event)}
                      className="w-full mt-4 rounded-full bg-gray-900 hover:bg-gray-800"
                    >
                      Register <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-24 bg-gradient-to-br from-[#6209e6] to-[#5008c5]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Never miss an event
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Subscribe to get notified about upcoming workshops, webinars, and conferences
            </p>
            <form onSubmit={handleSubscribe} className="flex gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-14 px-6 rounded-full bg-white/10 backdrop-blur-sm border-2 border-white/20 text-white placeholder-white/60 focus:outline-none focus:border-white/40 transition-colors"
              />
              <Button 
                type="submit" 
                disabled={isSubmitting}
                className="h-14 px-8 rounded-full bg-white text-[#6209e6] hover:bg-white/90 font-semibold"
              >
                {isSubmitting ? 'Subscribing...' : 'Subscribe'}
              </Button>
            </form>
            <p className="text-purple-200 text-sm mt-4">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Registration Modal */}
      <AnimatePresence>
        {showRegistration && selectedEvent && (
          <RegistrationForm
            event={selectedEvent}
            onClose={() => setShowRegistration(false)}
            onSuccess={handleRegistrationSuccess}
          />
        )}
      </AnimatePresence>
    </div>
  );
}