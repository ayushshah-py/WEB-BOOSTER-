import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, Star } from 'lucide-react';

const projects = [
  {
    title: "Digital Marketing",
    category: "Digital Marketing",
    description: "Complete digital marketing strategy that increased online sales by 300% within 6 months.",
    image: "https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600",
    results: ["300% Sales Increase", "50K+ New Followers", "Top 3 Google Rankings"],
    teamContributions: {
      "Shivam Jaiswal": "Led strategic planning and client relationship management with 5+ years of digital marketing expertise",
      "Development Team": "Developed custom e-commerce solutions and technical implementation",
      "Creative Team": "Created comprehensive brand identity and visual assets",
      "Social Media Team": "Managed social media campaigns and community engagement"
    },
    caseStudyLink: "/case-studies/digital-marketing"
  },
  {
    title: "Tech Startup Website",
    category: "Website Design & SEO",
    description: "Modern, responsive website design with comprehensive SEO optimization for a growing tech startup.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    results: ["95% Page Speed Score", "200% Organic Traffic", "40% Conversion Rate"],
    teamContributions: {
      "Shivam Jaiswal": "Project oversight and SEO strategy implementation leveraging 5+ years of digital marketing experience",
      "Development Team": "Full-stack development and performance optimization using modern web technologies",
      "Content Team": "Content strategy and SEO copywriting"
    },
    caseStudyLink: "/case-studies/tech-startup"
  },
  {
    title: "Restaurant Chain Campaign",
    category: "Business Development",
    description: "Multi-platform social media campaign with engaging video content that boosted brand awareness significantly.",
    image: "https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=600",
    results: ["2M+ Video Views", "80% Engagement Rate", "25 New Locations"],
    teamContributions: {
      "Shivam Jaiswal": "Campaign strategy and business development with 5+ years of marketing leadership",
      "Social Media Team": "Social media management and community building",
      "Creative Team": "Video production and creative direction"
    },
    caseStudyLink: "/case-studies/restaurant-chain"
  },
  {
    title: "SEO",
    category: "Content Marketing & SEO",
    description: "Strategic content marketing and SEO campaign that established thought leadership in the healthcare industry.",
    image: "https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600",
    results: ["500% Organic Growth", "Industry Authority", "10K+ Leads Generated"],
    teamContributions: {
      "Shivam Jaiswal": "Strategic planning and client consultation with 5+ years of industry expertise",
      "Content Team": "Content creation and SEO optimization",
      "Technical Team": "Technical implementation and analytics tracking"
    },
    caseStudyLink: "/case-studies/seo-campaign"
  }
];

const OurWork: React.FC = () => {
  return (
    <section id="work" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Discover how we've helped businesses across industries achieve remarkable growth 
            through our comprehensive digital marketing solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  {project.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="flex items-center">
                      <Star className="w-5 h-5 text-yellow-500 mr-3" />
                      <span className="text-gray-700 font-medium">{result}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-3">Team Contributions:</h4>
                  <div className="space-y-2">
                    {Object.entries(project.teamContributions).map(([name, contribution], contribIndex) => (
                      <div key={contribIndex} className="text-sm">
                        <span className="font-semibold text-blue-600">{name}:</span>
                        <span className="text-gray-600 ml-2">{contribution}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 px-6 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center group">
                  <Link to={project.caseStudyLink} className="flex items-center w-full justify-center">
                    View Case Study
                    <ExternalLink className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;