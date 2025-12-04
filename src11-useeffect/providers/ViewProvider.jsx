import { useEffect, useState } from "react";
import { ViewContext } from "../contexts/ViewContext";

/**
 * @param {React.PropsWithChildren} props
 */
export default function ViewProvider({ children }) {
  const [view, setView] = useState("front");

  useEffect(() => {
    const id = setInterval(() => {
      setView(view === "front" ? "back" : "front");
    }, 1000);

    return () => {
      clearInterval(id);
    };
  });

  return <ViewContext.Provider value={view}>{children}</ViewContext.Provider>;
}
