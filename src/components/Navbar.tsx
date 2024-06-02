"use client";

import { ICON_SIZES } from "@/config";

import { FaTwitch } from "react-icons/fa6";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RxMagnifyingGlass } from "react-icons/rx";

import { TbCrown } from "react-icons/tb";
import { MdPersonOutline } from "react-icons/md";
import Button from "./Button";

export default function Navbar() {
  return (
    <div className="flex relative justify-between items-center text-sm font-semibold shadow h-12 px-2">
      <div className="flex gap-x-4">
        <button>
          <FaTwitch size={ICON_SIZES.medium} className="text-purple-600" />
        </button>
        <button className="hover:text-purple-600">Browse</button>
        <button className="hover:text-purple-600" title="More">
          <BsThreeDotsVertical size={ICON_SIZES.small} />
        </button>
      </div>

      <div className="flex mt-2 mb-2 w-[30%] lg:absolute left-1/2  lg:-translate-x-1/2">
        <input
          type="text"
          placeholder="Search"
          className="flex-1 border border-neutral-200 hover:border-2 outline-purple-600 rounded-l-lg px-2"
        ></input>
        <button className="bg-neutral-200 rounded-r-lg p-1">
          <RxMagnifyingGlass size={ICON_SIZES.medium} />
        </button>
      </div>

      <div className="flex gap-x-2">
        <Button variant="ghost">
          <TbCrown size={ICON_SIZES.small} />
        </Button>
        <Button variant="default">Log in</Button>
        <Button variant="action">Sign up</Button>
        <Button variant="ghost">
          <MdPersonOutline size={ICON_SIZES.medium} />
        </Button>
      </div>
    </div>
  );
}
