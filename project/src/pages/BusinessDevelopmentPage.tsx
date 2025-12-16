import React from 'react';
import { Target, CheckCircle, ArrowRight, Phone, Mail } from 'lucide-react';

const BusinessDevelopmentPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Target className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Business Development
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Accelerate your business growth with strategic development solutions that identify new opportunities and optimize existing processes.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Strategic Business Growth Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our comprehensive business development approach includes market analysis, partnership development, 
                growth strategies, and performance optimization to drive sustainable business expansion. We work 
                closely with your team to identify untapped opportunities and create actionable plans for growth.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                With over 5 years of experience helping businesses scale, we understand the challenges of modern 
                market dynamics and provide tailored solutions that deliver measurable results.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Market Analysis & Research</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Growth Strategy Development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Partnership & Collaboration Setup</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Performance Optimization & Monitoring</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Market Analysis</h3>
              <p className="text-gray-600 mb-4">
                Deep dive into your market landscape, competitor analysis, and opportunity identification 
                to inform strategic decisions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Competitive landscape assessment</li>
                <li>• Market size and growth potential</li>
                <li>• Customer behavior analysis</li>
                <li>• Industry trend identification</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Growth Strategies</h3>
              <p className="text-gray-600 mb-4">
                Customized growth plans that align with your business objectives and market opportunities 
                for sustainable expansion.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Revenue diversification strategies</li>
                <li>• Market expansion planning</li>
                <li>• Product development roadmaps</li>
                <li>• Scaling operational processes</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Partnership Development</h3>
              <p className="text-gray-600 mb-4">
                Strategic partnership identification and development to accelerate growth through 
                collaborative opportunities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Partner identification and vetting</li>
                <li>• Joint venture structuring</li>
                <li>• Strategic alliance development</li>
                <li>• Partnership performance tracking</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Accelerate Your Business Growth?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how our business development expertise can help you identify new opportunities 
              and achieve sustainable growth.
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

export default BusinessDevelopmentPage;