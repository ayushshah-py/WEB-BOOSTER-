import React from 'react';
import { Phone, Mail, MessageCircle } from 'lucide-react';

const CTA: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Ready to Boost Your Business?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
          Join hundreds of successful businesses that have transformed their digital presence with our expert services. 
          Let's discuss how we can accelerate your growth today.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="/contact" className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center">
            <Phone className="mr-2 w-5 h-5" />
            Contact Us
          </a>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white">
          <div className="flex flex-col items-center">
            <Phone className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Contact</h3>
            <p className="text-blue-100">+91 9974311903</p>
          </div>
          <div className="flex flex-col items-center">
            <Mail className="w-8 h-8 mb-3" />
            <h3 className="text-lg font-semibold mb-2">Email Us</h3>
            <p className="text-blue-100">webbooster1902@gmail.com</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;