"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";

interface BackButtonProps {
    label: string;
    href: string;
}

export const BackButton = ({ label, href }: BackButtonProps) => {
    return (
        <Button
            variant="outline"
            size="sm"
            className="w-full font-normal"
            asChild
        >
            <Link href={href}>{label}</Link>
        </Button>
    );
}