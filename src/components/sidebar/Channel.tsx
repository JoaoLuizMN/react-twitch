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
    <div className="flex w-full justify-between">
      <div className="relative size-12 border border-black rounded-full">
        <Image
          src={image}
          className="object-contain"
          fill
          alt="channel image"
        />
      </div>

      <div className="flex flex-col justify-center">
        <p>{name}</p>
        <p>{category}</p>
      </div>

      <div>
        {isLive} {viewers}
      </div>
    </div>
  );
}
