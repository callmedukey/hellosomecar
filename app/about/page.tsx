import CallToActionBentley from "@/components/layout/CallToActionBentley";
import { cn } from "@/lib/utils";
import Image from "next/image";

const dataList = [
  {
    title: "안전 전검 시스템",
    image: "/first-car.webp",
    icon: "/data-3.png",
    description:
      "품질과 안정성을 갖춘 <br /> 자체 안전점검 시스템을 통해 <br /> 고객맞춤 서비스 제공!",
  },
  {
    title: "15년차 전문 경력",
    image: "/second-car.webp",
    icon: "/data-2.png",

    description:
      "개인 회생, 신용불량, 파산 등 <br /> 다양한 상황의 고객분들 <br /> 저신용 중고차 40,000건 달성!",
  },
  {
    title: "빠른 승인절차",
    image: "/third-car.webp",
    icon: "/data-1.png",
    description:
      "20개 이상의 협력 금융사 및 <br /> 전문화된 전산화 시스템을 통해 <br /> 신용조회 및 승인가지 1시간 내에 가능",
  },
];

const AboutPage = () => {
  return (
    <main className="">
      <section className="flex lg:justify-between justify-center min-h-[30rem] gap-[140px] max-screen-setting px-4">
        <div className="xl:pt-[144px] pt-12 col-span-2">
          <div className="flex flex-col gap-8">
            <h1 className="text-size-2xl font-bold leading-[130%]">
              안녕하세요
              <br />
              <span className="text-primary">헬로썸카</span> 입니다
            </h1>
            <div className="w-[8.875rem] h-2 bg-primary" />
          </div>
          <p className="mt-8 about-top-text max-w-[27.5rem] break-keep">
            헬로썸카는 신용 때문에 차량이 필요해도 구매가 어려웠던 분들 을 위해
            과거 연체 이력이 있어도, 신용이 낮아도 , 회복 , 회생 , 파산 진행
            중이어도 경력 15년의 노하우로 자체심사와 예외 승인을 통하여 높은
            승인율로 할부를 진행해 드립니다.
          </p>
          <p className="mt-12 about-top-text max-w-[28.75rem] break-keep">
            저신용자의 경우 금리가 부담스러울 수 밖에 없지만 저희 헬로썸카는
            고객님 상황에 알맞은 금융 설계로 타 업체보다 저렴한 금리로 진행할수
            되도록 직접 두발로 뛰어 이용이 가능하도 록 저희 헬로썸카가 꼼꼼하게
            진행해 안전한 거래를 진행하도록 약속드리겠습니다.
          </p>
        </div>
        <div className="relative col-span-3 basis-[800px] hidden lg:block">
          <Image
            quality={100}
            src="/about-car.webp"
            alt="Just another car"
            fill
            className="object-cover"
          />
        </div>
      </section>
      <div className="mt-[8.75rem] h-[8.75rem] bg-primary text-white text-size-3xl font-bold leading-[100%] flex items-center justify-center">
        HELLO썸카
      </div>
      <section className="pt-[7.5rem]">
        <div>
          <h2 className="text-size-2xl font-bold leading-[130%] text-center">
            헬로썸카를 <span className="text-primary">선택해야하는 이유??</span>
          </h2>
          <div className="w-[8.875rem] h-2 bg-primary mx-auto mt-8" />
        </div>
        <p className="mt-8 text-center text-size-lg font-medium leading-[150%]">
          15년의 수많은 저신용중고차 <br /> 할부성공 사례로 전문성이 있는 업체
        </p>
        <dl className="flex mx-auto pb-20 relative items-center justify-center flex-wrap gap-y-8 mt-12">
          <div className="h-6 w-full bg-primary absolute hidden sm:block " />
          {dataList.map((data, i) => (
            <div
              key={data.title}
              className="relative w-[30.5rem] h-[17.5rem] mx-[-1rem] sm:polygon"
            >
              <Image
                quality={100}
                src={data.image}
                alt={data.title}
                fill
                className="object-cover -z-10"
              />
              <div className="bg-black/50 absolute inset-0 -z-10" />
              <div className="flex flex-col items-center justify-center z-20 text-white h-full text-center">
                <div className="rounded-full flex items-center justify-center size-[6rem] relative mb-5">
                  <div className="absolute inset-0 rounded-full bg-secondary-gray/40" />
                  <Image
                    src={data.icon}
                    alt={data.title}
                    height={64}
                    width={64}
                    className={cn(
                      data.icon === "/data-3.png" && "scale-90",
                      "relative"
                    )}
                  />
                </div>
                <dt className="text-size-lg font-bold leading-[100%]">
                  {data.title}
                </dt>
                <dd
                  className="text-base leading-[150%] font-medium mt-5"
                  dangerouslySetInnerHTML={{ __html: data.description }}
                ></dd>
              </div>
            </div>
          ))}
        </dl>
      </section>
      <CallToActionBentley />
    </main>
  );
};

export default AboutPage;
