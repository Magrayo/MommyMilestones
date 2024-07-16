import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import BreadCrumbs from "./BreadCrumbs";
import Navbar from "./Navbar";
import ArticleCard from "./ArticleCard";
import Footer from "./Footer";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/Blog" },
];

const Blog = () => {
  const tags = [
    {
      id: 1,
      name: "All",
    },
    {
      id: 2,
      name: "Pregnancy",
    },
    {
      id: 3,
      name: "Parenting",
    },
    {
      id: 4,
      name: "Nutrition",
    },
    {
      id: 5,
      name: "Motherhood",
    },
    {
      id: 6,
      name: "Lifestyle",
    },
  ];
  const [activeIndex, setActiveIndex] = useState(0);
  const [articles, setArticles] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const tag = searchParams.get("tag");

  useEffect(() => {
    fetch("http://localhost:8000/article")
      .then((response) => response.json())
      .then((data) => setArticles(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  useEffect(() => {
    if (tag) {
      const tagIndex = tags.findIndex((t) => t.name === tag);
      setActiveIndex(tagIndex);
    } else {
      setActiveIndex(0);
    }
  }, [tag]);

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredArticles = articles.filter((article) => {
    const matchesTag =
      activeIndex === 0 || article.tags === tags[activeIndex].name;
    const matchesSearch =
      article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      article.Description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesTag && matchesSearch;
  });
  // const handleSearch = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const filteredArticles = articles.filter(
  //   (article) =>
  //     (activeIndex === 0 || article.tags === tags[activeIndex].name) &&
  //     (article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       article.Description.toLowerCase().includes(searchTerm.toLowerCase()))
  // );

  return (
    <>
      <Navbar />
      <div className="pb-3 xs:py-32 mt-[-100px]">
        <div className="text-center w-full bg-blue lg:h-[300px] h-[339px] py-6">
          <h2 className="text-7xl text-center leading-[26px]   text-white   py-[100px] font-Roboto">
            Blog
          </h2>
          <div className="flex mt-[-50px] justify-center">
            <BreadCrumbs
              data={breadCrumbsData}
              className=" font-bold"
              itemClassName={({ name }) =>
                name === "Blog" ? "text-yellow" : "text-white"
              }
            />
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative mt-[-10px]">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-[#959ead] " />
            <input
              className="placeholder:font-bold font-semibold text-blue rounded-lg pl-12 pr-3 py-3 focus:outline-none lg:w-[500px] xs:w-full shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)]"
              type="text"
              placeholder="Search article"
              value={searchTerm}
              onChange={handleSearch}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  e.preventDefault();
                  handleSearch(e);
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex flex-wrap gap-x-10 justify-center mt-5 lg:mt-[-20px]">
        {tags.map((item, index) => (
          <ul
            onClick={() => setActiveIndex(index)}
            className={`${
              index == activeIndex ? "bg-blue text-white" : null
            } p-1 pb-2 rounded-lg md:rounded-full cursor-pointer hover:scale-110 hover:border-[2px] border-blue transition-all duration-100 ease-in-out`}
          >
            <li>{item.name}</li>
          </ul>
        ))}
      </div>
      <section className=" flex flex-col container mx-auto px-5 py-6">
        <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10 mx-auto ">
          {filteredArticles.map((article) => (
            <ArticleCard
              className="w-full md:w-[calc(50%-20px)] lg:w-[calc(33.33%-20px)]"
              key={article.id}
              id={article.id}
              title={article.title}
              Description={article.Description}
              Date={article.Date}
              image={article.image}
            />
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Blog;
