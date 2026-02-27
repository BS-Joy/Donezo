import { useContext, useState } from "react";
import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  BarChart3,
  Users,
  Settings,
  LifeBuoy,
  LogOut,
  X,
} from "lucide-react";
import { cn } from "../lib/utils";
import { Link, useLocation } from "react-router";
import Logo from "../components/Logo";
import { SidebarContext } from "../contexts";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", href: "/" },
  { icon: CheckSquare, label: "Tasks", badge: "12+", href: "/tasks" },
  { icon: Calendar, label: "Calendar", href: "/calendar" },
  { icon: BarChart3, label: "Analytics", href: "/analytics" },
  { icon: Users, label: "Team", href: "/team" },
];

const generalItems = [
  { icon: Settings, label: "Settings", href: "/settings" },
  { icon: LifeBuoy, label: "Help", href: "/help" },
  { icon: LogOut, label: "Logout", href: "/logout" },
];

export default function Sidebar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const pathname = useLocation().pathname;

  const { showSidebar, setShowSidebar } = useContext(SidebarContext);

  return (
    <>
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed top-4 left-0 lg:left-4 z-40 w-64 h-[calc(100vh-32px)] overflow-y-auto rounded-2xl bg-light-white p-4 pt-8 transition-transform duration-300",
          showSidebar ? "translate-x-0" : "-translate-x-full",
          "lg:translate-x-0",
        )}
      >
        {showSidebar && (
          <button
            onClick={() => setShowSidebar(false)}
            className="absolute right-4 top-4 cursor-pointer rounded-lg p-1 hover:bg-gray-200 transition-colors duration-200 lg:hidden"
          >
            <X />
          </button>
        )}
        {/* Logo */}
        <Logo />

        <div className="space-y-4 mt-10">
          {/* Menu */}
          <div>
            <p className="text-xs font-medium text-secondary mb-2 ml-2 uppercase tracking-wider">
              Menu
            </p>
            <nav className="space-y-0.5">
              {menuItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setShowSidebar(false)}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-2.5 py-2 font-extralight transition-all duration-300",
                      isActive
                        ? "font-semibold text-primary"
                        : "text-secondary hover:text-foreground hover:translate-x-1",
                    )}
                  >
                    {isActive && (
                      <div className="absolute -left-3 rounded-lg bg-primary w-5 h-10"></div>
                    )}
                    <item.icon
                      fill={isActive ? "#227d53" : "none"}
                      className={cn(
                        "w-4 h-4 transition-all",
                        isActive
                          ? "text-primary fill-secondary"
                          : "text-secondary fill-none",
                      )}
                    />
                    <span className="text-lg">{item.label}</span>
                    {item.badge && (
                      <span className="ml-auto bg-primary text-white text-[10px] font-semibold px-1.5 py-0.5 rounded-full animate-pulse">
                        {item.badge}
                      </span>
                    )}
                  </Link>
                );
              })}
            </nav>
          </div>

          {/* General */}
          <div className="mt-10">
            <p className="text-xs ml-2 font-medium text-secondary mb-2 uppercase tracking-wider">
              General
            </p>
            <nav className="space-y-0.5">
              {generalItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.label}
                    to={item.href}
                    onClick={() => setShowSidebar(false)}
                    onMouseEnter={() => setHoveredItem(item.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                    className={cn(
                      "w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg font-extralight transition-all duration-300",
                      isActive
                        ? "font-semibold text-primary"
                        : "text-secondary hover:text-foreground",
                      hoveredItem === item.label &&
                        !isActive &&
                        "translate-x-1",
                    )}
                  >
                    {isActive && (
                      <div className="absolute -left-3 rounded-lg bg-primary w-5 h-10"></div>
                    )}
                    <item.icon className="w-4 h-4" />
                    <span className="text-lg">{item.label}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </aside>

      {/* Backdrop */}
      {showSidebar && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}
    </>
  );
}
