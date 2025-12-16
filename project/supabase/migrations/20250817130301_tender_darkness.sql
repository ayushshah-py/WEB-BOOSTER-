/*
  # Create Team Members Table

  1. New Tables
    - `team_members`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `role` (text, required)
      - `experience_years` (integer, required)
      - `specialization` (text, required)
      - `bio` (text, optional)
      - `email` (text, optional)
      - `phone` (text, optional)
      - `linkedin_url` (text, optional)
      - `linkedin_bio` (text, optional)
      - `avatar_url` (text, optional)
      - `is_senior` (boolean, default false)
      - `has_profile_page` (boolean, default false)
      - `display_order` (integer, default 0)
      - `is_active` (boolean, default true)
      - `created_at` (timestamptz, auto)
      - `updated_at` (timestamptz, auto)

  2. Security
    - Enable RLS on `team_members` table
    - Add policies for public read and admin write

  3. Indexes
    - Index on is_active for filtering
    - Index on display_order for sorting
    - Index on is_senior for highlighting
*/

-- Create team_members table
CREATE TABLE IF NOT EXISTS team_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  role text NOT NULL,
  experience_years integer NOT NULL,
  specialization text NOT NULL,
  bio text,
  email text,
  phone text,
  linkedin_url text,
  linkedin_bio text,
  avatar_url text,
  is_senior boolean DEFAULT false,
  has_profile_page boolean DEFAULT false,
  display_order integer DEFAULT 0,
  is_active boolean DEFAULT true,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view active team members"
  ON team_members
  FOR SELECT
  TO anon, authenticated
  USING (is_active = true);

CREATE POLICY "Admin can manage all team members"
  ON team_members
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
CREATE INDEX IF NOT EXISTS idx_team_members_active ON team_members(is_active);
CREATE INDEX IF NOT EXISTS idx_team_members_order ON team_members(display_order);
CREATE INDEX IF NOT EXISTS idx_team_members_senior ON team_members(is_senior);
CREATE INDEX IF NOT EXISTS idx_team_members_email ON team_members(email);

-- Create updated_at trigger
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_team_members_updated_at'
  ) THEN
    CREATE TRIGGER update_team_members_updated_at
      BEFORE UPDATE ON team_members
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

-- Insert initial team data
INSERT INTO team_members (name, role, experience_years, specialization, bio, email, phone, linkedin_url, is_senior, display_order) VALUES
(
  'Shivam Jaiswal',
  'Founder & CEO',
  5,
  'Digital Strategy & Business Development',
  'Leading Web Booster with extensive experience in digital marketing strategy and business development. Shivam drives the company''s vision and ensures client success through innovative marketing solutions.',
  'webbooster1902@gmail.com',
  '+91 9974311903',
  '#',
  true,
  1
),
(
  'Drushti Tailor',
  'Chief Technology Officer (CTO) & Web Architect',
  3,
  'Web Architecture & Technology Strategy',
  'The tech brain of Web Booster, Drushti oversees all things tech – from website performance to backend strategy. Her focus is on creating fast, secure, and user-friendly websites that convert.',
  null,
  null,
  null,
  true,
  2
),
(
  'Janvi Bhosle',
  'Managing Director & SEO Specialist',
  4,
  'SEO & Operations Management',
  'Janvi brings both leadership and deep SEO expertise to the team. She ensures our operations run smoothly while helping businesses rank higher and get discovered online through expert search optimization.',
  null,
  null,
  null,
  true,
  3
),
(
  'Ayush Shah',
  'Lead Developer – Web & Software Solutions',
  3,
  'Web & Software Development',
  'Code wizard specializing in web and software development. Ayush brings technical expertise and innovative problem-solving skills to create digital solutions that drive business growth.',
  'ayushs1904@gmail.com',
  null,
  'https://www.linkedin.com/in/ayush-shah-937937265?originalSubdomain=in',
  true,
  4
),
(
  'Nitya Padaria',
  'Creative Head – Media & Visual Content',
  2,
  'Visual Content & Creative Design',
  'The creative soul of the team, Nitya handles visual content like videos, posters, social media creatives, and branding cards. Her sharp eye for design makes your brand stand out with high-quality visuals.',
  null,
  null,
  null,
  false,
  5
) ON CONFLICT (id) DO NOTHING;