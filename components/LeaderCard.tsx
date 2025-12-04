import React from "react";
import { TrendingUp, TrendingDown } from "lucide-react";

interface LeaderCardProps {
  rank: number;
  name: string;
  handle: string;
  percent: number;
  calls: number;
  up : boolean;
}

const LeaderCard: React.FC<LeaderCardProps> = ({
  rank,
  name,
  handle,
  percent,
  calls,
    up
}) => {
  const isPositive = percent >= 0;

  return (
    <div className="flex flex-row items-center justify-between w-full bg-white/5 rounded-lg px-3 py-2">
      
      {/* LEFT SECTION */}
      <div className="flex items-center gap-3">
        <span className="text-gray-400 font-semibold text-sm">#{rank}</span>

        {/* Avatar */}
        <div className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center text-white text-lg font-semibold">
          {name.charAt(0).toUpperCase()}
        </div>

        <div className="flex flex-col">
          <span className="text-white font-semibold text-base">{name}</span>
          <span className="text-gray-500 text-sm">{handle}</span>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col items-end">
        <div className="flex items-center gap-1">
          <span
            className={`font-bold text-sm ${
              isPositive ? "text-green-500" : "text-red-500"
            }`}
          >
            {percent}%
          </span>

          {up ? (
            <TrendingUp className="w-4 h-4 text-green-500" />
          ) : (
            <TrendingDown className="w-4 h-4 text-red-500" />
          )}
        </div>

        <span className="text-gray-500 text-sm">{calls} calls</span>
      </div>
    </div>
  );
};

export default LeaderCard;
