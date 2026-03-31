import { Sidebar } from "@/components/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <main className="flex-1 lg:ml-64 min-h-screen overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 py-6 pt-16 lg:pt-8 lg:px-6 overflow-x-hidden">{children}</div>
      </main>
    </div>
  );
}
