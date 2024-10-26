"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Projects", href: "/projects" },
  { name: "Tools", href: "/tools" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [open, setOpen] = React.useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold">COKASIO</span>
          </Link>
          <nav className="hidden md:flex items-center space-x-6 text-sm font-medium">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  pathname === item.href ? "text-foreground" : "text-foreground/60"
                )}
              >
                {item.name}
              </Link>
            ))}
          </nav>
        </div>
        <div className="flex flex-1 items-center justify-between space-x-2 md:justify-end">
          <div className="w-full flex-1 md:w-auto md:flex-none">
          </div>
          <nav className="flex items-center space-x-2">
            <Link href="/client-portal">
              <Button variant="outline" className="hidden md:flex">
                Client Portal
              </Button>
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  className="h-9 w-9 px-0 md:hidden"
                >
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="pr-0">
                <ScrollArea className="my-4 h-[calc(100vh-8rem)] pb-10">
                  <div className="flex flex-col space-y-3">
                    {navigation.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "text-foreground/70 transition-colors hover:text-foreground",
                          pathname === item.href && "text-foreground"
                        )}
                        onClick={() => setOpen(false)}
                      >
                        {item.name}
                      </Link>
                    ))}
                    <Link
                      href="/client-portal"
                      className="text-foreground/70 transition-colors hover:text-foreground"
                      onClick={() => setOpen(false)}
                    >
                      Client Portal
                    </Link>
                  </div>
                </ScrollArea>
              </SheetContent>
            </Sheet>
          </nav>
        </div>
      </div>
    </header>
  );
}