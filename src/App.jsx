import { useState } from 'react'
import { Routes, Route, Link } from "react-router-dom";
import CuratedMenu from './components/CuratedMenu';
import Home from './components/Home';
import './App.css';
import Navbar from "./components/Navbar";




function App() {
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
