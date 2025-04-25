"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import EtherealError from "@/public/error/ethereal-logo-error.svg"
import { Container } from "@/components/ui/container";

const Error = () => {
  return (
    <Container   size={"2xl"}
    height={"full"}
    padding={"md"}

    alignment={"center"} className="space-y-4">
      <Image
        src={EtherealError}
        height="300"
        width="300"
        alt="Error"
        className="dark:hidden"
      />
      
      <h1 className="text-3xl font-medium">Something went wrong...please try again!</h1>

      <Button asChild>
        <Link href="/documents">Go back</Link>
      </Button>
    </Container>
  );
};

export default Error;
