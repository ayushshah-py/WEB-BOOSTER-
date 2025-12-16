/*
  # Create Project Portfolio Table

  1. New Tables
    - `project_portfolio`
      - `id` (uuid, primary key)
      - `title` (text, required)
      - `category` (text, required)
      - `client_name` (text, required)
      - `description` (text, required)
      - `detailed_description` (text, optional)
      - `image_url` (text, optional)
      - `before_metrics` (jsonb, optional)
      - `after_metrics` (jsonb, optional)
      - `team_contributions` (jsonb, optional)
      - `technologies_used` (text[], optional)
      - `project_duration` (text, optional)
      - `investment_amount` (text, optional)
      - `results_summary` (text[], optional)
      - `case_study_url` (text, optional)
      - `is_featured` (boolean, default false)
      - `display_order` (integer, default 0)
      - `status` (enum: draft, published, archived)
      - `created_at` (timestamptz, auto)
      - `updated_at` (timestamptz, auto)

  2. Security
    - Enable RLS on `project_portfolio` table
    - Add policies for public read and admin write

  3. Indexes
    - Index on category for filtering
    - Index on is_featured for featured projects
    - Index on status for published projects
*/

-- Create project_portfolio table
CREATE TABLE IF NOT EXISTS project_portfolio (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  title text NOT NULL,
  category text NOT NULL,
  client_name text NOT NULL,
  description text NOT NULL,
  detailed_description text,
  image_url text,
  before_metrics jsonb,
  after_metrics jsonb,
  team_contributions jsonb,
  technologies_used text[],
  project_duration text,
  investment_amount text,
  results_summary text[],
  case_study_url text,
  is_featured boolean DEFAULT false,
  display_order integer DEFAULT 0,
  status text NOT NULL DEFAULT 'draft' CHECK (status IN ('draft', 'published', 'archived')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE project_portfolio ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Anyone can view published projects"
  ON project_portfolio
  FOR SELECT
  TO anon, authenticated
  USING (status = 'published');

CREATE POLICY "Admin can manage all projects"
  ON project_portfolio
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
CREATE INDEX IF NOT EXISTS idx_portfolio_category ON project_portfolio(category);
CREATE INDEX IF NOT EXISTS idx_portfolio_featured ON project_portfolio(is_featured);
CREATE INDEX IF NOT EXISTS idx_portfolio_status ON project_portfolio(status);
CREATE INDEX IF NOT EXISTS idx_portfolio_order ON project_portfolio(display_order);

-- Create updated_at trigger
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_project_portfolio_updated_at'
  ) THEN
    CREATE TRIGGER update_project_portfolio_updated_at
      BEFORE UPDATE ON project_portfolio
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;