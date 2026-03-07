import logo1 from "./assets/logo1.png";
import logo2 from "./assets/logo2.png";
import logo3 from "./assets/logo3.png";
import logo4 from "./assets/logo4.png";
import Image from "next/image";

const PoweredByAI = () => (
  <div className="flex gap-2 mt-auto *:flex-1">
    {[
      { name: "Logo 1", image: logo1 },
      { name: "Logo 2", image: logo2 },
      { name: "Logo 3", image: logo3 },
      { name: "Logo 4", image: logo4 },
    ].map((logo) => (
      <div
        key={logo.name}
        className="odd:mb-6 even:mt-6 bg-black rounded-full flex items-center justify-center p-2"
      >
        <Image src={logo.image} alt={logo.name} />
      </div>
    ))}
  </div>
);

export default PoweredByAI;
