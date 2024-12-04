import React, { useState } from 'react';
import { FaHistory, FaHandshake, FaServicestack, FaQuoteLeft, FaTrophy, FaBullseye } from 'react-icons/fa'; // Import icons

function About() {
    const [info] = useState("Our company has been providing top-notch services since 1990.");
    const [showSections, setShowSections] = useState({
        history: false,
        values: false,
        services: false,
        testimonials: false,
        achievements: false,
        goals: false,
    });

    const toggleSection = (section) => {
        setShowSections((prev) => ({ ...prev, [section]: !prev[section] }));
    };

    const sectionsContent = {
        history: "Founded in 1990, we have built a reputation for excellence in our industry. Over the years, we have adapted to changing market demands and technological advancements, ensuring that we remain at the forefront of innovation.",
        mission: "Our mission is to empower businesses by providing high-quality services that enhance their operational efficiency and drive growth. We strive to be a trusted partner for our clients, helping them achieve their goals.",
        values: "We value integrity, innovation, and customer satisfaction. Our commitment to these principles ensures that we deliver exceptional service and build lasting relationships with our clients.",
        services: "We offer a comprehensive range of services including web development, digital marketing, IT consultancy, and custom software solutions. Our team of experts is dedicated to delivering tailored solutions that meet the unique needs of each client.",
        testimonials: "Our clients say: 'Exceptional service! The team went above and beyond to meet our needs.' - Client A, 'Highly recommend! Their expertise made a significant difference in our project.' - Client B.",
        achievements: "We have received multiple awards for our innovative solutions and outstanding customer service, including the Best Service Provider Award in 2022 and the Innovation Excellence Award in 2023.",
        goals: "Our future goals include expanding our services internationally, investing in new technologies, and continuously improving our offerings to better serve our clients.",
    };

    return (
        <div style={{ padding: '40px', background: '#f8f9fa', borderRadius: '8px', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)', maxWidth: '800px', margin: 'auto', textAlign: 'left' }}>
            <h1 style={{ color: '#2c3e50', fontSize: '2.5rem', fontWeight: 'bold', marginBottom: '20px' }}>About Us</h1>
            <p style={{ fontSize: '18px', marginBottom: '20px', lineHeight: '1.6' }}>{info}</p>
            <h2 style={{ color: '#34495e', fontSize: '2rem', fontWeight: '600', margin: '20px 0' }}>Our Mission</h2>
            <p style={{ fontSize: '16px', lineHeight: '1.5', marginBottom: '30px' }}>{sectionsContent.mission}</p>

            {Object.keys(sectionsContent).map((section) => (
                section !== 'mission' && (
                    <div key={section} style={{ marginTop: '20px', transition: 'all 0.3s ease', position: 'relative', padding: '10px', borderRadius: '5px', background: '#ffffff', boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)' }}>
                        {/* Icon for each section */}
                        <div style={{ fontSize: '24px', position: 'absolute', left: '-40px', top: '10px', color: '#2980b9' }}>
                            {section === 'history' && <FaHistory />}
                            {section === 'values' && <FaHandshake />}
                            {section === 'services' && <FaServicestack />}
                            {section === 'testimonials' && <FaQuoteLeft />}
                            {section === 'achievements' && <FaTrophy />}
                            {section === 'goals' && <FaBullseye />}
                        </div>
                        <button 
                            onClick={() => toggleSection(section)} 
                            style={{
                                padding: '10px 20px',
                                fontSize: '16px',
                                color: '#fff',
                                backgroundColor: '#2980b9',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer',
                                transition: 'background-color 0.3s, transform 0.2s',
                                boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
                                marginLeft: '60px',
                                marginBottom: '10px',
                            }}
                            onMouseEnter={(e) => {
                                e.target.style.backgroundColor = '#3498db';
                                e.target.style.transform = 'scale(1.05)';
                            }}
                            onMouseLeave={(e) => {
                                e.target.style.backgroundColor = '#2980b9';
                                e.target.style.transform = 'scale(1)';
                            }}
                        >
                            {showSections[section] ? `Hide ${section.charAt(0).toUpperCase() + section.slice(1)}` : `Show ${section.charAt(0).toUpperCase() + section.slice(1)}`}
                        </button>
                        {showSections[section] && (
                            <p style={{ fontSize: '16px', marginTop: '10px', lineHeight: '1.5', padding: '10px', backgroundColor: '#f1f1f1', borderRadius: '5px', boxShadow: '0 2px 5px rgba(0, 0, 0, 0.1)', marginLeft: '60px' }}>
                                {sectionsContent[section]}
                            </p>
                        )}
                    </div>
                )
            ))}

            <div style={{ marginTop: '40px', textAlign: 'center' }}>
                <h2 style={{ color: '#34495e', fontSize: '1.5rem', fontWeight: '600' }}>Get in Touch</h2>
                <p style={{ fontSize: '16px', marginBottom: '20px' }}>We'd love to hear from you! Reach out with any questions or inquiries.</p>
                <button style={{
                    padding: '10px 20px',
                    fontSize: '16px',
                    color: '#fff',
                    backgroundColor: '#27ae60',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                }} onMouseEnter={(e) => e.target.style.backgroundColor = '#2ecc71'}
                onMouseLeave={(e) => e.target.style.backgroundColor = '#27ae60'}>
                    Contact Us
                </button>
            </div>
        </div>
    );
}

export default About;