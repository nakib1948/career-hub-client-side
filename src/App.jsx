import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Jobdetails from './Components/Jobdetails';
import Appliedjob from './Components/Appliedjob';
import Blog from './Components/Blog';
import Statistics from './Components/Statistics';
function App() {
 

  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/jobdetails/:id' element={<Jobdetails/>}/>
        <Route path="/appliedjobs" element={<Appliedjob />}/>
        <Route path="/blog" element={<Blog />}/>
        <Route path="/statistics" element={<Statistics />}/>
      </Routes>
  )
}

export default App
