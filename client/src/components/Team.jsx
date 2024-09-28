import React from "react";
import Img from "../../public/image.JPG";
import Img2 from "../../public/image2.jpg";

const Team = () => {
  const teamData = [
    {
      img: Img,
      role: "Frontend Developer",
      name: "Manish Gyawali",
    },
    {
      img: Img2,
      role: "Backend Developer",
      name: "Rajendra Neupane",
    },
  ];

  return (
<div className="py-20 md:py-40">
  {/* Team Heading */}
  <div className="text-3xl md:text-4xl font-medium w-11/12 mx-auto py-7 mb-10 md:mb-14 text-center">
    Our <span className="text-red-600">Team</span>
  </div>

  {/* Team Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 w-11/12 md:w-8/12 lg:w-6/12 mx-auto shadow-md">
    {teamData.map((val, i) => (
      <div key={i} className="text-center flex flex-col gap-5">
        <img src={val.img} className="w-full h-80 md:w-96 md:h-96 object-cover mx-auto" />
        <div className="flex flex-col gap-1">
          <h1 className="text-xl md:text-2xl font-semibold">{val.name}</h1>
          <h1 className="text-red-500 font-semibold pb-8">{val.role}</h1>
        </div>
      </div>
    ))}
  </div>
</div>

  );
};

export default Team;
