import QuickConsultationForm from "@/components/form/QuickConsultationForm";
import InfiniteCarousel from "@/components/layout/InfiniteCarousel";
import BenefitsSection from "@/components/main/benefits/BenefitsSection";
import ReviewsPage from "@/components/reviews/ReviewsPage";

export default function Home() {
  return (
    <main className="break-keep">
      <InfiniteCarousel />
      <div className="text-center pt-[188px] pb-[103px]">
        <h2 className="lg:text-size-2xl text-size-xl font-bold text-black leading-[130%]">
          업계최저금리 <br />
          <span className="text-primary font-bold">저신용 전액할부</span> 견적
          받기
        </h2>
        <div className="h-[0.5rem] bg-primary mx-auto mt-8 w-[142px]" />
      </div>
      <QuickConsultationForm />
      <section className="xl:pt-[188px]">
        <BenefitsSection />
      </section>
      <ReviewsPage />
    </main>
  );
}
