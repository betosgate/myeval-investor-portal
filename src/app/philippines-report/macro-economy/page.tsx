import { Badge } from "@/components/ui/badge";

export default function Page() {
  return (
    <div className="space-y-6">
      <div>
        <Badge className="text-xs bg-blue-100 text-blue-700 border-blue-300 mb-3">IN DEVELOPMENT</Badge>
        <h1 className="text-3xl font-bold tracking-tight">Macro Economy</h1>
        <p className="text-muted-foreground mt-2">This section is being populated with deep research data. Check back shortly.</p>
      </div>
    </div>
  );
}
