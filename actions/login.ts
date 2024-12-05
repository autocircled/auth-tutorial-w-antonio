"use server";

import * as z from "zod";

import { loginSchema } from "@/schemas";

export const Login = async (values: z.infer<typeof loginSchema>) => {
    const parsedValues = loginSchema.safeParse(values);
    if (!parsedValues.success) {
        return { error: "Invalid email or password" };
    }

    return { success: "Login successful" };
}