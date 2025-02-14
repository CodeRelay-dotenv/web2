import { createContext, useContext } from "react";

export const pageContext = createContext({
    selected: "home",
    updateSelected: (v) => {},
});
export const usePage = () => useContext(pageContext);
export const PageContextProvider = pageContext.Provider;
