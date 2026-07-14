export default function Home() {
  return (
    <section>
      <div className="grid gap-6 md:grid-cols-2 items-center">
        <div>
          <h1 className="text-4xl font-bold text-neutral-900">
            Welcome to SaaSKit
          </h1>
          <p className="mt-4 text-neutral-700">
            A clean, production-ready Next.js foundation using the App Router,
            TypeScript and Tailwind CSS. Use this as the starting point for your
            SaaS application.
          </p>
        </div>
        <div className="placeholder-card">
          <h3 className="text-xl font-semibold">Quick Start</h3>
          <ul className="mt-3 list-disc list-inside text-neutral-700">
            <li>Responsive layout</li>
            <li>Server components by default</li>
            <li>Client components only for interactive UI</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
