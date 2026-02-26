import { useState } from "react";

function Skills() {
  const [visible, setVisible] = useState(true);

  const toggleSkills = () => setVisible(!visible);

  return (
    <section className="card centered-content">

      <button onClick={toggleSkills}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>

      {visible && (
        <section className="card" id="skillsSection">
          <h2>Skills</h2>
          <ul>
            <li>HTML & CSS</li>
            <li>JavaScript</li>
            <li>Web Design Basics</li>
            <li>Python Programming</li>
            <li>Git & GitHub Version Control</li>
            <li>Problem Solving</li>
            <li>Team Collaboration</li>
          </ul>
        </section>
      )}
    </section>
  );
}

export default Skills;