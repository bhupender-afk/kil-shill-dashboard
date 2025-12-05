"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { type Icon } from "@tabler/icons-react"
import { cn } from "@/lib/utils"

import { Button } from "@/components/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: Icon
  }[]
}) {
  const pathname = usePathname()

  const isActive = (url: string) => {
    return pathname === url || pathname.startsWith(url + '/')
  }

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2 pt-4">
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <Button
                asChild
                variant={isActive(item.url) ? "gradient" : "ghost"}
                className={cn(
                  "h-10 p-4 justify-start w-full transition-all duration-200 mb-2",
                  isActive(item.url)
                    ? "text-black font-semibold shadow-md"
                    : "text-muted-foreground hover:text-foreground hover:bg-accent/50"
                )}
              >
                <Link href={item.url}>
                  {item.icon && (
                    <item.icon
                      className={cn(
                        "transition-colors",
                        isActive(item.url) ? "text-black" : "text-muted-foreground"
                      )}
                    />
                  )}
                  <span>{item.title}</span>
                </Link>
              </Button>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
