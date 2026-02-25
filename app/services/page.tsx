import { PublicLayout } from '@/components/layouts/PublicLayout';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Link from 'next/link';
import {
  Code,
  Palette,
  ShoppingCart,
  Search,
  Sparkles,
  Server,
  Users,
  Gauge,
  ArrowRight,
} from 'lucide-react';

export default function ServicesPage() {
  const services = [
    {
      icon: Code,
      title: 'Custom Website Development',
      description:
        'Hand-crafted websites built with modern technologies and best practices. No templates, just custom code designed for your unique needs.',
      idealFor: ['Businesses seeking unique presence', 'Complex functionality needs', 'Long-term scalability'],
      timeline: '6-12 weeks',
      startingPrice: '$5,000',
      features: [
        'Custom design and development',
        'Responsive across all devices',
        'SEO-optimized structure',
        'Performance optimization',
        'Content management system',
      ],
    },
    {
      icon: Palette,
      title: 'Website Redesign',
      description:
        'Breathe new life into your existing website with modern design, improved user experience, and updated technology.',
      idealFor: ['Outdated websites', 'Poor user experience', 'Low conversion rates'],
      timeline: '4-8 weeks',
      startingPrice: '$3,500',
      features: [
        'Modern UI/UX design',
        'Brand refresh',
        'Improved navigation',
        'Mobile optimization',
        'Speed improvements',
      ],
    },
    {
      icon: ShoppingCart,
      title: 'E-Commerce Development',
      description:
        'Complete online stores with secure payments, inventory management, and seamless checkout experiences.',
      idealFor: ['Product-based businesses', 'Digital product sales', 'Subscription services'],
      timeline: '8-16 weeks',
      startingPrice: '$7,500',
      features: [
        'Secure payment processing',
        'Inventory management',
        'Order tracking',
        'Customer accounts',
        'Analytics integration',
      ],
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description:
        'Strategic search engine optimization to help your business get found online and drive organic traffic.',
      idealFor: ['New websites', 'Low search visibility', 'Local businesses'],
      timeline: '4-6 weeks initial',
      startingPrice: '$2,000',
      features: [
        'Keyword research',
        'On-page optimization',
        'Technical SEO audit',
        'Content strategy',
        'Performance tracking',
      ],
    },
    {
      icon: Sparkles,
      title: 'Branding & UI/UX Design',
      description:
        'Create a cohesive visual identity and user experience that resonates with your target audience.',
      idealFor: ['New businesses', 'Rebranding', 'Product launches'],
      timeline: '3-6 weeks',
      startingPrice: '$2,500',
      features: [
        'Logo design',
        'Brand guidelines',
        'UI/UX wireframes',
        'Style guide',
        'Asset library',
      ],
    },
    {
      icon: Server,
      title: 'Website Maintenance & Hosting',
      description:
        'Keep your website secure, up-to-date, and running smoothly with our comprehensive maintenance packages.',
      idealFor: ['Existing websites', 'Peace of mind', 'Security concerns'],
      timeline: 'Ongoing',
      startingPrice: '$200/month',
      features: [
        'Security updates',
        'Performance monitoring',
        'Backup management',
        'Content updates',
        'Technical support',
      ],
    },
    {
      icon: Users,
      title: 'Client Portal Integration',
      description:
        'Custom client portals for project management, document sharing, and secure communication.',
      idealFor: ['Service businesses', 'Agencies', 'Professional services'],
      timeline: '6-10 weeks',
      startingPrice: '$4,000',
      features: [
        'Secure authentication',
        'Document management',
        'Project tracking',
        'Real-time updates',
        'Custom workflows',
      ],
    },
    {
      icon: Gauge,
      title: 'Performance Optimization',
      description:
        'Speed up your existing website with comprehensive performance audits and optimization.',
      idealFor: ['Slow websites', 'High bounce rates', 'Poor user experience'],
      timeline: '2-4 weeks',
      startingPrice: '$1,500',
      features: [
        'Speed audit',
        'Code optimization',
        'Image optimization',
        'Caching strategy',
        'CDN setup',
      ],
    },
  ];

  return (
    <PublicLayout>
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 py-20 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Our Services
            </h1>
            <p className="text-xl text-neutral-300">
              Comprehensive digital solutions tailored to your business needs.
              From initial concept to ongoing support, we're here to help you
              succeed.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:border-blue-600 transition-all">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4">
                      <div className="p-3 rounded-lg bg-blue-100">
                        <service.icon className="h-6 w-6 text-blue-600" />
                      </div>
                      <div>
                        <CardTitle className="text-2xl mb-2">
                          {service.title}
                        </CardTitle>
                        <p className="text-neutral-600">{service.description}</p>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-sm text-neutral-900 mb-2">
                        Ideal For:
                      </h4>
                      <ul className="space-y-1">
                        {service.idealFor.map((item, i) => (
                          <li key={i} className="text-sm text-neutral-600 flex items-start">
                            <span className="mr-2">•</span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t">
                      <div>
                        <p className="text-xs text-neutral-500 mb-1">Timeline</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {service.timeline}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-neutral-500 mb-1">Starting At</p>
                        <p className="text-sm font-semibold text-neutral-900">
                          {service.startingPrice}
                        </p>
                      </div>
                    </div>

                    <div className="pt-4">
                      <h4 className="font-semibold text-sm text-neutral-900 mb-2">
                        What's Included:
                      </h4>
                      <ul className="grid grid-cols-1 gap-2">
                        {service.features.map((feature, i) => (
                          <li key={i} className="text-sm text-neutral-600 flex items-start">
                            <ArrowRight className="h-4 w-4 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-4">
                      <Button asChild className="w-full">
                        <Link href="/quote">Get a Quote</Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 bg-neutral-50">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
              Not Sure What You Need?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              We'll help you find the right solution for your business. Schedule
              a free consultation to discuss your goals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/quote">Request a Quote</Link>
              </Button>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
