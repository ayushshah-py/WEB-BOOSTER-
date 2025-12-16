import React from 'react';
import { Shield, Award, Users, CheckCircle, Star, TrendingUp } from 'lucide-react';

const TrustBadges: React.FC = () => {
  const badges = [
    {
      icon: <Shield className="w-8 h-8 text-blue-600" />,
      title: "Trusted by 500+ Clients",
      description: "Businesses across India trust us",
      color: "bg-blue-50 border-blue-200"
    },
    {
      icon: <Award className="w-8 h-8 text-yellow-600" />,
      title: "99% Project Success Rate",
      description: "Consistently delivering results",
      color: "bg-yellow-50 border-yellow-200"
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: "5+ Years Experience",
      description: "Proven expertise in digital marketing",
      color: "bg-green-50 border-green-200"
    },
    {
      icon: <CheckCircle className="w-8 h-8 text-purple-600" />,
      title: "24/7 Support Available",
      description: "Always here when you need us",
      color: "bg-purple-50 border-purple-200"
    },
    {
      icon: <Star className="w-8 h-8 text-orange-600" />,
      title: "Industry Recognition",
      description: "Award-winning campaigns",
      color: "bg-orange-50 border-orange-200"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-red-600" />,
      title: "₹2.8Cr+ Revenue Generated",
      description: "For our clients through campaigns",
      color: "bg-red-50 border-red-200"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            You're in Good Hands
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Join hundreds of successful businesses that trust Web Booster for their digital growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {badges.map((badge, index) => (
            <div
              key={index}
              className={`${badge.color} border-2 p-6 rounded-xl text-center hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1`}
            >
              <div className="flex justify-center mb-4">
                {badge.icon}
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">{badge.title}</h3>
              <p className="text-gray-600 text-sm">{badge.description}</p>
            </div>
          ))}
        </div>

        {/* Micro-testimonials */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-blue-600">
            <p className="text-gray-700 italic mb-3">"Best ROI we've ever seen from marketing!"</p>
            <div className="text-sm text-gray-600">- Tech Startup CEO</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-green-600">
            <p className="text-gray-700 italic mb-3">"Tripled our online sales in 6 months."</p>
            <div className="text-sm text-gray-600">- E-commerce Owner</div>
          </div>
          <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-purple-600">
            <p className="text-gray-700 italic mb-3">"Professional team, amazing results!"</p>
            <div className="text-sm text-gray-600">- Restaurant Chain</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrustBadges;