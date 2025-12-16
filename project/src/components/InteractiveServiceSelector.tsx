import React, { useState } from 'react';
import { ChevronRight, ChevronLeft, Target, CheckCircle, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  options: {
    value: string;
    label: string;
    icon: string;
  }[];
}

interface ServiceRecommendation {
  service: string;
  package: string;
  price: string;
  features: string[];
  description: string;
  urgency: string;
}

const InteractiveServiceSelector: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<{ [key: string]: string }>({});
  const [recommendation, setRecommendation] = useState<ServiceRecommendation | null>(null);

  const questions: Question[] = [
    {
      id: 'business_stage',
      question: 'What stage is your business in?',
      options: [
        { value: 'startup', label: 'Just Starting (0-1 years)', icon: '🚀' },
        { value: 'growing', label: 'Growing Business (1-3 years)', icon: '📈' },
        { value: 'established', label: 'Established (3+ years)', icon: '🏢' },
        { value: 'enterprise', label: 'Large Enterprise', icon: '🌟' }
      ]
    },
    {
      id: 'main_goal',
      question: 'What\'s your primary marketing goal?',
      options: [
        { value: 'awareness', label: 'Build Brand Awareness', icon: '🎯' },
        { value: 'leads', label: 'Generate More Leads', icon: '📞' },
        { value: 'sales', label: 'Increase Sales', icon: '💰' },
        { value: 'online', label: 'Establish Online Presence', icon: '🌐' }
      ]
    },
    {
      id: 'budget_range',
      question: 'What\'s your monthly marketing budget?',
      options: [
        { value: 'small', label: 'Under ₹50,000', icon: '💵' },
        { value: 'medium', label: '₹50,000 - ₹2,00,000', icon: '💸' },
        { value: 'large', label: '₹2,00,000 - ₹5,00,000', icon: '💳' },
        { value: 'enterprise', label: '₹5,00,000+', icon: '💎' }
      ]
    },
    {
      id: 'timeline',
      question: 'When do you need to see results?',
      options: [
        { value: 'immediate', label: 'ASAP (1-2 months)', icon: '⚡' },
        { value: 'short', label: 'Short-term (3-6 months)', icon: '🏃' },
        { value: 'medium', label: 'Medium-term (6-12 months)', icon: '🚶' },
        { value: 'long', label: 'Long-term (12+ months)', icon: '🧘' }
      ]
    },
    {
      id: 'current_challenges',
      question: 'What\'s your biggest marketing challenge?',
      options: [
        { value: 'visibility', label: 'Low Online Visibility', icon: '👁️' },
        { value: 'competition', label: 'Too Much Competition', icon: '⚔️' },
        { value: 'conversion', label: 'Poor Conversion Rates', icon: '📊' },
        { value: 'resources', label: 'Limited Time/Resources', icon: '⏰' }
      ]
    }
  ];

  const getRecommendation = (): ServiceRecommendation => {
    const { business_stage, main_goal, budget_range, timeline, current_challenges } = answers;

    // Logic to determine recommendation based on answers
    if (main_goal === 'online' && budget_range === 'small') {
      return {
        service: 'Website Design & Basic SEO',
        package: 'Starter Package',
        price: '₹45,000 - ₹75,000',
        features: [
          'Professional Website Design',
          'Mobile Responsive Layout',
          'Basic SEO Setup',
          'Google My Business Optimization',
          'Social Media Integration'
        ],
        description: 'Perfect for establishing your online presence with a professional website and basic digital marketing setup.',
        urgency: timeline === 'immediate' ? 'Rush delivery available' : 'Standard timeline'
      };
    }

    if (main_goal === 'leads' && budget_range === 'medium') {
      return {
        service: 'Digital Marketing Campaign',
        package: 'Growth Package',
        price: '₹1,20,000 - ₹2,00,000',
        features: [
          'Google Ads Management',
          'Facebook & Instagram Ads',
          'Landing Page Optimization',
          'Lead Tracking System',
          'Monthly Performance Reports'
        ],
        description: 'Comprehensive lead generation campaign designed to bring qualified prospects to your business.',
        urgency: timeline === 'immediate' ? 'Fast-track setup available' : 'Standard implementation'
      };
    }

    if (main_goal === 'sales' && budget_range === 'large') {
      return {
        service: 'Complete Digital Transformation',
        package: 'Premium Package',
        price: '₹3,50,000 - ₹5,00,000',
        features: [
          'Advanced Website Development',
          'Multi-Channel Marketing',
          'Sales Funnel Optimization',
          'CRM Integration',
          'Advanced Analytics & Reporting'
        ],
        description: 'Full-scale digital marketing solution to maximize sales and revenue growth.',
        urgency: timeline === 'immediate' ? 'Priority implementation' : 'Comprehensive rollout'
      };
    }

    // Default recommendation
    return {
      service: 'Custom Marketing Solution',
      package: 'Tailored Package',
      price: 'Custom Quote',
      features: [
        'Personalized Strategy Development',
        'Custom Service Mix',
        'Flexible Implementation',
        'Dedicated Account Manager',
        'Regular Strategy Reviews'
      ],
      description: 'A completely customized solution based on your unique business needs and goals.',
      urgency: 'Timeline based on your requirements'
    };
  };

  const handleAnswer = (value: string) => {
    const newAnswers = { ...answers, [questions[currentQuestion].id]: value };
    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // Generate recommendation
      setRecommendation(getRecommendation());
    }
  };

  const goBack = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const restart = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setRecommendation(null);
  };

  const sendRecommendation = () => {
    if (!recommendation) return;

    const message = `🎯 PERSONALIZED SERVICE RECOMMENDATION

📋 Your Answers:
• Business Stage: ${questions[0].options.find(o => o.value === answers.business_stage)?.label}
• Primary Goal: ${questions[1].options.find(o => o.value === answers.main_goal)?.label}
• Budget Range: ${questions[2].options.find(o => o.value === answers.budget_range)?.label}
• Timeline: ${questions[3].options.find(o => o.value === answers.timeline)?.label}
• Main Challenge: ${questions[4].options.find(o => o.value === answers.current_challenges)?.label}

🎯 Recommended Solution:
Service: ${recommendation.service}
Package: ${recommendation.package}
Investment: ${recommendation.price}
Timeline: ${recommendation.urgency}

✨ What's Included:
${recommendation.features.map(f => `• ${f}`).join('\n')}

📝 Description: ${recommendation.description}

Ready to get started? Let's discuss your personalized strategy!`;

    const whatsappUrl = `https://wa.me/918799146289?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (recommendation) {
    return (
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6 text-white">
          <div className="flex items-center">
            <Target className="w-8 h-8 mr-4" />
            <div>
              <h2 className="text-3xl font-bold">Your Personalized Recommendation</h2>
              <p className="text-green-100">Based on your unique business needs</p>
            </div>
          </div>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h3 className="text-3xl font-bold text-gray-900 mb-2">{recommendation.service}</h3>
            <div className="inline-block bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold">
              {recommendation.package}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">Investment Range</h4>
              <div className="text-2xl font-bold text-green-600 mb-2">{recommendation.price}</div>
              <div className="text-sm text-gray-600">{recommendation.urgency}</div>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-gray-900 mb-4">What's Included</h4>
              <div className="space-y-2">
                {recommendation.features.slice(0, 3).map((feature, index) => (
                  <div key={index} className="flex items-center text-sm">
                    <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </div>
                ))}
                {recommendation.features.length > 3 && (
                  <div className="text-sm text-gray-500">+{recommendation.features.length - 3} more features</div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-blue-50 p-6 rounded-xl mb-8">
            <h4 className="text-lg font-bold text-gray-900 mb-3">Why This Solution?</h4>
            <p className="text-gray-700">{recommendation.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={sendRecommendation}
              className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
            >
              📱 Send via WhatsApp
            </button>
            <button
              onClick={() => window.location.href = '/contact'}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Get Detailed Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
            <button
              onClick={restart}
              className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Target className="w-8 h-8 mr-4" />
            <div>
              <h2 className="text-3xl font-bold">Service Selector</h2>
              <p className="text-blue-100">Find your perfect marketing solution</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-100">Question</div>
            <div className="text-2xl font-bold">{currentQuestion + 1}/{questions.length}</div>
          </div>
        </div>
        
        <div className="mt-4">
          <div className="w-full bg-blue-400 rounded-full h-2">
            <div
              className="bg-white h-2 rounded-full transition-all duration-500"
              style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>
      </div>

      <div className="p-8">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            {questions[currentQuestion].question}
          </h3>
          <p className="text-gray-600">Choose the option that best describes your situation</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option.value)}
              className="p-6 border-2 border-gray-200 rounded-xl hover:border-blue-500 hover:bg-blue-50 transition-all duration-300 text-left group"
            >
              <div className="flex items-center">
                <span className="text-3xl mr-4">{option.icon}</span>
                <div>
                  <div className="font-semibold text-gray-900 group-hover:text-blue-700">
                    {option.label}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          <button
            onClick={goBack}
            disabled={currentQuestion === 0}
            className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
          >
            <ChevronLeft className="w-5 h-5 mr-2" />
            Previous
          </button>

          <div className="text-sm text-gray-500 flex items-center">
            Press any option to continue
            <ChevronRight className="w-4 h-4 ml-1" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractiveServiceSelector;