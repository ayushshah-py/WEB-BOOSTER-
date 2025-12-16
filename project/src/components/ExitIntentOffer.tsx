import React, { useState, useEffect } from 'react';
import { X, Gift, Download, Clock, CheckCircle } from 'lucide-react';
import { saveNewsletterSubscriber, type NewsletterSubscriber } from '../lib/supabase';

interface ExitIntentOfferProps {
  onClose: () => void;
}

const ExitIntentOffer: React.FC<ExitIntentOfferProps> = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(300); // 5 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;

    const now = new Date();
    
    // Prepare data for database
    const subscriberData: Omit<NewsletterSubscriber, 'id' | 'created_at'> = {
      email: email,
      name: null,
      source: 'Exit Intent Offer',
      subscription_date: now.toISOString().split('T')[0],
      status: 'active'
    };

    // Save to database
    saveNewsletterSubscriber(subscriberData).then((result) => {
      if (!result.success) {
        console.error('Database save failed:', result.error);
      }
    });

    // Store the lead
    const lead = {
      email,
      source: 'Exit Intent Offer',
      offer: 'Free Digital Marketing Audit',
      timestamp: new Date().toISOString()
    };

    const existingLeads = JSON.parse(localStorage.getItem('exitIntentLeads') || '[]');
    existingLeads.push(lead);
    localStorage.setItem('exitIntentLeads', JSON.stringify(existingLeads));

    // Send notification
    const message = `🎁 EXIT INTENT OFFER CLAIMED!

📧 Email: ${email}
🎯 Offer: Free Digital Marketing Audit
⏰ Time: ${new Date().toLocaleString()}
📍 Source: Exit Intent Popup

This visitor was about to leave but claimed our free audit offer. High-intent lead - follow up immediately!`;

    const whatsappUrl = `https://wa.me/918799146289?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');

    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full relative animate-bounce-in">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
          >
            <X className="w-6 h-6" />
          </button>

          <div className="text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Thank You!</h3>
            <p className="text-gray-600 mb-6">
              Your free Digital Marketing Audit is on its way! Check your email in the next few minutes.
            </p>
            <div className="bg-green-50 p-4 rounded-lg mb-6">
              <h4 className="font-semibold text-green-800 mb-2">What's Next?</h4>
              <ul className="text-sm text-green-700 space-y-1">
                <li>✅ Audit report sent to your email</li>
                <li>✅ Our team will review your website</li>
                <li>✅ Personalized recommendations included</li>
                <li>✅ Free consultation call available</li>
              </ul>
            </div>
            <button
              onClick={onClose}
              className="w-full bg-green-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-green-700 transition-colors"
            >
              Continue Browsing
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl p-8 max-w-lg w-full relative animate-slide-in-up">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-r from-orange-400 to-red-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <Gift className="w-8 h-8 text-white" />
          </div>
          <h3 className="text-3xl font-bold text-gray-900 mb-2">Wait! Don't Leave Empty-Handed</h3>
          <p className="text-gray-600">Get your FREE Digital Marketing Audit before you go!</p>
        </div>

        <div className="bg-gradient-to-r from-orange-50 to-red-50 p-6 rounded-xl mb-6">
          <div className="flex items-center justify-center mb-4">
            <Clock className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-lg font-bold text-orange-600">
              Limited Time: {formatTime(timeLeft)}
            </span>
          </div>
          
          <h4 className="text-xl font-bold text-gray-900 mb-4 text-center">
            🎁 FREE Digital Marketing Audit (Worth ₹15,000)
          </h4>
          
          <div className="space-y-3 mb-6">
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">Complete website analysis</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">SEO performance report</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">Social media assessment</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">Personalized recommendations</span>
            </div>
            <div className="flex items-center">
              <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
              <span className="text-gray-700">Competitor analysis</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-600 focus:border-transparent"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
          >
            <Download className="w-5 h-5 mr-2" />
            Get My FREE Audit Now
          </button>
        </form>

        <div className="text-center mt-4">
          <p className="text-xs text-gray-500">
            No spam, unsubscribe anytime. Your email is safe with us.
          </p>
        </div>

        <div className="absolute -top-2 -right-2">
          <div className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-pulse">
            FREE
          </div>
        </div>
      </div>
    </div>
  );
};

// Hook to detect exit intent
export const useExitIntent = () => {
  const [showExitIntent, setShowExitIntent] = useState(false);

  useEffect(() => {
    let hasShown = localStorage.getItem('exitIntentShown');
    if (hasShown) return;

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        setShowExitIntent(true);
        localStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    
    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return { showExitIntent, setShowExitIntent };
};

export default ExitIntentOffer;