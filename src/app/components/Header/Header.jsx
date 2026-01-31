import Image from "next/image";
import logo from "./assets/logo@2x.png";

const Header = () => (
  <div className="fixed p-8 bg-white left-0 right-0 z-1">
    <Image src={logo} alt="CareerMate AI" width={184} height={24} />
  </div>
);

export default Header;
