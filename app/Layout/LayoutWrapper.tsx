"use client"
import { AppSidebar } from "@/components/app-sidebar"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import { SiteHeader } from "@/components/site-header"
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar"

import data from "../dashboard/data.json"
import { Button } from "@/components/ui/button"


type LayoutType = {
  label?: string,
  children: React.ReactNode
}


export default function LayoutWrapper({ label = "Dashboard", children }: LayoutType) {



  return (
    <SidebarProvider
      style={
        {
          "--sidebar-width": "calc(var(--spacing) * 72)",
          "--header-height": "calc(var(--spacing) * 12)",
        } as React.CSSProperties
      }
    >
      <AppSidebar variant="inset" />
      <SidebarInset>
        <SiteHeader label={label} />
        <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col gap-2">
            {children}
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  )
}


//  <Button variant="outlineGradient" style={{
//             "--btn-label": `"Leading"`,
//           } as React.CSSProperties} className="m-4" onClick={(event) => {
//             console.log("Clicked");
//           }}>
//             Leading
//           </Button>
//           <Button variant="gradient" className="m-4" onClick={(event) => {
//             console.log("Clicked");
//           }}>
//             Next
//           </Button>
//         </div >
