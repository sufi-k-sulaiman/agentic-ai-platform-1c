import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Users, MessageSquare, Github, Twitter, Linkedin, Youtube, ArrowRight, Calendar, Award } from 'lucide-react';

const channels = [
  {
    icon: MessageSquare,
    name: 'Discord Community',
    members: '25K+',
    description: 'Join our active community for real-time discussions, help, and networking.',
    cta: 'Join Discord',
    color: 'bg-indigo-500'
  },
  {
    icon: Github,
    name: 'GitHub Discussions',
    members: '15K+',
    description: 'Share code, report issues, and contribute to open-source projects.',
    cta: 'View GitHub',
    color: 'bg-gray-800'
  },
  {
    icon: Twitter,
    name: 'Twitter',
    members: '50K+',
    description: 'Follow for product updates, tips, and AI industry insights.',
    cta: 'Follow Us',
    color: 'bg-sky-500'
  },
  {
    icon: Youtube,
    name: 'YouTube',
    members: '30K+',
    description: 'Video tutorials, webinars, and deep dives into platform features.',
    cta: 'Subscribe',
    color: 'bg-red-600'
  }
];

const contributors = [
  {
    name: 'Sarah Chen',
    role: 'Top Contributor',
    contributions: '500+ answers'
  },
  {
    name: 'Michael Rodriguez',
    role: 'Community Hero',
    contributions: '450+ answers'
  },
  {
    name: 'Emily Zhang',
    role: 'Rising Star',
    contributions: '300+ answers'
  },
  {
    name: 'David Kim',
    role: 'Expert',
    contributions: '280+ answers'
  }
];

const events = [
  {
    title: 'AI Developer Summit 2025',
    date: 'June 15, 2025',
    location: 'San Francisco + Virtual',
    attendees: '5000+'
  },
  {
    title: 'Monthly Community Meetup',
    date: 'Every 3rd Thursday',
    location: 'Virtual',
    attendees: '500+'
  },
  {
    title: 'Hackathon: Build with AI',
    date: 'July 20-22, 2025',
    location: 'Global',
    attendees: '2000+'
  }
];

export default function Community() {
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
            <div className="w-16 h-16 bg-[#8B2EE5] rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Join the
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                1cPlatform community
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Connect with 100,000+ developers, builders, and AI enthusiasts building the future of enterprise automation.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14 text-base">
                Join Discord <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14 text-base">
                View events
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">100K+</div>
              <div className="text-gray-400">Community members</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">50K+</div>
              <div className="text-gray-400">Forum discussions</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-gray-400">Open-source projects</div>
            </div>
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-gray-400">Community events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Connect with us
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join the conversation across multiple platforms
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {channels.map((channel, index) => (
              <motion.div
                key={channel.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-14 h-14 ${channel.color} rounded-xl flex items-center justify-center`}>
                        <channel.icon className="w-7 h-7 text-white" />
                      </div>
                      <Badge variant="secondary">{channel.members} members</Badge>
                    </div>
                    <CardTitle className="text-2xl mb-2">{channel.name}</CardTitle>
                    <p className="text-gray-600">{channel.description}</p>
                  </CardHeader>
                  <CardContent>
                    <Button className="w-full rounded-full bg-gray-900 hover:bg-gray-800">
                      {channel.cta} <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Top Contributors */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Top contributors
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Meet the community members making a difference
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contributors.map((contributor, index) => (
              <motion.div
                key={contributor.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative inline-block mb-4">
                  <div className="w-24 h-24 rounded-full bg-gray-100 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                      <circle cx="12" cy="8" r="4" />
                      <path d="M6 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                  </div>
                  <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-[#8B2EE5] rounded-full flex items-center justify-center border-4 border-gray-50">
                    <Award className="w-4 h-4 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-gray-900 mb-1">{contributor.name}</h3>
                <p className="text-[#8B2EE5] text-sm font-medium mb-2">{contributor.role}</p>
                <p className="text-sm text-gray-600">{contributor.contributions}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between mb-12">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-2">Upcoming events</h2>
              <p className="text-xl text-gray-600">Join us at these community gatherings</p>
            </div>
            <Button variant="outline" className="rounded-full border-gray-300">
              View calendar
            </Button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {events.map((event, index) => (
              <motion.div
                key={event.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <Calendar className="w-6 h-6 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>{event.date}</p>
                      <p>{event.location}</p>
                      <Badge variant="secondary">{event.attendees} attendees</Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full rounded-full">
                      Learn more
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-br from-[#8B2EE5] to-[#6B21A8] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to get involved?
            </h2>
            <p className="text-xl text-purple-100 mb-10">
              Join thousands of developers building the future of AI together
            </p>
            <Button size="lg" className="bg-white text-[#8B2EE5] hover:bg-gray-100 rounded-full px-10 h-16 text-lg">
              Join the community <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
}