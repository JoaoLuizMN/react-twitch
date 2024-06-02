import { IMAGES_SIZES } from "@/config";
import Image from "next/image";

const images = ["/images/csharp.png", "/images/Angular.png", "/images/django-logo.png", "/images/React.png", "/images/Crow.jpg"]

export default function Home() {
  return <div className="flex-1 bg-neutral-100">

    <div className="flex">

      {images.map((image, index) => <Image key={`image - ${index} - ${image}`} src={images[index]} width={IMAGES_SIZES.mediumWidth} height={IMAGES_SIZES.mediumWidth} alt="carrousel images" />)}
      
    </div>

    
    
    </div>;
}
