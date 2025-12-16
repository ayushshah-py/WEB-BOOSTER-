import React, { useState, useEffect } from 'react';
import { ChevronRight, ChevronLeft, Upload, MapPin, DollarSign, Calendar, Building, User, Mail, Phone, FileText, Target, Clock, Star } from 'lucide-react';
import { saveContactInquiry, type ContactInquiry } from '../lib/supabase';

interface FormData {
  // Step 1: Basic Info
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
  
  // Step 2: Project Details
  service: string;
  budget: string;
  timeline: string;
  projectType: string;
  
  // Step 3: Goals & Requirements
  primaryGoal: string;
  targetAudience: string;
  currentChallenges: string;
  successMetrics: string;
  
  // Step 4: Additional Info
  referralSource: string;
  previousExperience: string;
  additionalNotes: string;
  urgency: string;
  
  // Auto-detected
  location: string;
  deviceType: string;
  browserInfo: string;
  visitSource: string;
}

interface UploadedFile {
  file: File;
  id: string;
  preview?: string;
}

const SmartLeadForm: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    name: '', email: '', phone: '', company: '', website: '',
    service: '', budget: '', timeline: '', projectType: '',
    primaryGoal: '', targetAudience: '', currentChallenges: '', successMetrics: '',
    referralSource: '', previousExperience: '', additionalNotes: '', urgency: '',
    location: '', deviceType: '', browserInfo: '', visitSource: ''
  });
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [validationErrors, setValidationErrors] = useState<string[]>([]);

  const totalSteps = 4;
  const progressPercentage = (currentStep / totalSteps) * 100;

  // Auto-detect user info
  useEffect(() => {
    const detectUserInfo = async () => {
      // Detect device type
      const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
      const deviceType = isMobile ? 'Mobile' : 'Desktop';
      
      // Browser info
      const browserInfo = navigator.userAgent;
      
      // Visit source (from referrer or UTM params)
      const urlParams = new URLSearchParams(window.location.search);
      const utmSource = urlParams.get('utm_source');
      const referrer = document.referrer;
      const visitSource = utmSource || (referrer ? new URL(referrer).hostname : 'Direct');
      
      // Try to get location (requires user permission)
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject);
        });
        
        // Reverse geocoding would happen here in production
        const location = `${position.coords.latitude.toFixed(2)}, ${position.coords.longitude.toFixed(2)}`;
        
        setFormData(prev => ({
          ...prev,
          deviceType,
          browserInfo,
          visitSource,
          location
        }));
      } catch (error) {
        setFormData(prev => ({
          ...prev,
          deviceType,
          browserInfo,
          visitSource,
          location: 'Location not available'
        }));
      }
    };

    detectUserInfo();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear validation errors when user starts typing
    if (validationErrors.length > 0) {
      setValidationErrors([]);
    }
  };

  const validateStep = (step: number): boolean => {
    const errors: string[] = [];
    
    switch (step) {
      case 1:
        if (!formData.name.trim()) errors.push('Name is required');
        if (!formData.email.trim()) errors.push('Email is required');
        if (!formData.phone.trim()) errors.push('Phone is required');
        if (formData.email && !/\S+@\S+\.\S+/.test(formData.email)) {
          errors.push('Please enter a valid email address');
        }
        break;
      case 2:
        if (!formData.service) errors.push('Please select a service');
        if (!formData.budget) errors.push('Please select a budget range');
        if (!formData.timeline) errors.push('Please select a timeline');
        break;
      case 3:
        if (!formData.primaryGoal.trim()) errors.push('Primary goal is required');
        if (!formData.targetAudience.trim()) errors.push('Target audience is required');
        break;
    }
    
    setValidationErrors(errors);
    return errors.length === 0;
  };

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(prev => Math.min(prev + 1, totalSteps));
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    
    files.forEach(file => {
      if (file.size > 10 * 1024 * 1024) {
        alert(`File ${file.name} is too large. Maximum size is 10MB.`);
        return;
      }

      const fileId = Date.now().toString() + Math.random().toString(36).substr(2, 9);
      const uploadedFile: UploadedFile = { file, id: fileId };

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

    e.target.value = '';
  };

  const removeFile = (fileId: string) => {
    setUploadedFiles(prev => prev.filter(f => f.id !== fileId));
  };

  const handleSubmit = async () => {
    if (!validateStep(currentStep)) return;
    
    setIsSubmitting(true);
    
    try {
      const now = new Date();
      
      // Prepare data for database
      const inquiryData: Omit<ContactInquiry, 'id' | 'created_at' | 'updated_at'> = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        company: formData.company || null,
        website: formData.website || null,
        service: formData.service,
        project_details: `${formData.primaryGoal}\n\nTarget Audience: ${formData.targetAudience}\n\nChallenges: ${formData.currentChallenges}\n\nAdditional Notes: ${formData.additionalNotes}`,
        budget: formData.budget,
        timeline: formData.timeline,
        target_audience: formData.targetAudience,
        current_challenges: formData.currentChallenges,
        goals: formData.primaryGoal,
        preferred_contact: 'whatsapp',
        files_count: uploadedFiles.length,
        submission_date: now.toISOString().split('T')[0],
        submission_time: now.toTimeString().split(' ')[0],
        submission_day: now.toLocaleDateString('en-US', { weekday: 'long' }),
        status: 'new',
        source: 'Smart Lead Form',
        lead_score: calculateLeadScore()
      };

      // Save to database
      saveContactInquiry(inquiryData).then((result) => {
        if (!result.success) {
          console.error('Database save failed:', result.error);
        }
      });

      const leadData = {
        ...formData,
        files: uploadedFiles.map(f => ({
          name: f.file.name,
          size: f.file.size,
          type: f.file.type
        })),
        timestamp: new Date().toISOString(),
        leadScore: calculateLeadScore(),
        completionTime: Date.now() - (parseInt(localStorage.getItem('formStartTime') || '0'))
      };
      
      // Save to localStorage
      const existingLeads = JSON.parse(localStorage.getItem('smartLeads') || '[]');
      existingLeads.push(leadData);
      localStorage.setItem('smartLeads', JSON.stringify(existingLeads));
      
      // Send notifications
      await sendAdminNotifications(leadData);
      
      // Show success and redirect
      alert('Thank you! Your detailed inquiry has been submitted. We\'ll contact you within 2 hours.');
      
      // Reset form
      setFormData({
        name: '', email: '', phone: '', company: '', website: '',
        service: '', budget: '', timeline: '', projectType: '',
        primaryGoal: '', targetAudience: '', currentChallenges: '', successMetrics: '',
        referralSource: '', previousExperience: '', additionalNotes: '', urgency: '',
        location: formData.location, deviceType: formData.deviceType, 
        browserInfo: formData.browserInfo, visitSource: formData.visitSource
      });
      setUploadedFiles([]);
      setCurrentStep(1);
      
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
    
    // Urgency scoring
    const urgencyScores: { [key: string]: number } = {
      'ASAP': 30,
      'This week': 25,
      'This month': 20,
      'Next 3 months': 15,
      'No rush': 10
    };
    score += urgencyScores[formData.urgency] || 0;
    
    // Company website (indicates established business)
    if (formData.website) score += 20;
    
    // Detailed responses
    if (formData.currentChallenges.length > 50) score += 15;
    if (formData.targetAudience.length > 30) score += 15;
    
    return Math.min(score, 100);
  };

  const sendAdminNotifications = async (leadData: any) => {
    const message = `🎯 HIGH-QUALITY LEAD ALERT!

📊 Lead Score: ${leadData.leadScore}/100
⭐ Priority: ${leadData.leadScore > 70 ? 'HIGH' : leadData.leadScore > 40 ? 'MEDIUM' : 'LOW'}

👤 Contact Info:
Name: ${leadData.name}
Email: ${leadData.email}
Phone: ${leadData.phone}
Company: ${leadData.company || 'Not specified'}
Website: ${leadData.website || 'Not provided'}

💼 Project Details:
Service: ${leadData.service}
Budget: ${leadData.budget}
Timeline: ${leadData.timeline}
Type: ${leadData.projectType}

🎯 Goals & Requirements:
Primary Goal: ${leadData.primaryGoal}
Target Audience: ${leadData.targetAudience}
Current Challenges: ${leadData.currentChallenges}

📍 Lead Intelligence:
Source: ${leadData.visitSource}
Location: ${leadData.location}
Device: ${leadData.deviceType}
Urgency: ${leadData.urgency}

📎 Files: ${leadData.files.length} attached
⏱️ Form Time: ${Math.round(leadData.completionTime / 1000)}s

IMMEDIATE ACTION REQUIRED!`;

    // Send to both admins
    const whatsappAyush = `https://wa.me/918799146289?text=${encodeURIComponent(message)}`;
    const whatsappShivam = `https://wa.me/919974311903?text=${encodeURIComponent(message)}`;
    
    window.open(whatsappAyush, '_blank');
    setTimeout(() => window.open(whatsappShivam, '_blank'), 1000);
  };

  // Store form start time
  useEffect(() => {
    if (!localStorage.getItem('formStartTime')) {
      localStorage.setItem('formStartTime', Date.now().toString());
    }
  }, []);

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <User className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Let's Get Started</h3>
              <p className="text-gray-600">Tell us about yourself and your business</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="w-4 h-4 inline mr-2" />
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Mail className="w-4 h-4 inline mr-2" />
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="your.email@company.com"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="w-4 h-4 inline mr-2" />
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="+91 9876543210"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Building className="w-4 h-4 inline mr-2" />
                  Company Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                  placeholder="Your company name"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🌐 Current Website (if any)
              </label>
              <input
                type="url"
                name="website"
                value={formData.website}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="https://yourwebsite.com"
              />
            </div>
          </div>
        );

      case 2:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Project Details</h3>
              <p className="text-gray-600">Help us understand your project requirements</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  🎯 Service Needed *
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select a service</option>
                  <option value="Digital Marketing">Digital Marketing</option>
                  <option value="Website Design">Website Design</option>
                  <option value="SEO">Search Engine Optimization</option>
                  <option value="Social Media Marketing">Social Media Marketing</option>
                  <option value="Content Marketing">Content Marketing</option>
                  <option value="E-commerce Management">E-commerce Management</option>
                  <option value="Video Production">Video Production</option>
                  <option value="Branding">Branding & Design</option>
                  <option value="Multiple Services">Multiple Services</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <DollarSign className="w-4 h-4 inline mr-2" />
                  Project Budget *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select budget range</option>
                  <option value="Under ₹50,000">Under ₹50,000</option>
                  <option value="₹50,000 - ₹1,00,000">₹50,000 - ₹1,00,000</option>
                  <option value="₹1,00,000 - ₹2,50,000">₹1,00,000 - ₹2,50,000</option>
                  <option value="₹2,50,000 - ₹5,00,000">₹2,50,000 - ₹5,00,000</option>
                  <option value="₹5,00,000+">₹5,00,000+</option>
                  <option value="Let's discuss">Let's discuss</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="w-4 h-4 inline mr-2" />
                  Timeline *
                </label>
                <select
                  name="timeline"
                  value={formData.timeline}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select timeline</option>
                  <option value="ASAP">ASAP (Rush Job)</option>
                  <option value="This week">This week</option>
                  <option value="This month">This month</option>
                  <option value="Next 3 months">Next 3 months</option>
                  <option value="No rush">No rush</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📋 Project Type
                </label>
                <select
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select project type</option>
                  <option value="New Business Launch">New Business Launch</option>
                  <option value="Existing Business Growth">Existing Business Growth</option>
                  <option value="Rebranding">Rebranding</option>
                  <option value="Campaign Launch">Campaign Launch</option>
                  <option value="Website Redesign">Website Redesign</option>
                  <option value="Other">Other</option>
                </select>
              </div>
            </div>
          </div>
        );

      case 3:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <Star className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Goals & Requirements</h3>
              <p className="text-gray-600">Define your success criteria and target audience</p>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🎯 Primary Goal *
              </label>
              <textarea
                name="primaryGoal"
                value={formData.primaryGoal}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="What's the main objective you want to achieve? (e.g., increase sales, brand awareness, lead generation)"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                👥 Target Audience *
              </label>
              <textarea
                name="targetAudience"
                value={formData.targetAudience}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Describe your ideal customers (age, location, interests, demographics, behavior)"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                🚧 Current Challenges
              </label>
              <textarea
                name="currentChallenges"
                value={formData.currentChallenges}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="What marketing challenges are you currently facing? What's not working?"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📊 Success Metrics
              </label>
              <textarea
                name="successMetrics"
                value={formData.successMetrics}
                onChange={handleInputChange}
                rows={2}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="How will you measure success? (e.g., 50% increase in leads, 100 new customers, ₹10L revenue)"
              />
            </div>
          </div>
        );

      case 4:
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <FileText className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-gray-900">Final Details</h3>
              <p className="text-gray-600">Additional information and file uploads</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  📍 How did you find us?
                </label>
                <select
                  name="referralSource"
                  value={formData.referralSource}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select source</option>
                  <option value="Google Search">Google Search</option>
                  <option value="Social Media">Social Media</option>
                  <option value="Referral">Referral from friend/colleague</option>
                  <option value="LinkedIn">LinkedIn</option>
                  <option value="Instagram">Instagram</option>
                  <option value="Facebook">Facebook</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">
                  ⚡ Urgency Level
                </label>
                <select
                  name="urgency"
                  value={formData.urgency}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                >
                  <option value="">Select urgency</option>
                  <option value="ASAP">ASAP - Need to start immediately</option>
                  <option value="This week">This week</option>
                  <option value="This month">This month</option>
                  <option value="Next 3 months">Next 3 months</option>
                  <option value="No rush">No rush - just exploring</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                📈 Previous Marketing Experience
              </label>
              <textarea
                name="previousExperience"
                value={formData.previousExperience}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Tell us about your previous marketing efforts, what worked, what didn't"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">
                💭 Additional Notes
              </label>
              <textarea
                name="additionalNotes"
                value={formData.additionalNotes}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-transparent"
                placeholder="Any additional information, specific requirements, or questions you'd like to share"
              />
            </div>

            {/* File Upload */}
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 hover:border-blue-500 transition-colors">
              <div className="text-center">
                <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                <h4 className="text-lg font-semibold text-gray-900 mb-2">Upload Project Files</h4>
                <p className="text-gray-600 mb-4">
                  Attach briefs, examples, logos, or any relevant files (Max 10MB each)
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
              </div>

              {uploadedFiles.length > 0 && (
                <div className="mt-6 space-y-3">
                  <h5 className="font-semibold text-gray-900">Uploaded Files:</h5>
                  {uploadedFiles.map((file) => (
                    <div key={file.id} className="flex items-center justify-between bg-gray-50 p-3 rounded-lg">
                      <div className="flex items-center space-x-3">
                        {file.preview ? (
                          <img src={file.preview} alt={file.file.name} className="w-10 h-10 object-cover rounded" />
                        ) : (
                          <div className="w-10 h-10 bg-blue-100 rounded flex items-center justify-center">
                            <FileText className="w-5 h-5 text-blue-600" />
                          </div>
                        )}
                        <div>
                          <p className="font-medium text-gray-900">{file.file.name}</p>
                          <p className="text-sm text-gray-500">{(file.file.size / 1024 / 1024).toFixed(2)} MB</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(file.id)}
                        className="text-red-600 hover:text-red-800 p-1"
                      >
                        ✕
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Progress Bar */}
      <div className="bg-gray-50 px-8 py-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold text-gray-900">Smart Lead Form</h2>
          <span className="text-sm font-semibold text-blue-600">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div
            className="bg-gradient-to-r from-blue-600 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Form Content */}
      <div className="px-8 py-8">
        {/* Validation Errors */}
        {validationErrors.length > 0 && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg">
            <h4 className="text-red-800 font-semibold mb-2">Please fix the following errors:</h4>
            <ul className="text-red-700 text-sm space-y-1">
              {validationErrors.map((error, index) => (
                <li key={index}>• {error}</li>
              ))}
            </ul>
          </div>
        )}

        {renderStep()}
      </div>

      {/* Navigation */}
      <div className="bg-gray-50 px-8 py-6 flex justify-between items-center">
        <button
          onClick={prevStep}
          disabled={currentStep === 1}
          className="flex items-center px-6 py-3 text-gray-600 hover:text-gray-800 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          <ChevronLeft className="w-5 h-5 mr-2" />
          Previous
        </button>

        {currentStep < totalSteps ? (
          <button
            onClick={nextStep}
            className="flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-semibold"
          >
            Next Step
            <ChevronRight className="w-5 h-5 ml-2" />
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={isSubmitting}
            className="flex items-center px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all font-semibold disabled:opacity-50"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                Submitting...
              </>
            ) : (
              <>
                Submit Application
                <ChevronRight className="w-5 h-5 ml-2" />
              </>
            )}
          </button>
        )}
      </div>

      {/* Auto-detected Info Display */}
      <div className="bg-blue-50 px-8 py-4 text-sm text-blue-800">
        <p className="flex items-center">
          <MapPin className="w-4 h-4 mr-2" />
          Detected: {formData.deviceType} • {formData.visitSource} • {formData.location}
        </p>
      </div>
    </div>
  );
};

export default SmartLeadForm;