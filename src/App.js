"use client";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import WhyUs from "./components/WhyUs";

import { ErrorBoundary } from "react-error-boundary";

function App() {
  return (
    <>
      <Contact />
      <Header />
      <Hero />
      <ErrorBoundary fallback={<p>Something went wrong</p>}>
        <WhyUs />
      </ErrorBoundary>
      <Footer />
    </>
  );
}

export default App;
