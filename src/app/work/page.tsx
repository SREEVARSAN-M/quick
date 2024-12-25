"use client";
import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import TimelineDemo from "../components/workpage"; // Import the TimelineDemo component

export default function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
      {/* Add Navbar at the top */}
      <Navbar />

      <div className="h-full w-full">
        {/* Include the TimelineDemo component here */}
        <TimelineDemo />
      </div>
    </div>
  );
}
