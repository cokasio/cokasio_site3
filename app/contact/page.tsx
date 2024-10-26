import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="container py-12">
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="space-y-6">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Contact Us</h1>
            <p className="text-muted-foreground">
              Get in touch to discuss how we can help transform your property management operations.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <Mail className="h-5 w-5 text-muted-foreground" />
              <span>contact@cokasio.com</span>
            </div>
            <div className="flex items-center space-x-4">
              <Phone className="h-5 w-5 text-muted-foreground" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center space-x-4">
              <MapPin className="h-5 w-5 text-muted-foreground" />
              <span>123 Business Street, Suite 100, City, State 12345</span>
            </div>
          </div>
        </div>
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
            <CardDescription>
              Fill out the form below and we'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="first-name">First name</Label>
                  <Input id="first-name" placeholder="Enter your first name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Last name</Label>
                  <Input id="last-name" placeholder="Enter your last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" placeholder="Enter your email" type="email" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" placeholder="Enter your phone number" type="tel" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  className="min-h-[100px]"
                  id="message"
                  placeholder="Tell us about your project or requirements"
                />
              </div>
              <Button className="w-full" size="lg" type="submit">
                Send Message
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}