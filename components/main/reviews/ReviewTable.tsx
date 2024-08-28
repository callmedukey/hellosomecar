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
import prisma from "@/lib/prisma";
import { format } from "date-fns";
const ReviewTable = async ({ currentPage = 1 }: { currentPage?: number }) => {
  const reviews = await prisma.board.findMany({
    take: 5,
    skip: currentPage === 1 ? 0 : (currentPage - 1) * 5,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <section className=" max-w-screen-8xl mx-auto w-full pb-6">
      <Table className="scroll-m-60" id="review-table">
        <TableHeader className="">
          <TableRow className="text-lg border-secondary-gray border-t-2 font-medium text-primary-gray bg-transparent">
            <TableHead className="min-w-[200px] ">No</TableHead>
            <TableHead className="text-center w-full ">제목</TableHead>
            <TableHead className="text-center min-w-[200px] ">작성일</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="tracking-normal text-secondary-gray text-lg font-bold">
          {reviews && reviews.length > 0 ? (
            reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell className="font-medium">{review.id}</TableCell>
                <TableCell className="truncate">
                  <a href={review.link} target="_blank">
                    {review.title}
                  </a>
                </TableCell>
                <TableCell className="text-center">
                  {format(review.createdAt, "yyyy-MM-dd")}
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={3} className="text-center">
                게시글이 없습니다.
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
      <aside className="flex justify-center items-center gap-12 mt-[3.625rem] text-primary-gray">
        <Link
          href={
            currentPage === 1
              ? "/review#review-table"
              : `/review?page=${currentPage - 1}#review-table`
          }
        >
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
        <Link
          href={
            currentPage === 9
              ? `/review?page=${currentPage}#review-table`
              : `/review?page=${currentPage + 1}#review-table`
          }
        >
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
