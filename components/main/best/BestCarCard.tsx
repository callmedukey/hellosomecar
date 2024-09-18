import Image from "next/image";
import Link from "next/link";

function BestCarCard({ src, i }: { src: string; i: number }) {
  return (
    <div className="flex flex-col mx-auto" key={src}>
      <div className="relative min-h-[20rem] sm:w-[18rem] min-w-[15rem] mx-auto">
        <Image
          src={src}
          alt={"Best Car Sale + " + i}
          fill
          priority
          className="object-contain"
        />
      </div>
      <Link
        href="/contact"
        className="bg-primary font-bold leading-[100%] text-sm tracking-normal text-white rounded-xl flex items-center justify-center h-[2.25rem] max-w-[18rem] w-full mx-auto mt-[1.7rem]"
      >
        견적 문의
      </Link>
    </div>
  );
}

export default BestCarCard;
