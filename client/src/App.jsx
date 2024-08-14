import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PropertyDetails from "./pages/PropertyDetails";
import DashBoard from "../src/pages/AdminPages/Dashboard";
import AddRooms from "../src/pages/AdminPages/AddRooms";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/property/:id" element={<PropertyDetails />} />
        {/*Admin Routes*/}

        <Route path="/admin" element={<DashBoard />} />
        <Route path="/add-rooms" element={<AddRooms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
