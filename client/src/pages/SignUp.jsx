import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [Data, setData] = useState({
    username: "",
    email: "",
    password: "",
    file: null,
  });

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setData({
      ...Data,
      [id]: files ? files[0] : value,
    });
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLocation({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          });
          console.log(
            "Location captured:",
            position.coords.latitude,
            position.coords.longitude
          );
        },
        (error) => {
          console.error("Error getting location: ", error);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log("Form Data:", Data);
    console.log("User location:", location);

    const userData = {
      ...Data,
      location,
    };

    console.log("User Data:", userData);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form
        className="rounded-lg flex flex-col items-center gap-4"
        onSubmit={handleSignUp}
      >
        <input
          type="text"
          placeholder="Username"
          className="border p-3 rounded-lg focus:outline-none w-full"
          id="username"
          value={Data.username}
          onChange={handleInputChange}
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none w-full"
          id="email"
          value={Data.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none w-full"
          id="password"
          value={Data.password}
          onChange={handleInputChange}
        />
        <input
          type="file"
          className="border p-3 rounded-lg w-full"
          id="file"
          onChange={handleInputChange}
        />
        <button
          type="button"
          onClick={handleGetLocation}
          className="bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-95 w-full"
        >
          Get Location
        </button>
        <button
          type="submit"
          className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 w-full"
        >
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-2">
        <p>Have an account?</p>
        <Link to="/signin" className="text-blue-500">
          Sign in
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
