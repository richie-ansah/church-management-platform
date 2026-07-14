import { PageShell } from "@/components/page-shell";

export default function AdminFinancePage() {
  return (
    <PageShell
      badge="Admin / Finance"
      title="Giving operations and financial accountability"
      description="Finance surfaces contribution flows, reconciliation checks, and reporting controls needed by stewardship and accounting teams."
      highlights={[
        "Giving summaries by fund, campaign, and payment channel.",
        "Approval workflow hooks for sensitive adjustments.",
        "Export-ready reporting pipelines for audits and compliance.",
        "Permission-isolated operations for finance roles only.",
      ]}
      nextStep={{ href: "/admin/settings", label: "Configure Tenant Settings" }}
    />
  );
}
