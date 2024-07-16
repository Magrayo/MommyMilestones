import React from "react";
// import hero from "../images/hero.png";
const Articlespage = () => {
  return (
    <section className="grid  grid-cols-2 mt-10 px-10 ">
      <div className="w-1/2">
        {" "}
        <img src={hero} alt="" className="" />
      </div>
      <div className="w-1/2">
        <h4>pregnancy</h4>
        <h2>Prenancy journey</h2>
        <p className="line-clamp-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet magnam
          rerum pariatur aperiam harum nulla ducimus ab sequi, necessitatibus
          repellendus dignissimos, vitae asperiores, deserunt deleniti incidunt
          itaque autem dolores cupiditate! Lorem ipsum dolor sit amet
          consectetur, adipisicing elit. Tenetur quae, magnam minus sed odio ab
          ratione quasi laboriosam molestiae nobis ut labore vel. Nulla placeat
          sequi, ex doloremque soluta doloribus?
        </p>
      </div>
    </section>
  );
};

export default Articlespage;
