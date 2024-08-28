"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Board } from "@prisma/client";
import { format } from "date-fns";
import { Button } from "../ui/button";
import { deleteBoard } from "@/app/actions/deleteBoard";
interface BoardTableProps {
  boards: Board[];
}

const BoardTable: React.FC<BoardTableProps> = ({ boards }) => {
  const handleDelete = async (id: number) => {
    if (!confirm("정말로 삭제하시겠습니까?")) {
      return;
    }
    const { success } = await deleteBoard(id);
    if (success) {
      alert("상담 신청이 삭제되었습니다.");
    } else {
      alert("상담 신청 삭제에 실패했습니다.");
    }
  };
  return (
    <Table>
      <TableHeader>
        <TableRow className="">
          <TableHead className="min-w-[50px] font-bold">번호</TableHead>
          <TableHead className="min-w-[100px] font-bold">작성일자</TableHead>
          <TableHead className="min-w-[100px] font-bold">제목</TableHead>
          <TableHead className="min-w-[100px] font-bold">링크</TableHead>
          <TableHead className="min-w-[50px]"></TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {boards.map((board) => (
          <TableRow key={board.id}>
            <TableCell className="">{board.id}</TableCell>
            <TableCell>{format(board.createdAt, "yyyy-MM-dd HH:mm")}</TableCell>
            <TableCell>{board.title}</TableCell>
            <TableCell className="max-w-[200px] overflow-x-scroll">
              {board.link}
            </TableCell>
            <TableCell className="flex items-center justify-center">
              <Button onClick={() => handleDelete(board.id)} variant="ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
                  />
                </svg>
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default BoardTable;
