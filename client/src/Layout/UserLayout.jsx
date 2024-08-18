import React from "react";
import Header from "../components/Header";

const UserLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default UserLayout;
