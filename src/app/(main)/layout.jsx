import Header from "../components/Header";

const MainLayout = ({ children }) => (
  <>
    <Header authentication={{ name: "Roger" }} />
    {children}
  </>
);

export default MainLayout;
