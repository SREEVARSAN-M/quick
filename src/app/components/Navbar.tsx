'use client'; // Mark this file as a client component

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Navbar = () => {
  const [time, setTime] = useState('');

  // Update time every minute
  useEffect(() => {
    const updateTime = () => {
      const currentTime = new Date();
      const hours = currentTime.getHours().toString().padStart(2, '0');
      const minutes = currentTime.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };

    updateTime(); // Set initial time
    const interval = setInterval(updateTime, 60000); // Update every minute

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  return (
    <nav
      className="fixed top-0 left-0 right-0 p-2 shadow-xl z-50 border-b border-white border-opacity-20"
      style={{
        background: 'linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8))',
      }}
    >
      <div className="flex items-center justify-center w-full h-12 max-w-screen-xl mx-auto px-4">
        {/* Container for the navbar links */}
        <div className="flex space-x-8">
          <Link
            href="/home"
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            About
          </Link>
          <Link
            href="/work"
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Work
          </Link>
          <Link
            href="/blog"
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Blog
          </Link>
          <Link
            href="/gallery"
            className="text-white hover:text-gray-400 transition duration-300 ease-in-out"
          >
            Gallery
          </Link>
        </div>

        {/* Display current time (hour and minutes) */}
        <div className="absolute right-4 text-white">
          {time}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
