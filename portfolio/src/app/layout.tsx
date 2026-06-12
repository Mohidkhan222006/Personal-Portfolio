import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohid Ahmer Khan | Front-end AI Engineer & Security Researcher",
  description:
    "Portfolio of Mohid Ahmer Khan — CS student at NEDUET, Front-end AI Engineer, and Penetration Tester from Karachi, Pakistan. Specializing in AI integration, secure software development, and ethical hacking.",
  keywords: [
    "Mohid Ahmer Khan",
    "Mohid Khan",
    "NEDUET",
    "Front-end AI Engineer",
    "AI Engineering",
    "Penetration Tester",
    "Ethical Hacker",
    "Cybersecurity",
    "Software Developer",
    "Full Stack",
    "CTF",
    "TryHackMe",
    "Hack The Box",
    "Web Application Security",
    "Karachi",
    "Pakistan",
    "Portfolio",
  ],
  authors: [{ name: "Mohid Ahmer Khan" }],
  creator: "Mohid Ahmer Khan",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohid Ahmer Khan | Front-end AI Engineer & Security Researcher",
    description:
      "Portfolio of Mohid Ahmer Khan — CS student at NEDUET, Front-end AI Engineer, and Penetration Tester from Karachi, Pakistan.",
    siteName: "Mohid Ahmer Khan — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohid Ahmer Khan | Front-end AI Engineer & Security Researcher",
    description:
      "Portfolio of Mohid Ahmer Khan — CS student at NEDUET, Front-end AI Engineer, and Penetration Tester.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>{children}</body>
    </html>
  );
}
