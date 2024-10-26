import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";

export default function ClientPortalPage() {
  return (
    <div className="container flex items-center justify-center min-h-[calc(100vh-8rem)]">
      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Client Portal</CardTitle>
          <CardDescription>
            Sign in to access your project dashboard and resources
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" placeholder="Enter your email" type="email" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" placeholder="Enter your password" type="password" />
            </div>
            <Button className="w-full" type="submit">
              Sign In
            </Button>
          </form>
          <div className="mt-4 text-center text-sm">
            <Link href="/contact" className="text-primary hover:underline">
              Need help accessing your account?
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}