import React from 'react';
import { Star, ArrowLeft, ExternalLink, Target, TrendingUp, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const DigitalMarketingCaseStudy: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/our-work" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Our Work
          </Link>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Digital Marketing Campaign Success
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A comprehensive digital marketing transformation that revolutionized our client's online presence and sales performance.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Digital Marketing Campaign"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Campaign Overview
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This groundbreaking digital marketing campaign represents one of our most successful transformations, where we took a traditional retail business struggling with declining foot traffic and transformed it into a digital powerhouse. The client, a mid-sized fashion retailer with three physical locations, was facing significant challenges due to changing consumer behavior and increased online competition. Our comprehensive approach involved a complete digital ecosystem overhaul, starting with an in-depth analysis of their target audience, competitor landscape, and market opportunities. We developed a multi-channel strategy that seamlessly integrated Google Ads, Facebook advertising, Instagram marketing, email campaigns, and influencer partnerships. The campaign's success stemmed from our data-driven approach, where we continuously monitored performance metrics, conducted A/B testing on ad creatives, and optimized conversion funnels based on real-time user behavior. Our team implemented advanced tracking systems to measure customer journey touchpoints, enabling us to identify the most effective channels and allocate budget accordingly. The result was not just a 300% increase in sales, but a fundamental shift in how the business operates, with online sales now representing 70% of their total revenue and a loyal community of over 50,000 engaged followers across social media platforms.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">300% Sales Increase</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">50K+ New Followers</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">Top 3 Google Rankings</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-2xl text-center">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Planning</h3>
              <p className="text-gray-600">Comprehensive market analysis and strategic roadmap development</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <TrendingUp className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Performance Growth</h3>
              <p className="text-gray-600">Continuous optimization and performance enhancement</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl text-center">
              <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Building</h3>
              <p className="text-gray-600">Building engaged communities and loyal customer relationships</p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Team Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Shivam Jaiswal - Strategic Leadership</h4>
                <p className="text-blue-800">Led strategic planning and client relationship management with 5+ years of digital marketing expertise, ensuring campaign alignment with business objectives and driving the overall vision that resulted in the 300% sales increase.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-green-900 mb-3">Development Team</h4>
                <p className="text-green-800">Developed custom e-commerce solutions and technical implementation to support the marketing campaigns, including advanced tracking systems and conversion optimization tools that enabled precise performance measurement.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-purple-900 mb-3">Creative Team</h4>
                <p className="text-purple-800">Created comprehensive brand identity and visual assets that resonated with the target audience, including video content, graphics, and campaign materials that enhanced brand recognition and engagement.</p>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-orange-900 mb-3">Social Media Team</h4>
                <p className="text-orange-800">Managed social media campaigns and community engagement, building a loyal following of 50K+ engaged users and driving consistent engagement that translated into sales and brand loyalty.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Achieve Similar Results?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's discuss how we can create a customized digital marketing strategy that transforms your business and drives exceptional growth.
            </p>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DigitalMarketingCaseStudy;