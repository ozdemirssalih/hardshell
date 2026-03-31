import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hardshell — Developer Cloud Infrastructure",
  description: "Deploy Supabase, n8n, Linux and KVM VPS servers instantly. Developer-first cloud hosting from Silicon Valley.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}
