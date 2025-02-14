import { usePage } from "../../_context/pageContext";
import { List } from "./list";
import { NewButton } from "./newButton";
import { Hint } from "@/components/hint";

export function Sidebar() {
  const {selected, updateSelected} = usePage();
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <Hint
        label="Home"
        side="right"
        align="start"
        sideOffset={18}
      >
        <button className={`bg-white/25 aspect-square rounded-md flex items-center justify-center ${selected === "home"? "opacicty-100" : "opacity-60"} hover:opacity-100 transition`}
        onClick={() => updateSelected("home")}
        >
          H
        </button>
      </Hint>
      <List />
      <NewButton />
    </aside>
  );
}