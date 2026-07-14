import { PageShell } from "@/components/page-shell";

export default function AdminMembersPage() {
  return (
    <PageShell
      badge="Admin / People"
      title="Member records and pastoral care management"
      description="The people module governs member profiles, attendance, small groups, ministry assignments, and follow-up journeys."
      highlights={[
        "Tenant-scoped member profiles with lifecycle tracking.",
        "Attendance and engagement insights by service and ministry.",
        "Pastoral care notes with privacy-aware access controls.",
        "Import/export utilities with audit coverage.",
      ]}
      nextStep={{ href: "/admin/finance", label: "Open Finance Workspace" }}
    />
  );
}
