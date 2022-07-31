import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/future/image";
import React, { useCallback } from "react";

import { Image as ImageType } from "contentlayer/generated";

type CarouselProps = {
  options?: EmblaOptionsType;
  images: ImageType[];
};

const Carousel: React.FC<CarouselProps> = ({ options, images }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div>
      <div ref={emblaRef} className="overflow-hidden rounded-md bg-purple-200">
        <div className="flex items-center">
          {images.map((image) => (
            <div
              className="relative ml-4 shrink-0 basis-full md:basis-2/3"
              key={image._id}
            >
              <Image
                src={image.src}
                width={(image.width / image.height) * 800}
                height={800}
              />
            </div>
          ))}
        </div>
      </div>

      <button className="embla__prev" onClick={scrollPrev}>
        Prev
      </button>
      <button className="embla__next" onClick={scrollNext}>
        Next
      </button>
    </div>
  );
};

export default Carousel;
