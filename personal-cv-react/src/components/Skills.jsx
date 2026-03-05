import { useState } from "react";

function Skills({ skills }) {
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
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </section>
      )}
    </section>
  );
}

export default Skills;