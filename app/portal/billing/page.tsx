import { PortalLayout } from '@/components/layouts/PortalLayout';
import { Container } from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function BillingPage() {
  return (
    <PortalLayout>
      <Container>
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-neutral-900 mb-2">
              Billing
            </h1>
            <p className="text-neutral-600">
              Manage your invoices and payment methods
            </p>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Billing & Invoices</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-center py-12">
                <p className="text-neutral-600">
                  Billing integration with Stripe will be available soon.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Container>
    </PortalLayout>
  );
}
