import type { Metadata } from "next";

/** Belt and braces with robots.ts — the lead list must never be indexed. */
export const metadata: Metadata = {
  robots: { index: false, follow: false, nocache: true },
};

export default function AdminLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return <div className="min-h-dvh bg-canvas-sink">{children}</div>;
}
