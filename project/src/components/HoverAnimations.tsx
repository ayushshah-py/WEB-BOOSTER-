import React from 'react';
import { TrendingUp, Globe, Palette, Search, Video, ShoppingCart, PenTool, ArrowRight, CheckCircle } from 'lucide-react';

const HoverAnimations: React.FC = () => {
  const services = [
    {
      icon: <TrendingUp className="w-12 h-12" />,
      title: "Business Development",
      description: "Strategic planning and growth solutions",
      stats: "300% avg growth",
      hoverColor: "hover:bg-blue-600",
      iconColor: "text-blue-600",
      link: "/services/business-development"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies",
      stats: "500+ campaigns",
      hoverColor: "hover:bg-green-600",
      iconColor: "text-green-600",
      link: "/services/digital-marketing"
    },
    {
      icon: <Palette className="w-12 h-12" />,
      title: "Website Design",
      description: "Modern, responsive websites that convert",
      stats: "95% speed score",
      hoverColor: "hover:bg-purple-600",
      iconColor: "text-purple-600",
      link: "/services/website-design"
    },
    {
      icon: <Search className="w-12 h-12" />,
      title: "SEO Optimization",
      description: "Improve rankings and drive organic traffic",
      stats: "Top 3 rankings",
      hoverColor: "hover:bg-orange-600",
      iconColor: "text-orange-600",
      link: "/services/seo"
    },
    {
      icon: <Video className="w-12 h-12" />,
      title: "Video Production",
      description: "Professional video content that engages",
      stats: "2M+ views",
      hoverColor: "hover:bg-red-600",
      iconColor: "text-red-600",
      link: "/services/video-production"
    },
    {
      icon: <ShoppingCart className="w-12 h-12" />,
      title: "E-Commerce Management",
      description: "Complete e-commerce solutions",
      stats: "₹50L+ sales",
      hoverColor: "hover:bg-indigo-600",
      iconColor: "text-indigo-600",
      link: "/services/ecommerce"
    },
    {
      icon: <PenTool className="w-12 h-12" />,
      title: "Content Marketing",
      description: "Strategic content that builds authority",
      stats: "10K+ leads",
      hoverColor: "hover:bg-pink-600",
      iconColor: "text-pink-600",
      link: "/services/content-marketing"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Professional Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hover over each service to see our proven results and success metrics
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group bg-white rounded-2xl shadow-lg p-8 transition-all duration-500 transform hover:-translate-y-4 hover:shadow-2xl ${service.hoverColor} hover:text-white cursor-pointer relative overflow-hidden`}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-transparent"></div>
              </div>

              <div className="relative z-10">
                {/* Icon with Animation */}
                <div className={`${service.iconColor} group-hover:text-white mb-6 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}>
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-white mb-4 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 group-hover:text-white/90 mb-6 transition-colors duration-300">
                  {service.description}
                </p>

                {/* Stats - Hidden by default, shown on hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500">
                  <div className="bg-white/20 backdrop-blur-sm p-4 rounded-lg mb-4">
                    <div className="text-2xl font-bold text-white mb-1">{service.stats}</div>
                    <div className="text-white/80 text-sm">Average Results</div>
                  </div>
                </div>

                {/* CTA Button - Appears on hover */}
                <div className="opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100">
                  <a
                    href={service.link}
                    className="inline-flex items-center bg-white text-gray-900 px-6 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>

                {/* Default CTA - Hidden on hover */}
                <div className="opacity-100 group-hover:opacity-0 transform translate-y-0 group-hover:-translate-y-4 transition-all duration-300 absolute bottom-8 left-8 right-8">
                  <a
                    href={service.link}
                    className={`inline-flex items-center ${service.iconColor} font-semibold hover:underline`}
                  >
                    View Details
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                <div className="absolute inset-0 bg-gradient-to-r from-white to-transparent blur-xl"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Trust Elements */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full">
            <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
            <span className="font-semibold text-gray-800">All services backed by our 98% success guarantee</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HoverAnimations;