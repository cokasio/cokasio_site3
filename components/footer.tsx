import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container flex flex-col gap-8 py-8 md:py-12">
        <div className="flex flex-col gap-6 md:flex-row md:justify-between">
          <div className="space-y-4">
            <h3 className="text-xl font-bold">COKASIO</h3>
            <p className="max-w-sm text-sm text-muted-foreground">
              AI Consulting and Yardi Development Solutions for Real Estate
            </p>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/about" className="text-muted-foreground hover:text-foreground">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-muted-foreground hover:text-foreground">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/projects" className="text-muted-foreground hover:text-foreground">
                    Projects
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Resources</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/blog" className="text-muted-foreground hover:text-foreground">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-muted-foreground hover:text-foreground">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="/client-portal" className="text-muted-foreground hover:text-foreground">
                    Client Portal
                  </Link>
                </li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-sm font-medium">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="mailto:contact@cokasio.com" className="text-muted-foreground hover:text-foreground">
                    contact@cokasio.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} COKASIO. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/privacy">Privacy</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/terms">Terms</Link>
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}