import React, { useState } from 'react';

function Home() {
    const [message] = useState("Delivering innovative solutions that drive business success.");
    const [services] = useState([
        "🔧 **IT Consulting**: Tailored strategies to optimize your tech infrastructure.",
        "📊 **Data Analytics**: Empowering decisions with actionable insights.",
        "💡 **Product Design**: Crafting user-centered products from concept to launch.",
        "🛠️ **Customer Engagement**: Enhancing user experience to foster loyalty."
    ]);
    const [testimonials] = useState([
        { text: "Their team helped us achieve our goals effectively!", client: "John Doe, CEO of TechCorp" },
        { text: "Outstanding service and commitment to excellence!", client: "Jane Smith, Founder of InnovateX" }
    ]);
    const [contactInfo, setContactInfo] = useState({ name: '', email: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setContactInfo({ ...contactInfo, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(contactInfo);
        setContactInfo({ name: '', email: '' });
    };

    return (
        <div style={{
            padding: '20px',
            backgroundColor: '#f7f9fc',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            color: '#333',
        }}>
            <header style={{ marginBottom: '40px' }}>
                <h1 style={{
                    fontSize: '2.5rem',
                    margin: '0',
                    fontWeight: 'bold',
                    color: '#007bff',
                }}>Welcome to Our Consulting Firm</h1>
                <p style={{
                    fontSize: '1.2rem',
                    margin: '10px 0 20px',
                    maxWidth: '600px',
                    lineHeight: '1.5',
                }}>{message}</p>
                <button style={{
                    padding: '10px 20px',
                    fontSize: '1rem',
                    color: '#fff',
                    backgroundColor: '#007bff',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = '#0056b3'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#007bff'}>
                    Explore Our Services
                </button>
            </header>

            <section style={{
                width: '100%',
                maxWidth: '800px',
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
                marginBottom: '40px',
            }}>
                <h2 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '20px' }}>Our Key Services</h2>
                <ul style={{ listStyleType: 'none', padding: '0' }}>
                    {services.map((service, index) => (
                        <li key={index} style={{ padding: '10px 0', borderBottom: '1px solid #eee' }}>{service}</li>
                    ))}
                </ul>
            </section>

            <section style={{
                width: '100%',
                maxWidth: '800px',
                backgroundColor: '#fff',
                padding: '30px',
                borderRadius: '8px',
                boxShadow: '0 2px 15px rgba(0, 0, 0, 0.1)',
                marginBottom: '40px',
            }}>
                <h2 style={{ color: '#007bff', fontSize: '2rem', marginBottom: '20px' }}>Client Testimonials</h2>
                {testimonials.map((testimonial, index) => (
                    <blockquote key={index} style={{ fontSize: '1rem', color: '#555', marginBottom: '10px', fontStyle: 'italic', borderLeft: '4px solid #007bff', paddingLeft: '10px' }}>
                        "{testimonial.text}" - <cite>{testimonial.client}</cite>
                    </blockquote>
                ))}
            </section>

            <section style={{
                width: '100%',
                maxWidth: '800px',
                backgroundColor: '#007bff',
                color: '#fff',
                padding: '30px',
                borderRadius: '8px',
                textAlign: 'center',
            }}>
                <h2 style={{ fontSize: '1.8rem', marginBottom: '15px' }}>Let's Transform Your Business Together!</h2>
                <p style={{ fontSize: '1rem', marginBottom: '20px' }}>Reach out to discuss how we can assist you.</p>
                <form onSubmit={handleSubmit} style={{ marginBottom: '20px', display: 'flex', justifyContent: 'center' }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={contactInfo.name}
                        onChange={handleChange}
                        required
                        style={{ padding: '10px', marginRight: '10px', flex: '1', maxWidth: '300px' }}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={contactInfo.email}
                        onChange={handleChange}
                        required
                        style={{ padding: '10px', marginRight: '10px', flex: '1', maxWidth: '300px' }}
                    />
                    <button type="submit" style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        color: '#fff',
                        backgroundColor: '#0056b3',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer',
                    }}>
                        Get in Touch
                    </button>
                </form>
            </section>
        </div>
    );
}

export default Home;