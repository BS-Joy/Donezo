import { Outlet } from "react-router";
import Sidebar from "./Sidebar";
import { SidebarContextProvider } from "../contexts/SidebarContextProvider";
import Navbar from "../components/navbar/Navbar";

const Layout = () => {
  return (
    <SidebarContextProvider>
      <main className="bg-white">
        <Sidebar />
        <div className="lg:ml-72 ml-4  mt-4 mr-4 h-[calc(100vh-32px)] flex flex-col gap-4">
          <Navbar />
          <Outlet />
        </div>
      </main>
    </SidebarContextProvider>
  );
};

export default Layout;
