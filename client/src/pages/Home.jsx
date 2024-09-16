import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";
import HouseContext from "../context/HouseContext";
import House from "../components/House";
import { ImSpinner2 } from "react-icons/im";
import Footer from "../components/Footer";
import Footermain from "../components/Footermain";
import About from "./About";

const Home = () => {
  return (
    <>
      <Banner />
      <HouseList />
      <About/>
    </>
  );
};

export default Home;
