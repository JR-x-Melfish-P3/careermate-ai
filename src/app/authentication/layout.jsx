import Header from "../_components/Header";
import Showcase from "./_components/Showcase";

const AuthenticationLayout = ({ children }) => (
  <div className="relative flex *:flex-1 min-h-dvh">
    <Header ghost />
    <div className="px-[125px] my-auto">{children}</div>
    <Showcase />
  </div>
);

export default AuthenticationLayout;
