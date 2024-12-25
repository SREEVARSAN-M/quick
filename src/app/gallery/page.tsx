"use client";
import React from "react";
import Navbar from "../components/Navbar"; // Import the Navbar component
import ParallaxScrollDemo from "../components/galarypag"; // Import the ParallaxScrollDemo component

export default function BackgroundBeamsDemo() {
  return (
    <div className="min-h-screen w-full bg-neutral-950 flex flex-col antialiased">
      {/* Navbar */}
      <Navbar />

      {/* Parallax Scroll Container with full height minus the navbar */}
      <div className="flex-1 w-full h-screen overflow-hidden relative">
        {/* Parallax Scroll Demo takes up full height of the remaining screen */}
        <ParallaxScrollDemo />
      </div>
    </div>
  );
}
