import { Route, Routes } from "react-router-dom";

// Pages
import TopNavBar from "./components/TopNavBar";
import Footer from "./components/Footer";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

// Pages Work
import StealthStories from "./pages/pagesWork/StealthStories";

function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/Work" element={<Work />} />
        <Route path="/portfolio/AboutMe" element={<AboutMe />} />
        <Route path="/portfolio/Contact" element={<Contact />} />
        <Route path="/portfolio/Work/StealthStories" element={<StealthStories />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
