"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import {
  ArrowUpRight, Menu, ChevronRight, Home, Info, Briefcase,
  FolderOpen, Users, Phone, Code2, Layers, Cpu, Palette, ShoppingBag
} from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";

const services = [
  { icon: Code2, label: "Web Development", desc: "React, Next.js & full-stack apps", href: "/services#web" },
  { icon: Layers, label: "Mobile Apps", desc: "Flutter & React Native for iOS/Android", href: "/services#mobile" },
  { icon: Cpu, label: "AI Solutions", desc: "LLMs, automation & ML pipelines", href: "/services#ai" },
  { icon: ShoppingBag, label: "Shopify & WordPress", desc: "eCommerce & CMS solutions", href: "/services#ecommerce" },
  { icon: Palette, label: "UI/UX Design", desc: "Design systems & product design", href: "/services#design" },
];

const company = [
  { icon: Info, label: "About Us", desc: "Our story, mission and values", href: "/about" },
  { icon: FolderOpen, label: "Portfolio", desc: "Projects we've shipped globally", href: "/portfolio" },
  { icon: Users, label: "Careers", desc: "Join our growing team", href: "/careers" },
];

const simpleLinks = [
  { href: "/hire-developers", label: "Hire Developers" },
  { href: "/contact", label: "Contact" },
];

function ListItem({ icon: Icon, title, desc, href }: { icon: React.ElementType; title: string; desc: string; href: string }) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="group flex select-none gap-3 rounded-xl p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
        >
          <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
            <Icon className="h-4 w-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">{title}</div>
            <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">{desc}</p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export function Navbar() {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/90 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src={logo} alt="CodeSwipe IT Solutions" className="h-7 w-auto" height={50} priority />
        </Link>

        {/* Desktop Navigation — shadcn NavigationMenu */}
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>

            {/* Home */}
            <NavigationMenuItem>
              <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), pathname === "/" && "bg-accent text-accent-foreground")}>
                <Link href="/">Home</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>

            {/* Services Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={pathname.startsWith("/services") ? "bg-accent text-accent-foreground" : ""}>
                Services
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[480px] p-4">
                  <div className="mb-3 flex items-center justify-between">
                    <p className="text-xs uppercase tracking-widest text-muted-foreground font-medium">What We Build</p>
                    <Badge variant="outline" className="text-[10px]">20+ Services</Badge>
                  </div>
                  <ul className="grid grid-cols-1 gap-0.5">
                    {services.map((s) => (
                      <ListItem key={s.label} icon={s.icon} title={s.label} desc={s.desc} href={s.href} />
                    ))}
                  </ul>
                  <Separator className="my-3" />
                  <Link
                    href="/services"
                    className="flex items-center justify-between rounded-lg bg-primary/5 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/10 transition-colors"
                  >
                    View all services <ChevronRight className="h-4 w-4" />
                  </Link>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Company Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger className={pathname.startsWith("/about") || pathname.startsWith("/portfolio") || pathname.startsWith("/careers") ? "bg-accent text-accent-foreground" : ""}>
                Company
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="w-[340px] p-4">
                  <p className="mb-3 text-xs uppercase tracking-widest text-muted-foreground font-medium">Who We Are</p>
                  <ul className="grid gap-0.5">
                    {company.map((c) => (
                      <ListItem key={c.label} icon={c.icon} title={c.label} desc={c.desc} href={c.href} />
                    ))}
                  </ul>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Simple Links */}
            {simpleLinks.map((l) => (
              <NavigationMenuItem key={l.href}>
                <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), pathname === l.href && "bg-accent text-accent-foreground")}>
                  <Link href={l.href}>{l.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}

          </NavigationMenuList>
        </NavigationMenu>

        {/* Desktop CTA */}
        <div className="hidden lg:flex items-center gap-2 shrink-0">
          <Button variant="outline" size="sm" asChild>
            <Link href="tel:+917265025017">+91 72650 25017</Link>
          </Button>
          <Button size="sm" asChild className="rounded-full shadow-brand bg-brand hover:bg-brand/90 text-white">
            <Link href="/contact">
              Start a Project <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        {/* Mobile: shadcn Sheet */}
        <div className="lg:hidden">
          <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu" className="rounded-full">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[360px] p-0">
              <SheetHeader className="px-6 pt-6 pb-4 border-b border-border">
                <SheetTitle asChild>
                  <Link href="/" onClick={() => setSheetOpen(false)}>
                    <Image src={logo} alt="CodeSwipe IT Solutions" className="h-7 w-auto" height={50} />
                  </Link>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col px-4 py-4 gap-1 overflow-y-auto">
                {/* Home */}
                <SheetClose asChild>
                  <Link
                    href="/"
                    className={cn(
                      "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-accent",
                      pathname === "/" && "bg-accent text-accent-foreground"
                    )}
                  >
                    <Home className="h-4 w-4 text-primary" /> Home
                  </Link>
                </SheetClose>

                {/* Services */}
                <div>
                  <p className="px-4 pt-4 pb-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Services</p>
                  {services.map((s) => (
                    <SheetClose key={s.label} asChild>
                      <Link
                        href={s.href}
                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <s.icon className="h-4 w-4 text-primary" /> {s.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <Separator className="my-3" />

                {/* Company */}
                <div>
                  <p className="px-4 pb-2 text-[10px] uppercase tracking-widest text-muted-foreground font-semibold">Company</p>
                  {company.map((c) => (
                    <SheetClose key={c.label} asChild>
                      <Link
                        href={c.href}
                        className="flex items-center gap-3 rounded-xl px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                      >
                        <c.icon className="h-4 w-4 text-primary" /> {c.label}
                      </Link>
                    </SheetClose>
                  ))}
                </div>

                <Separator className="my-3" />

                {simpleLinks.map((l) => (
                  <SheetClose key={l.href} asChild>
                    <Link
                      href={l.href}
                      className={cn(
                        "flex items-center gap-3 rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-accent",
                        pathname === l.href && "bg-accent text-accent-foreground"
                      )}
                    >
                      <Phone className="h-4 w-4 text-primary" /> {l.label}
                    </Link>
                  </SheetClose>
                ))}

                <div className="mt-4 px-2">
                  <Button asChild className="w-full rounded-full bg-brand hover:bg-brand/90 text-white shadow-brand">
                    <Link href="/contact" onClick={() => setSheetOpen(false)}>
                      Start a Project <ArrowUpRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
