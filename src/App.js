
import React from 'react';
import Menu from "./portfolio_component/Menu";
import Home from "./portfolio_component/Home";
import About from "./portfolio_component/About";
import Contact from "./portfolio_component/Contact";
import Footer from "./portfolio_component/Footer";
import Skill from "./portfolio_component/Skill"
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Menu /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="/Skill" element = {<Skill/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

