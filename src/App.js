import React from "react";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Home from "./components/home";
import About from "./components/about";
import Events from "./components/events";
import Contact from "./components/contact";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />

          <Route path="/about" element={<About />} />

          <Route path="/events" element={<Events />} />

          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
