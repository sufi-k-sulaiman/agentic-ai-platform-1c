import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { MessageSquare, Calendar, Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';
import PageMeta from '@/components/PageMeta';
import TicketForm from '@/components/contact/TicketForm';
import CallScheduleForm from '@/components/contact/CallScheduleForm';
import EmailForm from '@/components/contact/EmailForm';

export default function Contact() {
  const [selectedOption, setSelectedOption] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const options = [
    {
      id: 'ticket',
      icon: MessageSquare,
      title: 'Create a Ticket',
      description: 'Get help from our support team',
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 'call',
      icon: Calendar,
      title: 'Schedule a Call',
      description: 'Book time with our experts',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Send an Email',
      description: 'Reach out via email',
      color: 'from-green-500 to-emerald-500'
    }
  ];

  const handleSuccess = () => {
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setSelectedOption(null);
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#7C3AED] via-[#8B2EE5] to-[#6B21A8]">
      <PageMeta 
        title="Contact Support"
        description="Get help from our 24/7 support team. Create a ticket, schedule a call, or send us an email."
        url="/contact"
      />

      <div className="max-w-6xl mx-auto px-6 py-20">
        <AnimatePresence mode="wait">
          {!selectedOption && !submitted && (
            <motion.div
              key="options"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-center text-white max-w-6xl mx-auto"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-32 h-32 mx-auto mb-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-4 border-white/20"
              >
                <MessageSquare className="w-16 h-16 stroke-[2]" />
              </motion.div>

              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
              >
                Still need help?
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-white/90 mb-16"
              >
                Our support team is available 24/7 to assist you
              </motion.p>

              <div className="grid md:grid-cols-3 gap-6">
                {options.map((option, index) => (
                  <motion.button
                    key={option.id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    onClick={() => setSelectedOption(option.id)}
                    className="group"
                  >
                    <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-3xl p-10 hover:bg-white/20 hover:scale-105 transition-all duration-300">
                      <option.icon className="w-16 h-16 mx-auto mb-6 text-white stroke-[1.5]" />
                      <h3 className="text-2xl font-bold mb-3">{option.title}</h3>
                      <p className="text-white/80">{option.description}</p>
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}

          {selectedOption && !submitted && (
            <motion.div
              key="form"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
            >
              <Button
                variant="ghost"
                className="text-white hover:bg-white/10 mb-8"
                onClick={() => setSelectedOption(null)}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to options
              </Button>

              <div className="bg-white rounded-3xl p-8 md:p-12 max-w-3xl mx-auto">
                {selectedOption === 'ticket' && <TicketForm onSuccess={handleSuccess} />}
                {selectedOption === 'call' && <CallScheduleForm onSuccess={handleSuccess} />}
                {selectedOption === 'email' && <EmailForm onSuccess={handleSuccess} />}
              </div>
            </motion.div>
          )}

          {submitted && (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="text-center text-white py-20"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", delay: 0.2 }}
                className="w-32 h-32 mx-auto mb-8 bg-green-500 rounded-full flex items-center justify-center"
              >
                <CheckCircle2 className="w-16 h-16" />
              </motion.div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4">Success!</h2>
              <p className="text-xl text-purple-100">We've received your request and will get back to you soon.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}