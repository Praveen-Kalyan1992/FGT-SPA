import React from "react";
import Landing from "./pages/Landing";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Projects from "./pages/Projects/Projects";
import Contact from "./pages/Contact/Contact";
import Services from "./pages/Services/Services";
import Team from "./pages/Team/Team";


const App = () => {

  return (
    <>
      <main className="bg-gray-50 text-gray-900 dark:bg-dark2 dark:text-gray-100 min-h-screen">
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
        </Routes>
        <Footer />
      </main>
    </>
  );
};

export default App;
