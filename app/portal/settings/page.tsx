import { PortalLayout } from '@/components/layouts/PortalLayout';
import { Container } from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SettingsPage() {
  return (
    <PortalLayout>
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              Settings
            </h1>
            <p className="text-neutral-600">Manage your account preferences</p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Account Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-neutral-600">
                  Additional settings will be available soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </PortalLayout>
  );
}
