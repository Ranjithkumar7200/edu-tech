import "./App.css";
import Courses from "./pages/courses/Courses";
import EduTechNavbar from "./pages/Navbar/EduTechNavbar";

function App() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <EduTechNavbar />
      <Courses />
    </div>
  );
}

export default App;
