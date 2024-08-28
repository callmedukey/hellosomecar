import { verifySession } from "@/app/actions/session";
import { redirect } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import prisma from "@/lib/prisma";
import ContactsTable from "@/components/admin/contactsTable";
import BoardWrite from "@/components/admin/boardWrite";
import BoardTable from "@/components/admin/boardTable";
const page = async () => {
  const session = await verifySession();
  if (!session?.isAuth) {
    redirect("/login");
  }

  const contacts = await prisma.consultation.findMany({
    take: 1000,
    orderBy: {
      createdAt: "desc",
    },
  });

  const boards = await prisma.board.findMany({
    take: 1000,
    orderBy: {
      createdAt: "desc",
    },
  });

  return (
    <main className="min-h-screen py-12 px-4 tracking-normal font-sans">
      <section className="max-w-screen-8xl mx-auto w-full flex items-center justify-center">
        <Tabs defaultValue="contact" className="w-full mx-auto">
          <TabsList className="w-full">
            <TabsTrigger value="contact" className="w-1/3">
              상담 신청
            </TabsTrigger>
            <TabsTrigger value="board" className="w-1/3">
              게시판 글
            </TabsTrigger>
            <TabsTrigger value="write" className="w-1/3">
              글 작성
            </TabsTrigger>
          </TabsList>
          <TabsContent value="contact">
            <ContactsTable contacts={contacts} />
          </TabsContent>
          <TabsContent value="board">
            <BoardTable boards={boards} />
          </TabsContent>
          <TabsContent value="write">
            <BoardWrite />
          </TabsContent>
        </Tabs>
      </section>
    </main>
  );
};

export default page;
