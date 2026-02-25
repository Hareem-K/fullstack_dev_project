'use client';

import { PortalLayout } from '@/components/layouts/PortalLayout';
import { Container } from '@/components/shared/Container';
import { StatusBadge } from '@/components/shared/StatusBadge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useAuth } from '@/contexts/AuthContext';
import { supabase } from '@/lib/supabase';
import { Project } from '@/types';
import { Calendar, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';

export default function ProjectsPage() {
  const { user } = useAuth();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      fetchProjects();
    }
  }, [user]);

  const fetchProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('client_id', user?.id)
        .order('created_at', { ascending: false });

      if (error) throw error;
      setProjects(data || []);
    } catch (error) {
      console.error('Error fetching projects:', error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <PortalLayout>
        <Container>
          <div className="text-center py-12">
            <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
            <p className="mt-4 text-neutral-600">Loading your projects...</p>
          </div>
        </Container>
      </PortalLayout>
    );
  }

  return (
    <PortalLayout>
      <Container>
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-neutral-900 mb-2">
            My Projects
          </h1>
          <p className="text-neutral-600">
            View and manage all your projects in one place
          </p>
        </div>

        {projects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <Card
                key={project.id}
                className="hover:border-blue-600 transition-all"
              >
                <CardHeader>
                  <div className="flex items-start justify-between mb-2">
                    <CardTitle className="text-xl">{project.name}</CardTitle>
                    <StatusBadge status={project.status} />
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-neutral-600">Progress</span>
                      <span className="font-semibold text-blue-600">
                        {project.progress_percentage}%
                      </span>
                    </div>
                    <div className="w-full bg-neutral-200 rounded-full h-2">
                      <div
                        className="bg-blue-600 h-2 rounded-full transition-all"
                        style={{ width: `${project.progress_percentage}%` }}
                      />
                    </div>

                    <div className="pt-4 space-y-2">
                      <div className="flex items-center text-sm text-neutral-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        Started {format(new Date(project.start_date), 'MMM d, yyyy')}
                      </div>
                      {project.estimated_launch && (
                        <div className="flex items-center text-sm text-neutral-600">
                          <Calendar className="h-4 w-4 mr-2" />
                          Est. Launch{' '}
                          {format(new Date(project.estimated_launch), 'MMM d, yyyy')}
                        </div>
                      )}
                    </div>

                    <Button asChild className="w-full mt-4">
                      <Link href="/portal">
                        View Project
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <Card>
            <CardContent className="py-12 text-center">
              <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                No Projects Yet
              </h2>
              <p className="text-neutral-600 mb-6">
                You don't have any projects yet. Contact us to get started!
              </p>
              <Button asChild>
                <a href="mailto:hello@studioplaceholder.com">Contact Studio</a>
              </Button>
            </CardContent>
          </Card>
        )}
      </Container>
    </PortalLayout>
  );
}
