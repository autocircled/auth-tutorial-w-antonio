import { Poppins } from "next/font/google";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
})

export default function Home() {
  return (
    <main className="flex h-screen flex-col items-center justify-center bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-sky-400 to-blue-800">
      <div className="space-y-6 text-center">
        <h1 className={cn("text-center text-4xl font-bold tracking-tight text-white sm:text-6xl", font.className)}>
            Auth
          </h1>
          <p className="text-center text-lg text-white">A simple authentication service</p>
          <Button variant="secondary">Sign in</Button>
      </div>
    </main>
  );
}
