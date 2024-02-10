import { Route, Routes } from "react-router-dom";
import "./App.css";
import TopNavBar from "./components/TopNavBar";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Work from "./pages/Work";

function App() {
  return (
    <>
      <TopNavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/AboutMe" element={<AboutMe />} />
        <Route path="/Work" element={<Work />} />
      </Routes>
    </>
  );
}

export default App;
