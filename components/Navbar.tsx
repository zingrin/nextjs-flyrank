"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="bg-white border-b">
      <div className="container flex items-center justify-between h-16">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-semibold text-lg text-neutral-900">
            SaaS<span className="text-primary-500">Kit</span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-neutral-700 hover:text-neutral-900">
            Home
          </Link>
          <Link
            href="/about"
            className="text-neutral-700 hover:text-neutral-900"
          >
            About
          </Link>
          <Link
            href="/services"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Services
          </Link>
          <Link
            href="/contact"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Contact
          </Link>
          <Link
            href="/dashboard"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Dashboard
          </Link>
          <Link
            href="/health"
            className="text-neutral-700 hover:text-neutral-900"
          >
            Health
          </Link>
        </nav>

        <div className="md:hidden">
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="p-2 rounded-md text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-500"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t">
          <div className="px-4 py-4 space-y-3">
            <Link href="/" onClick={() => setOpen(false)} className="block">
              Home
            </Link>
            <Link
              href="/about"
              onClick={() => setOpen(false)}
              className="block"
            >
              About
            </Link>
            <Link
              href="/services"
              onClick={() => setOpen(false)}
              className="block"
            >
              Services
            </Link>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="block"
            >
              Contact
            </Link>
            <Link
              href="/dashboard"
              onClick={() => setOpen(false)}
              className="block"
            >
              Dashboard
            </Link>
            <Link
              href="/health"
              onClick={() => setOpen(false)}
              className="block"
            >
              Health
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
