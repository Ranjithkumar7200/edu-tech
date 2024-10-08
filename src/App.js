import "./App.css";
import AboutUs from "./pages/aboutUs/AboutUs";
import Community from "./pages/community/Community";
import ContactUs from "./pages/contactUs/ContactUs";
import Courses from "./pages/courses/Courses";
import LandingPage from "./pages/LandingPage/LandingPage";
import EduTechNavbar from "./pages/Navbar/EduTechNavbar";
import Footer from "./pages/footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CourseDetails from "./pages/courses/CourseDetails/CourseDetails";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <EduTechNavbar />

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
