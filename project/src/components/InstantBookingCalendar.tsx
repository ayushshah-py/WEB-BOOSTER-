import React, { useState } from 'react';
import { Calendar, Clock, User, Phone, Mail, CheckCircle, ArrowRight } from 'lucide-react';
import { saveConsultationBooking, type BookingData } from '../lib/supabase';

interface TimeSlot {
  id: string;
  time: string;
  available: boolean;
  consultant: string;
}

interface BookingData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  time: string;
  consultant: string;
  notes: string;
}

const InstantBookingCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingData, setBookingData] = useState<BookingData>({
    name: '', email: '', phone: '', service: '', date: '', time: '', consultant: '', notes: ''
  });
  const [isBooked, setIsBooked] = useState(false);
  const [availableSlots, setAvailableSlots] = useState(7); // Dynamic counter

  const services = [
    'Digital Marketing Strategy',
    'Website Design Consultation',
    'SEO Audit & Planning',
    'Social Media Strategy',
    'Video Production Planning',
    'E-Commerce Consultation',
    'Complete Business Review'
  ];

  const consultants = [
    { name: 'Shivam Jaiswal', role: 'Founder & CEO', expertise: 'Business Strategy' },
    { name: 'Ayush Shah', role: 'Lead Developer', expertise: 'Technical Solutions' },
    { name: 'Janvi Bhosle', role: 'SEO Specialist', expertise: 'Search Optimization' }
  ];

  const generateTimeSlots = (date: string): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    const times = ['10:00 AM', '11:30 AM', '2:00 PM', '3:30 PM', '5:00 PM'];
    
    times.forEach((time, index) => {
      slots.push({
        id: `${date}-${index}`,
        time,
        available: Math.random() > 0.3, // 70% availability simulation
        consultant: consultants[index % consultants.length].name
      });
    });
    
    return slots;
  };

  const getNextWeekDates = () => {
    const dates = [];
    const today = new Date();
    
    for (let i = 1; i <= 7; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push({
        value: date.toISOString().split('T')[0],
        label: date.toLocaleDateString('en-US', { 
          weekday: 'short', 
          month: 'short', 
          day: 'numeric' 
        }),
        dayName: date.toLocaleDateString('en-US', { weekday: 'long' })
      });
    }
    
    return dates;
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
    setSelectedTime('');
    setBookingData(prev => ({ ...prev, date }));
  };

  const handleTimeSelect = (timeSlot: TimeSlot) => {
    setSelectedTime(timeSlot.time);
    setBookingData(prev => ({ 
      ...prev, 
      time: timeSlot.time, 
      consultant: timeSlot.consultant 
    }));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setBookingData(prev => ({ ...prev, [name]: value }));
  };

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    
    const now = new Date();
    
    // Prepare booking data for database
    const dbBookingData: Omit<BookingData, 'id' | 'created_at'> = {
      name: bookingData.name,
      email: bookingData.email,
      phone: bookingData.phone,
      company: bookingData.company || null,
      service: bookingData.service,
      consultation_date: bookingData.date,
      consultation_time: bookingData.time,
      consultant: bookingData.consultant,
      notes: bookingData.notes || null,
      status: 'scheduled',
      booking_date: now.toISOString().split('T')[0],
      booking_time: now.toTimeString().split(' ')[0]
    };

    // Save to database
    saveConsultationBooking(dbBookingData).then((result) => {
      if (!result.success) {
        console.error('Database save failed:', result.error);
      }
    });
    
    // Store booking locally as backup
    const booking = {
      ...bookingData,
      id: Date.now().toString(),
      timestamp: now.toISOString(),
      status: 'scheduled'
    };
    
    const existingBookings = JSON.parse(localStorage.getItem('consultationBookings') || '[]');
    existingBookings.push(booking);
    localStorage.setItem('consultationBookings', JSON.stringify(existingBookings));
    
    // Reduce available slots
    setAvailableSlots(prev => Math.max(prev - 1, 0));
    
    // Send notification
    const message = `📅 NEW CONSULTATION BOOKED! (DB Recorded)

👤 Client: ${bookingData.name}
📧 Email: ${bookingData.email}
📱 Phone: ${bookingData.phone}
🎯 Service: ${bookingData.service}

📅 Date: ${new Date(bookingData.date).toLocaleDateString('en-US', { 
  weekday: 'long', 
  year: 'numeric', 
  month: 'long', 
  day: 'numeric' 
})}
⏰ Time: ${bookingData.time}
👨‍💼 Consultant: ${bookingData.consultant}

📝 Notes: ${bookingData.notes || 'No additional notes'}

Please confirm this appointment and send calendar invite!`;

    const whatsappUrl = `https://wa.me/918799146289?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    setIsBooked(true);
  };

  const dates = getNextWeekDates();
  const timeSlots = selectedDate ? generateTimeSlots(selectedDate) : [];

  if (isBooked) {
    return (
      <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-2xl p-8 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-900 mb-4">Consultation Booked! 🎉</h3>
        <div className="bg-green-50 p-6 rounded-xl mb-6">
          <h4 className="font-bold text-green-800 mb-3">Booking Confirmed</h4>
          <div className="space-y-2 text-green-700">
            <p><strong>Date:</strong> {new Date(bookingData.date).toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })}</p>
            <p><strong>Time:</strong> {bookingData.time}</p>
            <p><strong>Consultant:</strong> {bookingData.consultant}</p>
            <p><strong>Service:</strong> {bookingData.service}</p>
          </div>
        </div>
        <p className="text-gray-600 mb-6">
          You'll receive a calendar invite and confirmation call within 2 hours.
        </p>
        <button
          onClick={() => window.location.reload()}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Book Another Consultation
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-8 py-6 text-white">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Calendar className="w-8 h-8 mr-4" />
            <div>
              <h2 className="text-3xl font-bold">Book Free Consultation</h2>
              <p className="text-blue-100">Schedule a strategy session with our experts</p>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm text-blue-100">Available Slots</div>
            <div className="text-2xl font-bold text-yellow-300">{availableSlots} left</div>
          </div>
        </div>
      </div>

      <form onSubmit={handleBooking} className="p-8 space-y-6">
        {/* Service Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            🎯 What would you like to discuss?
          </label>
          <select
            name="service"
            value={bookingData.service}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
          >
            <option value="">Select consultation topic</option>
            {services.map((service, index) => (
              <option key={index} value={service}>{service}</option>
            ))}
          </select>
        </div>

        {/* Date Selection */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-3">
            📅 Choose Date
          </label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {dates.map((date) => (
              <button
                key={date.value}
                type="button"
                onClick={() => handleDateSelect(date.value)}
                className={`p-4 border-2 rounded-lg text-center transition-all ${
                  selectedDate === date.value
                    ? 'border-blue-500 bg-blue-50 text-blue-700'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div className="font-semibold">{date.label}</div>
                <div className="text-sm text-gray-500">{date.dayName}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Time Selection */}
        {selectedDate && (
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              ⏰ Choose Time
            </label>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {timeSlots.map((slot) => (
                <button
                  key={slot.id}
                  type="button"
                  onClick={() => handleTimeSelect(slot)}
                  disabled={!slot.available}
                  className={`p-4 border-2 rounded-lg text-left transition-all ${
                    selectedTime === slot.time
                      ? 'border-green-500 bg-green-50'
                      : slot.available
                      ? 'border-gray-200 hover:border-gray-300'
                      : 'border-gray-100 bg-gray-50 opacity-50 cursor-not-allowed'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold">{slot.time}</div>
                      <div className="text-sm text-gray-600">{slot.consultant}</div>
                    </div>
                    <div className={`text-sm font-semibold ${
                      slot.available ? 'text-green-600' : 'text-red-500'
                    }`}>
                      {slot.available ? 'Available' : 'Booked'}
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Contact Information */}
        {selectedTime && (
          <div className="bg-blue-50 p-6 rounded-xl space-y-4">
            <h3 className="text-lg font-bold text-gray-900 mb-4">Your Information</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={bookingData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={bookingData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={bookingData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  💼 Company (Optional)
                </label>
                <input
                  type="text"
                  name="company"
                  value={bookingData.company || ''}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📝 Additional Notes (Optional)
              </label>
              <textarea
                name="notes"
                value={bookingData.notes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Tell us about your project or specific questions..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-green-600 to-blue-600 text-white py-4 px-6 rounded-lg font-bold text-lg hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Confirm Free Consultation
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>
        )}
      </form>
    </div>
  );
};

export default InstantBookingCalendar;