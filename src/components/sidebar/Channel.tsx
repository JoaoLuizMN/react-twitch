import Image from "next/image";

export type ChannelProps = {
  image: string;
  name: string;
  category: string;
  viewers: number;
  isLive: boolean;
};

export default function Channel({
  image,
  name,
  category,
  viewers,
  isLive,
}: ChannelProps) {
  return (
  <div className={`flex w-full justify-start gap-1`}>
      <div className={`relative size-7 border border-black rounded-full`}>
        <Image
          src={image}
          className={`object-contain ${!isLive ? "fill-black" : ""}`}
          fill
          alt="channel image"
        />
      </div>

      <div className={`flex flex-col ${!isLive ? "justify-center" : ""}`}>
        <p className={`${!isLive ?  "text-black/20" : ""}`}>{name}</p>

        {isLive ? <p className="text-sm text-neutral-500">{category}</p> : ""}
      </div>

    <div className="flex flex-1 justify-end items-center gap-2">
      <div>
          <div>{isLive ? <div className="bg-red-600 size-2 rounded-full"></div> : <div className="flex flex-1 text-black/20">Offline</div>}</div>
        </div>

        <div>
          {isLive ?  (viewers >= 1000 ? (viewers / 1000) : viewers) : ""}
        </div>
      </div>
    </div>
  );
}
