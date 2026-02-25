'use client';

import { PublicLayout } from '@/components/layouts/PublicLayout';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useState } from 'react';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setFormData({ name: '', email: '', company: '', message: '' });
      setSubmitted(false);
    }, 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <PublicLayout>
      <section className="bg-gradient-to-b from-neutral-900 to-neutral-800 py-20 text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Let's Start a Conversation
            </h1>
            <p className="text-xl text-neutral-300">
              Ready to discuss your project? We'd love to hear from you.
            </p>
          </div>
        </Container>
      </section>

      <section className="py-20 bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a message</CardTitle>
                  <p className="text-neutral-600">
                    Fill out the form below and we'll get back to you within 24
                    hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-12 text-center">
                      <div className="inline-flex items-center justify-center h-16 w-16 rounded-full bg-green-100 text-green-600 mb-4">
                        <Mail className="h-8 w-8" />
                      </div>
                      <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                        Message Sent!
                      </h3>
                      <p className="text-neutral-600">
                        Thank you for reaching out. We'll be in touch soon.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="John Doe"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email *</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="john@company.com"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="company">Company Name</Label>
                        <Input
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder="Your Company"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Message *</Label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          placeholder="Tell us about your project..."
                          rows={6}
                          required
                        />
                      </div>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Email</p>
                      <a
                        href="mailto:hello@studioplaceholder.com"
                        className="text-sm text-neutral-600 hover:text-blue-600"
                      >
                        hello@studioplaceholder.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Phone</p>
                      <a
                        href="tel:+15555551234"
                        className="text-sm text-neutral-600 hover:text-blue-600"
                      >
                        (555) 555-1234
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Location</p>
                      <p className="text-sm text-neutral-600">
                        Remote Worldwide
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-600 mt-0.5" />
                    <div>
                      <p className="font-medium text-neutral-900">Hours</p>
                      <p className="text-sm text-neutral-600">
                        Mon-Fri: 9am - 6pm EST
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-600 text-white border-blue-600">
                <CardHeader>
                  <CardTitle className="text-white">Prefer to talk?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-blue-100 mb-4">
                    Schedule a free 30-minute consultation to discuss your
                    project in detail.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-blue-600 hover:bg-neutral-100"
                  >
                    Schedule a Call
                  </Button>
                  <p className="text-xs text-blue-100 mt-3 text-center">
                    Calendly integration placeholder
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </PublicLayout>
  );
}
