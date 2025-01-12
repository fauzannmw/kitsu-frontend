"use client";

import ThemeSwitcher from "@/app/components/ThemeSwitcher";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 flex justify-between items-center p-4 bg-gray-200 dark:bg-gray-800 text-gray-900 dark:text-gray-100 shadow-md">
      <div className="text-lg font-bold">
        <Link href="/" className="hover:underline">
          Anime Explorer
        </Link>
      </div>
      <div>
        <ThemeSwitcher />
      </div>
    </nav>
  );
};

export default Navbar;
