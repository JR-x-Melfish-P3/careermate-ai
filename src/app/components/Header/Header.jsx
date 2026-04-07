import Image from "next/image";
import logo from "./assets/logo@2x.png";

const Header = ({ ghost = false, authentication }) => (
  <div
    className={`p-6 flex justify-between items-center ${
      ghost
        ? "absolute top-0 left-0 right-0 z-10"
        : "bg-white border-b border-gray-200"
    }`}
  >
    <Image src={logo} alt="CareerMate AI" width={184} height={24} />
    {authentication && (
      <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
        {authentication.name?.[0].toUpperCase()}
      </div>
    )}
  </div>
);

export default Header;
