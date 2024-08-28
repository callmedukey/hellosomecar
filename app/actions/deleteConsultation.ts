"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteConsultation(id: number) {
  const deleted = await prisma.consultation.delete({
    where: {
      id,
    },
  });

  if (deleted) {
    revalidatePath("/admin");
    return { success: true };
  } else {
    return { success: false };
  }
}
