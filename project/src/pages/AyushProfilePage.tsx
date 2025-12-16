import React from 'react';
import { ArrowLeft, Linkedin, Mail, Phone, Award, Target, Users, TrendingUp, Heart, Lightbulb } from 'lucide-react';
import { Link } from 'react-router-dom';

const AyushProfilePage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/team" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Team
          </Link>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Ayush Shah
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Founder & Visionary Leader of Web Booster
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div className="text-center lg:text-left">
              <div className="relative inline-block">
                <img 
                  src="/AYUSH PASSPORT SIZE.jpeg" 
                  alt="Ayush Shah - Founder & Visionary Leader"
                  className="w-80 h-80 object-cover rounded-2xl shadow-2xl mx-auto lg:mx-0"
                />
                <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white p-3 rounded-full">
                  <Award className="w-6 h-6" />
                </div>
              </div>
              
              <div className="mt-8 text-center lg:text-left">
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Ayush Shah</h2>
                <p className="text-xl text-blue-600 font-semibold mb-4">Founder & Visionary Leader</p>
                <div className="flex items-center justify-center lg:justify-start space-x-4 text-sm text-gray-600 mb-6">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>3+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-green-500" />
                    <span>500+ Clients</span>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <a 
                    href="tel:+918799146289" 
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                  >
                    <Phone className="mr-2 w-5 h-5" />
                    Call Ayush
                  </a>
                  <a 
                    href="mailto:ayushs1904@gmail.com" 
                    className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                  >
                    <Mail className="mr-2 w-5 h-5" />
                    Email Ayush
                  </a>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-8">About Ayush Shah – Founder & Visionary Leader</h3>
              
              <div className="prose prose-lg text-gray-600 leading-relaxed">
                <p className="mb-6">
                  Ayush Shah is the driving force behind Web Booster, bringing together a powerful blend of creativity, 
                  technical expertise, and strategic marketing insight. With a passion for empowering businesses to achieve 
                  exceptional online growth, Ayush has dedicated his career to crafting innovative digital solutions that 
                  deliver measurable results.
                </p>
                
                <p className="mb-6">
                  From the early stages of his professional journey, Ayush demonstrated a keen understanding of emerging 
                  technologies and the ever-changing digital landscape. His expertise spans across digital marketing, 
                  website development, search engine optimization, content strategy, and brand positioning, enabling him 
                  to design holistic campaigns that help brands stand out in competitive markets.
                </p>
                
                <p className="mb-6">
                  As a founder, Ayush believes in building authentic client relationships based on trust, transparency, 
                  and collaboration. Under his leadership, Web Booster has grown into a client-focused agency recognized 
                  for its commitment to excellence, attention to detail, and forward-thinking strategies. He personally 
                  oversees every major project, ensuring that each campaign not only meets but exceeds client expectations.
                </p>
                
                <p className="mb-6">
                  Beyond his technical knowledge, Ayush is known for his innovative problem-solving skills and ability 
                  to transform complex challenges into simple, effective solutions. His dedication to continuous learning 
                  keeps Web Booster ahead of industry trends, ensuring that clients always benefit from the latest tools, 
                  techniques, and market insights.
                </p>
                
                <p className="mb-8">
                  Driven by a vision to help businesses achieve sustainable success, Ayush combines creativity with 
                  data-driven decision-making, ensuring every project delivers a positive impact on brand growth and 
                  customer engagement. His leadership style fosters a culture of passion, innovation, and relentless 
                  pursuit of excellence — qualities that define Web Booster's work and values.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Qualities */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <div className="bg-blue-50 p-8 rounded-2xl text-center">
              <Lightbulb className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Visionary Leadership</h3>
              <p className="text-gray-600">Driving Web Booster's growth through innovative strategies and forward-thinking approaches that keep clients ahead of industry trends.</p>
            </div>
            
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <Target className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Technical Excellence</h3>
              <p className="text-gray-600">Deep expertise across digital marketing, web development, SEO, and content strategy for comprehensive campaign design.</p>
            </div>
            
            <div className="bg-purple-50 p-8 rounded-2xl text-center">
              <Heart className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Client-Focused Approach</h3>
              <p className="text-gray-600">Building authentic relationships based on trust, transparency, and collaboration for long-term business success.</p>
            </div>
          </div>

          {/* Personal Message */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">A Personal Message from Ayush</h3>
            <p className="text-blue-100 mb-6 max-w-3xl mx-auto text-lg leading-relaxed">
              "When you choose Web Booster, you're not just hiring a service provider – you're gaining a dedicated 
              partner who genuinely cares about your success. I personally oversee every major project and ensure 
              that each campaign not only meets but exceeds expectations. Your growth is our greatest achievement, 
              and I'm committed to transforming your digital challenges into extraordinary success stories."
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="tel:+918799146289" 
                className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Ayush Directly
              </a>
              <a 
                href="mailto:ayushs1904@gmail.com" 
                className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email the Founder
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AyushProfilePage;