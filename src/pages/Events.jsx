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
    title: 'Agentic AI Developer Meetup',
    date: 'Monthly - Last Friday',
    time: '6:00 PM - 9:00 PM Local',
    location: 'Multiple Cities (US, CA, UK)',
    format: 'In-person',
    attendees: '150+',
    description: 'Monthly gatherings for developers building multi-agent systems and autonomous workflows.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
    type: 'meetup'
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