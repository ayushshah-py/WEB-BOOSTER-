import React, { useState, useEffect } from 'react';
import { Calculator, Zap, Clock, DollarSign, CheckCircle, ArrowRight } from 'lucide-react';

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  description: string;
  features: string[];
}

interface ScopeOption {
  id: string;
  name: string;
  multiplier: number;
  description: string;
}

interface UrgencyOption {
  id: string;
  name: string;
  multiplier: number;
  description: string;
  icon: string;
}

const InstantQuoteCalculator: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string>('');
  const [selectedScope, setSelectedScope] = useState<string>('');
  const [selectedUrgency, setSelectedUrgency] = useState<string>('');
  const [quote, setQuote] = useState<number>(0);
  const [isCalculating, setIsCalculating] = useState(false);

  const services: ServiceOption[] = [
    {
      id: 'website',
      name: 'Website Design & Development',
      basePrice: 75000,
      description: 'Professional website with modern design',
      features: ['Responsive Design', 'SEO Optimization', 'Content Management', 'Mobile Friendly']
    },
    {
      id: 'digital-marketing',
      name: 'Digital Marketing Campaign',
      basePrice: 120000,
      description: 'Complete digital marketing strategy',
      features: ['Google Ads', 'Social Media', 'Content Creation', 'Analytics']
    },
    {
      id: 'seo',
      name: 'SEO Optimization',
      basePrice: 60000,
      description: 'Search engine optimization package',
      features: ['Keyword Research', 'On-Page SEO', 'Link Building', 'Reporting']
    },
    {
      id: 'social-media',
      name: 'Social Media Management',
      basePrice: 45000,
      description: 'Complete social media strategy',
      features: ['Content Creation', 'Community Management', 'Paid Advertising', 'Analytics']
    },
    {
      id: 'video-production',
      name: 'Video Production',
      basePrice: 80000,
      description: 'Professional video content creation',
      features: ['Script Writing', 'Professional Filming', 'Post-Production', 'Multiple Formats']
    },
    {
      id: 'ecommerce',
      name: 'E-Commerce Management',
      basePrice: 100000,
      description: 'Complete e-commerce solution',
      features: ['Store Setup', 'Product Management', 'Marketing', 'Analytics']
    }
  ];

  const scopes: ScopeOption[] = [
    {
      id: 'basic',
      name: 'Basic Package',
      multiplier: 1.0,
      description: 'Essential features to get started'
    },
    {
      id: 'standard',
      name: 'Standard Package',
      multiplier: 1.5,
      description: 'Enhanced features for growing businesses'
    },
    {
      id: 'premium',
      name: 'Premium Package',
      multiplier: 2.2,
      description: 'Advanced features for established businesses'
    },
    {
      id: 'enterprise',
      name: 'Enterprise Package',
      multiplier: 3.0,
      description: 'Complete solution for large organizations'
    }
  ];

  const urgencies: UrgencyOption[] = [
    {
      id: 'standard',
      name: 'Standard Timeline',
      multiplier: 1.0,
      description: '4-8 weeks delivery',
      icon: '🚶'
    },
    {
      id: 'fast',
      name: 'Fast Track',
      multiplier: 1.3,
      description: '2-4 weeks delivery',
      icon: '🏃'
    },
    {
      id: 'rush',
      name: 'Rush Job',
      multiplier: 1.6,
      description: '1-2 weeks delivery',
      icon: '⚡'
    },
    {
      id: 'emergency',
      name: 'Emergency',
      multiplier: 2.0,
      description: 'Within 1 week',
      icon: '🚨'
    }
  ];

  useEffect(() => {
    if (selectedService && selectedScope && selectedUrgency) {
      calculateQuote();
    }
  }, [selectedService, selectedScope, selectedUrgency]);

  const calculateQuote = () => {
    setIsCalculating(true);
    
    setTimeout(() => {
      const service = services.find(s => s.id === selectedService);
      const scope = scopes.find(s => s.id === selectedScope);
      const urgency = urgencies.find(u => u.id === selectedUrgency);

      if (service && scope && urgency) {
        const basePrice = service.basePrice;
        const scopeMultiplier = scope.multiplier;
        const urgencyMultiplier = urgency.multiplier;
        
        const finalQuote = Math.round(basePrice * scopeMultiplier * urgencyMultiplier);
        setQuote(finalQuote);
      }
      
      setIsCalculating(false);
    }, 1500);
  };

  const sendQuote = () => {
    const service = services.find(s => s.id === selectedService);
    const scope = scopes.find(s => s.id === selectedScope);
    const urgency = urgencies.find(u => u.id === selectedUrgency);

    // Generate UPI link for the quote amount
    const upiParams = [
      `pa=${encodeURIComponent('8799146289@paytm')}`,
      `pn=${encodeURIComponent('Web Booster')}`,
      `am=${quote.toFixed(2)}`,
      `cu=INR`,
      `tn=${encodeURIComponent(`${service?.name} - Web Booster`)}`
    ].join('&');
    const upiLink = `upi://pay?${upiParams}`;

    const message = `💰 INSTANT QUOTE CALCULATION

🎯 Service: ${service?.name}
📦 Package: ${scope?.name}
⏰ Timeline: ${urgency?.name}

💵 Estimated Investment: ₹${quote.toLocaleString()}

📋 What's Included:
${service?.features.map(f => `• ${f}`).join('\n')}

📝 Package Details: ${scope?.description}
⚡ Delivery: ${urgency?.description}

💳 UPI Payment Link: ${upiLink}

This is a ballpark estimate. Let's discuss your specific requirements for an accurate quote!`;

    const whatsappUrl = `https://wa.me/918799146289?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const selectedServiceData = services.find(s => s.id === selectedService);
  const selectedScopeData = scopes.find(s => s.id === selectedScope);
  const selectedUrgencyData = urgencies.find(u => u.id === selectedUrgency);

  return (
    <div className="max-w-6xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-orange-600 to-red-600 px-8 py-6 text-white">
        <div className="flex items-center">
          <Calculator className="w-8 h-8 mr-4" />
          <div>
            <h2 className="text-3xl font-bold">Instant Quote Calculator</h2>
            <p className="text-orange-100">Get a ballpark estimate in seconds</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 p-8">
        {/* Service Selection */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Zap className="w-5 h-5 mr-2 text-orange-600" />
            Select Service
          </h3>
          <div className="space-y-3">
            {services.map((service) => (
              <label
                key={service.id}
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedService === service.id
                    ? 'border-orange-500 bg-orange-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="service"
                  value={service.id}
                  checked={selectedService === service.id}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="sr-only"
                />
                <div className="font-semibold text-gray-900">{service.name}</div>
                <div className="text-sm text-gray-600 mt-1">{service.description}</div>
                <div className="text-sm font-semibold text-orange-600 mt-2">
                  Starting from ₹{service.basePrice.toLocaleString()}
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Scope Selection */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <DollarSign className="w-5 h-5 mr-2 text-green-600" />
            Choose Package
          </h3>
          <div className="space-y-3">
            {scopes.map((scope) => (
              <label
                key={scope.id}
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedScope === scope.id
                    ? 'border-green-500 bg-green-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="scope"
                  value={scope.id}
                  checked={selectedScope === scope.id}
                  onChange={(e) => setSelectedScope(e.target.value)}
                  className="sr-only"
                />
                <div className="font-semibold text-gray-900">{scope.name}</div>
                <div className="text-sm text-gray-600 mt-1">{scope.description}</div>
                <div className="text-sm font-semibold text-green-600 mt-2">
                  {scope.multiplier}x multiplier
                </div>
              </label>
            ))}
          </div>
        </div>

        {/* Urgency Selection */}
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Clock className="w-5 h-5 mr-2 text-blue-600" />
            Timeline Needed
          </h3>
          <div className="space-y-3">
            {urgencies.map((urgency) => (
              <label
                key={urgency.id}
                className={`block p-4 border-2 rounded-lg cursor-pointer transition-all ${
                  selectedUrgency === urgency.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <input
                  type="radio"
                  name="urgency"
                  value={urgency.id}
                  checked={selectedUrgency === urgency.id}
                  onChange={(e) => setSelectedUrgency(e.target.value)}
                  className="sr-only"
                />
                <div className="flex items-center">
                  <span className="text-2xl mr-3">{urgency.icon}</span>
                  <div>
                    <div className="font-semibold text-gray-900">{urgency.name}</div>
                    <div className="text-sm text-gray-600">{urgency.description}</div>
                  </div>
                </div>
                <div className="text-sm font-semibold text-blue-600 mt-2">
                  {urgency.multiplier}x urgency factor
                </div>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Quote Display */}
      {selectedService && selectedScope && selectedUrgency && (
        <div className="border-t border-gray-200 p-8">
          {isCalculating ? (
            <div className="text-center py-8">
              <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-orange-600 mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">Calculating Your Quote...</h3>
              <p className="text-gray-600">Analyzing your requirements</p>
            </div>
          ) : (
            <div className="bg-gradient-to-r from-orange-50 to-red-50 p-8 rounded-xl">
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Your Instant Quote</h3>
                <div className="mb-4">
                  <img 
                    src="/AYUSH SHAH UPI SCANNER.jpg" 
                    alt="Ayush Shah UPI Scanner" 
                    className="w-20 h-20 object-cover rounded-full mx-auto border-4 border-green-500 shadow-lg"
                  />
                  <p className="text-sm text-gray-600 mt-2 font-semibold">Payment via UPI</p>
                </div>
                <div className="text-4xl font-bold text-orange-600 mb-4">
                  ₹{quote.toLocaleString()}
                </div>
                <p className="text-gray-600">This is a ballpark estimate based on your selections</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="bg-white p-4 rounded-lg border border-orange-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Selected Service</h4>
                  <p className="text-orange-600 font-semibold">{selectedServiceData?.name}</p>
                  <p className="text-sm text-gray-600">{selectedServiceData?.description}</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-green-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Package Level</h4>
                  <p className="text-green-600 font-semibold">{selectedScopeData?.name}</p>
                  <p className="text-sm text-gray-600">{selectedScopeData?.description}</p>
                </div>

                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h4 className="font-semibold text-gray-900 mb-2">Timeline</h4>
                  <p className="text-blue-600 font-semibold">{selectedUrgencyData?.name}</p>
                  <p className="text-sm text-gray-600">{selectedUrgencyData?.description}</p>
                </div>
              </div>

              {selectedServiceData && (
                <div className="bg-white p-6 rounded-lg border border-gray-200 mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">What's Included:</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {selectedServiceData.features.map((feature, index) => (
                      <div key={index} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={sendQuote}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center justify-center"
                >
                  📱 Send Quote via WhatsApp
                </button>
                <button
                  onClick={() => window.location.href = '/contact'}
                  className="bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center justify-center"
                >
                  Get Detailed Proposal
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
              </div>

              <div className="text-center text-sm text-gray-500 mt-4">
                * Final pricing may vary based on specific requirements and project complexity
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default InstantQuoteCalculator;