import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signin = () => {
  const [Data, setData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...Data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = (e) => {
    e.preventDefault();
    console.log("Form Data:", Data);

    const userData = {
      ...Data,
    };

    console.log("User Data:", userData);
  };

  return (
    <div className="p-3 max-w-lg mx-auto mt-20">
      <h1 className="text-3xl text-center font-semibold my-7">Sign In</h1>
      <form
        className="rounded-lg flex flex-col items-center gap-4"
        onSubmit={handleSignIn}
      >
        <input
          type="email"
          placeholder="Email"
          className="border p-3 rounded-lg focus:outline-none w-full"
          id="email"
          name="email"
          value={Data.email}
          onChange={handleInputChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 rounded-lg focus:outline-none w-full"
          id="password"
          name="password"
          value={Data.password}
          onChange={handleInputChange}
        />

        <button
          type="submit"
          className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 w-full font-bold"
        >
          Sign In
        </button>
      </form>
      <div className="flex gap-2 mt-4">
        <p>Don't have an account?</p>
        <Link to="/signup" className="text-blue-500">
          Sign Up
        </Link>
      </div>
    </div>
  );
};

export default Signin;
