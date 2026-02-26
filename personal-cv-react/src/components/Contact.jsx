import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSend = (e) => {
    e.preventDefault();

    // Check if any field is empty
    if (!name || !email || !message) {
      alert("Please fill in all required fields.");
      return;
    }

    // All fields filled — show success
    alert("Form submitted successfully!");

    // Clear the fields after sending
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="card">
      <h2>Contact Me</h2>

      <form onSubmit={handleSend}>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <textarea
          placeholder="Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>

        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;