"use client";

import { ICON_SIZES } from "@/config";
import { LuArrowLeftFromLine } from "react-icons/lu";
import Button from "../Button";
import { useState } from "react";
import { classFormatter } from "@/lib/utils";
import Channel, { ChannelProps } from "./Channel";

export default function Sidebar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const channels: ChannelProps[] = [
    {
      image: "/images/csharp.png",
      name: "João",
      category: "Programming",
      viewers: 1000,
      isLive: true,
    },
    {
      image: "/images/csharp.png",
      name: "João",
      category: "Programming",
      viewers: 1000,
      isLive: true,
    },
    {
      image: "/images/csharp.png",
      name: "João",
      category: "Programming",
      viewers: 1000,
      isLive: true,
    },
    {
      image: "/images/csharp.png",
      name: "João",
      category: "Programming",
      viewers: 1000,
      isLive: true,
    },
    {
      image: "/images/csharp.png",
      name: "João",
      category: "Programming",
      viewers: 1000,
      isLive: true,
    },
  ];
  return (
    <div
      className={classFormatter(
        "flex flex-col bg-neutral-200 gap-1 p-4 text-sm font-semibold items-center transition-all",
        { "w-12": !isSidebarOpen, "w-60": isSidebarOpen }
      )}
    >
      <div
        className={classFormatter("flex w-full items-center", {
          "justify-center": !isSidebarOpen,
          "justify-between": isSidebarOpen,
        })}
      >
        {isSidebarOpen && <h2>Recommended Channels</h2>}

        <Button
          variant="ghost"
          className={classFormatter({ "rotate-180": !isSidebarOpen })}
          onClick={() => setIsSidebarOpen((isSidebarOpen) => !isSidebarOpen)}
        >
          <LuArrowLeftFromLine size={ICON_SIZES.small} />
        </Button>
      </div>

      {channels.map((channel) => (
        <Channel
          image={channel.image}
          name={channel.name}
          category={channel.category}
          viewers={channel.viewers}
          isLive={channel.isLive}
        />
      ))}
    </div>
  );
}
