import {
  UsersIcon,
  UserGroupIcon,
  ShoppingCartIcon,
  FilmIcon,
  CalendarIcon,
  ClockIcon,
  ChevronDownIcon,
} from "@heroicons/react/outline";
import { HeartIcon, BookmarkIcon, FlagIcon } from "@heroicons/react/solid";
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="p-2 mt-5 max-w-[600px] xl:min-w-[300px]">
      <div>
        <SidebarRow
          Icon={HeartIcon}
          title="COVID-19 Information Center"
          style={"text-purple-500 h-8 w-8 whitespace-nowrap"}
        />
        <SidebarRow
          Icon={UsersIcon}
          title="Friends"
          style={"text-blue-500 h-8 w-8"}
        />
        <SidebarRow
          Icon={UserGroupIcon}
          title="Groups"
          style={"text-blue-500 h-8 w-8"}
        />
        <SidebarRow
          Icon={ShoppingCartIcon}
          title="Marketplace"
          style={"text-blue-500 h-8 w-8"}
        />
        <SidebarRow
          Icon={FilmIcon}
          title="Watch"
          style={"text-blue-500 h-8 w-8"}
        />
        <SidebarRow
          Icon={CalendarIcon}
          title="Events"
          style={"text-blue-500 h-8 w-8"}
        />
        <SidebarRow
          Icon={ClockIcon}
          title="Memories"
          style={"text-blue-500 h-8 w-8"}
        />
        <SidebarRow
          Icon={BookmarkIcon}
          title="Saved"
          style={"text-purple-500 h-8 w-8"}
        />
        <SidebarRow
          Icon={ChevronDownIcon}
          title="See More"
          style={"text-gray-900 h-8 w-8 rounded-full"}
        />
      </div>
    </div>
  );
}

export default Sidebar;
