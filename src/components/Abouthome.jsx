import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import Doctor from "../images/Doctor.jpg";

const Abouthome = () => {
  return (
    <section className="flex flex-col px-6 py-20 lg:pr-0 lg:flex-row w-full">
      <div className="  lg:w-1/2">
        <img src={Doctor} alt="" className="h-[600px]" />
      </div>
      <div className="mt-20 mx-auto lg:pr-6 lg:w-1/2">
        <h4 className="text-left font-bold text-xl text-blue ">
          {" "}
          <span className="inline-block border-b-2 w-min-10 mb-1.5 mr-3 w-10 border-blue"></span>
          About us
        </h4>

        <h2 className="text-3xl my-7 lg:text-4xl font-roboto font-bold">
          Your Journey with Mommy Milestones
        </h2>
        <p className="text-xl pt-5 ">
          At Mommy Milestones, we are a team of dedicated front-end developers
          and creative professionals committed to providing a user-friendly
          platform filled with relevant articles and resources for moms at every
          stage of their journey
        </p>
        <p className="text-sm font-News mt-10">
          Mommy Milestones' goal is to encourage and assist mothers by providing
          useful and engaging content that celebrates the milestones of
          motherhood. We believe in providing a loving environment in which
          mothers can discover guidance and inspiration.
        </p>
        <div className="flex justify-center lg:justify-start mt-10">
          <Link to="/About">
            <button className="mx-auto flex items-center gap-x-2 font-bold text-blue border-2 border-color-blue px-6 py-3 rounded-lg hover:bg-blue hover:text-white hover:opacity-70 hover:transition-all hover:ease-in-out hover:duration-1000">
              <span>About us</span>
              <FaArrowRight className="w-3 h-3" />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Abouthome;
