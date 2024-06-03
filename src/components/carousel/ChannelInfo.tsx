import Image from "next/image";
import { ChannelProps } from "../sidebar/Channel";
import { IMAGES_SIZES } from "@/config";

export default function ChannelInfo({ channel }: { channel: ChannelProps }) {
  return (
    <div className="flex flex-col w-52 text-sm gap-4 p-2">
      <div className="flex gap-2">
        <div className="relative size-12 rounded-full border">
          <Image
            alt="channel profile image"
            src={channel.image}
            fill
            className="object-contain"
          />
        </div>
        <div>
          <p className="font-bold text-purple-700 hover:text-purple-600 hover:underline">
            {channel.name}
          </p>
          <p className="text-purple-600 hover:underline">{channel.category}</p>
          <p>{channel.viewers} viewers</p>
        </div>
      </div>
      <p>{channel.description}</p>
    </div>
  );
}
