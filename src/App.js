import "./App.css";
import AboutUs from "./pages/aboutUs/AboutUs";
import Community from "./pages/community/Community";
import Interviewexpo from "./pages/Interviewexpo/Interviewexpo";
import ContactUs from "./pages/contactUs/ContactUs";
import Courses from "./pages/courses/Courses";
import LandingPage from "./pages/LandingPage/LandingPage";
import HomeNavbar from "./pages/Navbar/HomeNavbar";
import Footer from "./pages/footer/Footer";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import CourseDetails from "./pages/courses/CourseDetails/CourseDetails";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Platforms from "./pages/Platform/Platforms";
import InterviewQues from "./pages/Interviewexpo/SpecificInterview/InterviewQues";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <HomeNavbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/course-details" element={<CourseDetails />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/community" element={<Community />} />
        <Route path="/interviewexpo" element={<Interviewexpo />} />
        <Route path="/interview" element={<Interviewexpo />} />
        <Route path="/interview-questions/:company" element={<InterviewQues />} />
        <Route path="/platforms" element={<Platforms />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
