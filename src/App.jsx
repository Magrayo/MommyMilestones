import React from 'react'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import { Routes, Route } from 'react-router-dom';

const App =() => {
  return (
   
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/About" element={<Blog  />} />

    </Routes>
    
  )
}

export default App
