import type { Metadata } from "next";
import "./globals.css";
import { NavBar } from "@/components/navigation";

export const metadata: Metadata = {
  title: "Campus Directory",
  description: "Browse campus students, profiles, and academic departments.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
      </body>
    </html>
  );
}
