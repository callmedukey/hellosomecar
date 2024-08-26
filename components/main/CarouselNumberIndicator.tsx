import React from "react";

const CarouselNumberIndicator = ({
  currentIndex,
}: {
  currentIndex: number;
}) => {
  return (
    <div className="grid lg:grid-rows-[120px,1fr,120px] grid-rows-[30px,1fr,30px] sm:grid-rows-[60px,1fr,60px] md:grid-rows-[80px,1fr,80px]">
      <span />
      <span className="flex flex-col justify-start items-center border-y-2 border-white/20 py-[40px] gap-y-[20px] lg:text-lg text-sm uppercase font-bold text-white/20">
        <span
          className={`${currentIndex === 1 ? "text-white" : "text-white/20"}`}
        >
          01
        </span>
        <span
          className={`${currentIndex === 2 ? "text-white" : "text-white/20"}`}
        >
          02
        </span>
      </span>
      <span></span>
    </div>
  );
};

export default CarouselNumberIndicator;
