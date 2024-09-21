import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignUp = () => {
  const [location, setLocation] = useState({ latitude: null, longitude: null });
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      file: null,
    },
  });
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { id, files, value } = e.target;
    setValue(id, files ? files[0] : value); // Handle file input
  };

  const onSubmit = async (data) => {
    const formData = new FormData(); // Use FormData to handle file upload
    formData.append("name", data.name);
    formData.append("email", data.email);
    formData.append("password", data.password);
    if (data.file) {
      formData.append("image", data.file); // Add file to FormData
    }

    // Add location data (optional)
    formData.append("latitude", location.latitude);
    formData.append("longitude", location.longitude);

    try {
      const response = await fetch("http://localhost:5000/auth/register", {
        method: "POST",
        body: formData, // Send form data
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.message || "An unexpected error occurred");
      }

      toast.success("Signup Successful!", {
        position: "top-center",
        autoClose: 3000,
        theme: "light",
      });

      localStorage.setItem(
        "user",
        JSON.stringify({
          id: result.data._id,
          name: result.data.name,
          email: result.data.email,
          location: result.data.location,
          role: result.data.role,
        })
      );
      navigate("/signin");
    } catch (error) {
      toast.error(error.message || "An error occurred during sign-up.", {
        position: "top-center",
        autoClose: 5000,
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
        encType="multipart/form-data" // not mandatory in React, but makes the form intention clearer
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
            id="file"
            type="file"
            className="border p-3 rounded-lg w-full"
            {...register("file")}
            onChange={handleInputChange} // File handling onChange
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
