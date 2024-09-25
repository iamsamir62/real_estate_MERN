import React, { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Profile = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [bookings, setBookings] = useState(null);
  const fileRef = useRef(null);
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/room/getindividualbookings/${user.id}`
        );
        const result = await response.json();
        if (response.ok && result.data) {
          setBookings(result.data);
        } else {
          console.error(
            "Error:",
            result.message || "Failed to fetch bookings."
          );
        }
      } catch (error) {
        console.error("Error fetching bookings:", error);
      }
    };
    fetchBookings();
  }, [user.id]);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  const handleSignOutClick = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
  };

  const handleSignOutConfirm = () => {
    setIsModalOpen(false);
    localStorage.clear();
    navigate("/signin");
  };

  const handleSignOutCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="p-3 max-w-3xl mx-auto">
      <h1 className="text-3xl font-semibold text-center my-20">Profile</h1>

      {/* User Profile Section */}
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <div className="flex items-center justify-center">
          <input
            type="file"
            ref={fileRef}
            hidden
            accept="image/*"
            onChange={handleImageChange}
          />
          <img
            onClick={() => fileRef.current.click()}
            src={selectedImage || `http://localhost:5000/${user.image}`}
            alt="profile"
            className="rounded-full h-32 w-32 object-cover cursor-pointer"
          />
        </div>
        <div className="text-center mt-5">
          <h2 className="text-xl font-semibold">{user.name}</h2>
          <p className="text-gray-600">{user.role}</p>
        </div>
        <div className="mt-5">
          {/* <input
            type="text"
            placeholder="Fullname"
            className="border p-3 mt-3 w-full rounded-lg focus:outline-none"
          />
          <input
            type="email"
            placeholder="Email"
            className="border p-3 mt-3 w-full rounded-lg focus:outline-none"
          />
          <input
            type="password"
            placeholder="Password"
            className="border p-3 mt-3 w-full rounded-lg focus:outline-none"
          /> */}
          <div className="flex justify-between mt-5">
            {/* <button className="bg-slate-700 w-24 rounded-lg p-3 uppercase text-white font-semibold hover:opacity-95 disabled:opacity-80">
              Update
            </button> */}
            <button
              className="bg-red-700 w-28 rounded-lg p-3 uppercase text-white font-semibold hover:opacity-80 disabled:opacity-50"
              onClick={handleSignOutClick}
            >
              Sign out
            </button>
          </div>
        </div>
      </div>

      {/* Booking Information Section */}
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-semibold mb-4">My Bookings</h2>
        {bookings ? (
          <table className="min-w-full bg-white border">
            <thead>
              <tr className="w-full bg-gray-200">
                <th className="py-2 px-4 border-b-2 text-left">Name</th>
                <th className="py-2 px-4 border-b-2 text-left">Address</th>
                <th className="py-2 px-4 border-b-2 text-left">Phone</th>
                <th className="py-2 px-4 border-b-2 text-left">Room ID</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking, index) => (
                <tr key={index} className="border-t">
                  <td className="py-2 px-4">{booking.name}</td>
                  <td className="py-2 px-4">{booking.address}</td>
                  <td className="py-2 px-4">{booking.phone}</td>
                  <td className="py-2 px-4 cursor-pointer underline text-blue-600">
                    <Link to={`/property/${booking.roomId._id}`}>
                      {booking.roomId._id}
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p className="text-gray-500">No bookings found.</p>
        )}
      </div>

      {/* Sign Out Confirmation Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-bold mb-4">
              Are you sure you want to sign out?
            </h2>
            <div className="flex justify-between">
              <button
                className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:opacity-80"
                onClick={handleSignOutConfirm}
              >
                Yes
              </button>
              <button
                className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:opacity-80"
                onClick={handleSignOutCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
