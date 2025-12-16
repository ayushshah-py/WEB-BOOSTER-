import React, { useState, useEffect } from 'react';
import { TrendingUp, Users, Award, Zap, Target, Globe } from 'lucide-react';

interface CounterData {
  label: string;
  value: number;
  target: number;
  icon: React.ReactNode;
  suffix: string;
  color: string;
  description: string;
}

const RealTimeCounters: React.FC = () => {
  const [counters, setCounters] = useState<CounterData[]>([
    {
      label: 'Campaigns Completed',
      value: 0,
      target: 847,
      icon: <Target className="w-8 h-8" />,
      suffix: '+',
      color: 'text-blue-600',
      description: 'Successful marketing campaigns delivered'
    },
    {
      label: 'Happy Clients',
      value: 0,
      target: 523,
      icon: <Users className="w-8 h-8" />,
      suffix: '+',
      color: 'text-green-600',
      description: 'Businesses we\'ve helped grow'
    },
    {
      label: 'Leads Generated',
      value: 0,
      target: 15420,
      icon: <TrendingUp className="w-8 h-8" />,
      suffix: '+',
      color: 'text-purple-600',
      description: 'Quality leads delivered to clients'
    },
    {
      label: 'Revenue Generated',
      value: 0,
      target: 2.8,
      icon: <Award className="w-8 h-8" />,
      suffix: 'Cr+',
      color: 'text-orange-600',
      description: 'Client revenue generated through our campaigns'
    },
    {
      label: 'Ads Managed',
      value: 0,
      target: 1250,
      icon: <Zap className="w-8 h-8" />,
      suffix: '+',
      color: 'text-red-600',
      description: 'Active ad campaigns managed monthly'
    },
    {
      label: 'Global Reach',
      value: 0,
      target: 12,
      icon: <Globe className="w-8 h-8" />,
      suffix: ' Countries',
      color: 'text-indigo-600',
      description: 'International clients served'
    }
  ]);

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const element = document.getElementById('real-time-counters');
    if (element) {
      observer.observe(element);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  const animateCounters = () => {
    const duration = 2000; // 2 seconds
    const steps = 60; // 60 FPS
    const stepDuration = duration / steps;

    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = currentStep / steps;
      const easeOutProgress = 1 - Math.pow(1 - progress, 3); // Ease-out animation

      setCounters(prev => prev.map(counter => ({
        ...counter,
        value: Math.round(counter.target * easeOutProgress)
      })));

      if (currentStep >= steps) {
        clearInterval(timer);
        // Add small random increments to simulate real-time updates
        setInterval(() => {
          setCounters(prev => prev.map(counter => ({
            ...counter,
            value: counter.target + Math.floor(Math.random() * 5)
          })));
        }, 5000);
      }
    }, stepDuration);
  };

  return (
    <section id="real-time-counters" className="py-20 bg-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600"></div>
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Real-Time Impact Dashboard
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Live metrics showcasing our continuous impact on businesses worldwide
          </p>
          <div className="inline-flex items-center bg-green-600 text-white px-4 py-2 rounded-full mt-4">
            <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
            <span className="font-semibold">Live Data</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {counters.map((counter, index) => (
            <div 
              key={index}
              className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/15 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="text-center">
                <div className={`${counter.color} mb-4 flex justify-center`}>
                  {counter.icon}
                </div>
                <div className="text-4xl font-bold mb-2">
                  {counter.value.toLocaleString()}{counter.suffix}
                </div>
                <h3 className="text-xl font-semibold mb-3">{counter.label}</h3>
                <p className="text-gray-300 text-sm">{counter.description}</p>
                
                {/* Progress Bar */}
                <div className="w-full bg-white/20 rounded-full h-2 mt-4">
                  <div
                    className={`h-2 rounded-full transition-all duration-1000 ${
                      counter.color.includes('blue') ? 'bg-blue-500' :
                      counter.color.includes('green') ? 'bg-green-500' :
                      counter.color.includes('purple') ? 'bg-purple-500' :
                      counter.color.includes('orange') ? 'bg-orange-500' :
                      counter.color.includes('red') ? 'bg-red-500' : 'bg-indigo-500'
                    }`}
                    style={{ width: isVisible ? '100%' : '0%' }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Updates Ticker */}
        <div className="mt-16 bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/20">
          <div className="flex items-center justify-center mb-4">
            <div className="w-3 h-3 bg-green-400 rounded-full mr-3 animate-pulse"></div>
            <h3 className="text-xl font-bold">Live Activity Feed</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-green-400 font-semibold mb-1">Just Now</div>
              <div className="text-sm text-gray-300">New SEO campaign launched for tech startup</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-blue-400 font-semibold mb-1">2 min ago</div>
              <div className="text-sm text-gray-300">Website redesign completed - 40% conversion boost</div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg">
              <div className="text-purple-400 font-semibold mb-1">5 min ago</div>
              <div className="text-sm text-gray-300">Social media campaign reached 100K+ impressions</div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">Ready to Join Our Success Stories?</h3>
          <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
            These numbers represent real businesses that trusted us with their growth. 
            Your success story could be next.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/contact" 
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
            >
              Start Your Success Story
            </a>
            <a 
              href="/our-work" 
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RealTimeCounters;