"use client";

import * as React from "react";
import {  useRouter } from "next/navigation";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import { Logo } from "@/components/ui/logo";
import {
  LayoutDashboard,
  PlusCircle,
  Search,
  Settings,
  Trash,
} from "lucide-react";
import { useSearch } from "@/hooks/use-search";
import { useSettings } from "@/hooks/use-settings";
import { Item } from "../admin/item";
import { DocumentList } from "../admin/document-list";
import { TrashBox } from "../admin/trash-box";
import { AppUser } from "./app-user";
import Link from "next/link";

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const search = useSearch();
  const settings = useSettings();
  const router = useRouter();
  const create = useMutation(api.documents.create);
  // creating a new document
  const handleCreate = () => {
    const promise = create({ title: "Untitled" }).then((documentId) =>
      router.push(`/documents/${documentId}`)
    );

    toast.promise(promise, {
      loading: "Creating a new note...",
      success: "New note created successfully!",
      error: "Failed to create a new note.",
    });
  };
  return (
    <Sidebar {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild className="mb-5">
              <Link href="#">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg ">
                  <Logo />
                </div>
                <div className="grid flex-1 text-left text-md leading-tight">
                  <span className="truncate font-semibold">Ethereal Notes</span>
                  <span className="truncate text-xs">Production</span>
                </div>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu className="space-y-3">
          <SidebarMenuItem>
            <SidebarMenuButton asChild>
              <Item label="Dashboard" icon={LayoutDashboard} />
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* search */}
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Item
                label="Search"
                icon={Search}
                isSearch
                onClick={search.onOpen}
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* settings */}
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
            
              <Item
                label="Settings"
                icon={Settings}
                onClick={settings.onOpen}
              />
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* new page */}
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Item onClick={handleCreate} label="New Page" icon={PlusCircle} />
            </SidebarMenuButton>
          </SidebarMenuItem>
          {/* Documentlist */}
          <SidebarMenuItem>
            <DocumentList />
            {/* <Item onClick={handleCreate} icon={Plus} label="Add a new page" /> */}
          </SidebarMenuItem>
          {/* traash */}
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <Popover>
                <PopoverTrigger className="w-full mt-4">
                  <Item label="Trash Notes" icon={Trash} />
                </PopoverTrigger>
                <PopoverContent className="p-0 w-72">
                  <TrashBox />
                </PopoverContent>
              </Popover>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarContent>
      <SidebarFooter>
        <AppUser />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
