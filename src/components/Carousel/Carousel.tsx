import { useState, Children } from "react";

import classNames from "src/utils/classNames";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const numberofChildren = Children.toArray(children).length;

  return (
    <>
      <div className="snap-x snap-mandatory overflow-scroll overflow-y-hidden scroll-smooth whitespace-nowrap rounded-md">
        {children}
      </div>
    </>
  );
};

export default Carousel;
