"use client";

import React from "react";
import { useQuery } from "convex/react";
import { useParams } from "next/navigation";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Title } from "../admin/title";
import { Menu } from "../admin/menu";
import { Publish } from "../admin/publish";
import { Banner } from "../admin/banner";

export const PublishNote = () => {
  const params = useParams();
  const document = useQuery(api.documents.getById, {
    documentId: params.documentId as Id<"documents">,
  });

  if (document === undefined) {
    return (
      <nav className="bg-background  px-3 py-2 w-full flex items-center justify-between">
        <Title.Skeleton />
        <div className="flex items-center gap-x-2">
          <Menu.Skeleton />
        </div>
      </nav>
    );
  }

  if (document === null) {
    return null;
  }
  return (
    <>
      <div >
        <Title initialData={document} />

        <div className="flex items-center gap-x-2">
          <Publish initialData={document} />
          <Menu documentId={document._id} />
        </div>
      </div>
      {document.isArchived && <Banner documentId={document._id} />}
    </>
  );
};
