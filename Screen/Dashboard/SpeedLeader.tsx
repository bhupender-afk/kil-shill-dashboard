import { TrendingUp, TrendingDown, Clock } from "lucide-react";
import { Card } from "../../components/ui/card";
import { Badge } from "@/components/ui/badge";

interface FastestItemProps {
    rank: number;
    name: string;
    calls: number;
    category: string;
    time: string;
}

const MarketItem = ({ rank, name, calls, category, time }: FastestItemProps) => {
    return (
        <div className="flex items-center justify-between gap-4 w-full">
            <div className="flex items-center gap-4">
                {/* <span className="w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                    {rank}
                </span> */}
                <Badge variant={'ghost'} className="w-10 h-10 bg-white/10 font-bold text-lg text-white">{rank}</Badge>

                <div>
                    <p className="text-white font-semibold text-lg">{name}</p>
                    <p className="text-gray-400 text-sm">{calls} calls</p>
                </div>
            </div>

            {/* Right Section */}
            <div className="flex flex-row items-center gap-2">
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {category}
                </span>
                <div className="flex flex-col items-center justify-center">
                    <span className="text-white font-semibold text-lg">{time}</span>
                    <span className="text-gray-400 text-xs">avg time</span>
                </div>

            </div>
        </div>
    );
};

export const SpeedLeader = () => {
    const data = [
        { rank: 1, name: "CryptoKing", calls: 45, category: "Crypto", time: "2.1d" },
        { rank: 2, name: "QuickTrade", calls: 32, category: "Forex", time: "2.4d" },
        { rank: 3, name: "FastBull", calls: 28, category: "Crypto", time: "2.8d" },
        { rank: 4, name: "RapidFX", calls: 41, category: "Forex", time: "3.2d" },
        { rank: 5, name: "SpeedStock", calls: 19, category: "Stocks", time: "3.5d" },
    ];

    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs ">
            <Card className="mx-0 px-6 gap-0 bg-background">
                <h2 className="text-white text-2xl font-bold flex items-center gap-2">
                    <Clock  color="white"/> Fastest to Target
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                  KOLs with shortest average time-to-target (last 30 days)
                </p>

                <div className="flex flex-col gap-4 mt-6">
                    {data.map((item) => (
                        <Card className="p-4 bg-[rgba(256,256,256,0.01)]">


                            <MarketItem key={item.rank} {...item} />
                        </Card>
                    ))}
                </div>
            </Card>
        </div>
    );
};
