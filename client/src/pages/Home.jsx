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
import Search from "../components/Search";
import CountUps from "../components/CountUp";
import Team from "../components/Team";

const Home = () => {
  return (
    <div className="flex flex-col gap-5">
      <Banner />
      <Search />
      <div>
        <div className="text-4xl font-medium w-11/12 mx-auto py-10  text-center">
          Our <span className="text-red-600">Rooms</span>
        </div>
        <HouseList />
      </div>
      <About />
      <div className="">
        <Team />
       <div className="mt-14">
       <CountUps  />
       </div>
      </div>
    </div>
  );
};

export default Home;
