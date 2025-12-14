import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send } from 'lucide-react';

const contactMethods = [
  {
    icon: MessageSquare,
    title: 'Live Chat',
    description: 'Chat with our team in real-time',
    details: 'Average response: 2 minutes',
    cta: 'Start chat',
    color: 'bg-blue-500'
  },
  {
    icon: Mail,
    title: 'Email Support',
    description: 'Send us a detailed message',
    details: 'support@1cplatform.com',
    cta: 'Send email',
    color: 'bg-purple-500'
  },
  {
    icon: Phone,
    title: 'Phone Support',
    description: 'Speak with a specialist',
    details: '+1 (800) 123-4567',
    cta: 'Call now',
    color: 'bg-green-500'
  }
];

const offices = [
  {
    city: 'San Francisco',
    address: '123 Market Street, Suite 500',
    zipcode: 'San Francisco, CA 94103',
    country: 'United States'
  },
  {
    city: 'London',
    address: '45 Finsbury Square',
    zipcode: 'London EC2A 1PX',
    country: 'United Kingdom'
  },
  {
    city: 'Singapore',
    address: '1 Marina Boulevard, #20-01',
    zipcode: 'Singapore 018989',
    country: 'Singapore'
  },
  {
    city: 'Sydney',
    address: '100 Harris Street, Pyrmont',
    zipcode: 'Sydney NSW 2009',
    country: 'Australia'
  }
];

export default function ContactUs() {
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
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Get in
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                touch
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              Have a question? We're here to help. Reach out and we'll get back to you as soon as possible.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {contactMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all text-center">
                  <CardHeader>
                    <div className={`w-14 h-14 ${method.color} rounded-xl flex items-center justify-center mx-auto mb-4`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <CardTitle className="text-xl mb-2">{method.title}</CardTitle>
                    <p className="text-gray-600 text-sm">{method.description}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-gray-500 mb-4">{method.details}</p>
                    <Button className="w-full rounded-full bg-gray-900 hover:bg-gray-800">
                      {method.cta}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Send us a message</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below and we'll get back to you within 24 hours
              </p>

              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="firstName">First name</Label>
                    <Input id="firstName" placeholder="John" className="h-12" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName">Last name</Label>
                    <Input id="lastName" placeholder="Doe" className="h-12" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Work email</Label>
                  <Input id="email" type="email" placeholder="john@company.com" className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company">Company</Label>
                  <Input id="company" placeholder="Acme Inc." className="h-12" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="topic">Topic</Label>
                  <Select>
                    <SelectTrigger className="h-12">
                      <SelectValue placeholder="Select a topic" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="sales">Sales inquiry</SelectItem>
                      <SelectItem value="support">Technical support</SelectItem>
                      <SelectItem value="partnership">Partnership</SelectItem>
                      <SelectItem value="press">Press inquiry</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us how we can help..."
                    className="min-h-32"
                  />
                </div>

                <Button type="submit" className="w-full bg-[#8B2EE5] hover:bg-[#7325C4] h-12 rounded-full">
                  <Send className="w-4 h-4 mr-2" />
                  Send message
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Clock className="w-6 h-6 text-[#8B2EE5]" />
                    <CardTitle>Support hours</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Monday - Friday</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Weekend</span>
                    <span className="font-medium">24/7</span>
                  </div>
                  <p className="text-sm text-gray-500 mt-4">
                    Enterprise customers receive priority 24/7 support
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-6 h-6 text-[#8B2EE5]" />
                    <CardTitle>Email us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-500">General inquiries</p>
                    <a href="mailto:hello@1cplatform.com" className="text-[#8B2EE5] hover:underline">
                      hello@1cplatform.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Technical support</p>
                    <a href="mailto:support@1cplatform.com" className="text-[#8B2EE5] hover:underline">
                      support@1cplatform.com
                    </a>
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">Sales</p>
                    <a href="mailto:sales@1cplatform.com" className="text-[#8B2EE5] hover:underline">
                      sales@1cplatform.com
                    </a>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <Phone className="w-6 h-6 text-[#8B2EE5]" />
                    <CardTitle>Call us</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">North America</p>
                  <p className="font-semibold text-xl mb-4">+1 (800) 123-4567</p>
                  <p className="text-gray-600 mb-2">Europe</p>
                  <p className="font-semibold text-xl">+44 20 1234 5678</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Locations */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our offices
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Visit us at one of our global locations
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {offices.map((office, index) => (
              <motion.div
                key={office.city}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                      <MapPin className="w-6 h-6 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-xl mb-2">{office.city}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-sm text-gray-600">
                    <p>{office.address}</p>
                    <p>{office.zipcode}</p>
                    <p className="font-medium mt-2">{office.country}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}