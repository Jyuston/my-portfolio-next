import React, { useState, Children } from "react";

import classNames from "src/utils/classNames";
import CarouselItem from "./CarouselItem";

type CarouselProps = {
  children: React.ReactNode;
};

const Carousel: React.FC<CarouselProps> = ({ children }) => {
  const numberofChildren = Children.toArray(children).length;

  return (
    <>
      <div className="snap-x snap-mandatory items-center overflow-scroll overflow-y-hidden scroll-smooth whitespace-nowrap">
        {children}
      </div>

      {/* {React.Children.map(children, (child)=>(<a href={child.props}))} */}
      <a href="#1">1</a>
      <a href="#2">2</a>
      <a href="#3">3</a>
    </>
  );
};

export default Carousel;
