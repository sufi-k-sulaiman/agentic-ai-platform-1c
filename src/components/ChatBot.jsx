import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, MessageCircle, Minimize2, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { base44 } from '@/api/base44Client';

const PLATFORM_CONTEXT = `
You are an AI assistant for 1C Platform, an enterprise Agentic AI platform.

## Products:
- **Agentic AI**: Autonomous AI agents that think, decide, and act. Features cognitive reasoning, real-time execution, multi-agent orchestration, continuous learning, and no-code builder.
- **Enterprise Suite**: All-in-one business management with Financial Management, HR & Payroll, Supply Chain, CRM, Business Intelligence, and Document Management.
- **Cloud Platform**: Enterprise cloud infrastructure optimized for AI workloads with auto-scaling, global network, Kubernetes, managed databases, and 99.99% uptime.
- **Developer Tools**: Comprehensive developer platform with REST/GraphQL APIs, SDKs for 8+ languages, CLI, webhooks, edge functions, and real-time analytics.

## Industries/Verticals:
- Property Management - Tenant onboarding, maintenance, rent collection, lease renewals
- Data Centers - Energy optimization, predictive maintenance, capacity planning
- Financial Services - KYC/AML, loan processing, fraud detection
- Healthcare - Patient scheduling, medical coding, claims processing
- Corporate Campuses - Space management, visitor coordination, energy optimization
- Public Transit - Route optimization, passenger info, fleet maintenance
- Traffic Management - Signal optimization, incident detection, congestion prediction
- Energy & Utilities - Grid optimization, outage prediction, renewable integration
- Retail - Inventory optimization, customer personalization, dynamic pricing
- Education - Student engagement, automated grading, learning analytics
- Gaming - Player matchmaking, cheat detection, LiveOps automation
- Government - Citizen services, document processing, compliance reporting
- Airports - Passenger flow, security screening, baggage handling
- Sports & Entertainment - Fan engagement, ticketing, venue operations

## Key Pages:
- Home - Main platform overview
- Pricing - Starter ($0), Professional ($99/mo), Enterprise (custom)
- AgenticAI - Autonomous AI agents
- EnterpriseSuite - Business management platform
- CloudPlatform - Infrastructure platform
- DeveloperTools - APIs and developer resources
- Documentation - Technical documentation
- About Us - Company information
- Careers - Job opportunities
- Community - User community and events
- Blog - Industry insights and tutorials
- Cyber - Security and compliance
- Help Center - Support resources

## Instructions:
- Be helpful, concise, and informative
- Recommend relevant products and industries based on user questions
- Suggest specific pages when appropriate
- For sales inquiries, offer to schedule a demo or connect with the sales team
- For technical questions, direct to Documentation or DeveloperTools
- For pricing questions, reference the Pricing page with specific tiers
- Keep responses under 150 words unless more detail is needed
`;

export default function ChatBot({ isOpen, onClose }) {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content: 'Hi! 👋 I\'m here to help you learn more about 1C Platform. What can I assist you with today?',
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage = {
      role: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      const conversationHistory = messages
        .map(m => `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`)
        .join('\n');

      const prompt = `${PLATFORM_CONTEXT}

Conversation history:
${conversationHistory}

User: ${userMessage.content}

  const handleKeyPress = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
      className="fixed bottom-6 right-6 w-[400px] h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-50 border border-gray-200"
    >
      {/* Header */}
      <div className="bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] p-4 rounded-t-2xl flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-[#8B2EE5]" />
          </div>
          <div>
            <h3 className="font-semibold text-white">1C Platform Support</h3>
            <p className="text-xs text-purple-100">Typically replies instantly</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
          >
            <Minimize2 className="w-5 h-5" />
          </button>
          <button
            onClick={onClose}
            className="text-white hover:bg-white/20 rounded-lg p-1 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div
              className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                message.role === 'user'
                  ? 'bg-[#8B2EE5] text-white'
                  : 'bg-gray-100 text-gray-900'
              }`}
            >
              <p className="text-sm leading-relaxed">{message.content}</p>
              <p className={`text-xs mt-1 ${message.role === 'user' ? 'text-purple-200' : 'text-gray-500'}`}>
                {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </p>
            </div>
          </motion.div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick Actions */}
      <div className="px-4 py-2 border-t border-gray-100">
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => {
              setInputValue('I want to schedule a demo');
              setTimeout(handleSend, 100);
            }}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
          >
            Schedule Demo
          </button>
          <button
            onClick={() => {
              setInputValue('Tell me about pricing');
              setTimeout(handleSend, 100);
            }}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
          >
            Pricing Info
          </button>
          <button
            onClick={() => {
              setInputValue('How does it work?');
              setTimeout(handleSend, 100);
            }}
            className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1.5 rounded-full transition-colors"
          >
            How it works
          </button>
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-100">
        <div className="flex gap-2">
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyPress={handleKeyPress}
            placeholder="Type your message..."
            className="flex-1"
          />
          <Button
            onClick={handleSend}
            className="bg-[#8B2EE5] hover:bg-[#7325C4] px-4"
          >
            <Send className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
}

export function ChatBotTrigger({ onClick }) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 w-16 h-16 bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] rounded-full shadow-2xl flex items-center justify-center z-40 hover:shadow-[#8B2EE5]/50 transition-shadow"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </motion.button>
  );
}