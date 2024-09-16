import React from "react";
import Search from "../components/Search";

const Banner = () => {
  return (
    <section className="h-full max-h-[640px] lg:mr-[105px] mb-8 xl:mb-24  mx-auto">
      <div className="flex flex-col lg:flex-row">
        <div className="lg:ml-8 xl:ml-[135px] flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-4 lg:px-0">
          <h1 className="text-4xl lg:text-[50px] font-semibold leanding-none mb-6">
            <span>Rent</span> Your Perfect Home Today
          </h1>
          <p className="max-w-[480px] mb-8">
          Find your ideal room or flat in prime locations with just a few clicks. Our platform offers a variety of rental options tailored to your needs and budget. Start your journey to comfortable living with us. Explore, compare, and choose your next home with ease.
          </p>
        </div>
        <div className="hidden flex-1 lg:flex justify-end items-endrelative w-full mt-5 max-w-xl mx-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1661908377130-772731de98f6?q=80&w=812&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="House"
            className="rounded-tl-[50px] rounded-tr-none rounded-bl-none rounded-br-[50px] object-cover"
          />
        </div>
      </div>
      <Search />
    </section>
  );
};

export default Banner;
