import { PageShell } from "@/components/page-shell";

export default function EventsPage() {
  return (
    <PageShell
      badge="Public / Events"
      title="Events, registrations, and engagement reminders"
      description="This module coordinates event publishing, registration, and attendee communication for worship services, conferences, and ministry gatherings."
      highlights={[
        "Event cards with date grouping, location, and registration states.",
        "Future RSVP and attendance capture for ministry reporting.",
        "Public announcements surfaced with scheduling controls.",
        "Timezone and accessibility support for hybrid gatherings.",
      ]}
      nextStep={{ href: "/admin", label: "Open Admin Workspace" }}
    />
  );
}
