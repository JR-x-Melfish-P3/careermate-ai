import Advantages from "./components/Advantages";
import UserReview from "./components/UserReview";
import background from "./assets/background@2x.png";
import Image from "next/image";
import SubscribeLink from "./components/SubscribeLink";

const Showcase = () => (
  <div className="relative p-8">
    <Image className="absolute" src={background} fill alt="" />
    <div className="relative h-full">
      <SubscribeLink />
      <UserReview />
      <Advantages />
    </div>
  </div>
);

export default Showcase;
