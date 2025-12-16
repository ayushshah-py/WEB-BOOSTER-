import React from 'react';
import { Star, ArrowLeft, ExternalLink, Globe, Zap, Code } from 'lucide-react';
import { Link } from 'react-router-dom';

const TechStartupCaseStudy: React.FC = () => {
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
              Tech Startup Website Development
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A cutting-edge website transformation that established a tech startup as an industry leader through exceptional performance and user experience.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Tech Startup Website"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Project Overview
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This transformative website development project showcases our expertise in creating high-performance digital solutions for emerging technology companies. The client, an innovative AI-powered SaaS startup, approached us with a critical challenge: their existing website was failing to convert visitors into customers, had poor search engine visibility, and couldn't effectively communicate their complex technology solutions to potential clients. Our comprehensive approach began with extensive user research and competitor analysis, followed by the development of a modern, responsive website built on cutting-edge technologies including React, TypeScript, and advanced performance optimization techniques. We implemented a sophisticated content management system, integrated advanced analytics tracking, and created a seamless user experience that guides visitors through a carefully crafted conversion funnel. The website features interactive product demonstrations, detailed case studies, and an intuitive interface that makes complex AI concepts accessible to business decision-makers. Our SEO strategy involved technical optimization, content creation, and link building that resulted in first-page rankings for competitive industry keywords. The project's success is evidenced not only by the impressive 95% page speed score and 200% increase in organic traffic but also by the 40% improvement in conversion rates, which directly translated to increased revenue and successful funding rounds for the startup. This project demonstrates our ability to understand complex technical products and translate them into compelling digital experiences that drive business growth.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">95% Page Speed Score</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">200% Organic Traffic Increase</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">40% Conversion Rate Improvement</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-2xl text-center">
              <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Modern Design</h3>
              <p className="text-gray-600">Cutting-edge design principles with exceptional user experience</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <Zap className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Lightning Fast</h3>
              <p className="text-gray-600">Optimized performance with 95% page speed score</p>
            </div>
            <div className="bg-purple-50 p-8 rounded-2xl text-center">
              <Code className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Advanced Technology</h3>
              <p className="text-gray-600">Built with modern web technologies and best practices</p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Team Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Shivam Jaiswal - Project Leadership</h4>
                <p className="text-blue-800">Project oversight and SEO strategy implementation leveraging 5+ years of digital marketing experience to ensure optimal results and successful project delivery that exceeded client expectations.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-green-900 mb-3">Ayush Shah - Lead Development</h4>
                <p className="text-green-800">Full-stack development and performance optimization using modern web technologies, achieving the exceptional 95% page speed score and implementing advanced tracking systems for conversion optimization.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-purple-900 mb-3">Content & SEO Team</h4>
                <p className="text-purple-800">Content strategy and SEO optimization that contributed to the significant 200% organic traffic growth and improved search rankings for competitive industry keywords.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Need a High-Performance Website?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's create a modern, fast, and SEO-optimized website that drives results and establishes your business as an industry leader.
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

export default TechStartupCaseStudy;