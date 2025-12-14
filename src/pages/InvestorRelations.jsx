import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { TrendingUp, FileText, Calendar, Download, ExternalLink } from 'lucide-react';
import PageMeta from '@/components/PageMeta';

const financialData = [
  { label: 'Stock Price', value: '$128.45', change: '+5.2%', positive: true },
  { label: 'Market Cap', value: '$2.5B', change: '+12.8%', positive: true },
  { label: 'Revenue (TTM)', value: '$450M', change: '+45%', positive: true },
  { label: 'EPS', value: '$2.34', change: '+18%', positive: true }
];

const reports = [
  { title: 'Q4 2024 Earnings Report', date: 'Feb 15, 2024', type: 'Earnings' },
  { title: 'Annual Report 2023', date: 'Jan 30, 2024', type: 'Annual' },
  { title: 'Q3 2024 Earnings Report', date: 'Nov 10, 2023', type: 'Earnings' },
  { title: '10-K Filing', date: 'Mar 15, 2024', type: 'SEC Filing' }
];

const events = [
  { title: 'Q1 2025 Earnings Call', date: 'May 15, 2025', time: '4:00 PM EST' },
  { title: 'Annual Shareholder Meeting', date: 'June 20, 2025', time: '10:00 AM EST' },
  { title: 'Investor Day 2025', date: 'September 12, 2025', time: '9:00 AM EST' }
];

export default function InvestorRelations() {
  return (
    <div className="bg-white">
      <PageMeta 
        title="Investor Relations"
        description="NYSE: 1CP | $2.5B market cap, $450M revenue (TTM), +45% growth. View financial reports, earnings calls, and shareholder information."
        url="/investor-relations"
        keywords={['investor relations', 'financial reports', 'earnings', 'stock price', 'shareholder information', 'NYSE 1CP']}
      />
      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <p className="text-[#8B2EE5] font-semibold mb-6">INVESTOR RELATIONS</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Investing in the
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                AI revolution
              </span>
            </h1>
            <p className="text-2xl text-gray-600 leading-relaxed mb-10">
              NYSE: 1CP | Transparent reporting and strong growth trajectory in enterprise AI market.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button className="bg-[#8B2EE5] hover:bg-[#7325C4] rounded-full px-8">
                View latest report
              </Button>
              <Button variant="outline" className="rounded-full border-gray-300">
                Subscribe to updates
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Financial Snapshot */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Financial snapshot</h2>
            <p className="text-xl text-gray-600">Real-time key metrics as of {new Date().toLocaleDateString()}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {financialData.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-sm text-gray-500">{item.label}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-3xl font-bold text-gray-900 mb-2">{item.value}</div>
                    <div className={`flex items-center gap-2 text-sm font-medium ${item.positive ? 'text-green-600' : 'text-red-600'}`}>
                      <TrendingUp className="w-4 h-4" />
                      {item.change}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reports & Events */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Reports */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Financial reports</h2>
                <Button variant="ghost" className="text-[#8B2EE5]">
                  View all <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {reports.map((report, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all group"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-[#8B2EE5]" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-gray-900 mb-1">{report.title}</h3>
                          <div className="text-sm text-gray-500">{report.date} • {report.type}</div>
                        </div>
                      </div>
                      <Button size="icon" variant="ghost" className="group-hover:bg-purple-50">
                        <Download className="w-4 h-4 text-gray-400 group-hover:text-[#8B2EE5]" />
                      </Button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Events */}
            <div>
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-3xl font-bold text-gray-900">Upcoming events</h2>
                <Button variant="ghost" className="text-[#8B2EE5]">
                  Calendar <Calendar className="ml-2 w-4 h-4" />
                </Button>
              </div>
              <div className="space-y-4">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-md transition-all"
                  >
                    <h3 className="font-semibold text-gray-900 mb-3">{event.title}</h3>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                      <span className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        {event.date}
                      </span>
                      <span>{event.time}</span>
                    </div>
                    <Button variant="outline" className="mt-4 w-full rounded-full border-gray-300">
                      Add to calendar
                    </Button>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact IR */}
      <section className="py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Investor contact</h2>
          <p className="text-xl text-gray-600 mb-8">
            For inquiries, please contact our investor relations team
          </p>
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-gray-600 mb-2">Email</div>
            <a href="mailto:ir@1cplatform.com" className="text-2xl font-semibold text-[#8B2EE5] hover:underline">
              ir@1cplatform.com
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}