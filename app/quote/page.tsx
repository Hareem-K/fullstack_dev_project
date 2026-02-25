import { PublicLayout } from '@/components/layouts/PublicLayout';
import { Container } from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function QuotePage() {
  return (
    <PublicLayout>
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 py-20 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get a Quote
            </h1>
            <p className="text-xl text-neutral-300">
              Tell us about your project and we'll provide a detailed proposal
              with pricing and timeline.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Project Details</CardTitle>
                <p className="text-neutral-600">
                  This form will be replaced with an embedded quote request form.
                </p>
              </CardHeader>
              <CardContent>
                <div className="bg-neutral-50 border-2 border-dashed border-neutral-300 rounded-lg p-12 text-center">
                  <div className="max-w-md mx-auto">
                    <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                      <svg
                        className="h-8 w-8"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                      Quote Form Placeholder
                    </h3>
                    <p className="text-sm text-neutral-600 mb-4">
                      This section is ready for your custom quote request form
                      embed. The form will collect project details, budget, and
                      timeline information.
                    </p>
                    <div className="bg-white border border-neutral-200 rounded-lg p-4 text-left">
                      <p className="text-xs font-mono text-neutral-500">
                        &lt;!-- Your embedded form will appear here --&gt;
                      </p>
                      <p className="text-xs text-neutral-600 mt-2">
                        Recommended form fields:
                      </p>
                      <ul className="text-xs text-neutral-600 mt-2 space-y-1">
                        <li>• Name and email</li>
                        <li>• Company name</li>
                        <li>• Project type</li>
                        <li>• Budget range</li>
                        <li>• Timeline expectations</li>
                        <li>• Project description</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="mt-8 text-center text-sm text-neutral-600">
              <p>
                Prefer email?{' '}
                <a
                  href="mailto:hello@studioplaceholder.com"
                  className="text-blue-600 hover:underline"
                >
                  Send us your project details directly
                </a>
              </p>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
