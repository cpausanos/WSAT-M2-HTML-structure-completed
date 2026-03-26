import { useState } from "react";
import Card from "./Card";

function Skills({ skills }) {
  const [visible, setVisible] = useState(true);

  const toggleSkills = () => setVisible(!visible);

  return (
    <section className="centered-content">

      <button onClick={toggleSkills}>
        {visible ? "Hide Skills" : "Show Skills"}
      </button>

      {visible && (
        <Card title="Skills">
          <ul>
            {skills.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </Card>
      )}

    </section>
  );
}

export default Skills;