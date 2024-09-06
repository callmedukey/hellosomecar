"use client";
import { cn } from "@/lib/utils";
import talkIcon from "@/public/talk.png";
import { useState } from "react";
import Image from "next/image";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export const links = [
  {
    name: "회사 소개",
    href: "/about",
  },
  {
    name: "베스트 차량",
    href: "/best",
  },
  {
    name: "진행절차",
    href: "/process",
  },
  {
    name: "구매후기",
    href: "/review",
  },
  {
    name: "문의하기",
    href: "/contact",
  },
];

const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  return (
    <header className="w-full bg-white border-b border-tertiary-gray sticky top-0 left-0 right-0 z-50">
      <div className="max-w-screen-8xl mx-auto px-[1rem] py-[1.5rem] flex items-center justify-between">
        {/* Logo and Submenu Toggle Button */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <Link
            href="/"
            className="text-primary font-bold text-size-xl leading-[var(--text-size-xl)]"
          >
            HELLO썸카
          </Link>

          {/* Submenu Toggle Button (Only on mobile) */}
          <MobileMenu />
        </div>

        {/* Navigation Links */}
        <nav
          className={cn(
            `lg:flex flex-row mt-[1rem] sm:mt-0 gap-[1rem] sm:gap-[1.5rem] text-primary-gray text-[1.125rem] sm:text-[1.25rem] font-medium hidden`
          )}
        >
          <Link
            href="/about"
            className="hover:text-primary hover:font-bold duration-300 transition-all"
          >
            회사 소개
          </Link>
          <Link
            href="/best"
            className="hover:text-primary hover:font-bold duration-300 transition-all"
          >
            베스트 차량
          </Link>
          <div className="hover:text-primary hover:font-bold  relative group">
            <Link href="/process">진행절차</Link>
            <div className="absolute left-1/2 -translate-x-1/2 w-[7rem] hidden group-hover:block z-10 bg-white">
              <div className="h-8" />
              <div className="flex flex-col items-center border border-primary">
                <Link
                  href="/process#plan-process"
                  className="hover:bg-primary hover:text-white duration-300 transition-all w-full text-center py-1"
                >
                  할부 조건
                </Link>
                <Link
                  href="/process#payment-process"
                  className="hover:bg-primary hover:text-white duration-300 transition-all w-full text-center py-1"
                >
                  금융 대출 선택
                </Link>
              </div>
            </div>
          </div>
          <Link
            href="/review"
            className="hover:text-primary hover:font-bold duration-300 transition-all"
          >
            구매후기
          </Link>
          <Link
            href="/contact"
            className="hover:text-primary hover:font-bold duration-300 transition-all"
          >
            문의하기
          </Link>
        </nav>

        {/* Contact Info (Hidden on smaller screens) */}
        <div className="hidden lg:flex items-center space-x-[0.75rem] text-[1.125rem] lg:text-[1.25rem]">
          <a href="tel:1666-4855" className="text-black font-bold">
            1666-4855
          </a>
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
    </header>
  );
};

export default Header;
