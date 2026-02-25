/*
  # Studio Platform Database Schema
  
  1. New Tables
    - `profiles`
      - `id` (uuid, references auth.users)
      - `name` (text)
      - `company_name` (text, nullable)
      - `role` (text, default 'client')
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `projects`
      - `id` (uuid, primary key)
      - `client_id` (uuid, references profiles)
      - `name` (text)
      - `status` (text)
      - `start_date` (date)
      - `estimated_launch` (date)
      - `preview_url` (text, nullable)
      - `progress_percentage` (integer)
      - `created_at` (timestamptz)
      - `updated_at` (timestamptz)
    
    - `update_requests`
      - `id` (uuid, primary key)
      - `project_id` (uuid, references projects)
      - `client_id` (uuid, references profiles)
      - `type` (text)
      - `description` (text)
      - `status` (text, default 'submitted')
      - `created_at` (timestamptz)
    
    - `activity_logs`
      - `id` (uuid, primary key)
      - `project_id` (uuid, references projects)
      - `message` (text)
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Clients can only see their own data
    - Admins can see all data
*/

-- Create profiles table
CREATE TABLE IF NOT EXISTS profiles (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  name text NOT NULL,
  company_name text,
  role text NOT NULL DEFAULT 'client' CHECK (role IN ('client', 'admin', 'developer')),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view own profile"
  ON profiles FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update own profile"
  ON profiles FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert own profile"
  ON profiles FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create projects table
CREATE TABLE IF NOT EXISTS projects (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  client_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  name text NOT NULL,
  status text NOT NULL DEFAULT 'discovery' CHECK (status IN ('discovery', 'design', 'development', 'testing', 'launch', 'post-launch')),
  start_date date NOT NULL DEFAULT CURRENT_DATE,
  estimated_launch date,
  preview_url text,
  progress_percentage integer DEFAULT 0 CHECK (progress_percentage >= 0 AND progress_percentage <= 100),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

ALTER TABLE projects ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clients can view own projects"
  ON projects FOR SELECT
  TO authenticated
  USING (
    client_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'developer')
    )
  );

CREATE POLICY "Admins can manage all projects"
  ON projects FOR ALL
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role = 'admin'
    )
  );

-- Create update_requests table
CREATE TABLE IF NOT EXISTS update_requests (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  client_id uuid NOT NULL REFERENCES profiles(id) ON DELETE CASCADE,
  type text NOT NULL CHECK (type IN ('content', 'design', 'feature', 'bug', 'other')),
  description text NOT NULL,
  status text NOT NULL DEFAULT 'submitted' CHECK (status IN ('submitted', 'in-progress', 'completed')),
  created_at timestamptz DEFAULT now()
);

ALTER TABLE update_requests ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clients can view own update requests"
  ON update_requests FOR SELECT
  TO authenticated
  USING (
    client_id = auth.uid() OR 
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'developer')
    )
  );

CREATE POLICY "Clients can create update requests"
  ON update_requests FOR INSERT
  TO authenticated
  WITH CHECK (client_id = auth.uid());

CREATE POLICY "Admins can update request status"
  ON update_requests FOR UPDATE
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'developer')
    )
  );

-- Create activity_logs table
CREATE TABLE IF NOT EXISTS activity_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  project_id uuid NOT NULL REFERENCES projects(id) ON DELETE CASCADE,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE activity_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Clients can view activity logs for their projects"
  ON activity_logs FOR SELECT
  TO authenticated
  USING (
    EXISTS (
      SELECT 1 FROM projects 
      WHERE projects.id = activity_logs.project_id 
      AND (projects.client_id = auth.uid() OR 
           EXISTS (SELECT 1 FROM profiles WHERE id = auth.uid() AND role IN ('admin', 'developer')))
    )
  );

CREATE POLICY "Admins can create activity logs"
  ON activity_logs FOR INSERT
  TO authenticated
  WITH CHECK (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND role IN ('admin', 'developer')
    )
  );

-- Create function to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_profiles_updated_at'
  ) THEN
    CREATE TRIGGER update_profiles_updated_at
      BEFORE UPDATE ON profiles
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;

DO $$
BEGIN
  IF NOT EXISTS (
    SELECT 1 FROM pg_trigger WHERE tgname = 'update_projects_updated_at'
  ) THEN
    CREATE TRIGGER update_projects_updated_at
      BEFORE UPDATE ON projects
      FOR EACH ROW
      EXECUTE FUNCTION update_updated_at_column();
  END IF;
END $$;