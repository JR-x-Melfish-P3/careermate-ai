"use client";

import Image from "next/image";
import logo from "./_assets/logo@2x.png";
import { useAuthentication } from "@/app/_contexts/Authentication";

const Header = ({ ghost = false }) => {
  const { user } = useAuthentication();

  return (
    <div
      className={`p-6 flex justify-between items-center ${
        ghost
          ? "absolute top-0 left-0 right-0 z-10"
          : "bg-white border-b border-gray-200"
      }`}
    >
      <Image src={logo} alt="CareerMate AI" width={184} height={24} />
      {user && (
        <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
          {user.fullName[0].toUpperCase()}
        </div>
      )}
    </div>
  );
};

export default Header;
