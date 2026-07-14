export default function Footer() {
  return (
    <footer className="bg-white border-t mt-12">
      <div className="container py-8 text-center text-sm text-neutral-600">
        <div>© {new Date().getFullYear()} SaaSKit. All rights reserved.</div>
        <div className="mt-2">
          Built with Next.js + TypeScript + Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
