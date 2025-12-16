import React, { useState, useEffect } from 'react';
import { Calculator, TrendingUp, DollarSign, Target, BarChart3, Zap } from 'lucide-react';

interface ROIData {
  monthlyBudget: number;
  industry: string;
  businessType: string;
  currentRevenue: number;
  goals: string[];
}

interface ROIResults {
  projectedROI: number;
  monthlyLeads: number;
  conversionRate: number;
  revenueIncrease: number;
  paybackPeriod: number;
  yearlyProjection: number;
}

const ROICalculator: React.FC = () => {
  const [formData, setFormData] = useState<ROIData>({
    monthlyBudget: 50000,
    industry: '',
    businessType: '',
    currentRevenue: 500000,
    goals: []
  });

  const [results, setResults] = useState<ROIResults | null>(null);
  const [isCalculating, setIsCalculating] = useState(false);

  const industries = [
    { value: 'ecommerce', label: 'E-commerce', multiplier: 4.2 },
    { value: 'saas', label: 'SaaS/Technology', multiplier: 5.8 },
    { value: 'healthcare', label: 'Healthcare', multiplier: 3.9 },
    { value: 'realestate', label: 'Real Estate', multiplier: 6.1 },
    { value: 'education', label: 'Education', multiplier: 4.5 },
    { value: 'finance', label: 'Finance/Insurance', multiplier: 5.2 },
    { value: 'restaurant', label: 'Restaurant/Food', multiplier: 3.7 },
    { value: 'retail', label: 'Retail', multiplier: 4.0 },
    { value: 'manufacturing', label: 'Manufacturing', multiplier: 4.8 },
    { value: 'services', label: 'Professional Services', multiplier: 5.5 }
  ];

  const businessTypes = [
    { value: 'startup', label: 'Startup (0-2 years)', multiplier: 1.2 },
    { value: 'growing', label: 'Growing Business (2-5 years)', multiplier: 1.0 },
    { value: 'established', label: 'Established Business (5+ years)', multiplier: 0.9 },
    { value: 'enterprise', label: 'Enterprise (50+ employees)', multiplier: 0.8 }
  ];

  const goalOptions = [
    { value: 'leads', label: 'Generate More Leads', impact: 1.3 },
    { value: 'sales', label: 'Increase Sales', impact: 1.4 },
    { value: 'brand', label: 'Build Brand Awareness', impact: 1.1 },
    { value: 'traffic', label: 'Drive Website Traffic', impact: 1.2 },
    { value: 'social', label: 'Grow Social Media', impact: 1.15 },
    { value: 'retention', label: 'Improve Customer Retention', impact: 1.25 }
  ];

  const calculateROI = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const industryData = industries.find(i => i.value === formData.industry);
      const businessData = businessTypes.find(b => b.value === formData.businessType);
      
      if (!industryData || !businessData) {
        setIsCalculating(false);
        return;
      }

      // Base calculations
      const industryMultiplier = industryData.multiplier;
      const businessMultiplier = businessData.multiplier;
      const goalMultiplier = formData.goals.reduce((acc, goal) => {
        const goalData = goalOptions.find(g => g.value === goal);
        return acc * (goalData?.impact || 1);
      }, 1);

      // Calculate results
      const baseROI = industryMultiplier * businessMultiplier * goalMultiplier;
      const projectedROI = Math.round(baseROI * 100) / 100;
      
      const monthlyLeads = Math.round((formData.monthlyBudget / 1000) * 2.5 * industryMultiplier);
      const conversionRate = Math.round((5 + (industryMultiplier - 3) * 2) * 10) / 10;
      const revenueIncrease = Math.round(formData.monthlyBudget * projectedROI);
      const paybackPeriod = Math.round((formData.monthlyBudget / revenueIncrease) * 10) / 10;
      const yearlyProjection = revenueIncrease * 12;

      setResults({
        projectedROI,
        monthlyLeads,
        conversionRate,
        revenueIncrease,
        paybackPeriod,
        yearlyProjection
      });

      setIsCalculating(false);
    }, 2000);
  };

  const handleInputChange = (field: keyof ROIData, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    setResults(null); // Reset results when inputs change
  };

  const handleGoalToggle = (goalValue: string) => {
    setFormData(prev => ({
      ...prev,
      goals: prev.goals.includes(goalValue)
        ? prev.goals.filter(g => g !== goalValue)
        : [...prev.goals, goalValue]
    }));
    setResults(null);
  };

  const sendROIReport = () => {
    if (!results) return;

    const report = `🎯 ROI CALCULATOR RESULTS

💼 Business Details:
Industry: ${industries.find(i => i.value === formData.industry)?.label}
Type: ${businessTypes.find(b => b.value === formData.businessType)?.label}
Monthly Budget: ₹${formData.monthlyBudget.toLocaleString()}
Current Revenue: ₹${formData.currentRevenue.toLocaleString()}

📊 Projected Results:
ROI: ${results.projectedROI}x return
Monthly Leads: ${results.monthlyLeads}
Conversion Rate: ${results.conversionRate}%
Revenue Increase: ₹${results.revenueIncrease.toLocaleString()}/month
Payback Period: ${results.paybackPeriod} months
Yearly Projection: ₹${results.yearlyProjection.toLocaleString()}

🎯 Selected Goals:
${formData.goals.map(g => goalOptions.find(opt => opt.value === g)?.label).join(', ')}

Ready to achieve these results? Let's discuss your project!`;

    const whatsappUrl = `https://wa.me/918799146289?text=${encodeURIComponent(report)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-white">
        <div className="flex items-center">
          <Calculator className="w-8 h-8 mr-4" />
          <div>
            <h2 className="text-3xl font-bold">ROI Calculator</h2>
            <p className="text-blue-100">Discover your potential return on marketing investment</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-8">
        {/* Input Section */}
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              💰 Monthly Marketing Budget
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">₹</span>
              <input
                type="range"
                min="10000"
                max="1000000"
                step="10000"
                value={formData.monthlyBudget}
                onChange={(e) => handleInputChange('monthlyBudget', parseInt(e.target.value))}
                className="w-full slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹10K</span>
                <span className="font-bold text-blue-600">₹{formData.monthlyBudget.toLocaleString()}</span>
                <span>₹10L</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              🏢 Industry
            </label>
            <select
              value={formData.industry}
              onChange={(e) => handleInputChange('industry', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
            >
              <option value="">Select your industry</option>
              {industries.map(industry => (
                <option key={industry.value} value={industry.value}>
                  {industry.label}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              📈 Business Type
            </label>
            <select
              value={formData.businessType}
              onChange={(e) => handleInputChange('businessType', e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
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
              💵 Current Monthly Revenue
            </label>
            <div className="relative">
              <span className="absolute left-3 top-3 text-gray-500">₹</span>
              <input
                type="range"
                min="50000"
                max="10000000"
                step="50000"
                value={formData.currentRevenue}
                onChange={(e) => handleInputChange('currentRevenue', parseInt(e.target.value))}
                className="w-full slider"
              />
              <div className="flex justify-between text-sm text-gray-500 mt-2">
                <span>₹50K</span>
                <span className="font-bold text-blue-600">₹{formData.currentRevenue.toLocaleString()}</span>
                <span>₹1Cr</span>
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              🎯 Marketing Goals (Select all that apply)
            </label>
            <div className="grid grid-cols-2 gap-3">
              {goalOptions.map(goal => (
                <label
                  key={goal.value}
                  className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                    formData.goals.includes(goal.value)
                      ? 'border-blue-500 bg-blue-50 text-blue-700'
                      : 'border-gray-300 hover:border-gray-400'
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={formData.goals.includes(goal.value)}
                    onChange={() => handleGoalToggle(goal.value)}
                    className="sr-only"
                  />
                  <span className="text-sm font-medium">{goal.label}</span>
                </label>
              ))}
            </div>
          </div>

          <button
            onClick={calculateROI}
            disabled={!formData.industry || !formData.businessType || formData.goals.length === 0 || isCalculating}
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-lg font-semibold hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            {isCalculating ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Calculating...
              </>
            ) : (
              <>
                <Calculator className="w-5 h-5 mr-2" />
                Calculate ROI
              </>
            )}
          </button>
        </div>

        {/* Results Section */}
        <div className="bg-gray-50 rounded-xl p-6">
          {!results && !isCalculating && (
            <div className="text-center py-12">
              <BarChart3 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Your ROI Results</h3>
              <p className="text-gray-500">Fill in the details and click calculate to see your projected returns</p>
            </div>
          )}

          {isCalculating && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-600 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">Analyzing Your Business</h3>
              <p className="text-gray-500">Calculating personalized ROI projections...</p>
            </div>
          )}

          {results && (
            <div className="space-y-6">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Projected Results</h3>
                <p className="text-gray-600">Based on industry benchmarks and your business profile</p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <TrendingUp className="w-5 h-5 text-green-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">ROI Multiplier</span>
                  </div>
                  <div className="text-2xl font-bold text-green-600">{results.projectedROI}x</div>
                  <div className="text-xs text-gray-500">Return on investment</div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <Target className="w-5 h-5 text-blue-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">Monthly Leads</span>
                  </div>
                  <div className="text-2xl font-bold text-blue-600">{results.monthlyLeads}</div>
                  <div className="text-xs text-gray-500">Qualified prospects</div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <Zap className="w-5 h-5 text-purple-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">Conversion Rate</span>
                  </div>
                  <div className="text-2xl font-bold text-purple-600">{results.conversionRate}%</div>
                  <div className="text-xs text-gray-500">Lead to customer</div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-200">
                  <div className="flex items-center mb-2">
                    <DollarSign className="w-5 h-5 text-orange-600 mr-2" />
                    <span className="text-sm font-semibold text-gray-700">Payback Period</span>
                  </div>
                  <div className="text-2xl font-bold text-orange-600">{results.paybackPeriod}</div>
                  <div className="text-xs text-gray-500">Months to break even</div>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-lg border border-green-200">
                <h4 className="text-lg font-bold text-gray-900 mb-3">Revenue Projections</h4>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-700">Monthly Revenue Increase:</span>
                    <span className="font-bold text-green-600">₹{results.revenueIncrease.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-700">Yearly Revenue Increase:</span>
                    <span className="font-bold text-green-600">₹{results.yearlyProjection.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between border-t pt-2">
                    <span className="text-gray-700 font-semibold">Investment vs Return:</span>
                    <span className="font-bold text-blue-600">
                      ₹{formData.monthlyBudget.toLocaleString()} → ₹{results.revenueIncrease.toLocaleString()}
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  onClick={sendROIReport}
                  className="w-full bg-green-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  📱 Send Report via WhatsApp
                </button>
                
                <div className="flex items-center justify-center my-4">
                  <img 
                    src="/AYUSH SHAH UPI SCANNER.jpg" 
                    alt="Ayush Shah UPI Scanner" 
                    className="w-16 h-16 object-cover rounded-full border-4 border-green-500 shadow-lg mr-3"
                  />
                  <div className="text-left">
                    <p className="text-sm font-semibold text-gray-700">Ready to start?</p>
                    <p className="text-xs text-gray-600">Pay via UPI to Ayush Shah</p>
                  </div>
                </div>
                
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  🚀 Start Your Project Now
                </button>
              </div>

              <div className="text-center text-xs text-gray-500 mt-4">
                * Results are projections based on industry averages and may vary depending on execution and market conditions.
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ROICalculator;