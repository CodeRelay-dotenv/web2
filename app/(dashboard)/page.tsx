"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/emptyOrg";
import { BoardList } from "./_components/boardList";
import { usePage } from "./_context/pageContext";

export default function DashboardPage() {
  const { organization } = useOrganization();
  const { selected } = usePage();

  return (
    <div className="flex-1 h-[calc(100%-80px)] p-6">
      {selected === "home" ? <h1>Home</h1> : 
        !organization ? (
          <EmptyOrg />
        ) : (
          <BoardList orgId={organization.id} />
        )
      }
    </div>
  );
}