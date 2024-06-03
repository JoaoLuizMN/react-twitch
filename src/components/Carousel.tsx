'use client'

import { ICON_SIZES, IMAGES_SIZES } from "@/config";
import Image from "next/image";
import { useState } from "react";
import { MdArrowBackIosNew } from "react-icons/md";

export default function Carousel() {
  
const [currentImage, setCurrentImage] = useState(0);

const images = ["/images/csharp.png", "/images/Angular.png", "/images/django-logo.png", "/images/React.png", "/images/Crow.jpg"]

const nextImage = () =>{
  if(currentImage + 1 >= images.length){
    setCurrentImage(0)
    return;
  }
  setCurrentImage((currentImage) => currentImage + 1);
}

const previousImage = () => {
  if(currentImage < 0){
    setCurrentImage(images.length - 1)
    return;
  }
  setCurrentImage((currentImage) => currentImage - 1);
}
  return (
    <div className="flex">
      <button><MdArrowBackIosNew size={ICON_SIZES.medium} onClick={() => previousImage()}/></button>

      <div className="flex">

        {
                      
          <Image src={images[currentImage - 1]} alt="carousel image" width={IMAGES_SIZES.mediumWidth} height={IMAGES_SIZES.mediumlHight} />
        }

        {

          <Image src={images[currentImage]} alt="carousel image" width={IMAGES_SIZES.mediumWidth} height={IMAGES_SIZES.mediumlHight} />

        }

        {
                    
          <Image src={images[currentImage + 1]} alt="carousel image" width={IMAGES_SIZES.mediumWidth} height={IMAGES_SIZES.mediumlHight} />
        }
        
      </div>

        <button><MdArrowBackIosNew size={ICON_SIZES.medium} className="rotate-180" onClick={() => nextImage()}/></button>
    </div>
  )
}
