import React from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const Layout = ({ children }) => {
  return (
    <>
      {/* // header  */}

      <Header />
      <main className='main'>{children}</main>

      <Footer />

      {/* // footer  */}
    </>
  );
};
