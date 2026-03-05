import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const skills = [
    "HTML & CSS",
    "JavaScript",
    "Web Design Basics",
    "Python Programming",
    "Git & GitHub Version Control",
    "Problem Solving",
    "Team Collaboration"
  ];

  const education = [
    {
      program: "Bachelor of Science in Information Technology",
      school: "USTP – CDO Campus",
      year: "2023-2028"
    },
    {
      program: "Senior High School",
      school: "Liceo de Cagayan University",
      year: "2023"
    },
    {
      program: "Junior High School",
      school: "Bulua National High School",
      year: "2021"
    },
    {
      program: "Elementary School",
      school: "Bulua Central School",
      year: "2017"
    }
  ];

  return (
    <div className={darkMode ? "dark-mode" : ""}>
      <button onClick={() => setDarkMode(!darkMode)}>
        Toggle Dark Mode
      </button>
      <Header />
      <About />
      <Skills skills={skills} />
      <Education education={education} />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;