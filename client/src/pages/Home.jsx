import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import HouseList from "../components/HouseList";
import HouseContext from "../context/HouseContext";
import House from "../components/House";
import { ImSpinner2 } from "react-icons/im";
import Footer from "../components/Footer";

const Home = () => {
  const { houses, loading } = useContext(HouseContext);
  console.log(houses);

  return (
    <>
      <Banner />
      <HouseList />
      <Footer />
    </>
  );
};

export default Home;
