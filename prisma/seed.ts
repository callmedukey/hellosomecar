import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
const prisma = new PrismaClient();

async function main() {
  await prisma.user.create({
    data: {
      username: "admin",
      password: await bcrypt.hash("admin2024!@", 10),
    },
  });
}

main()
  .then(async () => {
    console.log("Seeded");
    await prisma.$disconnect();
  })
  .catch(async (error) => {
    console.error(error);
    await prisma.$disconnect();
    process.exit(1);
  });
