// import GitHub from "next-auth/providers/github"
import bcrypt from "bcryptjs";
import type { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { loginSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";

export default {
    providers: [
        Credentials({
            async authorize(credentials) {
                const validatedFields = loginSchema.safeParse(credentials);
                console.log(validatedFields );
                if (!validatedFields.success) {
                    if (validatedFields.data) {
                        const {email, password} = validatedFields.data;
                        const user = await getUserByEmail(email);
                        if(!user || !user.password) return null;
    
                        const passwordMatch = await bcrypt.compare(password, user.password);
                        if(!passwordMatch) return null;
                        return user;
                    }else {
                        return null
                    }
                }
                return null
            }
        })
    ],
} satisfies NextAuthConfig