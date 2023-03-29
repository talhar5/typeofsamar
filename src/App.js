import { useState } from "react";
import Background from "./Background";
import Contact from "./Contact";
import NameSection from "./NameSection";
import NavBtns from "./navBtns";
import Projects from "./Projects";
import Welcome from "./welcome";

export default function App() {
  let [activeSection, setActiveSection] = useState('welcome')
  function handleActiveSection(e) {
    console.log(e.target.value)
    document.querySelector(`[value="${activeSection}"]`).classList.remove("active");
    e.target.classList.add("active")
    setActiveSection(e.target.value);
  }
  return (
    <div>
      <Background>
        <div className="grid-container">
          <div className="name-section">
            <NameSection />
          </div>
          <div className="nav-section">
            <NavBtns handleClick={handleActiveSection} />
          </div>

          <div className="show-section">
            {activeSection === 'welcome' && <Welcome />}
            {activeSection === 'projects' && <Projects />}
            {activeSection === 'contact' && <Contact />}
          </div>
        </div>
      </Background>
    </div>
  );
}
