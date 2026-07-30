import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Search, Calendar, Clock, ArrowRight, User, Loader2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

const posts = [
  {
    title: 'User Experience Design for AI Agents: Best Practices Guide',
    excerpt: 'Master UX design principles for autonomous AI agents. Learn interaction patterns, user flows, and interface guidelines for intuitive agent experiences.',
    author: 'Rachel Foster',
    date: 'January 22, 2025',
    readTime: '16 min read',
    category: 'Agentic Design',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/8dbd436fc_generated_image.png',
    page: 'BlogAgenticAIUXDesign',
    featured: true
  },
  {
    title: 'Designing Conversational AI Interfaces: From Chatbots to Agents',
    excerpt: 'Create engaging conversational experiences for AI agents. Message design, context management, and natural dialogue patterns.',
    author: 'Sophie Martinez',
    date: 'January 21, 2025',
    readTime: '14 min read',
    category: 'Agentic Design',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/a5bc3e19a_generated_image.png',
    page: 'BlogConversationalAIDesign'
  },
  {
    title: 'Visual Design Patterns for Agentic AI: Component Library Guide',
    excerpt: 'Build consistent AI agent interfaces with reusable design patterns. Explore component libraries, design systems, and visual guidelines.',
    author: 'David Chen',
    date: 'January 20, 2025',
    readTime: '17 min read',
    category: 'Agentic Design',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/3fb58ca0f_generated_image.png',
    page: 'BlogVisualDesignPatterns'
  },
  {
    title: 'Designing for AI Transparency: Building Trust Through Design',
    excerpt: 'Design interfaces that make AI decision-making transparent. Explainability patterns, trust indicators, and confidence displays.',
    author: 'Emma Wilson',
    date: 'January 19, 2025',
    readTime: '15 min read',
    category: 'Agentic Design',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/daede25ec_generated_image.png',
    page: 'BlogAITransparencyDesign'
  },
  {
    title: 'Multi-Agent System UI/UX: Coordinating Multiple AI Agents',
    excerpt: 'Design interfaces for complex multi-agent systems. Agent coordination, status visualization, and managing agent interactions.',
    author: 'Michael Torres',
    date: 'January 18, 2025',
    readTime: '18 min read',
    category: 'Agentic Design',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/d402edd7b_generated_image.png',
    page: 'BlogMultiAgentUIDesign'
  },
  {
    title: 'Designing AI Agent Personas: Character and Voice Guidelines',
    excerpt: 'Create compelling AI agent personalities. Persona development, voice design, tone guidelines, and character consistency.',
    author: 'Jessica Park',
    date: 'January 17, 2025',
    readTime: '13 min read',
    category: 'Agentic Design',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/1a49d1181_generated_image.png',
    page: 'BlogAIAgentPersonas'
  },
  {
    title: 'Design Systems for AI-First Products: Scalable UI Architecture',
    excerpt: 'Build design systems optimized for AI products. Component architecture, token systems, and scaling AI interfaces.',
    author: 'Alex Kumar',
    date: 'January 16, 2025',
    readTime: '19 min read',
    category: 'Agentic Design',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/f51c460f9_generated_image.png',
    page: 'BlogAIDesignSystems'
  },
  {
    title: 'Accessibility in Agentic AI Design: Inclusive Agent Experiences',
    excerpt: 'Design accessible AI agents for all users. WCAG compliance, screen reader support, keyboard navigation, and inclusive design principles.',
    author: 'Maria Rodriguez',
    date: 'January 15, 2025',
    readTime: '16 min read',
    category: 'Agentic Design',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/a2aae8476_generated_image.png',
    page: 'BlogAccessibleAIDesign'
  },
  {
    title: 'Tool Selection and Integration Design for AI Agents',
    excerpt: 'Master the art of selecting and integrating tools for AI agents. Design patterns for tool discovery, evaluation, and seamless integration.',
    author: 'Kevin Zhang',
    date: 'January 14, 2025',
    readTime: '17 min read',
    category: 'Agentic Design',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200',
    page: 'BlogToolSelectionDesign'
  },
  {
    title: 'Designing Agent Tool Interfaces: Best Practices and Patterns',
    excerpt: 'Create intuitive tool interfaces for AI agents. Input/output design, parameter configuration, and result visualization patterns.',
    author: 'Sarah Mitchell',
    date: 'January 13, 2025',
    readTime: '15 min read',
    category: 'Agentic Design',
    image: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?w=1200',
    page: 'BlogAgentToolInterfaces'
  },
  {
    title: 'API Design for Agentic AI Tools: Developer Experience Guide',
    excerpt: 'Build developer-friendly APIs for AI agent tools. Endpoint design, authentication, versioning, and documentation best practices.',
    author: 'Michael Chen',
    date: 'January 12, 2025',
    readTime: '18 min read',
    category: 'Agentic Design',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200',
    page: 'BlogAPIDesignAgenticTools'
  },
  {
    title: 'Tool Discovery UX: Helping Agents Find the Right Tools',
    excerpt: 'Design effective tool discovery experiences for AI agents. Search, categorization, recommendations, and intelligent tool matching.',
    author: 'Emma Wilson',
    date: 'January 11, 2025',
    readTime: '14 min read',
    category: 'Agentic Design',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200',
    page: 'BlogToolDiscoveryUX'
  },
  {
    title: 'Error Handling Design for Agent Tool Execution',
    excerpt: 'Handle tool execution failures gracefully. Retry strategies, fallback patterns, user communication, and recovery workflows.',
    author: 'David Park',
    date: 'January 10, 2025',
    readTime: '16 min read',
    category: 'Agentic Design',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
    page: 'BlogToolErrorHandling'
  },
  {
    title: 'Tool Chaining and Workflow Design for AI Agents',
    excerpt: 'Design complex tool chains and workflows. Sequential execution, parallel processing, conditional logic, and workflow visualization.',
    author: 'Rachel Foster',
    date: 'January 9, 2025',
    readTime: '19 min read',
    category: 'Agentic Design',
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=1200',
    page: 'BlogToolChainingWorkflows'
  },
  {
    title: 'Monitoring Tools for Agentic AI: Observability Interface Design',
    excerpt: 'Design monitoring and observability interfaces for AI agents. Metrics visualization, log analysis, trace viewing, and alert management.',
    author: 'James Patterson',
    date: 'January 8, 2025',
    readTime: '17 min read',
    category: 'Agentic Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    page: 'BlogMonitoringToolsDesign'
  },
  {
    title: 'Testing Tools and Frameworks for Agentic AI Systems',
    excerpt: 'Build comprehensive testing tools for AI agents. Unit testing, integration testing, simulation environments, and quality assurance patterns.',
    author: 'Dr. Alex Kumar',
    date: 'January 7, 2025',
    readTime: '20 min read',
    category: 'Agentic Design',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
    page: 'BlogTestingToolsFrameworks'
  },
  {
    title: 'Agentic AI vs Traditional AI: Complete Comparison Guide',
    excerpt: 'Comprehensive comparison of agentic AI and traditional AI systems. Understand key differences, capabilities, limitations, and when to use each approach.',
    author: 'Dr. Sarah Mitchell',
    date: 'December 20, 2024',
    readTime: '18 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/4db66854b_generated_image.png',
    page: 'BlogAgenticVsTraditionalAI',
    featured: true
  },
  {
    title: 'When to Use Agentic AI vs Traditional AI: Decision Framework',
    excerpt: 'Practical guide to choosing between agentic and traditional AI. Decision trees, use case examples, and ROI considerations.',
    author: 'James Patterson',
    date: 'December 19, 2024',
    readTime: '15 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/6324a2cc5_generated_image.png',
    page: 'BlogWhenUseAgenticAI'
  },
  {
    title: 'Agentic AI vs Rule-Based Systems: Why Intelligence Beats Rules',
    excerpt: 'Compare agentic AI with traditional rule-based systems. Understand limitations of rules and advantages of autonomous intelligence.',
    author: 'Laura Martinez',
    date: 'December 18, 2024',
    readTime: '14 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/23082dda6_generated_image.png',
    page: 'BlogAgenticVsRuleBased'
  },
  {
    title: 'Cost Comparison: Agentic AI vs Traditional AI Systems',
    excerpt: 'Detailed cost analysis of agentic vs traditional AI. Development costs, operational expenses, ROI timelines, and total cost of ownership.',
    author: 'David Chang, CFO',
    date: 'December 17, 2024',
    readTime: '16 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/fa0085381_generated_image.png',
    page: 'BlogAgenticAICostAnalysis'
  },
  {
    title: 'Performance Analysis: Agentic AI vs Traditional AI Benchmarks',
    excerpt: 'Compare performance metrics between agentic and traditional AI. Speed, accuracy, reliability, and scalability benchmarks.',
    author: 'Dr. Alex Kumar',
    date: 'December 16, 2024',
    readTime: '17 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/498e4e839_generated_image.png',
    page: 'BlogAgenticAIPerformance'
  },
  {
    title: 'Architecture Differences: Agentic AI vs Traditional AI Systems',
    excerpt: 'Deep dive into architectural patterns for agentic and traditional AI. Components, data flow, and infrastructure requirements.',
    author: 'Kevin Zhang, Solutions Architect',
    date: 'December 15, 2024',
    readTime: '16 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/01eaffc7d_generated_image.png',
    page: 'BlogAgenticAIArchitecture'
  },
  {
    title: 'Agentic AI Architecture Patterns: ReAct, Chain-of-Thought, and Beyond',
    excerpt: 'Comprehensive guide to AI agent architecture patterns. Compare ReAct, Chain-of-Thought, ReWOO, and other frameworks for building autonomous agents.',
    author: 'Dr. Alex Thompson',
    date: 'January 15, 2025',
    readTime: '20 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/bda3167c8_generated_image.png',
    page: 'BlogAgenticAIArchitecturePatterns'
  },
  {
    title: 'Memory Management in Agentic AI: Short-term vs Long-term Strategies',
    excerpt: 'Complete guide to memory architecture for AI agents. Learn about short-term, long-term, and episodic memory patterns for autonomous systems.',
    author: 'Dr. Sarah Mitchell',
    date: 'January 14, 2025',
    readTime: '18 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/96c754a07_generated_image.png',
    page: 'BlogAgenticAIMemoryManagement'
  },
  {
    title: 'Tool Integration in Agentic AI: APIs, Functions, and External Systems',
    excerpt: 'Master tool integration for AI agents. Learn how to connect agents with APIs, databases, and external systems for powerful autonomous capabilities.',
    author: 'Kevin Zhang',
    date: 'January 13, 2025',
    readTime: '19 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/d7bff2e14_generated_image.png',
    page: 'BlogAgenticAIToolIntegration'
  },
  {
    title: 'Observability for Agentic AI: Monitoring, Debugging, and Optimization',
    excerpt: 'Comprehensive guide to observability in AI agents. Learn how to monitor, debug, and optimize autonomous systems with traces, metrics, and logs.',
    author: 'Dr. Marcus Chen',
    date: 'January 12, 2025',
    readTime: '17 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/73a6c1756_generated_image.png',
    page: 'BlogAgenticAIObservability'
  },
  {
    title: 'Prompt Engineering for Agentic AI: Techniques and Best Practices',
    excerpt: 'Master prompt engineering for autonomous agents. Learn techniques for system prompts, few-shot examples, and structured outputs.',
    author: 'Rachel Foster',
    date: 'January 11, 2025',
    readTime: '21 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/9fd68b89e_generated_image.png',
    page: 'BlogAgenticAIPromptEngineering'
  },
  {
    title: 'Error Handling and Recovery in Agentic AI Systems',
    excerpt: 'Master error handling for AI agents. Learn retry strategies, fallback patterns, and graceful degradation for robust autonomous systems.',
    author: 'James Patterson',
    date: 'January 10, 2025',
    readTime: '16 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/e64c3b9c2_generated_image.png',
    page: 'BlogAgenticAIErrorHandling'
  },
  {
    title: 'Context Window Management in Agentic AI: Strategies and Techniques',
    excerpt: 'Master context management for AI agents. Learn how to work within token limits while maintaining rich context for autonomous decision-making.',
    author: 'Laura Martinez',
    date: 'January 9, 2025',
    readTime: '17 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/84d83fc30_generated_image.png',
    page: 'BlogAgenticAIContextManagement'
  },
  {
    title: 'Scaling Agentic AI: From Prototype to Production at Enterprise Scale',
    excerpt: 'Learn how to scale AI agents to handle millions of requests. Infrastructure patterns, performance optimization, and cost management at scale.',
    author: 'Michael Rodriguez',
    date: 'January 8, 2025',
    readTime: '19 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/616f41550_generated_image.png',
    page: 'BlogAgenticAIScalability'
  },
  {
    title: 'Use Cases: Where Agentic AI and Traditional AI Each Excel',
    excerpt: 'Real-world use cases comparing agentic and traditional AI approaches. See which technology fits your specific business need.',
    author: 'Rachel Thompson',
    date: 'December 14, 2024',
    readTime: '15 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/a2e628435_generated_image.png',
    page: 'BlogAgenticAIUseCaseComparison'
  },
  {
    title: 'Migration Guide: From Traditional AI to Agentic AI Systems',
    excerpt: 'Step-by-step guide to migrating from traditional AI to agentic systems. Strategies, timelines, and risk mitigation.',
    author: 'Michael Rodriguez',
    date: 'December 13, 2024',
    readTime: '14 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/586fe2f5d_generated_image.png',
    page: 'BlogMigratingToAgenticAI'
  },
  {
    title: 'ROI Comparison: Agentic AI vs Traditional AI Business Value',
    excerpt: 'Compare return on investment for agentic and traditional AI. Real metrics, payback periods, and long-term value creation.',
    author: 'Jennifer Lee, Business Analyst',
    date: 'December 12, 2024',
    readTime: '13 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/561c3c7a5_generated_image.png',
    page: 'BlogAgenticAIROIComparison'
  },
  {
    title: 'Future-Proofing with Agentic AI: Why Autonomous Systems Win Long-Term',
    excerpt: 'Why agentic AI is the future. Technology trends, market predictions, and strategic advantages of autonomous systems.',
    author: 'Dr. Emily Carter',
    date: 'December 11, 2024',
    readTime: '16 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/b3d6b8b14_generated_image.png',
    page: 'BlogAgenticAIFutureProof'
  },
  {
    title: 'Limitations of Agentic AI: When Traditional AI is Still Better',
    excerpt: 'Honest assessment of where agentic AI falls short. Understand constraints and when to stick with traditional approaches.',
    author: 'Mark Stevens',
    date: 'December 10, 2024',
    readTime: '12 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/90c3d3130_generated_image.png',
    page: 'BlogAgenticAILimitations'
  },
  {
    title: 'Skills Transition: From Traditional AI to Agentic AI Development',
    excerpt: 'How ML engineers and data scientists can transition to agentic AI. New skills needed, learning paths, and career implications.',
    author: 'Lisa Anderson',
    date: 'December 9, 2024',
    readTime: '14 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/59b1829e1_generated_image.png',
    page: 'BlogAgenticAISkillsTransition'
  },
  {
    title: 'Industry Adoption: Agentic AI vs Traditional AI Across Sectors',
    excerpt: 'Compare adoption rates of agentic and traditional AI across industries. Trends, drivers, and predictions for each sector.',
    author: 'Robert Kim',
    date: 'December 8, 2024',
    readTime: '15 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/28cbc7ddd_generated_image.png',
    page: 'BlogAgenticAIIndustryAdoption'
  },
  {
    title: 'Security Comparison: Agentic AI vs Traditional AI Risk Profiles',
    excerpt: 'Compare security risks and mitigations for agentic and traditional AI. Threat models, vulnerabilities, and best practices.',
    author: 'Marcus Johnson, CISO',
    date: 'December 7, 2024',
    readTime: '17 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/87c0f5ef6_generated_image.png',
    page: 'BlogAgenticAISecurityComparison'
  },
  {
    title: 'Introduction to Generative AI: A Complete Guide',
    excerpt: 'Discover what generative AI is, how it works, and why it\'s transforming industries. Learn about the technology behind ChatGPT, DALL-E, and more.',
    author: 'Sarah Chen',
    date: 'December 10, 2024',
    readTime: '10 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/946ae1662_generated_image.png',
    featured: true,
    page: 'BlogGenerativeAIIntro'
  },
  {
    title: 'Generative AI vs Traditional AI: Key Differences Explained',
    excerpt: 'Understand the fundamental differences between generative and traditional AI, their use cases, and which one is right for your business needs.',
    author: 'Michael Rodriguez',
    date: 'December 9, 2024',
    readTime: '12 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/becba97a2_generated_image.png',
    page: 'BlogGenerativeAIvsTraditional'
  },
  {
    title: 'Understanding Large Language Models: GPT, Claude, and Beyond',
    excerpt: 'A comprehensive guide to large language models, how they work, and how businesses are using them to transform operations.',
    author: 'Dr. Emily Wang',
    date: 'December 8, 2024',
    readTime: '15 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/7880b85c3_generated_image.png',
    page: 'BlogLLMGuide'
  },
  {
    title: 'Generative AI for Content Creation: A Practical Guide',
    excerpt: 'Learn how to leverage generative AI for creating high-quality content at scale. Tips, tools, and best practices for marketers and creators.',
    author: 'Jessica Martinez',
    date: 'December 7, 2024',
    readTime: '11 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/bc587caf0_generated_image.png',
    page: 'BlogGenerativeAIContent'
  },
  {
    title: 'AI-Powered Code Generation: Accelerating Software Development',
    excerpt: 'Learn how AI code assistants like GitHub Copilot are transforming software development. Best practices, limitations, and real-world examples.',
    author: 'Alex Thompson',
    date: 'December 6, 2024',
    readTime: '13 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/8df7d2e10_generated_image.png',
    page: 'BlogGenerativeAICode'
  },
  {
    title: 'AI Image Generation: From DALL-E to Midjourney',
    excerpt: 'Explore how AI image generators are revolutionizing design. Learn about the technology, tools, and best practices for creating stunning visuals.',
    author: 'Rachel Kim',
    date: 'December 5, 2024',
    readTime: '14 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/4c0f79c7e_generated_image.png',
    page: 'BlogGenerativeAIImages'
  },
  {
    title: 'Ethics and Bias in Generative AI: A Responsible AI Guide',
    excerpt: 'Navigate the ethical challenges of generative AI. Learn about bias, fairness, transparency, and building responsible AI systems.',
    author: 'Dr. James Carter',
    date: 'December 4, 2024',
    readTime: '16 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/03f21201b_generated_image.png',
    page: 'BlogGenerativeAIEthics'
  },
  {
    title: 'Generative AI for Business Automation: ROI and Use Cases',
    excerpt: 'Discover how enterprises are using generative AI to automate processes, reduce costs, and drive growth. Real use cases and ROI metrics.',
    author: 'David Park',
    date: 'December 3, 2024',
    readTime: '14 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/53f2b0881_generated_image.png',
    page: 'BlogGenerativeAIBusiness'
  },
  {
    title: 'Fine-Tuning Generative AI Models: A Practical Guide',
    excerpt: 'Learn how to customize generative AI models for your specific needs through fine-tuning. Techniques, best practices, and real-world examples.',
    author: 'Dr. Lisa Anderson',
    date: 'December 2, 2024',
    readTime: '17 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/78d43cb2a_generated_image.png',
    page: 'BlogGenerativeAIFineTuning'
  },
  {
    title: 'The Future of Generative AI: Trends and Predictions for 2025-2030',
    excerpt: 'Explore where generative AI is heading. From multimodal models to autonomous agents, discover the trends shaping the next 5 years.',
    author: 'Dr. Sarah Chen',
    date: 'December 1, 2024',
    readTime: '18 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/885a5460f_generated_image.png',
    page: 'BlogGenerativeAIFuture'
  },
  {
    title: 'Introduction to Agentic AI Governance: A Strategic Framework',
    excerpt: 'Understand the critical importance of governance for autonomous AI agents. Learn frameworks, best practices, and how to implement effective oversight.',
    author: 'Dr. Katherine Morrison',
    date: 'January 15, 2025',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/e7ea40d4c_generated_image.png',
    page: 'BlogAgenticAIGovernanceIntro'
  },
  {
    title: 'Regulatory Compliance for Agentic AI: Navigating Global Requirements',
    excerpt: 'Comprehensive guide to AI regulations affecting autonomous agents. EU AI Act, US requirements, and industry-specific compliance.',
    author: 'Maria Santos',
    date: 'January 14, 2025',
    readTime: '16 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/557b55254_generated_image.png',
    page: 'BlogAgenticAICompliance'
  },
  {
    title: 'Risk Management for Agentic AI: Identifying and Mitigating Threats',
    excerpt: 'Learn how to assess, prioritize, and mitigate risks from autonomous AI agents. Frameworks, tools, and real-world examples.',
    author: 'Robert Chen',
    date: 'January 13, 2025',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/d8601d5e8_generated_image.png',
    page: 'BlogAgenticAIRiskManagement'
  },
  {
    title: 'Security and Privacy in Agentic AI: Protecting Data and Systems',
    excerpt: 'Comprehensive guide to securing autonomous AI agents, protecting sensitive data, and ensuring privacy compliance.',
    author: 'Marcus Williams',
    date: 'January 12, 2025',
    readTime: '18 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/940a4a4c2_generated_image.png',
    page: 'BlogAgenticAISecurityPrivacy'
  },
  {
    title: 'Ethical Frameworks for Agentic AI: Building Responsible Systems',
    excerpt: 'Develop ethical guidelines for autonomous AI agents. Frameworks, principles, and practical implementation strategies.',
    author: 'Dr. Aisha Patel',
    date: 'January 11, 2025',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/67f334540_generated_image.png',
    page: 'BlogAgenticAIEthicalFrameworks'
  },
  {
    title: 'AI Agent Accountability and Transparency: Who\'s Responsible?',
    excerpt: 'Establish clear accountability for autonomous AI agents. Learn how to track decisions, explain actions, and assign responsibility.',
    author: 'Thomas Anderson',
    date: 'January 10, 2025',
    readTime: '13 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/4f073cd9e_generated_image.png',
    page: 'BlogAgenticAIAccountability'
  },
  {
    title: 'Data Governance for Agentic AI: Managing Information Flows',
    excerpt: 'Control how AI agents access, use, and share data. Frameworks for data classification, access control, and lifecycle management.',
    author: 'Linda Chen',
    date: 'January 9, 2025',
    readTime: '16 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/0c4ccc602_generated_image.png',
    page: 'BlogAgenticAIDataGovernance'
  },
  {
    title: 'Monitoring and Auditing AI Agents: Observability Best Practices',
    excerpt: 'Learn how to monitor autonomous AI agents in production. Metrics, dashboards, alerting, and audit procedures.',
    author: 'Kevin Zhang',
    date: 'January 8, 2025',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/6dd3a31d4_generated_image.png',
    page: 'BlogAgenticAIMonitoring'
  },
  {
    title: 'AI Agent Access Control: Permissions and Authorization Strategies',
    excerpt: 'Implement robust access control for AI agents. Learn about RBAC, ABAC, least privilege, and managing agent permissions at scale.',
    author: 'Brian Mitchell',
    date: 'January 7, 2025',
    readTime: '12 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/97e00584e_generated_image.png',
    page: 'BlogAgenticAIAccessControl'
  },
  {
    title: 'Compliance Frameworks for Agentic AI: SOC 2, ISO, and Beyond',
    excerpt: 'Navigate compliance requirements for AI agents. SOC 2, ISO 27001, GDPR, HIPAA, and industry-specific standards.',
    author: 'Patricia Johnson',
    date: 'January 6, 2025',
    readTime: '17 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/6fe64484b_generated_image.png',
    page: 'BlogAgenticAIComplianceFrameworks'
  },
  {
    title: 'Agentic AI Governance Best Practices: Lessons from Leaders',
    excerpt: 'Learn from organizations with mature AI governance. Proven strategies, common mistakes, and practical implementation guidance.',
    author: 'Amanda Foster',
    date: 'January 5, 2025',
    readTime: '15 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/95a02745c_generated_image.png',
    page: 'BlogAgenticAIGovernanceBestPractices'
  },
  {
    title: 'Building an AI Governance Committee: Structure and Operations',
    excerpt: 'Create an effective AI governance committee. Roles, responsibilities, meeting cadence, and decision-making processes.',
    author: 'Richard Brown',
    date: 'January 4, 2025',
    readTime: '13 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/e9b7c4eae_generated_image.png',
    page: 'BlogAgenticAIGovernanceCommittee'
  },
  {
    title: 'AI Model Governance: Versioning, Testing, and Lifecycle Management',
    excerpt: 'Manage AI models powering your agents. Version control, testing standards, deployment processes, and retirement procedures.',
    author: 'Dr. Nina Patel',
    date: 'January 3, 2025',
    readTime: '16 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/317fbbf93_generated_image.png',
    page: 'BlogAgenticAIModelGovernance'
  },
  {
    title: 'AI Vendor Management: Assessing and Managing Third-Party AI Risks',
    excerpt: 'Evaluate and manage risks from AI/LLM vendors. Due diligence, contracts, SLAs, and ongoing vendor governance.',
    author: 'Steven Martinez',
    date: 'January 2, 2025',
    readTime: '14 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/05f386c60_generated_image.png',
    page: 'BlogAgenticAIVendorManagement'
  },
  {
    title: 'The Rise of Agentic AI: A Game Changer for Enterprises',
    excerpt: 'Discover how autonomous AI agents are transforming enterprise operations and enabling intelligent decision-making.',
    author: 'Sarah Chen',
    date: 'November 10, 2024',
    readTime: '12 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    page: 'BlogAgenticAIEnterprise'
  },
  {
    title: 'How Autonomous Agents are Revolutionizing Business Operations',
    excerpt: 'Explore the transformative power of autonomous AI agents in modern business operations.',
    author: 'Michael Rodriguez',
    date: 'December 8, 2024',
    readTime: '10 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200',
    page: 'BlogAutonomousAgents'
  },
  {
    title: 'Designing Effective Multi-Agent Systems: A Practical Guide',
    excerpt: 'Master the art of building multi-agent AI systems with orchestration patterns and best practices.',
    author: 'Dr. Emily Zhang',
    date: 'December 5, 2024',
    readTime: '15 min read',
    category: 'Tutorials',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200',
    page: 'BlogMultiAgentSystems'
  },
  {
    title: 'No-Code Agentic AI: Empowering Every Business User',
    excerpt: 'Discover how no-code platforms democratize AI agent development for business users.',
    author: 'David Kim',
    date: 'December 3, 2024',
    readTime: '9 min read',
    category: 'Tutorials',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    page: 'BlogNoCodeAgenticAI'
  },
  {
    title: 'Ensuring Trust and Security in Agentic AI Deployments',
    excerpt: 'Comprehensive guide to securing autonomous AI agents in enterprise environments.',
    author: 'Lisa Anderson',
    date: 'November 28, 2024',
    readTime: '11 min read',
    category: 'Security',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
    page: 'BlogAgenticAISecurity'
  },
  {
    title: 'Measuring the ROI of Your Agentic AI Investment',
    excerpt: 'Learn how to calculate, track, and maximize returns from autonomous AI agents with proven frameworks.',
    author: 'Robert Taylor',
    date: 'November 25, 2024',
    readTime: '13 min read',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    page: 'BlogAgenticAIROI'
  },
  {
    title: 'The Future of Work: Human-AI Collaboration with Agentic Systems',
    excerpt: 'Explore how humans and AI agents will work together in the future workplace.',
    author: 'Jennifer Martinez',
    date: 'November 20, 2024',
    readTime: '10 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1200',
    page: 'BlogHumanAICollaboration'
  },
  {
    title: 'From Automation to Autonomy: The Evolution of AI in Business',
    excerpt: 'Trace the journey from simple automation to autonomous AI systems and understand the technological leaps.',
    author: 'Dr. Marcus Chen',
    date: 'November 15, 2024',
    readTime: '14 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1200',
    page: 'BlogAutomationToAutonomy'
  },
  {
    title: '10 Proven Use Cases for Agentic AI in Enterprise Operations',
    excerpt: 'Explore real-world applications of autonomous AI agents across departments with implementation guides.',
    author: 'Alexandra Moore',
    date: 'November 12, 2024',
    readTime: '16 min read',
    category: 'Case Studies',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    page: 'BlogAgenticAIUseCases'
  },
  {
    title: 'Ethical Considerations in Deploying Autonomous AI Agents',
    excerpt: 'Navigate the ethical challenges of agentic AI with frameworks for responsible deployment.',
    author: 'Dr. Priya Sharma',
    date: 'November 8, 2024',
    readTime: '12 min read',
    category: 'AI Insights',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1200',
    page: 'BlogAgenticAIEthics'
  },
  {
    title: 'Scaling Agentic AI from Pilot to Production: Lessons Learned',
    excerpt: 'Learn from 500+ enterprise deployments. Strategies for scaling AI agents and achieving adoption.',
    author: 'James O\'Connor',
    date: 'November 1, 2024',
    readTime: '15 min read',
    category: 'Product',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=1200',
    page: 'BlogAgenticAIScaling'
  },
  {
    title: 'Understanding AI Autonomy: From Basic Automation to True Intelligence',
    excerpt: 'Explore the spectrum of AI autonomy, from simple automation to fully autonomous systems. Learn what true AI autonomy means and why it matters.',
    author: 'Dr. Rachel Thompson',
    date: 'January 20, 2025',
    readTime: '16 min read',
    category: 'AI Autonomy',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/6da63df8d_generated_image.png',
    page: 'BlogAIAutonomyIntro'
  },
  {
    title: 'The 6 Levels of AI Autonomy: A Complete Framework',
    excerpt: 'Understand the six levels of AI autonomy from assisted to full autonomy. Learn where your AI systems fit and how to advance them.',
    author: 'Michael Stevens',
    date: 'January 19, 2025',
    readTime: '14 min read',
    category: 'AI Autonomy',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/05ae80f12_generated_image.png',
    page: 'BlogAIAutonomyLevels'
  },
  {
    title: 'Autonomous Decision-Making: How AI Systems Think and Act Independently',
    excerpt: 'Deep dive into how autonomous AI systems make decisions without human intervention. Frameworks, algorithms, and real-world examples.',
    author: 'Dr. Sarah Kim',
    date: 'January 18, 2025',
    readTime: '17 min read',
    category: 'AI Autonomy',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/5506cf042_generated_image.png',
    page: 'BlogAutonomousDecisionMaking'
  },
  {
    title: 'Building Truly Autonomous AI Systems: Architecture and Design Patterns',
    excerpt: 'Practical guide to designing and building autonomous AI systems. Architecture patterns, key components, and implementation strategies.',
    author: 'Kevin Zhang',
    date: 'January 17, 2025',
    readTime: '18 min read',
    category: 'AI Autonomy',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/8fa53da31_generated_image.png',
    page: 'BlogBuildingAutonomousAI'
  },
  {
    title: 'AI Autonomy vs Human Oversight: Finding the Right Balance',
    excerpt: 'When should AI act autonomously and when do humans need to intervene? Framework for balancing autonomy with oversight and control.',
    author: 'Jennifer Martinez',
    date: 'January 16, 2025',
    readTime: '15 min read',
    category: 'AI Autonomy',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/3a99bae71_generated_image.png',
    page: 'BlogAIAutonomyVsOversight'
  },
  {
    title: 'Autonomous AI in Action: 10 Real-World Enterprise Applications',
    excerpt: 'Explore real-world deployments of autonomous AI across industries. Use cases, results, and lessons learned from leading organizations.',
    author: 'Robert Chen',
    date: 'January 15, 2025',
    readTime: '16 min read',
    category: 'AI Autonomy',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/f299782ce_generated_image.png',
    page: 'BlogAutonomousAIApplications'
  },
  {
    title: 'Overcoming Challenges in AI Autonomy: Risk, Trust, and Control',
    excerpt: 'Navigate the key challenges of deploying autonomous AI. Risk management, building trust, maintaining control, and ensuring safety.',
    author: 'Dr. Marcus Williams',
    date: 'January 14, 2025',
    readTime: '15 min read',
    category: 'AI Autonomy',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/43a0f2cea_generated_image.png',
    page: 'BlogAIAutonomyChallenges'
  },
  {
    title: 'The Future of AI Autonomy: Predictions and Emerging Trends for 2025-2030',
    excerpt: 'Look ahead at the future of autonomous AI. Emerging capabilities, market trends, regulatory landscape, and what it means for your business.',
    author: 'Dr. Emily Carter',
    date: 'January 13, 2025',
    readTime: '17 min read',
    category: 'AI Autonomy',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/eca3b3375_generated_image.png',
    page: 'BlogAIAutonomyFuture'
  },
  {
    title: 'Advanced Generative AI Techniques: RAG, Fine-tuning, and Prompt Engineering',
    excerpt: 'Master advanced techniques for optimizing generative AI models. Learn RAG implementation, fine-tuning strategies, and prompt engineering best practices.',
    author: 'Dr. Kevin Park',
    date: 'December 15, 2024',
    readTime: '19 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/cf6bc9a87_generated_image.png',
    page: 'BlogGenerativeAIFuture'
  },
  {
    title: 'AI Governance in Healthcare: Compliance and Patient Safety',
    excerpt: 'Navigate healthcare-specific AI governance requirements. HIPAA compliance, patient safety protocols, and clinical decision support guidelines.',
    author: 'Dr. Michelle Torres',
    date: 'January 20, 2025',
    readTime: '18 min read',
    category: 'AI Governance',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/52c2965ee_generated_image.png',
    page: 'BlogAgenticAIGovernanceIntro'
  },
  {
    title: 'Autonomous AI in Financial Services: Risk and Reward Analysis',
    excerpt: 'Explore autonomous AI applications in banking and finance. Trading algorithms, fraud detection, risk assessment, and regulatory considerations.',
    author: 'James Wellington',
    date: 'January 21, 2025',
    readTime: '16 min read',
    category: 'AI Autonomy',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/bafc68c7d_generated_image.png',
    page: 'BlogAIAutonomyIntro'
  },
  {
    title: 'Comparing AI Agent Architectures: ReAct vs Chain-of-Thought',
    excerpt: 'Technical comparison of leading AI agent architectures. Understand ReAct, Chain-of-Thought, and other reasoning frameworks for autonomous agents.',
    author: 'Dr. Alex Thompson',
    date: 'December 22, 2024',
    readTime: '20 min read',
    category: 'AI Comparison',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/33829a881_generated_image.png',
    page: 'BlogAgenticVsTraditionalAI'
  },
  {
    title: 'Real-Time AI Insights: Building Streaming Analytics with Agents',
    excerpt: 'Implement real-time analytics using AI agents. Stream processing, event-driven architectures, and continuous intelligence systems.',
    author: 'Sarah Mitchell',
    date: 'November 30, 2024',
    readTime: '15 min read',
    category: 'AI Insights',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/67aa083e3_generated_image.png',
    page: 'BlogAgenticAIEnterprise'
  },
  {
    title: 'Building Production-Ready Generative AI Applications',
    excerpt: 'Essential patterns for deploying generative AI apps. Reliability, monitoring, error handling, versioning, and production best practices.',
    author: 'Dr. James Wilson',
    date: 'January 15, 2025',
    readTime: '20 min read',
    category: 'Agentic Insights',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    page: 'BlogProductionGenAIApps'
  },
  {
    title: 'Prompt Engineering Mastery for AI Applications',
    excerpt: 'Advanced prompt engineering techniques. System prompts, few-shot learning, chain-of-thought, and prompt optimization strategies.',
    author: 'Maria Chen',
    date: 'January 14, 2025',
    readTime: '18 min read',
    category: 'Agentic Insights',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    page: 'BlogPromptEngineeringApps'
  },
  {
    title: 'Managing AI Model Costs in Production Applications',
    excerpt: 'Cost optimization for generative AI apps. Token usage tracking, caching strategies, model selection, and budget management.',
    author: 'David Park',
    date: 'January 13, 2025',
    readTime: '16 min read',
    category: 'Agentic Insights',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200',
    page: 'BlogManagingAICosts'
  },
  {
    title: 'Fine-Tuning vs RAG: Choosing the Right Approach for Your App',
    excerpt: 'Compare fine-tuning and retrieval-augmented generation. When to use each, implementation patterns, and hybrid approaches.',
    author: 'Dr. Sarah Kim',
    date: 'January 12, 2025',
    readTime: '19 min read',
    category: 'Agentic Insights',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=1200',
    page: 'BlogFineTuningVsRAG'
  },
  {
    title: 'Quality Evaluation and Testing for Generative AI Apps',
    excerpt: 'Build robust evaluation frameworks. Automated testing, human evaluation, quality metrics, and continuous monitoring.',
    author: 'Rachel Foster',
    date: 'January 11, 2025',
    readTime: '17 min read',
    category: 'Agentic Insights',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
    page: 'BlogQualityEvaluationAI'
  },
  {
    title: 'Scaling Generative AI Applications: Architecture and Strategies',
    excerpt: 'Scale from prototype to millions of users. Load balancing, caching, rate limiting, queue management, and infrastructure patterns.',
    author: 'Michael Rodriguez',
    date: 'January 10, 2025',
    readTime: '21 min read',
    category: 'Agentic Insights',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    page: 'BlogScalingGenAIApps'
  },
  {
    title: 'User Experience Design Patterns for AI-Powered Applications',
    excerpt: 'Design delightful AI app experiences. Loading states, streaming UX, error handling, feedback collection, and trust-building patterns.',
    author: 'Emma Wilson',
    date: 'January 9, 2025',
    readTime: '15 min read',
    category: 'Agentic Insights',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=1200',
    page: 'BlogUXPatternsAIApps'
  },
  {
    title: 'Security and Compliance in Generative AI Applications',
    excerpt: 'Secure your AI apps. Data privacy, prompt injection prevention, output filtering, compliance requirements, and security best practices.',
    author: 'Dr. Alex Kumar',
    date: 'January 8, 2025',
    readTime: '18 min read',
    category: 'Agentic Insights',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
    page: 'BlogSecurityComplianceAI'
  },
  {
    title: 'Autonomous Decision-Making Capabilities: How AI Agents Choose Actions',
    excerpt: 'Explore how AI agents make decisions independently. Decision frameworks, reasoning patterns, confidence scoring, and autonomous action selection.',
    author: 'Dr. Marcus Chen',
    date: 'January 23, 2025',
    readTime: '18 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=1200',
    page: 'BlogAutonomousDecisionCapabilities'
  },
  {
    title: 'Self-Learning and Adaptive Capabilities in AI Agents',
    excerpt: 'Understand how agents learn from experience and adapt over time. Reinforcement learning, feedback loops, and continuous improvement mechanisms.',
    author: 'Dr. Sarah Kim',
    date: 'January 22, 2025',
    readTime: '17 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=1200',
    page: 'BlogSelfLearningCapabilities'
  },
  {
    title: 'Complex Problem-Solving Capabilities of AI Agents',
    excerpt: 'Discover how agents tackle multi-step problems. Problem decomposition, solution exploration, constraint satisfaction, and optimization strategies.',
    author: 'Kevin Zhang',
    date: 'January 21, 2025',
    readTime: '19 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200',
    page: 'BlogComplexProblemSolving'
  },
  {
    title: 'Natural Language Understanding Capabilities in Agentic AI',
    excerpt: 'Master NLU in AI agents. Intent recognition, entity extraction, context understanding, sentiment analysis, and conversational capabilities.',
    author: 'Rachel Foster',
    date: 'January 20, 2025',
    readTime: '16 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200',
    page: 'BlogNaturalLanguageCapabilities'
  },
  {
    title: 'Multi-Modal Processing: Agents That See, Hear, and Understand',
    excerpt: 'Explore multi-modal AI capabilities. Vision processing, speech recognition, image generation, cross-modal reasoning, and unified understanding.',
    author: 'Dr. Emily Carter',
    date: 'January 19, 2025',
    readTime: '18 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1655720828018-edd2daec9349?w=1200',
    page: 'BlogMultiModalProcessing'
  },
  {
    title: 'Planning and Strategy Capabilities in AI Agents',
    excerpt: 'Learn how agents plan ahead and strategize. Goal decomposition, action sequencing, resource allocation, and long-term planning capabilities.',
    author: 'Michael Rodriguez',
    date: 'January 18, 2025',
    readTime: '17 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
    page: 'BlogPlanningStrategyCapabilities'
  },
  {
    title: 'Collaboration Capabilities: How AI Agents Work Together',
    excerpt: 'Understand agent-to-agent collaboration. Communication protocols, task delegation, shared memory, conflict resolution, and team coordination.',
    author: 'Jennifer Martinez',
    date: 'January 17, 2025',
    readTime: '16 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    page: 'BlogCollaborationCapabilities'
  },
  {
    title: 'Real-Time Reasoning: How Agents Think on Their Feet',
    excerpt: 'Explore real-time reasoning capabilities. Dynamic problem solving, context switching, interrupt handling, and adaptive response generation.',
    author: 'Dr. Alex Thompson',
    date: 'January 16, 2025',
    readTime: '15 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    page: 'BlogRealTimeReasoning'
  },
  {
    title: 'Memory and Context Management in AI Agents',
    excerpt: 'Master how agents store and retrieve information. Short-term memory, long-term storage, context windows, and memory optimization strategies.',
    author: 'Dr. Marcus Chen',
    date: 'January 24, 2025',
    readTime: '16 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?w=1200',
    page: 'BlogMemoryContextManagement'
  },
  {
    title: 'Tool Use and Function Calling Capabilities in AI Agents',
    excerpt: 'Learn how agents interact with external tools and APIs. Function calling, parameter extraction, tool selection, and execution patterns.',
    author: 'Kevin Zhang',
    date: 'January 23, 2025',
    readTime: '18 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=1200',
    page: 'BlogToolUseFunctionCalling'
  },
  {
    title: 'Reasoning and Logic Capabilities in Agentic AI',
    excerpt: 'Explore logical reasoning in AI agents. Deductive reasoning, inductive learning, analogical thinking, and causal inference.',
    author: 'Dr. Sarah Mitchell',
    date: 'January 22, 2025',
    readTime: '17 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?w=1200',
    page: 'BlogReasoningLogicCapabilities'
  },
  {
    title: 'Knowledge Retrieval Capabilities: How Agents Find Information',
    excerpt: 'Master information retrieval in AI agents. Vector search, semantic similarity, ranking algorithms, and retrieval optimization.',
    author: 'Rachel Foster',
    date: 'January 21, 2025',
    readTime: '16 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?w=1200',
    page: 'BlogKnowledgeRetrievalCapabilities'
  },
  {
    title: 'Task Execution and Workflow Capabilities in AI Agents',
    excerpt: 'Learn how agents execute complex workflows. Task orchestration, parallel execution, error recovery, and workflow optimization.',
    author: 'Michael Rodriguez',
    date: 'January 20, 2025',
    readTime: '19 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=1200',
    page: 'BlogTaskExecutionWorkflow'
  },
  {
    title: 'Perception and Observation Capabilities in AI Agents',
    excerpt: 'Understand how agents perceive their environment. State detection, change monitoring, pattern recognition, and environmental awareness.',
    author: 'Dr. Emily Carter',
    date: 'January 19, 2025',
    readTime: '15 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200',
    page: 'BlogPerceptionObservation'
  },
  {
    title: 'Goal Management and Prioritization in AI Agents',
    excerpt: 'Master goal handling in AI agents. Goal setting, priority scoring, conflict resolution, and dynamic goal adjustment.',
    author: 'Jennifer Martinez',
    date: 'January 18, 2025',
    readTime: '14 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=1200',
    page: 'BlogGoalManagementPrioritization'
  },
  {
    title: 'Learning from Feedback: How AI Agents Improve Through Interaction',
    excerpt: 'Explore feedback mechanisms in AI agents. User corrections, implicit signals, reinforcement learning, and continuous improvement cycles.',
    author: 'Dr. Alex Thompson',
    date: 'January 17, 2025',
    readTime: '17 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200',
    page: 'BlogLearningFromFeedback'
  },
  {
    title: 'Agent Architecture Fundamentals: Building Blocks of Autonomous AI',
    excerpt: 'Master the core components of agent architecture. Control loops, decision engines, memory systems, and modular design patterns.',
    author: 'Dr. Marcus Chen',
    date: 'January 25, 2025',
    readTime: '19 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    page: 'BlogAgentArchitectureFundamentals'
  },
  {
    title: 'Prompt Design Patterns for AI Agents: System Instructions Guide',
    excerpt: 'Craft effective system prompts for agents. Role definition, constraint setting, output formatting, and behavior tuning strategies.',
    author: 'Rachel Foster',
    date: 'January 24, 2025',
    readTime: '16 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1200',
    page: 'BlogPromptDesignPatterns'
  },
  {
    title: 'Agent State Management: Tracking Context and Progress',
    excerpt: 'Learn how to manage agent state effectively. State persistence, transitions, recovery, and distributed state synchronization.',
    author: 'Kevin Zhang',
    date: 'January 23, 2025',
    readTime: '17 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    page: 'BlogAgentStateManagement'
  },
  {
    title: 'Inter-Agent Communication Protocols: Building Connected Systems',
    excerpt: 'Design robust communication between agents. Message formats, protocols, event buses, and coordination patterns.',
    author: 'Dr. Sarah Mitchell',
    date: 'January 22, 2025',
    readTime: '18 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=1200',
    page: 'BlogInterAgentCommunication'
  },
  {
    title: 'Agent Reliability and Resilience: Building Fault-Tolerant Systems',
    excerpt: 'Build agents that handle failures gracefully. Circuit breakers, timeouts, retries, fallbacks, and self-healing patterns.',
    author: 'Michael Rodriguez',
    date: 'January 21, 2025',
    readTime: '20 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200',
    page: 'BlogAgentReliabilityResilience'
  },
  {
    title: 'Performance Optimization for AI Agents: Speed and Efficiency',
    excerpt: 'Optimize agent performance. Latency reduction, parallel execution, caching strategies, and resource management.',
    author: 'Dr. Emily Carter',
    date: 'January 20, 2025',
    readTime: '16 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200',
    page: 'BlogAgentPerformanceOptimization'
  },
  {
    title: 'Testing and Validation Strategies for AI Agents',
    excerpt: 'Comprehensive testing approaches for agents. Unit tests, integration tests, behavior validation, and quality assurance.',
    author: 'Jennifer Martinez',
    date: 'January 19, 2025',
    readTime: '18 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
    page: 'BlogAgentTestingValidation'
  },
  {
    title: 'Agent Deployment Strategies: From Development to Production',
    excerpt: 'Deploy agents safely to production. Blue-green deployments, canary releases, gradual rollouts, and rollback procedures.',
    author: 'David Park',
    date: 'January 18, 2025',
    readTime: '17 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=1200',
    page: 'BlogAgentDeploymentStrategies'
  },
  {
    title: 'Context Window Optimization for AI Applications',
    excerpt: 'Maximize context efficiency in AI apps. Token management, context compression, sliding windows, and memory optimization strategies.',
    author: 'Dr. Sarah Kim',
    date: 'January 26, 2025',
    readTime: '16 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=1200',
    page: 'BlogContextWindowOptimization'
  },
  {
    title: 'Streaming and Real-Time AI Responses: Building Responsive Apps',
    excerpt: 'Implement streaming for instant feedback. Server-sent events, WebSockets, progressive rendering, and real-time UX patterns.',
    author: 'Michael Rodriguez',
    date: 'January 25, 2025',
    readTime: '15 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    page: 'BlogStreamingRealTimeAI'
  },
  {
    title: 'Multi-Model Orchestration in AI Applications',
    excerpt: 'Coordinate multiple AI models effectively. Model routing, fallback chains, ensemble methods, and cost-performance optimization.',
    author: 'Dr. Alex Thompson',
    date: 'January 24, 2025',
    readTime: '18 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200',
    page: 'BlogMultiModelOrchestration'
  },
  {
    title: 'Vector Database Integration for AI Applications',
    excerpt: 'Master vector databases for AI apps. Embeddings, similarity search, indexing strategies, and production deployment patterns.',
    author: 'Kevin Zhang',
    date: 'January 23, 2025',
    readTime: '17 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1200',
    page: 'BlogVectorDatabaseIntegration'
  },
  {
    title: 'AI Application Observability and Debugging',
    excerpt: 'Debug AI apps effectively. Tracing, logging, replay systems, LLM call inspection, and troubleshooting methodologies.',
    author: 'Rachel Foster',
    date: 'January 22, 2025',
    readTime: '19 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200',
    page: 'BlogAIObservabilityDebugging'
  },
  {
    title: 'Rate Limiting and Quota Management for AI Applications',
    excerpt: 'Control AI usage and costs. User quotas, rate limiting strategies, fair usage policies, and overage handling.',
    author: 'Jennifer Martinez',
    date: 'January 21, 2025',
    readTime: '14 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1200',
    page: 'BlogRateLimitingQuotaManagement'
  },
  {
    title: 'AI Response Quality and Consistency: Ensuring Reliable Outputs',
    excerpt: 'Maintain output quality across requests. Validation schemas, consistency checks, quality scoring, and improvement loops.',
    author: 'Dr. Emily Carter',
    date: 'January 20, 2025',
    readTime: '16 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200',
    page: 'BlogAIResponseQuality'
  },
  {
    title: 'Building AI Plugins and Extensions: Modular AI Architecture',
    excerpt: 'Create extensible AI applications. Plugin systems, extension APIs, marketplace patterns, and third-party integration frameworks.',
    author: 'David Park',
    date: 'January 19, 2025',
    readTime: '18 min read',
    category: 'Agentic Capabilities',
    image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1200',
    page: 'BlogAIPluginsExtensions'
  },
  {
    title: 'Generative AI Content Moderation: Balancing Safety and Innovation',
    excerpt: 'Build robust content moderation systems for generative AI. Safety layers, toxicity detection, brand safety, and user protection strategies.',
    author: 'Rachel Foster',
    date: 'December 25, 2024',
    readTime: '14 min read',
    category: 'Generative AI',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/42c6ece83_generated_image.png',
    page: 'BlogGenerativeAIEthics'
  }
];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [displayedPosts, setDisplayedPosts] = useState(12);
  const [isLoading, setIsLoading] = useState(false);
  const loaderRef = useRef(null);

  const filteredPosts = activeCategory === 'all'
    ? posts
    : posts.filter(post => post.category.toLowerCase().replace(/\s+/g, '-') === activeCategory);

  const postsToShow = filteredPosts.slice(0, displayedPosts);
  const hasMore = displayedPosts < filteredPosts.length;

  useEffect(() => {
    setDisplayedPosts(12);
  }, [activeCategory]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && hasMore && !isLoading) {
          loadMore();
        }
      },
      { threshold: 0.5 }
    );

    if (loaderRef.current) {
      observer.observe(loaderRef.current);
    }

    return () => observer.disconnect();
  }, [hasMore, isLoading, displayedPosts]);

  const loadMore = () => {
    setIsLoading(true);
    setTimeout(() => {
      setDisplayedPosts(prev => prev + 9);
      setIsLoading(false);
    }, 800);
  };

  return (
    <div className="bg-white">
      <PageMeta 
        title="Blog"
        description="Insights, tutorials, and stories from the forefront of enterprise AI. Learn about Agentic AI, autonomous agents, implementation strategies, and digital transformation."
        url="/blog"
        keywords={['AI blog', 'Agentic AI articles', 'enterprise AI insights', 'AI tutorials', 'autonomous agents']}
        collectionPage
        schemas={[
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            name: '1C Platform Blog Articles',
            description: 'Insights, tutorials, and stories from the forefront of enterprise AI',
            numberOfItems: posts.length,
            itemListElement: posts.map((post, idx) => ({
              '@type': 'ListItem',
              position: idx + 1,
              name: post.title,
              url: `https://1cplatform.com/${post.page}`,
              image: post.image,
            })),
          }
        ]}
      />
      {/* Hero */}
      <section className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 sm:mb-8 leading-tight">
              The
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                Agentic Ai Blog
              </span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 leading-relaxed mb-6 sm:mb-10">
              Insights, tutorials, and stories from the forefront of enterprise AI
            </p>
            
            {/* Search */}
            <div className="relative max-w-2xl mx-auto">
              <Search className="absolute left-4 sm:left-6 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
              <Input
                placeholder="Search articles..."
                className="pl-12 sm:pl-16 pr-4 sm:pr-6 h-12 sm:h-16 text-base sm:text-lg rounded-full border-gray-300 bg-white shadow-sm"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 sm:py-6 border-b border-gray-200 sticky top-16 bg-white z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="overflow-x-auto pb-2 -mb-2 scrollbar-hide">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
              <TabsList className="bg-gray-100 rounded-full inline-flex w-auto h-auto p-1.5 gap-1">
                <TabsTrigger value="all" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">All</TabsTrigger>
                <TabsTrigger value="agentic-design" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Design</TabsTrigger>
                <TabsTrigger value="ai-autonomy" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Autonomy</TabsTrigger>
                <TabsTrigger value="ai-comparison" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Comparison</TabsTrigger>
                <TabsTrigger value="ai-governance" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Governance</TabsTrigger>
                <TabsTrigger value="generative-ai" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Generative AI</TabsTrigger>
                <TabsTrigger value="agentic-capabilities" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Capabilities</TabsTrigger>
                <TabsTrigger value="ai-insights" className="text-xs sm:text-sm px-4 sm:px-5 py-2 whitespace-nowrap rounded-full">Agentic Insights</TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {postsToShow.map((post, index) => (
              <Link to={createPageUrl(post.page)} key={post.title}>
                <motion.article
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index % 12) * 0.05 }}
                  className="group cursor-pointer"
                >
                <div className="relative aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-4 sm:mb-6">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <Badge variant="secondary" className="mb-2 sm:mb-3 text-xs sm:text-sm">{post.category}</Badge>
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-[#8B2EE5] transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4 leading-relaxed line-clamp-2">{post.excerpt}</p>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3 lg:gap-4 text-xs sm:text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>{post.readTime}</span>
                </div>
              </motion.article>
              </Link>
            ))}
          </div>

          {/* Progressive Loader */}
          {hasMore && (
            <div ref={loaderRef} className="text-center mt-8 sm:mt-12">
              {isLoading ? (
                <div className="flex items-center justify-center gap-2 text-gray-600">
                  <Loader2 className="w-5 h-5 animate-spin" />
                  <span>Loading more articles...</span>
                </div>
              ) : (
                <Button 
                  onClick={loadMore}
                  variant="outline" 
                  className="w-full sm:w-auto rounded-full border-gray-300 px-6 sm:px-8"
                >
                  Load more articles
                </Button>
              )}
            </div>
          )}

          {!hasMore && filteredPosts.length > 12 && (
            <div className="text-center mt-8 sm:mt-12 text-gray-500">
              You've reached the end of the articles
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Never miss an update
            </h2>
            <p className="text-lg sm:text-xl text-gray-400 mb-6 sm:mb-10">
              Get the latest insights delivered to your inbox every week
            </p>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 max-w-md mx-auto">
              <Input
                placeholder="Enter your email"
                className="flex-1 h-12 bg-white/10 border-white/20 text-white placeholder:text-gray-400"
              />
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] h-12 px-6 w-full sm:w-auto">
                Subscribe
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}