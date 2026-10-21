"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/constants/navigation";

export function NavBar() {
  const pathname = usePathname();

  const activePage = pathname.startsWith("/departments")
    ? "departments"
    : pathname.startsWith("/about")
      ? "about"
      : "students";

  return (
    <header className="site-header">
      <nav className="nav wrap" aria-label="Main navigation">
        <Link className="brand" href="/">
          <span className="brand-icon">⌂</span>
          Campus Directory
        </Link>

        <div className="nav-links">
          {navigationItems.map((item) => (
            <Link
              key={item.href}
              className={
                activePage === item.label.toLowerCase()
                  ? "active"
                  : ""
              }
              href={item.href}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <span className="practice">Frontend Practice</span>
      </nav>
    </header>
  );
}
