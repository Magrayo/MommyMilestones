import React from "react";
import Home from "./components/Home";
import Blog from "./components/Blog";
import About from "./components/About";
import { Routes, Route } from "react-router-dom";
import Meet from "./components/Meet";
import ArticleDetailPage from "./components/ArticleDetailPage";
import Mabot from "./components/Mabot";

const App = () => {
  return (
    <Routes>
      <Route index path="/" element={<Home />} />
      <Route index path="/About" element={<About />} />
      <Route index path="/Blog" element={<Blog />} />
      <Route index path="/Blog/:id" element={<ArticleDetailPage />} />
      <Route index path="/Meet" element={<Meet />} />
      <Route index path="/Mabot" element={<Mabot />} />
    </Routes>
  );
};

export default App;
