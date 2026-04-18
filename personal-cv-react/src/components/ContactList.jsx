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
      <ul style={{ listStyle: "none", padding: 0 }}>
        {contacts.map(contact => (
          <li key={contact.id}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ContactList;