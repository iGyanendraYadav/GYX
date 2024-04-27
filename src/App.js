"use client";
import Footer from "./components/Footer";
import Header from "./components/Header";

import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Vlogs from "./components/Vlogs";
import Gallery from "./components/Gallery";
import Social from "./components/Social";
import Reels from "./components/Reels";
import About from "./components/About";
import Error from "./components/Error";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/vlogs" element={<Vlogs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/social" element={<Social />} />
          <Route path="/reels" element={<Reels />} />
          <Route path="/about" element={<About />} />
          <Route path="/*" element={<Error />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
