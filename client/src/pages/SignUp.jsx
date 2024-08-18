import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const [isLocationValid, setIsLocationValid] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm({
    defaultValues: {
      username: "",
      email: "",
      password: "",
      file: null,
      location: "",
    },
  });

  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setValue(id, files ? files[0] : value);
  };

  const handleGetLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const newLocation = {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude,
          };
          setLocation(newLocation);
          setValue("location", JSON.stringify(newLocation));
          setIsLocationValid(true);
        },
        (error) => {
          console.error("Error getting location: ", error);
          setIsLocationValid(false);
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
  };

  const onSubmit = async (data) => {
    const isValid = await trigger("location");

    if (!isValid) {
      alert("Please get your location before submitting the form.");
      return;
    }

    console.log("Form Data:", data);
    console.log("User location:", location);

    const userData = {
      ...data,
      location,
    };

    console.log("User Data:", userData);
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form
        className="rounded-lg flex flex-col items-center gap-4"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="w-full">
          <input
            type="text"
            placeholder="Username"
            className={`border p-3 rounded-lg focus:outline-none w-full ${
              errors.username ? "border-red-500" : ""
            }`}
            {...register("username", { required: "Username is required" })}
          />
          {errors.username && (
            <p className="text-red-500">{errors.username.message}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="email"
            placeholder="Email"
            className={`border p-3 rounded-lg focus:outline-none w-full ${
              errors.email ? "border-red-500" : ""
            }`}
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="password"
            placeholder="Password"
            className={`border p-3 rounded-lg focus:outline-none w-full ${
              errors.password ? "border-red-500" : ""
            }`}
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <p className="text-red-500">{errors.password.message}</p>
          )}
        </div>

        <div className="w-full">
          <input
            type="file"
            className="border p-3 rounded-lg w-full"
            {...register("file")}
            onChange={handleInputChange}
          />
        </div>

        <button
          type="button"
          onClick={handleGetLocation}
          className="bg-blue-500 text-white p-3 rounded-lg uppercase hover:opacity-95 w-full"
        >
          Get Location
        </button>

        <div className="w-full">
          <button
            type="submit"
            className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 w-full"
            disabled={!isLocationValid}
          >
            Sign Up
          </button>
          {!isLocationValid && (
            <p className="text-red-500 mt-2">
              Please get your location before submitting the form.
            </p>
          )}
        </div>
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
