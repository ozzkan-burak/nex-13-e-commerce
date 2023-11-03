import { PrismaClient } from "@prisma/client";

const globalForPrisma: { prisma: any } = globalThis as unknown as {
  prisma: PrismaClient | undefined;
};

export let prisma = globalForPrisma.prisma ?? new PrismaClient();

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
