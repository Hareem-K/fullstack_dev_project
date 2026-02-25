export type UserRole = 'client' | 'admin' | 'developer';

export type TimelineStage =
  | 'discovery'
  | 'design'
  | 'development'
  | 'testing'
  | 'launch'
  | 'post-launch';

export type UpdateRequestType =
  | 'content'
  | 'design'
  | 'feature'
  | 'bug'
  | 'other';

export type UpdateRequestStatus =
  | 'submitted'
  | 'in-progress'
  | 'completed';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  companyName?: string;
  createdAt: Date;
}

export interface Profile {
  id: string;
  name: string;
  company_name?: string;
  role: UserRole;
  created_at: string;
  updated_at: string;
}

export interface Project {
  id: string;
  client_id: string;
  name: string;
  status: TimelineStage;
  start_date: string;
  estimated_launch: string;
  preview_url?: string;
  progress_percentage: number;
  created_at: string;
  updated_at: string;
}

export interface UpdateRequest {
  id: string;
  project_id: string;
  client_id: string;
  type: UpdateRequestType;
  description: string;
  status: UpdateRequestStatus;
  created_at: string;
}

export interface ActivityLog {
  id: string;
  project_id: string;
  message: string;
  created_at: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  idealFor: string[];
  timeline: string;
  startingPrice?: string;
  features: string[];
}
