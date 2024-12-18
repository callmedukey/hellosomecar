"use client";
import { useState, FormEvent } from "react";
import { submitConsultation } from "@/app/actions/submitConsultation";
import Image from "next/image";
import { z } from "zod";

const QuickConsultationForm: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [name, setName] = useState("");
  const [desiredCar, setDesiredCar] = useState("");
  const [purchaseMethod, setPurchaseMethod] = useState("");
  const [referrer, setReferrer] = useState("");
  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "");
    if (value.length > 3 && value.length <= 7) {
      value = `${value.slice(0, 3)}-${value.slice(3)}`;
    } else if (value.length > 7) {
      value = `${value.slice(0, 3)}-${value.slice(3, 7)}-${value.slice(7, 11)}`;
    }
    setPhoneNumber(value.slice(0, 13));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !phoneNumber || !desiredCar || !purchaseMethod || !referrer) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const { success, data: parsedData } = z
      .object({
        name: z.string().trim(),
        phoneNumber: z.string().trim(),
        desiredCar: z.string().trim(),
        purchaseMethod: z.string().trim(),
        referrer: z.string().trim(),
      })
      .safeParse({
        name,
        phoneNumber,
        desiredCar,
        purchaseMethod,
        referrer,
      });

    if (!success) {
      alert("모든 항목을 입력해주세요.");
      return;
    }

    const result = await submitConsultation({
      name,
      phoneNumber,
      desiredCar,
      purchaseMethod,
      referrer,
    });

    if (result.success) {
      alert("문의가 정상적으로 접수되셨습니다!");
    } else {
      alert("문의 접수에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  return (
    <div className="flex flex-col xl:flex-row rounded-lg mx-auto bg-ghost-white max-w-screen-8xl tracking-normal py-[3.5rem] items-center">
      <Image
        src="/silvercar.png"
        alt="Car"
        width={758}
        height={305}
        className="shrink"
        priority
      />
      <div className="w-full max-w-fit">
        <div className="flex flex-col xl:flex-row xl:items-center mb-4 gap-4">
          <h2 className="consultation-title">빠른 상담 신청</h2>
          <p className="text-primary-gray font-bold">
            *담당자 배정후 빠르게 연락드리도록 하겠습니다.
          </p>
        </div>
        <form
          className="divide-y-2 divide-tertiary-grayl"
          onSubmit={handleSubmit}
        >
          <div className="flex flex-col md:flex-row items-center py-4">
            <label
              className="block text-sm font-medium text-gray-700 w-full md:w-[6rem]"
              htmlFor="name"
            >
              이름
            </label>
            <input
              type="text"
              name="name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="mt-1 md:mt-0 block flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
            />
          </div>
          <div className="flex flex-col md:flex-row items-center py-4">
            <label
              className="block text-sm font-medium text-gray-700 w-full md:w-[6rem]"
              htmlFor="phoneNumber"
            >
              연락처
            </label>
            <input
              type="text"
              name="phoneNumber"
              required
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              className="mt-1 md:mt-0 block flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
              maxLength={13}
            />
          </div>
          <div className="flex flex-col md:flex-row items-center py-4">
            <label
              className="block text-sm font-medium text-gray-700 w-full md:w-[6rem]"
              htmlFor="desiredCar"
            >
              희망 차량
            </label>
            <input
              type="text"
              name="desiredCar"
              required
              value={desiredCar}
              onChange={(e) => setDesiredCar(e.target.value)}
              className="mt-1 md:mt-0 block flex-1 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-primary focus:border-primary "
            />
          </div>
          <div className="flex flex-col md:flex-row items-center py-4 border-tertiary-gray">
            <label
              className="block text-sm font-medium text-gray-700 w-full md:w-[6rem]"
              htmlFor="purchaseMethod"
            >
              구매 방법
            </label>
            <div className="mt-1 md:mt-0 flex-1 flex space-x-4">
              <div className="flex items-center">
                <input
                  id="visit-purchase"
                  name="purchaseMethod"
                  type="radio"
                  className="focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300"
                  value="방문 구매"
                  onChange={(e) => setPurchaseMethod(e.target.value)}
                />
                <label
                  htmlFor="visit-purchase"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  방문 구매
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="non-face-purchase"
                  name="purchaseMethod"
                  type="radio"
                  className="focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300"
                  value="비대면 구매"
                  onChange={(e) => setPurchaseMethod(e.target.value)}
                />
                <label
                  htmlFor="non-face-purchase"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  비대면 구매
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center py-4 !border-b-2 border-tertiary-gray">
            <label
              className="block text-sm font-medium text-gray-700 w-full md:w-[6rem]"
              htmlFor="referrer"
            >
              유입 경로
            </label>
            <div className="mt-1 md:mt-0 flex-1 flex space-x-4">
              <div className="flex items-center">
                <input
                  id="facebook"
                  name="referrer"
                  type="radio"
                  className="focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300"
                  value="페이스북"
                  onChange={(e) => setReferrer(e.target.value)}
                />
                <label
                  htmlFor="facebook"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  페이스북
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="instagram"
                  name="referrer"
                  type="radio"
                  className="focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300"
                  value="인스타그램"
                  onChange={(e) => setReferrer(e.target.value)}
                />
                <label
                  htmlFor="instagram"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  인스타그램
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="youtube"
                  name="referrer"
                  type="radio"
                  className="focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300"
                  value="유튜브"
                  onChange={(e) => setReferrer(e.target.value)}
                />
                <label
                  htmlFor="youtube"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  유튜브
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="google"
                  name="referrer"
                  type="radio"
                  className="focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300"
                  value="구글"
                  onChange={(e) => setReferrer(e.target.value)}
                />
                <label
                  htmlFor="google"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  구글
                </label>
              </div>
              <div className="flex items-center">
                <input
                  id="naver"
                  name="referrer"
                  type="radio"
                  className="focus:ring-primary h-4 w-4 text-indigo-600 border-gray-300"
                  value="네이버"
                  onChange={(e) => setReferrer(e.target.value)}
                />
                <label
                  htmlFor="naver"
                  className="ml-2 block text-sm font-medium text-gray-700"
                >
                  네이버
                </label>
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-black text-white h-12 hover:bg-black/80 transition-colors duration-300 mt-12 font-bold"
          >
            상담 신청
          </button>
        </form>
      </div>
    </div>
  );
};

export default QuickConsultationForm;
