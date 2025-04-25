"use client";

import React from "react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";
import { cn } from "@/lib/utils";
import BlockNote from "@/components/svg/react";
import NextJSIcon from "@/components/svg/next-js";
import Tailwind from "@/components/svg/tailwind";
import { Logo } from "@/components/ui/logo";
import ConvexIcon from "@/components/svg/convex";
import ClerkIcon from "@/components/svg/clerk";
import RadixIcon from "@/components/svg/radix";

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const IntegrationCard = ({
  children,
  className,
  position,
  isCenter = false,
}: {
  children: React.ReactNode;
  className?: string;
  position?:
    | "left-top"
    | "left-middle"
    | "left-bottom"
    | "right-top"
    | "right-middle"
    | "right-bottom";
  isCenter?: boolean;
}) => {
  return (
    <div
      className={cn(
        "bg-background relative flex size-12 rounded-xl border dark:bg-transparent",
        className
      )}
    >
      <div
        className={cn(
          "relative z-20 m-auto size-fit *:size-6",
          isCenter && "*:size-8"
        )}
      >
        {children}
      </div>
      {position && !isCenter && (
        <div
          className={cn(
            "bg-linear-to-r to-muted-foreground/25 absolute z-10 h-px",
            position === "left-top" &&
              "left-full top-1/2 w-[130px] origin-left rotate-[25deg]",
            position === "left-middle" &&
              "left-full top-1/2 w-[120px] origin-left",
            position === "left-bottom" &&
              "left-full top-1/2 w-[130px] origin-left rotate-[-25deg]",
            position === "right-top" &&
              "bg-linear-to-l right-full top-1/2 w-[130px] origin-right rotate-[-25deg]",
            position === "right-middle" &&
              "bg-linear-to-l right-full top-1/2 w-[120px] origin-right",
            position === "right-bottom" &&
              "bg-linear-to-l right-full top-1/2 w-[130px] origin-right rotate-[25deg]"
          )}
        />
      )}
    </div>
  );
};

const Features = () => {
  return (
    <Container
      size={"2xl"}
      height={"full"}
      padding={"md"}
      id="features"
      alignment={"center"}
    >
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
      >
        <Heading
          font={"PolySans"}
          size={"xl"}
          spacing={"normal"}
          lineHeight={"none"}
          margin={"md"}
        >
          Features
        </Heading>
      </motion.div>

      <motion.div
        className=" dark:bg-background py-24 md:py-32"
        variants={fadeInUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        transition={{
          delay: 2,
          duration: 0.5,
          ease: "easeOut",
        }}
      >
        <div className="mx-auto max-w-5xl px-6">
          <div className="relative mx-auto flex max-w-sm items-center justify-between">
            <div className="space-y-6">
              <IntegrationCard position="left-top">
                <BlockNote />
              </IntegrationCard>
              <IntegrationCard position="left-middle">
                <NextJSIcon />
              </IntegrationCard>
              <IntegrationCard position="left-bottom">
                <Tailwind />
              </IntegrationCard>
            </div>
            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
              <div className="bg-muted relative z-20 rounded-2xl border p-1">
                <IntegrationCard
                  className="shadow-black-950/10 dark:bg-background size-16 border-black/25 shadow-xl dark:border-white/25 dark:shadow-white/10"
                  isCenter={true}
                >
                  <Logo />
                </IntegrationCard>
              </div>
            </div>
            <div
              role="presentation"
              className="absolute inset-1/3 bg-[radial-gradient(var(--dots-color)_1px,transparent_1px)] opacity-50 [--dots-color:black] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:[--dots-color:white]"
            ></div>

            <div className="space-y-6">
              <IntegrationCard position="right-top">
                <ConvexIcon />
              </IntegrationCard>
              <IntegrationCard position="right-middle">
                <ClerkIcon />
              </IntegrationCard>
              <IntegrationCard position="right-bottom">
                <RadixIcon />
              </IntegrationCard>
            </div>
          </div>
          <div className="mx-auto mt-12 max-w-lg space-y-6 text-center">
            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
              Built on a modern, flexible stack
            </h2>
            <p className="text-muted-foreground">
              Ethereal Notes is powered by technologies you know and trust —
              designed to scale with your ideas and enhance every part of your
              workflow.
            </p>
          </div>
        </div>
      </motion.div>
    </Container>
  );
};

export default Features;
