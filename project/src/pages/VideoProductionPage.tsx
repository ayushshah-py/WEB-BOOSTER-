import React from 'react';
import { Video, CheckCircle, Phone, Mail } from 'lucide-react';

const VideoProductionPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <Video className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Video Production
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Captivate your audience with compelling video content that tells your story and drives action.
          </p>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Professional Video Production Services
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                From promotional videos to explainer animations, we create high-quality visual content that 
                resonates emotionally and delivers measurable business results. Our video production team 
                combines creative storytelling with technical expertise to bring your brand to life.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Whether you need corporate videos, social media content, or animated explainers, we deliver 
                professional video solutions that engage your audience and drive conversions.
              </p>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Video Services</h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Promotional Video Creation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Explainer Video Development</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Social Media Content Production</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                  <span className="text-gray-700 font-medium">Animation & Motion Graphics</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Promotional Videos</h3>
              <p className="text-gray-600 text-sm">Engaging promotional content that showcases your products and services</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">E</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Explainer Videos</h3>
              <p className="text-gray-600 text-sm">Clear, concise videos that explain your business or product</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">S</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Social Media Videos</h3>
              <p className="text-gray-600 text-sm">Platform-optimized content for social media engagement</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">A</span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Animation</h3>
              <p className="text-gray-600 text-sm">Custom animations and motion graphics for dynamic content</p>
            </div>
          </div>

          <div className="bg-gray-50 p-8 rounded-2xl mb-16">
            <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Video Production Process</h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">1</div>
                <h4 className="font-semibold text-gray-900 mb-2">Concept Development</h4>
                <p className="text-gray-600 text-sm">Brainstorming and developing creative concepts</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">2</div>
                <h4 className="font-semibold text-gray-900 mb-2">Scriptwriting</h4>
                <p className="text-gray-600 text-sm">Creating compelling scripts and storyboards</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">3</div>
                <h4 className="font-semibold text-gray-900 mb-2">Production</h4>
                <p className="text-gray-600 text-sm">Professional filming and content creation</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">4</div>
                <h4 className="font-semibold text-gray-900 mb-2">Post-Production</h4>
                <p className="text-gray-600 text-sm">Editing, effects, and final video optimization</p>
              </div>
              <div className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 font-bold">5</div>
                <h4 className="font-semibold text-gray-900 mb-2">Delivery</h4>
                <p className="text-gray-600 text-sm">Final video delivery and distribution support</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Corporate Videos</h3>
              <p className="text-gray-600 mb-4">
                Professional corporate videos that showcase your company culture and values.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Company overview videos</li>
                <li>• Team introduction videos</li>
                <li>• Corporate event coverage</li>
                <li>• Training and educational content</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Marketing Videos</h3>
              <p className="text-gray-600 mb-4">
                Engaging marketing videos designed to promote your products and drive sales.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Product demonstration videos</li>
                <li>• Customer testimonial videos</li>
                <li>• Brand story videos</li>
                <li>• Campaign-specific content</li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Social Media Content</h3>
              <p className="text-gray-600 mb-4">
                Platform-optimized video content for maximum social media engagement.
              </p>
              <ul className="text-sm text-gray-600 space-y-2">
                <li>• Instagram Stories and Reels</li>
                <li>• YouTube channel content</li>
                <li>• Facebook video ads</li>
                <li>• LinkedIn professional content</li>
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Compelling Video Content?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's bring your brand story to life with professional video production that engages and converts.
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

export default VideoProductionPage;