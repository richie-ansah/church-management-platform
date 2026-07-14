# Church Management Platform

Production-grade Church Management SaaS foundation with a modern Next.js frontend and Laravel API backend target architecture.

## Current Status

- ✅ Frontend scaffolded with Next.js App Router, TypeScript, Tailwind CSS, and ESLint
- ✅ Phase 1 architecture baseline documented
- ✅ Phase 2 technical blueprint documented
- ✅ Phase 3.1 backend foundation artifacts delivered (env contract + tenancy/RBAC/CMS schema + permission seed catalog)
- 🚧 Laravel runtime scaffold still blocked in this environment by Composer GitHub authentication

## Documentation

- `/docs/architecture.md` — Phase 1 architecture baseline
- `/docs/phase-2-foundation.md` — approved Phase 2 blueprint (tenancy, RBAC, API, DB impact)
- `/docs/api-contract-stubs.md` — API request/response contract starters
- `/docs/tenancy-rbac-integration.md` — tenancy isolation and RBAC enforcement artifacts
- `/docs/phase-3-1-foundation-implementation.md` — implemented Phase 3.1 backend foundation details

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
- `/backend` — backend bootstrap status and target location for Laravel API
- `/docs` — architecture and engineering documentation

## Local Development

### Frontend
```bash
cd frontend
npm install
npm run dev
```

### Frontend Validation
```bash
cd frontend
npm run lint
npm run build
```

### Backend (when credentials/network allow scaffolding)
```bash
rm -rf backend
composer create-project laravel/laravel:^12.0 backend --no-interaction
cd backend
php artisan serve
```
