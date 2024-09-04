import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const processPaymentData1 = [
  {
    title: "파산면책",
    text: "면책 승인 후 바로 중고차 전액할부 가능 속득 증빙자료 필수",
    image: "/process-1.webp",
  },
  {
    title: "개인 회생",
    text: "인가 후 10% 이상 납부 시 중고차 전액 할부 가능 소득 증빙자료 필수",
    image: "/process-2.webp",
  },
  {
    title: "6-10등급 타사부결",
    text: "헬로썸만의 특별심사조건으로 누구나 전액할부 가능",
    image: "/process-3.webp",
  },
];

const processPaymentData2 = [
  {
    title: "신용회복",
    text: "신용회복 30% 이상 납부 시 중고차 전액 할부 가능 소득 증빙자료 필수",
    image: "/process-4.webp",
  },
  {
    title: "프리랜서",
    text: "현재 소득증빙만 가능하면 누구나 전액할부 가능",
    image: "/process-5.webp",
  },
  {
    title: "여신사 전체부결",
    text: "선수금 100-200정도 (보증금) 준비 시 원하시는 신차/중고차 장기렌트 가능",
    image: "/process-6.webp",
  },
];

const PlanProcess = ({ main = false }: { main?: boolean }) => {
  return (
    <section
      className={cn(main ? "mt-24" : "pt-[11.875rem]", "scroll-mt-36")}
      id="plan-process"
    >
      <h2 className="text-size-2xl font-bold leading-[130%] text-center">
        헬로썸카의 <span className="text-primary">할부 조건</span>
      </h2>
      <div className="h-2 w-[8.875rem] bg-primary mt-8 mx-auto mb-[6.56rem]" />
      <dl className="flex mx-auto relative items-center justify-center flex-wrap gap-y-8 mt-12 gap-x-16">
        <div className="h-6 w-full bg-primary absolute hidden sm:block -z-10" />

        {processPaymentData1.map((data, i) => (
          <div
            key={data.title}
            className="relative w-[30.5rem] h-[17.5rem] mx-[-1rem] p-[2.5rem] rounded-2xl overflow-hidden"
          >
            <Image
              quality={100}
              src={data.image}
              alt={data.title}
              fill
              className="object-cover -z-10"
            />
            <div className="bg-black/50 absolute inset-0 -z-10" />
            <div className="flex flex-col z-20 text-white h-full text-center ">
              <dt className="text-size-lg font-bold leading-[100%] border-b-2 border-white pb-[1.75rem] border-dashed">
                {data.title}
              </dt>
              <dd
                className="text-base leading-[150%] font-medium mt-5 max-w-[14rem] mx-auto break-keep tracking-normal"
                dangerouslySetInnerHTML={{ __html: data.text }}
              ></dd>
              <Link
                href="/contact"
                className="mt-auto h-[3.125rem] flex items-center justify-center bg-white/30 text-white font-bold text-lg px-[3.5625rem] w-fit mx-auto"
              >
                상담 신청
              </Link>
            </div>
          </div>
        ))}
      </dl>
      <dl className="flex mx-auto pb-20 relative items-center justify-center flex-wrap gap-y-8 gap-x-16 mt-8">
        <div className="h-6 w-full bg-primary absolute hidden sm:block -z-10" />

        {processPaymentData2.map((data, i) => (
          <div
            key={data.title}
            className="relative w-[30.5rem] h-[17.5rem] mx-[-1rem] p-[2.5rem] rounded-2xl overflow-hidden"
          >
            <Image
              quality={100}
              src={data.image}
              alt={data.title}
              fill
              className="object-cover -z-10"
            />
            <div className="bg-black/50 absolute inset-0 -z-10" />
            <div className="flex flex-col z-20 text-white h-full text-center ">
              <dt className="text-size-lg font-bold leading-[100%] border-b-2 border-white pb-[1.75rem] border-dashed">
                {data.title}
              </dt>
              <dd
                className="text-base leading-[150%] font-medium mt-5 max-w-[14rem] mx-auto break-keep tracking-normal"
                dangerouslySetInnerHTML={{ __html: data.text }}
              ></dd>
              <Link
                href="/contact"
                className="mt-auto h-[3.125rem] flex items-center justify-center bg-white/30 text-white font-bold text-lg px-[3.5625rem] w-fit mx-auto"
              >
                상담 신청
              </Link>
            </div>
          </div>
        ))}
      </dl>
    </section>
  );
};

export default PlanProcess;
