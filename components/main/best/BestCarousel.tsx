"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import BestCarCard from "./BestCarCard";

const bestCarData = [
  {
    model: "제네시스 G80",
    leftText: "월 할부 금액",
    cost: "59만원",
    duration: "최장 72개월",
    image: "/genesis.png",
  },
  {
    model: "제네시스 G80",
    leftText: "월 할부 금액",
    cost: "59만원",
    duration: "최장 72개월",
    image: "/genesis.png",
  },
  {
    model: "제네시스 G80",
    leftText: "월 할부 금액",
    cost: "59만원",
    duration: "최장 72개월",
    image: "/genesis.png",
  },
  {
    model: "제네시스 G80",
    leftText: "월 할부 금액",
    cost: "59만원",
    duration: "최장 72개월",
    image: "/genesis.png",
  },
  {
    model: "제네시스 G80",
    leftText: "월 할부 금액",
    cost: "59만원",
    duration: "최장 72개월",
    image: "/genesis.png",
  },
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
            <BestCarCard {...data} i={i} />
          </SplideSlide>
        ))}
      </Splide>
      <Splide options={splideOptions2}>
        {bestCarData.map((data, i) => (
          <SplideSlide key={i}>
            <BestCarCard {...data} i={i} />
          </SplideSlide>
        ))}
      </Splide>
    </section>
  );
};

export default BestCarousel;
