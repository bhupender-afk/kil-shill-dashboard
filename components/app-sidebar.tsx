"use client"

import * as React from "react"
import Link from "next/link"
import {
  IconCamera,
  IconChartBar,
  IconDashboard,
  IconDatabase,
  IconFileAi,
  IconFileDescription,
  IconFileWord,
  IconFolder,
  IconHelp,
  IconInnerShadowTop,
  IconListDetails,
  IconReport,
  IconSearch,
  IconSettings,
  IconUsers,
  IconShieldLock,
  IconUserCheck,
} from "@tabler/icons-react"
import { useAuth } from "@/hooks/use-auth"
import { UserRole } from "@/lib/auth/auth-types"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user, isAdmin } = useAuth()

  const getNavMainItems = () => {
    const baseItems = [
      {
        title: "Dashboard",
        url: "/dashboard",
        icon: IconDashboard,
      },
      {
        title: "Leaderboard",
        url: "/leaderboard",
        icon: IconFolder,
      },
      {
        title: "Top Signals",
        url: "/top-signals",
        icon: IconUsers,
      },{
        title: "Insights",
        url: "/insights",
        icon: IconDashboard,
      },
      {
        title: "Analytics",
        url: "/analytics",
        icon: IconFolder,
      },
      {
        title: "Search",
        url: "/search",
        icon: IconUsers,
      },
      

    ]

    // if (isAdmin()) {
    //   return [
    //     ...baseItems,
    //     {
    //       title: "Admin Panel",
    //       url: "/admin",
    //       icon: IconShieldLock,
    //     },
    //     {
    //       title: "Users",
    //       url: "/users",
    //       icon: IconUserCheck,
    //     },
    //     {
    //       title: "Analytics",
    //       url: "/analytics",
    //       icon: IconChartBar,
    //     },
    //     {
    //       title: "Lifecycle",
    //       url: "/lifecycle",
    //       icon: IconListDetails,
    //     },
    //   ]
    // }

    return [
      ...baseItems,
      {
        title: "Analytics",
        url: "/analytics",
        icon: IconChartBar,
      },
    ]
  }

  const navClouds = [
    {
      title: "Capture",
      icon: IconCamera,
      isActive: true,
      url: "/capture",
      items: [
        {
          title: "Active Proposals",
          url: "/capture/active",
        },
        {
          title: "Archived",
          url: "/capture/archived",
        },
      ],
    },
    {
      title: "Proposal",
      icon: IconFileDescription,
      url: "/proposal",
      items: [
        {
          title: "Active Proposals",
          url: "/proposal/active",
        },
        {
          title: "Archived",
          url: "/proposal/archived",
        },
      ],
    },
    {
      title: "Prompts",
      icon: IconFileAi,
      url: "/prompts",
      items: [
        {
          title: "Active Prompts",
          url: "/prompts/active",
        },
        {
          title: "Archived",
          url: "/prompts/archived",
        },
      ],
    },
  ]

  const navSecondary = [
    {
      title: "Settings",
      url: "/settings",
      icon: IconSettings,
    },
    {
      title: "Get Help",
      url: "/help",
      icon: IconHelp,
    },
    {
      title: "Search",
      url: "/search",
      icon: IconSearch,
    },
  ]

  const documents = [
    {
      name: "Setting",
      url: "/setting",
      icon: IconDatabase,
    },
    {
      name: "Watch List",
      url: "/reports",
      icon: IconReport,
    },
   
  ]

  const userData = user ? {
    name: user.name,
    email: user.email,
    avatar: user.avatar || `https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`,
    role: user.role
  } : {
    name: "Guest User",
    email: "guest@example.com",
    avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=guest",
    role: UserRole.USER
  }

  return (
    <Sidebar collapsible="offcanvas" {...props} className="border-accent shadow-lg shadow-accent">
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              asChild
              className="data-[slot=sidebar-menu-button]:!p-1.5  "
            >
              <Link href="/dashboard">
                <IconInnerShadowTop className="!size-5" />
                <span className="text-base font-semibold">Killshill Dashboard</span>
              </Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent className="flex flex-col">
        <NavMain items={getNavMainItems()} />
        { <NavDocuments items={documents} />}
        {/* <NavSecondary items={navSecondary} className="mt-auto" /> */}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userData} />
      </SidebarFooter>
    </Sidebar>
  )
}