import React from 'react';
import { Link } from 'react-router-dom';
import { 
  TrendingUp, 
  Globe, 
  Palette, 
  Search, 
  Video, 
  ShoppingCart, 
  PenTool 
} from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12 text-blue-600" />,
      title: "Business Development",
      description: "Strategic planning and growth solutions to scale your business effectively.",
      link: "/services/business-development"
    },
    {
      icon: <Globe className="w-12 h-12 text-blue-600" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence.",
      link: "/services/digital-marketing"
    },
    {
      icon: <Palette className="w-12 h-12 text-blue-600" />,
      title: "Website Design",
      description: "Modern, responsive websites that convert visitors into customers.",
      link: "/services/website-design"
    },
    {
      icon: <Search className="w-12 h-12 text-blue-600" />,
      title: "Search Engine Optimization",
      description: "Improve your search rankings and drive organic traffic to your website.",
      link: "/services/seo"
    },
    {
      icon: <Video className="w-12 h-12 text-blue-600" />,
      title: "Video Production",
      description: "Professional video content that engages and converts your audience.",
      link: "/services/video-production"
    },
    {
      icon: <ShoppingCart className="w-12 h-12 text-blue-600" />,
      title: "E-Commerce Management",
      description: "Complete e-commerce solutions to maximize your online sales.",
      link: "/services/ecommerce"
    },
    {
      icon: <PenTool className="w-12 h-12 text-blue-600" />,
      title: "Content Marketing",
      description: "Strategic content creation that builds brand authority and drives engagement.",
      link: "/services/content-marketing"
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern marketplace
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white dark:bg-gray-700 rounded-lg shadow-lg p-8 hover:shadow-xl transition-all duration-300">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  {service.description}
                </p>
                <Link 
                  to={service.link}
                  className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 transition-colors duration-300"
                >
                  View Details & Get Quote
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;