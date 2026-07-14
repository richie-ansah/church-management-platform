import { adminRoutes, publicRoutes } from "@/config/route-manifest";

function RouteCard({
  title,
  path,
  description,
}: {
  title: string;
  path: string;
  description: string;
}) {
  return (
    <article className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-500">{path}</p>
      <h3 className="mt-2 text-lg font-semibold text-slate-900">{title}</h3>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </article>
  );
}

export default function Home() {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
          Church Management Platform
        </p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
          SaaS-ready digital foundation for church content, operations, and member care.
        </h1>
        <p className="max-w-2xl text-lg text-slate-600">
          Phase 2 establishes the information architecture and module boundaries for a premium,
          secure, and scalable church management experience.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-6 pb-10 md:grid-cols-2">
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Public Experience Modules</h2>
          <div className="grid gap-4">
            {publicRoutes.map((route) => (
              <RouteCard key={route.path} {...route} />
            ))}
          </div>
        </div>

        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-slate-900">Administration Modules</h2>
          <div className="grid gap-4">
            {adminRoutes.map((route) => (
              <RouteCard key={route.path} {...route} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
