import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  StarsCanvas,
  Tech,
  Works,
} from "./components";
import { useState } from "react";
import SpanningLoader from "./components/SpanningLoader";

const App = () => {
  const [isFullyLoaded, setIsFullyLoaded] = useState(false);

  window.addEventListener("load", (event) => {
    console.log("page is fully loaded");
    setIsFullyLoaded(true);
  });

  return (
    <BrowserRouter>
      {isFullyLoaded ? (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeate bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
            <StarsCanvas />
          </div>
        </div>
      ) : (
        <div className="relative z-0 bg-primary">
          <div className="bg-hero-pattern bg-cover bg-no-repeate bg-center">
            <Navbar />
            <Hero />
          </div>
          <About />
          <Experience />
          <SpanningLoader />
          <Works />
          <Feedbacks />
          <div className="relative z-0">
            <Contact />
          </div>
        </div>
      )}
    </BrowserRouter>
  );
};

export default App;
