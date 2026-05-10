import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI RevOps Studio — Lead Recovery for Insurance Agencies",
  description:
    "AI RevOps Studio installs missed-call recovery, speed-to-lead tracking, AI call summaries, and manager visibility for insurance agencies — without replacing your CRM.",
  openGraph: {
    title: "AI RevOps Studio — Lead Recovery for Insurance Agencies",
    description:
      "Recover the insurance leads your team is already paying for. Book a free Lead Leakage Scan.",
    type: "website",
    siteName: "AI RevOps Studio",
  },
  twitter: {
    card: "summary_large_image",
    title: "AI RevOps Studio — Lead Recovery for Insurance Agencies",
    description:
      "Recover the insurance leads your team is already paying for. Book a free Lead Leakage Scan.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
