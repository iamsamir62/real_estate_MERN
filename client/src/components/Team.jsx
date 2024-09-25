import React from "react";
import Img from "../../public/image.JPG";

const Team = () => {
  const teamData = [
    {
      img: Img,
      role: "Frontend Developer",
      name: "Manish Gyawali",
    },
    {
      img: Img,
      role: "Backend Developer",
      name: "Rajendra  Neupane",
    },
  ];

  return (
    <div>
      <div className="text-4xl font-medium w-11/12 mx-auto py-7 mb-14 text-center">
        Our <span className="text-red-600">Team</span>
      </div>
      <div className="grid grid-cols-2 gap-4 w-9/12 mx-auto shadow-md">
        {teamData.map((val, i) => (
          <div key={i} className="text-center flex flex-col gap-5">
            <img src={val.img} className="" />
            <div className="flex flex-col gap-1">
              <h1 className="text-2xl font-semibold">{val.name}</h1>
              <h1 className=" text-red-500 font-semibold pb-8">{val.role}</h1>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
