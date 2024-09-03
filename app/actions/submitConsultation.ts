"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";
import { headers } from "next/headers";
import { SolapiMessageService } from "solapi";

export async function submitConsultation(data: {
  name: string;
  phoneNumber: string;
  desiredCar: string;
  purchaseMethod: string;
}) {
  try {
    const headersList = headers();
    const ipAddress = headersList.get("x-forwarded-for")?.split(",")[0];
    console.log(headersList.get("x-forwarded-for"));

    if (!ipAddress) {
      throw new Error("IP address not found.");
    }

    const consultation = await prisma.consultation.create({
      data: {
        name: data.name,
        phoneNumber: data.phoneNumber,
        desiredCar: data.desiredCar,
        purchaseMethod: data.purchaseMethod,
        ipAddress: ipAddress,
      },
    });

    if (consultation) {
      const solapi = new SolapiMessageService(
        process.env.SOLAPI_API_KEY as string,
        process.env.SOLAPI_API_SECRET as string
      );

      const res = await solapi.sendOne({
        to: data.phoneNumber.replaceAll("-", "").replaceAll(" ", ""),
        from: process.env.SOLAPI_SENDER_PHONE_NUMBER as string,
        text: `고객님의 문의는 정상적으로 접수 되셨습니다.`,
      });
      revalidatePath("/admin");
      return { success: true, consultation };

    } else throw new Error("Failed to create consultation.");
  } catch (error) {
    console.error("Error creating consultation:", error);
    return { success: false, message: "Something went wrong." };
  }
}
