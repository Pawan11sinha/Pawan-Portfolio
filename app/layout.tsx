import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ThemeToggle } from "@/components/theme-toggle";
import StructuredData from "@/components/structured-data";
import { ErrorBoundary } from "@/components/error-boundary";

const geistSans = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-sans",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "Pawan Kumar Sinha - Full Stack Developer | Portfolio",
  description:
   "A 22 year-old developer from India who loves building efficient, scalable, and intuitive applications.With over a year of hands-on experience, I work at ConviSaaS Inc.as a User Story Engineer, focusing on building scalable,user-centric SaaS products.",
  keywords: [
    "Full Stack Developer",
    "React Developer",
    "Node.js Developer",
    "TypeScript Developer",
    "JavaScript Developer",
    "Frontend Developer",
    "Backend Developer",
    "Web Developer",
    "Software Engineer",
    "Portfolio",
    "India",
    "Pawan Kumar Sinha",
    "Stealth Startup",
    "Founding Engineer",
    "Call2Code Hackathon",
    "BitBash",
    "MUJ",
    "NIT Kurukshetra",
    "Maharaja Agrasen Institute of Technology",
    "MAIT",
    "Best Portfolio",
    "Minimalist Portfolio",
    "69ftw",
    "Developer Portfolio",
    "Student Portfolio",
    "Tech Portfolio",
    "Modern Portfolio",
    "Clean Portfolio",
    "Professional Portfolio",
    "Portfolio Website",
    "Personal Website",
    "Developer Website",
  ],
  authors: [{ name: "Pawan Kumar Sinha" }],
  creator: "Pawan Kumar Sinha",
  publisher: "Pawan Kumar Sinha",
  generator: "Next.js",
  applicationName: "Pawan Kumar Sinha Portfolio",
  referrer: "origin-when-cross-origin",
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://pawansinha.dev",
    siteName: "Pawan Kumar Sinha Portfolio",
    title: "Pawan Kumar Sinha- Full Stack Developer",
    description:
        "A 22 year-old developer from India who loves building efficient, scalable, and intuitive applications.With over a year of hands-on experience, I work at ConviSaaS Inc.as a User Story Engineer, focusing on building scalable,user-centric SaaS products.",
    images: [
      {
        url: "https://iili.io/KB9qfG1.png",
        width: 1200,
        height: 630,
        alt: "Pawan Kumar Sinha - Full Stack Developer Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@sinhakrpawan11",
    creator: "@sinhakrpawan11",
    title: "Pawan Kumar Sinha - Full Stack Developer",
    description:
         "A 22 year-old developer from India who loves building efficient, scalable, and intuitive applications.With over a year of hands-on experience, I work at ConviSaaS Inc.as a User Story Engineer, focusing on building scalable,user-centric SaaS products.",
    images: ["https://iili.io/KB9qfG1.png"],
  },
  icons: {
    icon: "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    shortcut:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
    apple:
      "https://media.licdn.com/dms/image/v2/D4E03AQFoa40cJ2WOMA/profile-displayphoto-scale_400_400/B4EZgKXbIXGoAo-/0/1752520570498?e=1759968000&v=beta&t=cckryikVjD2X7Nvhcmw5I8B1w6sQofIPdTWlpbmkDSU",
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
  classification: "Portfolio Website",
  other: {
    "contact:email": "sinhakrpawan11@gmail.com",
    "contact:phone_number": "+91-9523048984",
    "contact:country_name": "India",
    "contact:region": "Delhi",
    "contact:locality": "New Delhi",
    "og:image:width": "1200",
    "og:image:height": "630",
    "og:image:type": "image/png",
    "og:image:alt": "Pawan Kumar Sinha- Full Stack Developer Portfolio",
    "og:site_name": "Pawan Kumar SinhaPortfolio",
    "og:locale": "en_US",
    "og:type": "website",
    "og:url": "https://pawansinha.dev",
    "og:title": "Pawan Kumar Sinha - Full Stack Developer",
    "og:description":
      "A 20 year-old Full Stack Developer from India who loves building efficient, scalable, and intuitive applications. Currently working as Founding Engineer at a stealth startup.",
    "og:image": "https://iili.io/KB9qfG1.png",
    "twitter:image:alt": "Pawan Kumar Sinha- Full Stack Developer Portfolio",
    "twitter:domain": "pawansinha.dev",
    "twitter:url": "https://pawansinha.dev",
    "whatsapp:image": "https://iili.io/KB9qfG1.png",
    "whatsapp:title": "Pawan Kumar Sinha - Full Stack Developer",
    "whatsapp:description":
      "A 20 year-old Full Stack Developer from India who loves building efficient, scalable, and intuitive applications.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <StructuredData />
      </head>
      <body className="font-sans min-h-dvh bg-grid text-foreground">
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-dvh">{children}</div>
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}
