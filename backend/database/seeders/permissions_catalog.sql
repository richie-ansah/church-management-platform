BEGIN;

INSERT INTO permissions (key, description)
VALUES
  ('tenant.view', 'View tenant context and branding configuration'),
  ('tenant.update.branding', 'Update tenant branding assets and theme'),
  ('tenant.update.features', 'Update tenant feature flags'),
  ('users.view', 'View users within the active tenant'),
  ('users.manage', 'Create and manage users within tenant boundaries'),
  ('roles.view', 'View role and permission mappings'),
  ('roles.manage', 'Create/update role definitions and assignments'),
  ('pages.view', 'View CMS pages'),
  ('pages.create', 'Create CMS pages'),
  ('pages.update', 'Update CMS pages'),
  ('pages.publish', 'Publish CMS pages'),
  ('pages.revisions.view', 'View CMS page revision history'),
  ('media.view', 'View media assets'),
  ('media.upload', 'Upload media assets'),
  ('media.delete', 'Delete media assets'),
  ('audit.view', 'View tenant audit logs')
ON CONFLICT (key) DO NOTHING;

COMMIT;
