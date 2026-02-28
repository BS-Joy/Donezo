import { Bell, Mail } from "lucide-react";
import { Link } from "react-router";
import avatarImage from "../../assets/avatar.webp";
import SearchBar from "./SearchBar";
import { useContext } from "react";
import { AuthContext, SidebarContext } from "../../contexts";

const navIcons = [
  { icon: Mail, label: "Messages" },
  { icon: Bell, label: "Notifications" },
];

const Navbar = () => {
  const { setShowSidebar } = useContext(SidebarContext);
  const { user } = useContext(AuthContext);

  const userName = user.email.split("@")[0];
  return (
    <header className="w-full bg-light-white text-center rounded-2xl flex justify-between items-center md:py-4 py-2 md:px-6 px-3">
      <div className="flex items-center gap-2 flex-1 min-w-0 mr-3">
        <button
          type="button"
          className="flex lg:hidden md:h-10 h-7 md:w-10 w-7 items-center justify-center rounded-lg bg-white shadow"
          onClick={() => setShowSidebar(true)}
        >
          ☰
        </button>

        {/* search bar */}
        <SearchBar />
      </div>

      {/* header nav actions */}
      <div className="flex items-center gap-3">
        {/* nav icons */}
        <div>
          {navIcons.map((item) => (
            <button
              key={item.label}
              className="p-2 ml-3 rounded-full bg-white hover:bg-gray-200 cursor-pointer transition-colors duration-200"
            >
              <item.icon className="md:w-6 md:h-7 w-5 h-5" />
            </button>
          ))}
        </div>

        {/* profile section */}
        <div className="flex gap-2">
          {/* avatar */}
          <Link
            to="#"
            className="relative inline-flex items-center justify-center md:w-12 md:h-12 w-6 h-6 text-white rounded-full"
          >
            <img
              src={avatarImage}
              alt="user name"
              title="user name"
              width="48"
              height="48"
              className="max-w-full rounded-full"
            />
          </Link>

          {/* user info */}
          <div className="hidden lg:block">
            <p className="text-base text-start font-semibold">
              {userName || "N/A"}
            </p>
            <p className="text-xs text-gray-500">{user?.email || "N/A"}</p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
