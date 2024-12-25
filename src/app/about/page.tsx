"use client";
import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import StickyScrollRevealDemo from "../components/aboutpage"; // Import StickyScrollRevealDemo

export default function FullScreenWithStickyScroll() {
  return (
    <div className="h-screen w-screen flex flex-col bg-neutral-900">
      {/* Navbar */}
      <Navbar />

      {/* Fullscreen container */}
      <div className="flex-1 h-full w-full bg-white">
        {/* StickyScrollRevealDemo */}
        <StickyScrollRevealDemo />
      </div>
    </div>
  );
}
