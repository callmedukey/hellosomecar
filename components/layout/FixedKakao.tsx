import Image from "next/image";
import React from "react";
import talkIcon from "@/public/talk.png";
const FixedKakao = () => {
  return (
    <div className="fixed bottom-24 right-6 z-10">
      <div className="flex lg:hidden items-center space-x-[0.75rem] text-[1.125rem] lg:text-[1.25rem]">
        <span className="text-black font-bold">1666-4855</span>
        <a href="https://open.kakao.com/o/sgykXrKg" target="_blank">
          <Image
            src={talkIcon}
            alt="KakaoTalk Icon"
            width={2.5 * 16}
            height={2.5 * 16}
            className="w-[2.5rem] h-[2.5rem] rounded-md sm:w-[3rem] sm:h-[3rem]"
          />
        </a>
      </div>
    </div>
  );
};

export default FixedKakao;
