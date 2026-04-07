"use client";

import Link from "next/link";
import { twMerge } from "tailwind-merge";

const NavItem = ({ icon, label, href, isActive }) => (
  <Link
    href={href}
    className={twMerge(
      "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium",
      isActive ? "text-blue-500" : "text-gray-600 hover:bg-gray-50",
    )}
  >
    {icon}
    {label}
  </Link>
);

export default NavItem;
