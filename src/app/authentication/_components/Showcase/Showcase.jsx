import Advantages from "./_components/Advantages";
import UserReview from "./_components/UserReview";
import background from "./_assets/background@2x.png";
import Image from "next/image";
import SubscribeLink from "./_components/SubscribeLink";

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
