"use client";

import {
  Search,
  ShoppingCart,
  Heart,
  Menu,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

import { Button } from "@/app/components/ui/button";
import { Input } from "@/app/components/ui/input";
import { Badge } from "@/app/components/ui/badge";
import { ThemeToggle } from "@/app/components/ThemeToggle";
import { Sidebar } from "@/app/components/Sidebar";
import { Sheet, SheetContent } from "@/app/components/ui/sheet";

export function Navbar() {
  const [cartCount] = useState(3);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [showTopBar, setShowTopBar] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  // auto-hide top bar
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTopBar(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Sidebar */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Mobile Search */}
      <Sheet open={isSearchOpen} onOpenChange={setIsSearchOpen}>
        <SheetContent side="top" className="p-4">
          <form action="/search" className="flex gap-2">
            <Input
              autoFocus
              name="q"
              type="search"
              placeholder="Search products..."
              className="flex-1"
            />
            <Button size="icon" type="submit">
              <Search className="h-4 w-4" />
            </Button>
          </form>
        </SheetContent>
      </Sheet>

      <header className="sticky top-0 z-50 bg-white dark:bg-gray-800 shadow-md transition-colors">
        {/* Top Bar */}
        <div
          className={`overflow-hidden transition-all duration-700 ${
            showTopBar ? "max-h-20 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-2 px-4">
            <div className="max-w-7xl mx-auto text-center text-sm">
              Where tradition is handcrafted into elegance
            </div>
          </div>
        </div>

        {/* Main Navbar */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <div className="flex items-center justify-between">
            {/* LEFT */}
            <div className="flex items-center gap-3 flex-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSidebarOpen(true)}
                className="hover:scale-110 transition"
              >
                <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
              </Button>

              {/* Desktop Search */}
              <form action="/search" className="hidden md:block relative">
                <Input
                  name="q"
                  type="search"
                  placeholder="Search products..."
                  className="w-64 pr-10 rounded-full"
                />
                <Button
                  size="icon"
                  type="submit"
                  className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7 rounded-full bg-blue-900 hover:bg-blue-950"
                >
                  <Search className="h-4 w-4 text-white" />
                </Button>
              </form>
            </div>

            {/* CENTER LOGO */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <Link href="/">
                <h1 className="text-4xl md:text-6xl bg-gradient-to-r from-blue-900 to-blue-800 dark:from-blue-400 dark:to-blue-300 bg-clip-text text-transparent">
                  Nirmatri
                </h1>
                <p className="text-xs text-gray-600 dark:text-gray-400">
                  Handmade with Love
                </p>
              </Link>
            </div>

            {/* RIGHT */}
            <div className="flex items-center gap-2 md:gap-3 flex-1 justify-end">
              {/* Mobile Search */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsSearchOpen(true)}
              >
                <Search className="h-6 w-6" />
              </Button>

              <ThemeToggle />

              {/* Wishlist */}
              <Link href="/wishlist">
                <Button variant="ghost" size="icon" className="hidden sm:flex">
                  <Heart className="h-6 w-6" />
                </Button>
              </Link>

              {/* Cart */}
              <Link href="/cart">
                <Button variant="ghost" size="icon" className="relative">
                  <ShoppingCart className="h-6 w-6" />
                  {cartCount > 0 && (
                    <Badge className="absolute -top-1 -right-1 h-5 w-5 p-0 bg-blue-900">
                      {cartCount}
                    </Badge>
                  )}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
