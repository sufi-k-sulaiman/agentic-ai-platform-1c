import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { Users, TrendingUp, Clock, CheckCircle, AlertCircle, Info } from 'lucide-react';

const generateChartData = (metrics) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return months.map((month, index) => ({
    month,
    traditional: 30 + Math.random() * 15,
    agentic: 50 + (index * 3) + Math.random() * 10
  }));
};

export default function VerticalAnalytics({ industry }) {
  const [timeRange, setTimeRange] = useState('30D');
  const chartData = generateChartData();

  const activityTimeline = industry.activityTimeline || [
    { time: '10:30 AM', action: 'Issue detected', description: 'System anomaly identified', icon: AlertCircle, color: 'text-orange-500' },
    { time: '10:32 AM', action: 'AI analysis complete', description: 'Root cause determined', icon: CheckCircle, color: 'text-green-500' },
    { time: '10:35 AM', action: 'Solution deployed', description: 'Automated fix applied', icon: CheckCircle, color: 'text-green-500' },
    { time: '10:40 AM', action: 'Verification complete', description: 'System operating normally', icon: CheckCircle, color: 'text-green-500' }
  ];

  const goalsProgress = industry.goalsProgress || [
    { goal: 'Cost Reduction Target', current: 390, target: 500, percentage: 78, color: 'bg-purple-500' },
    { goal: 'Efficiency Improvement', current: 920, target: 1000, percentage: 92, color: 'bg-green-500' },
    { goal: 'Issue Resolution', current: 3, target: 5, percentage: 60, color: 'bg-blue-500' },
    { goal: 'Satisfaction Score', current: 9, target: 20, percentage: 45, color: 'bg-orange-500' }
  ];

  const notifications = industry.notifications || [
    { title: 'Cost Savings Achieved', description: 'Reduced operational expenses by...', time: '2 min ago', icon: CheckCircle, color: 'text-green-500' },
    { title: 'Efficiency Milestone', description: 'Process automation at 85%...', time: '15 min ago', icon: TrendingUp, color: 'text-blue-500' },
    { title: 'New Optimization', description: 'AI identified new efficiency gain...', time: '1 hour ago', icon: Info, color: 'text-purple-500' },
    { title: 'Performance Alert', description: 'Review quarterly improvements...', time: '3 hours ago', icon: AlertCircle, color: 'text-orange-500' }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Real-time Agentic AI impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Live performance metrics showing how Agentic AI continuously optimizes operations and delivers measurable results across your organization.
          </p>
        </motion.div>

        {/* Real-time Analytics Chart */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Card>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-2xl">Performance Comparison</CardTitle>
                <div className="flex gap-2">
                  {['7D', '30D', '90D'].map((range) => (
                    <button
                      key={range}
                      onClick={() => setTimeRange(range)}
                      className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                        timeRange === range
                          ? 'bg-[#6209e6] text-white'
                          : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                      }`}
                    >
                      {range}
                    </button>
                  ))}
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 gap-8 mb-6">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <Users className="w-5 h-5 text-purple-500" />
                    <span className="text-sm text-gray-600">Traditional Approach</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">47,829</div>
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <TrendingUp className="w-5 h-5 text-cyan-500" />
                    <span className="text-sm text-gray-600">With Agentic AI</span>
                  </div>
                  <div className="text-3xl font-bold text-gray-900">186,247</div>
                </div>
              </div>

              <div className="h-80">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={chartData}>
                    <defs>
                      <linearGradient id="colorTraditional" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8B5CF6" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#8B5CF6" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorAgentic" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#06B6D4" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="#06B6D4" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                    <XAxis dataKey="month" stroke="#9CA3AF" />
                    <YAxis stroke="#9CA3AF" />
                    <Tooltip 
                      contentStyle={{ 
                        backgroundColor: 'white', 
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px'
                      }}
                    />
                    <Legend />
                    <Area 
                      type="monotone" 
                      dataKey="traditional" 
                      stroke="#8B5CF6" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorTraditional)" 
                      name="Traditional"
                    />
                    <Area 
                      type="monotone" 
                      dataKey="agentic" 
                      stroke="#06B6D4" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#colorAgentic)" 
                      name="Agentic AI"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Three Cards Row */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Activity Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-[#6209e6]" />
                  <CardTitle>Activity Timeline</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {activityTimeline.map((activity, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        activity.color === 'text-green-500' ? 'bg-green-100' :
                        activity.color === 'text-orange-500' ? 'bg-orange-100' :
                        'bg-blue-100'
                      }`}>
                        <activity.icon className={`w-5 h-5 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-xs text-gray-500 mb-1">{activity.time}</div>
                        <div className="font-semibold text-gray-900">{activity.action}</div>
                        <div className="text-sm text-gray-600">{activity.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Goals Progress */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#6209e6]" />
                  <CardTitle>Goals Progress</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {goalsProgress.map((goal, idx) => (
                    <div key={idx}>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-gray-700">{goal.goal}</span>
                        <span className="text-sm text-gray-500">
                          {typeof goal.current === 'string' ? goal.current : `${goal.current}K`} / {typeof goal.target === 'string' ? goal.target : `${goal.target}K`}
                        </span>
                      </div>
                      <div className="relative h-2 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${goal.percentage}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.5 + idx * 0.1 }}
                          className={`absolute top-0 left-0 h-full ${goal.color} rounded-full`}
                        />
                      </div>
                      <div className="text-right text-xs text-gray-500 mt-1">{goal.percentage}%</div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Notifications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Card className="h-full">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-[#6209e6]" />
                    <CardTitle>Notifications</CardTitle>
                  </div>
                  <button className="text-sm text-[#6209e6] hover:underline">
                    Mark all read
                  </button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {notifications.map((notification, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        notification.color === 'text-green-500' ? 'bg-green-100' :
                        notification.color === 'text-blue-500' ? 'bg-blue-100' :
                        notification.color === 'text-purple-500' ? 'bg-purple-100' :
                        'bg-orange-100'
                      }`}>
                        <notification.icon className={`w-5 h-5 ${notification.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between gap-2 mb-1">
                          <div className="font-semibold text-gray-900 text-sm">{notification.title}</div>
                          <div className="text-xs text-gray-500 whitespace-nowrap">{notification.time}</div>
                        </div>
                        <div className="text-sm text-gray-600 truncate">{notification.description}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}