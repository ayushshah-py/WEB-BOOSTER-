import React from 'react';
import { Star, ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

const SEOCaseStudy: React.FC = () => {
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
              SEO Success Story
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic content marketing and SEO campaign that established thought leadership in the healthcare industry.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="SEO Campaign Success"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Campaign Overview
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our strategic SEO and content marketing campaign transformed our client from a local healthcare 
                provider into a recognized industry authority. Through comprehensive keyword research, content 
                optimization, and link building strategies, we achieved remarkable organic growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">500% Organic Growth</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">Industry Authority Status</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">10K+ Leads Generated</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Team Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Shivam Jaiswal - Strategic Planning</h4>
                <p className="text-blue-800">Strategic planning and client consultation with 5+ years of industry expertise, establishing the foundation for industry authority.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-green-900 mb-3">Content Team</h4>
                <p className="text-green-800">Content creation and SEO optimization that drove 500% organic growth and established thought leadership in healthcare.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-purple-900 mb-3">Technical Team</h4>
                <p className="text-purple-800">Technical implementation and analytics tracking that generated over 10,000 qualified leads for the client.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Dominate Search Results?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's create an SEO strategy that establishes your business as an industry authority and drives massive organic growth.
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

export default SEOCaseStudy;