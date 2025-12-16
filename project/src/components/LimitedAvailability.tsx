import React, { useState, useEffect } from 'react';
import { Clock, Users, Zap, AlertTriangle, CheckCircle } from 'lucide-react';

const LimitedAvailability: React.FC = () => {
  const [slotsLeft, setSlotsLeft] = useState(3);
  const [timeLeft, setTimeLeft] = useState(86400); // 24 hours in seconds
  const [recentBookings, setRecentBookings] = useState([
    { name: 'Rajesh K.', location: 'Mumbai', service: 'SEO Package', time: '2 min ago' },
    { name: 'Priya S.', location: 'Delhi', service: 'Website Design', time: '8 min ago' },
    { name: 'Amit P.', location: 'Bangalore', service: 'Digital Marketing', time: '15 min ago' }
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => prev > 0 ? prev - 1 : 86400); // Reset after 24 hours
    }, 1000);

    // Simulate slot booking every 10-15 minutes
    const slotTimer = setInterval(() => {
      if (Math.random() > 0.7 && slotsLeft > 0) {
        setSlotsLeft(prev => Math.max(prev - 1, 0));
        
        // Add new booking to recent list
        const names = ['Vikash M.', 'Sneha R.', 'Rohit K.', 'Kavya T.', 'Arjun S.'];
        const locations = ['Mumbai', 'Delhi', 'Pune', 'Chennai', 'Hyderabad'];
        const services = ['SEO Package', 'Website Design', 'Digital Marketing', 'Social Media'];
        
        const newBooking = {
          name: names[Math.floor(Math.random() * names.length)],
          location: locations[Math.floor(Math.random() * locations.length)],
          service: services[Math.floor(Math.random() * services.length)],
          time: 'Just now'
        };
        
        setRecentBookings(prev => [newBooking, ...prev.slice(0, 2)]);
      }
    }, 600000); // Every 10 minutes

    return () => {
      clearInterval(timer);
      clearInterval(slotTimer);
    };
  }, [slotsLeft]);

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getUrgencyColor = () => {
    if (slotsLeft <= 1) return 'text-red-600 bg-red-50 border-red-200';
    if (slotsLeft <= 2) return 'text-orange-600 bg-orange-50 border-orange-200';
    return 'text-green-600 bg-green-50 border-green-200';
  };

  const getUrgencyMessage = () => {
    if (slotsLeft <= 1) return '🚨 Last slot available!';
    if (slotsLeft <= 2) return '⚠️ Almost fully booked!';
    return '✅ Limited slots available';
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-red-50 to-orange-50 border-2 border-red-200 rounded-2xl p-8">
          <div className="text-center mb-8">
            <div className="inline-flex items-center bg-red-100 text-red-800 px-4 py-2 rounded-full mb-4">
              <AlertTriangle className="w-5 h-5 mr-2" />
              <span className="font-bold">Limited Availability Alert</span>
            </div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Free Strategy Sessions This Month
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We only accept a limited number of new strategy sessions each month to ensure 
              quality attention for every client.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Slots Counter */}
            <div className={`${getUrgencyColor()} border-2 p-6 rounded-xl text-center`}>
              <div className="text-4xl font-bold mb-2">{slotsLeft}</div>
              <div className="font-semibold mb-1">Slots Remaining</div>
              <div className="text-sm">{getUrgencyMessage()}</div>
            </div>

            {/* Countdown Timer */}
            <div className="bg-blue-50 border-2 border-blue-200 text-blue-600 p-6 rounded-xl text-center">
              <div className="text-2xl font-bold mb-2 font-mono">{formatTime(timeLeft)}</div>
              <div className="font-semibold mb-1">Time Left</div>
              <div className="text-sm">Until slots reset</div>
            </div>

            {/* Success Rate */}
            <div className="bg-green-50 border-2 border-green-200 text-green-600 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold mb-2">98%</div>
              <div className="font-semibold mb-1">Success Rate</div>
              <div className="text-sm">Client satisfaction</div>
            </div>
          </div>

          {/* Recent Bookings */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 mb-8">
            <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
              <Users className="w-5 h-5 mr-2 text-blue-600" />
              Recent Bookings
            </h3>
            <div className="space-y-3">
              {recentBookings.map((booking, index) => (
                <div key={index} className="flex items-center justify-between py-2 border-b border-gray-100 last:border-b-0">
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
                      {booking.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{booking.name} from {booking.location}</div>
                      <div className="text-sm text-gray-600">Booked: {booking.service}</div>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">{booking.time}</div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <div className="mb-4">
              <span className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-semibold text-sm">
                🔥 High Demand - Book Now!
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-gradient-to-r from-red-600 to-orange-600 text-white px-8 py-4 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
              >
                <Clock className="w-5 h-5 mr-2" />
                Book My Free Session Now
              </a>
              <a
                href="tel:+918799146289"
                className="border-2 border-red-600 text-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-600 hover:text-white transition-all duration-300 flex items-center justify-center"
              >
                📞 Call for Immediate Booking
              </a>
            </div>
            <p className="text-sm text-gray-500 mt-4">
              * Free sessions are 30 minutes and include personalized strategy recommendations
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LimitedAvailability;