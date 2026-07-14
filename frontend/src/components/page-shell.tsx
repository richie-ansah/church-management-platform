import Link from "next/link";

type PageShellProps = {
  badge: string;
  title: string;
  description: string;
  highlights: string[];
  nextStep: {
    href: string;
    label: string;
  };
};

export function PageShell({ badge, title, description, highlights, nextStep }: PageShellProps) {
  return (
    <main className="flex-1 bg-slate-50">
      <section className="mx-auto flex w-full max-w-5xl flex-col gap-6 px-6 py-16 md:py-24">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">{badge}</p>
        <h1 className="max-w-3xl text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">{title}</h1>
        <p className="max-w-3xl text-lg text-slate-600">{description}</p>

        <div className="grid gap-4 md:grid-cols-2">
          {highlights.map((item) => (
            <article key={item} className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <p className="text-sm text-slate-700">{item}</p>
            </article>
          ))}
        </div>

        <Link
          href={nextStep.href}
          className="inline-flex w-fit items-center rounded-full bg-slate-900 px-5 py-2.5 text-sm font-medium text-slate-50 transition hover:bg-slate-700"
        >
          {nextStep.label}
        </Link>
      </section>
    </main>
  );
}
