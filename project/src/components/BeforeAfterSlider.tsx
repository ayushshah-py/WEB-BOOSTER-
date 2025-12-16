import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, TrendingUp, Eye, Users, DollarSign } from 'lucide-react';

interface BeforeAfterProject {
  id: string;
  title: string;
  category: string;
  client: string;
  before: {
    image: string;
    metrics: {
      label: string;
      value: string;
      icon: React.ReactNode;
    }[];
  };
  after: {
    image: string;
    metrics: {
      label: string;
      value: string;
      icon: React.ReactNode;
    }[];
  };
  description: string;
  timeline: string;
  investment: string;
}

const BeforeAfterSlider: React.FC = () => {
  const [currentProject, setCurrentProject] = useState(0);
  const [isComparing, setIsComparing] = useState(false);

  const projects: BeforeAfterProject[] = [
    {
      id: '1',
      title: 'E-Commerce Website Transformation',
      category: 'Website Design & Development',
      client: 'Fashion Retailer',
      before: {
        image: 'https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: [
          { label: 'Monthly Sales', value: '₹2.5L', icon: <DollarSign className="w-4 h-4" /> },
          { label: 'Conversion Rate', value: '1.2%', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Page Views', value: '5K/month', icon: <Eye className="w-4 h-4" /> },
          { label: 'Mobile Users', value: '45%', icon: <Users className="w-4 h-4" /> }
        ]
      },
      after: {
        image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: [
          { label: 'Monthly Sales', value: '₹12.8L', icon: <DollarSign className="w-4 h-4" /> },
          { label: 'Conversion Rate', value: '4.7%', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Page Views', value: '45K/month', icon: <Eye className="w-4 h-4" /> },
          { label: 'Mobile Users', value: '78%', icon: <Users className="w-4 h-4" /> }
        ]
      },
      description: 'Complete website redesign with mobile-first approach, improved UX, and conversion optimization.',
      timeline: '3 months',
      investment: '₹2,50,000'
    },
    {
      id: '2',
      title: 'Restaurant Social Media Campaign',
      category: 'Social Media Marketing',
      client: 'Local Restaurant Chain',
      before: {
        image: 'https://images.pexels.com/photos/262978/pexels-photo-262978.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: [
          { label: 'Followers', value: '1.2K', icon: <Users className="w-4 h-4" /> },
          { label: 'Engagement', value: '2.1%', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Monthly Reach', value: '8K', icon: <Eye className="w-4 h-4" /> },
          { label: 'Revenue Impact', value: '₹50K', icon: <DollarSign className="w-4 h-4" /> }
        ]
      },
      after: {
        image: 'https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: [
          { label: 'Followers', value: '25K', icon: <Users className="w-4 h-4" /> },
          { label: 'Engagement', value: '8.9%', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Monthly Reach', value: '180K', icon: <Eye className="w-4 h-4" /> },
          { label: 'Revenue Impact', value: '₹4.2L', icon: <DollarSign className="w-4 h-4" /> }
        ]
      },
      description: 'Viral social media strategy with engaging content, influencer partnerships, and community building.',
      timeline: '6 months',
      investment: '₹1,80,000'
    },
    {
      id: '3',
      title: 'Tech Startup SEO Campaign',
      category: 'Search Engine Optimization',
      client: 'SaaS Startup',
      before: {
        image: 'https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: [
          { label: 'Organic Traffic', value: '500/month', icon: <Eye className="w-4 h-4" /> },
          { label: 'Keywords Ranking', value: '12', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Lead Generation', value: '8/month', icon: <Users className="w-4 h-4" /> },
          { label: 'Revenue from SEO', value: '₹25K', icon: <DollarSign className="w-4 h-4" /> }
        ]
      },
      after: {
        image: 'https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600',
        metrics: [
          { label: 'Organic Traffic', value: '15K/month', icon: <Eye className="w-4 h-4" /> },
          { label: 'Keywords Ranking', value: '180', icon: <TrendingUp className="w-4 h-4" /> },
          { label: 'Lead Generation', value: '120/month', icon: <Users className="w-4 h-4" /> },
          { label: 'Revenue from SEO', value: '₹8.5L', icon: <DollarSign className="w-4 h-4" /> }
        ]
      },
      description: 'Comprehensive SEO strategy with technical optimization, content marketing, and link building.',
      timeline: '8 months',
      investment: '₹3,20,000'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
    setIsComparing(false);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
    setIsComparing(false);
  };

  const project = projects[currentProject];

  return (
    <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-green-600 to-blue-600 px-8 py-6 text-white">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-3xl font-bold">Before & After Transformations</h2>
            <p className="text-green-100">Real results from our marketing campaigns</p>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={prevProject}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-sm font-semibold">
              {currentProject + 1} / {projects.length}
            </span>
            <button
              onClick={nextProject}
              className="p-2 bg-white/20 rounded-full hover:bg-white/30 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-8">
        {/* Project Info */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-2">{project.title}</h3>
          <div className="flex items-center justify-center space-x-4 text-sm text-gray-600">
            <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full font-semibold">
              {project.category}
            </span>
            <span>Client: {project.client}</span>
            <span>Timeline: {project.timeline}</span>
            <span>Investment: {project.investment}</span>
          </div>
        </div>

        {/* Before/After Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 p-1 rounded-lg">
            <button
              onClick={() => setIsComparing(false)}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                !isComparing
                  ? 'bg-red-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              Before
            </button>
            <button
              onClick={() => setIsComparing(true)}
              className={`px-6 py-2 rounded-md font-semibold transition-all ${
                isComparing
                  ? 'bg-green-500 text-white shadow-md'
                  : 'text-gray-600 hover:text-gray-800'
              }`}
            >
              After
            </button>
          </div>
        </div>

        {/* Comparison View */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Before */}
          <div className={`transition-all duration-500 ${isComparing ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-red-50 border-2 border-red-200 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-red-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  BEFORE
                </span>
              </div>
              
              <div className="mb-6">
                <img
                  src={project.before.image}
                  alt="Before transformation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {project.before.metrics.map((metric, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-red-200">
                    <div className="flex items-center mb-2">
                      <div className="text-red-500 mr-2">{metric.icon}</div>
                      <span className="text-sm font-semibold text-gray-700">{metric.label}</span>
                    </div>
                    <div className="text-xl font-bold text-red-600">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* After */}
          <div className={`transition-all duration-500 ${!isComparing ? 'opacity-50 scale-95' : 'opacity-100 scale-100'}`}>
            <div className="bg-green-50 border-2 border-green-200 rounded-xl p-6">
              <div className="flex items-center justify-center mb-4">
                <span className="bg-green-500 text-white px-4 py-2 rounded-full font-bold text-lg">
                  AFTER
                </span>
              </div>
              
              <div className="mb-6">
                <img
                  src={project.after.image}
                  alt="After transformation"
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                {project.after.metrics.map((metric, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg border border-green-200">
                    <div className="flex items-center mb-2">
                      <div className="text-green-500 mr-2">{metric.icon}</div>
                      <span className="text-sm font-semibold text-gray-700">{metric.label}</span>
                    </div>
                    <div className="text-xl font-bold text-green-600">{metric.value}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Description */}
        <div className="bg-gray-50 p-6 rounded-xl mb-8">
          <h4 className="text-lg font-bold text-gray-900 mb-3">What We Did</h4>
          <p className="text-gray-700">{project.description}</p>
        </div>

        {/* CTA */}
        <div className="text-center">
          <button
            onClick={() => window.location.href = '/contact'}
            className="bg-gradient-to-r from-green-600 to-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Similar Results for Your Business
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeforeAfterSlider;