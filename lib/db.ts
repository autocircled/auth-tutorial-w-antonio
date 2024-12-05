import { PrismaClient } from "@prisma/client";

declare global {
    let prisma: PrismaClient | undefined
}
// export const db = globalThis.prisma || new PrismaClient();
export const db = (globalThis as typeof globalThis & { prisma: PrismaClient | undefined }).prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") (globalThis as typeof globalThis & { prisma: PrismaClient | undefined }).prisma = db;