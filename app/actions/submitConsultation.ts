"use server";
import { z } from "zod";
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

    const { success, data: parsedData } = z.object({
      name: z.string().trim(),
      phoneNumber: z.string().trim(),
      desiredCar: z.string().trim(),
      purchaseMethod: z.string().trim(),
    }).safeParse(data);

    if (!success) {
      return { success: false, message: "입력 형식이 올바르지 않습니다." };
    }

    const consultation = await prisma.consultation.create({
      data: {
        name: parsedData.name,
        phoneNumber: parsedData.phoneNumber,
        desiredCar: parsedData.desiredCar,
        purchaseMethod: parsedData.purchaseMethod,
        ipAddress: ipAddress,
      },
    });

    if (consultation) {
      const solapi = new SolapiMessageService(
        process.env.SOLAPI_API_KEY as string,
        process.env.SOLAPI_API_SECRET as string
      );

      await solapi.sendOne({
        to: process.env.SOLAPI_SENDER_PHONE_NUMBER as string,
        from: process.env.SOLAPI_SENDER_PHONE_NUMBER as string,
        text: `
        이름: ${data.name}
        차량: ${data.desiredCar}
        연락처: ${data.phoneNumber}
        접수가되었습니다
        `,
      });
      revalidatePath("/admin");
      return { success: true, consultation };

    } else throw new Error("Failed to create consultation.");
  } catch (error) {
    console.error("Error creating consultation:", error);
    return { success: false, message: "Something went wrong." };
  }
}
