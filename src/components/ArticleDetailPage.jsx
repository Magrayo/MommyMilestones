import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import BreadCrumbs from "./BreadCrumbs";
import Suggested from "./container/Suggested";

const breadCrumbsData = [
  { name: "Home", link: "/" },
  { name: "Blog", link: "/blog" },
  { name: "Article", link: "/blog/1" },
];
// const postData = [
//   {
//     _id: "1",
//     images: DrL,
//     title: "Pregnancy Nutrition",
//     CreatedAt: "2024-05-18:23:21",
//   },

//   {
//     _id: "2",
//     images: DrL,
//     title: "Pregnancy Nutrition",
//     CreatedAt: "2024-05-18:23:21",
//   },

//   {
//     _id: "3",
//     images: DrL,
//     title: "Pregnancy Nutrition",
//     CreatedAt: "2024-05-18:23:21",
//   },
// ];
const tagsData = [
  "Pregnancy",
  "Nutrition",
  "Lifestyle",
  "Prenatal",
  "Antenal",
  "Post-Natal",
];
const ArticleDetailPage = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/article/${id}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setArticle(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching article: {error}</div>;
  }

  return (
    <section className="container mx-auto max-w-6xl flex flex-col px-5 py-5 lg:flex-row lg:gap-x-5 lg:items-start">
      <article className="flex-1">
        <BreadCrumbs
          data={breadCrumbsData}
          className="text-black opacity-50 text-xs"
          itemClassName={({ name }) =>
            name === "Article" ? "text-yellow" : "text-black"
          }
        />
        <img src={article.image} alt="" className="rounded-xl w-full" />
        <Link
          to="/blog?category=selectedCategory"
          className="text-blue text-sm font-Roboto inline-block mt-4"
        >
          {article.tags}
        </Link>
        <h1 className="text-xl font-medium font-Roboto mt-4 text-black">
          {article.title}
        </h1>
        <div className="mt-4 text-black">
          <p className="leading-7">{article.Body}</p>
        </div>
      </article>
      <Suggested
        header="Latest Article"
        tags={tagsData}
        className="mt-8 lg:max-w-[400px]"
      />
    </section>
  );
};

export default ArticleDetailPage;
