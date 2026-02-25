import { PortalLayout } from '@/components/layouts/PortalLayout';
import { Container } from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SecurityPage() {
  return (
    <PortalLayout>
      <Container>
        <div className="max-w-2xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              Security
            </h1>
            <p className="text-neutral-600">
              Manage your password and security settings
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Security Settings</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-neutral-600">
                  Password management and two-factor authentication will be
                  available soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </PortalLayout>
  );
}
