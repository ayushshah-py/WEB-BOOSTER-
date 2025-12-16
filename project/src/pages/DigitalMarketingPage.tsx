import React from 'react';
import { Target, CheckCircle, Phone, Mail } from 'lucide-react';

const DigitalMarketingPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Digital Marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Reach your ideal customers with precision-targeted digital campaigns that deliver measurable results.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Comprehensive Digital Marketing Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our comprehensive digital marketing approach includes Google Ads, Facebook Ads, lead generation 
                funnels, and conversion optimization strategies tailored to your specific business objectives. 
                We create data-driven campaigns that maximize ROI and drive sustainable growth.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With expertise across all major digital platforms, we help businesses reach their target 
                audience effectively and convert prospects into loyal customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Our Services Include</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Google Ads Management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Facebook & Social Media Ads</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Lead Generation Campaigns</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Conversion Rate Optimization</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">G</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Google Ads</h3>
              <p className="text-gray-600 text-sm">Search, Display, Shopping, and YouTube advertising campaigns</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">F</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Facebook Ads</h3>
              <p className="text-gray-600 text-sm">Facebook, Instagram, and Messenger advertising solutions</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">L</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Lead Generation</h3>
              <p className="text-gray-600 text-sm">Targeted campaigns to capture and nurture quality leads</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">C</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Conversion Optimization</h3>
              <p className="text-gray-600 text-sm">A/B testing and optimization to maximize campaign performance</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Digital Marketing Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategy Development</h4>
                <p className="text-gray-600 text-sm">Analyze your business goals and create a customized digital marketing strategy</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Campaign Setup</h4>
                <p className="text-gray-600 text-sm">Create and launch targeted campaigns across selected platforms</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Monitor & Optimize</h4>
                <p className="text-gray-600 text-sm">Continuously monitor performance and optimize for better results</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Report & Scale</h4>
                <p className="text-gray-600 text-sm">Provide detailed reports and scale successful campaigns</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Boost Your Digital Presence?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's create a digital marketing strategy that drives real results for your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+919974311903" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Now: +91 9974311903
              </a>
              <a 
                href="mailto:webbooster1902@gmail.com" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Get Quote via Email
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingPage;