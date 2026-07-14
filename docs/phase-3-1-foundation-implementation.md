# Phase 3.1 Implementation: Backend Bootstrap + Tenancy/Auth/RBAC Data Foundation

## Scope Implemented

This phase delivers concrete backend foundation artifacts that are directly portable into Laravel 12 once Composer access is available:

1. Backend environment contract
2. PostgreSQL tenancy/auth/RBAC/CMS schema baseline
3. Baseline permission catalog for RBAC bootstrapping

## Architecture Decisions Applied

### 1) Tenancy Model
- Single PostgreSQL database with strict `tenant_id` partitioning.
- Tenant isolation enforced by schema design (foreign keys + tenant indexes) and intended policy/middleware layering in Laravel.

### 2) RBAC Model
- Roles are tenant-scoped by default (`roles.tenant_id`), with support for global roles (`tenant_id NULL`) via partial unique index.
- Permissions are global capability keys; roles receive capabilities through `permission_role`.
- User-role assignments are tenant-bound through `role_user(tenant_id, role_id, user_id)`.

### 3) CMS Foundation Model
- `pages` and `page_revisions` provide draft/publish/versioning baseline.
- `media_assets` abstracts local/S3/Cloudinary providers for future storage strategy.

### 4) Auditability Model
- `audit_logs` captures actor, action, target entity, request metadata, and payload snapshots.
- Indexed for tenant-first forensic and compliance queries.

## Database Impact

Added relational baseline:
- `tenants`
- `users`
- `roles`
- `permissions`
- `role_user`
- `permission_role`
- `audit_logs`
- `pages`
- `page_revisions`
- `media_assets`

Key constraints:
- Tenant/domain/slug uniqueness
- Tenant-scoped user email uniqueness
- CMS page slug uniqueness per tenant
- Enumerated status checks for tenant/page lifecycle
- Foreign keys with fail-closed deletes/ownership chains

## API Foundation Alignment

The data design maps directly to existing API contracts in `/docs/api-contract-stubs.md`:
- `/api/v1/auth/*` uses `users` + role joins
- `/api/v1/tenant/context` uses `tenants`
- `/api/v1/roles*` uses `roles`, `permissions`, `permission_role`, `role_user`
- `/api/v1/pages*` uses `pages` + `page_revisions`

## Frontend Component Impact

No visual/page scaffolding changes were required in this phase.
Frontend remains route-manifest + PageShell based while backend moves from contract stubs to live endpoints.

## Security Considerations Applied

- Tenant ownership enforced at schema level with required `tenant_id` FKs on tenant-scoped entities.
- Status checks prevent invalid lifecycle states.
- Audit table supports privileged-action traceability.
- Environment contract includes configurable rate-limiting and Sanctum/CORS controls.

## Testing Strategy for Next Step

Once Laravel is scaffolded:
1. Migration tests to verify schema integrity and indexes
2. Tenant isolation feature tests (cross-tenant read/write denial)
3. RBAC matrix tests for role/permission checks
4. Auth + session/security tests (login/logout/me/password flows)
5. Audit-log assertion tests for privileged write operations

## Known Blocker

Laravel bootstrap is still blocked by Composer GitHub authentication in this execution environment.
Schema and seed artifacts are intentionally framework-agnostic so implementation can proceed immediately once bootstrap is available.
