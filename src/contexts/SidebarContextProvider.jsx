import { useState } from "react";
import { SidebarContext } from ".";

export const SidebarContextProvider = ({ children }) => {
  const [showSidebar, setShowSidebar] = useState(false);

  return (
    <SidebarContext value={{ showSidebar, setShowSidebar }}>
      {children}
    </SidebarContext>
  );
};
