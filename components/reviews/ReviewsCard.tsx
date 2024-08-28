"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import ReviewCard from "./ReviewCard";
import { cn } from "@/lib/utils";

const ReviewsCard = ({ isReviewPage }: { isReviewPage: boolean }) => {
  const splideOptions = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 1, // Number of items visible per page
    perMove: 1, // Move one item at a time
    pagination: false, // Enable pagination dots
    autoplay: true,
    interval: 5000,
    speed: 2000,
    arrows: false,
    mediaQuery: "min",
    padding: "0%",
    breakpoints: {
      768: {
        padding: "15%",
        gap: "22rem",
        perPage: 3,
        perMove: 1,
      },
      1024: {
        padding: "35%",
        gap: "27rem",
        perPage: 4,
        perMove: 1,
      },
      1280: {
        padding: "35%",
        gap: "30rem",
        perPage: 4,
        perMove: 1,
      },
    },
  };
  const reviews = [
    {
      title: "싼타페 DM",
      subtitle: "개인 회생 25회차 저신용인데 홈서비스까지!",
      content:
        "썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요",
      date: "2024.07.07",
      reviewer: "주OO 고객님",
      stars: 5,
    },
    {
      title: "싼타페 DM",
      subtitle: "개인 회생 25회차 저신용인데 홈서비스까지!",
      content:
        "썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요",
      date: "2024.07.07",
      reviewer: "주OO 고객님",
      stars: 5,
    },
    {
      title: "싼타페 DM",
      subtitle: "개인 회생 25회차 저신용인데 홈서비스까지!",
      content:
        "썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요",
      date: "2024.07.07",
      reviewer: "주OO 고객님",
      stars: 5,
    },
    {
      title: "싼타페 DM",
      subtitle: "개인 회생 25회차 저신용인데 홈서비스까지!",
      content:
        "썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요",
      date: "2024.07.07",
      reviewer: "주OO 고객님",
      stars: 5,
    },
    {
      title: "싼타페 DM",
      subtitle: "개인 회생 25회차 저신용인데 홈서비스까지!",
      content:
        "썬루프있는 상태 좋은 싼타페를 비대면으로 집 앞까지 차를 가져다주셨습니다. 정비도 전체적으로 싹 해주시고 엔진오일 서비스에 친절하게 처리해주셨어요",
      date: "2024.07.07",
      reviewer: "주OO 고객님",
      stars: 5,
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col items-center bg-white",
        !isReviewPage && "py-8 justify-center",
        isReviewPage && "pb-[7.875rem]"
      )}
    >
      {isReviewPage ? (
        <h1 className="mb-4 text-size-2xl font-bold text-center">
          저희 고객 후기
          <br />
          <span className="text-primary">평균 평점 4.8</span>
        </h1>
      ) : (
        <h4 className="mb-4 text-size-2xl font-bold text-center">
          저희 고객 후기
          <br />
          <span className="text-primary">평균 평점 4.8</span>
        </h4>
      )}
      <div className="mx-auto my-8 w-[8.875rem] h-2 bg-primary"></div>
      <div
        className={cn("relative w-full z-10", isReviewPage && "mt-[9.625rem]")}
      >
        <div className="absolute top-1/2 w-full h-[4.25rem] translate-y-[-50%] bg-primary -z-10" />
        <Splide options={splideOptions}>
          {reviews.concat(reviews).map((review, index) => (
            <SplideSlide key={index}>
              <ReviewCard {...review} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};

export default ReviewsCard;