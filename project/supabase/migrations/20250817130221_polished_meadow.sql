/*
  # Create Payment Logs Table

  1. New Tables
    - `payment_logs`
      - `id` (uuid, primary key)
      - `customer_name` (text, optional)
      - `customer_email` (text, optional)
      - `customer_phone` (text, optional)
      - `amount` (decimal, required)
      - `currency` (text, default 'INR')
      - `payment_method` (text, required)
      - `upi_id` (text, optional)
      - `transaction_id` (text, optional)
      - `package_name` (text, optional)
      - `service_type` (text, optional)
      - `payment_status` (enum: initiated, pending, completed, failed, refunded)
      - `payment_date` (date, required)
      - `payment_time` (text, required)
      - `notes` (text, optional)
      - `created_at` (timestamptz, auto)
      - `updated_at` (timestamptz, auto)

  2. Security
    - Enable RLS on `payment_logs` table
    - Add policies for admin access only

  3. Indexes
    - Index on payment_status for filtering
    - Index on payment_date for date queries
    - Index on customer_email for customer lookup
*/

-- Create payment_logs table
CREATE TABLE IF NOT EXISTS payment_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  customer_name text,
  customer_email text,
  customer_phone text,
  amount decimal(10,2) NOT NULL,
  currency text DEFAULT 'INR',
  payment_method text NOT NULL,
  upi_id text,
  transaction_id text,
  package_name text,
  service_type text,
  payment_status text NOT NULL DEFAULT 'initiated' CHECK (payment_status IN ('initiated', 'pending', 'completed', 'failed', 'refunded')),
  payment_date date NOT NULL,
  payment_time text NOT NULL,
  notes text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE payment_logs ENABLE ROW LEVEL SECURITY;

-- Create policies
CREATE POLICY "Admin can manage all payment logs"
  ON payment_logs
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
CREATE INDEX IF NOT EXISTS idx_payment_logs_status ON payment_logs(payment_status);
CREATE INDEX IF NOT EXISTS idx_payment_logs_date ON payment_logs(payment_date);
CREATE INDEX IF NOT EXISTS idx_payment_logs_email ON payment_logs(customer_email);
CREATE INDEX IF NOT EXISTS idx_payment_logs_amount ON payment_logs(amount);

-- Create updated_at trigger
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger 
    WHERE tgname = 'update_payment_logs_updated_at'
  ) THEN
    CREATE TRIGGER update_payment_logs_updated_at
      BEFORE UPDATE ON payment_logs
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;