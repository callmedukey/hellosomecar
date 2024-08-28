import { z } from "zod";

export const loginSchema = z.object({
  username: z.string().min(5, "최소 5자 이상 입력해주세요."),
  password: z.string().min(8, "최소 8자 이상 입력해주세요."),
});

export const boardSchema = z.object({
  title: z.string().min(1, "제목을 입력해주세요."),
  link: z.string().min(1, "링크를 입력해주세요."),
});
