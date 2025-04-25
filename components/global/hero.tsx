"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { SparklesIcon } from "lucide-react";
import { Container } from "@/components/ui/container";
import { AnimatedGroup } from "@/components/ui/animated-group";
import { TextEffect } from "@/components/ui/text-effect";
import { Button } from "@/components/ui/button";
import { Spotlight } from "@/components/ui/spotlight";
import { Spinner } from "@/components/tools/spinner";
import EtherealNotesDashboardDark from "@/public/assets/dashboard-dark.png";
import EtherealNotesDashboardLight from "@/public/assets/dashboard-light.png";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton } from "@clerk/nextjs";

const transitionVariants = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const Hero = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();
  return (
    <Container
      size={"2xl"}
      height={"full"}
      padding={"md"}
      id="hero"
      className="relative overflow-hidden"
    >
      <Spotlight />
      <main className="overflow-hidden">
        <section>
          <div className="relative pt-24 md:pt-36">
            <div className="absolute inset-0 -z-10 size-full [background:radial-gradient(125%_125%_at_50%_100%,transparent_0%,var(--color-background)_75%)]"></div>
            <div className="mx-auto max-w-7xl px-6">
              <div className="text-center sm:mx-auto lg:mr-auto lg:mt-0">
                <AnimatedGroup variants={transitionVariants}>
                  <Link
                    href="#hero"
                    className="hover:bg-background dark:hover:border-t-border bg-muted group mx-auto flex w-fit items-center gap-4 rounded-full border p-1 pl-4 shadow-md shadow-zinc-950/5 transition-colors duration-300 dark:border-t-white/5 dark:shadow-zinc-950"
                  >
                    <span className="text-foreground text-sm">
                      Introducing Ethereal Notes
                    </span>
                    <span className="dark:border-background block h-4 w-0.5 border-l bg-white dark:bg-zinc-700"></span>

                    <div className="bg-background group-hover:bg-muted size-6 overflow-hidden rounded-full duration-500">
                      <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
                        <span className="flex size-6">
                          <SparklesIcon className="m-auto size-3" />
                        </span>
                        <span className="flex size-6">
                          <SparklesIcon className="m-auto size-3" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </AnimatedGroup>

                <TextEffect
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  as="h1"
                  className="mt-8 text-balance text-6xl md:text-7xl lg:mt-16 xl:text-[5.25rem]"
                >
                  Ethereal Notes, Where Productivity Meets Elegance
                </TextEffect>
                <TextEffect
                  per="line"
                  preset="fade-in-blur"
                  speedSegment={0.3}
                  delay={0.5}
                  as="p"
                  className="mx-auto mt-8 max-w-2xl text-balance text-lg"
                >
                  Ethereal Notes takes your organization and creativity to new
                  heights. Whether you&apos;re a student, professional, or
                  creative thinker.
                </TextEffect>

                <AnimatedGroup
                  variants={{
                    container: {
                      visible: {
                        transition: {
                          staggerChildren: 0.05,
                          delayChildren: 0.75,
                        },
                      },
                    },
                    ...transitionVariants,
                  }}
                  className="mt-12 flex flex-col items-center justify-center gap-2 md:flex-row"
                >
                  {/* user check */}
                  {isLoading && (
                    <div className="w-full flex items-center justify-center">
                      <Spinner size="lg" />
                    </div>
                  )}

                  {isAuthenticated && !isLoading && (
                    <div key={1}>
                      <Button asChild size={"lg"}>
                        <Link href="/documents">Get started</Link>
                      </Button>
                    </div>
                  )}

                  {!isAuthenticated && !isLoading && (
                    <div key={2} className="flex flex-col items-center justify-center gap-2 md:flex-row">
                      <SignInButton mode="modal">
                        <Button variant={"ghost"} size={"lg"}>
                          Login
                        </Button>
                      </SignInButton>
                      <SignUpButton mode="modal">
                        <Button size={"lg"}>Sign up</Button>
                      </SignUpButton>
                    </div>
                  )}
                </AnimatedGroup>
              </div>
            </div>

            <AnimatedGroup
              variants={{
                container: {
                  visible: {
                    transition: {
                      staggerChildren: 0.05,
                      delayChildren: 0.75,
                    },
                  },
                },
                ...transitionVariants,
              }}
            >
              <div className="relative -mr-56 mt-8 overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
                <div
                  aria-hidden
                  className="bg-linear-to-b to-background absolute inset-0 z-10 from-transparent from-35%"
                />
                <div className="inset-shadow-2xs ring-background dark:inset-shadow-white/20 bg-background relative mx-auto max-w-6xl overflow-hidden rounded-2xl border shadow-lg shadow-zinc-950/15 ring-1">
                  <Image
                    className="bg-background  relative hidden rounded-2xl dark:block"
                    src={EtherealNotesDashboardDark}
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                  <Image
                    className="z-2 border-border/25  relative rounded-2xl border dark:hidden"
                    src={EtherealNotesDashboardLight}
                    alt="app screen"
                    width="2700"
                    height="1440"
                  />
                </div>
              </div>
            </AnimatedGroup>
          </div>
        </section>
      </main>
    </Container>
  );
};

export default Hero;
