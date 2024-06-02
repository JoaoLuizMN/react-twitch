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
      viewers: 3500,
      isLive: true,
    },
    {
      image: "/images/csharp.png",
      name: "Pedro",
      category: "Dark Souls",
      viewers: 6700,
      isLive: true,
    },
    {
      image: "/images/csharp.png",
      name: "Alfonço",
      category: "Kirby",
      viewers: 101000,
      isLive: true,
    },
    {
      image: "/images/csharp.png",
      name: "Mercedes",
      category: "Dragons Dogma",
      viewers: 6000,
      isLive: true,
    },
    {
      image: "/images/csharp.png",
      name: "Matheus",
      category: "IRL",
      viewers: 600,
      isLive: true,
    },
    {
      image: "/images/csharp.png",
      name: "Emannuuuuuuueul",
      category: "IRL",
      viewers: 600,
      isLive: false,
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
        <Channel key={`Channel - ${channel.name}`}
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
