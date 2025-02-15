"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/emptyOrg";
import { BoardList } from "./_components/boardList";
import { usePage } from "./_context/pageContext";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { toast } from "sonner";
import QuestionHome from "./_components/questionHome";
import LeaderMain from "./_components/leaderMain"; // Import Leaderboard
import { useSearchParams } from "next/navigation";

export default function DashboardPage() {
  const searchParams = useSearchParams();
  const leaderboard = searchParams.get("leaderboard");

  const { organization } = useOrganization();
  const { selected } = usePage();

  const { mutate: create, isLoading } = useApiMutation(api.qna.createUser);

  useEffect(() => {
    create({})
      .then((user) => {
        toast.success("User Bangya");
        console.log("User Bangya", user);
      })
      .catch(() => {
        toast.error("Error aagya");
        console.log("Calling me error h");
      });
  }, []);

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {leaderboard === "true" ? (
        <LeaderMain />
      ) : selected === "home" ? (
        <QuestionHome />
      ) : !organization ? (
        <EmptyOrg />
      ) : (
        <BoardList orgId={organization.id} />
      )}
    </div>
  );
}
