/*
  # Create Contact Inquiries Table

  1. New Tables
    - `contact_inquiries`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `company` (text, optional)
      - `website` (text, optional)
      - `service` (text, required)
      - `project_details` (text, required)
      - `budget` (text, required)
      - `timeline` (text, required)
      - `target_audience` (text, optional)
      - `current_challenges` (text, optional)
      - `goals` (text, optional)
      - `preferred_contact` (text, required)
      - `files_count` (integer, default 0)
      - `submission_date` (date, required)
      - `submission_time` (text, required)
      - `submission_day` (text, required)
      - `status` (enum: new, contacted, in_progress, completed, closed)
      - `source` (text, required)
      - `lead_score` (integer, optional)
      - `created_at` (timestamptz, auto)
      - `updated_at` (timestamptz, auto)

  2. Security
    - Enable RLS on `contact_inquiries` table
    - Add policies for admin access and public insert

  3. Indexes
    - Index on status for filtering
    - Index on submission_date for date queries
    - Index on lead_score for prioritization
*/

-- Create contact_inquiries table
CREATE TABLE IF NOT EXISTS contact_inquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  website text,
  service text NOT NULL,
  project_details text NOT NULL,
  budget text NOT NULL,
  timeline text NOT NULL,
  target_audience text,
  current_challenges text,
  goals text,
  preferred_contact text NOT NULL DEFAULT 'email',
  files_count integer DEFAULT 0,
  submission_date date NOT NULL,
  submission_time text NOT NULL,
  submission_day text NOT NULL,
  status text NOT NULL DEFAULT 'new' CHECK (status IN ('new', 'contacted', 'in_progress', 'completed', 'closed')),
  source text NOT NULL,
  lead_score integer,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contact_inquiries ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admin can manage all inquiries"
  ON contact_inquiries
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM auth.users 
      WHERE auth.users.id = auth.uid() 
      AND auth.users.email IN ('webbooster1902@gmail.com', 'ayushs1904@gmail.com')
    )
  );

CREATE POLICY "Anyone can create inquiries"
  ON contact_inquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_status ON contact_inquiries(status);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_date ON contact_inquiries(submission_date);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_score ON contact_inquiries(lead_score);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_email ON contact_inquiries(email);
CREATE INDEX IF NOT EXISTS idx_contact_inquiries_source ON contact_inquiries(source);

-- Create updated_at trigger
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_contact_inquiries_updated_at'
  ) THEN
    CREATE TRIGGER update_contact_inquiries_updated_at
      BEFORE UPDATE ON contact_inquiries
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;