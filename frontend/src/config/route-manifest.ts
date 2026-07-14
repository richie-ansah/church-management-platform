export type RouteManifestItem = {
  title: string;
  path: string;
  description: string;
};

export const publicRoutes: RouteManifestItem[] = [
  {
    title: "Home",
    path: "/",
    description: "Premium landing page with core ministry highlights.",
  },
  {
    title: "About",
    path: "/about",
    description: "Church story, mission, and leadership overview.",
  },
  {
    title: "Ministries",
    path: "/ministries",
    description: "Explore ministry departments and service opportunities.",
  },
  {
    title: "Sermons",
    path: "/sermons",
    description: "Browse sermon recordings, notes, and livestream archives.",
  },
  {
    title: "Events",
    path: "/events",
    description: "Upcoming church events with registrations and reminders.",
  },
];

export const adminRoutes: RouteManifestItem[] = [
  {
    title: "Admin Dashboard",
    path: "/admin",
    description: "Role-aware overview of church operations and content tasks.",
  },
  {
    title: "Content Studio",
    path: "/admin/content",
    description: "Page builder, media assets, and publishing workflow.",
  },
  {
    title: "People",
    path: "/admin/members",
    description: "Member records, attendance, and ministry assignment management.",
  },
  {
    title: "Finance",
    path: "/admin/finance",
    description: "Giving insights, reconciliation, and finance approvals.",
  },
  {
    title: "Settings",
    path: "/admin/settings",
    description: "Tenant branding, domain setup, and feature module controls.",
  },
];
