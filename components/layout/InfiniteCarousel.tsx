"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import Banner from "@/components/main/Banner";
import Banner2 from "@/components/main/Banner2";

const InfiniteCarousel = () => {
  const splideOptions = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 1, // Number of items visible per page
    perMove: 1, // Move one item at a time
    rewind: true, // Rewind to start when the end is reached
    pagination: false, // Enable pagination dots
    autoplay: true,
    interval: 5000,
    speed: 2000,
    arrows: false,
  };

  return (
    <section className="relative w-full max-w-screen-8xl mx-auto xl:h-[50vw] max-h-[40rem] overflow-hidden">
      <Splide options={splideOptions}>
        <SplideSlide>
          <Banner />
        </SplideSlide>
        <SplideSlide>
          <Banner2 />
        </SplideSlide>
      </Splide>
    </section>
  );
};

export default InfiniteCarousel;
