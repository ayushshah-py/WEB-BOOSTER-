/*
  # Create Services Table

  1. New Tables
    - `services`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `slug` (text, unique, required)
      - `category` (text, required)
      - `short_description` (text, required)
      - `detailed_description` (text, required)
      - `features` (text[], required)
      - `pricing_info` (jsonb, optional)
      - `icon_name` (text, optional)
      - `image_url` (text, optional)
      - `is_featured` (boolean, default false)
      - `display_order` (integer, default 0)
      - `status` (enum: active, inactive)
      - `meta_title` (text, optional)
      - `meta_description` (text, optional)
      - `created_at` (timestamptz, auto)
      - `updated_at` (timestamptz, auto)

  2. Security
    - Enable RLS on `services` table
    - Add policies for public read and admin write

  3. Indexes
    - Unique index on slug
    - Index on category for filtering
    - Index on is_featured for featured services
*/

-- Create services table
CREATE TABLE IF NOT EXISTS services (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  slug text UNIQUE NOT NULL,
  category text NOT NULL,
  short_description text NOT NULL,
  detailed_description text NOT NULL,
  features text[] NOT NULL,
  pricing_info jsonb,
  icon_name text,
  image_url text,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  status text NOT NULL DEFAULT 'active' CHECK (status IN ('active', 'inactive')),
  meta_title text,
  meta_description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE services ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view active services"
  ON services
  FOR SELECT
  TO anon, authenticated
  USING (status = 'active');

CREATE POLICY "Admin can manage all services"
  ON services
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email IN ('webbooster1902@gmail.com', 'ayushs1904@gmail.com')
    )
  );

-- Create indexes
CREATE UNIQUE INDEX IF NOT EXISTS idx_services_slug ON services(slug);
CREATE INDEX IF NOT EXISTS idx_services_category ON services(category);
CREATE INDEX IF NOT EXISTS idx_services_featured ON services(is_featured);
CREATE INDEX IF NOT EXISTS idx_services_status ON services(status);
CREATE INDEX IF NOT EXISTS idx_services_order ON services(display_order);

-- Create updated_at trigger
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_services_updated_at'
  ) THEN
    CREATE TRIGGER update_services_updated_at
      BEFORE UPDATE ON services
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Insert initial services data
INSERT INTO services (name, slug, category, short_description, detailed_description, features, display_order) VALUES
(
  'Business Development',
  'business-development',
  'Strategy',
  'Strategic planning and growth solutions to scale your business effectively.',
  'Our comprehensive business development approach includes market analysis, partnership development, growth strategies, and performance optimization to drive sustainable business expansion.',
  ARRAY['Market Analysis & Research', 'Growth Strategy Development', 'Partnership & Collaboration Setup', 'Performance Optimization & Monitoring'],
  1
),
(
  'Digital Marketing',
  'digital-marketing',
  'Marketing',
  'Comprehensive digital marketing strategies to boost your online presence.',
  'Our comprehensive digital marketing approach includes Google Ads, Facebook Ads, lead generation funnels, and conversion optimization strategies tailored to your specific business objectives.',
  ARRAY['Google Ads Management', 'Facebook & Social Media Ads', 'Lead Generation Campaigns', 'Conversion Rate Optimization'],
  2
),
(
  'Website Design',
  'website-design',
  'Development',
  'Modern, responsive websites that convert visitors into customers.',
  'Our designs combine aesthetic excellence with user experience optimization, ensuring your site performs beautifully across all devices while driving business growth.',
  ARRAY['Responsive Design', 'UX/UI Optimization', 'Mobile-First Approach', 'Conversion-Focused Design'],
  3
),
(
  'Search Engine Optimization',
  'seo',
  'Marketing',
  'Improve your search rankings and drive organic traffic to your website.',
  'Our experts optimize your website''s technical foundation, content, and authority signals to achieve top rankings on Google and drive qualified traffic to your business.',
  ARRAY['Technical SEO Implementation', 'Content Optimization Strategies', 'Link Building & Authority Development', 'Local SEO for Business Visibility'],
  4
),
(
  'Video Production',
  'video-production',
  'Creative',
  'Professional video content that engages and converts your audience.',
  'From promotional videos to explainer animations, we create high-quality visual content that resonates emotionally and delivers measurable business results.',
  ARRAY['Promotional Video Creation', 'Explainer Video Development', 'Social Media Content Production', 'Animation & Motion Graphics'],
  5
),
(
  'E-Commerce Management',
  'ecommerce',
  'E-Commerce',
  'Complete e-commerce solutions to maximize your online sales.',
  'We optimize your presence on Amazon, Flipkart, Meesho, and other platforms, handling everything from product listings to inventory management for sustained growth.',
  ARRAY['Amazon Store Management', 'Product Listing Optimization', 'Inventory Management Systems', 'Sales Analytics & Reporting'],
  6
),
(
  'Content Marketing',
  'content-marketing',
  'Marketing',
  'Strategic content creation that builds brand authority and drives engagement.',
  'Our content specialists create compelling blogs, email campaigns, website copy, and marketing materials that establish authority and generate leads.',
  ARRAY['Blog Writing & Content Creation', 'Email Marketing Campaigns', 'Website Copywriting', 'Content Strategy Development'],
  7
) ON CONFLICT (slug) DO NOTHING;