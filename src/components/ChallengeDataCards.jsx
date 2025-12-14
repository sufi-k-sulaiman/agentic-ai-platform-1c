// Data mapping for each challenge category
export const challengeDataMap = {
  // Strategy & Leadership
  'Setting a clear strategy in fast-changing markets': {
    metrics: [
      { label: 'Strategic clarity', percent: 88, color: 'from-blue-400 to-cyan-300' },
      { label: 'Decision speed', percent: 76, color: 'from-purple-400 to-pink-300' },
      { label: 'Market adaptation', percent: 82, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [35, 52, 68, 82, 91],
    stat: '88%',
    statLabel: 'Faster strategic decisions'
  },
  'Balancing short-term results with long-term vision': {
    metrics: [
      { label: 'Balance achieved', percent: 79, color: 'from-yellow-400 to-orange-300' },
      { label: 'Long-term planning', percent: 85, color: 'from-blue-400 to-cyan-300' },
      { label: 'Quarterly targets', percent: 72, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [40, 58, 71, 84, 93],
    stat: '79%',
    statLabel: 'Improved planning balance'
  },
  'Managing risk and uncertainty': {
    metrics: [
      { label: 'Risk visibility', percent: 86, color: 'from-red-400 to-orange-300' },
      { label: 'Mitigation speed', percent: 78, color: 'from-purple-400 to-pink-300' },
      { label: 'Predictive accuracy', percent: 81, color: 'from-blue-400 to-cyan-300' }
    ],
    chart: [38, 55, 72, 85, 94],
    stat: '86%',
    statLabel: 'Better risk management'
  },
  'Driving alignment across departments': {
    metrics: [
      { label: 'Cross-team alignment', percent: 84, color: 'from-purple-400 to-pink-300' },
      { label: 'Communication flow', percent: 77, color: 'from-blue-400 to-cyan-300' },
      { label: 'Goal consistency', percent: 81, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [42, 60, 75, 87, 95],
    stat: '84%',
    statLabel: 'Enhanced departmental alignment'
  },

  // Talent & HR
  'Recruiting qualified talent': {
    metrics: [
      { label: 'Time to hire', percent: 68, color: 'from-blue-400 to-cyan-300' },
      { label: 'Candidate quality', percent: 82, color: 'from-green-400 to-emerald-300' },
      { label: 'Hiring success rate', percent: 75, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [30, 48, 65, 78, 88],
    stat: '68%',
    statLabel: 'Faster recruitment'
  },
  'Retaining employees': {
    metrics: [
      { label: 'Retention rate', percent: 87, color: 'from-green-400 to-emerald-300' },
      { label: 'Employee satisfaction', percent: 79, color: 'from-purple-400 to-pink-300' },
      { label: 'Turnover reduction', percent: 72, color: 'from-blue-400 to-cyan-300' }
    ],
    chart: [45, 62, 76, 86, 92],
    stat: '87%',
    statLabel: 'Improved retention'
  },
  'Managing hybrid or remote work': {
    metrics: [
      { label: 'Productivity', percent: 81, color: 'from-blue-400 to-cyan-300' },
      { label: 'Team collaboration', percent: 74, color: 'from-purple-400 to-pink-300' },
      { label: 'Work-life balance', percent: 78, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [40, 58, 72, 84, 90],
    stat: '81%',
    statLabel: 'Remote work efficiency'
  },
  'Handling compliance and labor laws': {
    metrics: [
      { label: 'Compliance accuracy', percent: 95, color: 'from-red-400 to-orange-300' },
      { label: 'Audit readiness', percent: 88, color: 'from-blue-400 to-cyan-300' },
      { label: 'Risk reduction', percent: 82, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [50, 68, 82, 91, 96],
    stat: '95%',
    statLabel: 'Compliance accuracy'
  },
  'Building strong culture and engagement': {
    metrics: [
      { label: 'Employee engagement', percent: 83, color: 'from-purple-400 to-pink-300' },
      { label: 'Cultural alignment', percent: 76, color: 'from-blue-400 to-cyan-300' },
      { label: 'Team morale', percent: 80, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [42, 59, 73, 85, 91],
    stat: '83%',
    statLabel: 'Higher engagement'
  },

  // Operations
  'Inefficient processes': {
    metrics: [
      { label: 'Process efficiency', percent: 85, color: 'from-blue-400 to-cyan-300' },
      { label: 'Time saved', percent: 78, color: 'from-green-400 to-emerald-300' },
      { label: 'Error reduction', percent: 72, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [40, 60, 75, 88, 95],
    stat: '85%',
    statLabel: 'Process improvement'
  },
  'Supply chain disruptions': {
    metrics: [
      { label: 'Supply reliability', percent: 79, color: 'from-red-400 to-orange-300' },
      { label: 'Response time', percent: 84, color: 'from-blue-400 to-cyan-300' },
      { label: 'Risk mitigation', percent: 76, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [38, 56, 71, 83, 89],
    stat: '79%',
    statLabel: 'Supply chain stability'
  },
  'Quality control issues': {
    metrics: [
      { label: 'Quality score', percent: 91, color: 'from-green-400 to-emerald-300' },
      { label: 'Defect reduction', percent: 86, color: 'from-blue-400 to-cyan-300' },
      { label: 'Inspection speed', percent: 73, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [45, 63, 78, 88, 94],
    stat: '91%',
    statLabel: 'Quality improvement'
  },
  'Rising operational costs': {
    metrics: [
      { label: 'Cost reduction', percent: 72, color: 'from-green-400 to-emerald-300' },
      { label: 'Efficiency gains', percent: 68, color: 'from-blue-400 to-cyan-300' },
      { label: 'Resource optimization', percent: 75, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [35, 50, 68, 82, 90],
    stat: '72%',
    statLabel: 'Cost savings'
  },
  'Scaling production consistently': {
    metrics: [
      { label: 'Production capacity', percent: 84, color: 'from-blue-400 to-cyan-300' },
      { label: 'Quality consistency', percent: 79, color: 'from-green-400 to-emerald-300' },
      { label: 'Scalability', percent: 81, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [40, 58, 74, 86, 92],
    stat: '84%',
    statLabel: 'Production scalability'
  },

  // Finance
  'Cash flow instability': {
    metrics: [
      { label: 'Cash flow predictability', percent: 77, color: 'from-green-400 to-emerald-300' },
      { label: 'Payment collection', percent: 84, color: 'from-blue-400 to-cyan-300' },
      { label: 'Financial stability', percent: 70, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [35, 52, 67, 80, 88],
    stat: '77%',
    statLabel: 'Cash flow stability'
  },
  'Budget overruns': {
    metrics: [
      { label: 'Budget adherence', percent: 82, color: 'from-red-400 to-orange-300' },
      { label: 'Cost tracking', percent: 88, color: 'from-blue-400 to-cyan-300' },
      { label: 'Variance reduction', percent: 75, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [40, 58, 73, 85, 91],
    stat: '82%',
    statLabel: 'Budget control'
  },
  'Forecasting inaccuracies': {
    metrics: [
      { label: 'Forecast accuracy', percent: 86, color: 'from-blue-400 to-cyan-300' },
      { label: 'Data quality', percent: 79, color: 'from-purple-400 to-pink-300' },
      { label: 'Predictive power', percent: 82, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [42, 60, 75, 87, 93],
    stat: '86%',
    statLabel: 'Forecasting precision'
  },
  'Compliance and audit pressure': {
    metrics: [
      { label: 'Audit readiness', percent: 92, color: 'from-blue-400 to-cyan-300' },
      { label: 'Compliance rate', percent: 96, color: 'from-green-400 to-emerald-300' },
      { label: 'Documentation', percent: 88, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [50, 68, 82, 91, 97],
    stat: '92%',
    statLabel: 'Audit preparedness'
  },
  'Rising costs': {
    metrics: [
      { label: 'Cost reduction', percent: 72, color: 'from-green-400 to-emerald-300' },
      { label: 'Efficiency gains', percent: 68, color: 'from-blue-400 to-cyan-300' },
      { label: 'Spending control', percent: 75, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [35, 50, 68, 82, 90],
    stat: '72%',
    statLabel: 'Cost optimization'
  },
  'Slow financial processes': {
    metrics: [
      { label: 'Process speed', percent: 83, color: 'from-blue-400 to-cyan-300' },
      { label: 'Automation rate', percent: 76, color: 'from-purple-400 to-pink-300' },
      { label: 'Cycle time reduction', percent: 79, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [40, 58, 73, 85, 90],
    stat: '83%',
    statLabel: 'Faster processing'
  },
  'Limited visibility into spending': {
    metrics: [
      { label: 'Spending visibility', percent: 89, color: 'from-blue-400 to-cyan-300' },
      { label: 'Real-time insights', percent: 82, color: 'from-purple-400 to-pink-300' },
      { label: 'Cost tracking', percent: 85, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [45, 62, 77, 88, 93],
    stat: '89%',
    statLabel: 'Enhanced visibility'
  },

  // Customer-related challenges
  'Customer churn': {
    metrics: [
      { label: 'Retention rate', percent: 65, color: 'from-green-400 to-emerald-300' },
      { label: 'Satisfaction', percent: 72, color: 'from-purple-400 to-pink-300' },
      { label: 'Loyalty', percent: 68, color: 'from-blue-400 to-cyan-300' }
    ],
    chart: [30, 48, 65, 80, 92],
    stat: '65%',
    statLabel: 'Churn reduction'
  },
  'High customer expectations': {
    metrics: [
      { label: 'Expectation met', percent: 78, color: 'from-purple-400 to-pink-300' },
      { label: 'Service quality', percent: 84, color: 'from-blue-400 to-cyan-300' },
      { label: 'Response time', percent: 71, color: 'from-green-400 to-emerald-300' }
    ],
    chart: [38, 56, 71, 83, 89],
    stat: '78%',
    statLabel: 'Expectations exceeded'
  },
  'Low conversion rates': {
    metrics: [
      { label: 'Conversion rate', percent: 68, color: 'from-green-400 to-emerald-300' },
      { label: 'Lead quality', percent: 73, color: 'from-blue-400 to-cyan-300' },
      { label: 'Sales efficiency', percent: 65, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [32, 48, 62, 78, 88],
    stat: '68%',
    statLabel: 'Conversion boost'
  },

  // Default fallback for unmapped challenges
  'default': {
    metrics: [
      { label: 'Efficiency gain', percent: 75, color: 'from-blue-400 to-cyan-300' },
      { label: 'Cost reduction', percent: 68, color: 'from-green-400 to-emerald-300' },
      { label: 'Time saved', percent: 72, color: 'from-purple-400 to-pink-300' }
    ],
    chart: [40, 55, 70, 85, 93],
    stat: '75%',
    statLabel: 'Overall improvement'
  }
};

// Get data for a specific challenge
export function getChallengeData(challenge) {
  return challengeDataMap[challenge] || challengeDataMap['default'];
}

// Get aggregated data for multiple challenges
export function getAggregatedChallengeData(challenges) {
  if (!challenges || challenges.length === 0) {
    return {
      title: 'Common Pain Points',
      subtitle: 'Select challenges to see impact',
      metrics: [
        { label: 'Manual tasks', percent: 78, color: 'from-blue-400 to-cyan-300' },
        { label: 'High costs', percent: 72, color: 'from-green-400 to-emerald-300' },
        { label: 'Data silos', percent: 65, color: 'from-purple-400 to-pink-300' },
        { label: 'Poor CX', percent: 58, color: 'from-pink-400 to-red-300' }
      ],
      chart: [45, 55, 70, 85, 95],
      stat: '92%',
      statLabel: 'See improvement within 90 days'
    };
  }

  // Get data for each challenge
  const challengesData = challenges.map(c => getChallengeData(c));
  
  // Aggregate metrics
  const allMetrics = challengesData.flatMap(d => d.metrics);
  const topMetrics = allMetrics
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 4);
  
  // Average chart data
  const avgChart = [0, 1, 2, 3, 4].map(idx => {
    const sum = challengesData.reduce((acc, d) => acc + d.chart[idx], 0);
    return Math.round(sum / challengesData.length);
  });
  
  // Get highest stat
  const topStat = challengesData.sort((a, b) => 
    parseInt(b.stat) - parseInt(a.stat)
  )[0];

  return {
    title: 'Impact on Your Challenges',
    subtitle: `${challenges.length} challenge${challenges.length > 1 ? 's' : ''} selected`,
    metrics: topMetrics,
    chart: avgChart,
    stat: topStat.stat,
    statLabel: topStat.statLabel
  };
}