# API Contract Stubs (Phase 3 Starter)

This document defines the first implementation-ready API contracts aligned with the frontend stub definitions in:

- `/home/runner/work/church-management-platform/church-management-platform/frontend/src/lib/api/contracts.ts`

## Base Conventions

- Prefix: `/api/v1`
- Content type: `application/json`
- Auth: Laravel Sanctum session/token depending on client type
- Error format:

```json
{
  "message": "Validation failed.",
  "errors": {
    "field": ["Reason"]
  }
}
```

## 1) Auth

### POST `/api/v1/auth/login`
Request:
```json
{
  "email": "admin@church.org",
  "password": "********"
}
```
Response:
```json
{
  "user": {
    "id": "usr_123",
    "tenantId": "ten_123",
    "name": "Admin User",
    "email": "admin@church.org",
    "roles": ["Super Admin"]
  }
}
```

### POST `/api/v1/auth/logout`
Response: `204 No Content`

### GET `/api/v1/auth/me`
Response: same `user` shape as login.

## 2) Tenant Context

### GET `/api/v1/tenant/context`
Response:
```json
{
  "id": "ten_123",
  "name": "Grace City Church",
  "slug": "grace-city",
  "domain": "church.example.com",
  "featureFlags": {
    "cms": true,
    "events": true,
    "finance": false
  }
}
```

### PATCH `/api/v1/tenant/branding`
- Updates logo/theme configuration.

### PATCH `/api/v1/tenant/features`
- Updates feature flags with role and policy checks.

## 3) Roles

### GET `/api/v1/roles`
- Returns tenant-scoped roles and permissions.

### POST `/api/v1/roles`
- Creates role definition with optional permission keys.

### POST `/api/v1/roles/{id}/permissions`
Request:
```json
{
  "permissionKeys": ["pages.publish", "members.view"]
}
```

## 4) CMS Pages

### GET `/api/v1/pages`
- Supports pagination, status filter, search, and sort.

### POST `/api/v1/pages`
- Creates draft page with tenant ownership.

### PATCH `/api/v1/pages/{id}`
- Updates page metadata/content draft.

### POST `/api/v1/pages/{id}/publish`
- Publishes page after policy + workflow checks.

### GET `/api/v1/pages/{id}/revisions`
- Returns revision history for preview/rollback workflows.

