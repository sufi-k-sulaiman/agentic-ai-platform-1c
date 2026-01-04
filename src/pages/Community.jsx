import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Users, MessageSquare, ThumbsUp, MessageCircle, Eye, Pin, TrendingUp, Clock, Sparkles, Bot, Shield, Brain, Zap, ChevronRight, Send } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const categories = [
  { id: 'all', name: 'All Discussions', icon: MessageSquare, count: 45 },
  { id: 'generative-ai', name: 'Generative AI', icon: Sparkles, count: 5 },
  { id: 'agentic-ai', name: 'Agentic AI', icon: Bot, count: 6 },
  { id: 'governance', name: 'AI Governance', icon: Shield, count: 6 },
  { id: 'ml-ops', name: 'ML & AI Ops', icon: Brain, count: 3 },
  { id: 'products', name: 'Products & Features', icon: Zap, count: 2 },
  { id: 'property-management', name: 'Property Management', icon: Users, count: 4 },
  { id: 'healthcare', name: 'Healthcare AI', icon: Users, count: 4 },
  { id: 'finance', name: 'Financial Services', icon: TrendingUp, count: 4 },
  { id: 'retail', name: 'Retail & E-commerce', icon: Users, count: 4 },
  { id: 'energy', name: 'Energy & Utilities', icon: Zap, count: 3 },
  { id: 'datacenter', name: 'Data Centers', icon: Brain, count: 4 }
];

