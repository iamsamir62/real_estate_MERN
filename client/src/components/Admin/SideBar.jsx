import React, { useState } from "react";
import {
  FaHome,
  FaBuilding,
  FaUsers,
  FaChartBar,
  FaCogs,
} from "react-icons/fa";
import { FaSignOutAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`flex flex-col h-screen p-3 bg-slate-200 text-black transition-width duration-100 ${
        isOpen ? "w-64" : "w-20"
      }`}
    >
      <div className="space-y-3">
        <div className="flex items-center justify-between ">
          <h2 className={`text-2xl ml-7  font-bold ${!isOpen && "hidden"}`}>
            <Link to={'/'}>
            Room<span className="text-red-500">Rental</span>
            </Link>
          </h2>

          <button
            onClick={toggleSidebar}
            className="p-2 rounded-md focus:outline-none focus:ring"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${isOpen ? "transform rotate-180" : ""}`}
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
        </div>
        <div className="flex-1">
          <ul className="pt-2 pb-4 space-y-1 text-sm">
            <li className="rounded-sm">
              <Link
                to="/admin"
                className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 hover:text-white"
              >
                <FaHome className="text-2xl" />
                {isOpen && <span>Dashboard</span>}
              </Link>
            </li>
            <li className="rounded-sm">
              <Menu as="div" className="relative inline-block text-left w-full">
                <div>
                  <MenuButton className="inline-flex w-full justify-start items-center gap-x-1.5 rounded-md bg-slate-200 px-3 py-2 text-sm font-semibold text-gray-900 hover:shadow-sm hover:bg-gray-50">
                    <FaBuilding className="text-2xl" />
                    {isOpen && <span>Rooms</span>}
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="-mr-1 h-5 w-5 text-gray-400"
                    />
                  </MenuButton>
                </div>

                <MenuItems className="absolute left-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-slate-200 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/add-rooms"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700 hover:text-white"
                          } block px-4 py-2 text-sm`}
                        >
                          Add Rooms
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          to="/view-rooms"
                          className={`${
                            active
                              ? "bg-gray-100 text-gray-900"
                              : "text-gray-700 hover:text-white"
                          } block px-4 py-2 text-sm`}
                        >
                          View Rooms
                        </Link>
                      )}
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </li>
            <li className="rounded-sm">
              <Link
                to="/users"
                className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 hover:text-white"
              >
                <FaUsers className="text-2xl" />
                {isOpen && <span>Users</span>}
              </Link>
            </li>

            <li className="rounded-sm">
              <Link
                to="/signin"
                className="flex items-center p-2 space-x-3 rounded-md hover:bg-gray-700 hover:text-white"
              >
                <FaSignOutAlt className="text-2xl" />
                {isOpen && <span>Logout</span>}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
