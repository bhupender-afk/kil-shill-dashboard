import { TrendingUp, TrendingDown } from "lucide-react";
import { Card } from "../../components/ui/card";

interface MarketItemProps {
    name: string;
    percent: number;
    price: string;
    change: string;
    isUp: boolean;
}

const MarketItem = ({ name, percent, price, change, isUp }: MarketItemProps) => {
    return (
        <div className="flex flex-col items-center gap-4 w-full">
            {/* Title */}
            <div className="w-full flex justify-between items-center">
                <h3 className="text-white font-semibold text-lg">{name}</h3>
                {isUp ? (
                    <TrendingUp className="text-green-400" size={18} />
                ) : (
                    <TrendingDown className="text-red-400" size={18} />
                )}
            </div>

            {/* Circle Progress (Fake for UI) */}
            <div className="relative">
                <div className="w-24 h-24 rounded-full border-[6px] border-green-500 flex items-center justify-center text-white font-semibold text-xl">
                    {percent}%
                </div>
            </div>

            {/* Price */}
            <div className="text-center">
                <p className="text-white font-semibold text-lg">{price}</p>
                <p className={`${isUp ? "text-green-400" : "text-red-400"} text-sm font-medium`}>
                    {change}
                </p>
            </div>
        </div>
    );
};

export const ConsensusIndex = () => {
    const data = [
        { name: "BTC", percent: 73, price: "$67,234", change: "+2.1%", isUp: true },
        { name: "ETH", percent: 68, price: "$3,456", change: "+1.8%", isUp: true },
        { name: "S&P500", percent: 45, price: "4,231", change: "-0.4%", isUp: false },
        { name: "EUR/USD", percent: 62, price: "1.0892", change: "+0.3%", isUp: true },
    ];

    return (
        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card  *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs ">
            <Card className="mx-0 px-6 gap-0 bg-background">
                <h2 className="text-white text-2xl font-bold flex items-center gap-2">
                    <span className="text-white-400">〽️</span> Market Consensus Index
                </h2>
                <p className="text-gray-400 text-sm mt-1">
                    Percentage of active KOLs agreeing on directional bias
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 mt-6 ">
                    {data.map((item) => (
                        <Card className="p-4 bg-[rgba(256,256,256,0.001)] ">


                            <MarketItem key={item.name} {...item} />
                        </Card>
                    ))}
                </div>
            </Card>
        </div>
    );
};
