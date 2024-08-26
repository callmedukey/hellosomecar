"use client";
import { cn } from "@/lib/utils";
import talkIcon from "@/public/talk.png";
import { useState } from "react";
import Image from "next/image";

const Header = () => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };
  return (
    <header className="w-full bg-white border-b border-tertiary-gray">
      <div className="max-w-screen-8xl mx-auto px-[1rem] py-[1.5rem] flex items-center justify-between">
        {/* Logo and Submenu Toggle Button */}
        <div className="flex items-center justify-between w-full lg:w-auto">
          <div className="text-primary font-bold text-size-xl leading-[var(--text-size-xl)]">
            HELLO썸카
          </div>

          {/* Submenu Toggle Button (Only on mobile) */}
          <button
            onClick={toggleSubmenu}
            className="lg:hidden ml-auto mr-0 text-gray-600 focus:outline-none"
          >
            <svg
              className="w-[2rem] h-[2rem]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>

        {/* Navigation Links */}
        <nav
          className={cn(
            `grid lg:flex flex-row mt-[1rem] sm:mt-0 gap-[1rem] sm:gap-[1.5rem] text-primary-gray text-[1.125rem] sm:text-[1.25rem] font-medium`,
            isSubmenuOpen ? "grid-cols-2" : "hidden"
          )}
        >
          <a
            href="#"
            className="hover:text-primary hover:font-bold duration-300 transition-all"
          >
            회사 소개
          </a>
          <a
            href="#"
            className="hover:text-primary hover:font-bold duration-300 transition-all"
          >
            베스트 차량
          </a>
          <a
            href="#"
            className="hover:text-primary hover:font-bold duration-300 transition-all"
          >
            진행절차
          </a>
          <a
            href="#"
            className="hover:text-primary hover:font-bold duration-300 transition-all"
          >
            구매후기
          </a>
          <a
            href="#"
            className="hover:text-primary hover:font-bold duration-300 transition-all"
          >
            문의하기
          </a>
        </nav>

        {/* Contact Info (Hidden on smaller screens) */}
        <div className="hidden lg:flex items-center space-x-[0.75rem] text-[1.125rem] lg:text-[1.25rem]">
          <span className="text-black font-bold">1666-4855</span>
          <Image
            src={talkIcon}
            alt="KakaoTalk Icon"
            width={2.5 * 16}
            height={2.5 * 16}
            className="w-[2.5rem] h-[2.5rem] rounded-md sm:w-[3rem] sm:h-[3rem]"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
