import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const leaders = [
  {
    name: 'Niroshi Nadarajah',
    title: 'Chief Executive Officer',
    bio: 'Visionary leader with 20+ years driving AI innovation and enterprise transformation. Former VP at leading tech companies.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/4918bd092_CEO.png'
  },
  {
    name: 'Suf K Sulaiman',
    title: 'Chief Technology Officer',
    bio: 'Technology pioneer and architect of scalable AI systems. Expert in distributed computing and machine learning infrastructure.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/e26495cc8_CTO.png'
  },
  {
    name: 'Emily Zhang',
    title: 'Chief Product Officer',
    bio: 'Previously Head of Product at Salesforce. Stanford MBA. Built products used by millions.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/06e4281e3_CPO.png'
  },
  {
    name: 'David Kim',
    title: 'Chief Financial Officer',
    bio: 'Former CFO at Snowflake. Led multiple successful IPOs. 20 years in enterprise tech finance.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/b9fad4d11_CFO.png'
  },
  {
    name: 'Priya Patel',
    title: 'Chief Marketing Officer',
    bio: 'Ex-CMO at HubSpot. Built billion-dollar brands from the ground up. Growth marketing expert.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/a80c07556_CMO.png'
  },
  {
    name: 'James Wilson',
    title: 'Chief Operating Officer',
    bio: 'Operations excellence leader. Previously at Oracle and IBM. Expert in scaling global enterprise operations.',
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/a40c8fe07_COO.png'
  }
];

export default function Leadership() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Leadership Team"
        description="Meet our world-class leadership team. Experienced executives from Google, Amazon, Microsoft, Salesforce, and Netflix driving AI innovation."
        url="/leadership"
        keywords={['leadership', 'executive team', 'CEO', 'CTO', 'management team', 'company leaders']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <p className="text-[#8B2EE5] font-semibold mb-6">LEADERSHIP</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Meet the team
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                shaping the future
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed">
              World-class leaders with decades of experience building and scaling enterprise technology companies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group"
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 flex gap-3">
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#8B2EE5] hover:text-white transition-colors"
                      >
                        <Linkedin className="w-5 h-5" />
                      </a>
                      <a
                        href="#"
                        className="w-10 h-10 bg-white rounded-full flex items-center justify-center hover:bg-[#8B2EE5] hover:text-white transition-colors"
                      >
                        <Twitter className="w-5 h-5" />
                      </a>
                    </div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-[#8B2EE5] font-medium mb-3">{leader.title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{leader.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Board of Directors */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Board of Directors</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic guidance from industry veterans and thought leaders
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { name: 'Jennifer Martinez', role: 'Board Chair, Former CEO of Cisco' },
              { name: 'Dr. Andrew Lee', role: 'AI Ethics Advisor, Stanford Professor' },
              { name: 'Rachel Green', role: 'Independent Director, Former CFO IBM' },
              { name: 'Thomas Brown', role: 'Venture Partner, Sequoia Capital' },
              { name: 'Dr. Maria Santos', role: 'Technical Advisor, MIT CSAIL' },
              { name: 'William Chang', role: 'Independent Director, Former CTO SAP' }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-xl border border-gray-200"
              >
                <h3 className="font-semibold text-gray-900 mb-1">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}