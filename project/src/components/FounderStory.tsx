import React from 'react';
import { Award, Target, Users, TrendingUp, Heart, Lightbulb } from 'lucide-react';

const FounderStory: React.FC = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Founder
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            The vision and passion behind Web Booster's success story
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="relative">
            <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 rounded-2xl">
              <div className="w-48 h-48 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <span className="text-6xl font-bold text-white">AS</span>
              </div>
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Ayush Shah</h3>
                <p className="text-blue-600 font-semibold mb-4">Founder & Visionary Leader</p>
                <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <Award className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>3+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Users className="w-4 h-4 mr-1 text-green-500" />
                    <span>500+ Clients</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">About Ayush Shah – Founder & Visionary Leader</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="bg-blue-100 p-3 rounded-full mr-4">
                  <Lightbulb className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Visionary Leadership</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Ayush Shah is the driving force behind Web Booster, bringing together a powerful blend of creativity, 
                    technical expertise, and strategic marketing insight. With a passion for empowering businesses to achieve 
                    exceptional online growth, Ayush has dedicated his career to crafting innovative digital solutions that 
                    deliver measurable results.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Technical Excellence & Innovation</h4>
                  <p className="text-gray-600 leading-relaxed">
                    From the early stages of his professional journey, Ayush demonstrated a keen understanding of emerging 
                    technologies and the ever-changing digital landscape. His expertise spans across digital marketing, 
                    website development, search engine optimization, content strategy, and brand positioning, enabling him 
                    to design holistic campaigns that help brands stand out in competitive markets.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-purple-100 p-3 rounded-full mr-4">
                  <Heart className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Client-Focused Leadership</h4>
                  <p className="text-gray-600 leading-relaxed">
                    As a founder, Ayush believes in building authentic client relationships based on trust, transparency, 
                    and collaboration. Under his leadership, Web Booster has grown into a client-focused agency recognized 
                    for its commitment to excellence, attention to detail, and forward-thinking strategies. He personally 
                    oversees every major project, ensuring that each campaign not only meets but exceeds client expectations.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-yellow-100 p-3 rounded-full mr-4">
                  <TrendingUp className="w-6 h-6 text-yellow-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Innovation & Problem-Solving</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Beyond his technical knowledge, Ayush is known for his innovative problem-solving skills and ability 
                    to transform complex challenges into simple, effective solutions. His dedication to continuous learning 
                    keeps Web Booster ahead of industry trends, ensuring that clients always benefit from the latest tools, 
                    techniques, and market insights.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-indigo-100 p-3 rounded-full mr-4">
                  <Users className="w-6 h-6 text-indigo-600" />
                </div>
                <div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Data-Driven Excellence</h4>
                  <p className="text-gray-600 leading-relaxed">
                    Driven by a vision to help businesses achieve sustainable success, Ayush combines creativity with 
                    data-driven decision-making, ensuring every project delivers a positive impact on brand growth and 
                    customer engagement. His leadership style fosters a culture of passion, innovation, and relentless 
                    pursuit of excellence — qualities that define Web Booster's work and values.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Achievement Timeline */}
        <div className="bg-white p-8 rounded-2xl shadow-lg mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">Our Growth Journey</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2020
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Early Vision</h4>
              <p className="text-gray-600 text-sm">Ayush identified the gap in quality digital marketing for growing businesses</p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2021
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Foundation</h4>
              <p className="text-gray-600 text-sm">Founded Web Booster with innovative digital solutions approach</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2023
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Rapid Growth</h4>
              <p className="text-gray-600 text-sm">Expanded to 200+ clients with innovative problem-solving approach</p>
            </div>
            
            <div className="text-center">
              <div className="bg-orange-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2025
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Industry Leadership</h4>
              <p className="text-gray-600 text-sm">500+ clients served, recognized for excellence and innovation</p>
            </div>
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
              📞 Call Ayush Directly
            </a>
            <a 
              href="mailto:ayushs1904@gmail.com" 
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center"
            >
              ✉️ Email the Founder
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FounderStory;