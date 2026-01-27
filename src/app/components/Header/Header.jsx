import Image from "next/image";
import logo from "./assets/logo@2x.png";

const Header = () => (
  <div className="fixed p-8">
    <Image src={logo} alt="CareerMate AI" width={184} height={24} />
  </div>
);

export default Header;
