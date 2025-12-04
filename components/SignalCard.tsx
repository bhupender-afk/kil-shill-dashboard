import React from "react";
import { Clock, ExternalLink } from "lucide-react";
import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import {
    Cable,
    Globe,
    Send,
    Twitter,
    MessageCircle,
} from "lucide-react";

interface SignalCardProps {
    image: string;
    status: string;
    statusColor: string;
    platform: string;
    platformColor: string;
    user: string;
    handle: string;
    time: string;
    text: string;
}

const platformStyles: Record<
    string,
    {
        icon: any;
        badgeBg: string;
        badgeText: string;
        cardBorder: string;
        cardBg: string;
    }
> = {
    X: {
        icon: Twitter,
        badgeBg: "bg-[#0A84FF]/20",
        badgeText: "text-[#0A84FF]",
        cardBorder: "border-[#0A84FF]",
        cardBg: "bg-gradient-to-br from-[#0A84FF]/10 to-black",

    },

    Telegram: {
        icon: Send,
        badgeBg: "bg-[#2AABEE]/20",
        badgeText: "text-[#2AABEE]",
        cardBorder: "border-[#2AABEE]",
        cardBg: "bg-gradient-to-br from-[#2AABEE]/10 to-black",
    },

    Web: {
        icon: Globe,
        badgeBg: "bg-green-400/20",
        badgeText: "text-green-400",
        cardBorder: "border-green-400",
        cardBg: "bg-gradient-to-br from-green-400/10 to-black",
    },

    Discord: {
        icon: MessageCircle,
        badgeBg: "bg-indigo-400/20",
        badgeText: "text-indigo-400",
        cardBorder: "border-indigo-400",
        cardBg: "bg-gradient-to-br from-indigo-400/10 to-black",
    },

    Default: {
        icon: Cable,
        badgeBg: "bg-gray-500/20",
        badgeText: "text-gray-300",
        cardBorder: "border-gray-600",
        cardBg: "bg-gradient-to-br from-gray-800 to-black",
    },
};
const statusColors: Record<string, string> = {
    Accurate: "bg-blue-500 text-white",
    Pending: "bg-[hsl(217_91%_60%)] text-white",
};


const SignalCard: React.FC<SignalCardProps> = ({
    image,
    status,
    statusColor,
    platform,
    platformColor,
    user,
    handle,
    time,
    text,
}) => {
    const platformData = platformStyles[platform] || platformStyles.Default;
    const Icon = platformData.icon;



    return (
        <Card className="py-0 overflow-hidden gap-0 bg-background">

            {/* IMAGE */}
            <div className="relative w-full h-40">
                <img
                    src={image}
                    className="w-full h-full object-cover"
                    alt="signal-image"
                />

                {/* PLATFORM BADGE */}
                {/* <span
                    className={`absolute top-3 right-3 px-2 py-1 rounded-2xl text-xs font-semibold flex items-center gap-1  border
            ${platformData.badgeBg} ${platformData.badgeText} ${platformData.cardBorder}
            `}
                >
                    <Icon size={14} />
                    {platform}
                </span> */}
                <Badge className="absolute top-3 right-3 " variant={"ghost"}>
                     <Icon size={14} />
                    {platform}
                </Badge>

                {/* STATUS BADGE */}
                <Badge className={`absolute bottom-3 left-3`}>
                    {status}
                </Badge>
            </div>

            {/* CONTENT */}
            <div className="p-3 flex flex-col gap-3 ">

                {/* HEADER */}
                <div className="flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <Badge className="rounded-2xl h-5 w-5">{user.charAt(0)}</Badge>
                        <div>
                            <p className="text-white font-semibold text-xs">{user}</p>
                            <p className="text-gray-500 text-xs">{handle}</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        <span className="text-gray-400 text-xs">{time}</span>

                    </div>
                </div>

                {/* DESCRIPTION */}
                <p className="text-gray-300 text-xs leading-5">{text}</p>

                {/* FOOTER */}
                <div className="flex justify-between items-center pt-2">
                    <Badge variant={'secondary'}>
                        Signal
                    </Badge>

                    <ExternalLink className="w-4 h-4 text-gray-400 hover:text-white cursor-pointer" />
                </div>
            </div>
        </Card>
    );
};

export default SignalCard;
