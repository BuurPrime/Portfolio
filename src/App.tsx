import { Route, Routes } from "react-router-dom";
import TopNavBar from "./components/TopNavBar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/portfolio/" element={<Home />} />
        <Route path="/portfolio/Work" element={<Work />} />
        <Route path="/portfolio/AboutMe" element={<AboutMe />} />
        <Route path="/portfolio/Contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
