import { useState } from "react";
import viteLogo from "/vite.svg";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import "./App.css";
import Thoughts from "./pages/Thoughts";

function App() {
  return (
    <>
      <nav style={{ marginBottom: "20px" }}>
        <Link to="/" className="text-[#6B8DAF]">Home</Link> |{" "}
        <Link to="/about" className="text-[#F3CD89]">About</Link> |{" "}
        <Link to="/thoughts" className="text-[#6B8DAF]">Thoughts</Link> |{" "}
        <Link to="/contact" className="text-[#F3CD89]">Contact</Link>
      </nav>
      <hr className="bg-[#EAC4C3]/70 my-3 h-[1px] border-0 rounded"/>
      {/* <hr className="bg-slate-50/30 my-3 h-[1px] border-0 rounded"/> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/thoughts" element={<Thoughts />} />
      </Routes>
    </>
  );
}

export default App;
