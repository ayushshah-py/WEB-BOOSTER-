import React from 'react';
import { Search, CheckCircle, Phone, Mail } from 'lucide-react';

const SEOPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Search className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Search Engine Optimization
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Dominate search results and increase organic visibility with our proven SEO strategies.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional SEO Services
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our experts optimize your website's technical foundation, content, and authority signals to 
                achieve top rankings on Google and drive qualified traffic to your business. We use proven 
                white-hat SEO techniques that deliver sustainable, long-term results.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From technical SEO audits to content optimization and link building, we provide comprehensive 
                SEO solutions that help your business rank higher and attract more customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">SEO Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Technical SEO Implementation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Content Optimization Strategies</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Link Building & Authority Development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Local SEO for Business Visibility</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Technical SEO</h3>
              <p className="text-gray-600 text-sm">Website structure, speed optimization, and technical improvements</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">K</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Keyword Research</h3>
              <p className="text-gray-600 text-sm">Strategic keyword analysis and targeting for maximum impact</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">C</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Content Optimization</h3>
              <p className="text-gray-600 text-sm">High-quality content creation and optimization for search engines</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">L</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Link Building</h3>
              <p className="text-gray-600 text-sm">Quality backlink acquisition and authority building strategies</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our SEO Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">SEO Audit</h4>
                <p className="text-gray-600 text-sm">Comprehensive analysis of your website's current SEO performance</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategy Development</h4>
                <p className="text-gray-600 text-sm">Create customized SEO strategy based on your business goals</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Implementation</h4>
                <p className="text-gray-600 text-sm">Execute technical improvements and content optimization</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Monitor & Report</h4>
                <p className="text-gray-600 text-sm">Track rankings and provide detailed performance reports</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">On-Page SEO</h3>
              <p className="text-gray-600 mb-4">
                Optimize individual pages for better search engine rankings and user experience.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Title tag optimization</li>
                <li>• Meta description enhancement</li>
                <li>• Header structure improvement</li>
                <li>• Internal linking strategy</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Off-Page SEO</h3>
              <p className="text-gray-600 mb-4">
                Build domain authority through quality backlinks and external optimization strategies.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Quality backlink acquisition</li>
                <li>• Guest posting opportunities</li>
                <li>• Local citation building</li>
                <li>• Social media optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Local SEO</h3>
              <p className="text-gray-600 mb-4">
                Optimize your business for local search results and Google My Business visibility.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Google My Business optimization</li>
                <li>• Local keyword targeting</li>
                <li>• Review management</li>
                <li>• Local directory submissions</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Dominate Search Results?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's optimize your website for better search engine rankings and increased organic traffic.
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

export default SEOPage;