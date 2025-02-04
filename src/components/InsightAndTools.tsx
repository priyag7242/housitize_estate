"use client";

import Link from "next/link";
import Image from "next/image";
import { BarChart3, Map, FileText, Star, ChevronRight } from "lucide-react";

import { cn } from "@/lib/utils";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";

interface InsightCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  imageSrc: string;
  bgColor: string;
}

function InsightCard({
  icon,
  title,
  description,
  imageSrc,
  bgColor,
}: InsightCardProps) {
  return (
    <Link
      href="/"
      className={cn(
        "flex flex-col h-full rounded-lg p-6 transition-transform hover:scale-[1.02] cursor-pointer",
        bgColor
      )}
    >
      <div className="flex items-center gap-3 mb-4">
        {icon}
        <h3 className="font-semibold text-lg">{title}</h3>
      </div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <div className="flex-grow mb-4">
        <Image
          src={imageSrc}
          alt={title}
          width={400}
          height={250}
          className="rounded-lg w-full h-auto"
        />
      </div>
      <div className="flex items-center text-primary font-medium">
        Explore Now
        <ChevronRight className="w-4 h-4 ml-1" />
      </div>
    </Link>
  );
}

export default function InsightsAndTools() {
  const customerInsights = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "About My Property",
      description: "Track prices & analyse market demands",
      imageSrc: "/assets/images/price-trends.png",
      bgColor: "bg-[#fff9e6]",
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Read Latest News",
      description: "Around real estate and allied industries",
      imageSrc: "/assets/images/property-rates-heatmap.png",
      bgColor: "bg-[#e6fff2]",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Check Articles",
      description: "On trending topics and policy updates",
      imageSrc: "/assets/images/valuation-report.png",
      bgColor: "bg-[#ffe6f9]",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Transaction Prices",
      description: "Check property transaction values and many more",
      imageSrc: "/assets/images/reviews-ratings.png",
      bgColor: "bg-[#fff2e6]",
    },
  ];

  const businessInsights = [
    {
      icon: <BarChart3 className="w-6 h-6" />,
      title: "Market Analytics",
      description:
        "Comprehensive market analysis and trends for business decision making",
      imageSrc: "/assets/images/price-trends.png",
      bgColor: "bg-[#fff9e6]",
    },
    {
      icon: <Map className="w-6 h-6" />,
      title: "Business Intelligence Maps",
      description: "Interactive mapping tools for strategic location analysis",
      imageSrc: "/assets/images/property-rates-heatmap.png",
      bgColor: "bg-[#e6fff2]",
    },
    {
      icon: <FileText className="w-6 h-6" />,
      title: "Business Reports",
      description: "Detailed reports and insights for property professionals",
      imageSrc: "/assets/images/valuation-report.png",
      bgColor: "bg-[#ffe6f9]",
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Performance Analytics",
      description: "Track and analyze business performance metrics and KPIs",
      imageSrc: "/assets/images/reviews-ratings.png",
      bgColor: "bg-[#fff2e6]",
    },
  ];

  return (
    <div className="mx-auto px-4 sm:px-20 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Insights & Tools</h2>

      <Tabs defaultValue="customers" className="mb-8">
        <TabsList className="grid w-full max-w-md mx-auto mb-12 grid-cols-2">
          <TabsTrigger value="customers">For Customers</TabsTrigger>
          <TabsTrigger value="business">For Business</TabsTrigger>
        </TabsList>
        <TabsContent value="customers">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {customerInsights.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="business">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {businessInsights.map((insight, index) => (
              <InsightCard key={index} {...insight} />
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