const discussions = [
  {
    id: 1,
    title: 'Best practices for deploying Agentic AI at enterprise scale',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100',
      role: 'AI Architect',
      email: 'sarah.chen@example.com'
    },
    category: 'agentic-ai',
    replies: 47,
    views: 2834,
    likes: 156,
    isPinned: true,
    timestamp: '2 hours ago',
    preview: 'Looking to implement agentic AI across multiple departments. What are the key considerations for security, scalability, and governance?',
    tags: ['enterprise', 'deployment', 'best-practices']
  },
  {
    id: 2,
    title: 'How to implement ethical guardrails in LLM applications?',
    author: {
      name: 'Michael Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100',
      role: 'ML Engineer'
    },
    category: 'governance',
    replies: 34,
    views: 1923,
    likes: 89,
    isPinned: false,
    timestamp: '5 hours ago',
    preview: 'Working on implementing safety measures and ethical guidelines for our generative AI products. What frameworks and tools do you recommend?',
    tags: ['ethics', 'safety', 'llm']
  },
  {
    id: 3,
    title: 'GPT-4 vs Claude for multi-agent systems - performance comparison',
    author: {
      name: 'Claudia Isabel Martinez',
      avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100',
      role: 'Research Scientist'
    },
    category: 'generative-ai',
    replies: 92,
    views: 5421,
    likes: 234,
    isPinned: true,
    timestamp: '1 day ago',
    preview: 'Did extensive testing with both models for our agent orchestration. Here are my findings on latency, cost, and reasoning capabilities...',
    tags: ['comparison', 'gpt-4', 'claude', 'benchmarks']
  },
  {
    id: 4,
    title: 'New 1C Platform feature: Real-time agent collaboration',
    author: {
      name: 'David Kim',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100',
      role: 'Product Manager'
    },
    category: 'products',
    replies: 28,
    views: 3102,
    likes: 178,
    isPinned: false,
    timestamp: '2 days ago',
    preview: 'Excited to announce our new real-time collaboration feature for multi-agent workflows. Multiple agents can now work together seamlessly...',
    tags: ['product-update', 'collaboration', 'agents']
  },
  {
    id: 5,
    title: 'RAG optimization techniques: Vector DB vs Knowledge Graphs',
    author: {
      name: 'Alex Thompson',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
      role: 'Data Scientist'
    },
    category: 'ml-ops',
    replies: 56,
    views: 2714,
    likes: 142,
    isPinned: false,
    timestamp: '3 days ago',
    preview: 'Comparing different approaches for retrieval augmented generation. When should you use vector databases vs knowledge graphs?',
    tags: ['rag', 'vector-db', 'knowledge-graph']
  },
  {
    id: 6,
    title: 'AI governance framework: Compliance with EU AI Act',
    author: {
      name: 'Sophie Dubois',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
      role: 'Compliance Officer'
    },
    category: 'governance',
    replies: 41,
    views: 1892,
    likes: 95,
    isPinned: false,
    timestamp: '4 days ago',
    preview: 'As the EU AI Act comes into effect, what are the key requirements for AI systems? Sharing our compliance checklist...',
    tags: ['compliance', 'eu-ai-act', 'regulation']
  },
  {
    id: 7,
    title: 'Fine-tuning strategies for domain-specific LLMs',
    author: {
      name: 'James Park',
      avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100',
      role: 'ML Researcher'
    },
    category: 'generative-ai',
    replies: 67,
    views: 3456,
    likes: 201,
    isPinned: false,
    timestamp: '5 days ago',
    preview: 'Lessons learned from fine-tuning LLMs for financial services. LORA vs full fine-tuning, dataset preparation, and evaluation metrics...',
    tags: ['fine-tuning', 'lora', 'domain-specific']
  },
  {
    id: 8,
    title: 'Multi-agent orchestration patterns and architectures',
    author: {
      name: 'Lisa Martinez',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100',
      role: 'Solutions Architect'
    },
    category: 'agentic-ai',
    replies: 38,
    views: 2167,
    likes: 124,
    isPinned: false,
    timestamp: '6 days ago',
    preview: 'Overview of different patterns for orchestrating multiple AI agents: hierarchical, peer-to-peer, and blackboard architectures...',
    tags: ['architecture', 'orchestration', 'patterns']
  },
  {
    id: 9,
    title: 'AI for property management: Tenant onboarding automation',
    author: { name: 'Robert Williams', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', role: 'PropTech Lead' },
    category: 'property-management',
    replies: 23,
    views: 1456,
    likes: 67,
    isPinned: false,
    timestamp: '1 week ago',
    preview: 'Successfully automated our tenant onboarding process, reducing time from 5 days to 2 hours. Here\'s our approach...',
    tags: ['property', 'automation', 'tenants']
  },
  {
    id: 10,
    title: 'Predictive maintenance for HVAC systems using ML',
    author: { name: 'Jennifer Lee', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', role: 'Facilities Manager' },
    category: 'property-management',
    replies: 31,
    views: 1823,
    likes: 89,
    isPinned: false,
    timestamp: '1 week ago',
    preview: 'Implemented predictive models for HVAC maintenance. Reduced emergency repairs by 65% and saved $120K annually...',
    tags: ['predictive', 'maintenance', 'cost-savings']
  },
  {
    id: 11,
    title: 'Clinical documentation AI: HIPAA compliance tips',
    author: { name: 'Dr. Amanda Foster', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100', role: 'Healthcare CTO' },
    category: 'healthcare',
    replies: 56,
    views: 3241,
    likes: 178,
    isPinned: true,
    timestamp: '3 days ago',
    preview: 'Sharing our journey to HIPAA-compliant AI documentation. Key lessons on data privacy, audit trails, and vendor selection...',
    tags: ['healthcare', 'hipaa', 'compliance']
  },
  {
    id: 12,
    title: 'Patient scheduling optimization with reinforcement learning',
    author: { name: 'Marcus Johnson', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', role: 'Health IT Director' },
    category: 'healthcare',
    replies: 42,
    views: 2567,
    likes: 134,
    isPinned: false,
    timestamp: '4 days ago',
    preview: 'Reduced patient wait times by 40% using RL algorithms. Balancing provider schedules with patient preferences...',
    tags: ['scheduling', 'optimization', 'rl']
  },
  {
    id: 13,
    title: 'Fraud detection in real-time: LLMs vs traditional ML',
    author: { name: 'Carlos Rodriguez', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', role: 'Risk Manager' },
    category: 'finance',
    replies: 67,
    views: 4123,
    likes: 201,
    isPinned: true,
    timestamp: '2 days ago',
    preview: 'Comparing LLM-based fraud detection with traditional ML. Speed, accuracy, and cost analysis from 6 months of production use...',
    tags: ['fraud', 'fintech', 'comparison']
  },
  {
    id: 14,
    title: 'KYC automation: Document verification at scale',
    author: { name: 'Priya Sharma', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100', role: 'Compliance Engineer' },
    category: 'finance',
    replies: 38,
    views: 2234,
    likes: 112,
    isPinned: false,
    timestamp: '5 days ago',
    preview: 'Automated KYC process handling 10K+ verifications daily. OCR, document classification, and anomaly detection pipeline...',
    tags: ['kyc', 'compliance', 'automation']
  },
  {
    id: 15,
    title: 'Dynamic pricing strategies for e-commerce',
    author: { name: 'Thomas Anderson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', role: 'E-commerce Director' },
    category: 'retail',
    replies: 52,
    views: 3456,
    likes: 167,
    isPinned: false,
    timestamp: '3 days ago',
    preview: 'Implemented AI-driven dynamic pricing. Increased margins by 18% while maintaining conversion rates. Strategy breakdown...',
    tags: ['pricing', 'revenue', 'optimization']
  },
  {
    id: 16,
    title: 'Inventory forecasting with transformer models',
    author: { name: 'Rachel Green', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', role: 'Supply Chain Lead' },
    category: 'retail',
    replies: 45,
    views: 2876,
    likes: 143,
    isPinned: false,
    timestamp: '6 days ago',
    preview: 'Switched from ARIMA to transformers for demand forecasting. 35% improvement in accuracy, especially for seasonal products...',
    tags: ['inventory', 'forecasting', 'transformers']
  },
  {
    id: 17,
    title: 'Smart grid optimization: Load balancing with AI',
    author: { name: 'William Turner', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', role: 'Grid Operations' },
    category: 'energy',
    replies: 29,
    views: 1923,
    likes: 98,
    isPinned: false,
    timestamp: '1 week ago',
    preview: 'Real-time load balancing across distributed energy resources. Reduced peak demand by 22% and improved grid stability...',
    tags: ['smart-grid', 'optimization', 'renewable']
  },
  {
    id: 18,
    title: 'Outage prediction using weather data and ML',
    author: { name: 'Maria Garcia', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', role: 'Utility Engineer' },
    category: 'energy',
    replies: 34,
    views: 2145,
    likes: 115,
    isPinned: false,
    timestamp: '1 week ago',
    preview: 'Predicting outages 48 hours in advance using weather patterns. Proactive crew deployment reduced downtime by 40%...',
    tags: ['prediction', 'weather', 'maintenance']
  },
  {
    id: 19,
    title: 'Data center cooling optimization: $2M annual savings',
    author: { name: 'Kevin Chen', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', role: 'DC Operations' },
    category: 'datacenter',
    replies: 41,
    views: 3012,
    likes: 156,
    isPinned: true,
    timestamp: '2 days ago',
    preview: 'AI-driven cooling optimization in our 50MW facility. Real-time adjustments based on workload and weather conditions...',
    tags: ['cooling', 'energy', 'cost-savings']
  },
  {
    id: 20,
    title: 'Capacity planning with time series forecasting',
    author: { name: 'Olivia Martinez', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100', role: 'Infrastructure Lead' },
    category: 'datacenter',
    replies: 28,
    views: 1756,
    likes: 87,
    isPinned: false,
    timestamp: '5 days ago',
    preview: 'Accurate capacity forecasting prevented $5M in premature infrastructure investment. Prophet vs LSTM comparison...',
    tags: ['capacity', 'forecasting', 'planning']
  },
  {
    id: 21,
    title: 'Constitutional AI: Implementing value alignment',
    author: { name: 'Dr. James Wilson', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', role: 'AI Researcher' },
    category: 'governance',
    replies: 73,
    views: 4567,
    likes: 234,
    isPinned: true,
    timestamp: '1 day ago',
    preview: 'Deep dive into constitutional AI principles and practical implementation for enterprise systems. Balancing capability with safety...',
    tags: ['safety', 'alignment', 'ethics']
  },
  {
    id: 22,
    title: 'Model cards and documentation standards',
    author: { name: 'Laura Kim', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', role: 'ML Lead' },
    category: 'governance',
    replies: 36,
    views: 2345,
    likes: 109,
    isPinned: false,
    timestamp: '4 days ago',
    preview: 'Best practices for model documentation. Template for model cards, data sheets, and system documentation...',
    tags: ['documentation', 'transparency', 'standards']
  },
  {
    id: 23,
    title: 'Prompt injection attacks: Defense strategies',
    author: { name: 'Alex Turner', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', role: 'Security Engineer' },
    category: 'governance',
    replies: 89,
    views: 5234,
    likes: 267,
    isPinned: true,
    timestamp: '12 hours ago',
    preview: 'Comprehensive guide to prompt injection vulnerabilities. Detection methods, defense layers, and real-world examples...',
    tags: ['security', 'prompt-injection', 'defense']
  },
  {
    id: 24,
    title: 'LLM observability and monitoring stack',
    author: { name: 'Daniel Park', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', role: 'DevOps Lead' },
    category: 'ml-ops',
    replies: 54,
    views: 3456,
    likes: 178,
    isPinned: false,
    timestamp: '2 days ago',
    preview: 'Our production monitoring setup for LLM applications. Latency tracking, cost monitoring, and quality metrics...',
    tags: ['monitoring', 'observability', 'production']
  },
  {
    id: 25,
    title: 'Feature stores for real-time ML: comparison',
    author: { name: 'Sophie Anderson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', role: 'Data Engineer' },
    category: 'ml-ops',
    replies: 47,
    views: 2987,
    likes: 145,
    isPinned: false,
    timestamp: '3 days ago',
    preview: 'Evaluated Feast, Tecton, and Hopsworks for our real-time feature serving. Performance, cost, and ease of use...',
    tags: ['feature-store', 'real-time', 'infrastructure']
  },
  {
    id: 26,
    title: 'Multi-modal AI: Combining vision and language',
    author: { name: 'Chris Lee', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', role: 'Research Engineer' },
    category: 'generative-ai',
    replies: 65,
    views: 4123,
    likes: 198,
    isPinned: false,
    timestamp: '1 day ago',
    preview: 'Building multi-modal applications with GPT-4V and Claude 3. Architecture patterns and real-world use cases...',
    tags: ['multimodal', 'vision', 'architecture']
  },
  {
    id: 27,
    title: 'Synthetic data generation for training LLMs',
    author: { name: 'Emma Watson', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100', role: 'ML Researcher' },
    category: 'generative-ai',
    replies: 58,
    views: 3678,
    likes: 176,
    isPinned: false,
    timestamp: '2 days ago',
    preview: 'Techniques for generating high-quality synthetic training data. Quality evaluation, diversity metrics, and privacy considerations...',
    tags: ['synthetic-data', 'training', 'data-generation']
  },
  {
    id: 28,
    title: 'Agent memory systems: Long-term vs short-term',
    author: { name: 'Michael Brown', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', role: 'AI Engineer' },
    category: 'agentic-ai',
    replies: 72,
    views: 4567,
    likes: 223,
    isPinned: false,
    timestamp: '18 hours ago',
    preview: 'Implementing episodic and semantic memory for AI agents. Vector stores, memory consolidation, and retrieval strategies...',
    tags: ['memory', 'agents', 'architecture']
  },
  {
    id: 29,
    title: 'Tool use and function calling best practices',
    author: { name: 'Nina Patel', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100', role: 'Product Engineer' },
    category: 'agentic-ai',
    replies: 61,
    views: 3890,
    likes: 187,
    isPinned: false,
    timestamp: '1 day ago',
    preview: 'Lessons from building 50+ agent tools. API design, error handling, retry logic, and graceful degradation...',
    tags: ['tools', 'function-calling', 'best-practices']
  },
  {
    id: 30,
    title: 'Customer service chatbot: 95% automation rate',
    author: { name: 'Ryan Cooper', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', role: 'CX Director' },
    category: 'products',
    replies: 44,
    views: 2876,
    likes: 132,
    isPinned: false,
    timestamp: '3 days ago',
    preview: 'Built an AI customer service system handling 95% of queries. Architecture, escalation logic, and continuous improvement...',
    tags: ['chatbot', 'customer-service', 'automation']
  },
  {
    id: 31,
    title: 'Real-time collaboration features for multi-agent',
    author: { name: 'Jessica Taylor', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', role: 'Platform Engineer' },
    category: 'products',
    replies: 39,
    views: 2456,
    likes: 118,
    isPinned: false,
    timestamp: '4 days ago',
    preview: 'New 1C Platform collaboration features. Agent-to-agent communication, shared state management, and conflict resolution...',
    tags: ['collaboration', 'platform', 'features']
  },
  {
    id: 32,
    title: 'Smart building energy management with IoT + AI',
    author: { name: 'David Miller', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', role: 'Smart Building Tech' },
    category: 'property-management',
    replies: 27,
    views: 1678,
    likes: 89,
    isPinned: false,
    timestamp: '1 week ago',
    preview: 'Integrated IoT sensors with AI for energy optimization. 30% reduction in energy costs across 200+ buildings...',
    tags: ['smart-building', 'iot', 'energy']
  },
  {
    id: 33,
    title: 'Lease analysis and rent optimization algorithms',
    author: { name: 'Anna Johnson', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', role: 'Revenue Manager' },
    category: 'property-management',
    replies: 33,
    views: 1987,
    likes: 95,
    isPinned: false,
    timestamp: '1 week ago',
    preview: 'AI-driven rent optimization based on market data, occupancy rates, and seasonality. Increased NOI by 12%...',
    tags: ['pricing', 'revenue', 'optimization']
  },
  {
    id: 34,
    title: 'Medical imaging AI: FDA approval process',
    author: { name: 'Dr. Robert Chang', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', role: 'Medical Device Lead' },
    category: 'healthcare',
    replies: 68,
    views: 4234,
    likes: 203,
    isPinned: true,
    timestamp: '2 days ago',
    preview: 'Successfully navigated FDA approval for our radiology AI. Clinical trials, documentation requirements, and timelines...',
    tags: ['fda', 'medical-imaging', 'regulation']
  },
  {
    id: 35,
    title: 'EHR integration challenges and solutions',
    author: { name: 'Patricia Davis', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100', role: 'Health IT Architect' },
    category: 'healthcare',
    replies: 52,
    views: 3123,
    likes: 167,
    isPinned: false,
    timestamp: '3 days ago',
    preview: 'Integrating AI with Epic, Cerner, and Allscripts. HL7, FHIR standards, and data synchronization strategies...',
    tags: ['ehr', 'integration', 'interoperability']
  },
  {
    id: 36,
    title: 'Credit risk modeling with graph neural networks',
    author: { name: 'Andrew Wilson', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', role: 'Quantitative Analyst' },
    category: 'finance',
    replies: 46,
    views: 2987,
    likes: 154,
    isPinned: false,
    timestamp: '4 days ago',
    preview: 'GNN-based credit scoring outperformed traditional models by 15%. Capturing relationship networks and transaction patterns...',
    tags: ['credit-risk', 'gnn', 'modeling']
  },
  {
    id: 37,
    title: 'Algorithmic trading: RL agents in production',
    author: { name: 'Sarah Thompson', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100', role: 'Quant Trader' },
    category: 'finance',
    replies: 83,
    views: 5678,
    likes: 276,
    isPinned: true,
    timestamp: '1 day ago',
    preview: 'Running RL-based trading agents in live markets. Risk management, execution strategies, and performance metrics...',
    tags: ['trading', 'reinforcement-learning', 'quant']
  },
  {
    id: 38,
    title: 'Computer vision for inventory tracking',
    author: { name: 'Mark Anderson', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100', role: 'Retail Tech Lead' },
    category: 'retail',
    replies: 37,
    views: 2345,
    likes: 121,
    isPinned: false,
    timestamp: '5 days ago',
    preview: 'Shelf monitoring with computer vision. Real-time stock detection, planogram compliance, and out-of-stock alerts...',
    tags: ['computer-vision', 'inventory', 'automation']
  },
  {
    id: 39,
    title: 'Customer journey analytics with NLP',
    author: { name: 'Lisa Chen', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100', role: 'Marketing Analytics' },
    category: 'retail',
    replies: 42,
    views: 2678,
    likes: 138,
    isPinned: false,
    timestamp: '6 days ago',
    preview: 'Analyzing customer reviews, support tickets, and feedback with NLP. Sentiment trends and journey pain points...',
    tags: ['nlp', 'customer-journey', 'analytics']
  },
  {
    id: 40,
    title: 'Renewable energy forecasting: Solar and wind',
    author: { name: 'James Martinez', avatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100', role: 'Renewable Engineer' },
    category: 'energy',
    replies: 31,
    views: 1876,
    likes: 102,
    isPinned: false,
    timestamp: '1 week ago',
    preview: 'ML models for solar and wind generation forecasting. Satellite imagery, weather data, and ensemble methods...',
    tags: ['renewable', 'forecasting', 'solar']
  },
  {
    id: 41,
    title: 'Demand response optimization with AI',
    author: { name: 'Rebecca Lee', avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100', role: 'Energy Analyst' },
    category: 'energy',
    replies: 28,
    views: 1654,
    likes: 87,
    isPinned: false,
    timestamp: '1 week ago',
    preview: 'Automated demand response programs using RL. Customer incentives, grid balancing, and peak shaving strategies...',
    tags: ['demand-response', 'optimization', 'grid']
  },
  {
    id: 42,
    title: 'Anomaly detection in server workloads',
    author: { name: 'Eric Wang', avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100', role: 'SRE Lead' },
    category: 'datacenter',
    replies: 35,
    views: 2123,
    likes: 115,
    isPinned: false,
    timestamp: '4 days ago',
    preview: 'Real-time anomaly detection across 10K+ servers. Autoencoders, isolation forests, and alerting strategies...',
    tags: ['anomaly-detection', 'monitoring', 'sre']
  },
  {
    id: 43,
    title: 'Green data center design: AI-optimized layouts',
    author: { name: 'Michelle Taylor', avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100', role: 'DC Architect' },
    category: 'datacenter',
    replies: 26,
    views: 1567,
    likes: 92,
    isPinned: false,
    timestamp: '6 days ago',
    preview: 'Using AI to optimize data center floor plans. Airflow simulation, power distribution, and PUE optimization...',
    tags: ['green-dc', 'design', 'sustainability']
  },
  {
    id: 44,
    title: 'Bias detection and mitigation in production models',
    author: { name: 'Dr. Maria Santos', avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100', role: 'AI Ethics Lead' },
    category: 'governance',
    replies: 91,
    views: 5432,
    likes: 287,
    isPinned: true,
    timestamp: '8 hours ago',
    preview: 'Comprehensive framework for bias detection. Statistical tests, fairness metrics, and mitigation strategies for production systems...',
    tags: ['bias', 'fairness', 'ethics']
  },
  {
    id: 45,
    title: 'MLflow vs Kubeflow vs MLRun: Production comparison',
    author: { name: 'Tom Harris', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100', role: 'ML Platform Lead' },
    category: 'ml-ops',
    replies: 63,
    views: 3987,
    likes: 189,
    isPinned: false,
    timestamp: '2 days ago',
    preview: 'Year-long comparison of MLOps platforms in production. Deployment complexity, scalability, and team adoption...',
    tags: ['mlops', 'platform', 'comparison']
  }
];

const trendingTopics = [
  { name: 'Agent orchestration', posts: 234, trend: '+45%' },
  { name: 'LLM fine-tuning', posts: 189, trend: '+32%' },
  { name: 'AI safety', posts: 156, trend: '+28%' },
  { name: 'RAG optimization', posts: 142, trend: '+25%' },
  { name: 'Multi-agent systems', posts: 128, trend: '+21%' }
];

export default function Community() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedDiscussion, setSelectedDiscussion] = useState(null);
  const [newComment, setNewComment] = useState('');
  const [showNewDiscussion, setShowNewDiscussion] = useState(false);
  const [newDiscussionData, setNewDiscussionData] = useState({
    title: '',
    content: '',
    category: 'all',
    tags: '',
    authorName: '',
    authorEmail: ''
  });
  const [replyData, setReplyData] = useState({
    content: '',
    name: '',
    email: ''
  });
  const [discussionErrors, setDiscussionErrors] = useState({});
  const [replyErrors, setReplyErrors] = useState({});

  const filteredDiscussions = selectedCategory === 'all' 
    ? discussions 
    : discussions.filter(d => d.category === selectedCategory);

  return (
    <div className="bg-white">
      <PageMeta 
        title="Community Forum"
        description="Join 10,000+ Ai practitioners discussing generative AI, agentic systems, governance, and ML operations. Share knowledge and learn from experts."
        url="/community"
        keywords={['AI community', 'developer forum', 'AI discussions', 'machine learning community', 'agent development']}
      />
      
      {/* Hero */}
      <section className="pt-32 pb-12 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="w-16 h-16 bg-[#8B2EE5] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              AI Community Forum
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discuss generative AI, agentic systems, governance, and more with 10,000+ Ai practitioners
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">45</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">820</div>
              <div className="text-sm text-gray-600">Comments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">266</div>
              <div className="text-sm text-gray-600">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">42</div>
              <div className="text-sm text-gray-600">Online now</div>
            </div>
          </div>
        </div>
      </section>

      {/* Forum Content */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Left Sidebar - Categories */}
            <div className="lg:col-span-1">
              <div className="sticky top-24">
                <div className="bg-white rounded-xl border border-gray-200 p-4">
                  <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <button
                        key={category.id}
                        onClick={() => setSelectedCategory(category.id)}
                        className={`w-full flex items-center justify-between p-3 rounded-lg transition-colors ${
                          selectedCategory === category.id
                            ? 'bg-purple-50 text-[#8B2EE5]'
                            : 'hover:bg-gray-50 text-gray-700'
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <category.icon className="w-5 h-5" />
                          <span className="text-sm font-medium">{category.name}</span>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {category.count}
                        </Badge>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Trending Topics */}
                <div className="bg-white rounded-xl border border-gray-200 p-4 mt-6">
                  <div className="flex items-center gap-2 mb-4">
                    <TrendingUp className="w-5 h-5 text-[#8B2EE5]" />
                    <h3 className="font-semibold text-gray-900">Trending Topics</h3>
                  </div>
                  <div className="space-y-3">
                    {trendingTopics.map((topic) => (
                      <div key={topic.name} className="flex items-center justify-between">
                        <div>
                          <div className="text-sm font-medium text-gray-900">{topic.name}</div>
                          <div className="text-xs text-gray-600">{topic.posts} posts</div>
                        </div>
                        <Badge className="bg-green-100 text-green-700 text-xs">
                          {topic.trend}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Main Content - Discussions */}
            <div className="lg:col-span-3">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">
                  {categories.find(c => c.id === selectedCategory)?.name || 'All Discussions'}
                </h2>
                <Button 
                  className="bg-[#8B2EE5] hover:bg-[#7325C4]"
                  onClick={() => setShowNewDiscussion(true)}
                >
                  Start Discussion
                </Button>
              </div>

              <div className="space-y-4">
                {filteredDiscussions.map((discussion) => (
                  <motion.div
                    key={discussion.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-all cursor-pointer"
                    onClick={() => setSelectedDiscussion(discussion)}
                  >
                    <div className="flex items-start gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={discussion.author.avatar} />
                        <AvatarFallback>{discussion.author.name[0]}</AvatarFallback>
                      </Avatar>

                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              {discussion.isPinned && (
                                <Pin className="w-4 h-4 text-[#8B2EE5]" />
                              )}
                              <h3 className="text-lg font-semibold text-gray-900 hover:text-[#8B2EE5]">
                                {discussion.title}
                              </h3>
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-600 mb-2">
                              <span className="font-medium">{discussion.author.name}</span>
                              <span>•</span>
                              <span>{discussion.author.role}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {discussion.timestamp}
                              </span>
                            </div>
                          </div>
                        </div>

                        <p className="text-gray-600 mb-4 line-clamp-2">{discussion.preview}</p>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4">
                            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#8B2EE5]">
                              <ThumbsUp className="w-4 h-4" />
                              {discussion.likes}
                            </button>
                            <button className="flex items-center gap-1 text-sm text-gray-600 hover:text-[#8B2EE5]">
                              <MessageCircle className="w-4 h-4" />
                              {discussion.replies}
                            </button>
                            <span className="flex items-center gap-1 text-sm text-gray-600">
                              <Eye className="w-4 h-4" />
                              {discussion.views}
                            </span>
                          </div>

                          <div className="flex items-center gap-2">
                            {discussion.tags.map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-xs">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Discussion Modal */}
      {showNewDiscussion && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-3xl font-bold text-gray-900">Start New Discussion</h2>
                <Button variant="ghost" onClick={() => setShowNewDiscussion(false)}>
                  ✕
                </Button>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                  <input
                    type="text"
                    value={newDiscussionData.authorName}
                    onChange={(e) => {
                      setNewDiscussionData({ ...newDiscussionData, authorName: e.target.value });
                      setDiscussionErrors({ ...discussionErrors, authorName: '' });
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B2EE5] focus:border-transparent ${discussionErrors.authorName ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="Enter your name"
                  />
                  {discussionErrors.authorName && <p className="text-red-500 text-sm mt-1">{discussionErrors.authorName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                  <input
                    type="email"
                    value={newDiscussionData.authorEmail}
                    onChange={(e) => {
                      setNewDiscussionData({ ...newDiscussionData, authorEmail: e.target.value });
                      setDiscussionErrors({ ...discussionErrors, authorEmail: '' });
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B2EE5] focus:border-transparent ${discussionErrors.authorEmail ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="your@email.com"
                  />
                  {discussionErrors.authorEmail && <p className="text-red-500 text-sm mt-1">{discussionErrors.authorEmail}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category *</label>
                  <select
                    value={newDiscussionData.category}
                    onChange={(e) => setNewDiscussionData({ ...newDiscussionData, category: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2EE5] focus:border-transparent"
                  >
                    {categories.filter(c => c.id !== 'all').map((cat) => (
                      <option key={cat.id} value={cat.id}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={newDiscussionData.title}
                    onChange={(e) => {
                      setNewDiscussionData({ ...newDiscussionData, title: e.target.value });
                      setDiscussionErrors({ ...discussionErrors, title: '' });
                    }}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-[#8B2EE5] focus:border-transparent ${discussionErrors.title ? 'border-red-500' : 'border-gray-300'}`}
                    placeholder="What's your discussion about?"
                  />
                  {discussionErrors.title && <p className="text-red-500 text-sm mt-1">{discussionErrors.title}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Content *</label>
                  <Textarea
                    value={newDiscussionData.content}
                    onChange={(e) => {
                      setNewDiscussionData({ ...newDiscussionData, content: e.target.value });
                      setDiscussionErrors({ ...discussionErrors, content: '' });
                    }}
                    className={`min-h-[200px] ${discussionErrors.content ? 'border-red-500' : ''}`}
                    placeholder="Share your thoughts, questions, or insights..."
                  />
                  {discussionErrors.content && <p className="text-red-500 text-sm mt-1">{discussionErrors.content}</p>}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tags (comma separated)</label>
                  <input
                    type="text"
                    value={newDiscussionData.tags}
                    onChange={(e) => setNewDiscussionData({ ...newDiscussionData, tags: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#8B2EE5] focus:border-transparent"
                    placeholder="e.g. deployment, best-practices, tutorial"
                  />
                </div>

                <div className="flex gap-4">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setShowNewDiscussion(false)}
                  >
                    Cancel
                  </Button>
                  <Button
                    className="flex-1 bg-[#8B2EE5] hover:bg-[#7325C4]"
                    onClick={() => {
                      const errors = {};
                      
                      if (!newDiscussionData.authorName.trim()) {
                        errors.authorName = 'Please enter your name';
                      }
                      if (!newDiscussionData.authorEmail.trim()) {
                        errors.authorEmail = 'Please enter your email';
                      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(newDiscussionData.authorEmail)) {
                        errors.authorEmail = 'Please enter a valid email address';
                      }
                      if (!newDiscussionData.title.trim()) {
                        errors.title = 'Please enter a title';
                      } else if (newDiscussionData.title.trim().length < 10) {
                        errors.title = 'Title must be at least 10 characters long';
                      }
                      if (!newDiscussionData.content.trim()) {
                        errors.content = 'Please enter content';
                      } else if (newDiscussionData.content.trim().length < 20) {
                        errors.content = 'Content must be at least 20 characters long';
                      }
                      
                      if (Object.keys(errors).length > 0) {
                        setDiscussionErrors(errors);
                        return;
                      }
                      
                      setDiscussionErrors({});
                      setShowNewDiscussion(false);
                      setNewDiscussionData({
                        title: '',
                        content: '',
                        category: 'all',
                        tags: '',
                        authorName: '',
                        authorEmail: ''
                      });
                    }}
                  >
                    Post Discussion
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* Discussion Modal */}
      {selectedDiscussion && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 overflow-y-auto">
          <div className="min-h-screen px-4 py-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl"
            >
              {/* Header */}
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <Avatar className="w-12 h-12">
                      <AvatarImage src={selectedDiscussion.author.avatar} />
                      <AvatarFallback>{selectedDiscussion.author.name[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-semibold text-gray-900">{selectedDiscussion.author.name}</div>
                      <div className="text-sm text-gray-600">{selectedDiscussion.author.role} • {selectedDiscussion.timestamp}</div>
                    </div>
                  </div>
                  <Button variant="ghost" onClick={() => setSelectedDiscussion(null)}>
                    ✕
                  </Button>
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-3">{selectedDiscussion.title}</h2>
                <div className="flex items-center gap-2">
                  {selectedDiscussion.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 border-b border-gray-200">
                <p className="text-gray-700 leading-relaxed mb-6">{selectedDiscussion.preview}</p>
                <div className="flex items-center gap-6">
                  <button className="flex items-center gap-2 text-gray-600 hover:text-[#8B2EE5]">
                    <ThumbsUp className="w-5 h-5" />
                    <span>{selectedDiscussion.likes}</span>
                  </button>
                  <span className="flex items-center gap-2 text-gray-600">
                    <MessageCircle className="w-5 h-5" />
                    <span>{selectedDiscussion.replies} replies</span>
                  </span>
                  <span className="flex items-center gap-2 text-gray-600">
                    <Eye className="w-5 h-5" />
                    <span>{selectedDiscussion.views} views</span>
                  </span>
                </div>
              </div>

              {/* Comments */}
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{selectedDiscussion.replies} Replies</h3>
                
                <div className="space-y-4 mb-6">
                  {[...Array(3)].map((_, i) => (
                    <div key={i} className="flex gap-3 p-4 bg-gray-50 rounded-lg">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={`https://images.unsplash.com/photo-${1500648767791 + i}00-${i}0dcc994a43e?w=100`} />
                        <AvatarFallback>U</AvatarFallback>
                      </Avatar>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className="font-semibold text-sm">User {i + 1}</span>
                          <span className="text-xs text-gray-500">{i + 1} hour ago</span>
                        </div>
                        <p className="text-sm text-gray-700">Great insights! I've been working on a similar implementation...</p>
                        <div className="flex items-center gap-4 mt-2">
                          <button className="text-xs text-gray-600 hover:text-[#8B2EE5]">
                            <ThumbsUp className="w-3 h-3 inline mr-1" />
                            {5 + i}
                          </button>
                          <button className="text-xs text-gray-600 hover:text-[#8B2EE5]">Reply</button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add Comment */}
                <div className="border-t border-gray-200 pt-6">
                  <h4 className="font-semibold text-gray-900 mb-4">Add Your Reply</h4>
                  <div className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Name *</label>
                        <input
                          type="text"
                          value={replyData.name}
                          onChange={(e) => {
                            setReplyData({ ...replyData, name: e.target.value });
                            setReplyErrors({ ...replyErrors, name: '' });
                          }}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B2EE5] focus:border-transparent text-sm ${replyErrors.name ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="Enter your name"
                        />
                        {replyErrors.name && <p className="text-red-500 text-xs mt-1">{replyErrors.name}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">Your Email *</label>
                        <input
                          type="email"
                          value={replyData.email}
                          onChange={(e) => {
                            setReplyData({ ...replyData, email: e.target.value });
                            setReplyErrors({ ...replyErrors, email: '' });
                          }}
                          className={`w-full px-3 py-2 border rounded-lg focus:ring-2 focus:ring-[#8B2EE5] focus:border-transparent text-sm ${replyErrors.email ? 'border-red-500' : 'border-gray-300'}`}
                          placeholder="your@email.com"
                        />
                        {replyErrors.email && <p className="text-red-500 text-xs mt-1">{replyErrors.email}</p>}
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">Your Reply *</label>
                      <Textarea
                        placeholder="Share your thoughts..."
                        value={replyData.content}
                        onChange={(e) => {
                          setReplyData({ ...replyData, content: e.target.value });
                          setReplyErrors({ ...replyErrors, content: '' });
                        }}
                        className={`mb-1 ${replyErrors.content ? 'border-red-500' : ''}`}
                        rows={4}
                      />
                      {replyErrors.content && <p className="text-red-500 text-xs mb-2">{replyErrors.content}</p>}
                    </div>
                    <Button 
                      className="bg-[#8B2EE5] hover:bg-[#7325C4]"
                      onClick={() => {
                        const errors = {};
                        
                        if (!replyData.name.trim()) {
                          errors.name = 'Please enter your name';
                        }
                        if (!replyData.email.trim()) {
                          errors.email = 'Please enter your email';
                        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(replyData.email)) {
                          errors.email = 'Please enter a valid email address';
                        }
                        if (!replyData.content.trim()) {
                          errors.content = 'Please enter your reply';
                        } else if (replyData.content.trim().length < 10) {
                          errors.content = 'Reply must be at least 10 characters long';
                        }
                        
                        if (Object.keys(errors).length > 0) {
                          setReplyErrors(errors);
                          return;
                        }
                        
                        setReplyErrors({});
                        setReplyData({ content: '', name: '', email: '' });
                      }}
                    >
                      <Send className="w-4 h-4 mr-2" />
                      Post Reply
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </div>
  );
}