import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";

const ReviewTable = ({ currentPage = 1 }: { currentPage?: number }) => {
  return (
    <section className=" max-w-screen-8xl mx-auto w-full pb-6">
      <Table className="">
        <TableHeader className="">
          <TableRow className="text-lg border-secondary-gray border-t-2 font-medium text-primary-gray bg-transparent">
            <TableHead className="min-w-[200px] ">No</TableHead>
            <TableHead className="text-center w-full ">제목</TableHead>
            <TableHead className="text-center min-w-[200px] ">작성일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="tracking-normal text-secondary-gray text-lg font-bold">
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell className="truncate">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas
              bibendum enim eg
            </TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      <aside className="flex justify-center items-center gap-12 mt-[3.625rem] text-primary-gray">
        <Link href="/review">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 stroke-primary-gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </Link>

        {currentPage}
        <Link href="/review">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 stroke-primary-gray"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </Link>
      </aside>
    </section>
  );
};

export default ReviewTable;
