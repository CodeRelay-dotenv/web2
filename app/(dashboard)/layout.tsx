"use client";

import { useState, createContext } from "react";
import { Navbar } from "./_components/navbar";
import { OrgSidebar } from "./_components/orgSidebar";
import { OtherSidebar } from "./_components/otherSidebar";
import { Sidebar } from "./_components/sidebar";
import { PageContextProvider } from "./_context/pageContext";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

const Context = createContext<{ home: boolean; setHome: React.Dispatch<React.SetStateAction<boolean>> } | undefined>(undefined);

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [selected, setSelected] = useState("other");
  const updateSelected = (v: string) => setSelected(v);

  return (
    <PageContextProvider value={{selected, updateSelected}}>
      <main className="h-full ">
      <Sidebar />
      <div className="pl-[60px] h-full">
        <div className="flex gap-x-3 h-full">
        {selected!=="home" ? <OrgSidebar />: <OtherSidebar/>}
        <div className="h-full flex-1">
          <Navbar />
          {children}
        </div>
        </div>
      </div>
      </main>
    </PageContextProvider>
  );
}