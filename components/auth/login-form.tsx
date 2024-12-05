"use client";

import * as z from "zod";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { loginSchema } from "@/schemas";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage

} from "@/components/ui/form";

import { CardWrapper } from "@/components/auth/card-wrapper";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { Login } from "@/actions/login";
import React, { useTransition } from "react";

export const LoginForm = () => {
    const [error, setError] = React.useState<string | undefined>("");
    const [success, setSuccess] = React.useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();
    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const onSubmit = (values: z.infer<typeof loginSchema>) => {
        setSuccess("");
        setError("");

        startTransition(() => {
            Login(values)
                .then((res) => {
                    if (res.error) {
                        setError(res.error);
                    } else {
                        setSuccess(res.success);
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
        });
    }
    return (
        <CardWrapper 
            headerLabel="Welcome Back"
            backButtonLabel="Don't have an account?"
            backButtonHref="/auth/register"
            showSocial={true}
        >
            <Form {...form}>
                <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                >
                    <div className="space-y-4">
                        <FormField
                            control={form.control}
                            name="email"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            disabled={isPending}
                                            placeholder="mukul@example.com"
                                            type="email"
                                            className="text-sm"  
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="password"
                            render={({field}) => (
                                <FormItem>
                                    <FormLabel>Password</FormLabel>
                                    <FormControl>
                                        <Input 
                                            {...field}
                                            disabled={isPending}
                                            placeholder="******"
                                            type="password"  
                                            className="text-sm"  
                                        />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        
                    </div>

                    <FormError message={error ?? ""} />
                    <FormSuccess message={success ?? ""} />

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={isPending}
                    >
                        Login
                    </Button>

                </form>
            </Form>
        </CardWrapper>
    )
};