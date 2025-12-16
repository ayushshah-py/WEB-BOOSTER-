import React from 'react';
import Location from '../components/Location';

const AboutPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Learn more about Web Booster and visit our office in Vadodara, Gujarat.
          </p>
        </div>
      </div>
      <Location />
      
      {/* Additional About Content */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                About Web Booster
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Web Booster is a leading digital marketing agency based in Vadodara, Gujarat, India. 
                Our company, Web Booster, has established itself as a trusted partner for businesses 
                seeking comprehensive digital marketing solutions. At Web Booster, we believe in 
                transforming businesses through innovative strategies and cutting-edge technology.
                With over 5 years of experience, we specialize in comprehensive digital marketing 
                solutions that drive business growth and establish market leadership.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">500+</div>
                  <div className="text-gray-600">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">98%</div>
                  <div className="text-gray-600">Success Rate</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600">5+</div>
                  <div className="text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600 mb-6">
                To empower businesses with innovative digital marketing solutions that drive growth, 
                increase visibility, and maximize ROI through expert strategy and implementation.
              </p>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading digital marketing agency in Gujarat, known for delivering 
                exceptional results and building long-term partnerships with our clients.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;