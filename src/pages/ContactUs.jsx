import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, MessageSquare, Clock, Send, ArrowRight, Headphones, Building2, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import InternalLinker from '@/components/seo/InternalLinker';
import RelatedContent from '@/components/seo/RelatedContent';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { base44 } from '@/api/base44Client';
import toast from 'react-hot-toast';

export default function ContactUs() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields');
      return;
    }
    setIsSubmitting(true);
    try {
      await base44.entities.ContactMessage.create({
        name: formData.name,
        email: formData.email,
        subject: formData.subject || 'General Inquiry',
        message: formData.message,
        status: 'New',
      });
      toast.success('Message sent! We\'ll get back to you within 24 hours.');
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white min-h-screen">
      <PageMeta
        title="Contact Us - 1C Platform"
        description="Get in touch with the 1C Platform team. Sales inquiries, technical support, partnerships, and general questions. Reach us by email, phone, or submit a message online."
        url="/ContactUs"
        keywords={['contact us', 'contact 1c platform', 'sales inquiry', 'technical support', 'partnership', 'get in touch']}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Contact Us', url: '/ContactUs' }]}
      />

      <section className="pt-32 pb-12 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-6xl mx-auto px-6">
          <BreadcrumbNav items={[{ label: 'Contact Us' }]} />
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">Get in Touch</h1>
            <p className="text-xl text-gray-600 max-w-2xl">
              We're here to help. Whether you have a question about our platform, need technical support, or want to explore a partnership, our team is ready to assist you.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <InternalLinker currentPage="ContactUs">
                <div className="bg-white border border-gray-200 rounded-2xl p-8">
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input id="name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} placeholder="Your name" className="mt-2" required />
                      </div>
                      <div>
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} placeholder="you@company.com" className="mt-2" required />
                      </div>
                    </div>
                    <div>
                      <Label htmlFor="subject">Subject</Label>
                      <Input id="subject" value={formData.subject} onChange={(e) => setFormData({ ...formData, subject: e.target.value })} placeholder="How can we help?" className="mt-2" />
                    </div>
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea id="message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} placeholder="Tell us more about your inquiry..." className="mt-2 min-h-[150px]" required />
                    </div>
                    <Button type="submit" disabled={isSubmitting} className="w-full bg-[#8B2EE5] hover:bg-[#7325C4] text-white h-12">
                      {isSubmitting ? 'Sending...' : <>Send Message <Send className="w-4 h-4 ml-2" /></>}
                    </Button>
                  </form>
                </div>
              </InternalLinker>
            </div>

            <div className="space-y-6">
              <div className="bg-gradient-to-br from-[#8B2EE5] to-[#6D28D9] rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Channels</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-3">
                    <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Email</div>
                      <div className="text-sm text-purple-100">hello@1cplatform.com</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Phone</div>
                      <div className="text-sm text-purple-100">+1 (888) 555-0100</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Headphones className="w-5 h-5 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="font-semibold">Support</div>
                      <div className="text-sm text-purple-100">support@1cplatform.com</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Clock className="w-5 h-5 text-[#8B2EE5]" />Response Times</h3>
                <ul className="space-y-3 text-sm text-gray-600">
                  <li className="flex items-center justify-between"><span>Sales inquiries</span><span className="font-semibold">&lt; 4 hours</span></li>
                  <li className="flex items-center justify-between"><span>Technical support</span><span className="font-semibold">&lt; 24 hours</span></li>
                  <li className="flex items-center justify-between"><span>Partnerships</span><span className="font-semibold">&lt; 48 hours</span></li>
                  <li className="flex items-center justify-between"><span>General questions</span><span className="font-semibold">&lt; 48 hours</span></li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 rounded-2xl p-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2"><Building2 className="w-5 h-5 text-[#8B2EE5]" />Office</h3>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-start gap-2"><MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" /><span>123 Innovation Drive, Suite 400<br />San Francisco, CA 94107</span></div>
                  <div className="flex items-center gap-2"><Globe className="w-4 h-4" /><span>Mon-Fri, 9am-6pm PT</span></div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 grid md:grid-cols-3 gap-6">
            <Link to={createPageUrl('HelpCenter')} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200">
              <MessageSquare className="w-8 h-8 text-[#8B2EE5] mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Help Center</h3>
              <p className="text-sm text-gray-600 mb-3">Browse our knowledge base, tutorials, and FAQs.</p>
              <span className="text-[#8B2EE5] text-sm font-semibold flex items-center gap-1">Visit <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to={createPageUrl('Documentation')} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200">
              <ArrowRight className="w-8 h-8 text-[#8B2EE5] mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Documentation</h3>
              <p className="text-sm text-gray-600 mb-3">Read our API docs, guides, and integration examples.</p>
              <span className="text-[#8B2EE5] text-sm font-semibold flex items-center gap-1">Explore <ArrowRight className="w-4 h-4" /></span>
            </Link>
            <Link to={createPageUrl('Onboarding')} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-200">
              <ArrowRight className="w-8 h-8 text-[#8B2EE5] mb-3" />
              <h3 className="font-bold text-gray-900 mb-2">Get Started</h3>
              <p className="text-sm text-gray-600 mb-3">Begin your AI transformation journey with a free trial.</p>
              <span className="text-[#8B2EE5] text-sm font-semibold flex items-center gap-1">Start now <ArrowRight className="w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>
      <RelatedContent currentPage="ContactUs" manualPages={['HelpCenter', 'Documentation', 'Onboarding', 'Events']} title="Explore More" />
    </div>
  );
}