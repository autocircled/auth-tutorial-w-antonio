"use server";

import * as z from "zod";

import { loginSchema } from "@/schemas";
import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { AuthError } from "next-auth";

export const Login = async (values: z.infer<typeof loginSchema>) => {
    const parsedValues = loginSchema.safeParse(values);
    if (!parsedValues.success) {
        return { error: "Invalid email or password" };
    }

    const { email, password } = parsedValues.data;
    try {
        await signIn('credentials', { 
            email,
            password,
            redirectTo: DEFAULT_LOGIN_REDIRECT
        });
    } catch (error) {
        console.log("error is happending");
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return { error: "Invalid email or password" };
                default:
                    return { error: "Something went wrong" };
            }
        }
        throw error;
    }
}