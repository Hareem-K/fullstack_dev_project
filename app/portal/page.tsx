'use client';

import { PortalLayout } from '@/components/layouts/PortalLayout';
import { Container } from '@/components/shared/Container';
import { ProgressTimeline } from '@/components/shared/ProgressTimeline';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Project, ActivityLog, UpdateRequestType } from '@/types';
import { Calendar, User, Clock, ExternalLink, CheckCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function PortalPage() {
  const { user, profile } = useAuth();
  const [project, setProject] = useState<Project | null>(null);
  const [activityLogs, setActivityLogs] = useState<ActivityLog[]>([]);
  const [requestType, setRequestType] = useState<UpdateRequestType>('content');
  const [requestDescription, setRequestDescription] = useState('');
  const [requestSubmitted, setRequestSubmitted] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProjectData();
      fetchActivityLogs();
    }
  }, [user]);

  const fetchProjectData = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('client_id', user?.id)
        .order('created_at', { ascending: false })
        .limit(1)
        .maybeSingle();

      if (error) throw error;
      setProject(data);
    } catch (error) {
      console.error('Error fetching project:', error);
    } finally {
      setLoading(false);
    }
  };

  const fetchActivityLogs = async () => {
    if (!user?.id) return;

    try {
      const { data: projects, error: projectsError } = await supabase
        .from('projects')
        .select('id')
        .eq('client_id', user.id);

      if (projectsError) throw projectsError;

      if (projects && projects.length > 0) {
        const projectIds = projects.map((p) => p.id);

        const { data, error } = await supabase
          .from('activity_logs')
          .select('*')
          .in('project_id', projectIds)
          .order('created_at', { ascending: false })
          .limit(10);

        if (error) throw error;
        setActivityLogs(data || []);
      }
    } catch (error) {
      console.error('Error fetching activity logs:', error);
    }
  };

  const handleRequestSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!project || !user) return;

    try {
      const { error } = await supabase.from('update_requests').insert({
        project_id: project.id,
        client_id: user.id,
        type: requestType,
        description: requestDescription,
        status: 'submitted',
      });

      if (error) throw error;

      setRequestSubmitted(true);
      setRequestDescription('');
      setTimeout(() => setRequestSubmitted(false), 3000);

      const { error: logError } = await supabase.from('activity_logs').insert({
        project_id: project.id,
        message: `New ${requestType} request submitted`,
      });

      if (logError) throw logError;
      fetchActivityLogs();
    } catch (error) {
      console.error('Error submitting request:', error);
    }
  };

  if (loading) {
    return (
      <PortalLayout>
        <Container>
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-4 text-neutral-600">Loading your project...</p>
          </div>
        </Container>
      </PortalLayout>
    );
  }

  if (!project) {
    return (
      <PortalLayout>
        <Container>
          <Card>
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                No Active Project
              </h2>
              <p className="text-neutral-600 mb-6">
                You don't have any active projects yet. Contact us to get started!
              </p>
              <Button asChild>
                <a href="mailto:hello@studioplaceholder.com">Contact Studio</a>
              </Button>
            </CardContent>
          </Card>
        </Container>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            Welcome back, {profile?.name}
          </h1>
          <p className="text-neutral-600">
            Track your project progress and stay updated
          </p>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Project Timeline</CardTitle>
            </CardHeader>
            <CardContent>
              <ProgressTimeline currentStage={project.status} />
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Project Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-2xl font-bold text-neutral-900 mb-2">
                        {project.name}
                      </h3>
                      <StatusBadge status={project.status} />
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4">
                      <div className="flex items-start space-x-3">
                        <Calendar className="h-5 w-5 text-neutral-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-neutral-500">Start Date</p>
                          <p className="font-medium text-neutral-900">
                            {format(new Date(project.start_date), 'MMM d, yyyy')}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Calendar className="h-5 w-5 text-neutral-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-neutral-500">
                            Estimated Launch
                          </p>
                          <p className="font-medium text-neutral-900">
                            {project.estimated_launch
                              ? format(
                                  new Date(project.estimated_launch),
                                  'MMM d, yyyy'
                                )
                              : 'TBD'}
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <User className="h-5 w-5 text-neutral-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-neutral-500">
                            Assigned Developer
                          </p>
                          <p className="font-medium text-neutral-900">
                            Studio Team
                          </p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-3">
                        <Clock className="h-5 w-5 text-neutral-400 mt-0.5" />
                        <div>
                          <p className="text-sm text-neutral-500">Last Updated</p>
                          <p className="font-medium text-neutral-900">
                            {format(
                              new Date(project.updated_at),
                              'MMM d, yyyy'
                            )}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4">
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm font-medium text-neutral-700">
                          Progress
                        </span>
                        <span className="text-sm font-medium text-blue-600">
                          {project.progress_percentage}%
                        </span>
                      </div>
                      <div className="w-full bg-neutral-200 rounded-full h-2">
                        <div
                          className="bg-blue-600 h-2 rounded-full transition-all"
                          style={{ width: `${project.progress_percentage}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Live Preview</CardTitle>
                </CardHeader>
                <CardContent>
                  {project.preview_url ? (
                    <div className="space-y-4">
                      <p className="text-sm text-neutral-600">
                        Your development site is ready to view. Click below to
                        see the latest progress.
                      </p>
                      <Button asChild className="w-full">
                        <a
                          href={project.preview_url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Development Site
                        </a>
                      </Button>
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-neutral-100 text-neutral-400 mb-4">
                        <ExternalLink className="h-8 w-8" />
                      </div>
                      <p className="text-neutral-600">
                        Your development preview will appear here once available.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Request Updates</CardTitle>
                </CardHeader>
                <CardContent>
                  {requestSubmitted ? (
                    <div className="text-center py-8">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                        <CheckCircle className="h-8 w-8" />
                      </div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        Request Submitted!
                      </h3>
                      <p className="text-neutral-600">
                        We'll review your request and get back to you soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleRequestSubmit} className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="requestType">Request Type</Label>
                        <Select
                          value={requestType}
                          onValueChange={(value) =>
                            setRequestType(value as UpdateRequestType)
                          }
                        >
                          <SelectTrigger>
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="content">
                              Content Change
                            </SelectItem>
                            <SelectItem value="design">
                              Design Revision
                            </SelectItem>
                            <SelectItem value="feature">New Feature</SelectItem>
                            <SelectItem value="bug">Bug Fix</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="requestDescription">Description</Label>
                        <Textarea
                          id="requestDescription"
                          value={requestDescription}
                          onChange={(e) =>
                            setRequestDescription(e.target.value)
                          }
                          placeholder="Describe your request in detail..."
                          rows={4}
                          required
                        />
                      </div>

                      <p className="text-sm text-neutral-500">
                        File upload functionality will be added in a future update
                      </p>

                      <Button type="submit" className="w-full">
                        Submit Request
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1">
              <Card>
                <CardHeader>
                  <CardTitle>Activity Feed</CardTitle>
                </CardHeader>
                <CardContent>
                  {activityLogs.length > 0 ? (
                    <div className="space-y-4">
                      {activityLogs.map((log) => (
                        <div
                          key={log.id}
                          className="flex items-start space-x-3 pb-4 border-b border-neutral-100 last:border-0 last:pb-0"
                        >
                          <div className="h-2 w-2 rounded-full bg-blue-600 mt-2 flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <p className="text-sm text-neutral-900">
                              {log.message}
                            </p>
                            <p className="text-xs text-neutral-500 mt-1">
                              {format(
                                new Date(log.created_at),
                                'MMM d, yyyy h:mm a'
                              )}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-8">
                      <p className="text-neutral-600 text-sm">
                        No activity yet. Updates will appear here.
                      </p>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </Container>
    </PortalLayout>
  );
}
