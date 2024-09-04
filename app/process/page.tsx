import QuickConsultationForm from "@/components/form/QuickConsultationForm";
import Cushion from "@/components/layout/Cushion";
import PlanProcess from "@/components/main/process/PlanProcess";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";

const processData = [
  {
    title: "상담신청",
    description: "상담문의 신청 또는 <br /> 상담전화를 통해 전문가 배정",
    image: "/process-1.png",
  },
  {
    title: "신용&차량조회",
    description:
      "복잡한 서류 절차 없이 <br /> 체계적인 전산화 시스템으로 <br /> 신속정확 조회",
    image: "/process-2.png",
  },
  {
    title: "차량 매물 확인",
    description:
      "할부 조회한도 확인 후 <br /> 원하는 차량을 차량 전문가와 <br /> 직접확인",
    image: "/process-3.png",
  },
  {
    title: "계약&서류작업",
    description:
      "최종 결정된 차량으로 <br /> 할부 계약서 및 <br /> 매매 계약서 작성",
    image: "/process-4.png",
  },
  {
    title: "차량정비&인도",
    description:
      "명의 이전, 보험 업무처리 후 <br /> 차량 엔진오일 교환 등 정비하여 <br /> 당일출고 또는 고객님 댁까지 인도",
    image: "/process-6.png",
  },
  {
    title: "A/S 사후관리",
    description:
      "차량 구매 후에도 <br /> 보증내역에 있는 A/S 사후관리, <br /> 신용관리 Tip 제공",
    image: "/process-5.png",
  },
];

const ProcessPage = () => {
  return (
    <main className="pt-20 pb-[18.75rem]">
      <h1 className="text-size-2xl font-bold leading-[130%] text-center">
        헬로썸카의 <span className="text-primary">진행 절차</span>
      </h1>
      <div className="h-2 w-[8.875rem] bg-primary mt-8 mx-auto" />
      <dl
        className="mt-[11.125rem] grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-[5.5rem] md:gap-y-[12.875rem] gap-y-8 max-w-screen-8xl mx-auto w-full px-4 lg:px-0"
        id="process"
      >
        {processData.map((process, i) => (
          <div
            key={process.title}
            className="flex flex-col items-center justify-center bg-ghost-white rounded-2xl py-[2.125rem] shadow-md"
          >
            <div
              className={cn(
                "relative w-[10rem] h-[8.75rem]",
                (i === 2 || i === 3) && "scale-x-75"
              )}
            >
              <Image src={process.image} alt={process.title} fill />
            </div>
            <div className="size-8 rounded-full bg-primary my-[2.125rem]"></div>
            <dt className="text-size-lg font-bold leading-[130%] text-center">
              STEP {i + 1}. {process.title}
            </dt>
            <div className="h-1 w-[3.5rem] bg-primary my-6" />
            <dd
              className="text-base leading-[150%] text-center"
              dangerouslySetInnerHTML={{ __html: process.description }}
            ></dd>
          </div>
        ))}
      </dl>
      <section className="mt-[11.125rem] scroll-mt-36" id="payment-process">
        <h2 className="text-size-2xl font-bold leading-[130%] text-center">
          헬로썸카의 진행 절차{" "}
          <span className="text-primary">금융 대출 선택</span>
        </h2>
        <div className="h-2 w-[8.875rem] bg-primary mt-8 mx-auto mb-[7.375rem]" />
        <div className="flex flex-wrap gap-10 justify-center">
          <article className="process-article-container">
            <div className="process-top-container">
              <span className="process-option-number">OPTION 1.</span>
              <h3 className="process-option-title">중고차 전액할부</h3>
              <p className="process-option-subtitle">
                {"(신용등급"} <span className="text-primary">1~10등급</span>에
                해당 고객기준{")"}
              </p>
            </div>
            <ol className="process-list-item">
              <li>
                금융사에서 승인된 한도내에서 고객님이 원하시는 가장 좋은 차를
                선택하실수 있습니다.
              </li>
              <li>
                고객님의 신용등급과 차량금액, 차량연식에 따라 승인한도가
                결정됩니다.
              </li>
              <li>최대한 낮은 금리의 상품으로 진행합니다.</li>
              <li>
                할부기간 중 자유롭게 부분납부 및 중도일시완납이 가능하며
                할부원금을 상환할수록 월 할부금이 낮아지 는 장점이 있습니다.
              </li>
            </ol>
            <Link href="/contact" className="process-button">
              상담 신청
            </Link>
          </article>
          <article className="process-article-container">
            <div className="process-top-container">
              <span className="process-option-number">OPTION 2.</span>
              <h3 className="process-option-title">신용불량 중고차 렌트</h3>
              <p className="process-option-subtitle">
                {"(할부 상품 "} <span className="text-primary">이용불가</span>
                해당 고객기준{")"}
              </p>
            </div>
            <ol className="process-list-item">
              <li>무심사로 진행됩니다.</li>
              <li>
                {`보험료, 취등록세, 차량금액의 10%(최소기준)가 필요합니다.(약
                300-500만원)`}
              </li>
              <li>할부 종료 후 취등록세 납부 시에는 차량인수가 가능합니다.</li>
              <li>
                인수전까지는 본인명의가 아니기에 의료보험료, 재산세 등 각종
                세금비용절감 혜택의 장점이 있습니다.
              </li>
            </ol>
            <Link href="/contact" className="process-button">
              상담 신청
            </Link>
          </article>
          <article className="process-article-container">
            <div className="process-top-container">
              <span className="process-option-number">OPTION 3.</span>
              <h3 className="process-option-title">중고차 리스</h3>
              <p className="process-option-subtitle">
                {"(신용등급"} <span className="text-primary">1~5등급</span>에
                해당 고객기준{")"}
              </p>
            </div>
            <ol className="process-list-item">
              <li>
                출고5년이내의 차랑가격을 30~60% 절감된 비용으로 원하시는 차량을
                이용하실 수 있습니다.
              </li>
              <li>
                리스기간 종료 시 인수, 연장, 반납을 자유롭게 선택 가능하신
                상품입니다.
              </li>
              <li>
                이용중에는 리스사 명의로 의료호험료, 제산세등 각종 세금비용절감
                혜택의 장점이 있습니다.
              </li>
            </ol>
            <Link href="/contact" className="process-button">
              상담 신청
            </Link>
          </article>
        </div>
      </section>
      <PlanProcess />
      <QuickConsultationForm />
      <Cushion />
    </main>
  );
};

export default ProcessPage;
