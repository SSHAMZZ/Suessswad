import { useState } from 'react'
import { useEffect } from "react";

import { useNavigate, Routes, Route, Link } from "react-router-dom";
import CuratedMenu from './components/CuratedMenu';
import Home from './components/Home';
import './App.css';
import Navbar from "./components/Navbar";




function App() {
   const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const redirect = params.get("redirect");
    if (redirect) {
      navigate(redirect);
    }
  }, [navigate]);

  return (
     <div>
      <Navbar />
       <div className="padding-top"> 
      <Routes>
        <Route path="/" element={<h1 className="p-6 text-2xl">{<Home/>}</h1>} />
        <Route path="/Curated-menu" element={<CuratedMenu />} />
      </Routes>
        </div>
    </div>
  
  );
}

export default App;
