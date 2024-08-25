import React, { useContext, useEffect } from "react";
import SideBar from "../../components/Admin/SideBar";
import HouseContext from "../../context/HouseContext.jsx";
import Swal from "sweetalert2";

const Users = () => {
  const { users, setUsers, loading, setLoading } = useContext(HouseContext);

  const handleDelete = async (userId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const response = await fetch(
            `http://localhost:5000/auth/users/${userId}`,
            {
              method: "DELETE",
            }
          );

          if (response.ok) {
            setUsers(users.filter((user) => user._id !== userId));
            Swal.fire("Deleted!", "The user has been deleted.", "success");
          } else {
            Swal.fire("Error!", "Failed to delete user.", "error");
          }
        } catch (error) {
          Swal.fire("Error!", "Error deleting user.", "error");
        }
      }
    });
  };

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true);
      try {
        const response = await fetch("http://localhost:5000/auth/users");
        const result = await response.json();
        if (response.ok && result.data) {
          setUsers(result.data);
        } else {
          console.error("Error:", result.message || "Failed to fetch users.");
        }
      } catch (error) {
        console.error("Error fetching users:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [setUsers, setLoading]);

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="h-full w-64">
        <SideBar />
      </div>
      <div className="flex flex-col w-full p-6 bg-gray-100 overflow-auto">
        <h1 className="flex justify-center mb-5 text-2xl font-bold">
          User Details
        </h1>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <table className="w-full table-auto border-collapse border border-gray-400">
            <thead>
              <tr>
                <th className="border border-gray-400 p-2">No.</th>
                <th className="border border-gray-400 p-2">Email</th>
                <th className="border border-gray-400 p-2">Image</th>
                <th className="border border-gray-400 p-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <td className="border border-gray-400 p-2">{index + 1}</td>
                  <td className="border border-gray-400 p-2">{user.email}</td>
                  <td className="border border-gray-400 p-2">
                    {user.photo ? (
                      <img
                        src={user.photo}
                        alt={`User ${user._id}`}
                        className="w-20 mx-auto h-20 object-cover rounded"
                      />
                    ) : (
                      "No Photo"
                    )}
                  </td>
                  <td className="border border-gray-400 p-2">
                    <div className="flex">
                      <button
                        onClick={() => handleDelete(user._id)}
                        className="text-red-500 hover:underline ml-10"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default Users;
