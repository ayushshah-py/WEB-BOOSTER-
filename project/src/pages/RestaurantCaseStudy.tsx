import React from 'react';
import { Star, ArrowLeft, ExternalLink, Video, Heart, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const RestaurantCaseStudy: React.FC = () => {
  return (
    <div>
      <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/our-work" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Our Work
          </Link>
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
              Restaurant Chain Expansion Campaign
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A viral social media campaign that transformed a local restaurant into a regional chain through strategic content marketing and community engagement.
            </p>
          </div>
        </div>
      </div>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Restaurant Chain Campaign"
                className="w-full h-96 object-cover rounded-2xl shadow-lg"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Campaign Overview
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                This remarkable restaurant chain expansion campaign represents one of our most successful business development and social media marketing initiatives, transforming a beloved local family restaurant into a thriving regional chain with 25 new locations. The client, a traditional Indian restaurant known for authentic flavors and family recipes, had built a loyal local following over 15 years but struggled to expand beyond their original location due to limited brand awareness and marketing resources. Our comprehensive strategy focused on storytelling, community engagement, and viral content creation that celebrated the restaurant's heritage while appealing to modern food enthusiasts. We developed a multi-platform content strategy featuring behind-the-scenes cooking videos, chef interviews, customer testimonials, and interactive social media campaigns that encouraged user-generated content. The campaign's centerpiece was a series of professionally produced videos showcasing the restaurant's authentic cooking methods, family stories, and cultural significance, which resonated deeply with audiences and generated over 2 million views across platforms. Our team implemented sophisticated social media management, influencer partnerships, and community engagement strategies that resulted in an unprecedented 80% engagement rate. The success extended beyond digital metrics, as the viral content and increased brand awareness directly contributed to franchise inquiries and investment opportunities, enabling the restaurant to expand to 25 new locations across three states. This project demonstrates our ability to preserve authentic brand identity while scaling businesses through strategic digital marketing and community building.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">2M+ Video Views</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">80% Engagement Rate</span>
                </div>
                <div className="flex items-center">
                  <Star className="w-6 h-6 text-yellow-500 mr-3" />
                  <span className="text-lg font-semibold text-gray-900">25 New Locations Opened</span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-red-50 p-8 rounded-2xl text-center">
              <Video className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Viral Content</h3>
              <p className="text-gray-600">Engaging video content that generated millions of views</p>
            </div>
            <div className="bg-pink-50 p-8 rounded-2xl text-center">
              <Heart className="w-12 h-12 text-pink-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community Love</h3>
              <p className="text-gray-600">Building passionate communities with 80% engagement</p>
            </div>
            <div className="bg-green-50 p-8 rounded-2xl text-center">
              <MapPin className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">Expansion Success</h3>
              <p className="text-gray-600">Strategic growth to 25 new locations across regions</p>
            </div>
          </div>

          <div className="mb-16">
            <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Team Contributions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-blue-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-blue-900 mb-3">Shivam Jaiswal - Campaign Strategy</h4>
                <p className="text-blue-800">Campaign strategy and business development leadership with 5+ years of marketing expertise, driving the expansion strategy that resulted in 25 new franchise locations and regional market penetration.</p>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-green-900 mb-3">Social Media Team</h4>
                <p className="text-green-800">Social media management and community building that achieved exceptional 80% engagement rates across all platforms, fostering a passionate community of food enthusiasts and loyal customers.</p>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl">
                <h4 className="text-xl font-bold text-purple-900 mb-3">Nitya Padaria - Creative Direction</h4>
                <p className="text-purple-800">Video production and creative direction with 2+ years of visual content expertise, creating compelling storytelling content that generated over 2 million video views and viral social media success.</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 rounded-2xl text-white text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Go Viral and Expand?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Let's create engaging social media campaigns that build passionate communities and drive massive business growth and expansion opportunities.
            </p>
            <Link 
              to="/contact"
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 inline-flex items-center"
            >
              <ExternalLink className="mr-2 w-5 h-5" />
              Start Your Project
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantCaseStudy;