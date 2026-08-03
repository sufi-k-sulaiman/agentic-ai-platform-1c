import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Shield, TrendingDown, Database, Workflow, DollarSign, AlertTriangle, Clock, ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';
import RelatedContent from '@/components/seo/RelatedContent';
import BreadcrumbNav from '@/components/BreadcrumbNav';
import FeatureDetailSection from '@/components/FeatureDetailSection';
import { featureDetails } from '@/lib/featureDetails';
import InternalLinker from '@/components/seo/InternalLinker';

const challenges = [
  {
    icon: Clock,
    title: 'Response Time',
    problem: 'Manual 911 dispatch, delayed resource allocation, slow incident coordination',
    solution: 'AI instantly analyzes calls, predicts optimal unit dispatch, and coordinates response—reducing time by 40%'
  },
  {
    icon: Database,
    title: 'Information Overload',
    problem: 'Cameras, sensors, calls generating overwhelming data—impossible to monitor manually',
    solution: 'Agentic AI processes all feeds in real-time, detecting threats and anomalies automatically'
  },
  {
    icon: DollarSign,
    title: 'Budget Constraints',
    problem: 'Limited resources, manual processes, inefficient patrol routes',
    solution: 'AI optimizes patrol coverage, automates reporting, cuts costs by 30% while improving effectiveness'
  },
  {
    icon: Workflow,
    title: 'Manual Processes',
    problem: 'Paper reports, manual evidence logging, slow case management',
    solution: 'Automated documentation, digital evidence management, AI-assisted case analysis'
  }
];

const solutions = [
  {
    category: 'Emergency Response',
    items: [
      'Agentic Ai-powered 911 call analysis and triage',
      'Predictive dispatch and unit allocation',
      'Real-time incident coordination',
      'Automated resource tracking and availability'
    ]
  },
  {
    category: 'Predictive Policing',
    items: [
      'Crime pattern analysis and hotspot prediction',
      'Optimal patrol route optimization',
      'Risk assessment for proactive intervention',
      'Community safety analytics'
    ]
  },
  {
    category: 'Investigations',
    items: [
      'Automated evidence cataloging and analysis',
      'Facial recognition and suspect identification',
      'Case pattern matching across databases',
      'Digital forensics automation'
    ]
  },
  {
    category: 'Operations',
    items: [
      'Automated report generation',
      'Officer scheduling and shift optimization',
      'Real-time fleet and equipment tracking',
      'Budget forecasting and resource planning'
    ]
  }
];

const metrics = [
  { value: '40%', label: 'Faster Response', description: 'Emergency incidents' },
  { value: '30%', label: 'Cost Reduction', description: 'Operational efficiency' },
  { value: '65%', label: 'Crime Prevention', description: 'Predictive policing' },
  { value: '80%', label: 'Report Automation', description: 'Admin time saved' }
];

export default function PublicSafety() {
  return (
        <InternalLinker currentPage="PublicSafety">
    <div className="bg-white">
      <PageMeta 
        title="Public Safety AI"
        description="AI-powered emergency response and law enforcement. 40% faster response times, 65% crime prevention, 30% cost reduction through predictive policing."
        url="/public-safety"
        keywords={['public safety AI', 'emergency response', 'predictive policing', '911 dispatch', 'law enforcement technology']}
        image="https://images.unsplash.com/photo-1521295296519-6449b00d7773?w=1200&h=630&fit=crop"
        service={{ type: 'Public Safety AI', areaServed: 'Worldwide' }}
        localBusiness={{ name: '1C Platform - Public Safety AI', telephone: '+1-800-1C-SAFETY' }}
      
        faq={[{"question":"How does AI enhance public safety operations?","answer":"Agents automate surveillance analysis, incident detection, emergency response coordination, and security monitoring. The platform reduces incident response time by 60% while improving detection accuracy."},{"question":"Is it secure enough for public safety use?","answer":"Yes. 1C Platform meets FedRAMP, SOC 2, and ISO 27001 requirements. All data is encrypted with zero-knowledge architecture, and every AI decision is fully auditable."},{"question":"What response time improvements can I expect?","answer":"Public safety agencies typically see 60% faster incident response, 40% cost reduction, and 50% improved threat detection when deploying agentic AI for surveillance and coordination."}]}
        breadcrumbs={[{ name: 'Home', url: '/' }, { name: 'Industries', url: '/Blog' }, { name: 'PublicSafety', url: '/PublicSafety' }]}
      />
      <BreadcrumbNav items={[{ label: 'Home', page: 'Home' }, { label: 'Public Safety' }]} />
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 text-[#8B2EE5] text-sm font-medium mb-8">
                <Shield className="w-4 h-4" />
                Public Safety
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                AI-powered
                <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                  public safety
                </span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed mb-8">
                Transform emergency response and law enforcement with Agentic Ai that reduces response times by 40%, predicts crime, and cuts costs by 30%.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to={createPageUrl('Onboarding')}>
                  <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8 h-14">
                    Get started <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
                <Link to={createPageUrl('SavingsCalculator')}>
                  <Button variant="outline" className="rounded-full border-gray-300 px-8 h-14">
                    Calculate Savings
                  </Button>
                </Link>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
              <img src="https://images.unsplash.com/photo-1588681664899-f142ff2dc9b1?w=800" alt="Public Safety" className="rounded-3xl shadow-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <motion.div key={metric.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} className="text-center">
                <div className="text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">{metric.value}</div>
                <div className="text-white font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-gray-400">{metric.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              The Public Safety Challenge
            </h2>
          </div>
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              Every second matters in emergency response, yet 911 systems introduce critical delays: dispatchers manually transcribe caller information while people describe emergencies in stressed, unclear language. Determining the appropriate response requires asking clarifying questions and consulting reference guides—"Is the person conscious? Breathing? Bleeding?"—precious seconds lost while victims need help. Dispatching optimal units involves manually checking availability, locations, and capabilities across multiple systems, then coordinating via radio. The entire process from call to dispatch averages 90-180 seconds—an eternity when someone is having a heart attack or a fire is spreading. During major incidents requiring multiple units, coordination complexity multiplies, with dispatchers juggling radio channels and manual tracking boards to manage resources.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Crime prevention remains reactive rather than proactive: officers patrol areas based on intuition and historical "hot spots" from last year, missing patterns in current crime data that would predict where incidents are likely to occur today. Investigations proceed slowly as detectives manually review surveillance footage frame by frame, search for connections between cases across different database systems, and compile evidence timelines. Body camera footage accumulates in storage unwatched except when specific incidents require review, meaning patterns and training opportunities are missed. Officer reporting consumes 30-40% of shift time as detailed incident reports are typed manually. Information sharing between agencies requires phone calls and faxed documents rather than instant digital exchange. The data needed to predict, prevent, and solve crimes exists but remains siloed and unanalyzed.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <div className="prose prose-lg max-w-none">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Emergency Response Delays</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Agentic AI transforms emergency response through intelligent agents that analyze 911 calls in real-time: speech recognition instantly transcribes conversations while natural language processing extracts critical details—location, emergency type, victim condition, threats present. Medical assessment AI asks targeted questions based on symptoms, provides first aid instructions to callers, and determines required response level. Dispatch optimization automatically identifies optimal responders based on location, availability, equipment, training, and current incidents, issuing dispatch instructions in 15 seconds versus 90-180 seconds manually. Traffic management AI creates "green corridors" by adjusting signals ahead of emergency vehicles, reducing response times by 40%. Real-time coordination AI manages multi-unit responses, tracking resources and automatically requesting additional support when incident severity escalates.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Crime prevention becomes proactive through predictive policing AI that analyzes historical crimes, current conditions, events, weather, and social patterns to predict where crimes are likely to occur in the next 8 hours—enabling preventive patrols that reduce crime rates by 35%. Investigation AI automatically processes body camera and surveillance footage, identifying suspects, vehicles, and evidence while maintaining chain-of-custody. Case analysis agents find connections between incidents across jurisdictions, surface similar unsolved cases, and suggest investigative approaches based on what worked in similar situations. Automated reporting converts voice notes or brief bullet points into complete incident reports formatted for prosecutors, reducing paperwork time by 50%. Officer safety improves through AI monitoring dispatch patterns and automatically alerting backup when situations match high-risk indicators. Public safety agencies achieve 60% faster response times, 50% faster case resolution, 35% crime reduction, and 40% cost savings while improving officer safety and community trust.
            </p>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Public safety challenges solved
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              How Agentic Ai transforms emergency services and law enforcement
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {challenges.map((challenge, index) => (
              <motion.div key={challenge.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                      <challenge.icon className="w-7 h-7 text-[#8B2EE5]" />
                    </div>
                    <CardTitle className="text-2xl">{challenge.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-semibold text-red-600 mb-2">❌ The Problem</div>
                        <p className="text-gray-600">{challenge.problem}</p>
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-green-600 mb-2">✓ Agentic Ai Solution</div>
                        <p className="text-gray-900 font-medium">{challenge.solution}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Complete safety automation
            </h2>
            <p className="text-xl text-gray-600">
              Agentic Ai protecting communities 24/7
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {solutions.map((section, index) => (
              <motion.div key={section.category} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }}>
                <Card className="h-full">
                  <CardHeader>
                    <CardTitle className="text-2xl text-[#8B2EE5]">{section.category}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {section.items.map((item, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Ready for smarter public safety?
            </h2>
            <p className="text-xl text-gray-600 mb-10">
              Join agencies nationwide improving response times and saving lives with Agentic Ai
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-10 h-16 text-lg">
                  Get started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('SavingsCalculator')}>
                <Button variant="outline" className="rounded-full border-gray-300 px-10 h-16 text-lg">
                  Calculate Savings
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      
      <FeatureDetailSection {...featureDetails.PublicSafety} />
<RelatedContent currentPage="PublicSafety" category="industry" crossCategories={['product']} title="Explore Related Solutions" />
    </div>
    </InternalLinker>
  );
}