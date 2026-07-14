# Tenancy + RBAC Integration Artifacts

This artifact defines implementation guards required before expanding module features.

## Request Lifecycle (Target)

1. Resolve tenant context from host/domain.
2. Bind `tenant_id` into request-scoped context.
3. Authenticate user (Sanctum).
4. Enforce role + permission policy.
5. Apply tenant filter to all data access.
6. Write audit log for privileged actions.

## Tenant Resolution Rules

- Match request host against tenant domain table.
- Reject unknown or inactive tenants with `404` or `403` policy outcome.
- Support future custom-domain verification workflow.

## RBAC Baseline Matrix

- Super Admin: full tenant control
- Pastor: content publish + member oversight
- Secretary: member/admin operations without financial privileges
- Media Team: sermons/media/content operations
- Finance: giving/reporting and reconciliation actions
- Prayer Team: prayer request access with least privilege
- Content Editor: drafts and editorial workflow
- Ministry Leaders: scoped module access by ministry assignment
- Members: self-service and limited portal actions

## Data Guardrails

- Every tenant-scoped table includes `tenant_id` and index strategy.
- Policies validate both permission and tenant ownership.
- Query builders apply tenant scope globally where possible.
- Cross-tenant writes/reads must fail closed.

## Audit Log Requirements

Capture at minimum:
- `tenant_id`
- `actor_id`
- `action`
- `entity_type`
- `entity_id`
- `ip`
- `user_agent`
- `payload_diff` (when applicable)

## Security Controls

- Enforce throttling on auth and public form endpoints.
- Validate all writes with typed request validators.
- Restrict file uploads by MIME and size policy.
- Keep privileged routes behind explicit permission middleware.

## Testing Requirements Before Production

- Tenant-isolation feature tests for each major module endpoint.
- Authorization tests for every role matrix edge.
- Negative tests for cross-tenant access attempts.
- Audit-log assertion tests on privileged state changes.

