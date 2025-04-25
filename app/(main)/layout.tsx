"use client";

import { useConvexAuth } from "convex/react";
import { redirect } from "next/navigation";
import { Spinner } from "@/components/tools/spinner";
import { SearchCommand } from "@/components/tools/search-command";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { Container } from "@/components/ui/container";
import { AppSidebar } from "@/components/main/app-sidebar";


const MainLayout = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated, isLoading } = useConvexAuth();

  if (isLoading) {
    return (
      <Container
        size={"2xl"}
        height={"full"}
        padding={"md"}
        alignment={"center"}
      >
        <Spinner size="xxl" />
      </Container>
    );
  }

  if (!isAuthenticated) {
    return redirect("/");
  }

  return (
    <SidebarProvider>
      <AppSidebar />

      <main className="flex-1 h-full overflow-y-auto">
        <SidebarTrigger />
        <SearchCommand />

        {children}
      </main>
    </SidebarProvider>
  );
};

export default MainLayout;
