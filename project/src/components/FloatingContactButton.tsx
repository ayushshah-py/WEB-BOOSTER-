import React, { useState } from 'react';
import { MessageCircle, Phone, Mail, X, Headphones } from 'lucide-react';

const FloatingContactButton: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const contactOptions = [
    {
      icon: <MessageCircle className="w-5 h-5" />,
      label: 'WhatsApp',
      color: 'bg-green-600 hover:bg-green-700',
      action: () => {
        const message = "Hi! I'm interested in your digital marketing services. Can we discuss my requirements?";
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
        
        // Track analytics event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'contact_click', {
            event_category: 'engagement',
            event_label: 'whatsapp_floating_button',
            value: 1
          });
        }
        
        if (isMobile) {
          // Open WhatsApp app on mobile
          window.open(`whatsapp://send?phone=918799146289&text=${encodeURIComponent(message)}`, '_self');
        } else {
          // Open WhatsApp Web on desktop
          window.open(`https://web.whatsapp.com/send?phone=918799146289&text=${encodeURIComponent(message)}`, '_blank');
        }
      }
    },
    {
      icon: <Phone className="w-5 h-5" />,
      label: 'Call Now',
      color: 'bg-blue-600 hover:bg-blue-700',
      action: () => {
        // Track analytics event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'contact_click', {
            event_category: 'engagement',
            event_label: 'phone_floating_button',
            value: 1
          });
        }
        
        window.open('tel:+918799146289', '_self');
      }
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: 'Email',
      color: 'bg-purple-600 hover:bg-purple-700',
      action: () => {
        const subject = "Inquiry from Website";
        const body = "Hi Web Booster Team,\n\nI'm interested in your digital marketing services. Please contact me to discuss my requirements.\n\nBest regards,";
        
        // Track analytics event
        if (typeof gtag !== 'undefined') {
          gtag('event', 'contact_click', {
            event_category: 'engagement',
            event_label: 'email_floating_button',
            value: 1
          });
        }
        
        window.open(`mailto:webbooster1902@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
      }
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {/* Expanded Options */}
      {isExpanded && (
        <div className="mb-4 space-y-3">
          {contactOptions.map((option, index) => (
            <div
              key={index}
              className={`${option.color} text-white p-3 rounded-full shadow-lg cursor-pointer transition-all duration-300 transform hover:scale-110 flex items-center animate-slide-in-right`}
              onClick={() => {
                option.action();
                setIsExpanded(false);
              }}
              role="button"
              tabIndex={0}
              aria-label={`Contact via ${option.label}`}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  option.action();
                  setIsExpanded(false);
                }
              }}
            >
              {option.icon}
              <span className="ml-3 whitespace-nowrap font-medium">{option.label}</span>
            </div>
          ))}
        </div>
      )}

      {/* Main Toggle Button */}
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`${
          isExpanded ? 'bg-red-600 hover:bg-red-700' : 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
        } text-white p-4 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300`}
        aria-label={isExpanded ? 'Close contact options' : 'Open contact options'}
        aria-expanded={isExpanded}
      >
        {isExpanded ? <X className="w-6 h-6" /> : <Headphones className="w-6 h-6" />}
      </button>

      {/* Pulse Animation */}
      {!isExpanded && (
        <div className="absolute inset-0 rounded-full bg-blue-600 animate-ping opacity-20 pointer-events-none"></div>
      )}
    </div>
  );
};

export default FloatingContactButton;