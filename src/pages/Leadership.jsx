import React from 'react';
import { motion } from 'framer-motion';
import PageMeta from '@/components/PageMeta';

const leaders = [
  {
    name: 'Niroshi Nadarajah',
    title: 'Chief Executive Officer',
    bio: ['With a distinguished background in microbiology and medical research, Niroshi brings a unique scientific perspective to technology leadership. Her journey from medical sciences to AI innovation has shaped her approach to solving complex enterprise challenges.', 'As CEO of 1cPlatform, she leads the vision to democratize AI across industries, combining deep scientific rigor with practical business acumen. Her passion for running marathons mirrors her leadership style: disciplined, endurance-focused, and always pushing boundaries.'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/a80c07556_CMO.png'
  },
  {
    name: 'Suf K Sulaiman',
    title: 'Chief Technology Officer',
    bio: ['A true technology polymath with over 30 years of experience spanning AI, hardware, and software engineering. He has been at the forefront of every major technology wave, from early computing systems to today\'s cutting-edge AI architectures.', 'As CTO of 1cPlatform, his deep expertise in both hardware and software allows him to architect solutions that are not just innovative but fundamentally sound, driving the technical vision and ensuring AI systems are built on rock-solid engineering principles that scale.'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/e26495cc8_CTO.png'
  },
  {
    name: 'Emily Zhang',
    title: 'Chief Product Officer',
    bio: ['With extensive experience leading enterprise product teams and building solutions used by millions, Emily brings deep expertise in creating user-centric AI products. Her background combines strategic product leadership with hands-on experience in the enterprise software industry.', 'As CPO of 1cPlatform, her philosophy centers on simplicity and impact. She believes the best AI products are those that feel invisible, seamlessly integrating into workflows while delivering transformative results for enterprises worldwide.'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/06e4281e3_CPO.png'
  },
  {
    name: 'David Kim',
    title: 'Chief Financial Officer',
    bio: ['With 20 years in enterprise technology finance, David brings unparalleled expertise in scaling financial operations. He has successfully navigated complex financial landscapes, led multiple IPOs, and helped technology companies achieve sustainable growth.', 'As CFO of 1cPlatform, his strategic financial leadership ensures the company maintains the fiscal discipline needed for sustainable growth while investing boldly in innovation. His ability to balance growth with profitability drives the company\'s financial success.'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/b9fad4d11_CFO.png'
  },
  {
    name: 'Priya Patel',
    title: 'Chief Marketing Officer',
    bio: ['A growth marketing expert with extensive experience building billion-dollar brands in the technology sector, Priya understands how to create authentic connections between innovative technology and customers. Her expertise spans brand building, demand generation, and go-to-market strategy.', 'As CMO of 1cPlatform, her data-driven approach to brand building transforms how companies think about marketing in the AI age. She leads the go-to-market strategy, ensuring the message resonates with enterprises worldwide.'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/4918bd092_CEO.png'
  },
  {
    name: 'James Wilson',
    title: 'Chief Operating Officer',
    bio: ['An operations excellence leader with extensive experience in enterprise technology, James has built his career on making complex systems run smoothly at scale. His expertise lies in bringing order to chaos and building efficient operational frameworks for global organizations.', 'As COO of 1cPlatform, his expertise in scaling global operations is critical to the company\'s growth. He ensures that as the company expands, operations remain efficient, customers stay delighted, and teams stay aligned with the mission.'],
    image: 'https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/693e529a64adb72abf9804a1/a40c8fe07_COO.png'
  }
];

export default function Leadership() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Leadership Team"
        description="Meet our world-class leadership team. Experienced executives driving AI innovation across enterprise technology."
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
            {leaders.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="relative mb-6 overflow-hidden rounded-2xl aspect-square bg-white">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{leader.name}</h3>
                <p className="text-[#8B2EE5] font-medium mb-4">{leader.title}</p>
                <div className="space-y-3">
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.bio[0]}</p>
                  <p className="text-gray-600 text-sm leading-relaxed">{leader.bio[1]}</p>
                </div>
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
              { name: 'Jennifer Martinez', role: 'Board Chair, Enterprise Technology Executive' },
              { name: 'Dr. Andrew Lee', role: 'AI Ethics Advisor, Academic Researcher' },
              { name: 'Rachel Green', role: 'Independent Director, Finance Executive' },
              { name: 'Thomas Brown', role: 'Venture Partner, Investment Professional' },
              { name: 'Dr. Maria Santos', role: 'Technical Advisor, Research Scientist' },
              { name: 'William Chang', role: 'Independent Director, Technology Executive' }
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