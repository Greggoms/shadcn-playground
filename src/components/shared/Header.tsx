"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import ThemeToggle from "@/components/shared/ThemeToggle";

import { Separator } from "@/components/ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "../ui/button";
import { Menu } from "lucide-react";
import { cn } from "@/lib/utils/shadcn-utils";

const Header = () => {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="border-b-[1px] border-b-border shadow-sm sticky top-0 bg-background/70 backdrop-blur-lg z-20">
      <div className="flex items-center justify-between p-3">
        <div className="flex items-baseline gap-x-5">
          <h2 className="font-thin text-xl">
            <Link href="/">
              <span className="block md:hidden">sp</span>
              <span className="hidden md:block">shadcn-playground</span>
            </Link>
          </h2>
          {/* Desktop Nav */}
          <NavigationMenu className="hidden md:block">
            <NavigationMenuList>
              <NavigationMenuItem>
                <Link href="/carousel" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={pathname === "/carousel"}
                  >
                    Carousel
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/form" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={pathname === "/form"}
                  >
                    Form
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/searchbar" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={pathname === "/searchbar"}
                  >
                    Searchbar
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <Link href="/table" legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle()}
                    active={pathname === "/table"}
                  >
                    Table
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <div className="flex items-center gap-x-3">
          <ThemeToggle />

          {/* Mobile Nav */}
          <Sheet
            open={isMenuOpen}
            onOpenChange={() =>
              isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)
            }
          >
            <SheetTrigger className="md:hidden" asChild>
              <Button variant="outline" size="icon">
                <Menu className="h-4 w-4" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[320px]">
              <nav className="flex flex-col gap-y-1">
                <Button
                  asChild
                  variant="link"
                  className={cn(
                    "justify-stretch text-left",
                    pathname === "/carousel" && "underline"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/carousel">Carousel</Link>
                </Button>
                <Separator />
                <Button
                  asChild
                  variant="link"
                  className={cn(
                    "justify-stretch text-left",
                    pathname === "/form" && "underline"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/form">Form</Link>
                </Button>
                <Separator />
                <Button
                  asChild
                  variant="link"
                  className={cn(
                    "justify-stretch text-left",
                    pathname === "/searchbar" && "underline"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/searchbar">Searchbar</Link>
                </Button>
                <Separator />
                <Button
                  asChild
                  variant="link"
                  className={cn(
                    "justify-stretch text-left",
                    pathname === "/table" && "underline"
                  )}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <Link href="/table">Table</Link>
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
