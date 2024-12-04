import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Name: ${formData.name}, Email: ${formData.email}, Message: ${formData.message}`);
    setFormData({ name: '', email: '', message: '' });
    setSubmitted(true);
  };

  return (
    <div style={{
      padding: '40px',
      backgroundColor: '#f9f9f9',
      borderRadius: '8px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      maxWidth: '600px',
      margin: 'auto',
      textAlign: 'center'
    }}>
      <h1 style={{ color: '#333', marginBottom: '20px', fontWeight: '700', fontSize: '2.5rem' }}>Contact Us</h1>
      {submitted && (
        <div style={{
          marginBottom: '20px',
          padding: '15px',
          backgroundColor: '#d4edda',
          color: '#155724',
          border: '1px solid #c3e6cb',
          borderRadius: '5px',
        }}>
          Thank you for your message! We will get back to you shortly.
        </div>
      )}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          style={{
            padding: '15px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            width: '100%',
            maxWidth: '400px'
          }}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange}
          style={{
            padding: '15px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            width: '100%',
            maxWidth: '400px'
          }}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          style={{
            padding: '15px',
            margin: '10px 0',
            border: '1px solid #ccc',
            borderRadius: '5px',
            fontSize: '16px',
            minHeight: '120px',
            width: '100%',
            maxWidth: '400px'
          }}
          required
        />
        <button
          type="submit"
          style={{
            padding: '15px 30px',
            margin: '10px 0',
            backgroundColor: '#007bff',
            color: '#fff',
            border: 'none',
            borderRadius: '5px',
            fontSize: '16px',
            cursor: 'pointer',
            transition: 'background-color 0.3s, transform 0.3s',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#0056b3';
            e.target.style.transform = 'scale(1.05)';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#007bff';
            e.target.style.transform = 'scale(1)';
          }}
        >
          Submit
        </button>
      </form>
      <p style={{ marginTop: '20px', color: '#555', fontSize: '1rem' }}>
        We’ll respond to your inquiry as soon as possible. You can also reach us at <strong>info@company.com</strong> or call us at <strong>(123) 456-7890</strong>.
      </p>
    </div>
  );
}

export default Contact;