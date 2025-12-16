import React from 'react';
import OurWork from '../components/OurWork';

const OurWorkPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Our Work
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover our success stories and the results we've achieved for our clients.
          </p>
        </div>
      </div>
      <OurWork />
    </div>
  );
};

export default OurWorkPage;