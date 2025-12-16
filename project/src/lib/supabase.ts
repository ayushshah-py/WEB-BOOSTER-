import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://placeholder.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder_key'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Check if Supabase is properly configured
export const isSupabaseConfigured = () => {
  return supabaseUrl !== 'https://placeholder.supabase.co' && 
         supabaseAnonKey !== 'placeholder_key' &&
         supabaseUrl && 
         supabaseAnonKey
}

// Enhanced Database types
export interface ContactInquiry {
  id?: string
  name: string
  email: string
  phone: string
  company?: string
  website?: string
  service: string
  project_details: string
  budget: string
  timeline: string
  target_audience?: string
  current_challenges?: string
  goals?: string
  preferred_contact: string
  files_count: number
  submission_date: string
  submission_time: string
  submission_day: string
  status: 'new' | 'contacted' | 'in_progress' | 'completed' | 'closed'
  source: string
  lead_score?: number
  created_at?: string
  updated_at?: string
}

export interface NewsletterSubscriber {
  id?: string
  email: string
  name?: string
  source: string
  subscription_date: string
  status: 'active' | 'unsubscribed'
  created_at?: string
}

export interface BookingData {
  id?: string
  name: string
  email: string
  phone: string
  company?: string
  service: string
  consultation_date: string
  consultation_time: string
  consultant: string
  notes?: string
  status: 'scheduled' | 'confirmed' | 'completed' | 'cancelled'
  booking_date: string
  booking_time: string
  created_at?: string
}

export interface PaymentLog {
  id?: string
  customer_name?: string
  customer_email?: string
  customer_phone?: string
  amount: number
  currency: string
  payment_method: string
  upi_id?: string
  transaction_id?: string
  package_name?: string
  service_type?: string
  payment_status: 'initiated' | 'pending' | 'completed' | 'failed' | 'refunded'
  payment_date: string
  payment_time: string
  notes?: string
  created_at?: string
  updated_at?: string
}

export interface UserProfile {
  id?: string
  email: string
  full_name?: string
  company?: string
  phone?: string
  role: 'admin' | 'team' | 'client'
  avatar_url?: string
  location?: string
  bio?: string
  website?: string
  linkedin_url?: string
  is_active: boolean
  last_login?: string
  created_at?: string
  updated_at?: string
}

export interface ProjectPortfolio {
  id?: string
  title: string
  category: string
  client_name: string
  description: string
  detailed_description?: string
  image_url?: string
  before_metrics?: any
  after_metrics?: any
  team_contributions?: any
  technologies_used?: string[]
  project_duration?: string
  investment_amount?: string
  results_summary?: string[]
  case_study_url?: string
  is_featured: boolean
  display_order: number
  status: 'draft' | 'published' | 'archived'
  created_at?: string
  updated_at?: string
}

export interface Service {
  id?: string
  name: string
  slug: string
  category: string
  short_description: string
  detailed_description: string
  features: string[]
  pricing_info?: any
  icon_name?: string
  image_url?: string
  is_featured: boolean
  display_order: number
  status: 'active' | 'inactive'
  meta_title?: string
  meta_description?: string
  created_at?: string
  updated_at?: string
}

export interface TeamMember {
  id?: string
  name: string
  role: string
  experience_years: number
  specialization: string
  bio?: string
  email?: string
  phone?: string
  linkedin_url?: string
  linkedin_bio?: string
  avatar_url?: string
  is_senior: boolean
  has_profile_page: boolean
  display_order: number
  is_active: boolean
  created_at?: string
  updated_at?: string
}

export interface WebsiteAnalytics {
  id?: string
  event_type: string
  event_category: string
  event_label?: string
  page_url: string
  user_agent?: string
  ip_address?: string
  referrer?: string
  session_id?: string
  user_id?: string
  device_type?: string
  browser_info?: string
  location_data?: any
  custom_data?: any
  event_date: string
  event_time: string
  created_at?: string
}
// Helper functions
export const saveContactInquiry = async (inquiryData: Omit<ContactInquiry, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .insert([inquiryData])
      .select()
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error saving contact inquiry:', error)
    return { success: false, error }
  }
}

export const saveNewsletterSubscriber = async (subscriberData: Omit<NewsletterSubscriber, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('newsletter_subscribers')
      .insert([subscriberData])
      .select()
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error saving newsletter subscriber:', error)
    return { success: false, error }
  }
}

export const saveConsultationBooking = async (bookingData: Omit<BookingData, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('consultation_bookings')
      .insert([bookingData])
      .select()
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error saving consultation booking:', error)
    return { success: false, error }
  }
}

export const savePaymentLog = async (paymentData: Omit<PaymentLog, 'id' | 'created_at' | 'updated_at'>) => {
  try {
    const { data, error } = await supabase
      .from('payment_logs')
      .insert([paymentData])
      .select()
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error saving payment log:', error)
    return { success: false, error }
  }
}

export const logAnalyticsEvent = async (eventData: Omit<WebsiteAnalytics, 'id' | 'created_at'>) => {
  try {
    const { data, error } = await supabase
      .from('website_analytics')
      .insert([eventData])
      .select()
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error logging analytics event:', error)
    return { success: false, error }
  }
}
export const getContactInquiries = async () => {
  try {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching contact inquiries:', error)
    return { success: false, error }
  }
}

export const getTeamMembers = async () => {
  try {
    const { data, error } = await supabase
      .from('team_members')
      .select('*')
      .eq('is_active', true)
      .order('display_order', { ascending: true })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching team members:', error)
    return { success: false, error }
  }
}

export const getServices = async () => {
  try {
    const { data, error } = await supabase
      .from('services')
      .select('*')
      .eq('status', 'active')
      .order('display_order', { ascending: true })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching services:', error)
    return { success: false, error }
  }
}

export const getProjectPortfolio = async () => {
  try {
    const { data, error } = await supabase
      .from('project_portfolio')
      .select('*')
      .eq('status', 'published')
      .order('display_order', { ascending: true })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching project portfolio:', error)
    return { success: false, error }
  }
}

export const getPaymentLogs = async () => {
  try {
    const { data, error } = await supabase
      .from('payment_logs')
      .select('*')
      .order('created_at', { ascending: false })

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error fetching payment logs:', error)
    return { success: false, error }
  }
}
export const updateInquiryStatus = async (id: string, status: ContactInquiry['status']) => {
  try {
    const { data, error } = await supabase
      .from('contact_inquiries')
      .update({ status, updated_at: new Date().toISOString() })
      .eq('id', id)
      .select()
      .single()

    if (error) throw error
    return { success: true, data }
  } catch (error) {
    console.error('Error updating inquiry status:', error)
    return { success: false, error }
  }
}