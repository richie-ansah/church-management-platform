import { PageShell } from "@/components/page-shell";

export default function AdminSettingsPage() {
  return (
    <PageShell
      badge="Admin / Settings"
      title="Tenant branding, domain, and feature controls"
      description="Settings manages tenant-level identity, domain mapping, localization preferences, and controlled rollout of product modules."
      highlights={[
        "Brand palette, logo, and typography settings per tenant.",
        "Custom domain and DNS verification workflow.",
        "Feature toggle control for staged module activation.",
        "Security controls with MFA-ready architecture touchpoints.",
      ]}
      nextStep={{ href: "/", label: "Return to Home" }}
    />
  );
}
