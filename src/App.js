import "./App.css";
import Courses from "./pages/courses/Courses";
import Features from "./pages/features/Features";
import Home from "./pages/home/Home";
import EduTechNavbar from "./pages/Navbar/EduTechNavbar";
import PremiumLearning from "./pages/premiumLearning/PremiumLearning";
import Reviews from "./pages/Reviews/Reviews";
import Footer from "./pages/footer/Footer";


function App() {
  return (
    <div>
      <EduTechNavbar />
      <Home />
      <Features />
      <Courses />
      <PremiumLearning />
      <Reviews />
      <Footer/>
    </div>
  );
}

export default App;
