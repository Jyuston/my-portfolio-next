import useEmblaCarousel, { EmblaOptionsType } from "embla-carousel-react";
import Image from "next/future/image";
import React, { useCallback } from "react";
import { ChevronRightIcon } from "@heroicons/react/solid";
import { ChevronLeftIcon } from "@heroicons/react/solid";

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
    <div className="relative">
      <div ref={emblaRef} className="overflow-hidden drop-shadow-lg">
        <div className="flex items-center">
          {images.map((image) => (
            <div
              className="relative ml-2 shrink-0 basis-full hover:cursor-grab active:cursor-grabbing md:my-4 md:ml-4 md:basis-4/5"
              key={image.src}
            >
              <Image
                alt="Carousel Image"
                className="rounded-md"
                priority
                style={{ aspectRatio: `${16}/${9}` }}
                src={image.src}
                width={(image.width / image.height) * 800}
                height={800}
              />
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={scrollPrev}
        type="button"
        className="absolute bottom-1/2 ml-4 inline-flex translate-y-3 items-center rounded-full border border-transparent bg-gray-600/50 p-2 text-base font-medium text-white shadow-sm backdrop-blur-md hover:bg-gray-700/50 sm:p-3"
      >
        <ChevronLeftIcon className="h-2 w-2 sm:h-4 sm:w-4" aria-hidden="true" />
      </button>

      <button
        onClick={scrollNext}
        type="button"
        className="xs:text-base absolute bottom-1/2 right-0 mr-4 inline-flex translate-y-3 items-center rounded-full border border-transparent bg-gray-600/50 p-2 font-medium text-white shadow-sm backdrop-blur-md hover:bg-gray-700/50 sm:p-3"
      >
        <ChevronRightIcon
          className="h-2 w-2 sm:h-4 sm:w-4"
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default Carousel;
