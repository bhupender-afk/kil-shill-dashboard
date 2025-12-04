"use client"

import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"


import data from "./data.json"
import { Button } from "@/components/ui/button"
import LayoutWrapper from "../Layout/LayoutWrapper"
import { Hero } from "@/Screen/Dashboard/Hero"
import TreadingKol from "./TreadingKol"
import TreadingSignal from "./TreadingSignal"
import PlatformCoverage from "./PlatformCoverage"
import BlogSection from "./BlogSection"
import { Insights } from "./Insights"

export default function Page() {
  return (
    <>
      <LayoutWrapper label="Dashboard">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
    
          <Hero/>

         
          <DataTable data={data} />
          <TreadingKol/>
          <TreadingSignal/>
          <Insights/>

          <BlogSection/>
          <PlatformCoverage/>
        </div>
      </LayoutWrapper>
    </>
  )
}
