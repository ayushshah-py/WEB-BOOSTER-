import React from 'react';
import { PenTool, CheckCircle, Phone, Mail } from 'lucide-react';

const ContentMarketingPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <PenTool className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Content Marketing
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Engage, educate, and convert your audience with strategic content that ranks high and drives sales.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Strategic Content Marketing Solutions
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our content specialists create compelling blogs, email campaigns, website copy, and marketing 
                materials that establish authority and generate leads. We develop content strategies that align 
                with your business goals and resonate with your target audience.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                From SEO-optimized blog posts to engaging social media content, we create valuable content 
                that builds trust, drives traffic, and converts prospects into customers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Content Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Blog Writing & Content Creation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Email Marketing Campaigns</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Website Copywriting</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Content Strategy Development</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <PenTool className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Blog Writing</h3>
              <p className="text-gray-600 text-sm">SEO-optimized blog posts that drive traffic and engagement</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">E</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Campaigns</h3>
              <p className="text-gray-600 text-sm">Targeted email marketing campaigns that nurture and convert</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">W</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Website Copy</h3>
              <p className="text-gray-600 text-sm">Compelling website copy that converts visitors into customers</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">S</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Social Content</h3>
              <p className="text-gray-600 text-sm">Engaging social media content that builds community</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Content Marketing Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Strategy Development</h4>
                <p className="text-gray-600 text-sm">Create comprehensive content strategy aligned with business goals</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Content Creation</h4>
                <p className="text-gray-600 text-sm">Produce high-quality, engaging content across all formats</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Distribution</h4>
                <p className="text-gray-600 text-sm">Strategic content distribution across multiple channels</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Optimization</h4>
                <p className="text-gray-600 text-sm">Analyze performance and optimize content for better results</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">SEO Content</h3>
              <p className="text-gray-600 mb-4">
                Search engine optimized content that ranks high and drives organic traffic.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Keyword-optimized blog posts</li>
                <li>• Long-form content pieces</li>
                <li>• Technical content writing</li>
                <li>• Local SEO content</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Email Marketing</h3>
              <p className="text-gray-600 mb-4">
                Targeted email campaigns that nurture leads and drive conversions.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Newsletter campaigns</li>
                <li>• Drip email sequences</li>
                <li>• Product launch emails</li>
                <li>• Customer retention campaigns</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Content</h3>
              <p className="text-gray-600 mb-4">
                Engaging social media content that builds community and drives engagement.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Social media posts</li>
                <li>• Visual content creation</li>
                <li>• Community management</li>
                <li>• Influencer collaboration content</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Content That Converts?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's develop a content marketing strategy that builds authority and drives business growth.
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

export default ContentMarketingPage;