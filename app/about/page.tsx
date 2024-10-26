import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { Award, Users, Building2, BarChart3, Clock, Globe } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "20+",
    label: "Years of ERP Experience",
  },
  {
    icon: Building2,
    value: "500+",
    label: "Properties Managed",
  },
  {
    icon: Users,
    value: "1000+",
    label: "Clients Served",
  },
  {
    icon: Globe,
    value: "50+",
    label: "Cities Covered",
  },
];

const expertise = [
  {
    title: "Enterprise Resource Planning",
    description: "Over two decades of experience implementing and optimizing ERP solutions for real estate enterprises.",
  },
  {
    title: "Yardi Development",
    description: "Specialized expertise in customizing and extending Yardi functionality to meet unique business requirements.",
  },
  {
    title: "AI Integration",
    description: "Cutting-edge AI solutions that enhance property management workflows and decision-making processes.",
  },
  {
    title: "Data Analytics",
    description: "Advanced reporting and analytics capabilities that transform raw data into actionable insights.",
  },
];

export default function AboutPage() {
  return (
    <div className="container py-12">
      {/* Hero Section */}
      <section className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">About COKASIO</h1>
          <p className="max-w-[900px] text-xl text-muted-foreground">
            Transforming property management with over 20 years of ERP expertise and cutting-edge AI solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 md:py-24">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card key={index} className="relative overflow-hidden">
                <CardContent className="p-6">
                  <Icon className="h-10 w-10 mb-4 text-primary" />
                  <div className="space-y-2">
                    <h3 className="text-3xl font-bold">{stat.value}</h3>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* Expertise Section */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Expertise</h2>
        <div className="grid gap-6 md:grid-cols-2">
          {expertise.map((item, index) => (
            <div key={index} className="space-y-2">
              <h3 className="text-xl font-bold">{item.title}</h3>
              <p className="text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-12 md:py-24">
        <div className="rounded-lg bg-muted p-8">
          <div className="space-y-6">
            <Award className="h-12 w-12 text-primary" />
            <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Our Mission</h2>
            <p className="text-muted-foreground max-w-[900px]">
              To empower real estate enterprises with innovative technology solutions that streamline operations, enhance decision-making, and drive sustainable growth. With over two decades of ERP expertise, we combine deep industry knowledge with cutting-edge AI capabilities to deliver transformative results.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="text-center space-y-4">
          <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">Ready to Transform Your Operations?</h2>
          <p className="text-muted-foreground">
            Let's discuss how our expertise can benefit your organization.
          </p>
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}