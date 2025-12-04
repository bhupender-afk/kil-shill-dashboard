import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { IconTrendingDown, IconTrendingUp } from "@tabler/icons-react";
import { Eye, Search } from "lucide-react";
import { LeftBox } from "./LeftBox";
// import { Badge } from "lucide-react";


export function Hero() {
    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 sm:px-6 md:px-8 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs">

            <Card className="@container/card p-6 sm:p-8 md:p-10 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
                <div className="flex flex-col justify-center order-2 lg:order-1">
                    <h2 className="font-semibold text-sm sm:text-base md:text-lg lg:text-xl text-[#00dea0] tracking-wide sm:tracking-wider lg:tracking-[4]">Live Intelligence</h2>
                    <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl leading-tight sm:leading-snug tracking-normal sm:tracking-wide lg:tracking-wider">Kill Shill</h1>
                    <h3 className="my-2 text-base sm:text-lg md:text-xl lg:text-2xl">Track which traders really deliver. Proof, accuracy, and win-rate, live.</h3>
                    <h1 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl leading-relaxed sm:leading-normal lg:leading-16 tracking-normal sm:tracking-wide lg:tracking-wider text-[#5ea2ff] mt-2">{"3+"}<span className="text-white font-normal"> influencers tracked with</span></h1>
                    <h1 className="font-bold text-xl sm:text-2xl md:text-2xl lg:text-3xl text-[#00dea0]">{"0+ "}<span className="text-white font-normal">calls analyzed using</span> <span className="text-white font-normal">AI-verified results</span></h1>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
                        <Button variant="gradient" size="lg" className="flex items-center justify-center gap-2 w-full sm:w-auto sm:flex-1 text-sm sm:text-base">
                            <Search className="w-4 h-4 sm:w-5 sm:h-5" />
                            Get Started</Button>
                        <Button variant="outlineGradient" size="lg" style={{
                            "--btn-label": `"See Live Dashboard"`,
                        } as React.CSSProperties}

                            className="flex items-center justify-center gap-2 w-full sm:w-auto sm:flex-1 text-sm sm:text-base whitespace-nowrap"
                        >
                            <Eye className="w-4 h-4 sm:w-5 sm:h-5" />
                            <span className="hidden sm:inline">See Live Dashboard</span>
                            <span className="sm:hidden">Live Dashboard</span></Button>
                    </div>

                </div>
                <div className="flex items-center justify-center order-1 lg:order-2">
                    <LeftBox/>
                </div>
            </Card>

        </div>
    )
}
