"use client";

import {
  OrganizationSwitcher,
  UserButton,
  useOrganization,
} from "@clerk/nextjs";
import { InviteButton } from "./inviteButton";
import { SearchInput } from "./searchInput";
import { useSearchParams } from "next/navigation";

export function Navbar() {
  const searchParams = useSearchParams();
    const leaderboard = searchParams.get("leaderboard");
    const VideoAI = searchParams.get("video");
  
  const { organization } = useOrganization();

  return (
    <div className="flex items-center gap-x-4 p-5">
      <div className="hidden lg:flex lg:flex-1">
       { leaderboard!=="true" && VideoAI!=="true" ?  <SearchInput /> : <></>}
      </div>
      <div className="block lg:hidden flex-1">
        <OrganizationSwitcher
          hidePersonal
          appearance={{
            elements: {
              rootBox: {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                width: "100%",
                maxWidth: "376px",
              },
              organizationSwitcherTrigger: {
                padding: "6px",
                width: "100%",
                borderRadius: "6px",
                border: "1px solid #E5E7EB",
                justifyContent: "space-between",
                backgroundColor: "white",
              },
            },
          }}
        />
      </div>
      {organization && <InviteButton />}
      <UserButton />
    </div>
  );
}