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

const events = [
  {
    title: 'AI Developer Summit 2025',
    date: 'June 15-17, 2025',
    time: '9:00 AM - 6:00 PM PST',
    location: 'San Francisco, CA',
    format: 'Hybrid',
    attendees: '5,000+',
    description: 'Three days of hands-on workshops, keynotes, and networking with AI leaders.',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800',
    type: 'conference',
    featured: true
  },
  {
    title: 'Building Autonomous Agents Workshop',
    date: 'April 10, 2025',
    time: '2:00 PM - 4:00 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '500+',
    description: 'Hands-on workshop teaching you to build and deploy your first autonomous AI agent.',
    image: 'https://images.unsplash.com/photo-1591115765373-5207764f72e7?w=800',
    type: 'workshop'
  },
  {
    title: 'Monthly Community Meetup',
    date: 'Every 3rd Thursday',
    time: '5:00 PM - 7:00 PM Local',
    location: 'Multiple Cities',
    format: 'In-person',
    attendees: '100+',
    description: 'Connect with local developers, share projects, and learn from each other.',
    image: 'https://images.unsplash.com/photo-1528605105345-5344ea20e269?w=800',
    type: 'meetup'
  },
  {
    title: 'Enterprise AI Implementation Webinar',
    date: 'March 28, 2025',
    time: '11:00 AM - 12:00 PM EST',
    location: 'Virtual',
    format: 'Online',
    attendees: '1,000+',
    description: 'Learn best practices for implementing AI at enterprise scale with real case studies.',
    image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800',
    type: 'webinar'
  },
  {
    title: 'AI Hackathon: Build the Future',
    date: 'July 20-22, 2025',
    time: '48 hours',
    location: 'Global',
    format: 'Virtual',
    attendees: '2,000+',
    description: '$100K in prizes for teams building innovative AI solutions.',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800',
    type: 'hackathon'
  },
  {
    title: 'Product Launch: What\'s New in 2025',
    date: 'April 15, 2025',
    time: '10:00 AM PST',
    location: 'Virtual',
    format: 'Online',
    attendees: '10,000+',
    description: 'Join us for the unveiling of our latest features and product updates.',
    image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=800',
    type: 'webinar'
  }
];

export default function Events() {
  const [activeTab, setActiveTab] = useState('all');
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [showRegistration, setShowRegistration] = useState(false);

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
              <Calendar className="w-8 h-8 text-white" />
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Upcoming
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
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
              <Card className="overflow-hidden border-2 border-[#8B2EE5]">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative aspect-video lg:aspect-auto">
                    <img
                      src={featuredEvent.image}
                      alt={featuredEvent.title}
                      className="w-full h-full object-cover"
                    />
                    <Badge className="absolute top-4 left-4 bg-[#8B2EE5] text-white">
                      Featured Event
                    </Badge>
                  </div>
                  <CardContent className="p-8 lg:p-12 flex flex-col justify-center">
                    <CardTitle className="text-4xl mb-4">{featuredEvent.title}</CardTitle>
                    <p className="text-xl text-gray-600 mb-6">{featuredEvent.description}</p>
                    
                    <div className="grid grid-cols-2 gap-4 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Calendar className="w-5 h-5 text-[#8B2EE5]" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Date</div>
                          <div className="font-medium">{featuredEvent.date}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <MapPin className="w-5 h-5 text-[#8B2EE5]" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Location</div>
                          <div className="font-medium">{featuredEvent.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Users className="w-5 h-5 text-[#8B2EE5]" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Attendees</div>
                          <div className="font-medium">{featuredEvent.attendees}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                          <Video className="w-5 h-5 text-[#8B2EE5]" />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500">Format</div>
                          <div className="font-medium">{featuredEvent.format}</div>
                        </div>
                      </div>
                    </div>

                    <Button 
                      onClick={() => handleRegisterClick(featuredEvent)}
                      className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full w-full md:w-auto"
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
                    <CardTitle className="text-xl mb-2 group-hover:text-[#8B2EE5] transition-colors">
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

      {/* CTA */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Host your own event
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Interested in organizing a community meetup or workshop? We'll support you!
            </p>
            <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-14">
              Contact us <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
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