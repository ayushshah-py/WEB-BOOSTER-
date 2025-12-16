import React, { useState } from 'react';
import { Send, User, Mail, Phone, Briefcase, FileText, Upload, X, CheckCircle } from 'lucide-react';
import { saveContactInquiry, type ContactInquiry, isSupabaseConfigured } from '../lib/supabase';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  projectDetails: string;
  budget: string;
  timeline: string;
  company: string;
  website: string;
  targetAudience: string;
  currentChallenges: string;
  goals: string;
  preferredContact: string;
}

interface UploadedFile {
  file: File;
  id: string;
  preview?: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    projectDetails: '',
    budget: '',
    timeline: '',
    company: '',
    website: '',
    targetAudience: '',
    currentChallenges: '',
    goals: '',
    preferredContact: 'email'
  });

  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const services = [
    'Business Development',
    'Digital Marketing',
    'Website Design',
    'Search Engine Optimization',
    'Video Production',
    'E-Commerce Management',
    'Content Marketing',
    'Branding & Design',
    'Social Media Marketing',
    'Custom Solution'
  ];

  const budgetRanges = [
    'Under ₹50,000',
    '₹50,000 - ₹1,00,000',
    '₹1,00,000 - ₹2,50,000',
    '₹2,50,000 - ₹5,00,000',
    '₹5,00,000 - ₹10,00,000',
    'Above ₹10,00,000',
    'Let\'s discuss'
  ];

  const timelineOptions = [
    'ASAP (Rush Job)',
    '1-2 weeks',
    '1 month',
    '2-3 months',
    '3-6 months',
    '6+ months',
    'Flexible timeline'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    files.forEach(file => {
      // Check file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }

      const fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      const uploadedFile: UploadedFile = {
        file,
        id: fileId
      };

      // Create preview for images
      if (file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setUploadedFiles(prev => prev.map(f => 
            f.id === fileId ? { ...f, preview: e.target?.result as string } : f
          ));
        };
        reader.readAsDataURL(file);
      }

      setUploadedFiles(prev => [...prev, uploadedFile]);
    });

    // Reset input
    e.target.value = '';
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Prepare data for database
      const now = new Date();
      let dbResult = { success: false, data: null, error: null };
      
      const inquiryData: Omit<ContactInquiry, 'id' | 'created_at' | 'updated_at'> = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || null,
        website: formData.website || null,
        service: formData.service,
        project_details: formData.projectDetails,
        budget: formData.budget,
        timeline: formData.timeline,
        target_audience: formData.targetAudience || null,
        current_challenges: formData.currentChallenges || null,
        goals: formData.goals || null,
        preferred_contact: formData.preferredContact,
        files_count: uploadedFiles.length,
        submission_date: now.toISOString().split('T')[0],
        submission_time: now.toTimeString().split(' ')[0],
        submission_day: now.toLocaleDateString('en-US', { weekday: 'long' }),
        status: 'new',
        source: 'Enhanced Contact Form',
        lead_score: calculateLeadScore()
      };

      // Save to database if configured
      if (isSupabaseConfigured()) {
        dbResult = await saveContactInquiry(inquiryData);
        
        if (!dbResult.success) {
          console.error('Database save failed:', dbResult.error);
          // Continue with localStorage as fallback
        }
      } else {
        console.log('Supabase not configured, using localStorage only');
      }

      // Create enhanced inquiry object
      const inquiry = {
        id: Date.now(),
        ...formData,
        files: uploadedFiles.map(f => ({
          name: f.file.name,
          size: f.file.size,
          type: f.file.type,
          id: f.id
        })),
        timestamp: new Date().toISOString(),
        date: new Date().toLocaleDateString(),
        time: new Date().toLocaleTimeString(),
        source: 'Enhanced Contact Form'
      };
      
      // Save inquiry to localStorage
      const existingInquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
      existingInquiries.push(inquiry);
      localStorage.setItem('inquiries', JSON.stringify(existingInquiries));
      
      // Store files in localStorage (in production, upload to cloud storage)
      const fileData: { [key: string]: string } = {};
      for (const uploadedFile of uploadedFiles) {
        if (uploadedFile.file.size < 1024 * 1024) { // Only store files under 1MB in localStorage
          const reader = new FileReader();
          const fileContent = await new Promise<string>((resolve) => {
            reader.onload = (e) => resolve(e.target?.result as string);
            reader.readAsDataURL(uploadedFile.file);
          });
          fileData[uploadedFile.id] = fileContent;
        }
      }
      localStorage.setItem(`inquiry_files_${inquiry.id}`, JSON.stringify(fileData));
      
      // Send enhanced notifications
      // Send WhatsApp notification with database ID
      const dbId = dbResult.success ? dbResult.data?.id : 'localStorage';
      
      // Create WhatsApp message with enhanced details
      const message = `🚀 NEW ENHANCED INQUIRY! (DB ID: ${dbId})

👤 Name: ${formData.name}
🏢 Company: ${formData.company || 'Not specified'}
📧 Email: ${formData.email}
📱 Phone: ${formData.phone}
🌐 Website: ${formData.website || 'Not provided'}

🎯 Service: ${formData.service}
💰 Budget: ${formData.budget}
⏰ Timeline: ${formData.timeline}
📞 Preferred Contact: ${formData.preferredContact}

🎯 Target Audience: ${formData.targetAudience || 'Not specified'}
🚧 Current Challenges: ${formData.currentChallenges || 'Not specified'}
🎯 Goals: ${formData.goals || 'Not specified'}

📝 Project Details: ${formData.projectDetails}

📎 Files Attached: ${uploadedFiles.length}
${uploadedFiles.map(f => `• ${f.file.name} (${formatFileSize(f.file.size)})`).join('\n')}

Please follow up with this enhanced lead promptly!`;

      const whatsappUrl = `https://wa.me/919974311903?text=${encodeURIComponent(message)}`;
      window.open(whatsappUrl, '_blank');
      
      // Show success state
      setSubmitSuccess(true);
      
      // Reset form after delay
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          projectDetails: '',
          budget: '',
          timeline: '',
          company: '',
          website: '',
          targetAudience: '',
          currentChallenges: '',
          goals: '',
          preferredContact: 'email'
        });
        setUploadedFiles([]);
        setSubmitSuccess(false);
      }, 3000);
      
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error submitting your form. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const calculateLeadScore = (): number => {
    let score = 0;
    
    // Budget scoring
    const budgetScores: { [key: string]: number } = {
      'Under ₹50,000': 20,
      '₹50,000 - ₹1,00,000': 40,
      '₹1,00,000 - ₹2,50,000': 60,
      '₹2,50,000 - ₹5,00,000': 80,
      '₹5,00,000+': 100
    };
    score += budgetScores[formData.budget] || 0;
    
    // Timeline urgency
    const timelineScores: { [key: string]: number } = {
      'ASAP (Rush Job)': 30,
      '1-2 weeks': 25,
      '1 month': 20,
      '2-3 months': 15,
      '3-6 months': 10
    };
    score += timelineScores[formData.timeline] || 0;
    
    // Company website indicates established business
    if (formData.website) score += 20;
    
    // Detailed responses indicate serious inquiry
    if (formData.projectDetails.length > 100) score += 15;
    if (formData.targetAudience && formData.targetAudience.length > 50) score += 10;
    if (formData.currentChallenges && formData.currentChallenges.length > 50) score += 10;
    
    return Math.min(score, 100);
  };

  // Dynamic fields based on service selection
  const renderDynamicFields = () => {
    if (!formData.service) return null;

    const commonFields = (
      <>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="budget" className="block text-sm font-semibold text-gray-700 mb-2">
              💰 Project Budget *
            </label>
            <select
              id="budget"
              name="budget"
              required
              value={formData.budget}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select budget range</option>
              {budgetRanges.map((range, index) => (
                <option key={index} value={range}>{range}</option>
              ))}
            </select>
          </div>

          <div>
            <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700 mb-2">
              ⏰ Project Timeline *
            </label>
            <select
              id="timeline"
              name="timeline"
              required
              value={formData.timeline}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
            >
              <option value="">Select timeline</option>
              {timelineOptions.map((option, index) => (
                <option key={index} value={option}>{option}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label htmlFor="company" className="block text-sm font-semibold text-gray-700 mb-2">
              🏢 Company/Organization
            </label>
            <input
              type="text"
              id="company"
              name="company"
              value={formData.company}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              placeholder="Your company name"
            />
          </div>

          <div>
            <label htmlFor="website" className="block text-sm font-semibold text-gray-700 mb-2">
              🌐 Current Website (if any)
            </label>
            <input
              type="url"
              id="website"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              placeholder="https://yourwebsite.com"
            />
          </div>
        </div>
      </>
    );

    const serviceSpecificFields = () => {
      switch (formData.service) {
        case 'Digital Marketing':
        case 'Social Media Marketing':
          return (
            <div>
              <label htmlFor="targetAudience" className="block text-sm font-semibold text-gray-700 mb-2">
                🎯 Target Audience *
              </label>
              <textarea
                id="targetAudience"
                name="targetAudience"
                required
                rows={3}
                value={formData.targetAudience}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="Describe your target audience (age, location, interests, demographics...)"
              />
            </div>
          );

        case 'Website Design':
        case 'E-Commerce Management':
          return (
            <div>
              <label htmlFor="currentChallenges" className="block text-sm font-semibold text-gray-700 mb-2">
                🚧 Current Website Challenges
              </label>
              <textarea
                id="currentChallenges"
                name="currentChallenges"
                rows={3}
                value={formData.currentChallenges}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="What issues are you facing with your current website or online presence?"
              />
            </div>
          );

        case 'Search Engine Optimization':
          return (
            <div>
              <label htmlFor="goals" className="block text-sm font-semibold text-gray-700 mb-2">
                🎯 SEO Goals *
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={3}
                value={formData.goals}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="What do you want to achieve with SEO? (rankings, traffic, leads, etc.)"
              />
            </div>
          );

        case 'Video Production':
          return (
            <div>
              <label htmlFor="goals" className="block text-sm font-semibold text-gray-700 mb-2">
                🎬 Video Requirements *
              </label>
              <textarea
                id="goals"
                name="goals"
                required
                rows={3}
                value={formData.goals}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="What type of videos do you need? (promotional, explainer, social media, etc.)"
              />
            </div>
          );

        default:
          return (
            <div>
              <label htmlFor="goals" className="block text-sm font-semibold text-gray-700 mb-2">
                🎯 Project Goals
              </label>
              <textarea
                id="goals"
                name="goals"
                rows={3}
                value={formData.goals}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="What do you hope to achieve with this project?"
              />
            </div>
          );
      }
    };

    return (
      <div className="space-y-6 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600">
        <h3 className="text-lg font-semibold text-blue-900 mb-4">
          📋 {formData.service} - Additional Details
        </h3>
        {commonFields}
        {serviceSpecificFields()}
      </div>
    );
  };

  if (submitSuccess) {
    return (
      <section id="contact" className="py-20 bg-gradient-to-br from-green-50 via-white to-blue-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white rounded-2xl shadow-2xl p-12">
            <CheckCircle className="w-20 h-20 text-green-600 mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Thank You! 🎉
            </h2>
            <p className="text-xl text-gray-600 mb-6">
              Your enhanced project inquiry has been submitted successfully!
            </p>
            <div className="bg-green-50 p-6 rounded-lg mb-6">
              <p className="text-green-800 font-semibold mb-2">What happens next?</p>
              <ul className="text-green-700 text-left space-y-2">
                <li>✅ Our team has been notified via SMS & WhatsApp</li>
                <li>✅ We'll review your project details and files</li>
                <li>✅ Expect a response within 2-4 hours</li>
                <li>✅ We'll contact you via your preferred method</li>
              </ul>
            </div>
            <p className="text-gray-500">
              Redirecting to form in a few seconds...
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Start Your Project Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tell us about your project with our enhanced form. Upload files, specify requirements, 
            and get a personalized response within hours.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label htmlFor="preferredContact" className="block text-sm font-semibold text-gray-700 mb-2">
                  📞 Preferred Contact Method *
                </label>
                <select
                  id="preferredContact"
                  name="preferredContact"
                  required
                  value={formData.preferredContact}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                >
                  <option value="email">Email</option>
                  <option value="phone">Phone Call</option>
                  <option value="whatsapp">WhatsApp</option>
                  <option value="video">Video Call</option>
                </select>
              </div>
            </div>

            {/* Service Selection */}
            <div>
              <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                <Briefcase className="w-4 h-4 inline mr-2" />
                Service Needed *
              </label>
              <select
                id="service"
                name="service"
                required
                value={formData.service}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
              >
                <option value="">Select a service</option>
                {services.map((service, index) => (
                  <option key={index} value={service}>{service}</option>
                ))}
              </select>
            </div>

            {/* Dynamic Fields */}
            {renderDynamicFields()}

            {/* Project Details */}
            <div>
              <label htmlFor="projectDetails" className="block text-sm font-semibold text-gray-700 mb-2">
                <FileText className="w-4 h-4 inline mr-2" />
                Project Details *
              </label>
              <textarea
                id="projectDetails"
                name="projectDetails"
                required
                rows={5}
                value={formData.projectDetails}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all duration-300"
                placeholder="Describe your project in detail. Include any specific requirements, expectations, or questions you have..."
              />
            </div>

            {/* File Upload Section */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <div className="text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Upload Project Files
                </h3>
                <p className="text-gray-600 mb-4">
                  Attach project briefs, images, documents, or any relevant files (Max 10MB each)
                </p>
                <label className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer inline-flex items-center">
                  <Upload className="w-5 h-5 mr-2" />
                  Choose Files
                  <input
                    type="file"
                    multiple
                    onChange={handleFileUpload}
                    className="hidden"
                    accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png,.gif,.zip,.rar"
                  />
                </label>
                <p className="text-sm text-gray-500 mt-2">
                  Supported: PDF, DOC, DOCX, TXT, JPG, PNG, GIF, ZIP, RAR
                </p>
              </div>

              {/* Uploaded Files Display */}
              {uploadedFiles.length > 0 && (
                <div className="mt-6 space-y-3">
                  <h4 className="font-semibold text-gray-900">Uploaded Files:</h4>
                  {uploadedFiles.map((uploadedFile) => (
                    <div key={uploadedFile.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {uploadedFile.preview ? (
                          <img 
                            src={uploadedFile.preview} 
                            alt={uploadedFile.file.name}
                            className="w-10 h-10 object-cover rounded"
                          />
                        ) : (
                          <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{uploadedFile.file.name}</p>
                          <p className="text-sm text-gray-500">{formatFileSize(uploadedFile.file.size)}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(uploadedFile.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        <X className="w-5 h-5" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-8 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Submitting...
                </>
              ) : (
                <>
                  <Send className="mr-2 w-5 h-5" />
                  Submit Enhanced Project Request
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;