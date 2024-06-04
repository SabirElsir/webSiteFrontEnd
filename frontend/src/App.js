import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PrivateVideoWithArticle from "./components/Video";
import Grid from "./components/Grid";
import Services from "./components/Services";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

import Carousel from "./components/Slider";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Router>
        <NavBar />
        <switch>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" component={Services} />
            <Route path="/contact" element={<Contact />} />
          </Routes>

          <Carousel />
          <Grid />

          <Footer />
        </switch>
      </Router>
    </>
  );
}

export default App;
