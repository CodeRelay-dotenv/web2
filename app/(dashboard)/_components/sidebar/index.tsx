import { usePage } from "../../_context/pageContext";
import { List } from "./list";
import { NewButton } from "./newButton";

export function Sidebar() {
  const {updateSelected} = usePage();
  return (
    <aside className="fixed z-[1] left-0 bg-blue-950 h-full w-[60px] flex p-3 flex-col gap-y-4 text-white">
      <button className="w-full h-12 bg-blue-900 rounded-lg flex items-center justify-center"
      onClick={() => updateSelected("home")}
      >
        H
      </button>
      <List />
      <NewButton />
    </aside>
  );
}