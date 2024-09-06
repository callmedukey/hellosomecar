"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import BestCarCard from "./BestCarCard";

const bestCarData = [
  "/cars/0.webp",
  "/cars/1.webp",
  "/cars/2.webp",
  "/cars/3.webp",
  "/cars/4.webp",
  "/cars/5.webp",
  "/cars/6.webp",
  "/cars/7.webp",
  "/cars/8.webp",
  "/cars/9.webp",
  "/cars/10.webp",
  "/cars/11.webp",
  "/cars/12.webp",
  "/cars/13.webp",
  "/cars/14.webp",
  "/cars/15.webp",
  "/cars/16.webp",
  "/cars/17.webp",
  "/cars/18.webp",
  "/cars/19.webp",
  "/cars/20.webp",
  "/cars/21.webp",
  "/cars/22.webp",
  "/cars/23.webp",
  "/cars/24.webp",
  "/cars/25.webp",
  "/cars/26.webp",
  "/cars/27.webp",
  "/cars/28.webp",
  "/cars/29.webp",
];
const BestCarousel = () => {
  const splideOptions1 = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 1, // Number of items visible per page
    perMove: 1, // Move one item at a time
    pagination: false, // Enable pagination dots
    autoplay: true,
    interval: 4000,
    speed: 3500,
    arrows: false,
    easing: "ease",
    mediaQuery: "min",
    breakpoints: {
      500: {
        perPage: 2,
        perMove: 1,
      },
      1024: {
        perPage: 3,
        perMove: 1,
      },
      1280: {
        perPage: 4,
        perMove: 1,
      },
    },
  };
  const splideOptions2 = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 1, // Number of items visible per page
    perMove: 1, // Move one item at a time
    pagination: false, // Enable pagination dots
    autoplay: true,
    interval: 4250,
    speed: 4000,
    easing: "ease-in-out",
    arrows: false,
    mediaQuery: "min",
    breakpoints: {
      500: {
        perPage: 2,
        perMove: 1,
      },
      1024: {
        perPage: 3,
        perMove: 1,
      },
      1280: {
        perPage: 4,
        perMove: 1,
      },
    },
  };

  return (
    <section className="relative w-full max-w-screen-8xl mx-auto overflow-hidden flex flex-col gap-12 px-4">
      <Splide options={splideOptions1}>
        {bestCarData.map((data, i) => (
          <SplideSlide key={i}>
            <BestCarCard src={data} i={i} />
          </SplideSlide>
        ))}
      </Splide>
      <Splide options={splideOptions2}>
        {bestCarData.reverse().map((data, i) => (
          <SplideSlide key={i}>
            <BestCarCard src={data} i={i} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default BestCarousel;
