import { PrismaClient } from "@prisma/client";


const globalForPrisma: { prisma: any; } = globalThis as unknown as {
  prisma: any = PrismaClient | undefined;
}

export let prisma = globalForPrisma.prisma ?? new PrismaClient: any();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;