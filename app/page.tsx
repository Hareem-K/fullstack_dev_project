"use client";
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

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const container = e.currentTarget;
    const rect = container.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const glow = document.createElement("span");
    glow.className = "cursor-trail";

    glow.style.left = `${x}px`;
    glow.style.top = `${y}px`;

    container.appendChild(glow);

    setTimeout(() => {
      glow.remove();
    }, 1000); // trail lasts 1 second
  };

  return (
    <PublicLayout>

      {/* HERO */}
      <section
        onMouseMove={handleMouseMove}
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-primary text-white cursor-glow"
      >

        {/* animated gradient background */}
        <div className="absolute inset-0 -z-10 animate-gradient bg-gradient-to-br from-[#0F172A] via-[#1E293B] via-[#4A6FA5] to-[#0F172A]" />
        <div className="absolute inset-0 -z-10 opacity-60 animate-gradient bg-gradient-to-tr from-[#1E293B] via-[#4A6FA5] to-[#0F172A]" />

        {/* floating blurred shapes */}
        <div className="absolute -top-32 -left-32 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[120px] animate-float" />
        <div className="absolute -bottom-40 -right-32 w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] animate-float-slow" />

        {/* subtle grid overlay */}
        <div className="absolute inset-0 -z-10 opacity-[0.07] bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] bg-[size:60px_60px]" />

        <Container>
          <div className="relative z-10 max-w-4xl mx-auto text-center animate-fade-up">

            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              We Build Digital Foundations
              <br />
              for Businesses Ready to Grow
            </h1>

            <p className="text-lg md:text-xl text-white/80 mb-10 max-w-2xl mx-auto">
              We design and develop scalable digital platforms that position
              your business for long-term growth, credibility, and measurable success.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-neutral-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link href="/quote">Start Your Project</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary hover:border-white hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link href="/services">Explore Our Process</Link>
              </Button>

            </div>

          </div>
        </Container>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-background">
        <Container>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              What We Do
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive digital solutions designed to elevate your business
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {services.map((service, index) => (
              <Card
                key={index}
                className="border border-border hover:border-accent transition-all"
              >
                <CardHeader>
                  <service.icon className="h-10 w-10 text-accent mb-4" />
                  <CardTitle className="text-xl text-primary">
                    {service.title}
                  </CardTitle>
                </CardHeader>

                <CardContent>
                  <p className="text-muted-foreground">
                    {service.description}
                  </p>
                </CardContent>
              </Card>
            ))}

          </div>
        </Container>
      </section>

      {/* PROCESS */}
      <section className="py-20 bg-muted">
        <Container>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              How It Works
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              A proven process that delivers results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">

            {process.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">

                <div className="h-16 w-16 rounded-full bg-secondary text-white flex items-center justify-center text-xl font-bold mb-4">
                  {step.number}
                </div>

                <h3 className="text-xl font-semibold text-primary mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>

              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* BENEFITS */}
      <section className="py-20 bg-background">
        <Container>

          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Why Choose Us
            </h2>

            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We do things differently, and it shows in the results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">

                <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-muted text-accent mb-4">
                  <benefit.icon className="h-8 w-8" />
                </div>

                <h3 className="text-lg font-semibold text-primary mb-2">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground">
                  {benefit.description}
                </p>

              </div>
            ))}

          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary text-white">
        <Container>

          <div className="max-w-3xl mx-auto text-center">

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Exceptional?
            </h2>

            <p className="text-lg text-white/80 mb-8">
              Let's discuss your project and create a roadmap to success
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">

              <Button
                size="lg"
                asChild
                className="bg-white text-primary hover:bg-neutral-200 hover:-translate-y-0.5 transition-all duration-300"
              >
                <Link href="/quote">Get a Quote</Link>
              </Button>

              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-white text-white bg-transparent hover:bg-white hover:text-primary hover:border-white hover:-translate-y-0.5 transition-all duration-300"
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
