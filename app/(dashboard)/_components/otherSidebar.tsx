"use client";

import Link from "next/link";
import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { OrganizationSwitcher } from "@clerk/nextjs";
import { LayoutDashboard, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSearchParams } from "next/navigation";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

export function OtherSidebar() {
  const searchParams = useSearchParams();

  const leaderboard = searchParams.get("leaderboard");
  const video = searchParams.get("video");

  return (
    <div className="hidden lg:flex flex-col space-y-6 w-[206px] pl-5 pt-5">
      <Link href="/">
        <div className="flex items-center gap-x-2">
          <Image src="/logo.svg" alt="Logo" height={35} width={35} />
          <span className={cn("font-semibold text-2xl", font.className)}>
            EduFlow Nexus
          </span>
        </div>  
      </Link>

      <div className="space-y-1 w-full">
        <Button
          variant={leaderboard || video ? "ghost" : "secondary"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          
          <Link href="/">
            Questions
          </Link>
        </Button>
        <Button
          variant={leaderboard ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href={{
              pathname: "/",
              query: {
                leaderboard: "true",
              },
            }}>
            Leaderboard
          </Link>
          </Button>
          <Button
          variant={video ? "secondary" : "ghost"}
          asChild
          size="lg"
          className="font-normal justify-start px-2 w-full"
        >
          <Link href={{
              pathname: "/",
              query: {
                video: "true",
              },
            }}>
            VideoAI
          </Link>
        </Button>
      </div>
    </div>
  );
}