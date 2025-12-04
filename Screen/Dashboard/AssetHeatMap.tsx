import { TrendingUp, TrendingDown, Clock, BarChart3 } from "lucide-react";
import { Card } from "../../components/ui/card";

interface AssetCardProps {
    name: string;
    winRate: string;
    calls: string;
    rr: string;
    percent: number;
}

const MarketItem = ({ name, winRate, calls, rr, percent }: AssetCardProps) => {
    return (
        <div className="flex-col items-center justify-between gap-4 w-full">
            <div className="flex justify-between items-start">
                <h3 className="text-white font-semibold text-xl">{name}</h3>
                <span className="bg-green-600/20 text-green-400 px-3 py-1 rounded-full text-xs font-semibold">
                    {calls}
                </span>
            </div>
            <div className="flex justify-between items-start my-3 mb-1">
                <span className="text-sm">Win</span>
                <div className="text-white text-lg font-semibold">{winRate}</div>
            </div>


            <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                <div
                    className="h-full bg-green-500"
                    style={{ width: `${percent}%` }}
                />
            </div>
              <div className="flex justify-between items-start mt-4">
                <span className="text-sm">Avg Risk:Reward</span>
              <div className="text-white-400 font-bold">{rr}</div>
            </div>

            
        </div>
    );
};

export const AssetHeatMap = () => {
    const data = [
        { name: "Crypto", winRate: "67.2%", calls: "15,430 calls", rr: "2.3x", percent: 67 },
        { name: "Stocks", winRate: "61.8%", calls: "8,920 calls", rr: "1.9x", percent: 62 },
        { name: "Forex", winRate: "58.4%", calls: "12,340 calls", rr: "1.7x", percent: 58 },
    ];
    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs ">
            <Card className="mx-0 px-6 gap-0 bg-background">
                <h2 className="text-white text-2xl font-bold flex items-center gap-2">
                    <BarChart3 className="text-green-400" /> Performance by Asset Class
                </h2>
                {/* <h2 className="text-white text-2xl font-bold flex items-center gap-2">
                    <Clock color="yellow" /> Fastest to Target
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                    KOLs with shortest average time-to-target (last 30 days)
                </p> */}

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
                    {data.map((item) => (
                        <Card className="p-4 bg-[rgba(256,256,256,0.01)]">


                            <MarketItem key={item.name} {...item} />
                        </Card>
                    ))}
                </div>
            </Card>
        </div>
    );
};
