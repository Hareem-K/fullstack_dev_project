import { PublicLayout } from '@/components/layouts/PublicLayout';
import { Container } from '@/components/shared/Container';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Script from "next/script";

export default function QuotePage() {
  return (
    <PublicLayout>

      {/* HERO */}
      <section className="bg-primary py-24 text-white">
        <Container>

          <div className="max-w-3xl mx-auto text-center">

            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Get a Quote
            </h1>

            <p className="text-xl text-white/80">
              Tell us about your project and we'll provide a detailed proposal
              with pricing and timeline.
            </p>

          </div>

        </Container>
      </section>

      {/* FORM */}
      <section className="py-20 bg-background">
        <Container>

          <div className="max-w-3xl mx-auto">

            <Card className="border border-border">

              <CardHeader>

                <CardTitle className="text-2xl text-primary">
                  Project Inquiry
                </CardTitle>

              </CardHeader>

              <CardContent>

                <div className="w-full">

                  <iframe
                    data-tally-src="https://tally.so/embed/NppYPj?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                    loading="lazy"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                    title="Website Discovery & Quote Request"
                    className="w-full"
                  />

                </div>

                <Script
                  src="https://tally.so/widgets/embed.js"
                  strategy="lazyOnload"
                />

              </CardContent>

            </Card>

            {/* EMAIL OPTION */}

            <div className="mt-8 text-center text-sm text-muted-foreground">

              <p>
                Prefer email?{' '}
                <a
                  href="mailto:hello@studioplaceholder.com"
                  className="text-accent hover:underline"
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