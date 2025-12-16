import React from 'react';
import { Phone, Mail, MessageCircle, MapPin, ExternalLink } from 'lucide-react';

const ContactMethods: React.FC = () => {
  const openWhatsApp = () => {
    const message = "Hi! I'm interested in your digital marketing services. Please provide more information.";
    const whatsappUrl = `https://wa.me/919974311903?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openEmail = () => {
    const subject = "Digital Marketing Services Inquiry";
    const body = "Hi Web Booster Team,\n\nI'm interested in your digital marketing services. Please provide more information about your offerings.\n\nBest regards,";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&to=webbooster1902@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
  };

  const openPhone = () => {
    // Track call attempt for admin analytics
    const callLog = {
      timestamp: new Date().toISOString(),
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
      action: 'Call Attempted'
    };
    
    const existingCalls = JSON.parse(localStorage.getItem('callLogs') || '[]');
    existingCalls.push(callLog);
    localStorage.setItem('callLogs', JSON.stringify(existingCalls));
    
    window.open('tel:+919974311903', '_self');
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Additional Features
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Multiple ways to connect with us for quick responses and assistance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-green-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircle className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">WhatsApp Integration</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">For a more convenient and quick response, contact us via WhatsApp.</p>
            <button
              onClick={openWhatsApp}
              className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors flex items-center mx-auto"
            >
              <MessageCircle className="mr-2 w-5 h-5" />
              Chat on WhatsApp
            </button>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-blue-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Email Link</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Clicking the email will open Google Mail for a direct conversation.</p>
            <button
              onClick={openEmail}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center mx-auto"
            >
              <Mail className="mr-2 w-5 h-5" />
              Open Gmail
            </button>
          </div>

          <div className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Contact Us</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Click on the "Contact Us" button to open our contact page directly on your phone.</p>
            <button
              onClick={openPhone}
              className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-purple-700 transition-colors flex items-center mx-auto"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call Now
            </button>
          </div>

          <div className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800 p-8 rounded-2xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2">
            <div className="bg-orange-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MapPin className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Vadodara Live Map</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">View the live map of Vadodara and navigate our location easily.</p>
            <a
              href="/about"
              className="bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center mx-auto"
            >
              <MapPin className="mr-2 w-5 h-5" />
              View Map
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;