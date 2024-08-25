import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

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
      name: "",
      email: "",
      password: "",
      file: null,
      location: "",
    },
  });
  const navigate = useNavigate();
  const handleInputChange = (e) => {
    const { id, value, files } = e.target;
    setValue(id, files ? files[0] : value);
  };

  const onSubmit = async (data) => {
    console.log("Form Data:", data);
    console.log("User location:", location);

    const userData = {
      ...data,
      location,
    };

    await Data(userData);
  };

  const Data = async (userData) => {
    console.log(userData);

    const formData = new FormData();
    formData.append("name", userData.name);
    formData.append("email", userData.email);

    if (userData.file) {
      formData.append("image", userData.file);
    }

    formData.append("password", userData.password);
    formData.append("latitude", userData.location.latitude);
    formData.append("longitude", userData.location.longitude);

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();

      if (!response.ok) {
        const errorMessage = result.message || "An unexpected error occurred";
        console.error("Error response body:", result);
        toast.error(`Error: ${errorMessage}`, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        return;
      }

      console.log("Response:", result);

      const { data } = result;
      const StoreToLocal = {
        id: data._id,
        name: data.name,
        email: data.email,
        location: data.location,
        role: data.role,
      };
      toast.success("Signup Successful !!", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          backgroundColor: "#4caf50",
          color: "white",
        },
      });

      localStorage.setItem("user", JSON.stringify(StoreToLocal));
      navigate("/signin");
    } catch (error) {
      console.error("Error:", error);
      toast.error("An unexpected error occurred. Please try again.", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
    }
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
            placeholder="Name"
            className={`border p-3 rounded-lg focus:outline-none w-full ${
              errors.name ? "border-red-500" : ""
            }`}
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
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

        <div className="w-full">
          <button
            type="submit"
            className="bg-red-700 text-white p-3 rounded-lg uppercase hover:opacity-95 w-full"
          >
            Sign Up
          </button>
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
