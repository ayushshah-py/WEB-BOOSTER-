import React from 'react';
import ContactForm from '../components/ContactForm';
import ContactMethods from '../components/ContactMethods';

const ContactPage: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with us to discuss your digital marketing needs and start your project.
          </p>
        </div>
      </div>
      <ContactForm />
      <ContactMethods />
    </div>
  );
};

export default ContactPage;