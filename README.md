# Church Management Platform

Production-grade Church Management SaaS foundation with a modern Next.js frontend and Laravel API backend target architecture.

## Current Status

- ✅ Frontend scaffolded with Next.js App Router, TypeScript, Tailwind CSS, and ESLint
- 🚧 Backend scaffold pending in this environment due Composer GitHub authentication limits
- ✅ Initial architecture and module plan documented

## Planned Stack

### Frontend
- Next.js (App Router)
- React + TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion

### Backend
- Laravel 12+ REST API
- Laravel Sanctum authentication
- PostgreSQL

### Storage & Deployment
- S3-compatible or Cloudinary media storage
- Frontend deployment: Vercel
- Backend deployment: VPS (DigitalOcean-ready)

## Repository Structure

- `/frontend` — Next.js application
- `/backend` — Laravel API application (to be scaffolded)
- `/docs` — architecture and engineering documentation

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Backend (when credentials/network allow scaffolding)
```bash
composer create-project laravel/laravel backend
cd backend
php artisan serve
```

## Validation Commands

### Frontend
```bash
cd frontend
npm run lint
npm run build
```

