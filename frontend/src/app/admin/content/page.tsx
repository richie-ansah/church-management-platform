import { PageShell } from "@/components/page-shell";

export default function AdminContentPage() {
  return (
    <PageShell
      badge="Admin / Content Studio"
      title="CMS workflow foundation"
      description="Content Studio is the primary publishing workspace for pages, blocks, media assets, scheduling, revisions, and preview workflows."
      highlights={[
        "Draft, review, publish states with role-specific permissions.",
        "Reusable content blocks for homepage and landing pages.",
        "Versioned revisions with rollback support.",
        "Media library integration with secure upload constraints.",
      ]}
      nextStep={{ href: "/admin/members", label: "Manage People" }}
    />
  );
}
