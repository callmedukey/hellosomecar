"use server";
import { boardSchema } from "@/definitions/zod";
import prisma from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function writeBoard({
  title,
  link,
}: {
  title: string;
  link: string;
}) {
  const validatedFields = boardSchema.safeParse({ title, link });

  if (!validatedFields.success) {
    return { error: "입력된 정보를 확인해주세요" };
  }

  const created = await prisma.board
    .create({
      data: {
        title: validatedFields.data.title,
        link: validatedFields.data.link,
      },
    })
    .catch((err) => {
      console.error(err);
    });

  if (!created) {
    return { error: "저장 실패. 서버 오류" };
  }

  revalidatePath("/admin");
  return { success: true };
}
