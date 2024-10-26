import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator, Calendar, FileSpreadsheet, FileText, BarChart, ArrowRight } from "lucide-react";
import Link from "next/link";

const tools = [
  {
    icon: Calculator,
    title: "ROI Calculator",
    description: "Calculate return on investment for property improvements and upgrades.",
    href: "/tools/roi-calculator",
    status: "Coming Soon",
  },
  {
    icon: Calendar,
    title: "Lease Date Calculator",
    description: "Calculate important lease dates including notice periods and renewal deadlines.",
    href: "/tools/lease-calculator",
    status: "Coming Soon",
  },
  {
    icon: FileSpreadsheet,
    title: "Rent Roll Analyzer",
    description: "Upload and analyze rent roll data for insights and reporting.",
    href: "/tools/rent-roll-analyzer",
    status: "Coming Soon",
  },
  {
    icon: BarChart,
    title: "Market Rent Estimator",
    description: "Estimate market rents based on property characteristics and location.",
    href: "/tools/rent-estimator",
    status: "Coming Soon",
  },
  {
    icon: FileText,
    title: "Document Template Library",
    description: "Access commonly used property management document templates.",
    href: "/tools/templates",
    status: "Coming Soon",
  },
  {
    icon: Calculator,
    title: "CAM Reconciliation Calculator",
    description: "Calculate and reconcile Common Area Maintenance charges.",
    href: "/tools/cam-calculator",
    status: "Coming Soon",
  },
];

export default function ToolsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Property Management Tools</h1>
          <p className="max-w-[900px] text-muted-foreground">
            Free tools and calculators to help streamline your property management operations.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool, index) => {
            const Icon = tool.icon;
            return (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <Icon className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>{tool.title}</CardTitle>
                  <CardDescription>{tool.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{tool.status}</span>
                    <Button variant="ghost" size="sm" className="opacity-50" disabled>
                      Try Now <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-bold">Need a Custom Tool?</h2>
          <p className="text-muted-foreground">
            We can develop custom tools and calculators tailored to your specific needs.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Contact Us</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}