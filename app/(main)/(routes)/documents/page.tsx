"use client";

import React from "react";
import SimonLeeHand from "@/public/assets/simon-lee-hand.png";
import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Container } from "@/components/ui/container";

const DocumentsPage = () => {
  const { user } = useUser();
  const router = useRouter();
  // Creating new note
  const create = useMutation(api.documents.create);
  const onCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created successfully!",
      error: "Error,failed to create a new note.",
    });
  };
  return (
    <Container
      size={"2xl"}
      height={"full"}
      padding={"md"}
      alignment={"center"}
      className="space-y-4"
    >
      <Image
        src={SimonLeeHand}
        width={300}
        height={300}
        quality={95}
        alt="Simon lee Hand"
      />

      <h1 className="text-lg font-medium">{user?.firstName}&apos;s Notes</h1>

      <Button onClick={onCreate} size={"lg"}>
        <PlusCircle className="h-4 w-4 mr-2" />
        Create a note
      </Button>
    </Container>
  );
};

export default DocumentsPage;
