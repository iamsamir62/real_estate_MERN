import React, { useContext, useEffect } from "react";
import HouseContext from "../../context/HouseContext";
import {
  Link
} from "react-router-dom";

const BookedUsers = () => {
  const { bookingUser, setBookingUser, loading, setLoading } =
    useContext(HouseContext);

  useEffect(() => {
    const fetchBookedUsers = async () => {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:5000/room/bookinguser");
        const result = await response.json();
        if (response.ok && result.data) {
          setBookingUser(result.data);
        } else {
          console.error("Error:", result.message || "Failed to fetch users.");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookedUsers();
  }, [setBookingUser, setLoading]);

  // const handleEdit = (booking) => {
  //   console.log("Edit booking:", booking);
  // };

  const handleDelete = async (id) => {
    console.log("Delete booking with id:", id);
    try {
      const response = await fetch(
        `http://localhost:5000/room/bookinguser/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setBookingUser((prevUsers) =>
          prevUsers.filter((user) => user._id !== id)
        );
        console.log("Booking deleted successfully");
      } else {
        console.error("Failed to delete booking");
      }
    } catch (error) {
      console.error("Error deleting booking:", error);
    }
  };

 

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="flex flex-col w-full p-6 bg-gray-100 overflow-auto">
        <h1 className="flex justify-center mb-5 text-2xl font-bold">
          Booked Rooms
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2">No.</th>
                <th className="border border-gray-400 p-2">Name</th>
                <th className="border border-gray-400 p-2">Phone</th>
                  <th className="border border-gray-400 p-2">Address</th>
                  <th className="border border-gray-400 p-2">Room</th>
                  <th className="border border-gray-400 p-2">OwnerName</th>
                  <th className="border border-gray-400 p-2">Room's Address</th>
                <th className="border border-gray-400 p-2">Action</th>
              </tr>
            </thead>
              <tbody>
                {bookingUser.length > 0 ? (
                  bookingUser.map((booking, index) => (
                    <tr key={booking._id}>
                      <td className="border border-gray-400 p-2">{index + 1}</td>
                      <td className="border border-gray-400 p-2">{booking.name}</td>
                      <td className="border border-gray-400 p-2">{booking.phone}</td>
                      <td className="border border-gray-400 p-2">{booking.address || "N/A"}</td>

                      <td className="border border-gray-400 p-2 underline cursor-pointer">
                        {booking.roomId ? (
                          <Link to={`/property/${booking.roomId._id}`}>
                            {booking.roomId._id}
                          </Link>
                        ) : (
                          "N/A"
                        )}
                      </td>

                      <td className="border border-gray-400 p-2">
                        {booking.roomId ? booking.roomId.ownerName : "N/A"}
                      </td>

                      <td className="border border-gray-400 p-2">
                        {booking.roomId ? booking.roomId.address : "N/A"}
                      </td>

                      <td className="border border-gray-400 p-2">
                        <div className="flex gap-4">
                          {/* <button
                            onClick={() => handleEdit(booking)}
                            className="text-blue-500 hover:underline"
                          >
                            Edit
                          </button> */}
                          <button
                            onClick={() => handleDelete(booking._id)}
                            className="text-red-500 hover:underline"
                          >
                            Delete
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="8" className="border border-gray-400 p-2 text-center">
                      No bookings found
                    </td>
                  </tr>
                )}
              </tbody>


          </table>
        )}
      </div>
    </div>
  );
};

export default BookedUsers;
