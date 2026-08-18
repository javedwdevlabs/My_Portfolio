import { useEffect } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Hero from "./sections/Hero";
import About from "./sections/About";
import Skills from "./sections/Skills";
import Projects from "./sections/Projects";
import Experience from "./sections/Experience";
import Education from "./sections/Education";
import Contact from "./sections/Contact";

import AllProjects from "./sections/projects/AllProjects";
import EDAAll from "./sections/projects/EDA/all";
import UBER_EDA from "./sections/projects/EDA/Uber-Data-Analysis";

import MLAll from "./sections/projects/ML/All";
import MentalHealthScore from "./sections/projects/ML/MentalHealthScore";


/* =========================
   Home Page
========================= */

function Home() {
  const location = useLocation();

  useEffect(() => {
    // If user is on the actual home page
    if (location.pathname === "/") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

      return;
    }

    // Get section name from URL
    // /about      -> about
    // /skills     -> skills
    // /projects   -> projects
    // /contact    -> contact
    const sectionName = location.pathname.replace("/", "");

    const section = document.getElementById(sectionName);

    if (section) {
      setTimeout(() => {
        section.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 100);
    }
  }, [location.pathname]);

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Education />
      <Contact />
    </>
  );
}


/* =========================
   Main App
========================= */

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* =========================
            Home
        ========================= */}

        <Route
          path="/"
          element={<Home />}
        />


        {/* =========================
            Home Sections
        ========================= */}

        <Route
          path="/about"
          element={<Home />}
        />

        <Route
          path="/skills"
          element={<Home />}
        />

        <Route
          path="/projects"
          element={<Home />}
        />

        <Route
          path="/contact"
          element={<Home />}
        />


        {/* =========================
            All Projects
        ========================= */}

        <Route
          path="/all-projects"
          element={<AllProjects />}
        />


        {/* =========================
            Data Analysis Projects
        ========================= */}

        <Route
          path="/eda-all-projects"
          element={<EDAAll />}
        />

        <Route
          path="/uber-eda"
          element={<UBER_EDA />}
        />


        {/* =========================
            Machine Learning Projects
        ========================= */}

        <Route
          path="/ml-all-projects"
          element={<MLAll />}
        />

        <Route
          path="/mental_health_score_explain"
          element={<MentalHealthScore />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;