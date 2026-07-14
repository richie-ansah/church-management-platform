# Phase 2 Foundation Blueprint

This document defines the approved implementation baseline for the next engineering phase.

## 1) Feature Scope

Phase 2 focuses on foundation capabilities that unlock all remaining modules:

- Tenant context model and isolation approach
- Identity and role-based authorization baseline
- CMS-ready content domain boundaries
- Public and admin route architecture
- API contract conventions and versioning

## 2) Architecture Decisions

## Decision A: Tenant Isolation (Single DB + Tenant Key)
- Start with a single PostgreSQL database and strict `tenant_id` partitioning on tenant-scoped tables.
- Use middleware to resolve tenant by domain/subdomain and attach tenant context to requests.
- Benefit: simpler operations now, migration path to stronger isolation later.

## Decision B: Modular Laravel Domain Structure
- Organize backend by domain modules (`Auth`, `Tenancy`, `Content`, `Members`, `Events`, `Finance`).
- Keep controllers thin, business rules in services/actions, and authorization in policies.
- Benefit: maintainable growth as SaaS modules expand.

## Decision C: Next.js Feature-First Frontend
- Keep shared design system in reusable UI primitives and map pages to domain modules.
- Centralize route metadata in a route manifest for menu, sitemap, and RBAC-aware navigation.
- Benefit: consistent navigation and easier content governance.

## 3) Database Impact (Target Schema)

Core entities introduced first:

- `tenants` (id, name, slug, domain, theme_config, feature_flags, status)
- `users` (id, tenant_id, name, email, password_hash, last_login_at)
- `roles` (id, tenant_id nullable for global, name, description)
- `permissions` (id, key, description)
- `role_user` (user_id, role_id, tenant_id)
- `permission_role` (permission_id, role_id)
- `audit_logs` (tenant_id, actor_id, action, entity_type, entity_id, payload, ip, user_agent)

Content-ready entities for CMS:

- `pages` (tenant_id, slug, title, status, publish_at, created_by, updated_by)
- `page_revisions` (page_id, version, content_json, created_by)
- `media_assets` (tenant_id, storage_provider, path, mime, size, uploaded_by)

## 4) API Endpoints (Foundation Contract)

Versioned prefix: `/api/v1`

Authentication:
- `POST /auth/login`
- `POST /auth/logout`
- `GET /auth/me`
- `POST /auth/forgot-password`
- `POST /auth/reset-password`

Tenancy/Admin:
- `GET /tenant/context`
- `PATCH /tenant/branding`
- `PATCH /tenant/features`

RBAC:
- `GET /roles`
- `POST /roles`
- `PATCH /roles/{id}`
- `POST /roles/{id}/permissions`

CMS baseline:
- `GET /pages`
- `POST /pages`
- `GET /pages/{id}`
- `PATCH /pages/{id}`
- `POST /pages/{id}/publish`
- `GET /pages/{id}/revisions`

## 5) Frontend Components and App Structure

Public app:
- Hero, services overview, and dynamic content sections from CMS API
- Route modules for about, ministries, events, sermons, and giving

Admin app:
- Dashboard shell with role-aware menu
- Content studio navigation (pages, blocks, media, scheduling)
- Tenant settings panel (branding, domain, features)

Shared:
- API client layer with typed DTOs
- Auth/session context providers
- Navigation generated from route manifest and permissions

## 6) Security Considerations

- Enforce tenant scoping at query and policy layers
- Validate all inputs using Laravel Form Requests
- Apply route-level throttling for auth, prayer requests, and visitor registration
- Store audit trails for privileged actions and content publication
- Enforce strict MIME and size checks on media uploads
- Use secure cookie/session settings and Sanctum protections

## 7) Testing Strategy

Backend:
- Feature tests for auth, tenant scoping, and policy enforcement
- API contract tests for role and page workflows
- Unit tests for domain services and permission resolution

Frontend:
- Lint/build as baseline gate
- Add component tests for navigation and dashboard shell
- Add e2e smoke tests for login and role-based routing

## 8) Trade-offs

- Single-DB tenancy is faster to ship but requires disciplined tenancy guards.
- Route-manifest-driven navigation reduces duplication but needs governance to avoid drift.
- Early RBAC investment adds complexity up front but prevents expensive rewrites.

