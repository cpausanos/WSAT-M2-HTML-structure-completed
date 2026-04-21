import { useEffect, useState } from "react";

function ContactList() {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    fetch("http://localhost/cv-api/getContacts.php")
      .then(res => res.json())
      .then(data => setContacts(data));
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Saved Contacts</h2>
      <table style={{ margin: "0 auto", borderCollapse: "collapse", width: "80%" }}>
        <thead>
          <tr style={{ backgroundColor: "#1a5276", color: "white" }}>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Name</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Email</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Message</th>
            <th style={{ padding: "10px", border: "1px solid #ccc" }}>Date</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map(contact => (
            <tr key={contact.id}>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{contact.name}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{contact.email}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{contact.message}</td>
              <td style={{ padding: "10px", border: "1px solid #ccc" }}>{contact.created_at}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ContactList;