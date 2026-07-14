import { PageShell } from "@/components/page-shell";

export default function SermonsPage() {
  return (
    <PageShell
      badge="Public / Sermons"
      title="Sermon media, archives, and discipleship resources"
      description="This module will publish sermon audio/video, outlines, scripture references, and livestream replay content from a structured media workflow."
      highlights={[
        "Searchable sermon catalog with speaker, series, and topic filters.",
        "Livestream replay support and future podcast feed readiness.",
        "Media assets linked to secure object storage providers.",
        "SEO-optimized metadata for sermon sharing and indexing.",
      ]}
      nextStep={{ href: "/events", label: "See Event Calendar" }}
    />
  );
}
