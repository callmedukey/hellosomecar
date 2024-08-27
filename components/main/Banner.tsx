import Image from "next/image";
import Link from "next/link";
import CarouselNumberIndicator from "./CarouselNumberIndicator";
import OverlayGradient from "./OverlayGradient";

const Banner = () => {
  return (
    <div className="relative max-w-screen-8xl w-full mx-auto lg:h-[50vw] h-[clamp(20rem,50vw,40rem)] max-h-[40rem] text-white grid lg:grid-cols-[24px,1fr,24px] grid-cols-[24px,1fr] px-4">
      <Image src="/Banner1.webp" alt="Car" fill className="-z-10" priority />
      <OverlayGradient displayIndex={1} />
      <CarouselNumberIndicator currentIndex={1} />
      <div className="lg:px-[80px] px-[20px] lg:pt-[120px] sm:pt-[60px] pt-[30px] flex flex-col lg:gap-y-8 gap-y-4">
        <h1 className="carousel-title leading-[100%]">
          저신용으로 인한 중고차 구매가
          <br /> 힘드신가요?
        </h1>
        <p className="text-secondary-gray carousel-text">
          파산/면책/회생/신용불량/한도 부족 ok
        </p>
        <Link
          href="/contact"
          className="carousel-link mb-20 mt-auto lg:mb-auto lg:mt-16"
        >
          상담 신청 하기
        </Link>
      </div>
    </div>
  );
};

export default Banner;
