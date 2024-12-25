"use client";
import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import { Boxes } from "../components/background-boxes"; // Import the Boxes component
import { cn } from "../lib/utils";

export default function BackgroundBoxesDemo() {
  return (
    <div className="h-screen w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {/* Add Navbar at the top */}
      <Navbar />

      {/* Full-screen Background Boxes Demo */}
      <div className="h-full w-full relative overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
        {/* Dark background with gradient mask */}
        <div className="absolute inset-0 w-full h-full bg-black z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
        <Boxes />
        <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
          Tailwind is Awesome
        </h1>
      </div>
    </div>
  );
}
