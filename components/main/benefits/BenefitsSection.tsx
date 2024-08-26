// File: components/BenefitsSection.tsx
import Card from "./Card";
import ASCard from "./ASCard";
import FinanceCard from "./FinanceCard";

const BenefitsSection = () => {
  return (
    <div className="relative grid grid-rows-[1fr_10rem]">
      <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 max-w-screen-8xl mx-auto w-full gap-12 xl:items-end translate-y-24">
        <Text />
        <Card />
        <ASCard />
        <FinanceCard />
      </div>
      <div className="bg-ghost-white w-full h-full hidden xl:block" />
    </div>
  );
};

const Text = () => {
  return (
    <div className="flex flex-col xl:items-end justify-center xl:justify-normal items-center">
      <h3 className="text-size-2xl font-bold text-right">
        <span className="text-primary">헬로썸만</span>의 <br />
        특별한 혜택
      </h3>
      <div className="w-[9rem] h-2 bg-primary" />
    </div>
  );
};

export default BenefitsSection;
