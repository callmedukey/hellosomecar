import Image from "next/image";
import Link from "next/link";
import OverlayGradient from "./OverlayGradient";
import CarouselNumberIndicator from "./CarouselNumberIndicator";

const Banner2 = () => {
  return (
    <div className="relative max-w-screen-8xl w-full mx-auto lg:h-[50vw] max-h-[40rem] h-[clamp(20rem,50vw,40rem)] text-white grid lg:grid-cols-[24px,1fr,24px] grid-cols-[24px,1fr] px-4">
      <Image src="/Banner2.webp" alt="Car" fill className="-z-10" priority />
      <OverlayGradient displayIndex={2} />
      <CarouselNumberIndicator currentIndex={2} />
      <div className="lg:px-[80px] px-[20px] md:px-[40px] lg:pt-[120px] pt-[30px] flex flex-col lg:gap-y-8 gap-y-4">
        <h1 className="carousel-title font-bold leading-[130%]">
          심사부터 출고까지 <br className="sm:hidden lg:block" /> 다이렉트!
        </h1>
        <div className="text-secondary-gray carousel-text">
          <p className="lg:mb-5 mb-2 sm:mb-3">
            한도 부족 타사 거절돼도
            <br />
            연체 중이 아니고 소득증빙 가능하면 ok
          </p>
          <p className="">
            개인회생 파산면책 인가 후 신용 회복은 <br /> 회복 후 납부 1회 이상
            즉시 가능
          </p>
        </div>
        <Link
          href="/contact"
          className="carousel-link mt-2 sm:mt-3 lg:mb-0 lg:mt-4"
        >
          상담 신청 하기
        </Link>
      </div>
    </div>
  );
};

export default Banner2;
