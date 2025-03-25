"use server"

import { prisma } from "@/utils/prisma";
import { auth, currentUser } from "@clerk/nextjs/server"

export const createUser = async () => {
    try {
        const user = await currentUser();
        if (!user) throw new Error("create user not allowed, clerk user not found");
        const { id: clerkId, firstName, lastName, imageUrl: image } = user;
        const existingUser = await prisma.user.findFirst({
            where: { clerkId }
        })
        if (existingUser) return null;
        const dbUser = await prisma.user.create({
            data: {
                firstName,
                lastName,
                clerkId,
                image,
                role: ["MEMBER"]
            }
        })
        return { success: true, dbUser }
    } catch (error) {
        return { success: false, error }
    }
}

export const getdbUserByClerkId = async ()=> {
    try {
        const { userId:clerkId } = await auth();
        if (!clerkId) throw new Error("create user not allowed, clerk user not found");
        const dbUser = await prisma.user.findFirst({
            where: { clerkId }
        })
        if (!dbUser) throw Error("Cannot get user from database");
        return { success: true, dbUser }
    } catch (error) {
        return { success: false, error }
    }
}