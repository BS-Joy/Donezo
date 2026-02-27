import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { SidebarContextProvider } from "../contexts/SidebarContextProvider";

const Layout = () => {
  return (
    <SidebarContextProvider>
      <main className="bg-white">
        <Sidebar />
        <Outlet />
      </main>
    </SidebarContextProvider>
  );
};

export default Layout;
