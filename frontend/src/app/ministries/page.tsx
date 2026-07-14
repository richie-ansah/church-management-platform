import { PageShell } from "@/components/page-shell";

export default function MinistriesPage() {
  return (
    <PageShell
      badge="Public / Ministries"
      title="Ministry discovery and participation journeys"
      description="This module introduces ministry categories, leadership owners, and sign-up pathways to connect members and visitors to service opportunities."
      highlights={[
        "Ministry cards grouped by department and audience.",
        "Volunteer expression forms integrated with follow-up workflows.",
        "Attendance and engagement handoff to member management.",
        "Accessible and mobile-first call-to-action sections.",
      ]}
      nextStep={{ href: "/events", label: "View Upcoming Events" }}
    />
  );
}
