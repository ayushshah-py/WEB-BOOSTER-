import React from 'react';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img 
                src="/WEB BOOSTER .jpg" 
                alt="Web Booster Logo" 
                className="h-10 w-auto mr-3"
              />
              <div>
                <h3 className="text-2xl font-bold text-white">Web Booster</h3>
                <p className="text-gray-400 dark:text-gray-300">Digital Marketing Excellence</p>
              </div>
            </div>
            <p className="text-gray-300 dark:text-gray-200 mb-6 max-w-md">
              Empowering businesses with innovative digital marketing solutions that drive growth, 
              increase visibility, and maximize ROI. Located in Vadodara, Gujarat.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/web_booster_2025?igsh=b3IzczBiZWJ5eXI4" target="_blank" rel="noopener noreferrer" className="bg-pink-600 p-2 rounded-lg hover:bg-pink-700 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/in/web-booster-488857377/" target="_blank" rel="noopener noreferrer" className="bg-blue-700 p-2 rounded-lg hover:bg-blue-800 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300">
              <li><a href="#" className="hover:text-white transition-colors">Branding</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Social Media Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Digital Marketing</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Website Design</a></li>
              <li><a href="#" className="hover:text-white transition-colors">SEO</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Video Production</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
            <div className="space-y-4 text-gray-300">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3" />
                <div>
                  <div>+91 9974311903</div>
                </div>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3" />
                <span>webbooster1902@gmail.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3" />
                <span>Vadodara, Gujarat<br />India</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 dark:border-gray-600 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 dark:text-gray-300 text-sm mb-4 md:mb-0">
              <p>&copy; 2025 Web Booster. All rights reserved.</p>
              <p className="mt-1">Digital Marketing Excellence • Vadodara, Gujarat, India</p>
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="/privacy" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-gray-400 dark:text-gray-300 hover:text-white transition-colors">
                Terms & Conditions
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer;