import React, { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [ShowTime, setShowTime] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll',function(){
if(this.pageYOffset>300){
  setShowTime(true)
}else{
  setShowTime(false)
}
    })
  
    return () => {
      window.removeEventListener('scroll',function(){
        if(this.pageYOffset>100){
          setShowTime(true)
        }else{
          setShowTime(false)
        }
      })
    }
  }, [ShowTime])
  

  return (
    <header className={` bg-white ${ShowTime?"bg-opacity-100 -translate-y-3 scale-105":"bg-opacity-40 "}  transition-all ease-in-out duration-300 delay-75 fixed z-50 w-full shadow-md py-5 `}>
      <div className="flex justify-between items-center w-10/12 mx-auto">
        <Link to="/">
          <h1 className="font-semibold text-sm sm:text-xl flex flex-wrap">

            <Link to={'/'}>
              <span className="text-red-500 font-bold">Room</span>
              <span className="text-slate-700">Rental</span>
            </Link>
          
          </h1>
        </Link>
        <form className="bg-slate-100 p-3 rounded-lg flex items-center opacity-80">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch size={20} />
        </form>
        <ul className="flex gap-7">
          <Link to="/home">
            <li className="hidden sm:inline text-slate-700 hover:underline font-semibold ">
              Home
            </li>
          </Link>
          <Link to="/about">
              About Us
            <li className="hidden sm:inline text-slate-700 hover:underline font-semibold ">
            </li>
          </Link>
          <Link to="/contact">
            <li className="hidden sm:inline text-slate-700 hover:underline font-semibold ">
             Contact Us
            </li>
          </Link>

          {isLoggedIn ? (
            <Link to="/signin">
              <li className=" sm:inline text-slate-700 hover:underline font-semibold">
                Sign in
              </li>
            </Link>
          ) : (
            <Link to="/profile">
              <li className="hidden sm:inline text-slate-700 hover:underline font-semibold">
                Profile
              </li>
            </Link>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Header;
