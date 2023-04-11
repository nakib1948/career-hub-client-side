import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
import Jobdetails from './Components/Jobdetails';
function App() {
 

  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path='/jobdetails/:id' element={<Jobdetails/>}/>
        
      </Routes>
  )
}

export default App
