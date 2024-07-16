import React from "react";
import { Link } from "react-router-dom";

const BreadCrumbs = ({ data, className, itemClassName }) => {
  return (
    <div
      className={`flex items-center py-4 overflow-x-auto whitespace-nowrap ${className}`}
    >
      {data.map((item, index) => (
        <div className={` ${itemClassName(item)}`} key={index}>
          <Link to={item.link}>{item.name}</Link>
          {index !== data.length - 1 && <span className="px-3">/</span>}
        </div>
      ))}
    </div>
  );
};

export default BreadCrumbs;
