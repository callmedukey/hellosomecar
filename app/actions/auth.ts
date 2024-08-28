"use server";

import bcrypt from "bcrypt";
import { loginSchema } from "@/definitions/zod";
import prisma from "@/lib/prisma";
import { createSession, deleteSession } from "./session";
import { redirect } from "next/navigation";

export async function login({
  username,
  password,
}: {
  username: string;
  password: string;
}) {
  const validatedFields = loginSchema.safeParse({ username, password });
  if (!validatedFields.success) {
    return {
      error: "올바른 정보를 입력하세요",
    };
  }

  const user = await prisma.user.findUnique({
    where: {
      username: validatedFields.data.username,
    },
  });
  if (!user) {
    return {
      error: "Invalid username or password",
    };
  }
  const passwordMatch = await bcrypt.compare(
    validatedFields.data.password,
    user.password
  );

  if (!passwordMatch) {
    return {
      error: "Invalid username or password",
    };
  }

  await createSession({ userId: user.id });

  redirect("/admin");
}

export async function logout() {
  deleteSession();
  redirect("/");
}
