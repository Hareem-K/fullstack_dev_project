import { PublicLayout } from '@/components/layouts/PublicLayout';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  Code,
  ShoppingCart,
  Sparkles,
  Gauge,
  Server,
  LayoutDashboard,
  ArrowRight,
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Custom Web Platforms',
      description:
        'Conversion-focused, performance-driven websites engineered for scalability and long-term growth.',
      engagement: 'Fixed-scope or custom build',
      timeline: '6–12 weeks',
      highlights: [
        'Strategic architecture & UX planning',
        'Fully responsive across devices',
        'Performance-first development',
        'SEO-ready technical structure',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      description:
        'Scalable online stores designed for seamless purchasing experiences and operational efficiency.',
      engagement: 'Custom commerce build',
      timeline: '8–16 weeks',
      highlights: [
        'Secure payment integrations',
        'Inventory & order systems',
        'Optimized checkout flows',
        'Analytics & tracking setup',
      ],
    },
    {
      icon: Sparkles,
      title: 'Brand & UX Systems',
      description:
        'Cohesive visual identity and interface systems that elevate credibility and user trust.',
      engagement: 'Design-focused engagement',
      timeline: '3–6 weeks',
      highlights: [
        'Brand direction & visual identity',
        'UI/UX wireframes & prototypes',
        'Design systems & style guides',
        'Conversion-oriented layouts',
      ],
    },
    {
      icon: Gauge,
      title: 'Performance & SEO Engineering',
      description:
        'Technical optimization that improves load speed, search visibility, and conversion velocity.',
      engagement: 'Optimization sprint',
      timeline: '2–6 weeks',
      highlights: [
        'Technical SEO audits',
        'Code & asset optimization',
        'Core Web Vitals improvements',
        'Lighthouse performance tuning',
      ],
    },
    {
      icon: Server,
      title: 'Ongoing Support & Maintenance',
      description:
        'Structured long-term support to ensure security, performance, and continuous improvement.',
      engagement: 'Monthly partnership',
      timeline: 'Ongoing',
      highlights: [
        'Security updates & monitoring',
        'Backup management',
        'Performance tracking',
        'Priority technical support',
      ],
    },
  ];

  return (
    <PublicLayout>
      {/* Hero */}
      <section className="bg-neutral-950 py-24 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Strategic Digital Solutions
            </h1>
            <p className="text-xl text-neutral-300">
              We design and engineer high-performance web platforms backed by
              structure, transparency, and long-term scalability.
            </p>
          </div>
        </Container>
      </section>

      {/* Philosophy */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">
              Built for Growth, Not Just Launch
            </h2>
            <p className="text-lg text-neutral-600">
              Every project is structured around clarity, performance, and
              measurable outcomes. From technical architecture to post-launch
              optimization, our approach prioritizes long-term value over
              short-term fixes.
            </p>
          </div>
        </Container>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-neutral-50">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="border border-neutral-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                <CardHeader>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 rounded-lg bg-neutral-100">
                      <service.icon className="h-6 w-6 text-neutral-900" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl mb-2">
                        {service.title}
                      </CardTitle>
                      <p className="text-neutral-600">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-sm text-neutral-900 mb-2">
                        Key Focus:
                      </h4>
                      <ul className="space-y-2">
                        {service.highlights.map((item, i) => (
                          <li
                            key={i}
                            className="text-sm text-neutral-600 flex items-start"
                          >
                            <ArrowRight className="h-4 w-4 mr-2 text-neutral-900 flex-shrink-0 mt-0.5" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-xs text-neutral-500 mb-1">
                          Engagement
                        </p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {service.engagement}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500 mb-1">
                          Timeline
                        </p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {service.timeline}
                        </p>
                      </div>
                    </div>

                    <div className="pt-2">
                      <Button asChild className="w-full">
                        <Link href="/quote">Request Project Proposal</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      {/* Client Dashboard Differentiator */}
      <section className="py-24 bg-neutral-950 text-white">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-xl bg-neutral-800">
                <LayoutDashboard className="h-8 w-8" />
              </div>
            </div>

            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Every Client Gets a Private Project Dashboard
            </h2>

            <p className="text-lg text-neutral-300 mb-10">
              Transparency is built into our process. Each client receives a
              secure portal to track progress, preview updates, submit feedback,
              and stay aligned in real time.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
              <div>
                <h4 className="font-semibold mb-2">Live Project Timeline</h4>
                <p className="text-neutral-400 text-sm">
                  Visual progress tracking from strategy to launch.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Structured Feedback</h4>
                <p className="text-neutral-400 text-sm">
                  Submit update requests and revisions directly inside your portal.
                </p>
              </div>

              <div>
                <h4 className="font-semibold mb-2">Preview Access</h4>
                <p className="text-neutral-400 text-sm">
                  Secure links to in-progress builds before public release.
                </p>
              </div>
            </div>

            <div className="mt-12">
              <Button size="lg" asChild>
                <Link href="/quote">Start Your Project</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Not Sure Where to Start?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We’ll help you define scope, priorities, and technical direction
              before any development begins.
            </p>
            <Button size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}