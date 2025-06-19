import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Thoughts from "./pages/Thoughts";
import "./App.css";

function App() {
  return (
    <>
      <div className="container pt-2 sticky top-0 z-50 bg-[#242424]">
        <nav className="flex justify-center text-2xl">
          <div className="relative group hover:-translate-y-0.5 transition-transform duration-500">
            <Link to="/" className="relative z-10 text-[#6B8DAF] font-semibold px-2 hover:text-[#e6e1da]">
              Home
            </Link>
            <span className="absolute left-1/2 top-1/2 h-full w-0 -translate-x-1/2 -translate-y-1/2 bg-[#EAC4C3] opacity-20 transition-all duration-500 group-hover:w-full rounded" />
          </div>|
          <div className="relative group hover:-translate-y-0.5 transition-transform duration-500">
            <Link to="/about" className="relative z-10 text-[#F3CD89] font-semibold px-2 hover:text-[#e6e1da]">
              About
            </Link>
            <span className="absolute left-1/2 top-1/2 h-full w-0 -translate-x-1/2 -translate-y-1/2 bg-[#EAC4C3] opacity-30 transition-all duration-500 group-hover:w-full rounded" />
          </div>|
          <div className="relative group hover:-translate-y-0.5 transition-transform duration-500">
            <Link to="/thoughts" className="relative z-10 text-[#6B8DAF] font-semibold px-2 hover:text-[#e6e1da]">
              Thoughts
            </Link>
            <span className="absolute left-1/2 top-1/2 h-full w-0 -translate-x-1/2 -translate-y-1/2 bg-[#EAC4C3] opacity-20 transition-all duration-500 group-hover:w-full rounded" />
          </div>|
          <div className="relative group hover:-translate-y-0.5 transition-transform duration-500">
            <Link to="/contact" className="relative z-10 text-[#F3CD89] font-semibold px-2 hover:text-[#e6e1da]">
              Contact
            </Link>
            <span className="absolute left-1/2 top-1/2 h-full w-0 -translate-x-1/2 -translate-y-1/2 bg-[#EAC4C3] opacity-30 transition-all duration-500 group-hover:w-full rounded" />
          </div>

          {/* <Link to="/" className="text-[#6B8DAF] relative z-10">Home</Link> |{" "}
          <Link to="/about" className="text-[#F3CD89] z-10">About</Link> |{" "}
          <Link to="/thoughts" className="text-[#6B8DAF] z-10">Thoughts</Link> |{" "}
          <Link to="/contact" className="text-[#F3CD89] z-10">Contact</Link> */}
        </nav>
        <hr className="bg-[#EAC4C3]/70 my-3 h-[1px] border-0 rounded"/>
        {/* <hr className="bg-slate-50/30 my-3 h-[1px] border-0 rounded"/> */}
      </div>

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