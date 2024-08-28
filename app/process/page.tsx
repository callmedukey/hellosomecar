import QuickConsultationForm from "@/components/form/QuickConsultationForm";
import Cushion from "@/components/layout/Cushion";
import Image from "next/image";
import Link from "next/link";

const processData = [
  {
    title: "상담신청",
    description: "상담문의 신청 또는 <br /> 상담전화를 통해 전문가 배정",
  },
  {
    title: "신용&차량조회",
    description:
      "복잡한 서류 절차 없이 <br /> 체계적인 전산화 시스템으로 <br /> 신속정확 조회",
  },
  {
    title: "차량 매물 확인",
    description:
      "할부 조회한도 확인 후 <br /> 원하는 차량을 차량 전문가와 <br /> 직접확인",
  },
  {
    title: "계약&서류작업",
    description:
      "최종 결정된 차량으로 <br /> 할부 계약서 및 <br /> 매매 계약서 작성",
  },
  {
    title: "차량정비&인도",
    description:
      "명의 이전, 보험 업무처리 후 <br /> 차량 엔진오일 교환 등 정비하여 <br /> 당일출고 또는 고객님 댁까지 인도",
  },
  {
    title: "A/S 사후관리",
    description:
      "차량 구매 후에도 <br /> 보증내역에 있는 A/S 사후관리, <br /> 신용관리 Tip 제공",
  },
];

const processPaymentData1 = [
  {
    title: "파산면책",
    text: "면책 승인 후 바로 중고차 전액할부 가능 속득 증빙자료 필수",
    image: "/process-1.webp",
  },
  {
    title: "개인 회생",
    text: "인가 후 10% 이상 납부 시 중고차 전액 할부 가능 소득 증빙자료 필수",
    image: "/process-2.webp",
  },
  {
    title: "6-10등급 타사부결",
    text: "헬로썸만의 특별심사조건으로 누구나 전액할부 가능",
    image: "/process-3.webp",
  },
];

const processPaymentData2 = [
  {
    title: "신용회복",
    text: "신용회복 30% 이상 납부 시 중고차 전액 할부 가능 소득 증빙자료 필수",
    image: "/process-4.webp",
  },
  {
    title: "프리랜서",
    text: "현재 소득증빙만 가능하면 누구나 전액할부 가능",
    image: "/process-5.webp",
  },
  {
    title: "여신사 전체부결",
    text: "선수금 100-200정도 (보증금) 준비 시 원하시는 신차/중고차 장기렌트 가능",
    image: "/process-6.webp",
  },
];

const ProcessPage = () => {
  return (
    <main className="pt-20 pb-[18.75rem]">
      <h1 className="text-size-2xl font-bold leading-[130%] text-center">
        헬로썸카의 <span className="text-primary">진행 절차</span>
      </h1>
      <div className="h-2 w-[8.875rem] bg-primary mt-8 mx-auto" />

      <section className="mt-[11.125rem]">
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
      <section className="pt-[11.875rem] ">
        <h2 className="text-size-2xl font-bold leading-[130%] text-center">
          헬로썸카의 <span className="text-primary">할부 조건</span>
        </h2>
        <div className="h-2 w-[8.875rem] bg-primary mt-8 mx-auto mb-[6.56rem]" />
        <dl className="flex mx-auto relative items-center justify-center flex-wrap gap-y-8 mt-12 gap-x-16">
          <div className="h-6 w-full bg-primary absolute hidden sm:block -z-10" />

          {processPaymentData1.map((data, i) => (
            <div
              key={data.title}
              className="relative w-[30.5rem] h-[17.5rem] mx-[-1rem] p-[2.5rem] rounded-2xl overflow-hidden"
            >
              <Image
                quality={100}
                src={data.image}
                alt={data.title}
                fill
                className="object-cover -z-10"
              />
              <div className="bg-black/50 absolute inset-0 -z-10" />
              <div className="flex flex-col z-20 text-white h-full text-center ">
                <dt className="text-size-lg font-bold leading-[100%] border-b-2 border-white pb-[1.75rem] border-dashed">
                  {data.title}
                </dt>
                <dd
                  className="text-base leading-[150%] font-medium mt-5 max-w-[14rem] mx-auto break-keep tracking-normal"
                  dangerouslySetInnerHTML={{ __html: data.text }}
                ></dd>
                <Link
                  href="/contact"
                  className="mt-auto h-[3.125rem] flex items-center justify-center bg-white/30 text-white font-bold text-lg px-[3.5625rem] w-fit mx-auto"
                >
                  상담 신청
                </Link>
              </div>
            </div>
          ))}
        </dl>
        <dl className="flex mx-auto pb-20 relative items-center justify-center flex-wrap gap-y-8 gap-x-16 mt-8">
          <div className="h-6 w-full bg-primary absolute hidden sm:block -z-10" />

          {processPaymentData2.map((data, i) => (
            <div
              key={data.title}
              className="relative w-[30.5rem] h-[17.5rem] mx-[-1rem] p-[2.5rem] rounded-2xl overflow-hidden"
            >
              <Image
                quality={100}
                src={data.image}
                alt={data.title}
                fill
                className="object-cover -z-10"
              />
              <div className="bg-black/50 absolute inset-0 -z-10" />
              <div className="flex flex-col z-20 text-white h-full text-center ">
                <dt className="text-size-lg font-bold leading-[100%] border-b-2 border-white pb-[1.75rem] border-dashed">
                  {data.title}
                </dt>
                <dd
                  className="text-base leading-[150%] font-medium mt-5 max-w-[14rem] mx-auto break-keep tracking-normal"
                  dangerouslySetInnerHTML={{ __html: data.text }}
                ></dd>
                <Link
                  href="/contact"
                  className="mt-auto h-[3.125rem] flex items-center justify-center bg-white/30 text-white font-bold text-lg px-[3.5625rem] w-fit mx-auto"
                >
                  상담 신청
                </Link>
              </div>
            </div>
          ))}
        </dl>
      </section>
      <QuickConsultationForm />
      <Cushion />
    </main>
  );
};

export default ProcessPage;
