"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion } from "motion/react";
import { Menu, X } from "lucide-react";
import { ThemeSwitcher } from "@/components/ui/theme-switcher";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/ui/logo";
import { navigationbarItems } from "@/data";
import { useConvexAuth } from "convex/react";
import { Spinner } from "@/components/tools/spinner";
import { Avatar } from "@/components/ui/avatar";
import { SignInButton, UserButton } from "@clerk/nextjs";

const Navigationbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <header
      className={`sticky top-0 z-50 w-full mx-auto px-6 md:px-6 xl:px-6 backdrop-blur-sm transition-all duration-300 ${isScrolled ? "bg-background/80 shadow-sm" : "bg-transparent"}`}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2 font-bold">
          <Logo />
        </div>
        <nav className="hidden md:flex gap-8">
          {navigationbarItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-xl transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="hidden md:flex gap-4 items-center">
          <ThemeSwitcher />
          {isLoading && <Spinner />}

          {!isAuthenticated && !isLoading && (
            <>
              {/* <SignInButton mode="modal">
                <Button variant={"ghost"} size={"sm"}>
                  Login
                </Button>
              </SignInButton> */}

              <SignInButton mode="modal">
                <Button size={"lg"}>Get started</Button>
              </SignInButton>
            </>
          )}

          {isAuthenticated && !isLoading && (
            <>
              <Button asChild variant={"ghost"} size={"lg"}>
                <Link href={"/documents"}> Notes</Link>
              </Button>

              <Avatar>
                <UserButton />
              </Avatar>
            </>
          )}
        </div>
        <div className="flex items-center gap-4 md:hidden">
          <ThemeSwitcher />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? (
              <X className="size-5" />
            ) : (
              <Menu className="size-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute px-6 top-16 inset-x-0 bg-background/95 backdrop-blur-lg border-b"
        >
          <div>
            <Avatar>
              <UserButton />
            </Avatar>
          </div>
          <div className="container py-4 flex flex-col gap-4">
            {navigationbarItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="py-2 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-2 pt-2 border-t">
              {isLoading && <Spinner />}

              {!isAuthenticated && !isLoading && (
                <>
                  <SignInButton mode="modal">
                    <Button variant={"ghost"} size={"lg"}>
                      Login
                    </Button>
                  </SignInButton>

                  <SignInButton mode="modal">
                    <Button size={"lg"}>Get started</Button>
                  </SignInButton>
                </>
              )}

              {isAuthenticated && !isLoading && (
                <>
                  <Button asChild variant={"outline"} size={"lg"}>
                    <Link href={"/documents"}>Enter Notes</Link>
                  </Button>
                </>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </header>
  );
};

export default Navigationbar;
