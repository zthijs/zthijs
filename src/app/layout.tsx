import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Analytics } from "@/components/analytics";
import { Footer } from "@/components/ui/footer";

import "react-photo-view/dist/react-photo-view.css";
import "@/assets/styles/globals.css";

export const metadata: Metadata = {
  title: "Thijs",
  description: "Full stack software & media creation by Thijs",
  keywords: [
    "software development",
    "web development",
    "media creation",
    "full stack development",
    "devops",
    "cloud computing",
    "automation",
    "software engineering",
    "nextjs",
    "react",
    "typescript",
    "nodejs",
    "tailwindcss",
    "zthijs",
    "zthijs.dev",
    "zthijs.nl",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://rsms.me/" />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </head>
      <body className="selection:bg-base-200 selection:text-base-900 antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          storageKey="theme"
          enableSystem
        >
          <main className="grow">{children}</main>
          <Footer />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
