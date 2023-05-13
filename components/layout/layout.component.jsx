import React from "react";
import dynamic from "next/dynamic";
import { Container } from "@chakra-ui/react";

// Components
const Header = dynamic(() => import("./header/header.component"));
const Footer = dynamic(() => import("./footer/footer.component"));

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
