import { AssetHeatMap } from '@/Screen/Dashboard/AssetHeatMap'
import { ConsensusIndex } from '@/Screen/Dashboard/ConsensusIndex'
import RiskAnalayis from '@/Screen/Dashboard/RiskAnalayis'
import { SpeedLeader } from '@/Screen/Dashboard/SpeedLeader'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Activity, Badge } from 'lucide-react'
import React from 'react'

export const Insights = () => {
    return (
        <>
        <div className='px-5 lg:px-8'>
            <div className='flex flex-row items-center gap-3 mt-8'>
                <Activity/>
                <div className='font-semibold  text-white text-2xl sm:text-3xl md:text-4xl'>Insights Dashboard</div>
            </div>
            <div className='text-muted-foreground text-xs sm:text-sm md:text-md my-1'>Advanced analytics and consensus data for professional traders</div>
        </div>
            <Tabs   defaultValue="outline" className="w-full flex-col justify-start gap-6">
                <div className='flex items-center gap-2 sm:gap-4 w-full px-3 sm:px-5 lg:px-7 overflow-x-auto'>
                    <TabsList className="**:data-[slot=badge]:bg-muted-foreground/30 **:data-[slot=badge]:size-5 **:data-[slot=badge]:rounded-full **:data-[slot=badge]:px-1 flex flex-nowrap min-w-full sm:w-full gap-1 sm:gap-2">
                        <TabsTrigger value="outline" className="text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-3 md:px-4">
                            <span className="hidden sm:inline">Consensus Index</span>
                            <span className="sm:hidden">Consensus</span>
                        </TabsTrigger>
                        <TabsTrigger value="speed-leaders" className="text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-3 md:px-4">
                            <span className="hidden sm:inline">Speed Leaders</span>
                            <span className="sm:hidden">Speed</span>
                        </TabsTrigger>
                        <TabsTrigger value="asset-heapmap" className="text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-3 md:px-4">
                            <span className="hidden sm:inline">Asset Heatmap</span>
                            <span className="sm:hidden">Heatmap</span>
                        </TabsTrigger>
                        <TabsTrigger value="risk-analysis" className="text-xs sm:text-sm md:text-base whitespace-nowrap px-2 sm:px-3 md:px-4">
                            <span className="hidden sm:inline">Risk Analysis</span>
                            <span className="sm:hidden">Risk</span>
                        </TabsTrigger>
                    </TabsList>
                </div>

                {/**Consensus Index**/}
                <TabsContent
                    value="outline"
                    className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6 "
                >
                    <ConsensusIndex/>


                </TabsContent>

                {/**Speed Leaders**/}
                <TabsContent
                    value="speed-leaders"
                    className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
                >
                    <SpeedLeader/>
                </TabsContent>

                {/**Asset Heapmap**/}
                <TabsContent
                    value="asset-heapmap"
                    className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
                >
                    <AssetHeatMap/>
                </TabsContent>


                {/**risk analysis**/}
                <TabsContent
                    value="risk-analysis"
                    className="relative flex flex-col gap-4 overflow-auto px-4 lg:px-6"
                >
                    <RiskAnalayis/>
                </TabsContent>

            </Tabs>

        </>
    )
}
