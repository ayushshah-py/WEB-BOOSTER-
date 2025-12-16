import React, { useState } from 'react';
import { CreditCard, Smartphone, QrCode, CheckCircle, ArrowRight } from 'lucide-react';
import UPIPaymentQR from './UPIPaymentQR';

interface PaymentPackage {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  popular?: boolean;
  originalPrice?: number;
}

const PaymentSection: React.FC = () => {
  const [showQRModal, setShowQRModal] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<PaymentPackage | null>(null);

  const packages: PaymentPackage[] = [
    {
      id: 'consultation',
      name: 'Strategy Consultation',
      price: 2500,
      originalPrice: 5000,
      description: 'Perfect for getting started with expert guidance',
      features: [
        '60-minute strategy session',
        'Personalized action plan',
        'Market analysis',
        'Competitor research',
        'Growth recommendations'
      ]
    },
    {
      id: 'starter',
      name: 'Starter Package',
      price: 50000,
      originalPrice: 75000,
      description: 'Essential digital marketing foundation',
      features: [
        'Professional website audit',
        'Basic SEO optimization',
        'Social media setup',
        'Google My Business optimization',
        'Monthly performance report'
      ],
      popular: true
    },
    {
      id: 'growth',
      name: 'Growth Package',
      price: 120000,
      originalPrice: 180000,
      description: 'Comprehensive marketing campaign for scaling businesses',
      features: [
        'Complete marketing strategy',
        'Google & Facebook Ads',
        'Content creation (12 posts)',
        'Email marketing setup',
        'Advanced analytics',
        'Bi-weekly strategy calls'
      ]
    },
    {
      id: 'premium',
      name: 'Premium Package',
      price: 250000,
      originalPrice: 350000,
      description: 'Complete digital transformation solution',
      features: [
        'Custom website development',
        'Advanced SEO campaign',
        'Video production',
        'Influencer partnerships',
        'Dedicated account manager',
        'Weekly strategy sessions'
      ]
    }
  ];

  const handlePayNow = (pkg: PaymentPackage) => {
    setSelectedPackage(pkg);
    setShowQRModal(true);
    
    // Track payment initiation
    const paymentLog = {
      package: pkg.name,
      amount: pkg.price,
      timestamp: new Date().toISOString(),
      action: 'Payment Initiated'
    };
    
    const existingLogs = JSON.parse(localStorage.getItem('paymentLogs') || '[]');
    existingLogs.push(paymentLog);
    localStorage.setItem('paymentLogs', JSON.stringify(existingLogs));
  };

  const calculateSavings = (originalPrice: number, currentPrice: number) => {
    return Math.round(((originalPrice - currentPrice) / originalPrice) * 100);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <CreditCard className="w-5 h-5 mr-2" />
            <span className="font-semibold">Instant UPI Payments</span>
          </div>
          <div className="mb-6">
            <img 
              src="/AYUSH SHAH UPI SCANNER.jpg" 
              alt="Ayush Shah UPI Scanner" 
              className="w-32 h-32 object-cover rounded-full mx-auto border-4 border-green-500 shadow-lg"
            />
            <p className="text-sm text-gray-600 mt-2 font-semibold">All payments received by Ayush Shah</p>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Choose Your Package & Pay Instantly
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Select a package and pay securely using UPI. Get instant QR codes for Google Pay, PhonePe, Paytm, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className={`bg-white rounded-2xl shadow-lg border-2 transition-all duration-300 transform hover:-translate-y-2 ${
                pkg.popular 
                  ? 'border-green-500 ring-2 ring-green-100' 
                  : 'border-gray-200 hover:border-green-300'
              }`}
            >
              {pkg.popular && (
                <div className="bg-green-500 text-white text-center py-2 rounded-t-2xl font-semibold text-sm">
                  🌟 Most Popular
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{pkg.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{pkg.description}</p>
                
                <div className="mb-4">
                  {pkg.originalPrice && (
                    <div className="flex items-center mb-2">
                      <span className="text-gray-400 line-through text-lg">₹{pkg.originalPrice.toLocaleString()}</span>
                      <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded-full ml-2">
                        {calculateSavings(pkg.originalPrice, pkg.price)}% OFF
                      </span>
                    </div>
                  )}
                  <div className="text-3xl font-bold text-green-600">₹{pkg.price.toLocaleString()}</div>
                </div>

                <div className="space-y-2 mb-6">
                  {pkg.features.map((feature, index) => (
                    <div key={index} className="flex items-center text-sm">
                      <CheckCircle className="w-4 h-4 text-green-500 mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => handlePayNow(pkg)}
                  className={`w-full py-3 px-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    pkg.popular
                      ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white hover:shadow-lg transform hover:-translate-y-1'
                      : 'bg-gray-900 text-white hover:bg-gray-800'
                  }`}
                >
                  <QrCode className="w-5 h-5 mr-2" />
                  Pay Now with UPI
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Payment Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <QrCode className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Instant QR Generation</h3>
            <p className="text-gray-600 text-sm">Dynamic QR codes generated instantly for any amount</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Smartphone className="w-8 h-8 text-blue-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">All UPI Apps Supported</h3>
            <p className="text-gray-600 text-sm">Works with Google Pay, PhonePe, Paytm, and all UPI apps</p>
          </div>

          <div className="text-center">
            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-purple-600" />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">Instant Confirmation</h3>
            <p className="text-gray-600 text-sm">Immediate payment confirmation and receipt</p>
          </div>
        </div>

        {/* Custom Payment Option */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Need a Custom Quote?</h3>
          <p className="text-gray-600 mb-6">
            For custom projects or enterprise solutions, get a personalized quote and payment plan.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => {
                setSelectedPackage(null);
                setShowQRModal(true);
              }}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
            >
              <QrCode className="w-5 h-5 mr-2" />
              Generate Custom QR
            </button>
            <a
              href="/contact"
              className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
            >
              Get Custom Quote
              <ArrowRight className="w-5 h-5 ml-2" />
            </a>
          </div>
        </div>
      </div>

      {/* UPI Payment QR Modal */}
      <UPIPaymentQR
        isOpen={showQRModal}
        onClose={() => {
          setShowQRModal(false);
          setSelectedPackage(null);
        }}
        selectedPackage={selectedPackage}
      />
    </section>
  );
};

export default PaymentSection;