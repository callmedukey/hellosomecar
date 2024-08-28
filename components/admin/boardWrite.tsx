"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { boardSchema } from "@/definitions/zod";
import { writeBoard } from "@/app/actions/write";

const BoardWrite = () => {
  const form = useForm({
    resolver: zodResolver(boardSchema),
    defaultValues: {
      title: "",
      link: "",
    },
  });

  const onSubmit = async (data: z.infer<typeof boardSchema>) => {
    const { error, success } = await writeBoard(data);

    if (success) {
      alert("저장 성공");
      form.reset();
    }

    if (error) {
      alert(error);
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="max-w-lg mx-auto w-full py-12 space-y-4"
      >
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>제목</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="link"
          render={({ field }) => (
            <FormItem>
              <FormLabel>링크</FormLabel>
              <FormControl>
                <Input {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button className="w-full" type="submit">
          저장
        </Button>
      </form>
    </Form>
  );
};

export default BoardWrite;
