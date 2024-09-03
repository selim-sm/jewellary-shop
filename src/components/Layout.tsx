import { ReactNode } from "react";
import Nav from "./Nav";
import Foter from "./Foter";

type LayoutPropsType = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutPropsType) => {
  return (
    <>
      <Nav />
      {children}
      <Foter />
    </>
  );
};

export default Layout;
