# Backend Foundation (Phase 3.1)

This directory now contains production-oriented backend foundation artifacts for tenancy, auth/RBAC, and CMS core data modeling.

## Current Bootstrap Constraint

Direct Laravel 12 scaffolding is still blocked in this environment due GitHub Composer authentication.

Attempted command:

```bash
composer create-project laravel/laravel:^12.0 backend --no-interaction
```

## Delivered Artifacts

- `backend/.env.example` — backend environment contract for Laravel + PostgreSQL + Sanctum + tenancy + storage
- `backend/database/schema/001_phase_3_1_foundation.sql` — PostgreSQL schema baseline for tenancy, RBAC, audit logs, and CMS core
- `backend/database/seeders/permissions_catalog.sql` — baseline permission catalog inserts

## Apply Schema Locally (when DB is available)

```bash
psql "$DATABASE_URL" -f backend/database/schema/001_phase_3_1_foundation.sql
psql "$DATABASE_URL" -f backend/database/seeders/permissions_catalog.sql
```

## Next Step (when credentials/network allow)

```bash
rm -rf backend
composer create-project laravel/laravel:^12.0 backend --no-interaction
```

Then port these schema and seed concepts into Laravel migrations, models, form requests, policies, and feature tests.
