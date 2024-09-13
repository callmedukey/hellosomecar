import QuickConsultationForm from "@/components/form/QuickConsultationForm";
import Cushion from "@/components/layout/Cushion";

const ContactPage = () => {
  return (
    <main className="pt-[5rem]">
      <h1 className="text-center text-size-2xl font-bold break-keep">
        업계 최저금리 <span className="text-primary">저신용 전액할부</span> 견적
        받기
      </h1>
      <section className="mt-[7.5rem] mb-[7rem]">
        <QuickConsultationForm />
      </section>
    </main>
  );
};

export default ContactPage;
