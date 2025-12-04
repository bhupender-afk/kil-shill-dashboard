import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
    Twitter,
    Send,
    Youtube,
    Globe,
    Sparkles,
    Search,
} from "lucide-react";

export default function PlatformCoverage() {
    return (
        <>
            <h1 className="font-semibold  text-white mb-0 px-5 md:px-8 mt-4 text-2xl sm:text-3xl md:text-4xl">Platform Coverage</h1>
            <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-6 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
                <Card className="bg-background">
                    <div className="flex flex-col items-center text-center">
                        <Twitter size={40} className="text-green-400 mb-3" />

                        <p className="text-gray-300 mb-1">X (Twitter)</p>

                        <h2 className="text-3xl font-bold text-white-400">33,820</h2>
                        <p className="text-gray-400 text-sm">Trading calls tracked</p>

                        <button className="mt-4 px-4 py-1 rounded-xl text-sm bg-green-600/20 text-green-400 ">
                            Live Tracking
                        </button>
                    </div>
                </Card>


                <Card className="bg-background">
                    <div className="flex flex-col items-center text-center">
                        <Send size={40} className="text-green-400 mb-3" />

                        <p className="text-gray-300 mb-1">Telegram</p>

                        <h2 className="text-3xl font-bold text-white-300">16,802</h2>
                        <p className="text-gray-400 text-sm">Signals monitored</p>

                        <button className="mt-4 px-4 py-1 rounded-xl bg-green-600/20 text-green-400 text-sm">
                            Live Tracking
                        </button>
                    </div>
                </Card>



                <Card className="bg-background">
                    <div className="flex flex-col items-center text-center">
                        <Youtube size={40} className="text-green-400 mb-3" />

                        <p className="text-gray-300 mb-1">YouTube</p>

                        <h2 className="text-3xl font-bold  text-white-400">10,655</h2>
                        <p className="text-gray-400 text-sm">Video predictions</p>

                        <button className="mt-4 px-4 py-1 rounded-xl bg-green-600/20 text-green-400 text-sm">
                            Live Tracking
                        </button>
                    </div>
                </Card>




                <Card className="bg-background">
                    <div className="flex flex-col items-center text-center">
                        <Globe size={40} className="text-green-400 mb-3" />

                        <p className="text-gray-300 mb-1">Web</p>

                        <h2 className="text-3xl font-bold text-white-400">8,529</h2>
                        <p className="text-gray-400 text-sm">Website analyses</p>

                        <button className="mt-4 px-4 py-1 rounded-xl bg-green-600/20 text-green-400 text-sm">
                            Live Tracking
                        </button>
                    </div>
                </Card>
            </div>
            <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1    gap-2 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-1 @5xl/main:grid-cols-1">
                <Card className="bg-background gap-0" >


                    <div className="flex justify-center mb-4">
                        <Sparkles size={32} className="text-green-400" />
                    </div>

                    <h2 className="text-center text-4xl font-semibold mb-4">
                        Analyze Any Finance Influencer
                    </h2>

                    <p className="text-center text-gray-400 max-w-2xl mx-auto">
                        Get instant accuracy scores, risk analysis, and performance history
                        for any trader or analyst.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
                        <div className="flex items-center bg-[#0D111A] border border-white/10 px-4 py-3 rounded-xl w-full sm:w-96">
                            <Search className="text-gray-400" size={18} />
                            <input
                                type="text"
                                placeholder="Enter @username, Telegram handle, etc."
                                className="bg-transparent ml-2 text-sm outline-none w-full"
                            />
                        </div>


                        <Button variant={"gradient"} className=" py-5">
                            <Sparkles size={18} /> Analyze Now
                        </Button>
                    </div>

                    <p className="text-center text-gray-400 text-sm mt-5">
                        🔥 Try: @cryptoking, @stocksage, or forexmaster.com
                    </p>
                </Card>
            </div>
        </>


    );
}
