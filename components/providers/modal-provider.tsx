"use client";

import { useEffect, useState } from "react";
import { SettingsModal } from "@/components/settings/settings-modal";
import { CoverImageModal } from "@/components/settings/cover-image-modal";

export const ModalProvider = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <SettingsModal />
      <CoverImageModal />
    </>
  );
};
