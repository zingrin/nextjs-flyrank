export default function Dashboard() {
  return (
    <section>
      <h1 className="text-3xl font-bold">Dashboard</h1>
      <p className="mt-4 text-neutral-700">
        Placeholder dashboard view. This page may require authentication and
        client interactivity for charts and widgets.
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        <div className="placeholder-card">Metric 1</div>
        <div className="placeholder-card">Metric 2</div>
        <div className="placeholder-card">Metric 3</div>
      </div>
    </section>
  );
}
