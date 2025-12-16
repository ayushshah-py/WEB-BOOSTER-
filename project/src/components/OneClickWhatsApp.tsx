import React, { useState } from 'react';
import { MessageCircle, Send, Zap, Phone, Mail, ArrowRight } from 'lucide-react';

interface QuickTemplate {
  id: string;
  title: string;
  message: string;
  icon: React.ReactNode;
  color: string;
}

const OneClickWhatsApp: React.FC = () => {
  const [selectedTemplate, setSelectedTemplate] = useState<string>('');
  const [customMessage, setCustomMessage] = useState('');
  const [showCustom, setShowCustom] = useState(false);

  const quickTemplates: QuickTemplate[] = [
    {
      id: 'quote',
      title: 'Get Instant Quote',
      message: `Hi Web Booster Team! 👋

I'm interested in getting a quote for digital marketing services. 

My business details:
• Industry: [Your Industry]
• Current Challenge: [Describe your main challenge]
• Budget Range: [Your budget range]
• Timeline: [When you need results]

Please send me a customized quote and let's discuss how you can help grow my business!

Looking forward to hearing from you! 🚀`,
      icon: <Send className="w-5 h-5" />,
      color: 'bg-blue-600 hover:bg-blue-700'
    },
    {
      id: 'consultation',
      title: 'Book Free Consultation',
      message: `Hello! 👋

I'd like to book a FREE consultation call to discuss my digital marketing needs.

I'm particularly interested in:
• [Service you're interested in]
• [Specific goals or challenges]

When would be a good time for a 30-minute strategy call? I'm available:
• [Your preferred days/times]

Thank you! Looking forward to learning how Web Booster can help my business grow! 📈`,
      icon: <Phone className="w-5 h-5" />,
      color: 'bg-green-600 hover:bg-green-700'
    },
    {
      id: 'emergency',
      title: 'Urgent Project Help',
      message: `🚨 URGENT PROJECT ASSISTANCE NEEDED

Hi Web Booster Team,

I need immediate help with a digital marketing challenge:

• Issue: [Describe your urgent need]
• Timeline: [How quickly you need help]
• Budget: [Available budget for urgent work]

This is time-sensitive and I'd appreciate a quick response. Can someone call me ASAP?

My number: [Your phone number]

Thank you for your quick attention! ⚡`,
      icon: <Zap className="w-5 h-5" />,
      color: 'bg-red-600 hover:bg-red-700'
    },
    {
      id: 'partnership',
      title: 'Partnership Inquiry',
      message: `🤝 Partnership Opportunity

Hello Shivam and the Web Booster team,

I'm reaching out regarding a potential partnership opportunity.

About my business:
• Company: [Your company name]
• Industry: [Your industry]
• Size: [Company size/revenue]

Partnership idea:
• [Describe the partnership opportunity]
• [Mutual benefits]
• [Next steps you envision]

I believe this could be mutually beneficial. Would you be interested in exploring this further?

Best regards! 🌟`,
      icon: <Mail className="w-5 h-5" />,
      color: 'bg-purple-600 hover:bg-purple-700'
    }
  ];

  const sendWhatsAppMessage = (message: string) => {
    const phoneNumber = '918799146289'; // Ayush Shah's number
    const encodedMessage = encodeURIComponent(message);
    
    // Track analytics
    if (typeof gtag !== 'undefined') {
      gtag('event', 'whatsapp_template_click', {
        event_category: 'engagement',
        event_label: selectedTemplate || 'custom',
        value: 1
      });
    }
    
    // Detect mobile vs desktop
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    
    if (isMobile) {
      // Open WhatsApp app on mobile
      window.open(`whatsapp://send?phone=${phoneNumber}&text=${encodedMessage}`, '_self');
    } else {
      // Open WhatsApp Web on desktop
      window.open(`https://web.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`, '_blank');
    }
  };

  const handleTemplateSelect = (template: QuickTemplate) => {
    setSelectedTemplate(template.id);
    sendWhatsAppMessage(template.message);
  };

  const handleCustomMessage = () => {
    if (customMessage.trim()) {
      sendWhatsAppMessage(customMessage);
      setCustomMessage('');
      setShowCustom(false);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center bg-green-100 text-green-800 px-4 py-2 rounded-full mb-6">
            <MessageCircle className="w-5 h-5 mr-2" />
            <span className="font-semibold">Instant WhatsApp Connection</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            One-Tap WhatsApp Quote
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Skip the forms! Choose a template below and instantly connect with our team via WhatsApp 
            with a pre-filled professional message.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {quickTemplates.map((template) => (
            <div
              key={template.id}
              onClick={() => handleTemplateSelect(template)}
              className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer group"
            >
              <div className="flex items-center mb-6">
                <div className={`${template.color} text-white p-3 rounded-full mr-4 group-hover:scale-110 transition-transform`}>
                  {template.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                  {template.title}
                </h3>
              </div>
              
              <div className="bg-gray-50 p-4 rounded-lg mb-6 text-sm text-gray-700 leading-relaxed max-h-32 overflow-hidden">
                {template.message.substring(0, 150)}...
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">Tap to send via WhatsApp</span>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:text-green-600 group-hover:translate-x-1 transition-all" />
              </div>
            </div>
          ))}
        </div>

        {/* Custom Message Option */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 mb-12">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Or Send Custom Message</h3>
            <p className="text-gray-600">Write your own message for a personalized approach</p>
          </div>

          {!showCustom ? (
            <div className="text-center">
              <button
                onClick={() => setShowCustom(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
              >
                ✍️ Write Custom Message
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              <textarea
                value={customMessage}
                onChange={(e) => setCustomMessage(e.target.value)}
                placeholder="Type your custom message here..."
                rows={6}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
              />
              <div className="flex gap-4 justify-center">
                <button
                  onClick={handleCustomMessage}
                  disabled={!customMessage.trim()}
                  className="bg-green-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Send via WhatsApp
                </button>
                <button
                  onClick={() => setShowCustom(false)}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-gray-400 transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default OneClickWhatsApp;