import React from "react";
import Image from "next/image";
import {
  SearchIcon,
  FlagIcon,
  PlayIcon,
  ShoppingCartIcon,
} from "@heroicons/react/outline";
import {
  BellIcon,
  ChatIcon,
  ChevronDownIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <div>
      {/** LEFT */}
      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
        />
        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-600" />
          <input
            className="flex ml-2 items-center bg-transparent 
            focus-within: outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>
      {/** CENTER */}
      <div className="flex justify-center flex-grow">
        <div>
          <HeaderIcon />
        </div>
      </div>
      {/** RIGHT */}
    </div>
  );
}

export default Header;
