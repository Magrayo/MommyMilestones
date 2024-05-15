import React from 'react'
import Home from './components/Home'
import Blog from './components/Blog'
import About from './components/About'
import { Routes, Route } from 'react-router-dom';
import Meet from './components/Meet';


const App =() => {
  return (
   
   <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/About" element={<Blog  />} />
      <Route path="/Meet"  element={<Meet />} />
    </Routes>
    
  )
}

export default App
