"use client";
import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import TracingBeamDemo from "../components/blogpage"; // Import the TracingBeamDemo component

export default function BackgroundBeamsDemo() {
  return (
    <div className="h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-start antialiased">
      {/* Add Navbar at the top */}
      <Navbar />

      {/* Add margin-top to ensure content is below the navbar */}
      <div className="max-w-2xl mx-auto p-4 mt-20"> {/* Adjust mt-20 based on the navbar height */}
        {/* Include the TracingBeamDemo component here */}
        <TracingBeamDemo />
      </div>
    </div>
  );
}
