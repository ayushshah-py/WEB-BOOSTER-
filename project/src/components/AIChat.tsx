import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, Zap, Phone, Mail } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
  suggestions?: string[];
}

const AIChat: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm your AI assistant from Web Booster. I can help you with:\n\n• Service recommendations\n• Pricing information\n• Case studies\n• Booking consultations\n\nWhat would you like to know?",
      sender: 'bot',
      timestamp: new Date(),
      suggestions: [
        "What services do you offer?",
        "I need a quote",
        "Show me case studies",
        "Book a consultation"
      ]
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const knowledgeBase = {
    services: {
      keywords: ['service', 'services', 'what do you do', 'offerings', 'help with'],
      response: "We offer comprehensive digital marketing services:\n\n🎯 Digital Marketing Campaigns\n🌐 Website Design & Development\n🔍 Search Engine Optimization (SEO)\n📱 Social Media Marketing\n🎬 Video Production\n🛒 E-Commerce Management\n✍️ Content Marketing\n🎨 Branding & Design\n\nWhich service interests you most?",
      suggestions: ["Tell me about SEO", "Website design pricing", "Digital marketing packages", "Video production services"]
    },
    pricing: {
      keywords: ['price', 'cost', 'quote', 'budget', 'how much', 'pricing', 'rates'],
      response: "Our pricing varies based on your specific needs:\n\n💰 Starter Package: ₹50,000 - ₹1,00,000\n📈 Growth Package: ₹1,00,000 - ₹2,50,000\n🚀 Premium Package: ₹2,50,000 - ₹5,00,000\n🌟 Enterprise: ₹5,00,000+\n\nFor an accurate quote, I'd recommend a quick consultation. Would you like me to connect you with our team?",
      suggestions: ["Book consultation", "Tell me about packages", "What's included?", "Custom quote needed"]
    },
    casestudies: {
      keywords: ['case study', 'examples', 'portfolio', 'work', 'results', 'success stories'],
      response: "Here are some of our success stories:\n\n🎯 Digital Marketing Campaign: 300% sales increase\n💻 Tech Startup Website: 95% page speed, 200% traffic\n🍽️ Restaurant Chain: 2M+ video views, 25 new locations\n🔍 SEO Campaign: 500% organic growth\n\nWould you like detailed information about any of these projects?",
      suggestions: ["Digital marketing details", "Website project info", "Restaurant campaign", "SEO success story"]
    },
    contact: {
      keywords: ['contact', 'call', 'phone', 'email', 'talk', 'consultation', 'book', 'schedule'],
      response: "I'd be happy to connect you with our team!\n\n📞 Call: +91 8799146289 (Ayush Shah)\n📧 Email: webbooster1902@gmail.com\n💬 WhatsApp: Direct chat available\n\nWould you like me to help you book a consultation or send your inquiry directly?",
      suggestions: ["Book consultation now", "Send WhatsApp message", "Call directly", "Email inquiry"]
    },
    team: {
      keywords: ['team', 'who', 'founder', 'staff', 'people', 'about'],
      response: "Meet our expert team:\n\n👨‍💼 Shivam Jaiswal - Founder & CEO (5+ years)\n👩‍💻 Drushti Tailor - CTO & Web Architect (3+ years)\n👩‍💼 Janvi Bhosle - MD & SEO Specialist (4+ years)\n👨‍💻 Ayush Shah - Lead Developer (3+ years)\n🎨 Nitya Padaria - Creative Head (2+ years)\n\nWe're a passionate team dedicated to your success!",
      suggestions: ["Learn about services", "See our work", "Get a quote", "Contact the team"]
    }
  };

  const generateResponse = (userMessage: string): { text: string; suggestions?: string[] } => {
    const message = userMessage.toLowerCase();

    // Check each knowledge base category
    for (const [category, data] of Object.entries(knowledgeBase)) {
      if (data.keywords.some(keyword => message.includes(keyword))) {
        return {
          text: data.response,
          suggestions: data.suggestions
        };
      }
    }

    // Default response for unmatched queries
    return {
      text: "I'd be happy to help! For specific questions about your project, I recommend speaking directly with our team. They can provide detailed information tailored to your needs.\n\nWould you like me to connect you with them?",
      suggestions: [
        "Contact the team",
        "What services do you offer?",
        "Show me pricing",
        "Book a consultation"
      ]
    };
  };

  const handleSendMessage = (messageText?: string) => {
    const textToSend = messageText || inputMessage.trim();
    if (!textToSend) return;

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      text: textToSend,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const response = generateResponse(textToSend);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        suggestions: response.suggestions
      };

      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000); // 1-2 second delay
  };

  const handleSuggestionClick = (suggestion: string) => {
    handleSendMessage(suggestion);
  };

  const handleSpecialAction = (action: string) => {
    switch (action) {
      case 'Book consultation now':
      case 'Contact the team':
        window.location.href = '/contact';
        break;
      case 'Send WhatsApp message':
        const whatsappMessage = "Hi! I was chatting with your AI assistant and would like to discuss my project requirements.";
        window.open(`https://wa.me/918799146289?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
        break;
      case 'Call directly':
        window.open('tel:+918799146289', '_self');
        break;
      case 'Email inquiry':
        const subject = "Inquiry from AI Chat";
        const body = "Hi Web Booster Team,\n\nI was using your AI chat assistant and would like to discuss my project requirements.\n\nBest regards,";
        window.open(`mailto:webbooster1902@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`, '_blank');
        break;
      default:
        handleSendMessage(action);
    }
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <div className="fixed bottom-24 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 relative"
        >
          {isOpen ? <X size={24} /> : <Bot size={24} />}
          {!isOpen && (
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
          )}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-36 right-6 w-96 h-96 bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4">
            <div className="flex items-center">
              <div className="relative">
                <Bot className="w-8 h-8 mr-3" />
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-white"></div>
              </div>
              <div>
                <h3 className="font-semibold">AI Assistant</h3>
                <p className="text-sm opacity-90">Web Booster • Online</p>
              </div>
              <div className="ml-auto">
                <Zap className="w-5 h-5 text-yellow-300" />
              </div>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-gray-50">
            {messages.map((message) => (
              <div key={message.id}>
                <div className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-xs p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-white text-gray-800 border border-gray-200'
                  }`}>
                    <div className="flex items-start">
                      {message.sender === 'bot' && (
                        <Bot className="w-4 h-4 mr-2 mt-0.5 text-purple-600 flex-shrink-0" />
                      )}
                      {message.sender === 'user' && (
                        <User className="w-4 h-4 mr-2 mt-0.5 text-blue-100 flex-shrink-0" />
                      )}
                      <div>
                        <p className="text-sm whitespace-pre-line">{message.text}</p>
                        <p className={`text-xs mt-1 ${
                          message.sender === 'user' ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Suggestions */}
                {message.suggestions && (
                  <div className="flex flex-wrap gap-2 mt-2 ml-6">
                    {message.suggestions.map((suggestion, index) => (
                      <button
                        key={index}
                        onClick={() => handleSpecialAction(suggestion)}
                        className="text-xs bg-purple-100 hover:bg-purple-200 text-purple-700 px-3 py-1 rounded-full transition-colors"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Typing Indicator */}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-white text-gray-800 border border-gray-200 p-3 rounded-lg max-w-xs">
                  <div className="flex items-center">
                    <Bot className="w-4 h-4 mr-2 text-purple-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200 bg-white">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Ask me anything..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-purple-600"
                disabled={isTyping}
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={!inputMessage.trim() || isTyping}
                className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send size={16} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIChat;