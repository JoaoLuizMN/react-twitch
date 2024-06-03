import React from "react";
import { ChannelProps } from "./sidebar/Channel";
import Image from "next/image";

export default function LivePreview({ channel }: { channel: ChannelProps }) {
  return (
    <div className="bg-purple-500 ">
      <div className="relative w-full aspect-video">
        <Image src={channel.image} alt="channel image" fill />
        <p className="text-sm text-white bg-black/50 px-1 rounded-sm absolute bottom-2 left-2">
          {channel.viewers >= 1000
            ? channel.viewers / 1000 + "k"
            : channel.viewers}{" "}
          viewers
        </p>
      </div>
      <div className="flex bg-white gap-2">
        <div className="relative size-12 rounded-full">
          <Image
            src={channel.image}
            alt="channel image"
            fill
            className="object-contain"
          />
        </div>
        <div className="flex flex-col text-sm">
          <p className="font-bold">{channel.title}</p>
          <p className="text-neutral-500">{channel.name}</p>
          <p className="text-neutral-500">{channel.category}</p>
        </div>
      </div>
    </div>
  );
}
