import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Sidebar } from "@/components/sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MyEval.ai — Global Expansion & Investor Portal",
  description:
    "Comprehensive business plan and launch strategy for MyEval.ai's $50M global health intelligence platform expansion across 8 countries and US commercial launch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} dark h-full antialiased`}
    >
      <body className="min-h-full flex bg-background text-foreground">
        <TooltipProvider>
          <Sidebar />
          <main className="flex-1 ml-64 min-h-screen">
            <div className="max-w-7xl mx-auto px-6 py-8">{children}</div>
          </main>
        </TooltipProvider>
      </body>
    </html>
  );
}
