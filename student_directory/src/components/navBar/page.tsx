"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavBar() {
  const path = usePathname();
  const active = path.startsWith("/departments") ? "departments" : path.startsWith("/about") ? "about" : "students";
  return <header className="site-header"><nav className="nav wrap" aria-label="Main navigation">
    <Link className="brand" href="/"><span className="brand-icon">⌂</span>Campus Directory</Link>
    <div className="nav-links">
      <Link className={active === "students" ? "active" : ""} href="/students">Students</Link>
      <Link className={active === "departments" ? "active" : ""} href="/departments">Departments</Link>
      <Link className={active === "about" ? "active" : ""} href="/about">About</Link>
    </div>
    <span className="practice">Frontend Practice</span>
  </nav></header>;
}
