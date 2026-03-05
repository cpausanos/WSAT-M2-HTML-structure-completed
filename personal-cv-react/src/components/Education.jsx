import Card from "./Card";

function Education({ education }) {
  return (
    <Card title="Education">
      <table>
        <thead>
          <tr>
            <th>Program</th>
            <th>Institution</th>
            <th>Year</th>
          </tr>
        </thead>
        <tbody>
          {education.map((item, index) => (
            <tr key={index}>
              <td>{item.program}</td>
              <td>{item.school}</td>
              <td>{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </Card>
  );
}

export default Education;