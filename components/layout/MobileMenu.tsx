"use client";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { links } from "./Header";

const MobileMenu = () => {
  const [open, setOpen] = useState(false);

  return (
    <Drawer direction="right" open={open} onOpenChange={setOpen}>
      <DrawerTrigger
        className="lg:hidden ml-auto mr-0 text-black focus:outline-none"
        aria-label="모바일 메뉴"
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
      </DrawerTrigger>
      <DrawerContent className="px-2 text-xl py-4 ">
        <nav className="flex flex-col gap-4 px-4">
          {links.map((nav) => (
            <Link href={nav.href} key={nav.href} onClick={() => setOpen(false)}>
              {nav.name}
            </Link>
          ))}
        </nav>
      </DrawerContent>
    </Drawer>
  );
};

export default MobileMenu;
