import "./App.css";
import AboutUs from "./pages/aboutUs/AboutUs";
import Community from "./pages/community/Community";
import ContactUs from "./pages/contactUs/ContactUs";
import Courses from "./pages/courses/Courses";
import LandingPage from "./pages/LandingPage/LandingPage";
import EduTechNavbar from "./pages/Navbar/EduTechNavbar";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <EduTechNavbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/community" element={<Community />} />
      </Routes>
    </Router>
  );
}

export default App;
