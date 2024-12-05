"use server";

import * as z from "zod";

import { registerSchema } from "@/schemas";

export const Register = async (values: z.infer<typeof registerSchema>) => {
    const parsedValues = registerSchema.safeParse(values);
    if (!parsedValues.success) {
        return { error: "Missing fields" };
    }

    return { success: "Register successful" };
}