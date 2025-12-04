"use client"

import { Card, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LeaderCard from "@/components/LeaderCard"

export default function TreadingKol() {
    return (
        <div >
            <h1 className="font-semibold  text-white mb-8 px-5 lg:px-8 mt-4 text-2xl sm:text-3xl md:text-4xl">Treading Kols by Categoires</h1>

            <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1    gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
                <Card className="bg-background">
                    <div className="flex justify-between items-center px-6">
                        <h3 className="font-semibold text-lg text-white">Stock Market Experts</h3>
                        <Badge variant={'outline'}>Stock</Badge>
                    </div>

                    <div className="px-6 flex flex-col gap-4  items-center justify-center">
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <LeaderCard
                                rank={index + 1}
                                name="CryptoKing"
                                handle="@cryptoking"
                                percent={84.2}
                                calls={1247}
                                up={index % 2 === 0}
                            />
                        ))}
                    </div>


                </Card>

                <Card className="bg-background">
                    <div className="flex justify-between items-center px-6">
                        <h3 className="font-semibold text-lg text-white">Top Crypto Analysts</h3>
                        <Badge variant={'outline'}>Crypto</Badge>
                    </div>
                    <div className="px-6 flex flex-col gap-4  items-center justify-center">
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <LeaderCard
                                rank={index + 1}
                                name="CryptoKing"
                                handle="@cryptoking"
                                percent={84.2}
                                calls={1247}
                                up={index % 2 === 0}
                            />
                        ))}
                    </div>
                </Card>
                <Card className="bg-background">
                    <div className="flex justify-between items-center px-6">
                        <h3 className="font-semibold text-lg text-white">Forex Specialists</h3>
                        <Badge  variant={'outline'}>Forex</Badge>
                    </div>
                    <div className="px-6 flex flex-col gap-4  items-center justify-center">
                        {[1, 2, 3, 4, 5].map((item, index) => (
                            <LeaderCard
                                rank={index + 1}
                                name="CryptoKing"
                                handle="@cryptoking"
                                percent={84.2}
                                calls={1247}
                                up={index % 2 === 0}
                            />
                        ))}
                    </div>
                </Card>
            </div>
        </div>
    )
}
