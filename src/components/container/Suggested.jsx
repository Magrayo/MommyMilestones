import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Suggested = ({ className, header, tags }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("http://localhost:8000/article")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);
  return (
    <div className={` w-full shadow-md rounded-lg p-4  ${className} `}>
      <h2 className="font-roboto font-medium text-black">{header}</h2>
      <div className="grid gap-y-5 mt-5 lg:grid-col-1">
        {articles.slice(-5).map((article) => (
          <div
            key={article.id}
            className="flex space-x-3 flex-nowrap items-center"
          >
            <img
              className="aspect-square w-[100px] h-[100px] object-cover rounded-lg "
              src={article.image}
              alt="Picture"
            />
            <div className="text-sm font-roboto text-black font-medium pl-10">
              <h3 className="text-sm font-Roboto font-medium lg:text-lg">
                {article.title}
              </h3>
              <span className="text-xs opacity-60">
                {new Date().toLocaleDateString("en-US", {
                  day: "numeric",
                  month: "short",
                  year: "numeric",
                })}
              </span>
            </div>
          </div>
        ))}
      </div>
      <h2 className="font-Roboto text-medium text-black mt-8">Tags</h2>
      <div className="flex flex-wrap gap-x-2 gap-y-2 mt-4">
        {tags.map((item) => (
          <Link
            to="/"
            className="inline-block rounded-md px-3 py-1.5 bg-blue font-Roboto text-xs text-white"
          >
            {item}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Suggested;
