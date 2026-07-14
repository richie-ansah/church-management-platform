import { PageShell } from "@/components/page-shell";

export default function AdminDashboardPage() {
  return (
    <PageShell
      badge="Admin / Dashboard"
      title="Operational control center"
      description="This dashboard module will aggregate role-aware insights for content operations, member care, ministry delivery, and financial stewardship."
      highlights={[
        "Role-based widgets for pastors, media teams, and finance users.",
        "Workflow queues for drafts, approvals, and scheduled publishing.",
        "Tenant context and feature-flag awareness on every panel.",
        "Audit-log-linked actions for security and accountability.",
      ]}
      nextStep={{ href: "/admin/content", label: "Go to Content Studio" }}
    />
  );
}
