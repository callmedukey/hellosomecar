"use server";

import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function deleteBoard(id: number) {
  const deleted = await prisma.board.delete({
    where: {
      id,
    },
  });

  if (deleted) {
    revalidatePath("/admin");
    revalidatePath("/review");
    return { success: true };
  } else {
    return { success: false };
  }
}
