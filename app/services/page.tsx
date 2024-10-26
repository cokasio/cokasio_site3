import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Brain, Code, LineChart, Users, Workflow, Database, Target, Lightbulb } from "lucide-react";
import Link from "next/link";

const services = [
  {
    icon: Brain,
    title: "AI & Business Strategy",
    description: "Comprehensive business analysis and strategic AI implementation to create clarity and sustainable growth.",
    features: [
      "Business process analysis",
      "Strategic AI roadmapping",
      "Operational optimization",
      "Long-term partnership approach",
    ],
  },
  {
    icon: Target,
    title: "Strategic Consulting",
    description: "We partner with you to understand your challenges and develop tailored solutions for lasting success.",
    features: [
      "Business assessment",
      "Process optimization",
      "Growth strategy",
      "Continuous improvement",
    ],
  },
  {
    icon: Lightbulb,
    title: "Systems Innovation",
    description: "Creating clarity through intelligent systems that provide consistent operational insights.",
    features: [
      "Custom system design",
      "Workflow automation",
      "Performance metrics",
      "Real-time analytics",
    ],
  },
  {
    icon: Code,
    title: "Yardi Development",
    description: "Expert Yardi solutions tailored to your unique business requirements and goals.",
    features: [
      "Custom development",
      "System integration",
      "Performance optimization",
      "Ongoing support",
    ],
  },
  {
    icon: LineChart,
    title: "Data & Analytics",
    description: "Transform your data into actionable insights for better decision-making.",
    features: [
      "Custom dashboards",
      "Predictive analytics",
      "Performance tracking",
      "Data visualization",
    ],
  },
  {
    icon: Users,
    title: "Training & Support",
    description: "Comprehensive training and ongoing support to ensure long-term success.",
    features: [
      "Personalized training",
      "System adoption",
      "Best practices",
      "Continuous guidance",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Our Services</h1>
          <p className="max-w-[900px] text-muted-foreground">
            We don't just provide services - we build lasting partnerships. Our team works closely with you to understand your unique challenges and develop tailored solutions that bring clarity and consistency to your operations.
          </p>
        </div>

        {/* Featured Service */}
        <Card className="bg-primary/5 border-primary/20">
          <CardHeader>
            <CardTitle className="text-2xl">Why Partner With Us?</CardTitle>
            <CardDescription className="text-base">
              We believe in building long-term relationships with our clients. Our approach combines deep industry expertise with a genuine commitment to your success. We take the time to understand your business thoroughly, ensuring our solutions deliver lasting value and operational clarity.
            </CardDescription>
          </CardHeader>
        </Card>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <Card key={index} className="flex flex-col">
                <CardHeader>
                  <Icon className="h-10 w-10 mb-4 text-primary" />
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="list-disc list-inside space-y-2 text-sm text-muted-foreground">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex}>{feature}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center space-y-4">
          <h2 className="text-2xl font-bold">Ready to Transform Your Operations?</h2>
          <p className="text-muted-foreground">
            Let's discuss how we can help bring clarity and efficiency to your business.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}