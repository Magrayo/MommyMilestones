import React, { useState } from "react";
import DrM from "../images/DrM.jpg";
import leslie from "../images/leslie.jpg";
import DrL from "../images/DrL.jpg";
import DrP from "../images/DrP.jpg";
import DrE from "../images/DrE.jpg";
import DrR from "../images/DrR.jpg";
const people = [
  {
    name: "Dr. Patrick Hughes",
    role: "Neonatologist",
    image: DrM,
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Dr. Rachel Thompson",
    role: "Pediatrician",
    image: DrE,
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emily Hernandez",
    role: "Maternity Nurse",
    image: DrL,
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Emma Dorsey",
    role: "Lactation Consultant",
    image: DrR,
    xUrl: "#",
    linkedin: "#",
  },
  {
    name: "Leslie Alexander",
    role: "Genetic Counselor",
    image: leslie,
    xUrl: "#",
    linkedinUrl: "#",
  },
  {
    name: "Leonard Krasner",
    role: "Eye Specialist",
    image: DrP,
    xUrl: "#",
    linkedinUrl: "#",
  },
];

const Doctors = () => {
  const [startIndex, setStartIndex] = useState(0);

  const nextSlide = () => {
    setStartIndex((prevIndex) => (prevIndex + 3) % people.length);
  };

  const prevSlide = () => {
    setStartIndex(
      (prevIndex) => (prevIndex - 3 + people.length) % people.length
    );
  };

  return (
    <div className="relative mt-[50px] h-[650px] bg-grey">
      <h1 className=" font-semibold absolute top-[53px] left-0 right-0 text-center font-News text-[48px] leading-[58px] text-black ">
        Are you looking for
      </h1>
      <h3 className=" absolute top-[148px] left-0 right-0 transform -translate-y-1/2 text-center text-[38px] font-News font-light leading-[58px]">
        Pregnancy Specialist?
      </h3>

      <div className="flex items-center justify-center mt-[90px] h-[650px]">
        <button
          onClick={prevSlide}
          className="p-4 mt-[124px] bg-gray-300 rounded-full mr-4"
        >
          &lt;
        </button>
        <div className="flex overflow-hidden mt-[120px]">
          {people.slice(startIndex, startIndex + 3).map((person, index) => (
            <div
              key={index}
              className="w-[290px] h-64 bg-white rounded-xl shadow-md overflow-hidden m-2 transition-transform hover:scale-105"
            >
              <img
                src={person.image}
                alt=""
                className="w-full h-2/3 object-cover"
              />
              <p className="text-center py-4">{person.name}</p>
              <p className="text-center">{person.role}</p>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="p-4 mt-[124px] bg-gray-300 rounded-full ml-4"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Doctors;
