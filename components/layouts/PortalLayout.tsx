'use client';

import Link from 'next/link';
import { Container } from '@/components/shared/Container';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useAuth } from '@/contexts/AuthContext';
import { useRouter, usePathname } from 'next/navigation';
import { User, LogOut, Settings, Shield, Menu, X } from 'lucide-react';
import { useEffect, useState } from 'react';

interface PortalLayoutProps {
  children: React.ReactNode;
}

export function PortalLayout({ children }: PortalLayoutProps) {
  const { user, profile, loading, signOut } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (!loading && !user) {
      router.push('/login');
    }
  }, [user, loading, router]);

  const handleSignOut = async () => {
    try {
      await signOut();
      router.push('/');
    } catch (error) {
      console.error('Error signing out:', error);
    }
  };

  const navigation = [
    { name: 'Portal Home', href: '/portal' },
    { name: 'My Projects', href: '/portal/projects' },
    { name: 'Billing', href: '/portal/billing' },
  ];

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-neutral-50">
        <div className="text-center">
          <div className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-blue-600 border-r-transparent"></div>
          <p className="mt-4 text-neutral-600">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return null;
  }

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <header className="sticky top-0 z-50 bg-white border-b border-neutral-200">
        <Container>
          <nav className="flex items-center justify-between py-4">
            <Link href="/portal" className="flex items-center space-x-2">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-blue-600 to-blue-700 flex items-center justify-center">
                <span className="text-white font-bold text-lg">S</span>
              </div>
              <span className="text-xl font-semibold text-neutral-900">
                Studio Placeholder
              </span>
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-colors ${
                    pathname === item.href
                      ? 'text-blue-600'
                      : 'text-neutral-700 hover:text-neutral-900'
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center space-x-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" size="sm">
                    <User className="h-4 w-4 mr-2" />
                    {profile?.name || 'My Account'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  <DropdownMenuLabel>
                    <div>
                      <p className="font-medium">{profile?.name}</p>
                      <p className="text-xs text-neutral-500">{user.email}</p>
                    </div>
                  </DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem asChild>
                    <Link href="/portal/profile">
                      <User className="h-4 w-4 mr-2" />
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/portal/settings">
                      <Settings className="h-4 w-4 mr-2" />
                      Settings
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <Link href="/portal/security">
                      <Shield className="h-4 w-4 mr-2" />
                      Security
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem onClick={handleSignOut}>
                    <LogOut className="h-4 w-4 mr-2" />
                    Sign Out
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>

            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </nav>

          {mobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-neutral-200">
              <div className="flex flex-col space-y-4">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`text-sm font-medium ${
                      pathname === item.href
                        ? 'text-blue-600'
                        : 'text-neutral-700'
                    }`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t border-neutral-200 space-y-2">
                  <Link
                    href="/portal/profile"
                    className="block text-sm text-neutral-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/portal/settings"
                    className="block text-sm text-neutral-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Settings
                  </Link>
                  <Link
                    href="/portal/security"
                    className="block text-sm text-neutral-700"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Security
                  </Link>
                  <button
                    onClick={handleSignOut}
                    className="block text-sm text-neutral-700 w-full text-left"
                  >
                    Sign Out
                  </button>
                </div>
              </div>
            </div>
          )}
        </Container>
      </header>

      <main className="flex-1 py-8">{children}</main>

      <footer className="bg-white border-t border-neutral-200 py-6">
        <Container>
          <div className="text-center text-sm text-neutral-600">
            <p>
              &copy; {new Date().getFullYear()} Studio Placeholder. All rights
              reserved.
            </p>
          </div>
        </Container>
      </footer>
    </div>
  );
}
