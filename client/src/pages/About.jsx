import React from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const About = () => {
  const itemData = [
    {
      img: 'https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Fern',
    },
    {
      img: 'https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Snacks',
    },
    {
      img: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Mushrooms',
    },
    {
      img: 'https://images.unsplash.com/photo-1571781418606-70265b9cce90?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Tower',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1684338795288-097525d127f0?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Sea star',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661930527039-f809e14b8102?q=80&w=1081&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Honey',
    },
    {
      img: 'https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Basketball',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?q=80&w=1192&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Breakfast',
    },
    {
      img: 'https://images.unsplash.com/photo-1499955085172-a104c9463ece?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Tree',
    },
    {
      img: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Burger',
    },
    {
      img: 'https://plus.unsplash.com/premium_photo-1686090448517-2f692cc45187?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Camera',
    },
    {
      img: 'https://images.unsplash.com/photo-1486304873000-235643847519?q=80&w=1032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Coffee',
    },

 
  ];
  return (
    <div>
      <div className="grid grid-cols-2 gap-10 w-11/12 mx-auto py-24">
        <div className="flex flex-col gap-9 ">
        <div className="flex flex-col gap-2">
        <h2 className="font-semibold text-customgreen text-2xl text-red-500 ">
            About Us
          </h2>
          <h1 className="text-5xl font-semibold">Online Room Rental</h1>
        </div>
          <p className="text-left text-gray-600">
            RoomRental is a leading platform dedicated to providing the best
            room and flat rental options. We focus on making your stay
            comfortable and convenient, helping you find the perfect
            accommodation that fits your needs. With access to properties in
            numerous locations, we ensure every traveler finds their ideal home
            away from home.
          </p>
          <p className="text-left
           text-gray-600">
            Whether you're looking for a cozy room or a spacious flat,
            RoomRental simplifies the booking process. We guarantee a seamless
            experience, offering a wide range of choices to suit every
            preference and budget.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <img
            src={`https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt=""
          />
          <img
            src={`https://images.unsplash.com/photo-1505577058444-a3dab90d4253?q=80&w=1870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
            alt=""
            className="mt-20"
          />{" "}
        </div>
      </div>
      <div className="w-11/12 mx-auto">
        <div className="text-center pb-20">
          <h2 className="font-semibold text-customgreen text-2xl text-red-500 ">
            Our Gallery
          </h2>
          <h1 className="text-4xl font-semibold">Discover our work</h1>
        </div>

       
      <Masonry columns={3} spacing={2}>
        {itemData.map((item, index) => (
          <div key={index}>
            <img
              srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
              src={`${item.img}?w=162&auto=format`}
              alt={item.title}
              loading="lazy"
              style={{
                borderBottomLeftRadius: 4,
                borderBottomRightRadius: 4,
                display: 'block',
                width: '100%',
              }}
            />
          </div>
        ))}
      </Masonry>
        {/* <div className="grid grid-cols-2 gap-10 mt-14">
          <div className="grid gap-4">
            <div className="">
              <img
                src={`https://images.unsplash.com/photo-1554995207-c18c203602cb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGxpdmluZyUyMHJvb218ZW58MHx8MHx8fDA%3D`}
                alt="" className="w-full"
              />
            </div>
            <div className="col-span-2 grid  grid-cols-3  gap-5">
              <img
                src={`https://plus.unsplash.com/premium_photo-1661962952618-031d218dd040?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt=""  className="col-span-2 w-full"
              />
              <img
                src={`https://images.unsplash.com/photo-1564078516393-cf04bd966897?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
                alt=""  className="w-full"
              />
            </div>
          </div>
          <div>
            <img
              src={`https://images.unsplash.com/photo-1489171078254-c3365d6e359f?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
              alt=""  className="w-full "
            />
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default About;
