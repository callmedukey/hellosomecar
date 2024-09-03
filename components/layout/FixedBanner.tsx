import Link from "next/link";

const FixedBanner = () => {
  return (
    <div className="fixed bottom-0 z-50 w-full lg:h-[6.25rem] h-[5rem] bg-primary flex items-center gap-4 justify-center leading-[1rem] fixed-banner-text tracking-normal">
      <span className="text-white text-xl">신용등급에 관계없이 간편 조회</span>
      <Link
        href="/contact"
        className="bg-white sm:px-12 px-8 py-2 rounded-lg lg:text-xl text-base hover:bg-white/80 transition-colors duration-300"
      >
        상담 신청
      </Link>
    </div>
  );
};

export default FixedBanner;
