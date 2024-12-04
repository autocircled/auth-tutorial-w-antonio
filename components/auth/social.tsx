"use client";

import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Button } from "@/components/ui/button";

export const Social = () => {
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button 
                size="lg"
                variant="outline" 
                className="w-full"
                onClick={() => console.log("Google button clicked")}>
                    <FcGoogle className="mr-2 h-5 w-5" />
                    Google
            </Button>
            <Button 
                size="lg"
                variant="outline" 
                className="w-full"
                onClick={() => console.log("Github button clicked")}>
                    <FaGithub className="mr-2 h-5 w-5" />
                    Github
            </Button>
        </div>
    );
}