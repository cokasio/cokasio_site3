import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const projects = [
  {
    title: "AI-Powered Lease Analysis",
    description: "Automated lease analysis system using AI to extract and validate key information.",
    results: "Reduced processing time by 75%",
    category: "AI Integration",
  },
  {
    title: "Custom Yardi Migration",
    description: "End-to-end migration of legacy property management system to Yardi.",
    results: "Successfully migrated 50,000+ records",
    category: "Yardi Development",
  },
  {
    title: "Advanced Reporting Dashboard",
    description: "Custom reporting solution integrating multiple data sources.",
    results: "Automated 40+ monthly reports",
    category: "Data Reporting",
  },
];

export default function ProjectsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Projects</h1>
          <p className="max-w-[900px] text-muted-foreground">
            Explore our successful implementations of AI solutions and Yardi development projects.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <div className="space-y-1">
                  <CardTitle>{project.title}</CardTitle>
                  <CardDescription>{project.category}</CardDescription>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">{project.description}</p>
                  <div className="space-y-2">
                    <div className="font-medium">Results:</div>
                    <p className="text-sm text-muted-foreground">{project.results}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Project <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}