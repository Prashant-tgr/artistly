"use client";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/artists", label: "Explore Artists" },
    { href: "/onboard", label: "Join as Artist" },
    { href: "/dashboard", label: "Dashboard" },
  ];

  return (
    <header className="w-full bg-white dark:bg-gray-950 border-b shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">🎭 Artistly</h1>
        <nav className="flex space-x-2 sm:space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`px-2 py-1 rounded transition-colors ${
                pathname === link.href
                  ? "bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-300 font-semibold"
                  : "hover:text-indigo-600"
              }`}
              aria-current={pathname === link.href ? "page" : undefined}
            >
              {link.label}
            </Link>
          ))}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}