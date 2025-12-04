"use client"

import { Card, CardHeader } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import LeaderCard from "@/components/LeaderCard"
import SignalCard from "@/components/SignalCard";

export default function TreadingSignal() {
    const cardsData = [
        {
            id: 1,
            status: "Accurate", // Accurate | Pending
            statusColor: "blue",
            platform: "X", // X | Telegram | Web
            platformColor: "cyan",
            image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop&crop=entropy&auto=format",
            user: "CryptoKing",
            handle: "@cryptoking",
            time: "2h ago",
            text: "BTC breakout above $45K resistance – target $48K within...",
        },
        {
            id: 2,
            status: "Pending",
            statusColor: "yellow",
            platform: "Web",
            platformColor: "cyan",
            image:
                "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop&crop=entropy&auto=format",
            user: "TelegramAlpha",
            handle: "@telegramalpha",
            time: "3h ago",
            text: "SOLANA ALERT: Strong breakout pattern forming. Entry...",
        },
        {
            id: 1,
            status: "Accurate", // Accurate | Pending
            statusColor: "blue",
            platform: "X", // X | Telegram | Web
            platformColor: "cyan",
            image:
                "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=300&fit=crop&crop=entropy&auto=format",
            user: "CryptoKing",
            handle: "@cryptoking",
            time: "2h ago",
            text: "BTC breakout above $45K resistance – target $48K within...",
        },
        {
            id: 2,
            status: "Pending",
            statusColor: "yellow",
            platform: "Telegram",
            platformColor: "cyan",
            image:
                "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=300&fit=crop&crop=entropy&auto=format",
            user: "TelegramAlpha",
            handle: "@telegramalpha",
            time: "3h ago",
            text: "SOLANA ALERT: Strong breakout pattern forming. Entry...",
        },
        {
            id: 1,
            status: "Accurate", // Accurate | Pending
            statusColor: "blue",
            platform: "Web", // X | Telegram | Web
            platformColor: "cyan",
            image:
                "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop&crop=entropy&auto=format",
            user: "CryptoKing",
            handle: "@cryptoking",
            time: "2h ago",
            text: "BTC breakout above $45K resistance – target $48K within...",
        },
        {
            id: 2,
            status: "Pending",
            statusColor: "yellow",
            platform: "Discord",
            platformColor: "cyan",
            image:
                "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop&crop=entropy&auto=format",
            user: "TelegramAlpha",
            handle: "@telegramalpha",
            time: "3h ago",
            text: "SOLANA ALERT: Strong breakout pattern forming. Entry...",
        },

    ];

    return (
        <div >
            <h1 className="font-semibold  text-white mb-8 px-5 lg:px-8 mt-4 text-2xl sm:text-3xl md:text-4xl">Top Signals</h1>

            <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1    gap-2 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-6">

                {cardsData.map((card) => (
                    <SignalCard
                        key={card.id}
                        image={card.image}
                        status={card.status}
                        statusColor={card.statusColor}
                        platform={card.platform}
                        platformColor={card.platformColor}
                        user={card.user}
                        handle={card.handle}
                        text={card.text}
                        time={card.time}
                    />
                ))}




            </div>
        </div>
    )
}
