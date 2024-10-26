import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    position: "Director of Operations",
    company: "Metropolitan Property Management",
    content: "COKASIO's AI-powered solutions transformed our lease processing workflow. We've seen a 75% reduction in processing time and significantly improved accuracy. Their expertise in both AI and Yardi development is unmatched.",
    rating: 5,
    project: "AI Lease Analysis System",
  },
  {
    name: "Michael Chen",
    position: "CTO",
    company: "Pacific Real Estate Group",
    content: "The custom Yardi integration COKASIO developed for us has streamlined our entire operation. Their team's deep understanding of property management workflows made the transition seamless. We've seen remarkable improvements in efficiency.",
    rating: 5,
    project: "Custom Yardi Development",
  },
  {
    name: "Emily Rodriguez",
    position: "VP of Property Management",
    company: "Sunrise Properties",
    content: "Working with COKASIO on our reporting system was a game-changer. Their team delivered a solution that not only met our complex reporting needs but also provided valuable insights we didn't know we needed.",
    rating: 5,
    project: "Advanced Reporting Solution",
  },
  {
    name: "David Thompson",
    position: "Operations Manager",
    company: "Urban Living Properties",
    content: "The training program COKASIO developed for our team was comprehensive and practical. Their expertise in Yardi development helped our staff become more proficient and confident in using the system.",
    rating: 5,
    project: "Yardi Training Program",
  },
  {
    name: "Lisa Martinez",
    position: "Property Manager",
    company: "Coastal Properties LLC",
    content: "COKASIO's workflow optimization project completely transformed how we handle maintenance requests. The AI-driven system they implemented has improved response times and tenant satisfaction significantly.",
    rating: 5,
    project: "Workflow Optimization",
  },
  {
    name: "Robert Kim",
    position: "IT Director",
    company: "Summit Real Estate",
    content: "The data migration project handled by COKASIO was flawless. Their attention to detail and thorough testing process ensured a smooth transition with zero data loss. Highly recommended for complex migrations.",
    rating: 5,
    project: "Data Migration",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(rating)].map((_, i) => (
        <Star key={i} className="h-4 w-4 fill-primary text-primary" />
      ))}
    </div>
  );
}

export default function TestimonialsPage() {
  return (
    <div className="container py-12">
      <div className="space-y-6">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Client Testimonials</h1>
          <p className="max-w-[900px] text-muted-foreground">
            Hear from our satisfied clients about their experience working with COKASIO.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <Quote className="h-8 w-8 text-primary mb-2" />
                <StarRating rating={testimonial.rating} />
                <CardTitle className="text-lg">{testimonial.name}</CardTitle>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}
                  <br />
                  {testimonial.company}
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground italic">"{testimonial.content}"</p>
                  <div className="text-sm font-medium text-primary">
                    Project: {testimonial.project}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-12">
          <Button size="lg" asChild>
            <Link href="/contact">
              Start Your Success Story
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}