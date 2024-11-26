import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleChange}
        style={{ display: 'block', margin: '10px 0', padding: '10px', border: '1px solid #ccc' }}
      />
      <button type="submit" style={{ padding: '10px 15px', backgroundColor: '#007bff', color: '#fff' }}>Submit</button>
    </form>
  );
}

export default Contact;