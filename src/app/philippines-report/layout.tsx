import { PhilippinesSidebar } from "./sidebar";

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
