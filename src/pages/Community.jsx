import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Textarea } from '@/components/ui/textarea';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { Users, MessageSquare, ThumbsUp, MessageCircle, Eye, Pin, TrendingUp, Clock, Sparkles, Bot, Shield, Brain, Zap, ChevronRight, Send } from 'lucide-react';

const categories = [
  { id: 'all', name: 'All Discussions', icon: MessageSquare, count: 1547 },
  { id: 'generative-ai', name: 'Generative AI', icon: Sparkles, count: 423 },
  { id: 'agentic-ai', name: 'Agentic AI', icon: Bot, count: 389 },
  { id: 'governance', name: 'AI Governance', icon: Shield, count: 267 },
  { id: 'ml-ops', name: 'ML & AI Ops', icon: Brain, count: 312 },
  { id: 'products', name: 'Products & Features', icon: Zap, count: 156 }
];

const discussions = [
  {
    id: 1,
    title: 'Best practices for deploying Agentic AI at enterprise scale',
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100',
      role: 'AI Architect'
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
      name: 'Emily Zhang',
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

  const filteredDiscussions = selectedCategory === 'all' 
    ? discussions 
    : discussions.filter(d => d.category === selectedCategory);

  return (
    <div className="bg-white">
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
              Discuss generative AI, agentic systems, governance, and more with 100,000+ AI practitioners
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">1,547</div>
              <div className="text-sm text-gray-600">Discussions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">12.4K</div>
              <div className="text-sm text-gray-600">Comments</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">8,234</div>
              <div className="text-sm text-gray-600">Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gray-900 mb-1">342</div>
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
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4]">
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
                  <div className="flex gap-3">
                    <Avatar className="w-10 h-10">
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <Textarea
                        placeholder="Add your reply..."
                        value={newComment}
                        onChange={(e) => setNewComment(e.target.value)}
                        className="mb-3"
                        rows={3}
                      />
                      <Button className="bg-[#8B2EE5] hover:bg-[#7325C4]">
                        <Send className="w-4 h-4 mr-2" />
                        Post Reply
                      </Button>
                    </div>
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