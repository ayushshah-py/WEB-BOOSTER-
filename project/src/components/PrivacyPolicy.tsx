import React from 'react';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
  return (
    <section id="privacy" className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Shield className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Privacy Policy
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
        </div>

        <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 space-y-8">
          <div>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Information We Collect</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We collect information you provide directly to us, such as when you:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Fill out our contact forms</li>
              <li>Subscribe to our newsletter</li>
              <li>Contact us via email or phone</li>
              <li>Use our live chat feature</li>
              <li>Request quotes or consultations</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Eye className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">How We Use Your Information</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We use the information we collect to:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Provide and improve our services</li>
              <li>Respond to your inquiries and requests</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Analyze website usage and improve user experience</li>
              <li>Comply with legal obligations</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <Lock className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Data Protection</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              We implement appropriate security measures to protect your personal information:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>SSL encryption for data transmission</li>
              <li>Secure servers and databases</li>
              <li>Limited access to personal information</li>
              <li>Regular security audits and updates</li>
              <li>Staff training on data protection</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about this Privacy Policy, please contact us:
            </p>
            <div className="bg-white dark:bg-gray-600 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-200"><strong>Email:</strong> webbooster1902@gmail.com</p>
              <p className="text-gray-700 dark:text-gray-200"><strong>Phone:</strong> +91 9974311903</p>
              <p className="text-gray-700 dark:text-gray-200"><strong>Address:</strong> Vadodara, Gujarat, India</p>
            </div>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-600">
            <p>Last updated: January 2025</p>
            <div className="mt-4 pt-4 border-t border-gray-200 dark:border-gray-600">
              <p className="font-semibold text-gray-700 dark:text-gray-300">&copy; 2025 Web Booster. All rights reserved.</p>
              <p className="text-gray-600 dark:text-gray-400 mt-1">Digital Marketing Excellence • Vadodara, Gujarat, India</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacyPolicy;