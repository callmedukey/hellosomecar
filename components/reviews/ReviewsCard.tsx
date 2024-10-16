"use client";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import "@splidejs/react-splide/css/core";
import ReviewCard from "./ReviewCard";
import { cn } from "@/lib/utils";
import ReviewTable from "../main/reviews/ReviewTable";

const ReviewsCard = ({
  isReviewPage,
  isMain = false,

  children,
}: {
  isReviewPage: boolean;
  isMain?: boolean;

  children?: React.ReactNode;
}) => {
  const splideOptions = {
    type: "loop", // Loop back to the beginning when reaching the end
    perPage: 1, // Number of items visible per page
    perMove: 1, // Move one item at a time
    pagination: false, // Enable pagination dots
    autoplay: true,
    interval: 2800,
    speed: 1800,
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
      title: "K5",
      content:
        "차가 너무 말썽이라 기변하고싶은 마음은 있었으나 신용도가 높지않아 고민하면서 여기 저기 알아보다가 우연히 헬로썸카 보구 바로 상담신청했는데 주말인데 연락도 바로 주시고 다음날 가능하단 말씀에 바로가서 구매해버렷네요!! 대표님도 너무 친절하고 차도 너무 좋고요~",
      date: "2022.05.07",
      reviewer: "김OO 고객님",
      stars: 5,
    },
    {
      title: "gv80",
      content: `담당 매니저님이 문제 해결할려구 열심히 해주신 모습보고 계약하길 잘했다는 생각이 들었네요~
<br/>
<br/>
본인 일 마냥 답변도 잘해주시고~^^
<br/>
<br/>
다음에도 또 헬로썸카 이용할 생각입니다~~`,
      date: "2024.02.27",
      reviewer: "박OO 고객님",
      stars: 5,
    },
    {
      title: "아반떼",
      content: `와이프가 갑자기 차량이 필요해서 차를 구매하게 
됬어요.
신용점수 때문에 걱정했는데 여러군데 알아보셔서 가격도 저렴했습니다.
<br />
<br />

기분 좋게 차량 인도 받았습니다. 감사합니다.`,
      date: "2022.05.05",
      reviewer: "류OO 고객님",
      stars: 5,
    },
    {
      title: "BMW 5시리즈 (g30)",
      content: `금액에 맞는 차량을 많은 옵션 별로 소개해 주셨고 무엇보다 친절한 상담 해주셨습니다. <br/>
덕분에 좋은 차량 합리적인 가격으로 인수하게 되었습니다. <br />
항상 편안한 서비스와 문의 내용을 빠르게 답변해주셔서 계약 과정도 수월하게 진행 되었습니다.`,
      date: "2024.04.15",
      reviewer: "이OO 고객님",
      stars: 5,
    },
    {
      title: "아반떼",
      content: `인생 첫차예요ㅠㅠㅠㅠ너무 좋습니다
<br/>
<br/>
계약한지 6일만에 차량 받았구요!!
대표님 완전 친절하시고 좋았어요ㅎㅎ 지인들한테 많이 추천할게용!!!
잘타고다니겠습니당`,
      date: "2023.07.16",
      reviewer: "황OO 고객님",
      stars: 5,
    },
    {
      title: "카니발",
      content: `제가 신용이 안좋아서 견적을 여러군데 받았는데
<br/>
<br/>
그중 저신용신차장기렌트가 가격이 가장 저렴했구요
<br/>
<br/>
엄청 친절하셨어요
<br/>
감사했습니다!`,
      date: "2023.07.16",
      reviewer: "황OO 고객님",
      stars: 5,
    },
    {
      title: "그랜져 ig ",
      content: `그랜져 알아보다가 지인소개로 진행하게 되었습니다.
첫 법인차량이라 질문도 많고 요구사항도 많았는데 꼼꼼하게 잘챙겨주셔서 감사합니다
<br/>
<br/>
저도 소개 많이 해드리겠습니다^^`,
      date: "2023.12.01",
      reviewer: "임OO 고객님",
      stars: 5,
    },
    {
      title: "티볼리",
      content: `차종도 정하지 않고 단순하게 업무용으로 쓸 저렴한 차량을 알아보던 중 상담 받게 됐습니다. <br/>
이것저것 모르는게 많아 질문도 많고 까다롭게 해서 귀찮으셨을 것 같은데 친절하게 상담 이어가 주시더라구요.`,
      date: "2023.9.05",
      reviewer: "황OO 고객님",
      stars: 5,
    },
  ];

  return (
    <div
      className={cn(
        "flex flex-col items-center bg-white",
        !isReviewPage && "py-8 justify-center",
        isReviewPage && "pb-[7.875rem]",
        isMain && "mt-24"
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

      {isReviewPage && children}
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
