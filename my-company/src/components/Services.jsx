import React, { useState } from 'react';

function Services() {
    const [services] = useState([
        {
            title: "Technology Consulting",
            description: "Expert guidance to help you leverage technology for business growth.",
            icon: "🔧" // Replace with actual icons or images as needed
        },
        {
            title: "Market Analysis",
            description: "In-depth market research to inform your business strategies.",
            icon: "📊"
        },
        {
            title: "Product Development",
            description: "From idea to launch, we help you develop innovative products.",
            icon: "🚀"
        },
        {
            title: "Customer Experience",
            description: "Improving customer satisfaction through tailored solutions.",
            icon: "😊"
        },
        {
            title: "Digital Marketing",
            description: "Strategies to enhance your online presence and reach your audience.",
            icon: "📈"
        }
    ]);

    return (
        <div style={{
            padding: '40px',
            backgroundColor: '#f9f9f9',
            borderRadius: '8px',
            boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
            maxWidth: '900px',
            margin: 'auto',
            textAlign: 'center'
        }}>
            <h1 style={{ color: '#333', fontSize: '2.5rem', marginBottom: '30px', fontWeight: '700' }}>Our Services</h1>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
                {services.map((service, index) => (
                    <li key={index} style={{
                        backgroundColor: '#fff',
                        borderRadius: '5px',
                        padding: '20px',
                        margin: '15px 0',
                        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                    }} 
                    onMouseEnter={(e) => {
                        e.currentTarget.style.transform = 'scale(1.05)';
                        e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.2)';
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.transform = 'scale(1)';
                        e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.1)';
                    }}>
                        <h2 style={{ margin: '0 0 10px', fontSize: '1.8rem', color: '#007bff', fontWeight: '600' }}>
                            {service.icon} {service.title}
                        </h2>
                        <p style={{ fontSize: '16px', color: '#555', lineHeight: '1.5' }}>{service.description}</p>
                    </li>
                ))}
            </ul>
            <button style={{
                marginTop: '30px',
                padding: '15px 30px',
                fontSize: '1.2rem',
                color: '#fff',
                backgroundColor: '#007bff',
                border: 'none',
                borderRadius: '5px',
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
            }}>
                Get a Quote
            </button>
        </div>
    );
}

export default Services;