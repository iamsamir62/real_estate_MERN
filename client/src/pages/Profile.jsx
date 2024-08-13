import React, { useState, useRef } from "react";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const fileRef = useRef(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold text-center my-7">Profile</h1>
      <form className="flex flex-col">
        <input
          type="file"
          ref={fileRef}
          hidden
          accept="image/*"
          onChange={handleImageChange}
        />

        <img
          onClick={() => fileRef.current.click()}
          src={
            selectedImage ||
            "https://wallpapers.com/images/featured-full/cool-profile-picture-87h46gcobjl5e4xu.jpg"
          }
          alt="profile"
          className="rounded-full h-24 w-24 object-cover cursor-pointer self-center"
        />
        <input
          type="text"
          placeholder="Fullname"
          className="border p-3 mt-5 rounded-lg focus:outline-none"
        />
        <input
          type="email"
          placeholder="Email"
          className="border p-3 mt-5 rounded-lg focus:outline-none"
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-3 mt-5 rounded-lg focus:outline-none"
        />
        <div className="flex justify-between">
          <button className="bg-slate-700 mt-5 w-24 rounded-lg p-3 uppercase text-white font-semibold hover:opacity-95 disabled:opacity-80">
            Update
          </button>
          <button className="bg-red-700 mt-5 w-28 rounded-lg p-3 uppercase text-white font-semibold hover:opacity-80 disabled:opacity-50">
            Sign out
          </button>
        </div>
      </form>
    </div>
  );
};

export default Profile;
