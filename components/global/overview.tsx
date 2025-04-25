"use client";

import React from "react";

import {
  Pencil,
  Zap,
  Settings2,
  Lock,
  ImageIcon,
  Sparkles,
} from "lucide-react";
import { motion } from "motion/react";
import { Container } from "@/components/ui/container";
import { Heading } from "@/components/ui/heading";

const overviewItems = [
  {
    icon: Pencil,
    title: "Block-Based Editor",
    description:
      "Create flexible, structured content with a Notion-style block editor powered by Blocknote.",
  },
  {
    icon: Zap,
    title: "Real-Time Sync",
    description:
      "Instant collaboration and updates powered by Convex — no refresh needed.",
  },
  {
    icon: Settings2,
    title: "Custom Workflows",
    description:
      "Organize content your way with drag-and-drop blocks, nested pages, and more.",
  },
  {
    icon: Lock,
    title: "Privacy & Access Control",
    description:
      "Secure sessions, auth via Clerk, and role-based access to your content.",
  },
  {
    icon: ImageIcon,
    title: "Media-Friendly",
    description:
      "Easily upload and embed files with drag-and-drop support and EdgeStore integration.",
  },
  {
    icon: Sparkles,
    title: "Polished UX",
    description:
      "Smooth interactions, theme switching, command palette, and intuitive shortcuts built in.",
  },
];

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

const Overview = () => {
  return (
    <Container
      size={"2xl"}
      height={"full"}
      padding={"md"}
      id="overview"
      alignment={"center"}
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
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
              Overview
            </Heading>
            <p>
              Ethereal Notes is a powerful, minimal, and real-time collaborative
              note-taking app. Designed for creators, teams, and individuals who
              want to think clearly, write freely, and organize effortlessly.
            </p>
          </motion.div>
        </div>

        <div className="relative mx-auto grid max-w-4xl divide-x divide-y border *:p-12 sm:grid-cols-2 lg:grid-cols-3">
          {overviewItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.title}
                className="space-y-3"
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false }}
                custom={i}
              >
                <div className="flex items-center gap-2">
                  <Icon className="size-4" />
                  <h3 className="text-sm font-medium">{item.title}</h3>
                </div>
                <p className="text-sm">{item.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Container>
  );
};

export default Overview;
