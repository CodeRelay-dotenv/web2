"use client";

import { useOrganization } from "@clerk/nextjs";
import { EmptyOrg } from "./_components/emptyOrg";
import { BoardList } from "./_components/boardList";
import { usePage } from "./_context/pageContext";
import { useEffect } from "react";
import { api } from "@/convex/_generated/api";
import { useApiMutation } from "@/hooks/useApiMutation";
import { toast } from "sonner";

export default function DashboardPage() {
  const { organization } = useOrganization();
  const { selected } = usePage();

  const {mutate:create,isLoading} = useApiMutation(api.qna.createUser);
    useEffect(()=>{
      create({})
      .then((user)=>{
        toast.success("User Bangya")
        console.log("User Bangya",user)
      })
      .catch(()=> {toast.error("Error aagya")

        console.log("Calling me error h")

      })
  },[])

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