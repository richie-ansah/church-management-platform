# Architecture Baseline (Phase 1)

## Product Scope
A premium church management platform built as a multi-tenant SaaS-ready system, initially deployed for a single church.

## System Architecture

### Frontend
- Public website and admin UI in Next.js App Router
- Feature-first module boundaries (content, events, sermons, giving, members)
- API client boundary for backend communication

### Backend
- Laravel modular domain services exposed via REST API
- Sanctum-based session/token authentication
- Role/permission authorization middleware for RBAC

### Data Architecture
- PostgreSQL as source of truth
- Tenant-aware schema strategy (single database, tenant discriminator initially)
- Auditable entities with timestamps and actor attribution

### SaaS Readiness
- Tenant context resolution middleware
- Branding, theme, and custom-domain fields on tenant configuration
- Feature flags per tenant for phased rollout

## Security Baseline
- Request validation on all write endpoints
- CSRF and XSS protection by framework defaults and output escaping
- Rate limiting for auth and public submission endpoints
- Secure media upload policy and MIME validation
- Audit logging for administrative actions

## Performance Baseline
- ISR/SSR strategy for public pages where appropriate
- API pagination and selective field responses
- Image optimization and CDN-ready static/media assets
- Caching plan for high-read content endpoints

## Testing Baseline
- Frontend: lint/build now, unit/integration tests in next phase
- Backend: feature and policy tests in Laravel once scaffolded
- Security regression checks integrated in CI

## Initial Module Roadmap
1. Tenant and authentication foundation
2. RBAC and member directory core
3. CMS content blocks and page management
4. Events, sermons, announcements, and media modules
5. Giving, prayer requests, and communication workflows

