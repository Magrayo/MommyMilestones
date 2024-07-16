import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = ({ className, title, Description, Date, id, image }) => {
  return (
    <div className={`rounded-xl overflow-hidden shadow-md ${className} `}>
      <img
        src={image}
        alt=""
        className="w-full object-cover object-center h-[200px]"
      />
      <div className="p-5 ">
        <h2 className="font-roboto font-bold text-xl text-blue">{title}</h2>
        <p className="text-black mt-3 text-sm lg:line-clamp-3">{Description}</p>
        <div className="flex justify-between  items-center mt-auto pt-6 ">
          <div className="rounded-[20px] border-color-blue  border-2 border-solid hover:text-white hover:bg-blue pt-1 hover:opacity-80 text-center h-10 w-[120px]">
            <Link to={`/Blog/${id}`} className="text-center">
              Read More
            </Link>
          </div>

          <span className="font-bold italic">{Date}</span>
        </div>
      </div>
    </div>
  );
};

export default ArticleCard;
