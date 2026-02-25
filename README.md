# Studio Placeholder - Web Development Studio Platform

A modern, scalable web application for a fullstack web development studio with public marketing pages and a secure client portal.

## Features

### Public Website
- **Home Page**: Hero section, services overview, process timeline, benefits
- **Services Page**: Detailed service cards with pricing and timelines
- **Contact Page**: Contact form with business information
- **Quote Page**: Ready for custom quote form embed

### Authentication
- Secure email/password authentication via Supabase
- Client registration and login
- Protected routes for portal access

### Client Portal
- **Project Timeline**: Visual progress tracking through development stages
- **Project Summary**: Key project details and progress percentage
- **Live Preview**: Access to development site when available
- **Update Requests**: Submit content changes, design revisions, feature requests, and bug fixes
- **Activity Feed**: Real-time updates on project progress
- **My Projects**: View all client projects
- **Profile Management**: Update personal information

## Tech Stack

- **Frontend**: Next.js 13 (App Router) + TypeScript
- **Styling**: TailwindCSS
- **UI Components**: shadcn/ui + custom components
- **Authentication**: Supabase Auth
- **Database**: Supabase (PostgreSQL)
- **Deployment Ready**: Netlify

## Getting Started

### Prerequisites

- Node.js 18+ installed
- A Supabase account and project

### 1. Clone and Install

```bash
npm install
```

### 2. Set Up Supabase

1. Create a new project at [supabase.com](https://supabase.com)
2. The database schema has already been created via migrations
3. Get your project URL and anon key from Settings > API

### 3. Configure Environment Variables

Update `.env.local` with your Supabase credentials:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### 4. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### 5. Build for Production

```bash
npm run build
npm run start
```

## Database Schema

The platform includes four main tables:

- **profiles**: User profiles with name, company, and role
- **projects**: Client projects with status, timeline, and progress
- **update_requests**: Client requests for changes and updates
- **activity_logs**: Project activity timeline

All tables have Row Level Security (RLS) enabled for secure data access.

## Project Structure

```
├── app/                      # Next.js app directory
│   ├── (pages)/             # Public pages
│   │   ├── page.tsx         # Home
│   │   ├── services/        # Services
│   │   ├── contact/         # Contact
│   │   └── quote/           # Quote request
│   ├── login/               # Authentication
│   ├── register/
│   └── portal/              # Client portal
│       ├── page.tsx         # Portal home
│       ├── projects/        # Projects list
│       ├── profile/         # Profile settings
│       ├── settings/
│       ├── security/
│       └── billing/
├── components/
│   ├── layouts/             # Layout components
│   │   ├── PublicLayout.tsx
│   │   └── PortalLayout.tsx
│   ├── shared/              # Shared components
│   │   ├── Container.tsx
│   │   ├── ProgressTimeline.tsx
│   │   └── StatusBadge.tsx
│   └── ui/                  # shadcn/ui components
├── contexts/
│   └── AuthContext.tsx      # Authentication context
├── lib/
│   ├── supabase.ts          # Supabase client
│   └── utils.ts             # Utility functions
└── types/
    └── index.ts             # TypeScript types
```

## Key Pages

### Public Site
- `/` - Home page
- `/services` - Services overview
- `/contact` - Contact form
- `/quote` - Quote request (placeholder for embed)
- `/login` - Client login
- `/register` - Client registration

### Client Portal (Protected)
- `/portal` - Portal dashboard with timeline and project details
- `/portal/projects` - All projects
- `/portal/profile` - Profile settings
- `/portal/settings` - Account settings
- `/portal/security` - Security settings
- `/portal/billing` - Billing (placeholder)

## User Roles

The platform supports three user roles:

- **client**: Standard client access to own projects
- **admin**: Full access to all projects and settings
- **developer**: Access to project management features

## Features Ready for Future Expansion

- Stripe billing integration
- File uploads for update requests
- Admin dashboard for project management
- Email notifications
- Analytics panel
- Multi-project support per client

## Customization

### Branding

Update the placeholder branding:
1. Replace "Studio Placeholder" in layouts
2. Update logo component in navigation
3. Customize color scheme in `tailwind.config.ts`

### Quote Form

Add your quote form embed in `/app/quote/page.tsx` at the designated placeholder section.

## Security

- All database tables use Row Level Security (RLS)
- Clients can only access their own data
- Authentication required for portal access
- Secure password handling via Supabase Auth

## Support

For questions or issues, contact the development team.

## License

Private - All rights reserved
