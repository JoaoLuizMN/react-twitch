"use client";

import { ICON_SIZES, IMAGES_SIZES } from "@/config";
import Image from "next/image";
import { useState } from "react";
import { MdArrowBackIosNew, MdVolumeDown } from "react-icons/md";
import { channels as allChannels } from "@/config";
import { GrPlayFill } from "react-icons/gr";
import { HiCog } from "react-icons/hi";
import { RiFullscreenLine } from "react-icons/ri";
import ChannelInfo from "./ChannelInfo";
import Button from "../Button";

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);

  const channels = allChannels.filter((channel) => channel.isLive);

  const previousImage =
    (currentImage === 0 ? channels.length : currentImage) - 1;
  const nextImage = currentImage === channels.length - 1 ? 0 : currentImage + 1;

  return (
    <div className="flex justify-between">
      <button>
        <MdArrowBackIosNew
          size={ICON_SIZES.medium}
          onClick={() => setCurrentImage(previousImage)}
        />
      </button>

      <div className="flex relative justify-center items-center mt-6 transition">
        <div className="absolute left-0 h-3/4 aspect-video -translate-x-6 bg-black">
          <Image
            src={channels[previousImage].image}
            alt="carousel image"
            fill
          />
        </div>

        <div className="flex h-72 z-10">
          <div className="relative h-full aspect-video bg-black">
            <Image
              src={channels[currentImage].image}
              alt="carousel image"
              fill
            />
            <p className="text-sm text-white font-bold bg-[#f00] px-2 absolute left-2 rounded-md top-2">
              LIVE
            </p>

            <div className="flex absolute text-white bottom-4 left-4 gap-1 items-center">
              <Button variant="ghost-white">
                <GrPlayFill size={ICON_SIZES.xsmall} />
              </Button>

              <Button variant="ghost-white">
                <MdVolumeDown size={ICON_SIZES.small} />
              </Button>
            </div>

            <div className="flex absolute text-white bottom-4 right-4 gap-1 items-center">
              <Button variant="ghost-white">
                <HiCog size={ICON_SIZES.small} />
              </Button>
              <Button variant="ghost-white">
                <RiFullscreenLine size={ICON_SIZES.small} />
              </Button>
            </div>
          </div>
          <div className="bg-white shadow-xl">
            <ChannelInfo channel={channels[currentImage]} />
          </div>
        </div>

        <div className="absolute h-3/4 aspect-video right-0 translate-x-6 bg-black">
          <Image src={channels[nextImage].image} alt="carousel image" fill />
        </div>
      </div>

      <button>
        <MdArrowBackIosNew
          size={ICON_SIZES.medium}
          className="rotate-180"
          onClick={() => setCurrentImage(nextImage)}
        />
      </button>
    </div>
  );
}
