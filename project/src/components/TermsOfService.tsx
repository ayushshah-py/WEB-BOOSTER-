import React from 'react';
import { FileText, CheckCircle, AlertTriangle, Scale } from 'lucide-react';

const TermsOfService: React.FC = () => {
  return (
    <section id="terms" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <Scale className="w-16 h-16 text-blue-600 mx-auto mb-6" />
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Web Booster Terms & Conditions
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Please read these terms carefully before using our services.
          </p>
        </div>

        <div className="bg-white dark:bg-gray-700 rounded-2xl p-8 space-y-8">
          <div>
            <div className="flex items-center mb-4">
              <CheckCircle className="w-6 h-6 text-green-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Service Agreement</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              By engaging Web Booster's services, you agree to the following terms:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>All services are provided as agreed in the project proposal</li>
              <li>Payment terms are net 30 days unless otherwise specified</li>
              <li>Client must provide necessary materials and feedback in a timely manner</li>
              <li>Revisions are included as specified in the project scope</li>
              <li>Additional work beyond scope will be quoted separately</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <FileText className="w-6 h-6 text-blue-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Intellectual Property</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Ownership and usage rights:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Client owns final deliverables upon full payment</li>
              <li>Web Booster retains rights to showcase work in portfolio</li>
              <li>Client must provide proper attribution when required</li>
              <li>Third-party assets are licensed separately</li>
              <li>Source code and development files included as specified</li>
            </ul>
          </div>

          <div>
            <div className="flex items-center mb-4">
              <AlertTriangle className="w-6 h-6 text-yellow-600 mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Limitations and Liability</h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Important limitations to understand:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Services are provided "as is" without warranties</li>
              <li>Web Booster is not liable for indirect or consequential damages</li>
              <li>Client is responsible for backup and data security</li>
              <li>Force majeure events may affect delivery timelines</li>
              <li>Disputes will be resolved through arbitration in Gujarat, India</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Cancellation Policy</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              Project cancellation terms:
            </p>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
              <li>Client may cancel with 7 days written notice</li>
              <li>Payment due for work completed up to cancellation date</li>
              <li>Refunds processed within 30 business days</li>
              <li>Completed deliverables remain property of Web Booster until payment</li>
            </ul>
          </div>

          <div>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
              For questions about these terms, contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-600 p-6 rounded-lg">
              <p className="text-gray-700 dark:text-gray-200"><strong>Email:</strong> webbooster1902@gmail.com</p>
              <p className="text-gray-700 dark:text-gray-200"><strong>Phone:</strong> +91 9974311903</p>
              <p className="text-gray-700 dark:text-gray-200"><strong>Address:</strong> Vadodara, Gujarat, India</p>
            </div>
          </div>

          <div className="text-sm text-gray-500 dark:text-gray-400 pt-6 border-t border-gray-200 dark:border-gray-600">
            <p>Last updated: January 2025</p>
            <p className="mt-2">These terms are governed by the laws of India.</p>
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

export default TermsOfService;