import React from "react";
import { UserPlus, CheckCircle, TrendingUp, BadgeCheck, Users, PenLine, Clock, CheckCircle2, Send, Inbox } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import LayoutWrapper from "../Layout/LayoutWrapper";

export default function Setting() {
  return (
    <LayoutWrapper label="Submit Influencer">
      <div className="min-h-screen w-full  text-white p-6 md:p-10">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <UserPlus className="w-8 h-8 text-[#00fc8b]" />
          <h1 className="text-3xl font-semibold">Submit Influencer</h1>
        </div>

        <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-0 @xl/main:grid-cols-2 @5xl/main:grid-cols-4 mb-4">
          <Card className="bg-background space-x-0 space-y-0 gap-0 flex-col-gap-0 flex-row justify-between px-4 items-center">
            <div>
              <p className="text-gray-300 text-sm">Your Submissions</p>
              <p className="text-3xl font-semibold text-white mt-3">0</p>
            </div>
            <Send className="w-10 h-10 text-gray-300" />
          </Card>

          <Card className="bg-background space-x-0 space-y-0 gap-0 flex-col-gap-0 flex-row justify-between px-4 items-center">
            <div>
              <p className="text-gray-300 text-sm">Approved</p>
              <p className="text-3xl font-semibold text-emerald-400 mt-3">0</p>
            </div>
            <CheckCircle2 className="w-10 h-10 text-emerald-500" />
          </Card>



          <Card className="bg-background space-x-0 space-y-0 gap-0 flex-col-gap-0 flex-row justify-between px-4 items-center">
            <div>
              <p className="text-gray-300 text-sm">Pending Review</p>
              <p className="text-3xl font-semibold text-yellow-400 mt-3">0</p>
            </div>
            <Clock className="w-10 h-10 text-yellow-500" />
          </Card>


          <Card className="bg-background space-x-0 space-y-0 gap-0 flex-col-gap-0 flex-row justify-between px-4 items-center">
            <div>
              <p className="text-gray-300 text-sm">Auto-Approved Rate</p>
              <p className="text-3xl font-semibold text-cyan-400 mt-3">0%</p>
            </div>
            <PenLine className="w-10 h-10 text-cyan-500" />
          </Card>


        </div>

        <div  className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-6 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-0 @xl/main:grid-cols-2 @5xl/main:grid-cols-3 mb-4">
        
          <Card className="bg-background border border-white/5 col-span-2 rounded-2xl shadow-lg">
            <CardContent className="p-6 space-y-6 py-0">
              <h2 className="text-xl font-semibold mb-8">Influencer Submission Form</h2>

              {/* Platform */}
              <div className="space-y-2">
                <Label className="text-sm">Platform *</Label>
                <Input placeholder="Choose platform..." className="bg-background border-white/10" />
              </div>

              {/* Trading Categories */}
              <div className="space-y-2">
                <Label className="text-sm">Trading Categories *</Label>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {[
                    { label: "Crypto", id: "crypto" },
                    { label: "Stock", id: "stock" },
                    { label: "Forex", id: "forex" },
                  ].map((item) => (
                    <label
                      key={item.id}
                      className="flex items-center gap-3 p-3 rounded-xl bg-background border border-white/10 cursor-pointer hover:border-[#00fc8b]/50 transition"
                    >
                      <input
                        type="checkbox"
                        id={item.id}
                        className="w-5 h-5 rounded border-white/20 text-[#00fc8b] focus:ring-[#00fc8b]"
                      />
                      <span className="text-sm">{item.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Channel Name & Author */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className="text-sm">Channel/Account Name *</Label>
                  <Input placeholder="e.g., CryptoMaster" className="bg-background border-white/10" />
                </div>

                <div className="space-y-2">
                  <Label className="text-sm">Author/Real Name</Label>
                  <Input placeholder="Optional" className="bg-background border-white/10" />
                </div>
              </div>

              {/* Profile URL */}
              <div className="space-y-2">
                <Label className="text-sm">Profile URL *</Label>
                <Input placeholder="https://t.me/..." className="bg-background border-white/10" />
              </div>

              {/* Description */}
              <div className="space-y-2">
                <Label className="text-sm">Description & Background</Label>
                <Textarea
                  rows={5}
                  placeholder="Describe their background, trading style, achievements..."
                  className="bg-background border-white/10"
                />
              </div>

              {/* Confirmation */}
              <div className="bg-background border border-white/10 p-4 rounded-xl space-y-3">
                <div className="flex items-center gap-3">
                  <input type="checkbox" className="w-5 h-5 text-[#00fc8b]" />
                  <span className="font-semibold text-sm">I confirm that:</span>
                </div>

                <ul className="text-sm space-y-1 text-white/80 ml-6 list-disc">
                  <li>This influencer provides genuine trading signals.</li>
                  <li>I have verified their profile URL.</li>
                  <li>False submissions may result in restrictions.</li>
                  <li>I agree to the Submission Guidelines.</li>
                </ul>
              </div>

              {/* Submit */}
              <Button className="w-full h-11 rounded-xl bg-[#00fc8b] text-black font-semibold hover:bg-[#05e985] transition">
                Submit for Review
              </Button>
            </CardContent>
          </Card>

          <div>
            {/* Auto Approval Tips */}
            <Card className="bg-[#0f1f19] border border-white/5 rounded-2xl shadow-lg">
              <CardContent className="p-6 space-y-6">
                <h2 className="text-xl font-semibold">Auto-Approval Tips</h2>

                <div className="space-y-5">
                  {[
                    { icon: Users, title: "High Follower Count", desc: "10k+ followers boosts approval chances" },
                    { icon: BadgeCheck, title: "Verified Accounts", desc: "Verified profiles get priority" },
                    { icon: TrendingUp, title: "Active Engagement", desc: "Higher engagement improves approval" },
                    { icon: CheckCircle, title: "Complete Info", desc: "Fill all fields for best results" },
                  ].map((tip, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <tip.icon className="w-6 h-6 text-[#00fc8b]" />
                      <div>
                        <p className="font-semibold text-sm">{tip.title}</p>
                        <p className="text-xs text-white/70">{tip.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            {/* < !--Recent Submissions Section-- > */}
            <div className="bg-[#0f1f19] rounded-2xl p-6 border border-white/5 shadow-sm mt-8 h-80">
              <div className="flex items-center gap-2 mb-4">
                <Clock className="w-5 h-5 text-gray-300" />
                <h2 className="text-lg font-semibold text-white">Your Recent Submissions</h2>
              </div>

              <div className="flex flex-col items-center justify-center py-10 text-gray-400">
                <Inbox className="w-14 h-14 text-gray-400" />
                <p className="mt-2 text-gray-300 text-sm">No submissions yet</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </LayoutWrapper>

  );
}




