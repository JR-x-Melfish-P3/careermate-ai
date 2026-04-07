import Header from "../components/Header";
import Showcase from "./components/Showcase";

const AuthenticationLayout = ({ children }) => (
  <div className="relative flex *:flex-1 min-h-dvh">
    <Header ghost />
    <div className="px-[125px] my-auto">{children}</div>
    <Showcase />
  </div>
);

export default AuthenticationLayout;
