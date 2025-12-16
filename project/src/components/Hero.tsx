import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative py-20 dark:bg-gray-900 transition-colors duration-300">
      {/* Background Image */}
      <div className="absolute inset-0 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/BLUEBACKGROUND.png)'}}></div>
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/70 via-blue-800/60 to-purple-900/70 dark:from-gray-900/80 dark:via-gray-800/70 dark:to-black/80"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative text-center">
          <div className="flex justify-center items-center mb-6">
            <div className="flex items-center bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full">
              <Star className="w-5 h-5 text-yellow-500 mr-2" />
              <span className="text-white font-semibold">Trusted by 500+ Businesses</span>
            </div>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
            WELCOME TO WEB BOOSTERS!
          </h1>
          
          <div className="mb-8 max-w-5xl mx-auto">
            <p className="text-lg text-white/90 dark:text-gray-200 mb-6 leading-relaxed">
              At Web Boosters, we empower businesses to achieve extraordinary success through innovative digital marketing strategies. As a full-service provider, we specialize in website design, SEO, social media marketing, branding, and business growth consulting. Our dedicated team combines technical expertise with creative excellence to deliver performance-driven solutions that help your business thrive in the digital world.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center">
              Get Started Today
              <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="/our-work" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
              View Our Work
            </a>
          </div>
          
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white">500+</div>
              <div className="text-white/80 dark:text-gray-300">Happy Clients</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">98%</div>
              <div className="text-white/80 dark:text-gray-300">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">24/7</div>
              <div className="text-white/80 dark:text-gray-300">Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white">5+</div>
              <div className="text-white/80 dark:text-gray-300">Years Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;