import Carousel from "@/components/carousel/Carousel";
import LivePreview from "@/components/LivePreview";
import { channels as allChannels } from "@/config";

export default function Home() {
  const channels = allChannels.filter((channel) => channel.isLive);
  return (
    <div className="flex flex-col flex-1 bg-neutral-100 gap-12 px-8">
      <Carousel />
      <div>
        <p>Channels you may like</p>
        <div className="grid gap-4 grid-cols-3">
          {channels.map((channel) => (
            <LivePreview
              key={`LivePreview - ${channel.name}`}
              channel={channel}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
