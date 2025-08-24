import { PrismaClient, Prisma } from '../database/generated/prisma';

export const prisma = new PrismaClient();

export { Prisma };
