import React, { useContext } from "react";
import SideBar from "../../components/Admin/SideBar";
import HouseContext from "../../context/HouseContext.jsx";

const Users = () => {
  const { users } = useContext(HouseContext);

  const handleDelete = (id) => {
    console.log("Delete user with id:", id);
  };

  return (
    <div className="flex h-screen overflow-hidden">
      <div className="h-full w-64">
        <SideBar />
      </div>
      <div className="flex flex-col w-full p-6 bg-gray-100 overflow-auto">
        <h1 className="flex justify-center mb-5 text-2xl font-bold">
          User Details
        </h1>
        <table className="w-full table-auto border-collapse border border-gray-400">
          <thead>
            <tr>
              <th className="border border-gray-400 p-2">Id</th>
              <th className="border border-gray-400 p-2">Username</th>
              <th className="border border-gray-400 p-2">Email</th>
              <th className="border border-gray-400 p-2">Image</th>
              <th className="border border-gray-400 p-2">Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="border border-gray-400 p-2">{user.id}</td>
                <td className="border border-gray-400 p-2">{user.username}</td>
                <td className="border border-gray-400 p-2">{user.email}</td>
                <td className="border border-gray-400 p-2">
                  {user.photo ? (
                    <img
                      src={user.photo}
                      alt={`User ${user.id}`}
                      className="w-20 mx-auto h-20 object-cover rounded"
                    />
                  ) : (
                    "No Photo"
                  )}
                </td>
                <td className="border border-gray-400 p-2">
                  <div className="flex">
                    <button
                      onClick={() => handleDelete(user.id)}
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
      </div>
    </div>
  );
};

export default Users;
