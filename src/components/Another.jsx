import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import ArticleCard from "./ArticleCard";

const Another = () => {
  const [articles, setArticles] = useState([]);
  const [featuredArticle, setFeaturedArticle] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/article")
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          setFeaturedArticle(data[1]);
          setArticles(data);
        }
      })
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <section className="flex flex-col container px-10 gap-y-5 py-10">
      {featuredArticle && (
        <div className="flex flex-col lg:flex-row w-full justify-center mb-5 lg:mx-10">
          <div className="lg:w-1/2 mx-auto mb-5 lg:mx-5 w-full rounded-lg">
            <img src={featuredArticle.image} alt="" className="rounded-lg" />
          </div>
          <div className="lg:w-1/2 w-full mx-10">
            <h4 className="text-left font-bold text-xl text-blue ">
              <span className="inline-block border-b-2 w-min-10 mb-1.5 mr-3 w-10 border-blue"></span>
              Featured Article
            </h4>
            <div className="flex flex-col lg:flex-row lg:justify-between mt-5">
              <h1 className="lg:mb-10 mb-5 font-Roboto font-bold lg:text-xl">
                {featuredArticle.title}
              </h1>
              <h1 className="mb-3">{featuredArticle.Date}</h1>
            </div>
            <p className="line-clamp-[5] font-News">{featuredArticle.Body}</p>
            <h3 className="flex justify-end text-blue text-xl l">
              {featuredArticle.tags}
            </h3>
          </div>
        </div>
        // <ArticleCard
        //   className="w-full lg:w-1/2 mb-5"
        //   key={featuredArticle.id}
        //   id={featuredArticle.id}
        //   title={featuredArticle.title}
        //   Description={featuredArticle.Description}
        //   Date={featuredArticle.Date}
        //   date="02 May"
        //   image={featuredArticle.image}
        // />
      )}
      <div className="flex flex-wrap md:gap-x-5 gap-y-5 pb-10">
        {/* <ArticleCard
          className="w-full md:w-[calc(50%-20px)] lg:w-[calc(24%)]"
          to="/Blog/:id"
        />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(24%)]" />
        <ArticleCard className="w-full md:w-[calc(50%-20px)] lg:w-[calc(24%)]" /> */}
        {articles.slice(-6).map((article) => (
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
      <Link to="/Blog">
        <button className="mx-auto flex items-center gap-x-2 font-bold text-blue border-2 border-color-blue px-6 py-3 rounded-lg">
          <span>More articles</span>
          <FaArrowRight className="w-3 h-3" />
        </button>
      </Link>
    </section>
  );
};

export default Another;
