export const apiVersionPrefix = "/api/v1";

export const apiRoutes = {
  auth: {
    login: `${apiVersionPrefix}/auth/login`,
    logout: `${apiVersionPrefix}/auth/logout`,
    me: `${apiVersionPrefix}/auth/me`,
  },
  tenant: {
    context: `${apiVersionPrefix}/tenant/context`,
    branding: `${apiVersionPrefix}/tenant/branding`,
    features: `${apiVersionPrefix}/tenant/features`,
  },
  roles: `${apiVersionPrefix}/roles`,
  pages: `${apiVersionPrefix}/pages`,
} as const;

export type ApiStatus = "draft" | "published" | "archived";

export type TenantContext = {
  id: string;
  name: string;
  slug: string;
  domain: string;
  featureFlags: Record<string, boolean>;
};

export type AuthUser = {
  id: string;
  tenantId: string;
  name: string;
  email: string;
  roles: string[];
};

export type CmsPageSummary = {
  id: string;
  tenantId: string;
  slug: string;
  title: string;
  status: ApiStatus;
  updatedAt: string;
};

export type RoleAssignmentPayload = {
  roleId: string;
  permissionKeys: string[];
};
