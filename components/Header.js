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
import HeaderIcon from "./HeaderIcon";

function Header() {
  return (
    <div
      className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 
    shadow-md"
    >
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
            className="hidden md:inline-flex ml-2 items-center bg-transparent flex-shrink
            focus-within: outline-none placeholder-gray-500"
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/** CENTER */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon active Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>
      {/** RIGHT */}
      <div className="flex items-center sm:space-x-2 justify-end">
        {/**PROFILE PIC */}
        <p className="whitespace-nowrap font-semibold pr-3">
          Siddhesh Kankekar
        </p>

        <ViewGridIcon
          className="hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 
        rounded-full text-gray-70 cursor-pointer hover: bg-gray-200"
        />
        <ChatIcon
          className="hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 
        rounded-full text-gray-70 cursor-pointer hover: bg-gray-200"
        />
        <BellIcon
          className="hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 
        rounded-full text-gray-70 cursor-pointer hover: bg-gray-200"
        />
        <ChevronDownIcon
          className="hidden xl:inline-flex p-2 h-10 w-10 bg-gray-200 
        rounded-full text-gray-70 cursor-pointer hover: bg-gray-200"
        />
      </div>
    </div>
  );
}

export default Header;
