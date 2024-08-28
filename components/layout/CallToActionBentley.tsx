import Image from "next/image";
import Link from "next/link";

function CallToActionBentley() {
  return (
    <section className="mt-[7.5rem] relative w-full min-h-[27.5rem] flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 w-full h-full z-10" />
      <Image
        src="/about-last-car.webp"
        alt="Just another car"
        fill
        className="object-cover object-center"
      />
      <article className="z-30">
        <p className="text-center about-normal-text text-white px-4 break-keep tracking-normal">
          전문적인 노하우로 최저금리와 최고한도의 원하시는 차량을 신속정확하게{" "}
          <br />
          <span className="about-important-text">헬로썸카의 전문 시스템</span>
          이 있다면 가능합니다. <br />
          <span className="about-important-text">
            헬로썸카가 최저가 차량 견적부터 출고
          </span>{" "}
          까지 책임지겠습니다!
        </p>
        <Link
          href="/contact"
          className="carousel-link mx-auto mt-12 sm:max-w-[30rem] max-w-[18rem] w-full text-lg h-12"
        >
          상담 신청 하기
        </Link>
      </article>
    </section>
  );
}

export default CallToActionBentley;
