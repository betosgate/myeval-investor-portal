import type { Metadata } from "next";
import { PhilippinesSidebar } from "./sidebar";

export const metadata: Metadata = {
  title: "Republic of the Philippines — Comprehensive Economic Strategy Report",
  description:
    "A 14-section economic strategy report covering macroeconomic fundamentals, sector analysis, healthcare, digital transformation, geopolitics, and policy recommendations for the Republic of the Philippines. Presented by Tom Langland. Developed by Beto Paredes.",
};

export default function PhilippinesReportLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <PhilippinesSidebar />
      <main className="flex-1 ml-72 min-h-screen">
        <div className="max-w-6xl mx-auto px-6 py-8">{children}</div>
      </main>
    </div>
  );
}
