import React from "react";
import { SiChatbot } from "react-icons/si";
import { Link } from "react-router-dom";

const BottomBar = () => {
  return (
    <div className="fixed bottom-5 right-10 ">
      <Link to="/">
        {" "}
        <div className="w-[50px] h-[50px] rounded-full bg-blue relative">
          <div className=" absolute left-4 top-4 ">
            <SiChatbot className=" text-white  " />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default BottomBar;
