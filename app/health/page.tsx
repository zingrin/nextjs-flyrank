import React from "react";

// Server Component - runs on the server and can fetch data safely
export default async function Health() {
  // Simulate async fetch / health check
  async function getHealth() {
    // In real scenarios you'd check DB, external APIs, etc.
    return {
      status: "Healthy",
      time: new Date().toISOString(),
      environment: process.env.NODE_ENV || "development",
    } as const;
  }

  const data = await getHealth();

  return (
    <section>
      <h1 className="text-3xl font-bold">Health Check</h1>
      <p className="mt-4 text-neutral-700">
        Server-side health diagnostics (mocked for Foundations phase).
      </p>

      <div className="mt-6 placeholder-card">
        <div className="text-sm text-neutral-600">Status:</div>
        <div className="text-lg font-semibold mt-1">{data.status}</div>

        <div className="mt-4 text-sm text-neutral-600">Current Time:</div>
        <div className="mt-1 text-neutral-800">{data.time}</div>

        <div className="mt-4 text-sm text-neutral-600">Environment:</div>
        <div className="mt-1 text-neutral-800">{data.environment}</div>
      </div>
    </section>
  );
}
