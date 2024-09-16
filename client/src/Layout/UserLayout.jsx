import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Footermain from "../components/Footermain";

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <div className="mt-10">
      <Footermain/>

      </div>
      <Footer />

    </>
  );
};

export default UserLayout;
