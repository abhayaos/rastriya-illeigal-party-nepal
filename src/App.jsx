import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import WhatWeWant from "./pages/WhatWeWant";
import Movement from "./pages/Movement";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <HelmetProvider>
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/what-we-want" element={<WhatWeWant />} />
        <Route path="/movement" element={<Movement />} />

        {/* 404 page */}
        <Route path="*" element={<PageNotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
