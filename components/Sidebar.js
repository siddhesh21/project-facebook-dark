import { useSession } from "next-auth/client";
import {
  ChevronDownIcon,
  ShoppingBagIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import {
  CalendarIcon,
  ClockIcon,
  DesktopComputerIcon,
  UsersIcon,
} from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";
import { useTheme } from "next-themes";

function Sidebar() {
  const { theme, setTheme } = useTheme();
  const [session] = useSession();

  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow Icon={UsersIcon} title="Friends" />
      <SidebarRow Icon={UserGroupIcon} title="Groups" />
      <SidebarRow Icon={ShoppingBagIcon} title="Marketplace" />
      <SidebarRow Icon={DesktopComputerIcon} title="Watch" />
      <SidebarRow Icon={CalendarIcon} title="Events" />
      <SidebarRow Icon={ClockIcon} title="Memories" />
      <SidebarRow Icon={ChevronDownIcon} title="See More" />
      <div>
        <button
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
          className="p-3 ml-3 mt-5 sm:pd-3 md:pd-5 rounded-2xl shadow-lg ring-2 ring-purple-700 
          hover:bg-gray-200 focus:outline-none focus:ring-purple-300"
        >
          Change Theme
        </button>
      </div>
    </div>
  );
}

export default Sidebar;

// className="p-2 sm:pd-3 md:pd-5 rounded-2xl shadow-lg ring-2 ring-gray-200 focus:outline-none focus:ring-green-400 "
