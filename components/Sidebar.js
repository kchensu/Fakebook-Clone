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
    <div className="mt-5 max-w-[300px] xl:min-w-[200px]">
      <div>
        <SidebarRow
          Icon={HeartIcon}
          title="COVID-19 Information Center"
          style={"text-purple-500 h-8 mt-5"}
        />
        <SidebarRow
          Icon={UsersIcon}
          title="Friends"
          style={"text-blue-500 h-8 mt-5"}
        />
        <SidebarRow
          Icon={UserGroupIcon}
          title="Groups"
          style={"text-blue-500 h-8 mt-5"}
        />
        <SidebarRow
          Icon={ShoppingCartIcon}
          title="Marketplace"
          style={"text-blue-500 h-8 mt-5"}
        />
        <SidebarRow
          Icon={FilmIcon}
          title="Watch"
          style={"text-blue-500 h-8 mt-5"}
        />
        <SidebarRow
          Icon={CalendarIcon}
          title="Events"
          style={"text-blue-500 h-8 mt-5"}
        />
        <SidebarRow
          Icon={ClockIcon}
          title="Memories"
          style={"text-blue-500 h-8 mt-5"}
        />
        <SidebarRow
          Icon={BookmarkIcon}
          title="Saved"
          style={"text-purple-500 h-8 mt-5 "}
        />
        <SidebarRow
          Icon={ChevronDownIcon}
          title="See More"
          style={"text-gray-900 h-8 mt-5 rounded-full"}
        />
      </div>
    </div>
  );
}

export default Sidebar;
