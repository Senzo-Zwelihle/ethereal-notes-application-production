import Link from "next/link";
import React from "react";
import { Logo } from "@/components/ui/logo";
import { navigationbarItems } from "@/data";

const Footer = () => {
  return (
    <footer className="py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <Link href="/" aria-label="go home" className="mx-auto block size-fit">
          <Logo />
        </Link>

        <div className="my-8 flex flex-wrap justify-center gap-6 text-sm">
          {navigationbarItems.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="text-muted-foreground hover:text-primary block duration-150"
            >
              <span>{link.label}</span>
            </Link>
          ))}
        </div>
       
        <span className="text-muted-foreground block text-center text-sm">
          {" "}
          © {new Date().getFullYear()} Ethereal Notes, All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
