/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f5fbff",
          100: "#e6f5ff",
          200: "#bfe9ff",
          300: "#99ddff",
          400: "#4fc6ff",
          500: "#00aaff",
          600: "#0088d9",
          700: "#006699",
          800: "#004466",
          900: "#002233",
        },
        neutral: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui"],
      },
      borderRadius: {
        sm: "6px",
        md: "10px",
        lg: "14px",
      },
      boxShadow: {
        sm: "0 1px 2px rgba(16,24,40,0.05)",
        md: "0 6px 20px rgba(2,6,23,0.08)",
      },
    },
  },
  plugins: [],
};
