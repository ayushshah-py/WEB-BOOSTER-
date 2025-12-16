import React from 'react';
import Hero from '../components/Hero';
import HoverAnimations from '../components/HoverAnimations';
import InteractiveServiceSelector from '../components/InteractiveServiceSelector';
import BeforeAfterSlider from '../components/BeforeAfterSlider';
import InstantQuoteCalculator from '../components/InstantQuoteCalculator';
import ROICalculator from '../components/ROICalculator';
import BudgetPlanner from '../components/BudgetPlanner';
import InstantBookingCalendar from '../components/InstantBookingCalendar';
import RealTimeCounters from '../components/RealTimeCounters';
import OneClickWhatsApp from '../components/OneClickWhatsApp';
import PaymentSection from '../components/PaymentSection';
import FixedPaymentSection from '../components/FixedPaymentSection';
import CTA from '../components/CTA';
import AIChat from '../components/AIChat';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      
      {/* Interactive Service Selector */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Find Your Perfect Service
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Answer a few quick questions and get a personalized service recommendation
            </p>
          </div>
          
          <InteractiveServiceSelector />
        </div>
      </section>

      {/* Services with Hover Animations */}
      <HoverAnimations />

      {/* Before & After Transformations */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Real Results, Real Transformations
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how we've transformed businesses like yours with measurable results
            </p>
          </div>
          
          <BeforeAfterSlider />
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Calculate Your Marketing ROI
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover your potential return on investment with our interactive calculator
            </p>
          </div>
          
          <ROICalculator />
        </div>
      </section>

      {/* Budget Planner */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Smart Budget Planner
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Optimize your marketing budget allocation for maximum impact
            </p>
          </div>
          
          <BudgetPlanner />
        </div>
      </section>

      {/* One-Click WhatsApp */}
      <OneClickWhatsApp />

      {/* UPI Payment Section */}
      <PaymentSection />

      {/* Fixed ₹10 Payment Section */}
      <FixedPaymentSection />

      {/* Instant Booking Calendar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Book Your Free Strategy Session
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Schedule a consultation with our experts - no back-and-forth emails needed
            </p>
          </div>
          
          <InstantBookingCalendar />
        </div>
      </section>

      {/* Real-Time Counters */}
      <RealTimeCounters />

      <CTA />
      
      {/* AI Chat Assistant */}
      <AIChat />
    </div>
  );
};

export default HomePage;