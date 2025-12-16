/*
  # Add Consultation Bookings Table

  1. New Tables
    - `consultation_bookings`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `phone` (text, required)
      - `company` (text, optional)
      - `service` (text, required)
      - `consultation_date` (date, required)
      - `consultation_time` (text, required)
      - `consultant` (text, required)
      - `notes` (text, optional)
      - `status` (enum: scheduled, confirmed, completed, cancelled)
      - `booking_date` (date, required)
      - `booking_time` (text, required)
      - `created_at` (timestamptz, auto)
      - `updated_at` (timestamptz, auto)

  2. Security
    - Enable RLS on `consultation_bookings` table
    - Add policies for admin access and user access to own bookings

  3. Indexes
    - Index on consultation_date for calendar queries
    - Index on status for filtering
    - Index on consultant for assignment queries
*/

-- Create consultation_bookings table
CREATE TABLE IF NOT EXISTS consultation_bookings (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  company text,
  service text NOT NULL,
  consultation_date date NOT NULL,
  consultation_time text NOT NULL,
  consultant text NOT NULL,
  notes text,
  status text NOT NULL DEFAULT 'scheduled' CHECK (status IN ('scheduled', 'confirmed', 'completed', 'cancelled')),
  booking_date date NOT NULL,
  booking_time text NOT NULL,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE consultation_bookings ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admin can manage all bookings"
  ON consultation_bookings
  FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.role = 'admin'
    )
  );

CREATE POLICY "Users can view their own bookings"
  ON consultation_bookings
  FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.email = consultation_bookings.email
    )
  );

CREATE POLICY "Anyone can create bookings"
  ON consultation_bookings
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

-- Create indexes
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_date ON consultation_bookings(consultation_date);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_status ON consultation_bookings(status);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_consultant ON consultation_bookings(consultant);
CREATE INDEX IF NOT EXISTS idx_consultation_bookings_email ON consultation_bookings(email);

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
    WHERE tgname = 'update_consultation_bookings_updated_at'
  ) THEN
    CREATE TRIGGER update_consultation_bookings_updated_at
      BEFORE UPDATE ON consultation_bookings
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;