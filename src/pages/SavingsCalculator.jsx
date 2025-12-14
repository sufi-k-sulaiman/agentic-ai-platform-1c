import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Slider } from '@/components/ui/slider';
import { Checkbox } from '@/components/ui/checkbox';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, TrendingUp, DollarSign, Clock, Users, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import PageMeta from '@/components/PageMeta';

export default function SavingsCalculator() {
  const [employees, setEmployees] = useState(100);
  const [departments, setDepartments] = useState(5);
  const [teamSize, setTeamSize] = useState(20);
  const [totalFTEs, setTotalFTEs] = useState(100);
  const [remote, setRemote] = useState(30);
  const [hybrid, setHybrid] = useState(40);
  const [avgSalary, setAvgSalary] = useState(75000);
  const [avgLaborCost, setAvgLaborCost] = useState(85000);
  const [hoursPerWeek, setHoursPerWeek] = useState(10);
  const [dailyTasks, setDailyTasks] = useState(15);
  const [softwareTypes, setSoftwareTypes] = useState(['Salesforce', 'Microsoft 365', 'Slack']);
  const [automationRate, setAutomationRate] = useState(70);

  const availableSoftware = [
    'Salesforce', 'Microsoft 365', 'Google Workspace', 'Slack', 'Zoom',
    'SAP', 'Oracle', 'Workday', 'ServiceNow', 'Jira', 'Confluence',
    'HubSpot', 'Zendesk', 'Adobe Creative Cloud', 'Tableau', 'Power BI',
    'QuickBooks', 'NetSuite', 'Shopify', 'Asana', 'Monday.com', 'Trello'
  ];

  const toggleSoftware = (software) => {
    setSoftwareTypes(prev => 
      prev.includes(software) 
        ? prev.filter(s => s !== software)
        : [...prev, software]
    );
  };

  // Calculations
  const annualLaborCost = totalFTEs * avgLaborCost;
  const hoursSavedPerYear = totalFTEs * hoursPerWeek * 52 * (automationRate / 100);
  const costPerHour = avgLaborCost / 2080; // Standard work year hours
  const annualSavings = hoursSavedPerYear * costPerHour;
  const threeYearSavings = annualSavings * 3;
  const productivityGain = (hoursSavedPerYear / (totalFTEs * 2080)) * 100;
  const tasksAutomatedDaily = dailyTasks * (automationRate / 100) * totalFTEs;

  return (
    <div className="bg-white">
      <PageMeta 
        title="ROI & Savings Calculator"
        description="Calculate your potential savings and ROI with AI automation. See how much time and money your organization can save."
        url="/savings-calculator"
      />

      {/* Hero */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-purple-50 via-white to-violet-50">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Calculate Your
              <span className="block bg-gradient-to-r from-[#8B2EE5] to-[#A855F7] bg-clip-text text-transparent">
                AI Savings
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Discover how much time and money your organization can save with AI automation
            </p>
          </motion.div>
        </div>
      </section>

      {/* Calculator */}
      <section className="py-16 -mt-10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Input Section */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <CardTitle className="text-2xl">Your Organization</CardTitle>
                  <p className="text-gray-600">Enter your details to calculate potential savings</p>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    <Label className="text-base">Number of Departments</Label>
                    <Input
                      type="number"
                      value={departments}
                      onChange={(e) => setDepartments(Math.max(1, parseInt(e.target.value) || 1))}
                      className="h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base">Average Team Size</Label>
                    <Input
                      type="number"
                      value={teamSize}
                      onChange={(e) => setTeamSize(Math.max(1, parseInt(e.target.value) || 1))}
                      className="h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base">Total FTEs (Full-Time Employees)</Label>
                    <Input
                      type="number"
                      value={totalFTEs}
                      onChange={(e) => setTotalFTEs(Math.max(1, parseInt(e.target.value) || 1))}
                      className="h-12 text-lg"
                    />
                    <Slider
                      value={[totalFTEs]}
                      onValueChange={([value]) => setTotalFTEs(value)}
                      min={1}
                      max={10000}
                      step={10}
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Label className="text-base">Remote Employees (%)</Label>
                      <Input
                        type="number"
                        value={remote}
                        onChange={(e) => setRemote(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                        className="h-12 text-lg"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base">Hybrid Employees (%)</Label>
                      <Input
                        type="number"
                        value={hybrid}
                        onChange={(e) => setHybrid(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                        className="h-12 text-lg"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <Label className="text-base">Average Salary ($)</Label>
                      <Input
                        type="number"
                        value={avgSalary}
                        onChange={(e) => setAvgSalary(Math.max(0, parseInt(e.target.value) || 0))}
                        className="h-12 text-lg"
                      />
                      <Slider
                        value={[avgSalary]}
                        onValueChange={([value]) => setAvgSalary(value)}
                        min={30000}
                        max={200000}
                        step={5000}
                        className="mt-2"
                      />
                    </div>

                    <div className="space-y-3">
                      <Label className="text-base">Average Labour Cost ($)</Label>
                      <Input
                        type="number"
                        value={avgLaborCost}
                        onChange={(e) => setAvgLaborCost(Math.max(0, parseInt(e.target.value) || 0))}
                        className="h-12 text-lg"
                      />
                      <Slider
                        value={[avgLaborCost]}
                        onValueChange={([value]) => setAvgLaborCost(value)}
                        min={40000}
                        max={250000}
                        step={5000}
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base">Manual Hours Per Week (per employee)</Label>
                    <Input
                      type="number"
                      value={hoursPerWeek}
                      onChange={(e) => setHoursPerWeek(Math.max(0, parseInt(e.target.value) || 0))}
                      className="h-12 text-lg"
                    />
                    <Slider
                      value={[hoursPerWeek]}
                      onValueChange={([value]) => setHoursPerWeek(value)}
                      min={1}
                      max={40}
                      step={1}
                      className="mt-2"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base">Daily Tasks Per Employee</Label>
                    <Input
                      type="number"
                      value={dailyTasks}
                      onChange={(e) => setDailyTasks(Math.max(1, parseInt(e.target.value) || 1))}
                      className="h-12 text-lg"
                    />
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base">Software Types Used</Label>
                    <div className="border rounded-lg p-4 max-h-64 overflow-y-auto bg-gray-50">
                      <div className="grid grid-cols-2 gap-3">
                        {availableSoftware.map((software) => (
                          <div key={software} className="flex items-center space-x-2">
                            <Checkbox
                              id={software}
                              checked={softwareTypes.includes(software)}
                              onCheckedChange={() => toggleSoftware(software)}
                            />
                            <label
                              htmlFor={software}
                              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                            >
                              {software}
                            </label>
                          </div>
                        ))}
                      </div>
                    </div>
                    {softwareTypes.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {softwareTypes.map((software) => (
                          <Badge key={software} variant="secondary" className="flex items-center gap-1">
                            {software}
                            <X 
                              className="w-3 h-3 cursor-pointer" 
                              onClick={() => toggleSoftware(software)}
                            />
                          </Badge>
                        ))}
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <Label className="text-base">Expected Automation Rate (%)</Label>
                    <div className="flex items-center gap-3">
                      <Input
                        type="number"
                        value={automationRate}
                        onChange={(e) => setAutomationRate(Math.min(100, Math.max(0, parseInt(e.target.value) || 0)))}
                        className="h-12 text-lg"
                      />
                      <span className="text-2xl font-bold text-[#8B2EE5]">{automationRate}%</span>
                    </div>
                    <Slider
                      value={[automationRate]}
                      onValueChange={([value]) => setAutomationRate(value)}
                      min={0}
                      max={100}
                      step={5}
                      className="mt-2"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Results Section */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="space-y-6"
            >
              <Card className="bg-gradient-to-br from-[#8B2EE5] to-[#7C3AED] text-white">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center gap-2">
                    <TrendingUp className="w-6 h-6" />
                    Your Potential Savings
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <p className="text-white/80 mb-2">Annual Savings</p>
                    <p className="text-5xl font-bold">
                      ${Math.round(annualSavings).toLocaleString()}
                    </p>
                  </div>
                  <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/20">
                    <div>
                      <p className="text-white/80 text-sm mb-1">3-Year Savings</p>
                      <p className="text-2xl font-bold">
                        ${Math.round(threeYearSavings / 1000)}K
                      </p>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Productivity Gain</p>
                      <p className="text-2xl font-bold">
                        {productivityGain.toFixed(1)}%
                      </p>
                    </div>
                    <div>
                      <p className="text-white/80 text-sm mb-1">Tasks/Day</p>
                      <p className="text-2xl font-bold">
                        {Math.round(tasksAutomatedDaily).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <div className="grid grid-cols-2 gap-4">
                <Card>
                  <CardHeader className="pb-3">
                    <Clock className="w-8 h-8 text-[#8B2EE5] mb-2" />
                    <CardTitle className="text-lg">Time Saved</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-gray-900">
                      {Math.round(hoursSavedPerYear).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">hours per year</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <Users className="w-8 h-8 text-[#8B2EE5] mb-2" />
                    <CardTitle className="text-lg">Per Employee</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-gray-900">
                      ${Math.round(annualSavings / totalFTEs).toLocaleString()}
                    </p>
                    <p className="text-sm text-gray-600">annual savings</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <DollarSign className="w-8 h-8 text-[#8B2EE5] mb-2" />
                    <CardTitle className="text-lg">Departments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-gray-900">
                      {departments}
                    </p>
                    <p className="text-sm text-gray-600">optimized teams</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader className="pb-3">
                    <TrendingUp className="w-8 h-8 text-[#8B2EE5] mb-2" />
                    <CardTitle className="text-lg">Software</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-3xl font-bold text-gray-900">
                      {softwareTypes.length}
                    </p>
                    <p className="text-sm text-gray-600">tools integrated</p>
                  </CardContent>
                </Card>
              </div>

              <Card className="bg-purple-50 border-purple-200">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-3 mb-4">
                    <DollarSign className="w-6 h-6 text-[#8B2EE5] flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">ROI Breakdown</h3>
                      <ul className="space-y-2 text-sm text-gray-700">
                        <li>• Total FTEs: {totalFTEs} ({remote}% remote, {hybrid}% hybrid)</li>
                        <li>• Annual labor cost: ${Math.round(annualLaborCost).toLocaleString()}</li>
                        <li>• Hours automated: {Math.round(hoursSavedPerYear).toLocaleString()} hrs/year</li>
                        <li>• Daily tasks automated: {Math.round(tasksAutomatedDaily).toLocaleString()}</li>
                        <li>• Software integrated: {softwareTypes.length} tools ({softwareTypes.slice(0, 3).join(', ')}{softwareTypes.length > 3 ? '...' : ''})</li>
                        <li>• Expected ROI: {((annualSavings / annualLaborCost) * 100).toFixed(1)}%</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to realize these savings?
            </h2>
            <p className="text-xl text-gray-300 mb-10">
              Start your AI automation journey today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to={createPageUrl('Onboarding')}>
                <Button size="lg" className="bg-[#8B2EE5] hover:bg-[#7325C4] h-14 px-8 text-lg">
                  Get Started <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to={createPageUrl('Contact')}>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/20 text-white hover:bg-white/20 h-14 px-8 text-lg">
                  Talk to Sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}