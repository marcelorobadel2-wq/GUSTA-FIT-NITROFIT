import { PrismaClient } from '@prisma/client';

// Previne a criação de múltiplas instâncias do Prisma em desenvolvimento (hot-reload)
const globalForPrisma = global as unknown as { prisma: PrismaClient };

export const prisma = globalForPrisma.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = prisma;
