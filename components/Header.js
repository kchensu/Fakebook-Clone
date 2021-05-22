import {
  SearchIcon,
  FilmIcon,
  ShoppingCartIcon,
  PuzzleIcon,
} from "@heroicons/react/outline";
import { HomeIcon, UserGroupIcon } from "@heroicons/react/solid";

import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";

function Header() {
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      <div className="flex items-center">
        <Image src="/facebook.png" width={90} height={50} layout="fixed" />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-500" />
          <input
            className="hidden md:inline-flex flex-shrink flex ml-2 items-center bg-transparent outline-none placeholder-gray-400"
            type="text"
            placeholder="Search Fakebook"
          />
        </div>
      </div>

      {/*center*/}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-4 md:space-x-2 px-2">
          <HeaderItem Icon={HomeIcon} active />
          <HeaderItem Icon={FilmIcon} />
          <HeaderItem Icon={ShoppingCartIcon} />
          <HeaderItem Icon={UserGroupIcon} />
          <HeaderItem Icon={PuzzleIcon} />
        </div>
      </div>
      {/*right*/}
      <div className="flex items-center sm:space-x-2 justify-items-end">
        {/*profile pic*/}
        <p className="font-semibold pr-3 whitespace-nowrap">Kevin Chen</p>
      </div>
    </div>
  );
}

export default Header;
