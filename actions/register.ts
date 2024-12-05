"use server";
import bcrypt from "bcrypt";
import * as z from "zod";

import { registerSchema } from "@/schemas";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const Register = async (values: z.infer<typeof registerSchema>) => {
    const parsedValues = registerSchema.safeParse(values);
    if (!parsedValues.success) {
        return { error: "Missing fields" };
    }

    const { email, name, password } = parsedValues.data;
    const hashedPassword = await bcrypt.hash(password, 10);

    const existingUser = await getUserByEmail(email);

    if (existingUser) {
        return { error: "Email already exists" };
    }

    await db.user.create({
        data: {
            name,
            email,
            password: hashedPassword
        }
    });

    return { success: "User created successfully" };
}