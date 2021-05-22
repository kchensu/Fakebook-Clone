import {
  TrendingUpIcon,
  CollectionIcon,
  SearchIcon,
  UserIcon,
  BadgeCheckIcon,
} from "@heroicons/react/outline";
import { HomeIcon } from "@heroicons/react/solid";

import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <div>
      <div className="flex items-center">
        <Image src="/facebook.png" width={90} height={50} layout="fixed" />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-500" />
          <input
            className="flex ml-2 items-center bg-transparent outline-none placeholder-gray-400"
            type="text"
            placeholder="Search Fakebook"
          />
        </div>
      </div>

      {/*center*/}
      <div className="flex justify-center flex-grow">
        <div>
          <HeaderItem Icon={HomeIcon} />
        </div>
      </div>
      {/*right*/}
    </div>
  );
}

export default Header;
