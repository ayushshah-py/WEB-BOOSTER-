/*
  # Create Analytics Table

  1. New Tables
    - `website_analytics`
      - `id` (uuid, primary key)
      - `event_type` (text, required)
      - `event_category` (text, required)
      - `event_label` (text, optional)
      - `page_url` (text, required)
      - `user_agent` (text, optional)
      - `ip_address` (text, optional)
      - `referrer` (text, optional)
      - `session_id` (text, optional)
      - `user_id` (text, optional)
      - `device_type` (text, optional)
      - `browser_info` (text, optional)
      - `location_data` (jsonb, optional)
      - `custom_data` (jsonb, optional)
      - `event_date` (date, required)
      - `event_time` (text, required)
      - `created_at` (timestamptz, auto)

  2. Security
    - Enable RLS on `website_analytics` table
    - Add policies for admin access and public insert

  3. Indexes
    - Index on event_type for filtering
    - Index on event_date for date queries
    - Index on page_url for page analytics
*/

-- Create website_analytics table
CREATE TABLE IF NOT EXISTS website_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  event_type text NOT NULL,
  event_category text NOT NULL,
  event_label text,
  page_url text NOT NULL,
  user_agent text,
  ip_address text,
  referrer text,
  session_id text,
  user_id text,
  device_type text,
  browser_info text,
  location_data jsonb,
  custom_data jsonb,
  event_date date NOT NULL,
  event_time text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE website_analytics ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admin can view all analytics"
  ON website_analytics
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email IN ('webbooster1902@gmail.com', 'ayushs1904@gmail.com')
    )
  );

CREATE POLICY "Anyone can log analytics events"
  ON website_analytics
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_analytics_event_type ON website_analytics(event_type);
CREATE INDEX IF NOT EXISTS idx_analytics_date ON website_analytics(event_date);
CREATE INDEX IF NOT EXISTS idx_analytics_page_url ON website_analytics(page_url);
CREATE INDEX IF NOT EXISTS idx_analytics_category ON website_analytics(event_category);
CREATE INDEX IF NOT EXISTS idx_analytics_session ON website_analytics(session_id);