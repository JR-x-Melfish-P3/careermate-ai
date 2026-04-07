import Image from "next/image";
import logo from "./assets/logo@2x.png";

const Header = () => (
  <div className="fixed p-8 bg-white left-0 right-0 top-0 flex justify-between items-center z-10">
    <Image src={logo} alt="CareerMate AI" width={184} height={24} />
    <div className="w-9 h-9 rounded-full bg-gray-200 flex items-center justify-center text-sm font-semibold text-gray-600">
      R
    </div>
  </div>
);

export default Header;
