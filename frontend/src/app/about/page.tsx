import { PageShell } from "@/components/page-shell";

export default function AboutPage() {
  return (
    <PageShell
      badge="Public / About"
      title="Who we are and what we are building"
      description="This module will host church story, vision, mission, leadership profile cards, and trust-building content managed from the CMS workflow."
      highlights={[
        "Mission and vision blocks powered by reusable content structures.",
        "Leadership directory with role labels and social/contact metadata.",
        "SEO-ready metadata and schema support for discoverability.",
        "Draft/preview support before content publication.",
      ]}
      nextStep={{ href: "/ministries", label: "Explore Ministries" }}
    />
  );
}
