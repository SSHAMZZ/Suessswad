import { useState } from 'react'
import { useEffect } from "react";

import { useNavigate, Routes, Route, Link } from "react-router-dom";
import CuratedMenu from './components/CuratedMenu';
import Home from './components/Home';
import './App.css';
import Navbar from "./components/Navbar";




function App() {
   const navigate = useNavigate(); // Hook from react-router-dom to programmatically change the current route.

  useEffect(() => {
    const params = new URLSearchParams(window.location.search); // Get the updated query parameters from the URL. Example : ?redirect=/Curated-menu
    const redirect = params.get("redirect"); // Extract the value of the "redirect" parameter from the URL. Example: /Curated-menu
    if (redirect) {
      navigate(redirect); // If a redirect path is found, navigate to that path using the navigate function.
    }
  }, [navigate]); 

  return (
     <div>
      <Navbar />
       <div className="padding-top"> 
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Curated-menu" element={<CuratedMenu />} />
      </Routes>
        </div>
    </div>
  
  );
}

export default App;
