import Image from "next/image";
import Link from "next/link";

function BestCarCard(data: {
  model: string;
  leftText: string;
  cost: string;
  duration: string;
  image: string;
  i: number;
}) {
  return (
    <div
      className="flex flex-col sm:w-[18rem] w-[15rem] mx-auto"
      key={data.model + data.i}
    >
      <div className="relative h-[7.5rem] sm:w-[18rem] w-[15rem]">
        <Image src={data.image} alt={data.model} fill />
      </div>
      <dl className="border-y border-random-gray tracking-normal flex flex-col gap-12 text-center py-7 mt-[2.125rem]">
        <dt className="font-bold leading-[100%]">{data.model}</dt>
        <dd className="flex gap-4 text-xs leading-[100%] font-bold mx-auto">
          <span>{data.leftText}</span>
          <span>
            <span className="text-primary">{data.cost}</span> / {data.duration}
          </span>
        </dd>
      </dl>
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
