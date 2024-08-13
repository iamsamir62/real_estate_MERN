import React, { useContext, useState } from "react";
import {
  RiWallet3Line,
  RiArrowDownSLine,
  RiArrowUpSLine,
} from "react-icons/ri";
import { Menu } from "@headlessui/react";
import HouseContext from "../context/HouseContext";
import "../../src/index.css";

const PriceDropDOwn = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const priceOptions = [
    { value: "any", label: "Any" },
    { value: "low_to_high", label: "Low to High" },
    { value: "high_to_low", label: "High to Low" },
  ];

  const handlePriceSelect = (priceOption) => {
    setPrice(priceOption.value);
    setIsOpen(false);
  };

  return (
    <Menu as="div" className="dropdown relative">
      <Menu.Button className="dropdown_btn" onClick={() => setIsOpen(!isOpen)}>
        <RiWallet3Line className="dropdown-icon-primary" />
        <div className="text-[13px]">
          {priceOptions.find((option) => option.value === price)?.label ||
            "Select Price Range"}
        </div>
        {isOpen ? (
          <RiArrowUpSLine className="dropdown-icon-secondary" />
        ) : (
          <RiArrowDownSLine className="dropdown-icon-secondary" />
        )}
      </Menu.Button>

      {isOpen && (
        <Menu.Items className="dropdown-menu absolute w-full bg-white shadow-lg rounded-md mt-2 z-10 max-h-60 overflow-y-auto">
          {priceOptions.map((option) => (
            <Menu.Item key={option.value}>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  onClick={() => handlePriceSelect(option)}
                >
                  {option.label}
                </button>
              )}
            </Menu.Item>
          ))}
        </Menu.Items>
      )}
    </Menu>
  );
};

export default PriceDropDOwn;
