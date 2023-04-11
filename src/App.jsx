import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Components/Home';
function App() {
 

  return (
      <Routes>
        <Route path="/" element={<Home />}/>
        
        
      </Routes>
  )
}

export default App
