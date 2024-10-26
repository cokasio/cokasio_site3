import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Brain, Code, LineChart } from "lucide-react";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="container flex flex-col items-center justify-center gap-4 py-24 md:py-32 text-center">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tighter">
          Transform Your Real Estate Operations
        </h1>
        <p className="max-w-[42rem] text-muted-foreground sm:text-xl sm:leading-8">
          Expert AI consulting and Yardi development solutions to streamline your property management workflow
        </p>
        <div className="flex gap-4">
          <Button size="lg" asChild>
            <Link href="/contact">Schedule a Consultation</Link>
          </Button>
          <Button size="lg" variant="outline" asChild>
            <Link href="/services">Explore Services</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-12 md:py-24">
        <div className="grid gap-8 md:grid-cols-3">
          <Card>
            <CardHeader>
              <Brain className="h-10 w-10 mb-4" />
              <CardTitle>AI Strategy</CardTitle>
              <CardDescription>
                Develop custom AI solutions to automate workflows and enhance decision-making
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/services#ai-strategy"
                className="group flex items-center text-sm font-medium text-primary"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <Code className="h-10 w-10 mb-4" />
              <CardTitle>Yardi Development</CardTitle>
              <CardDescription>
                Custom Yardi solutions and integrations tailored to your business needs
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/services#yardi-development"
                className="group flex items-center text-sm font-medium text-primary"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <LineChart className="h-10 w-10 mb-4" />
              <CardTitle>Data Reporting</CardTitle>
              <CardDescription>
                Advanced reporting solutions to unlock insights from your property data
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Link
                href="/services#data-reporting"
                className="group flex items-center text-sm font-medium text-primary"
              >
                Learn more <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container py-12 md:py-24">
        <div className="relative rounded-lg bg-muted px-6 py-12 md:px-12 md:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Ready to optimize your operations?
            </h2>
            <p className="mt-4 text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Let's discuss how our AI and Yardi solutions can transform your business
            </p>
            <Button size="lg" className="mt-8" asChild>
              <Link href="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}