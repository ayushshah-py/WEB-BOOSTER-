import React from 'react';
import { Globe, CheckCircle, Phone, Mail } from 'lucide-react';

const WebsiteDesignPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Globe className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Website Design
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Make powerful first impressions with stunning, responsive websites that convert visitors into customers.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Website Design & Development
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our designs combine aesthetic excellence with user experience optimization, ensuring your site 
                performs beautifully across all devices while driving business growth. We create websites that 
                not only look stunning but also convert visitors into customers.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From responsive design to mobile-first approach, we ensure your website provides an exceptional 
                user experience that keeps visitors engaged and drives conversions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Design Features</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Responsive Design</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">UX/UI Optimization</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Mobile-First Approach</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Conversion-Focused Design</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Responsive Design</h3>
              <p className="text-gray-600 mb-4">
                Websites that look and function perfectly on all devices - desktop, tablet, and mobile.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Cross-device compatibility</li>
                <li>• Flexible grid layouts</li>
                <li>• Optimized images and media</li>
                <li>• Touch-friendly interfaces</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">UX/UI Optimization</h3>
              <p className="text-gray-600 mb-4">
                User-centered design that prioritizes usability, accessibility, and conversion optimization.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Intuitive navigation design</li>
                <li>• User journey optimization</li>
                <li>• Accessibility compliance</li>
                <li>• Performance optimization</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Conversion Focus</h3>
              <p className="text-gray-600 mb-4">
                Strategic design elements that guide visitors toward taking desired actions and becoming customers.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Strategic call-to-action placement</li>
                <li>• Lead capture optimization</li>
                <li>• Trust signal integration</li>
                <li>• A/B testing capabilities</li>
              </ul>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Design Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Discovery</h4>
                <p className="text-gray-600 text-sm">Understanding your business goals and target audience</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Planning</h4>
                <p className="text-gray-600 text-sm">Creating wireframes and site architecture</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Design</h4>
                <p className="text-gray-600 text-sm">Visual design and user interface creation</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Development</h4>
                <p className="text-gray-600 text-sm">Coding and functionality implementation</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">5</div>
                <h4 className="font-semibold text-gray-900 mb-2">Launch</h4>
                <p className="text-gray-600 text-sm">Testing, optimization, and website launch</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Perfect Website?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's design a website that represents your brand beautifully and converts visitors into customers.
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

export default WebsiteDesignPage;