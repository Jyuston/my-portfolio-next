import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/image";
import React from "react";

import { Image as ImageType } from "contentlayer/generated";

type CarouselProps = {
  options?: EmblaOptionsType;
  images: ImageType[];
};

const Carousel: React.FC<CarouselProps> = ({ options, images }) => {
  const [emblaRef] = useEmblaCarousel();

  return (
    <div ref={emblaRef} className="overflow-hidden">
      <div className="flex">
        {images.map((image) => (
          <div className="relative basis-full" key={image._id}>
            <Image
              width={(image.width / image.height) * 300}
              height={300}
              src={image.src}
              priority
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Carousel;
