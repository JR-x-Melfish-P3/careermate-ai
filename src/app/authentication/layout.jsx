import Showcase from "./components/Showcase";

const AuthenticationLayout = ({ children }) => (
  <div className="flex *:flex-1 p-8 min-h-dvh">
    <div className="px-[125px] my-auto">{children}</div>
    <Showcase />
  </div>
);

export default AuthenticationLayout;
