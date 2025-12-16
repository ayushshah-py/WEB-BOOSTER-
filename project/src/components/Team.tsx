import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Mail, Star, Award, User } from 'lucide-react';

const teamMembers = [
  {
    name: "Shivam Jaiswal",
    role: "Founder & CEO",
    experience: "5+ Years Experience",
    specialization: "Digital Strategy & Business Development",
    isExperienced: true,
    email: "webbooster1902@gmail.com",
    phone: "+91 9974311903",
    linkedin: "#",
    description: "Leading Web Booster with extensive experience in digital marketing strategy and business development. Shivam drives the company's vision and ensures client success through innovative marketing solutions."
  },
  {
    name: "Drushti Tailor",
    role: "Chief Technology Officer (CTO) & Web Architect",
    experience: "3+ Years Experience",
    specialization: "Web Architecture & Technology Strategy",
    isExperienced: true,
    description: "The tech brain of Web Booster, Drushti oversees all things tech – from website performance to backend strategy. Her focus is on creating fast, secure, and user-friendly websites that convert.",
    linkedinBio: "CTO at Web Booster | Web Architect | Building Scalable, Responsive Websites | Tech & UX Lover"
  },
  {
    name: "Janvi Bhosle",
    role: "Managing Director & SEO Specialist",
    experience: "4+ Years Experience",
    specialization: "SEO & Operations Management",
    isExperienced: true,
    description: "Janvi brings both leadership and deep SEO expertise to the team. She ensures our operations run smoothly while helping businesses rank higher and get discovered online through expert search optimization.",
    linkedinBio: "MD at Web Booster | SEO Expert | On a mission to help websites rank & grow | Digital Marketing Enthusiast"
  },
  {
    name: "Ayush Shah",
    role: "Lead Developer – Web & Software Solutions",
    experience: "3+ Years Experience",
    specialization: "Web & Software Development",
    isExperienced: true,
    email: "ayushs1904@gmail.com",
    linkedin: "https://www.linkedin.com/in/ayush-shah-937937265?originalSubdomain=in",
    description: "Code wizard specializing in web and software development. Ayush brings technical expertise and innovative problem-solving skills to create digital solutions that drive business growth.",
    linkedinBio: "Web & Software Developer at Web Booster | Turning Ideas into Code | Passionate about Frontend & Backend Technologies",
    hasProfilePage: true
  },
  {
    name: "Nitya Padaria",
    role: "Creative Head – Media & Visual Content",
    experience: "2+ Years Experience",
    specialization: "Visual Content & Creative Design",
    isExperienced: false,
    description: "The creative soul of the team, Nitya handles visual content like videos, posters, social media creatives, and branding cards. Her sharp eye for design makes your brand stand out with high-quality visuals.",
    linkedinBio: "Creative Head at Web Booster | Expert in Video Editing, Posters & Branding | Crafting Visuals that Connect"
  }
];

const Team: React.FC = () => {
  return (
    <section id="team" className="py-20 bg-gray-50 dark:bg-gray-800 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Meet Our Expert Team
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Our talented professionals bring years of experience and expertise to deliver 
            exceptional results for your business growth.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index} 
              className={`bg-white dark:bg-gray-700 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border ${
                member.isExperienced ? 'border-yellow-300 ring-2 ring-yellow-100' : 'border-gray-100'
              }`}
            >
              {member.isExperienced && (
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center">
                    <Award className="w-4 h-4 mr-1" />
                    Senior Professional
                  </div>
                </div>
              )}
              
              <div className="text-center">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">{member.name}</h3>
                <p className="text-blue-600 font-semibold mb-2">{member.role}</p>
                <p className="text-gray-600 dark:text-gray-300 mb-4">{member.experience}</p>
                <p className="text-gray-700 dark:text-gray-300 mb-6 text-sm">{member.specialization}</p>
                
                <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">{member.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;