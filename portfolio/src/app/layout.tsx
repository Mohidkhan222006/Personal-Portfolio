import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mohid Ahmer Khan | Penetration Tester & Software Developer",
  description:
    "Portfolio of Mohid Ahmer Khan — CS student at NEDUET, Penetration Tester, Ethical Hacker, and Software Developer from Karachi, Pakistan. Specializing in web application security, network pentesting, CTF competitions, and building secure software.",
  keywords: [
    "Mohid Ahmer Khan",
    "Mohid Khan",
    "NEDUET",
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
    title: "Mohid Ahmer Khan | Penetration Tester & Software Developer",
    description:
      "Portfolio of Mohid Ahmer Khan — CS student at NEDUET, Penetration Tester, Ethical Hacker, and Software Developer from Karachi, Pakistan.",
    siteName: "Mohid Ahmer Khan — Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohid Ahmer Khan | Penetration Tester & Software Developer",
    description:
      "Portfolio of Mohid Ahmer Khan — CS student at NEDUET, Penetration Tester, Ethical Hacker, and Software Developer.",
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
