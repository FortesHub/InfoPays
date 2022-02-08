import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Notfound from "./Notfound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
