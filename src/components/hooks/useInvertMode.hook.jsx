import { useContext, useEffect } from "react";
import { AppStateContext } from "../redux/AppStateProvider";

export default function useInvertMode() {
  const { invertMode } = useContext(AppStateContext);

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light");
    root.classList.remove("dark");

    if (invertMode === true) {
      root.classList.add("dark");
    } else {
      root.classList.add("light");
    }
  }, [invertMode]);
}
