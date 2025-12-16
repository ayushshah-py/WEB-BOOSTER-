import React, { useState } from 'react';
import { PieChart, DollarSign, Target, TrendingUp, CheckCircle, ArrowRight } from 'lucide-react';

interface BudgetAllocation {
  category: string;
  percentage: number;
  amount: number;
  description: string;
  color: string;
}

interface ServicePackage {
  name: string;
  price: number;
  duration: string;
  features: string[];
  recommended: boolean;
  category: string;
}

const BudgetPlanner: React.FC = () => {
  const [totalBudget, setTotalBudget] = useState(100000);
  const [businessType, setBusinessType] = useState('');
  const [primaryGoals, setPrimaryGoals] = useState<string[]>([]);
  const [timeframe, setTimeframe] = useState('');

  const businessTypes = [
    { value: 'startup', label: 'Startup (0-2 years)' },
    { value: 'growing', label: 'Growing Business (2-5 years)' },
    { value: 'established', label: 'Established Business (5+ years)' },
    { value: 'enterprise', label: 'Enterprise (50+ employees)' }
  ];

  const goalOptions = [
    { value: 'brand-awareness', label: 'Brand Awareness' },
    { value: 'lead-generation', label: 'Lead Generation' },
    { value: 'sales-increase', label: 'Sales Increase' },
    { value: 'website-traffic', label: 'Website Traffic' },
    { value: 'social-media', label: 'Social Media Growth' },
    { value: 'customer-retention', label: 'Customer Retention' }
  ];

  const timeframes = [
    { value: '3-months', label: '3 Months' },
    { value: '6-months', label: '6 Months' },
    { value: '12-months', label: '12 Months' },
    { value: 'ongoing', label: 'Ongoing Campaign' }
  ];

  const getBudgetAllocation = (): BudgetAllocation[] => {
    const allocations: BudgetAllocation[] = [];
    
    if (primaryGoals.includes('brand-awareness')) {
      allocations.push({
        category: 'Branding & Design',
        percentage: 25,
        amount: totalBudget * 0.25,
        description: 'Logo, brand identity, visual assets',
        color: '#8B5CF6'
      });
    }

    if (primaryGoals.includes('lead-generation')) {
      allocations.push({
        category: 'Digital Advertising',
        percentage: 40,
        amount: totalBudget * 0.40,
        description: 'Google Ads, Facebook Ads, LinkedIn campaigns',
        color: '#3B82F6'
      });
    }

    if (primaryGoals.includes('website-traffic')) {
      allocations.push({
        category: 'SEO & Content',
        percentage: 30,
        amount: totalBudget * 0.30,
        description: 'Search optimization, blog content, technical SEO',
        color: '#10B981'
      });
    }

    if (primaryGoals.includes('social-media')) {
      allocations.push({
        category: 'Social Media Marketing',
        percentage: 20,
        amount: totalBudget * 0.20,
        description: 'Content creation, community management, influencer partnerships',
        color: '#F59E0B'
      });
    }

    // Default allocation if no specific goals
    if (allocations.length === 0) {
      return [
        {
          category: 'Website Development',
          percentage: 35,
          amount: totalBudget * 0.35,
          description: 'Professional website design and development',
          color: '#3B82F6'
        },
        {
          category: 'Digital Marketing',
          percentage: 40,
          amount: totalBudget * 0.40,
          description: 'Google Ads, social media advertising',
          color: '#10B981'
        },
        {
          category: 'SEO & Content',
          percentage: 25,
          amount: totalBudget * 0.25,
          description: 'Search optimization and content creation',
          color: '#8B5CF6'
        }
      ];
    }

    // Normalize percentages to 100%
    const totalPercentage = allocations.reduce((sum, item) => sum + item.percentage, 0);
    return allocations.map(item => ({
      ...item,
      percentage: Math.round((item.percentage / totalPercentage) * 100),
      amount: Math.round((item.percentage / totalPercentage) * totalBudget)
    }));
  };

  const getRecommendedPackages = (): ServicePackage[] => {
    const packages: ServicePackage[] = [
      {
        name: 'Starter Package',
        price: 50000,
        duration: '3 months',
        features: [
          'Professional Website Design',
          'Basic SEO Setup',
          'Google My Business Optimization',
          'Social Media Setup',
          'Monthly Performance Report'
        ],
        recommended: totalBudget >= 40000 && totalBudget <= 75000,
        category: 'starter'
      },
      {
        name: 'Growth Package',
        price: 100000,
        duration: '6 months',
        features: [
          'Complete Website Development',
          'Advanced SEO Campaign',
          'Google Ads Management',
          'Social Media Marketing',
          'Content Creation (8 posts/month)',
          'Email Marketing Setup',
          'Bi-weekly Strategy Calls'
        ],
        recommended: totalBudget >= 75000 && totalBudget <= 150000,
        category: 'growth'
      },
      {
        name: 'Premium Package',
        price: 200000,
        duration: '12 months',
        features: [
          'Custom Website with E-commerce',
          'Comprehensive SEO Strategy',
          'Multi-Platform Ad Campaigns',
          'Full Social Media Management',
          'Video Content Creation',
          'Influencer Partnerships',
          'Advanced Analytics & Reporting',
          'Dedicated Account Manager',
          'Weekly Strategy Sessions'
        ],
        recommended: totalBudget >= 150000 && totalBudget <= 300000,
        category: 'premium'
      },
      {
        name: 'Enterprise Package',
        price: 500000,
        duration: '12 months',
        features: [
          'Multi-Site Development',
          'Enterprise SEO Strategy',
          'Omnichannel Marketing',
          'Custom CRM Integration',
          'Advanced Marketing Automation',
          'PR & Media Relations',
          'Team Training & Workshops',
          'C-Level Strategy Consulting',
          'Real-time Dashboard Access'
        ],
        recommended: totalBudget >= 300000,
        category: 'enterprise'
      }
    ];

    return packages.filter(pkg => pkg.price <= totalBudget * 1.2); // Show packages within 120% of budget
  };

  const handleGoalToggle = (goal: string) => {
    setPrimaryGoals(prev => 
      prev.includes(goal) 
        ? prev.filter(g => g !== goal)
        : [...prev, goal]
    );
  };

  const sendBudgetPlan = () => {
    const allocations = getBudgetAllocation();
    const packages = getRecommendedPackages();
    const recommendedPackage = packages.find(pkg => pkg.recommended);

    const message = `💰 BUDGET PLANNER RESULTS

📊 Total Budget: ₹${totalBudget.toLocaleString()}
🏢 Business Type: ${businessTypes.find(b => b.value === businessType)?.label}
⏰ Timeframe: ${timeframes.find(t => t.value === timeframe)?.label}

🎯 Primary Goals:
${primaryGoals.map(g => goalOptions.find(opt => opt.value === g)?.label).join(', ')}

💡 Recommended Budget Allocation:
${allocations.map(a => `• ${a.category}: ₹${a.amount.toLocaleString()} (${a.percentage}%)`).join('\n')}

📦 Recommended Package: ${recommendedPackage?.name || 'Custom Solution'}
${recommendedPackage ? `Price: ₹${recommendedPackage.price.toLocaleString()} for ${recommendedPackage.duration}` : ''}

Ready to optimize your marketing budget? Let's discuss your custom strategy!`;

    const whatsappUrl = `https://wa.me/918799146289?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const allocations = getBudgetAllocation();
  const packages = getRecommendedPackages();

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6 text-white">
        <div className="flex items-center">
          <PieChart className="w-8 h-8 mr-4" />
          <div>
            <h2 className="text-3xl font-bold">Budget Planner</h2>
            <p className="text-green-100">Optimize your marketing budget for maximum impact</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              💰 Total Marketing Budget
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">₹</span>
              <input
                type="range"
                min="25000"
                max="1000000"
                step="25000"
                value={totalBudget}
                onChange={(e) => setTotalBudget(parseInt(e.target.value))}
                className="w-full slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹25K</span>
                <span className="font-bold text-green-600">₹{totalBudget.toLocaleString()}</span>
                <span>₹10L</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              🏢 Business Type
            </label>
            <select
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
            >
              <option value="">Select business type</option>
              {businessTypes.map(type => (
                <option key={type.value} value={type.value}>
                  {type.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              ⏰ Campaign Timeframe
            </label>
            <select
              value={timeframe}
              onChange={(e) => setTimeframe(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-600 focus:border-transparent"
            >
              <option value="">Select timeframe</option>
              {timeframes.map(time => (
                <option key={time.value} value={time.value}>
                  {time.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              🎯 Primary Goals (Select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {goalOptions.map(goal => (
                <label
                  key={goal.value}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                    primaryGoals.includes(goal.value)
                      ? 'border-green-500 bg-green-50 text-green-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={primaryGoals.includes(goal.value)}
                    onChange={() => handleGoalToggle(goal.value)}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{goal.label}</span>
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Results Section */}
        <div className="space-y-6">
          {/* Budget Allocation */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <PieChart className="w-5 h-5 mr-2 text-green-600" />
              Recommended Budget Allocation
            </h3>
            
            {allocations.length > 0 ? (
              <div className="space-y-4">
                {allocations.map((allocation, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-gray-200">
                    <div className="flex items-center justify-between mb-2">
                      <div className="flex items-center">
                        <div 
                          className="w-4 h-4 rounded-full mr-3"
                          style={{ backgroundColor: allocation.color }}
                        />
                        <span className="font-semibold text-gray-900">{allocation.category}</span>
                      </div>
                      <span className="text-lg font-bold text-green-600">
                        ₹{allocation.amount.toLocaleString()}
                      </span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-gray-600">{allocation.description}</span>
                      <span className="text-sm font-semibold text-gray-700">{allocation.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                      <div
                        className="h-2 rounded-full transition-all duration-500"
                        style={{ 
                          width: `${allocation.percentage}%`,
                          backgroundColor: allocation.color 
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <Target className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                <p className="text-gray-500">Select your goals to see budget recommendations</p>
              </div>
            )}
          </div>

          {/* Recommended Packages */}
          <div className="bg-gray-50 rounded-xl p-6">
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
              <TrendingUp className="w-5 h-5 mr-2 text-blue-600" />
              Recommended Service Packages
            </h3>
            
            <div className="space-y-4">
              {packages.map((pkg, index) => (
                <div 
                  key={index} 
                  className={`bg-white p-4 rounded-lg border-2 transition-all ${
                    pkg.recommended 
                      ? 'border-green-500 ring-2 ring-green-100' 
                      : 'border-gray-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center">
                      <h4 className="text-lg font-bold text-gray-900">{pkg.name}</h4>
                      {pkg.recommended && (
                        <span className="ml-2 bg-green-100 text-green-800 text-xs font-semibold px-2 py-1 rounded-full">
                          Recommended
                        </span>
                      )}
                    </div>
                    <div className="text-right">
                      <div className="text-xl font-bold text-green-600">₹{pkg.price.toLocaleString()}</div>
                      <div className="text-sm text-gray-500">{pkg.duration}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
                    {pkg.features.slice(0, 4).map((feature, fIndex) => (
                      <div key={fIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  {pkg.features.length > 4 && (
                    <div className="text-sm text-gray-500 mt-2">
                      +{pkg.features.length - 4} more features
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3">
            <button
              onClick={sendBudgetPlan}
              disabled={!businessType || !timeframe || primaryGoals.length === 0}
              className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <DollarSign className="w-5 h-5 mr-2" />
              Send Budget Plan via WhatsApp
            </button>
            
            <div className="flex items-center justify-center my-4">
              <img 
                src="/AYUSH SHAH UPI SCANNER.jpg" 
                alt="Ayush Shah UPI Scanner" 
                className="w-16 h-16 object-cover rounded-full border-4 border-green-500 shadow-lg mr-3"
              />
              <div className="text-left">
                <p className="text-sm font-semibold text-gray-700">Ready to implement?</p>
                <p className="text-xs text-gray-600">UPI payments to Ayush Shah</p>
              </div>
            </div>
            
            <button
              onClick={() => window.location.href = '/contact'}
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BudgetPlanner;