import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import blue from "../images/blue.jpg";

const Hero = () => {
  const tags = [
    {
      id: 1,
      name: "Prenancy",
    },
    {
      id: 2,
      name: "Parenting",
    },
    {
      id: 3,
      name: "Nutrition",
    },
    {
      id: 4,
      name: "Motherhood",
    },
    {
      id: 5,
      name: "Lifestyle",
    },
  ];
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); // Initialize the useNavigate hook
  const [activeIndex, setActiveIndex] = useState(0);

  const handleTagClick = (index, tagName) => {
    setActiveIndex(index);
    navigate(`/blog?tag=${tagName}`); // Navigate to the Blog page with the selected tag as a query parameter
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      navigate(`/blog?search=${searchTerm}`);
    }
  };
  return (
    <section className="  flex flex-col-reverse px-10 py-20 lg:flex-row bg-blue mds:w-full md:x-0  w-full">
      <div className=" mt-20 lg:w-1/2">
        <h1 className="font-roboto text-4xl text-center font-bold text-white lg:text-left ">
          <span className="text-yellow">Navigating Motherhood</span>
          <br /> One Milestone at a Time
        </h1>
        <p className="text-white text-center mt-10 lg:text-left">
          Where motherhood's most precious moments are cherished, and the
          journey of a lifetime is shared. Discover the laughter, tears, and
          triumphs that make motherhood a beautiful adventure.
        </p>
        <div className="relative mt-5">
          <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959ead] " />
          <input
            className="placeholder:font-bold font-semibold text-blue rounded-lg pl-12 pr-3 py-3 focus:outline-none lg:w-auto xs:w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
            type="text"
            placeholder="Search article"
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleSearchSubmit}
          />
        </div>

        <div className="flex  mt-4  flex-wrap xs:justify-center lg:justify-start lg:flex-row  items-start lg:gap-x-2 lg:mt-7">
          <span className="text-white font-semibold italic mt-4">
            popular tags:
          </span>
          {tags.map((item, index) => (
            <ul className="flex flex-wrap  gap-x-2.5 gap-y-2.5 mt-3">
              <li
                key={item.id}
                onClick={() => handleTagClick(index, item.name)}
                className={`rounded-lg mx-2 lg:mx-0 bg-white bg-opacity-4 px-3 py-1.5 text-blue font-semibold cursor-pointer ${
                  index == activeIndex ? "bg-yellow" : null
                }`}
              >
                {item.name}
              </li>
            </ul>
          ))}
        </div>
      </div>
      <div className="lg:w-1/2 lg:pl-20 mt-20">
        <div className="hidden lg:rounded-full w-20 h-20 bg-white"></div>
        <img
          src={blue}
          className="animate- duration-3000 ease-linear hover:animate-pulse "
          alt=""
        />
      </div>
    </section>
  );
};

export default Hero;
