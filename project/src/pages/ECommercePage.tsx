import React from 'react';
import { ShoppingCart, CheckCircle, Phone, Mail } from 'lucide-react';

const ECommercePage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ShoppingCart className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            E-Commerce Management
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Maximize your online sales potential with expert e-commerce account management.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional E-Commerce Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We optimize your presence on Amazon, Flipkart, Meesho, and other platforms, handling everything 
                from product listings to inventory management for sustained growth. Our e-commerce experts 
                understand the nuances of each platform and optimize accordingly.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From product photography to customer service management, we provide end-to-end e-commerce 
                solutions that drive sales and build customer loyalty.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">E-Commerce Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Amazon Store Management</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Product Listing Optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Inventory Management Systems</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Sales Analytics & Reporting</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">A</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Amazon Management</h3>
              <p className="text-gray-600 text-sm">Complete Amazon store setup, optimization, and management</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">F</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Flipkart Management</h3>
              <p className="text-gray-600 text-sm">Flipkart seller account optimization and growth strategies</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">M</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Meesho Management</h3>
              <p className="text-gray-600 text-sm">Meesho platform optimization for maximum reach and sales</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <ShoppingCart className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-Platform</h3>
              <p className="text-gray-600 text-sm">Integrated management across multiple e-commerce platforms</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our E-Commerce Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Account Setup</h4>
                <p className="text-gray-600 text-sm">Complete seller account setup and verification</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Product Listing</h4>
                <p className="text-gray-600 text-sm">Optimized product listings with professional photography</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
                <p className="text-gray-600 text-sm">Continuous optimization for better visibility and sales</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Growth & Scale</h4>
                <p className="text-gray-600 text-sm">Scale operations and expand to new marketplaces</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Product Optimization</h3>
              <p className="text-gray-600 mb-4">
                Optimize your product listings for maximum visibility and conversion rates.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• SEO-optimized product titles</li>
                <li>• Professional product photography</li>
                <li>• Compelling product descriptions</li>
                <li>• Competitive pricing strategies</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inventory Management</h3>
              <p className="text-gray-600 mb-4">
                Efficient inventory management to prevent stockouts and optimize cash flow.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Real-time inventory tracking</li>
                <li>• Automated reorder alerts</li>
                <li>• Demand forecasting</li>
                <li>• Multi-channel synchronization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Analytics</h3>
              <p className="text-gray-600 mb-4">
                Detailed analytics and reporting to track performance and identify growth opportunities.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Sales performance tracking</li>
                <li>• Customer behavior analysis</li>
                <li>• Competitor monitoring</li>
                <li>• ROI optimization reports</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Maximize Your E-Commerce Sales?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's optimize your online store presence and drive sustainable e-commerce growth.
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

export default ECommercePage;