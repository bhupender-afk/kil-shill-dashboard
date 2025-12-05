import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ArrowRight, Clock, User } from "lucide-react";

const blogPosts = [
  {
    id: 1,
    title: "The Psychology Behind Successful Trading Signals",
    description:
      "Understanding the cognitive biases that influence KOL predictions and how to filter noise from actionable insights.",
    author: "Dr. Sarah Chen",
    timeAgo: "2 days ago",
    readTime: "8 min read",
    category: "Psychology",
    categoryColor: "bg-blue-600",
    image:
      "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=300&fit=crop&crop=entropy&auto=format",
  },
  {
    id: 2,
    title: "AI vs Human: Who Predicts Crypto Markets Better?",
    description:
      "A comprehensive analysis comparing AI-driven predictions with human KOL performance across 10,000+ trading signals.",
    author: "Marcus Rodriguez",
    timeAgo: "5 days ago",
    readTime: "12 min read",
    category: "Research",
    categoryColor: "bg-indigo-500",
    image:
      "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=600&h=300&fit=crop&crop=entropy&auto=format",
  },
  {
    id: 3,
    title: "The Hidden Risks of Following Social Media Traders",
    description:
      "Exposing the dark patterns in influencer marketing and how to identify genuine trading insights from promotional content.",
    author: "Jennifer Kim",
    timeAgo: "1 week ago",
    readTime: "6 min read",
    category: "Risk Management",
    categoryColor: "bg-blue-400",
    image:
      "https://images.unsplash.com/photo-1642790106117-e829e14a795f?w=600&h=300&fit=crop&crop=entropy&auto=format",
  },
  // {
  //   id: 4,
  //   title: "The Psychology Behind Successful Trading Signals",
  //   description:
  //     "Understanding the cognitive biases that influence KOL predictions and how to filter noise from actionable insights.",
  //   author: "Dr. Sarah Chen",
  //   timeAgo: "2 days ago",
  //   readTime: "8 min read",
  //   category: "Psychology",
  //   categoryColor: "bg-blue-600",
  //   image:
  //     "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?w=600&h=300&fit=crop&crop=entropy&auto=format",
  // },
];

export default function BlogSection() {
  return (

    <>
      <div className="mb-0 px-8 mt-4 flex items-center justify-between">
        <h1 className="font-semibold text-3xl text-white ">Research & Insights</h1>
        <Button variant="outline" size="lg">
          <span className="hidden lg:inline">View All Articles</span>
        </Button>
      </div>
      <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-6 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-3">
        {blogPosts.map((post) => (
          <Card
            key={post.id}
            className="bg-background overflow-hidden shadow-xl hover:border-white/20 transition-all duration-300 group gap-0 py-0"
          >
            {/* Image */}
            <div className="relative">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-64 object-cover rounded-t-2xl"
              />

              {/* Category Badge */}
              <Badge  className="absolute top-4 left-4" variant={"ghost"}>
                {post.category}
              </Badge>

            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="text-sm font-bold mb-2 group-hover:text-[#00dea0] transition ">
                {post.title}
              </h3>

              <p className="text-gray-400 text-xs mb-4 leading-relaxed">
                {post.description}
              </p>

              {/* Author + Read Time */}
              <div className="flex items-center justify-between mt-4">
                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <User size={14} />
                  <span>{post.author}</span>
                </div>

                <div className="flex items-center gap-2 text-gray-400 text-xs">
                  <Clock size={14} />
                  <span>{post.readTime}</span>
                </div>
              </div>

              {/* Footer */}
              <div className="mt-6 flex items-center justify-between">
                <span className="text-muted-foreground text-xs">{post.timeAgo}</span>

                <button className="text-white flex items-center gap-1 hover:gap-2 transition-all">
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </Card>
        ))}
      </div>

    </>

  );
}
