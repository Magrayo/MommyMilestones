import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { IoCloseOutline } from "react-icons/io5";
import mommy from "../images/mommy.png";

const Navbar = () => {
  const navBar = [
    { id: 1, name: "Home", href: "/" },
    { id: 2, name: "Blog", href: "/Blog" },
    { id: 3, name: "About Us", href: "/About" },
    { id: 4, name: "Meet Our Team", href: "/Meet" },
  ];
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState;
    });
  };
  return (
    <nav className="w-full">
      <div className="fixed mx-auto flex items-center justify-between h-[80px] bg-blue  top-0 left-0 w-full z-50 xs:w-full ">
        <img
          src={mommy}
          alt="logo"
          className="w-30 lg:w-[200px] h-[140px] ml-[30px]"
        />
        <div className="lg:hidden z-50 ">
          {navIsVisible ? (
            <IoCloseOutline
              className="w-10 pr-3 h-10 text-white cursor-pointer"
              onClick={navVisibilityHandler}
            />
          ) : (
            <IoIosMenu
              className="w-10 h-10 pr-3 text-white cursor-pointer"
              onClick={navVisibilityHandler}
            />
          )}
        </div>
        <div
          className={`${
            navIsVisible ? " right-0" : "-right-full"
          } z-[49] flex flex-col w-full justify-center  lg:w-auto lg:justify-between lg:flex-row fixed  top-0 bottom-0 lg:static -right-full md:flex space-x-16 lg:mr-[180px]  bg-black lg:bg-transparent`}
        >
          <div className="flex flex-col pl-30 lg:flex-row lg:gap-x-5 items-center justify-center mx-auto  gap-y-5">
            {}
            {navBar.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className="text-white d hover:text-gray-300 hover:scale-110 transition-all duration-100 ease-in-out"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
        {/* Add profile dropdown or other menu items here */}
      </div>
    </nav>
  );
};

export default Navbar;
