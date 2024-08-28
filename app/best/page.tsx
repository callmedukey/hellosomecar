import CallToActionBentley from "@/components/layout/CallToActionBentley";
import BestCarousel from "@/components/main/best/BestCarousel";

const BestPage = () => {
  return (
    <main className="pt-20">
      <h1 className="text-center text-size-3xl font-bold leading-[100%]">
        HELLO썸카만의 <span className="text-primary">베스트 차량</span>
      </h1>
      <section className="mt-[9.75rem] mb-[19.125rem]">
        <BestCarousel />
      </section>
      <CallToActionBentley />
    </main>
  );
};

export default BestPage;
