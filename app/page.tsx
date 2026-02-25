import { PublicLayout } from '@/components/layouts/PublicLayout';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  Zap,
  Shield,
  Eye,
  Code,
  Palette,
  Rocket,
  Clock,
} from 'lucide-react';

export default function Home() {
  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description:
        'Built from scratch with clean, scalable code tailored to your needs.',
    },
    {
      icon: Palette,
      title: 'Redesign & Rebrand',
      description:
        'Transform your existing presence into something exceptional.',
    },
    {
      icon: Eye,
      title: 'Client Portals',
      description:
        'Secure, personalized dashboards for your team and clients.',
    },
    {
      icon: Zap,
      title: 'SEO Optimization',
      description:
        'Get found online with strategic, technical SEO implementation.',
    },
  ];

  const process = [
    {
      number: '01',
      title: 'Discovery',
      description:
        'We learn your business, goals, and vision for the project.',
    },
    {
      number: '02',
      title: 'Design',
      description:
        'Custom mockups that reflect your brand and user experience.',
    },
    {
      number: '03',
      title: 'Development',
      description: 'Clean code, regular updates, and preview access.',
    },
    {
      number: '04',
      title: 'Launch',
      description: 'Thorough testing, final approval, and deployment.',
    },
    {
      number: '05',
      title: 'Support',
      description: 'Ongoing maintenance, updates, and optimization.',
    },
  ];

  const benefits = [
    {
      icon: Shield,
      title: 'Custom Code',
      description: 'No templates. Built specifically for your business.',
    },
    {
      icon: Eye,
      title: 'Transparent Process',
      description: 'Track progress in real-time through your client portal.',
    },
    {
      icon: Clock,
      title: 'Clear Timelines',
      description: 'Know exactly what to expect and when.',
    },
    {
      icon: Rocket,
      title: 'Built for Growth',
      description: 'Scalable architecture that grows with you.',
    },
  ];

  return (
    <PublicLayout>
      <section className="relative bg-gradient-to-b from-white to-neutral-50 py-20 md:py-32">
        <Container>
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
              We Build Digital Foundations for Businesses Ready to Grow
            </h1>
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto">
              We design and develop scalable digital platforms that position
              your business for long-term growth, credibility, and measurable
              success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/quote">Start Your Project</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Our Process</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              What We Do
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-all">
                <CardHeader>
                  <service.icon className="h-10 w-10 text-blue-600 mb-4" />
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-neutral-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-neutral-50">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              How It Works
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              A proven process that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative">
            {process.map((step, index) => (
              <div key={index} className="relative">
                <div className="flex flex-col items-center text-center">
                  <div className="h-16 w-16 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-neutral-600">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              We do things differently, and it shows in the results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-blue-100 text-blue-600 mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>
                <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                  {benefit.title}
                </h3>
                <p className="text-neutral-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-gradient-to-br from-blue-600 to-blue-700">
        <Container>
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Exceptional?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and create a roadmap to success
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                asChild
                className="bg-white text-blue-600 hover:bg-neutral-100"
              >
                <Link href="/quote">Get a Quote</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white hover:bg-white/10"
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
