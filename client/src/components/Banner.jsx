import React from "react";
import Search from "../components/Search";
import videos from '../../public/video1.mp4'
const Banner = () => {
  return (
    <section className="h-[600px] w-full flex felx-col justify-center  relative overflow-clip  mx-auto">
<video muted autoPlay loop className="h-full  w-full object-cover object-center ">
  <source src={videos} />
</video>
  <div className="absolute text-white top-0 left-0 right-0 z-10  bg-black bg-opacity-40 h-full">
  <div className="flex  h-full w-10/12 mx-auto flex-col">
        <div className=" flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl w-6/12 lg:text-6xl  font-bold  leanding-none mb-6">
            <span className="text-red-500">Rent</span> Your Perfect Home Today
          </h1>
          <p className="max-w-[480px] mb-8">
          Find your ideal room or flat in prime locations with just a few clicks. Our platform offers a variety of rental options tailored to your needs and budget. Start your journey to comfortable living with us. Explore, compare, and choose your next home with ease.
          </p>
        </div>
        {/* <div className="hidden flex-1 lg:flex justify-end items-endrelative w-full mt-5 max-w-xl mx-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House"
            className="rounded-tl-[50px] rounded-tr-none rounded-bl-none rounded-br-[50px] object-cover"
          />
        </div> */}
      </div>
  </div>
    </section>
  );
};

export default Banner;
